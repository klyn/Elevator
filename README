# An Elevator-inspired FSM

Elevator is an experimental Finite State Machine. Its main goal is to simplify the creation and usage of a FSM by providing an intuitive API based on Fluent design pattern.

In order to have a working machine you need to create it, define its abilities and controls, and then use it.

Creating a machine is as simple as instantiating the Machine class, with or without passing a name to its constructor method.

```js
import { Machine } from './elevator'
const elevator: Machine = new Machine( 'Elevator-128' );
```

We can define a function for the machine, using 'can' method. The 'can' method accepts two parameters: First one to be the name of the function -- or 'Ability' as we call it; Which should be a 'string' value. Second parameter is the actual function of the Ability.

Here in this example we are defining two abilities for our elevator: going up and going down. It's worth noting that most methods can be chained together to help us write cleaner code.

```js
const elevator: Machine = new Machine( 'Elevator-128' )
    .can( 'go_up', () => console.log( 'going up...' ) )
    .can( 'go_down', () => console.log( 'going down...' ) )
```

Any method used at this stage -- creating the machine, will simply define the behaviour of the machine. These settings will be used later when we are interacting with the machine.

Let's see what we have achieved so far: We have created our machine and we have defined two abilities for this machine; But how should we use this machine?

It's very simple: We need to define some 'Controls' for the machine so we can use them to trigger certain actions of the machine.

Here in this example it makes sense to have at least two controls for our elevator: Up button and down button. With these controls we must be able to make use of 'go_up' and 'go_down' abilities.

We can define a control using 'has' method. It accepts only a 'string' value as the name of the control. Next we would use 'does' method to indicate what this control does. The 'does' method also accepts only a 'string' value which is the name of the Ability of the machine we would like to make use of.

```js
const elevator: Machine = new Machine( 'Elevator-128' )
    .has ( 'up_button' )
        .does( 'go_up' )
    .has( 'down_button' )
        .does( 'go_down' )
    .can( 'go_up', () => console.log( 'going up...' ) )
    .can( 'go_down', () => console.log( 'going down...' ) )
```

The indentations are optional but they make to code more readable. Notice how we are chaining the methods together? Hopefully this makes the code more readable and easier to maintain.

So far we have an elevator that can go up and down. It also has an up button and a down button as well, and they are wired to trigger the right action.

This is the minimum set up you need for a machine, but there are more options available which will talk about soon.

In order to use our machine, we should first turn it on using 'on' method, then start using the controls we just defined via 'use' method. The 'use' method accepts a 'string' value which is the name of a control.

```js
elevator
    .on()
    .use( 'up_button' )
    .use( 'down_button' )
```

In console we must see 'going up...' and 'going down...' text printed one after each other. Yay! Our elevator works! We are so happy!

There are more methods available for us to our machines more usable. For example, we can use the 'knows' method to add 'state-variable' to the machine. The 'knows' method accepts two parameters: First one is the name of the state-variable and the second one is an optional value.

If you don't pass the second parameter it will be set to 'undefined'. The other thing about the value is that it can be any type of data except array, object and function.

```js
const elevator: Machine = new Machine( 'Elevator-128' )
    .knows( 'floor_number', 0 )
    .knows( 'up_button_pushed' )
    .knows( 'down_button_pushed' )
    // rest of the code
```

Here we are planning to track three state-variable: Which floor we are in, if the up button is pushed and if the down button is pushed. We can later set up some simple conditions based on the value of these state-variables.

For the sake of simplicity, let's say our elevator is located in a building that only has ground and first floor. So the elevator can go up only if it is in the first floor and go down only if it is in the first floor. We would also check if the buttons are pushed or not.

We can enforce these conditions by using 'when' method right after defining an Ability via 'can' method. The 'when' method accepts two parameters: First on being the name of the state-variable we would like the check and the second one the value of the state-variable in which we would let the ability perform its action.

```js
    // rest of the code
    .can( 'go_up', () => console.log( 'going up...' ) )
        .when( 'floor_number', 0 )
        .when( 'up_button_pushed', true )
    .can( 'go_down', () => console.log( 'going down...' ) )
        .when( 'floor_number', 1 )
        .when( 'down_button_pushed', true )
```

It should be very clear what the code does here. We are saying go up only if you are in the ground floor and the up button is pushed and go down only if you are in the first floor and the down button is pushed.

Now let's see what happens if we use the elevator.

```js
elevator
    .on()
    .use( 'up_button' )
    .use( 'down_button' )
```

You should see nothing in the console! Our elevator doesn't work because in order to go up we need the value of 'up_button_pushed' to be 'true' but it is 'undefined'. We can fix that using 'sets' method on the control buttons.

What we want to achieve is to set the value of 'up_button_pushed' and 'down_button_pushed' to true, when up and down buttons are pushed respectively.

The 'sets' method, like 'when' methods, accepts two parameters: The name of the state-variable and a value. The only difference is that the 'sets' method will replace the state-variable value with the one that we are specifying here, when the control is being used.

```js
    // rest of the code
    .has ( 'up_button' )
        .sets( 'up_button_pushed', true )
        .does( 'go_up' )
    .has( 'down_button' )
        .sets( 'down_button_pushed', true )
        .does( 'go_down' )
```

Now let's try using the elevator again! In the console you should see 'going up...'. Good! it seems we did manage to go up to the first floor but now we are stuck there! That's because we never changed the value of 'floor_number' when went up from ground floor to the first floor and 'go_down' functionality works only if the 'floor_number' is 1.

To fix this we can use the 'sets' method after we are defining an Ability for the machine. The 'sets' methods here works exactly as above, except the values will be set after the main function of the ability is called and finished. In other words this is a post-performance step. Here in this example, in addition to setting the floor number, we can also reset the up and down buttons as well.

```js
    // rest of the code
    .can( 'go_up', () => console.log( 'going up...' ) )
        .when( 'floor_number', 0 )
        .when( 'up_button_pushed', true )
            .sets( 'floor_number', 1 )
            .sets( 'up_button_pushed', false )
    .can( 'go_down', () => console.log( 'going down...' ) )
        .when( 'floor_number', 1 )
        .when( 'down_button_pushed', true )
            .sets( 'floor_number', 0 )
            .sets( 'down_button_pushed', false )
```

The indentations are not necessary; They are there just for the sake of increased code readability. Now trying our elevator again, everything should work fine! We can also try pressing the up button two times in a row, just to see what will happen.

```js
elevator
    .on()
    .use( 'up_button' )
    .use( 'up_button' )
    .use( 'down_button' )
```

Last thing we can do here is to automatically trigger one ability via another ability by using the 'does' method. Notice this is not using a Control. It's basically a short-circuit and bypassing the behaviour that is assigned to the control that is in charge of that specific ability of the machine.

```js
    // rest of the code
    .can( 'go_down', () => console.log( 'going down...' ) )
        .when( 'floor_number', 1 )
        .when( 'down_button_pushed', true )
            .sets( 'floor_number', 0 )
            .sets( 'down_button_pushed', false )
            .does( 'go_up' )
```

Depending to the machine state and the conditions we have set up for the 'go_up' ability, it may or may not get called. There are valid use-cases for combining the 'does' method with 'can' method, but most of the time you would want to control the state and behaviour of the machine using its defined controls.
