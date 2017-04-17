
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

import { Ability } from '../Ability'
import { StateMutations } from '../StateMutations'
import { ActionList } from '../ActionList'

describe( 'Ability Class :: source/classes/Ability', () => {

	let goodReturn: any;
	let goodWhat: string;
	let goodHow: Function;
	let goodStateMutations: StateMutations;
	let goodActionList: ActionList;
	let goodAbility: Ability;

	let badWhat: any;
	let badHow: any;
	let badStateMutations: any;
	let badActionList: any;
	let badAbility : Ability;

	let goodToBe: any;
	let badToBe: any;

	let goodMachineState: any;
	let goodMachineAbilities: any;

	let badMachineState: any;
	let badMachineAbilities: any;

	let fn : Function;

	beforeEach(() => {

		goodReturn = 'good_how';
		goodWhat = 'good_what';
		goodHow = () => goodReturn;
		goodStateMutations = new StateMutations();
		goodActionList = new ActionList();
		goodAbility = new Ability( goodWhat, goodHow, goodStateMutations, goodActionList );

		badWhat = undefined;
		badHow = undefined;
		badStateMutations = undefined;
		badActionList = undefined;
		badAbility = undefined;

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

	describe( 'Ability.constructor()', () => {

		it( 'new Ability() ------------------------ should throw exception because of missing params.', () => {
			expect( () => new Ability( badWhat, badHow, badStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( null, how, SM, AL ) ----- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => new Ability( badWhat, goodHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( true, how, SM, AL ) ----- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => new Ability( badWhat, goodHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( 128, how, SM, AL ) ------ should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => new Ability( badWhat, goodHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( [], how, SM, AL ) ------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => new Ability( badWhat, goodHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( {}, how, SM, AL ) ------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => new Ability( badWhat, goodHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( fn, how, SM, AL ) ------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => new Ability( badWhat, goodHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( what, null, SM, AL ) ---- should throw exception because "how" cannot be "null".', () => {

			badHow = null;
			expect( () => new Ability( goodWhat, badHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( what, true, SM, AL ) ---- should throw exception because "how" cannot be "boolean".', () => {

			badHow = true;
			expect( () => new Ability( goodWhat, badHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( what, 128, SM, AL ) ----- should throw exception because "how" cannot be a "number".', () => {

			badHow = 128;
			expect( () => new Ability( goodWhat, badHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( what, "how", SM, AL ) --- should throw exception because "how" cannot be a "string".', () => {

			badHow = 'how';
			expect( () => new Ability( goodWhat, badHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( what, [], SM, AL ) ------ should throw exception because "how" cannot be an "array".', () => {

			badHow = [];
			expect( () => new Ability( goodWhat, badHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( what, {}, SM, AL ) ------ should throw exception because "how" cannot be an "object".', () => {

			badHow = {};
			expect( () => new Ability( goodWhat, badHow, goodStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn ) ------------ should throw exception because of the missing "stateMutation" param.', () => {
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, null, AL ) -- should throw exception because "stateMutaions" cannot be "null".', () => {

			badStateMutations = null;
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, true, AL ) -- should throw exception because "stateMutaions" cannot be "boolean".', () => {

			badStateMutations = true;
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, 128, AL ) --- should throw exception because "stateMutaions" cannot be a "number".', () => {

			badStateMutations = 128;
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, "SM", AL ) -- should throw exception because "stateMutaions" cannot be a "string".', () => {

			badStateMutations = "SM";
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, [], AL ) ---- should throw exception because "stateMutaions" cannot be an "array".', () => {

			badStateMutations = [];
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, {}, AL ) ---- should throw exception because "stateMutaions" cannot be an "object".', () => {

			badStateMutations = {};
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, fn, AL ) ---- should throw exception because "stateMutaions" cannot be a "function".', () => {

			badStateMutations = fn;
			expect( () => new Ability( goodWhat, goodHow, badStateMutations, goodActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM ) -------- should throw exception because of the missing "actionList" param.', () => {
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, null ) -- should throw exception because "actionList" cannot be "null".', () => {

			badActionList = null;
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, true ) -- should throw exception because "actionList" cannot be "boolean".', () => {

			badActionList = true;
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, 128 ) --- should throw exception because "actionList" cannot be a "number".', () => {

			badActionList = 128;
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, "AL" ) -- should throw exception because "actionList" cannot be a "string".', () => {

			badActionList = "AL";
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, [] ) ---- should throw exception because "actionList" cannot be an "array".', () => {

			badActionList = [];
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, {} ) ---- should throw exception because "actionList" cannot be an "object".', () => {

			badActionList = {};
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, fn ) ---- should throw exception because "actionList" cannot be a "function".', () => {

			badActionList = fn;
			expect( () => new Ability( goodWhat, goodHow, goodStateMutations, badActionList ) )
				.to.throw();
		})

		it( 'new Ability( "what", fn, SM, AL ) ---- should set "what" property correctly.', () => {
			expect( goodAbility.what )
				.to.equal( goodWhat );
		})

		it( 'new Ability( "what", fn, SM, AL ) ---- should set "how" property correctly.', () => {
			expect( (goodAbility.how)() )		// --> Calling the function that is stored in the 'how' property.
				.to.equal( goodReturn );
		})
	})

	describe( 'Ability.what', () => {

		it( 'ability.what --------------------- should return a "string".', () => {
			expect( goodAbility.what )
				.to.equal( goodWhat );
		})

		it( 'ability.what = "New Name" -------- should throw an exception without changing the value of "what" property.', () => {

			expect( () => goodAbility.what = "New Name" )
				.to.throw();

			expect( goodAbility.what )
				.to.be.equal( goodWhat );
		})
	})

	describe( 'Ability.how', () => {

		it( 'ability.how ---------------------- should return a "string".', () => {
			expect( (goodAbility.how)() )		// --> Calling the function that is stored in the 'how' property.
				.to.equal( goodReturn );
		})

		it( 'ability.how = fn ----------------- should throw an exception without changing the value of "how" property.', () => {

			expect( () => goodAbility.how = fn )
				.to.throw();

			expect( (goodAbility.how)() )		// --> Calling the function that is stored in the 'how' property.
				.to.equal( goodReturn );
		})
	})

	describe( 'Ability.needs()', () => {

		it( 'ability.needs() ------------------ should throw exception because of the missing params.', () => {
			expect( () => goodAbility.needs( badWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.needs( null, true ) ------ should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodAbility.needs( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.needs( true, true ) ------ should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodAbility.needs( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.needs( 128, true ) ------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodAbility.needs( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.needs( [], true ) -------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodAbility.needs( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.needs( {}, true ) -------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodAbility.needs( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.needs( fn, true ) -------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodAbility.needs( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.needs( "What" ) ---------- should throw exception because of the missing "toBe" param.', () => {
			expect( () => goodAbility.needs( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.needs( "What", [] ) ------ should throw exception because "toBe" cannot be an "array".', () => {

			badToBe = [];
			expect( () => goodAbility.needs( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.needs( "What", {} ) ------ should throw exception because "toBe" cannot be an "object".', () => {

			badToBe = {};
			expect( () => goodAbility.needs( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.needs( "What", fn ) ------ should throw exception because "toBe" cannot be a "function".', () => {

			badToBe = fn;
			expect( () => goodAbility.needs( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.needs( "What", true ) ---- should correctly add this to "ability.requires" object.', () => {
			expect( goodAbility.needs( goodWhat, goodToBe ) )
				.to.be.true;
		})
	})

	describe( 'Ability.perform()', () => {

		it( 'ability.perform() ---------------- should throw exception because of missing params.', () => {
			expect( () => goodAbility.perform( badMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( null, {} ) ------ should throw exception because "state" cannot be "null".', () => {

			badMachineState = null;
			expect( () => goodAbility.perform( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( true, {} ) ------ should throw exception because "state" cannot be "boolean".', () => {

			badMachineState = true;
			expect( () => goodAbility.perform( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( 128, {} ) ------- should throw exception because "state" cannot be a "number".', () => {

			badMachineState = 128;
			expect( () => goodAbility.perform( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( "obj", {} ) ----- should throw exception because "state" cannot be a "string".', () => {

			badMachineState = "obj";
			expect( () => goodAbility.perform( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( [], {} ) -------- should throw exception because "state" cannot be an "array".', () => {

			badMachineState = [];
			expect( () => goodAbility.perform( badMachineState, goodMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( state, {} ) ----- should return a "boolean".', () => {

			expect( goodAbility.perform( goodMachineState, goodMachineAbilities ) )
				.to.be.a( 'boolean' );
		})

		it( 'ability.perform( {} ) ------------ should throw exception because of missing "abilities" param.', () => {
			expect( () => goodAbility.perform( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( {}, null ) ------ should throw exception because "abilities" cannot be "null".', () => {

			badMachineAbilities = null;
			expect( () => goodAbility.perform( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( {}, true ) ------ should throw exception because "abilities" cannot be "boolean".', () => {

			badMachineAbilities = true;
			expect( () => goodAbility.perform( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( {}, 128 ) ------- should throw exception because "abilities" cannot be a "number".', () => {

			badMachineAbilities = 128;
			expect( () => goodAbility.perform( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( {}, "obj" ) ----- should throw exception because "abilities" cannot be a "string".', () => {

			badMachineAbilities = "obj";
			expect( () => goodAbility.perform( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})

		it( 'ability.perform( {}, [] ) -------- should throw exception because "abilities" cannot be an "array".', () => {

			badMachineAbilities = [];
			expect( () => goodAbility.perform( goodMachineState, badMachineAbilities ) )
				.to.throw();
		})
	})

	describe( 'Ability.setState()', () => {

		it( 'ability.setState() --------------- should throw exception because of the missing params.', () => {
			expect( () => goodAbility.setState( badWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.setState( null, true ) --- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodAbility.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.setState( true, true ) --- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodAbility.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.setState( 128, true ) ---- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodAbility.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.setState( [], true ) ----- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodAbility.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.setState( {}, true ) ----- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodAbility.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.setState( fn, true ) ----- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodAbility.setState( badWhat, goodToBe ) )
				.to.throw();
		})

		it( 'ability.setState( "What" ) ------- should throw exception because of the missing "to" param.', () => {
			expect( () => goodAbility.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.setState( "What", [] ) --- should throw exception because "to" cannot be an "array".', () => {

			badToBe = [];
			expect( () => goodAbility.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.setState( "What", {} ) --- should throw exception because "to" cannot be an "object".', () => {

			badToBe = {};
			expect( () => goodAbility.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.setState( "What", fn ) --- should throw exception because "to" cannot be a "function".', () => {

			badToBe = fn;
			expect( () => goodAbility.setState( goodWhat, badToBe ) )
				.to.throw();
		})

		it( 'ability.setState( "What", true ) - should correctly add this to "ability.stateMutations" object.', () => {
			expect( goodAbility.setState( goodWhat, goodToBe ) )
				.to.be.true;
		})
	})

	describe( 'Ability.does()', () => {

		it( 'ability.does() ------------------- should throw exception because of missing "what" param.', () => {
			expect( () => goodAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'ability.does( null ) ------------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'ability.does( true ) ------------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'ability.does( 128 ) -------------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'ability.does( [] ) --------------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'ability.does( {} ) --------------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'ability.does( fn ) --------------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'ability.does( "Good" ) ----------- should correctly add this to "ability.actions".', () => {
			expect( goodAbility.does( goodWhat ) )
				.to.be.true;
		})
	})
})