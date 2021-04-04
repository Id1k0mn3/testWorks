# Memory Game Project



Get The Starter Code
--------------------

If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project to use.

You can download the starter code through either:

*   [the Memory Game project repository on GitHub](https://gitlab.com/frontend_study/online-interactive-resume/tree/master/more-steps)

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the theese courses: 
[js basics](https://classroom.udacity.com/nanodegrees/nd001/parts/3d3d1bdc-316b-46c2-bdcf-b713c82804da).

Project Rubric
--------------

Your project will be evaluated by a Udacity code reviewer according to the [Memory Game project rubric](https://review.udacity.com/#!/rubrics/591/view).

Version Control
---------------

We recommend using Git from the very beginning. Make sure to commit often and to use well-formatted commit messages that conform to our [Git Style Guide](https://udacity.github.io/git-styleguide/).

Development Strategy
--------------------

It's very important that you plan your project before you start writing any code. Break your project down into _small_ pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick by brick.

### Most important things are:
* First of all You should use MVC-like pattern to solve this task. 
* Game maker must be customizable. For example if You pass count of cells of the gameboard to input **((M)odel)** in .html file script should generate **((C)ontroller)** field accordingly: (2) => 2 x 2, (10) => 10 x 10 and so on. 
In .html file is generated static gameboard. You must replace it with your own dynamic gameboard **((V)iew)**.

### Next steps: 
*   Start by building a very simple grid of cards.
    *   Don't worry about styling, just get something clickable on the page.
    *   Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?
*   Add the functionality to handle clicks.
    *   This should reveal the hidden side of each card.
*   Work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?
*   Work on the winning condition. How does your game “know” if a player has won?
*   We recommend saving styling until the very end. Allow your game logic and functionality to dictate the styling.

Style Guides
--------------------

You should write your code and markup to meet the specifications provided in these style guides:

*   [JavaScript Style Guide](https://github.com/airbnb/javascript#types) - 
  but You should not place `;` at the end of the line
*   [Git Style Guide](https://udacity.github.io/git-styleguide/)
