
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

import { Machine } from '../Machine';

describe( 'Machine Class :: source/classes/Machine', () => {

	let goodName: string;
	let goodMachine: Machine;

	let badName: any;
	let badMachine: any;

	let goodWhat: string;
	let goodHow: Function;

	let badWhat: any;
	let badHow: any;

	let goodKnows: string;
	let goodValue: any;

	let badKnows: any;
	let badValue: any;

	let goodIs: any;
	let badIs: any;

	let goodTo: any;
	let badTo: any;

	let goodMachineWithAbility: Machine;
	let goodMachineWithControl: Machine;

	let fn: Function;

	beforeEach(() => {

		goodName = "Elevator";
		goodMachine = new Machine( goodName );

		badName = undefined;
		badMachine = undefined;

		goodWhat = "good_what";
		goodHow = () => {};

		badWhat = undefined;
		badHow = undefined;

		goodKnows = 'floor_number';
		goodValue = 1;

		badKnows = undefined;
		badValue = undefined;

		goodIs = true;
		badIs = undefined;

		goodTo = true;
		badTo = undefined;

		goodMachineWithAbility = new Machine( goodName )
			.can( goodWhat, goodHow );

		goodMachineWithAbility.on();

		goodMachineWithControl = new Machine( goodName )
			.has( goodWhat );

		goodMachineWithControl.on();

		fn = () => {};
	})

	describe( 'Machine.constructor()', () => {

		it( 'new Machine() -------------------- should return an instance of the "Machine" class.', () => {
			expect( goodMachine )
				.to.be.instanceof( Machine );
		})

		it( 'new Machine( "elevator" ) -------- should be able to set the "name" propery.', () => {

			expect( goodMachine.name )
				.to.be.equal( goodName );
		})

		it( 'new Machine().power -------------- should be "false".', () => {
			expect( goodMachine.power )
				.to.be.false;
		})
	})

	describe( 'Machine.power', () => {

		it( 'machine.power = true ------------- should throw an exception without changing the value of "power" property.', () => {

			expect( () => goodMachine.power = true )
				.to.throw();

			expect( goodMachine.power )
				.to.be.false;
		})
	})

	describe( 'Machine.on()', () => {

		it( 'machine.on() --------------------- should set the "power" property to "true".', () => {

			goodMachine.off().on();
			expect( goodMachine.power )
				.to.be.true;
		})

		it( 'machine.on() --------------------- should return an instance of the "Machine" class.', () => {
			expect( goodMachine.on() )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.off()', () => {

		it( 'machine.off() -------------------- should set the "power" property to "false".', () => {

			goodMachine.on().off();
			expect( goodMachine.power )
				.to.be.false;
		})

		it( 'machine.off() --------------------- should return an instance of the "Machine" class.', () => {
			expect( goodMachine.off() )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.can()', () => {

		it( 'machine.can() -------------------- should throw exceptions because of the missing params.', () => {
			expect( () => goodMachine.can( badWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( null, fn ) ---------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodMachine.can( badWhat, goodHow ) )
				.to.throw();
		})

		it( 'machine.can( true, fn ) ---------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodMachine.can( badWhat, goodHow ) )
				.to.throw();
		})

		it( 'machine.can( 128, fn ) ----------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodMachine.can( badWhat, goodHow ) )
				.to.throw();
		})

		it( 'machine.can( [], fn ) ------------ should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodMachine.can( badWhat, goodHow ) )
				.to.throw();
		})

		it( 'machine.can( {}, fn ) ------------ should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodMachine.can( badWhat, goodHow ) )
				.to.throw();
		})

		it( 'machine.can( fn, fn ) ------------ should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodMachine.can( badWhat, goodHow ) )
				.to.throw();
		})

		it( 'machine.can( "what" ) ------------ should throw exception because of the missing "how" param.', () => {
			expect( () => goodMachine.can( goodWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( "what", null ) ------ should throw exception because "how" cannot be "null".', () => {

			badHow = null;
			expect( () => goodMachine.can( goodWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( "what", true ) ------ should throw exception because "how" cannot be "boolean".', () => {

			badHow = true;
			expect( () => goodMachine.can( goodWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( "what", 128 ) ------- should throw exception because "how" cannot be a "number".', () => {

			badHow = 128;
			expect( () => goodMachine.can( goodWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( "what", "how" ) ----- should throw exception because "how" cannot be a "string".', () => {

			badHow = "how";
			expect( () => goodMachine.can( goodWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( "what", [] ) -------- should throw exception because "how" cannot be an "array".', () => {

			badHow = [];
			expect( () => goodMachine.can( goodWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( "what", {} ) -------- should throw exception because "how" cannot be an "object".', () => {

			badHow = {};
			expect( () => goodMachine.can( goodWhat, badHow ) )
				.to.throw();
		})

		it( 'machine.can( "What", fn) --------- should return an instance of the "Machine" class.', () => {
			expect( goodMachine.can( goodWhat, goodHow ) )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.has()', () => {

		it( 'machine.has() -------------------- should throw exceptions because of the missing params.', () => {
			expect( () => goodMachine.has( badWhat ) )
				.to.throw();
		})

		it( 'machine.has( null ) -------------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodMachine.has( badWhat ) )
				.to.throw();
		})

		it( 'machine.has( true ) -------------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodMachine.has( badWhat ) )
				.to.throw();
		})

		it( 'machine.has( 128 ) --------------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodMachine.has( badWhat ) )
				.to.throw();
		})

		it( 'machine.has( [] ) ---------------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodMachine.has( badWhat ) )
				.to.throw();
		})

		it( 'machine.has( {} ) ---------------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodMachine.has( badWhat ) )
				.to.throw();
		})

		it( 'machine.has( fn ) ---------------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodMachine.has( badWhat ) )
				.to.throw();
		})

		it( 'machine.has( "What" ) ------------ should return an instance of the "Machine" class.', () => {
			expect( goodMachine.has( goodWhat ) )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.when()', () => {

		it( 'machine.when() ------------------- should throw exception because of the missing params.', () => {
			expect( () => goodMachineWithAbility.when( badWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.when( null, true ) ------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodMachineWithAbility.when( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.when( true, true ) ------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodMachineWithAbility.when( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.when( 128, true ) -------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodMachineWithAbility.when( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.when( [], true ) --------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodMachineWithAbility.when( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.when( {}, true ) --------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodMachineWithAbility.when( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.when( fn, true ) --------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodMachineWithAbility.when( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.when( "What" ) ----------- should throw exception because of the missing "is" param.', () => {
			expect( () => goodMachineWithAbility.when( goodWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.when( "What", [] ) ------- should throw exception because "is" cannot be an "array".', () => {

			badIs = [];
			expect( () => goodMachineWithAbility.when( goodWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.when( "What", {} ) ------- should throw exception because "is" cannot be an "object".', () => {

			badIs = {};
			expect( () => goodMachineWithAbility.when( goodWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.when( "What", fn ) ------- should throw exception because "is" cannot be a "function".', () => {

			badIs = fn;
			expect( () => goodMachineWithAbility.when( goodWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.when( "What", true ) ----- should return an instance of the "Machine" class.', () => {
			expect( goodMachineWithAbility.when( goodWhat, goodIs ) )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.knows()', () => {

		it( 'machine.knows() ------------------ should throw exception because of the missing "what" param.', () => {
			expect( () => goodMachine.knows( badWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.knows( null, is ) -------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodMachine.knows( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.knows( true, is ) -------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodMachine.knows( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.knows( 128, is ) --------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodMachine.knows( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.knows( [], is ) ---------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodMachine.knows( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.knows( {}, is ) ---------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodMachine.knows( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.knows( fn, is ) ---------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodMachine.knows( badWhat, goodIs ) )
				.to.throw();
		})

		it( 'machine.knows( "what", [] ) ------ should throw exception because "is" cannot be an "array".', () => {

			badIs = [];
			expect( () => goodMachine.knows( goodWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.knows( "what", {} ) ------ should throw exception because "is" cannot be an "object".', () => {

			badIs = {};
			expect( () => goodMachine.knows( goodWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.knows( "what", fn ) ------ should throw exception because "is" cannot be a "function".', () => {

			badIs = fn;
			expect( () => goodMachine.knows( goodWhat, badIs ) )
				.to.throw();
		})

		it( 'machine.knows( "What", is ) ------ should return an instance of the "Machine" class.', () => {
			expect( goodMachine.knows( goodWhat, goodIs ) )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.sets()', () => {

		it( 'machine.sets() ------------------- should throw exception because of the missing params.', () => {
			expect( () => goodMachineWithAbility.sets( badWhat, badTo ) )
				.to.throw();
		})

		it( 'machine.sets( null, true ) ------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodMachineWithAbility.sets( badWhat, goodTo ) )
				.to.throw();
		})

		it( 'machine.sets( true, true ) ------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodMachineWithAbility.sets( badWhat, goodTo ) )
				.to.throw();
		})

		it( 'machine.sets( 128, true ) -------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodMachineWithAbility.sets( badWhat, goodTo ) )
				.to.throw();
		})

		it( 'machine.sets( [], true ) --------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodMachineWithAbility.sets( badWhat, goodTo ) )
				.to.throw();
		})

		it( 'machine.sets( {}, true ) --------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodMachineWithAbility.sets( badWhat, goodTo ) )
				.to.throw();
		})

		it( 'machine.sets( fn, true ) --------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodMachineWithAbility.sets( badWhat, goodTo ) )
				.to.throw();
		})

		it( 'machine.sets( "What" ) ----------- should throw exception because of the missing "to" param.', () => {
			expect( () => goodMachineWithAbility.sets( goodWhat, badTo ) )
				.to.throw();
		})

		it( 'machine.sets( "What", [] ) ------- should throw exception because "to" cannot be an "array".', () => {

			badTo = [];
			expect( () => goodMachineWithAbility.sets( goodWhat, badTo ) )
				.to.throw();
		})

		it( 'machine.sets( "What", {} ) ------- should throw exception because "to" cannot be an "object".', () => {

			badTo = {};
			expect( () => goodMachineWithAbility.sets( goodWhat, badTo ) )
				.to.throw();
		})

		it( 'machine.sets( "What", fn ) ------- should throw exception because "to" cannot be a "function".', () => {

			badTo = fn;
			expect( () => goodMachineWithAbility.sets( goodWhat, badTo ) )
				.to.throw();
		})

		it( 'machine.sets( "What", to ) ------- should return an instance of the "Machine" class.', () => {
			expect( goodMachineWithAbility.sets( goodWhat, goodTo ) )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.does()', () => {

		it( 'machine.does() ------------------- should throw exception because of missing "what" param.', () => {
			expect( () => goodMachineWithAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'machine.does( null ) ------------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodMachineWithAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'machine.does( true ) ------------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodMachineWithAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'machine.does( 128 ) -------------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodMachineWithAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'machine.does( [] ) --------------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodMachineWithAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'machine.does( {} ) --------------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodMachineWithAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'machine.does( fn ) --------------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodMachineWithAbility.does( badWhat ) )
				.to.throw();
		})

		it( 'machine.does( "What", to ) ------- should return an instance of the "Machine" class.', () => {
			expect( goodMachineWithAbility.does( goodWhat ) )
				.to.be.an.instanceof( Machine );
		})
	})

	describe( 'Machine.use()', () => {

		it( 'machine.use() -------------------- should throw exceptions because of the missing params.', () => {
			expect( () => goodMachineWithControl.use( badWhat ) )
				.to.throw();
		})

		it( 'machine.use( null ) -------------- should throw exception because "what" cannot be "null".', () => {

			badWhat = null;
			expect( () => goodMachineWithControl.use( badWhat ) )
				.to.throw();
		})

		it( 'machine.use( true ) -------------- should throw exception because "what" cannot be "boolean".', () => {

			badWhat = true;
			expect( () => goodMachineWithControl.use( badWhat ) )
				.to.throw();
		})

		it( 'machine.use( 128 ) --------------- should throw exception because "what" cannot be a "number".', () => {

			badWhat = 128;
			expect( () => goodMachineWithControl.use( badWhat ) )
				.to.throw();
		})

		it( 'machine.use( [] ) ---------------- should throw exception because "what" cannot be an "array".', () => {

			badWhat = [];
			expect( () => goodMachineWithControl.use( badWhat ) )
				.to.throw();
		})

		it( 'machine.use( {} ) ---------------- should throw exception because "what" cannot be an "object".', () => {

			badWhat = {};
			expect( () => goodMachineWithControl.use( badWhat ) )
				.to.throw();
		})

		it( 'machine.use( fn ) ---------------- should throw exception because "what" cannot be a "function".', () => {

			badWhat = fn;
			expect( () => goodMachineWithControl.use( badWhat ) )
				.to.throw();
		})

		it( 'machine.use( "What" ) ------------ should return an instance of the "Machine" class.', () => {
			expect( goodMachineWithControl.use( goodWhat ) )
				.to.be.an.instanceof( Machine );
		})
	})
})