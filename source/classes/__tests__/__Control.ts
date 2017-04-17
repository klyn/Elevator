
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

import { Control } from '../Control'
import { StateMutations } from '../StateMutations'
import { ActionList } from '../ActionList'

describe( 'Control Class :: source/classes/Control', () => {

	let goodWhat: string;
	let goodStateMutations: StateMutations;
	let goodActionList: ActionList;
	let goodControl: Control;

	let badWhat: any;
	let badStateMutations: any;
	let badActionList: any;
	let badControl: Control;

	let goodToBe: any;
	let badToBe: any;

	let goodMachineState: any;
	let goodMachineAbilities: any;

	let badMachineState: any;
	let badMachineAbilities: any;

	let fn: Function;

	beforeEach(() => {

		goodWhat = 'good_what';
		goodStateMutations = new StateMutations();
		goodActionList = new ActionList();
		goodControl = new Control( goodWhat, goodStateMutations, goodActionList );

		badWhat = undefined;
		badStateMutations = undefined;
		badActionList = undefined;
		badControl = undefined;

		goodToBe = true;
		badToBe = undefined;

		goodMachineState = {
			good: true,
			bad: false,
		};
		goodMachineAbilities = {};

		badMachineState = undefined;
		badMachineAbilities = undefined;
		fn = () => {};
	})

	describe( 'Control.constructor()', () => {

		it( 'new Control() -------------------- should throw exception because of the missing params.', () => {
			expect( () => new Control( badWhat, badStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( null, SM, AL ) ------ should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => new Control( badWhat, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( true, SM, AL ) ------ should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => new Control( badWhat, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( 128, SM, AL ) ------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => new Control( badWhat, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( [], SM, AL ) -------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => new Control( badWhat, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( {}, SM, AL ) -------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => new Control( badWhat, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( fn, SM, AL ) -------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => new Control( badWhat, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what" ) ------------ should throw exception because of missing "stateMutations" param.', () => {
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", null, AL ) -- should throw exception because "stateMachine" cannot be "null".', () => {

			badStateMutations = null;
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", true, AL ) -- should throw exception because "stateMachine" cannot be "boolean".', () => {

			badStateMutations = true;
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", 128, AL ) --- should throw exception because "stateMachine" cannot be a "number".', () => {

			badStateMutations = 128;
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", "SM", AL ) -- should throw exception because "stateMachine" cannot be a "string".', () => {

			badStateMutations = "SM";
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", [], AL ) ---- should throw exception because "stateMachine" cannot be an "array".', () => {

			badStateMutations = [];
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", {}, AL ) ---- should throw exception because "stateMachine" cannot be an "object".', () => {

			badStateMutations = {};
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", fn, AL ) ---- should throw exception because "stateMachine" cannot be a "function".', () => {

			badStateMutations = fn;
			expect( () => new Control( goodWhat, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM ) -------- should throw exception because of missing "actionList" param.', () => {
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, null ) -- should throw exception because "actionList" cannot be "null".', () => {

			badActionList = null;
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, true ) -- should throw exception because "actionList" cannot be "boolean".', () => {

			badActionList = true;
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, 128 ) --- should throw exception because "actionList" cannot be a "number".', () => {

			badActionList = 128;
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, "AL" ) -- should throw exception because "actionList" cannot be a "string".', () => {

			badActionList = "AL";
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, [] ) ---- should throw exception because "actionList" cannot be an "array".', () => {

			badActionList = [];
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, {} ) ---- should throw exception because "actionList" cannot be an "object".', () => {

			badActionList = {};
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, fn ) ---- should throw exception because "actionList" cannot be a "function".', () => {

			badActionList = fn;
			expect( () => new Control( goodWhat, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Control( "what", SM, AL ) ---- should create a new control with the correct name.', () => {

			goodControl = new Control( goodWhat, goodStateMutations, goodActionList );
			expect( goodControl.what )
				.to.equal( goodWhat );
		})
	})

	describe( 'Control.setState()', () => {

		it( 'control.setState() --------------- should throw exception because of the missing params.', () => {
			expect( () => goodControl.setState( badWhat, badToBe ) )
				.to.throw();
		})

		it( 'control.setState( null, true ) --- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodControl.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'control.setState( true, true ) --- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodControl.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'control.setState( 128, true ) ---- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodControl.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'control.setState( [], true ) ----- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodControl.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'control.setState( {}, true ) ----- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodControl.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'control.setState( fn, true ) ----- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodControl.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'control.setState( "What" ) ------- should throw exception because of the missing "to" param.', () => {
			expect( () => goodControl.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'control.setState( "What", [] ) --- should throw exception because "to" cannot be an "array".', () => {

			badToBe = [];
			expect( () => goodControl.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'control.setState( "What", {} ) --- should throw exception because "to" cannot be an "object".', () => {

			badToBe = {};
			expect( () => goodControl.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'control.setState( "What", fn ) --- should throw exception because "to" cannot be a "function".', () => {

			badToBe = fn;
			expect( () => goodControl.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'control.setState( "What", true ) - should correctly add this to "control.stateMutations" object.', () => {
			expect( goodControl.setState( goodWhat, goodToBe ) )
				.to.be.true;
		})
	})

	describe( 'Control.does()', () => {

		it( 'control.does() ------------------- should throw exception because of missing "what" param.', () => {
			expect( () => goodControl.does( badWhat ) )
				.to.throw();
		})

		it( 'control.does( null ) ------------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodControl.does( badWhat ) )
				.to.throw();
		})

		it( 'control.does( true ) ------------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodControl.does( badWhat ) )
				.to.throw();
		})

		it( 'control.does( 128 ) -------------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodControl.does( badWhat ) )
				.to.throw();
		})

		it( 'control.does( [] ) --------------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodControl.does( badWhat ) )
				.to.throw();
		})

		it( 'control.does( {} ) --------------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodControl.does( badWhat ) )
				.to.throw();
		})

		it( 'control.does( fn ) --------------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodControl.does( badWhat ) )
				.to.throw();
		})

		it( 'control.does( "Good" ) ----------- should correctly add this to "control.actions".', () => {
			expect( goodControl.does( goodWhat ) )
				.to.be.true;
		})
	})

	describe( 'Control.activate()', () => {

		it( 'control.activate() --------------- should throw exception because of missing params.', () => {
			expect( () => goodControl.activate( badMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( null, {} ) ----- should throw exception because "state" cannot be "null".', () => {

			badMachineState = null;
			expect( () => goodControl.activate( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( true, {} ) ----- should throw exception because "state" cannot be "boolean".', () => {

			badMachineState = true;
			expect( () => goodControl.activate( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( 128, {} ) ------ should throw exception because "state" cannot be a "number".', () => {

			badMachineState = 128;
			expect( () => goodControl.activate( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( "obj", {} ) ---- should throw exception because "state" cannot be a "string".', () => {

			badMachineState = "obj";
			expect( () => goodControl.activate( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( [], {} ) ------- should throw exception because "state" cannot be an "array".', () => {

			badMachineState = [];
			expect( () => goodControl.activate( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( state, {} ) ---- should return "boolean".', () => {

			expect( goodControl.activate( goodMachineState, goodMachineAbilities ) )
				.to.be.a( 'boolean' );
		})

		it( 'control.activate( {} ) ----------- should throw exception because of missing "abilities" param.', () => {
			expect( () => goodControl.activate( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( {}, null ) ----- should throw exception because "abilities" cannot be "null".', () => {

			badMachineAbilities = null;
			expect( () => goodControl.activate( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( {}, true ) ----- should throw exception because "abilities" cannot be "boolean".', () => {

			badMachineAbilities = true;
			expect( () => goodControl.activate( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( {}, 128 ) ------ should throw exception because "abilities" cannot be a "number".', () => {

			badMachineAbilities = 128;
			expect( () => goodControl.activate( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( {}, "obj" ) ---- should throw exception because "abilities" cannot be a "string".', () => {

			badMachineAbilities = "obj";
			expect( () => goodControl.activate( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'control.activate( {}, [] ) ------- should throw exception because "abilities" cannot be an "array".', () => {

			badMachineAbilities = [];
			expect( () => goodControl.activate( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})
	})
})