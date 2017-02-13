# Workshop for this step

When a user selects an archetype, the customer would like
to see a message indicating which archetype was selected.
It is acceptable to display this message in the console.

In order to do this, you will need to write a function to log to the
console. The trick is determining where to put this function. The
function will need to be aware of an archetypeCard button click.

## Step 1: Re-emit Button Click

Inside the archetypeCard component, you will need to register an event
listener for the selection buttons on click event. The handler for
this event should emit an event of its own. The value of the event
should be the archetype data for that entry.

## Step 2: Bubble Up Character Selection Event

Emitting the event only allows the data to cross one level of the
hierarchy. The process of processing and re-emitting the event will be
needed for each component.

## Step 3: Create Message

At the top of the hierarchy, when the character selection event is
received, it is at this point the message can be generated.
