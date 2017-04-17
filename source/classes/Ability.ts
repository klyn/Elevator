
import { expect } from 'chai'
import { StateMutations } from './StateMutations'
import { ActionList } from './ActionList'

/**
 * Abilities are the machine functions. At minimum
 * they need a unique ID called 'what' and a function
 * called 'how' to be constructed.
 *
 * @classdesc The 'Ability' to perform a function.
 */
export class Ability {

	// --------------------------------------------------------
	// Properties
	// --------------------------------------------------------

	/**
	 * The unique ID for this function.
	 * @type 	{ string }
	 */
	private _what: string;

	/**
	 * The main function to be performed with this 'ability'.
	 * @type 	{ Function }
	 */
	private _how: Function;

	/**
	 * The pre-requirements for this function to run.
	 * We will store key/value paris in this object,
	 * which are machine's state keys and their required
	 * values.
	 * @type 	{ Object }
	 */
	private _needs: any = {};

	/**
	 * The changes that should be applied to the state
	 * after the function execution is done.
	 * @type 	{ StateMutations }
	 */
	private stateMutations: StateMutations;

	/**
	 * The name of the 'other' abilities that are callable
	 * via post-performance method.
	 * @type 	{ ActionList }
	 */
	private actions: ActionList;

	// --------------------------------------------------------
	// Methods
	// --------------------------------------------------------

	/**
	 * @param	{ string }		what - Name to reference this ability.
	 * @param	{ Function }	how - Function of this ability.
	 * @param	{ StateMutations }	stateMutations - To handle state-mutation operations.
	 * @param	{ ActionList }	actionList - To handle post-performance actions.
	 */
	constructor (
		what: string,
		how: Function,
		stateMutations: StateMutations,
		actionList: ActionList ) {

		this.what_setter( what );
		this.how_setter( how );
		this.stateMutations_setter( stateMutations );
		this.actions_setter( actionList );
	}

	/**
	 * This adds a requirement for the function to perform.
	 *
	 * @param	{ string }		what - The 'key' of the machine's state that is required.
	 * @param	{ any }			toBe - The required 'value' of the machine's state.
	 * @return	{ boolean }		Indicates if operation was successful or not.
	 */
	public needs ( what: string, toBe: any ) : true {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		expect( toBe )
			.to.not.be.undefined;

		expect( toBe )
			.to.not.be.an( 'array' );

		expect( toBe )
			.to.not.be.an( 'object' );

		expect( toBe )
			.to.not.be.a( 'function' );

		this._needs[what] = toBe;

		return true;
	}

	/**
	 * Registers a 'state' variable to receive a new value
	 * during the post-performance process.
	 *
	 * @param	{ string }		what - The name of the 'state' variable.
	 * @param	{ any }			to - The new to-be-assigned value.
	 * @return	{ boolean }		Indicates if operation was successful or not.
	 */
	public setState ( what: string, to: any ) : boolean {
		return this.stateMutations.registerMutation( what, to );
	}

	/**
	 * Registers 'abilities' by their IDs, so they will be executed
	 * during the post-performance process.
	 *
	 * @param	{ string } what - The ID of an 'ability'.
	 * @return	{ boolean } - Indicates if operation was successful or not.
	 */
	public does ( what: string ) : boolean {
		return this.actions.does( what );
	}

	/**
	 * Executes the function of the 'ability'.
	 *
	 * @param	{ Object }	state - A reference to the machine's state.
	 * @param	{ Object }	abilities - A reference to the machine's functions.
	 * @return	{ boolean }	- Indicates if operation was successful or not.
	 */
	public perform ( state: any, abilities: any ) : boolean {

		expect( state )
			.to.not.be.undefined;

		expect( state )
			.to.not.be.null;

		expect( state )
			.to.be.a( 'object' );

		expect( abilities )
			.to.not.be.undefined;

		expect( abilities )
			.to.not.be.null;

		expect( abilities )
			.to.be.an( 'object' );

		let self = this;

		// 1. This indicates if all the requirements are met or not.
		//    Initially it is set to 'true', so any missing requirements
		//    would change this to 'false', which later will be used to
		//    decide whether run the function or not.
		let hasAllRequirements: boolean = true;

		// 2. Looping through the requirments object...
		Object.keys( this._needs)
			.map( what => {

				// 3. If this requirment's value doesn't match with the
				//    same key in the passed machine's "state", then set
				//    'hasAllRequirements' flag to 'false'.
				if ( self._needs[what] !== state[what] ) {
					hasAllRequirements = false;
				}
			});

		// 4. Check if we have met all the requirements or not.
		if ( true === hasAllRequirements ) {

			// 5. We can execute the function.
			this._how.apply( this );

			// 6. Now we need to:
			//    1) Apply the state-mutations
			//    2) Trigger all the 'does' actions with the new state
			this.stateMutations.applyMutationsTo( state );
			this.actions.triggerActions( state, abilities );
		}

		// 7. If we haven't met the requirements, then
		//    'hasAllRequirements' is 'false' and we haven't
		//    done anythingalso, so we can just return it.
		//    If we have met the requirements and we have
		//    reached to this point, then we can return it
		//    as it is 'true' and it means we have finished
		//    successfully.
		return hasAllRequirements;
	}

	// --------------------------------------------------------
	// Getter & Setters
	// --------------------------------------------------------

	/**
	 * Getter for 'what' property.
	 * @return	{ string }
	 */
	public get what () : string {
		return this._what;
	}

	/**
	 * Trap-setter for 'what' property.
	 * @param	{ string }	ignored - Ignored value.
	 */
	public set what ( ignored: string ) {
		throw( 'The "what" property does not have a public "setter" method.' );
	}

	/**
	 * Private setter for 'what' property.
	 * @param	{ string }	what - Name of the ability.
	 */
	private what_setter ( what: string ) {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		this._what = what;
	}

	/**
	 * Getter for 'how' property.
	 * @return	{ Function }
	 */
	public get how () : Function {
		return this._how;
	}

	/**
	 * Trap-setter for 'how' property.
	 * @param	{ Function }	ignored - Ignored value.
	 */
	public set how ( ignored: Function ) {
		throw( 'The "how" property does not have a public "setter" method.' );
	}

	/**
	 * Private setter for 'how' property.
	 * @param	{ Function }	how - Function of the ability.
	 */
	private how_setter ( how: Function ) {

		expect( how )
			.to.not.be.undefined;

		expect( how )
			.to.not.be.null;

		expect( how )
			.to.be.a( 'function' );

		this._how = how;
	}

	/**
	 * Private setter for 'stateMutations' property.
	 * @param	{ StateMutations }	stateMutations - State-mutation operations of the ability.
	 */
	private stateMutations_setter ( stateMutations: StateMutations ) {

		expect( stateMutations )
			.to.not.be.undefined;

		expect( stateMutations )
			.to.not.be.null;

		expect( stateMutations )
			.to.be.an.instanceof( StateMutations );

		this.stateMutations = stateMutations;
	}

	/**
	 * Private setter for 'actions' property.
	 * @param	{ ActionList }	actionList - List of actions to be called during post-performance.
	 */
	private actions_setter ( actionList: ActionList ) {

		expect( actionList )
			.to.not.be.undefined;

		expect( actionList )
			.to.not.be.null;

		expect( actionList )
			.to.be.an.instanceof( ActionList );

		this.actions = actionList;
	}
}