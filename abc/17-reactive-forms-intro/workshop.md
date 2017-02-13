# Workshop for this step

The UI/UX team has suggested another improvement to the user experience.
The message informing the user that the character name is required is
not well received if it appears before the user has had the chance
to interact with the control.

Delay the appearance of the message until the user has clicked into the
input and clicked away without supplying a name.

To achieve this you will need to use Angular's form validation.

## Step 1: Create a characterName component

If you didn't already create the characterName component in an earlier
workshop, do so now:

```
ng generate component characterName
```

or

```
ng g c characterName
```

## Step 2: Add a label, input, and warning message to the template

The message should inform the user that a character name is required.

## Step 3: Use ngIf to remove the message when it is no longer needed

This message should appear next to the character name input and should
be removed once the user has entered a name.

