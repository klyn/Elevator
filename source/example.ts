
import { Machine } from './index'

const elevator : Machine = new Machine( 'elevator' )
	.knows( 'floor_number', 0 )
	.knows( 'up_button_pushed' )
	.knows( 'down_button_pushed' )

	.has( 'up_button' )
		.sets( 'up_button_pushed', true )
		.does( 'go_up' )

	.has( 'down_button' )
		.sets( 'down_button_pushed', true )
		.does( 'go_down' )

	.can( 'go_up', () => console.log('going up') )
		.when( 'floor_number', 0 )
		.when( 'up_button_pushed', true )
			.sets( 'up_button_pushed', false )
			.sets( 'floor_number', 1 )

	.can( 'go_down', () => console.log('going down...') )
		.when( 'floor_number', 1 )
		.when( 'down_button_pushed', true )
			.sets( 'down_button_pushed', false )
			.sets( 'floor_number', 0 )
			.does( 'go_up' )

elevator
	.on()
	.use( 'up_button' )
	.use( 'up_button' )
	.use( 'down_button' )
	.use( 'up_button' )
