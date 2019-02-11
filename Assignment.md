# Simple Moving Object

## Add Keyboard Input

Lets add some interactivity to this game with keyboard player movement. In future versions we will use your Arduinos, but for now lets keep it simple. 

First we need a global reference to the keyboard, which Phaser can help us with! Add a global let variable `keys` right next to the `graphics` variable. In create define like this `keys = this.input.keyboard.createCursorKeys();` This gets the input object from Phaser and asks specifically for the arrow keys.

Now that we have the key states, lets use them to make the player move. In your update function, add the following code.
```
if (keys.left.isDown) {
  player.x -= 100 * deltaTime / 1000;
}
```
Do the same for all of the other keys on the keyboard.


## Loop Player On the Screen

When the player reaches the edge of the screen, we want to make sure we can't lose them. Let's try having them loop across the screen like in Asteroids.

In the update loop we will need to check the player position against the width of the screen to see if it's moved off. We should also use the config to make sure our values are consistent with the game.

```
// Checks if player is off of the right side of the screen then moves them to the left
if (player.x > config.width + (player.radius / 2)) {
  player.x = 0 + (player.radius / 2);
}
```
Note that we are adding the player radius divided to the width. This will let us make sure the entire circle is off of the screen before looping it.

Finish looping for the other four edges of the screen.


## Simple Collision Detection

The final section of this assignment is the simplest form of collision detection. First you will need to add another circle object on to the screen aside from the player. Create a new set of x and y position values that are separate from the player, and use this to draw another circle in the draw loop.

To detect if the player circle and the collision circle are touching you will need to use the distance formula and compare that to the sum of their radii.

Here is a code snippit to help with that
```
// Get the distance between the player and the circle
const distSq = (player.x - collision.x) * (player.x - collision.x) + (player.y - collision.y) * (player.y - collision.y)
const radiiSq = (player.radius * player.radius) + (collision.radius * collision.radius)

if (distSq < radiiSq) // collision code here

```
Not that we use the distance squared here instead of the distance. This is a simple optimization that we can do be using the square root function is rather costly.

Now that you have the collision code, change something about the draw functions so that a different color is used. This can be the player color or whatever else seems interestiong


## Submission

Submit your code to canvas under HW-4