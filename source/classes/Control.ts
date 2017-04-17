
import { expect } from 'chai'
import { StateMutations } from './StateMutations'
import { ActionList } from './ActionList'

/**
 * Controls are the machine's interface with the user.
 * They need to have a name. They can mutate the state of
 * the machine and they can also call 'abilities' to be
 * executed.
 *
 * @classdesc Machine's interface with the user.
 */
export class Control {

	// --------------------------------------------------------
	// Properties
	// --------------------------------------------------------

	/**
	 * The unique ID for this control.
	 * @type	{ string }
	 */
	private _what: string;

	/**
	 * The changes that should be applied to the state
	 * during the activation process of this control.
	 * @type 	{ StateMutations }
	 */
	private stateMutations: StateMutations;

	/**
	 * The name of the 'other' abilities that are callable
	 * via 'activate' method.
	 * @type 	{ ActionList }
	 */
	private actions: ActionList;

	// --------------------------------------------------------
	// Methods
	// --------------------------------------------------------

	/**
	 * @param	{ string }			what - The name of the control.
	 * @param	{ StateMutations }	stateMutations - To handle state-mutation operations.
	 * @param	{ ActionList }		actionList - To be able to call other 'abilities'.
	 */
	constructor (
		what: string,
		stateMutations: StateMutations,
		actionList: ActionList ) {

		this.what_setter( what );
		this.stateMutations_setter( stateMutations );
		this.actions_setter( actionList );
	}

	/**
	 * Registers a 'state' variable to receive a new value
	 * during the 'activation' process.
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
	 * when the control is activated.
	 *
	 * @param	{ string } what - The ID of an 'ability'.
	 * @return	{ boolean } - Indicates if operation was successful or not.
	 */
	public does ( what: string ) : boolean {
		return this.actions.does( what );
	}

	/**
	 * Activates the 'Control'.
	 *
	 * @param	{ Object }	state - A reference to the machine's state.
	 * @param	{ Object }	abilities - A reference to the machine's functions.
	 * @return	{ boolean }	- Indicates if operation was successful or not.
	 */
	public activate ( state: any, abilities: any ) : boolean {

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

		this.stateMutations.applyMutationsTo( state );
		this.actions.triggerActions( state, abilities );

		return true;
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
	 * @param	{ string } ignored - Ignored value.
	 */
	public set what ( ignored: string ) {
		throw( 'The "what" property does not have a public "setter" method.' );
	}

	/**
	 * Private setter for 'what' property.
	 * @param	{ string } what - The name/ID of the control.
	 */
	private what_setter ( what: string ) {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		this._what = what;

		return true;
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
	 * @param	{ ActionList }	actionList - List of actions to be called when the control is activated.
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