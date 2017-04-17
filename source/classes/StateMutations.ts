
import { expect } from 'chai'

/**
 * This will provide and encapsulate functionality
 * to perform state-mutations, not on the machine's
 * main state, but on isolated objects, which later
 * can be merged into machine's main state.
 *
 * @classdesc Provides isolated state-mutaion functionality.
 */
export class StateMutations {

	// --------------------------------------------------------
	// Properties
	// --------------------------------------------------------

	/**
	 * The mutaions object.
	 * @type	{ Object }
	 */
	private mutations: any = {};

	// --------------------------------------------------------
	// Methods
	// --------------------------------------------------------

	/**
	 * Registers a state mutation.
	 * @param	{ string }		what - The name of the state variable.
	 * @param	{ any }			to - The future value of the state variable.
	 * @return	{ boolean }		Indicates if the operation was successful or not.
	 */
	public registerMutation ( what: string, to: any ) : boolean {

		expect( what )
			.to.not.be.undefined;

		expect( what )
			.to.not.be.null;

		expect( what )
			.to.be.a( 'string' );

		expect( to )
			.to.not.be.undefined;

		expect( to )
			.to.not.be.an( 'array' );

		expect( to )
			.to.not.be.an( 'object' );

		expect( to )
			.to.not.be.a( 'function' );

		this.mutations[what] = to;

		return true;
	}

	/**
	 * Returns the mustations object.
	 * @return	{ Object }
	 */
	public getMutations () : any {
		return this.mutations;
	}

	/**
	 * Receives machine's state and returns a copy with
	 * the mutations applied.
	 *
	 * @param	{ Object }	state - A reference to the machine's state.
	 * @return	{ void }
	 */
	public applyMutationsTo ( machineState: any ) : void {

		Object.keys( this.getMutations() )
			.map( what => machineState[what] = this.mutations[what] );
	}

	// --------------------------------------------------------
	// Getter & Setters
	// --------------------------------------------------------
}