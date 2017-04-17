
import { expect } from 'chai'
import { Ability } from './Ability'
import { Control } from './Control'
import { StateMutations } from './StateMutations'
import { ActionList } from './ActionList'

/**
 * @classdesc The 'Machine'.
 */
export class Machine {

	// --------------------------------------------------------
	// Properties
	// --------------------------------------------------------

	/**
	 * Machine's name.
	 * @type	{ string | undefined }
	 */
	private _name: string;

	/**
	 * The 'State' of the machine.
	 * @type	{ Object }
	 */
	private state: any = {};

	/**
	 * Internal 'power' state of the machine.
	 * Default value: false.
	 * @type	{ boolean } _power = false
	 */
	private _power: boolean = false;

	/**
	 * This is the last 'item' added to the machine -- via
	 * its methods. It can be an 'Ability' or a 'Control'
	 * or possibly more in the future.
	 * Other internal methods would use this to point to
	 * the 'item' just added to the machine.
	 * @type	{ any }
	 */
	private lastItem : any;

	/**
	 * Holds the instances of the machine's abilities.
	 * @type	{ Object }
	 */
	private abilities: any = {};

	/**
	 * Holds the instances of the machine's controls.
	 * @type	{ Object }
	 */
	private controls: any = {};


	// --------------------------------------------------------
	// Methods
	// --------------------------------------------------------

	/**
	 * @param	{ string= } [machineName] - Optional machine's name.
	 * @return	{ Machine } - An instance of the Machine's class.
	 */
	constructor ( machineName?: string ) {
		this.name = machineName;
	}

	/**
	 * Turns the machine 'on'.
	 * @return	{ Machine } - 'this'.
	 */
	public on () : Machine {

		this._power = true;
		return this;
	}

	/**
	 * Turns the machine 'off'.
	 * @return	{ Machine } - 'this'.
	 */
	public off () : Machine {

		this._power = false;
		return this;
	}

	/**
	 * Adds an 'Ability' to the machine.
	 *
	 * @param	{ string }		what - The name of the ability.
	 * @param	{ Function }	how - The functionality of the ability.
	 * @return	{ Machine }		- 'this'.
	 */
	public can ( what: string, how: Function ) : Machine {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		expect( how )
			.to.not.be.undefined;

		expect( how )
			.to.not.be.null;

		expect( how )
			.to.be.a( 'function' );

		const stateMutations: StateMutations = new StateMutations();
		const actionList: ActionList = new ActionList();

		this.abilities[what] = new Ability( what, how, stateMutations, actionList );
		this.lastItem = this.abilities[what];

		return this;
	}

	/**
	 * Adds a 'Control' to the machine.
	 *
	 * @param	{ string }		what - The name of the control.
	 * @return	{ Machine }		- 'this'.
	 */
	public has ( what: string ) : Machine {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		const stateMutations: StateMutations = new StateMutations();
		const actionList: ActionList = new ActionList();

		this.controls[what] = new Control( what, stateMutations, actionList );
		this.lastItem = this.controls[what];

		return this;
	}

	/**
	 * Adds 'requirement' conditions for an 'ability'.
	 *
	 * @param	{ string }		what - The name/ID of a 'state' variable.
	 * @param	{ any }			is - The value to check against.
	 * @return	{ Machine }		- 'this'.
	 */
	public when ( what: string, is: any ) : Machine {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		expect( is )
			.to.not.be.undefined;

		expect( is )
			.to.not.be.an( 'array' );

		expect( is )
			.to.not.be.an( 'object' );

		expect( is )
			.to.not.be.a( 'function' );

		expect( this.lastItem )
			.to.be.an.instanceof( Ability );

		const toBe: any = is;
		this.lastItem.needs( what, toBe );

		return this;
	}

	/**
	 * Adds a state-variable to the machine.
	 *
	 * @param	{ string }		what - The name of the state-variable.
	 * @param	{ (any | undefined) }	is - The 'optional' initial value.
	 * @return	{ Machine }		- 'this'.
	 */
	public knows ( what: string, is?: any ) : Machine {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		expect( is )
			.to.not.be.an( 'array' );

		expect( is )
			.to.not.be.an( 'object' );

		expect( is )
			.to.not.be.a( 'function' );

		this.state[what] = is;

		return this;
	}

	/**
	 * Mutates the machine's state, via a component's
	 * 'setState' method.
	 *
	 * @param	{ string }		what - The name of the state-variable.
	 * @param	{ any }			to - The new value of the state-variable.
	 * @return	{ Machine }		- 'this'.
	 */
	public sets ( what: string, to: any ) : Machine {

		this.lastItem.setState( what, to );
		return this;
	}

	/**
	 * Triggers an 'action', via a component's 'does' method.
	 *
	 * @param	{ string }		what - The name of the 'ability' to be called.
	 * @return	{ Machine }		- 'this'.
	 */
	public does ( what: string ) : Machine {

		this.lastItem.does( what );
		return this;
	}

	/**
	 * Activates a Control.
	 *
	 * @param	{ string }		which - The name of the contorl.
	 * @return	{ Machine }		- 'this'.
	 */
	public use ( which: string ) : Machine {

		if ( true !== this.power ) {
			return this;
		}

		this.controls[which]
			.activate( this.state, this.abilities );

		return this;
	}

	// --------------------------------------------------------
	// Getter & Setters
	// --------------------------------------------------------

	/**
	 * Getter for 'name' property.
	 * @return	{ (string | undefined) } - Machine's name
	 */
	public get name () : string | undefined {
		return this._name;
	}

	/**
	 * Setter for 'name' property.
	 * @param	{ string } name - Machine's name
	 */
	public set name ( name: string ) {
		this._name = name;
	}

	/**
	 * Getter for 'power' property.
	 * @return	{ boolean } - Machine's 'power' status.
	 */
	public get power () : boolean {
		return this._power;
	}

	/**
	 * Trap-setter for 'power' property.
	 * @param	{ boolean } - ignored - Ignored value.
	 */
	public set power ( ignored: boolean ) {
		throw( 'The "power" property does not have a public "setter" method.' );
	}
}