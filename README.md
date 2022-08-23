# Introduction 

This app is a memory card game where the goal is click on the shown characters without selecting any character more than once. Although the game is very simple, the purpose of this project is to continue building upon the React foundations and more specifically practice hooks and lifecycle methods. 

The designs/art and copyright in the app are all original and are owned by yours truly (Hasib Hashemi) and by my art collective (Wizards Robbing Kids). A goal of mine in learning to code was for creative purposes. Therefore, a portion of the projects I've built since beginning to learn have thematically incorporated my artistic work. This project in particular displays a doodle inspired by a trip I took to Japan in 2019. Portions of the doodle are filled in with pictures from my trip. Scattered above the doodle are a handful of characters I drew to overlay onto the doodle. The selected characters are the ones used to play the game.

In the real world, the drawing has significantly more characters and has actually been turned into a full painting/piece, but for the sake of this project I used the digital blueprint.

## Functionality

The game and app overall is very simple. There are no options to begin a game or play against an AI. The player is shown 12 characters, a score, and a note to not click on a character more than once. 

Hovering over a character displays the characters name/what the character is specifically. Clicking a character randomly shuffles the order of the characters displayed and updates the score. If the same character is clicked more than once, the score resets back to 0. The best score displays the highest score acheived. If the best score is less than or equal to the current score, then it too gets updated with repeated clicks. 

Since the game is meant to be simple, the max score acheivable is 12. The game can be reset by simply refreshing the page. 

## Process

The build process was fairly straight forward. Since this is my second React project, I wanted to be sure I addressed anything that seemed off when building my first project (see the react-cv-project). Specfically, I found that I needed to lift all of the state and functions up entirely to the app component when building the last project. This time around, I made sure to make design choices that would keep my components cleaner.

My psuedo code for this project:

1) Focus on hooks/lifecycle methods, use functional components
2) Create a skeleton of the DOM in APP.js
    a) Include Header "Wizards Robbing Kids Memory Game"
    b) Subheader "Don't click on a tile more than once or else game over"
    c) Grid body, div tiles holding character images

3) Grid Body- Character Tiles Component
4)State...
    a) will have a Character Object holding the img + an id
    b) will have a Characters array holding the Character Objects
    c) will record which characters have been clicked on in an array
    d) will update score as needed
5) State function that shuffles the Characters Array and
6) renders each character object to a div that is organized with CSS grid
7) Each character div to include a onClick function that reshuffles and rerenders
8) In addition, every click will push the character objects ID into an array/hashmap and increase the score
9) Each subsequent click will check to see if the ID is already in the array
10) If there's a duplicate, clear the id array, clear the score, set best score, and reset the game

11) Final step: Style

I stuck pretty closely to the pseudo code, however, there were a few choices I made in the build process that made the design even simpler. For starters, I added an assets module that allows me to import the images en masse. This would make it even simpler for me to add characters to the game if I'd like to in the future. 

As opposed to setting the state for each individual character, I instead imported all over the character objects into a characters array. Each character object has a name, url, and uniqid that gets mapped into a handful of divs that are displayed as a grid. 

When clicking on a character, the characters array gets shuffled by using a handful of high order array functions. First a sort property with a random number gets mapped to each array item. The array is sorted according to the newly added sort property before it is ulimtaley removed with map. Clickling on a character also adds the character to a score array, the length of which is recorded as the score and is passed on as a property value to the score component. The best score is set to the score array length as long as the current best score is less than or equal to the score. If a duplicate is character is clicked, the score array is emptied and the player can play the game again.

Once the game was functional, I worked on styling the page. My work has a lot of depth and layers to it in real life, so I try to acheive the same effect digitally. My favorite trick to getting an image to look the way my art does in real life is to layer a handful of background images over a nested divs. The base layer is the image, over it is a frosted glass effect acheived with blur, and on top is the same image with it's opacity turned way down. The effect gives background image added depth and a bit of a glow. 

Finally, I added a hover function for use in an onMouseEnter and onMouseLeave. This adds a little extra pizzaz when hovering over a character to display their name. 

## Conclusion

Overall a very simple game to make! I completed this project much more quickly than the last react project and am much happier with the overall design–-both with the code and the UI that incorporates my own art! This app may make an appearance again with some updates in a future website I intend on making for my art in particular. 





