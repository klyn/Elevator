
import { expect } from 'chai'

/**
 * Actions are the IDs of 'abilities'. This class
 * provides functionality to store a list of 'actions'
 * so they can be used later -- most likely get called
 * one after each other inside another method.
 *
 * @classdesc Provides functionality to store/restore 'actions'.
 */
export class ActionList {

	// --------------------------------------------------------
	// Properties
	// --------------------------------------------------------

	/**
	 * The name of the 'actions'.
	 * @type 	{ Array<string> }
	 */
	private actions: string[] = [];

	// --------------------------------------------------------
	// Methods
	// --------------------------------------------------------

	/**
	 * Registers an 'action'.
	 *
	 * @param	{ string } what - The ID of an 'ability'.
	 * @return	{ boolean } - Indicates if operation was successful or not.
	 */
	public does ( what: string ) : boolean {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		this.actions.push( what );

		return true;
	}

	/**
	 * Returns the list of registered 'actions'.
	 * @return	{ Array<string> }
	 */
	public getActions () : string[] {
		return this.actions;
	}

	/**
	 * Loops through and calls all the registered 'actions'.
	 *
	 * @param	{ Object }	state - A reference to the machine's state.
	 * @param	{ Object }	abilities - A reference to the machine's functions.
	 * @return	{ void }
	 */
	public triggerActions ( state: any, abilities: any ) : void {

		this.getActions()
			.map( what => abilities[what].perform( state, abilities ) );
	}

	// --------------------------------------------------------
	// Getter & Setters
	// --------------------------------------------------------
}