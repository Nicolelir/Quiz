# <p style="text-align: center;">Rock, Paper, Scissors, Lizard, Spock</p>

![Logo](/assets/images/logo.png)

[Click here to view the live web application](https://nicolelir.github.io/Rock-Paper-Scissors-game/)

The classic rock, paper, scissors game including the variation of lizard and Spock. This is an interactive front-end site that provides entertainment for people of all ages because of its straightforward rules and clear messaging.
Users will be able to play a fun and entertaining game of Rock Paper Scissor Lizard Spock against the computer and, after three rounds, see a clear message on who the winner is. 

Not sure what Rock, Paper, Scissors, Lizard, Spock is? [Check out this clip from The Big Bang Theory](https://www.youtube.com/watch?v=iSHPVCBsnLw)

## Index - Table of Content

- [User Experience (UX)](#user-experience-ux)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

## User Experience (UX)

The site’s users want to play an online game that has elements of chance.
The site’s goal is to provide a challenging game with increasing levels of difficulty to entertain online users. 

### User stories 

- As a player, I want to be able to choose from rock, paper, scissors, lizard, or Spock so that I can have a variety of options when playing the game.
- As a player, I want to see clear and understandable instructions on how to play the game, including the rules and what beats what, to ensure I understand the gameplay.
- As a player, I want to be able to play against the computer in single-player mode so that I can enjoy the game even when I don't have someone else to play with.
- As a player, I want the game to have different difficulty levels (easy, medium, hard) so that I can choose a challenge level that suits my skill level.
- As a player, I want the game to keep track of my wins, losses, and ties so that I can track my progress and improve my skills over time.
- As a player, I want the game to have engaging visuals and sound effects to enhance the gaming experience.
- As a player, I want the game to provide feedback on my choices and the outcome of each round so that I can understand why I won, lost, or tied.
- As a player, I want the option to play against another player locally or online so that I can compete with friends or other players around the world.
- As a player, I want the game to have a quick and easy-to-understand interface so that I can jump into gameplay without any unnecessary delays or confusion.
- As a player, I want the option to customize the game settings, such as the choosing the rounds or a mute button for sound effects.


## Design

Wireframes were created using Balsamiq. The sections below show individual wireframes for different devices:

- Desktop layout
- Tablet layout
- Smartphone layout

## Technologies Used

### Languages

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries and  Tools

- [Am I Responsive](https://ui.dev/amiresponsive) - Used to verify responsiveness of website on different devices.

- [Bootstrap v5.3.2](https://getbootstrap.com/) - Used to help with the responsiveness of the site and to aid the coding of some of the layout

- [Balsamiq](https://balsamiq.com/) - Used to create the wireframes during the design process

- [Favicon.io](https://favicon.io/) - Used to create and add the favicon to the browser tab

- [Font Awesome](https://fontawesome.com/) - Used to add icons to the site for aesthetic and UX purposes.

- [GitHub](https://github.com/) - Used to store the project code after being created in GitPod 

- [Gitpod](https://www.gitpod.io/) - Used to create, edit & preview the project's code

- [Google Fonts](https://fonts.google.com/) - Used to import the 'Reboto' and 'Exo' fonts into the style.css file which are used on all pages of the project.

- [Smartmockups](https://smartmockups.com/) - Used to develop the wireframes in to a full mockup including colours, fonts, proportions, etc
  
- [Visual Estudio Code](https://code.visualstudio.com/) - Application used for development of this site.

- [W3C](https://www.w3.org/) - Used for HTML & CSS Validation.

- [WAVE](https://wave.webaim.org/) - Used for Accessibility evaluation.

## Features

### The Rules

1.	Open the website and view the game title. Iwill displayed two buttons: "How to play" and "game".
2.	In the game section, you'll find buttons for Rock, Paper, Scissors, Spock, and Lizard. 
3.	Click on one of the buttons to select your move. The computer will automatically make its move.

The rules are:
- Scissors cuts paper
- Paper covers rock
- Rock crushes lizard
- Lizard poisons Spock
- Spock smashes scissors
- Scissors decapitates lizard
- Lizard eats paper
- Paper disproves Spock
- Spock vaporizes rock
- Rock crushes scissors

4.	The result of each round will be displayed in the Overall results section, showing both choices and the outcome.
5.	The Progress Bar will keep track of your rounds and after 3 rounds the winner will be displayed on the screen

 To increase the difficulty of the game we created 3 levels: 
 
#### Level: Normal   
The previous steps detail the game in normal mode.

#### Level: Lightning  
  For the lighting mode we add a timer of 30 seconds in which the player can click as many times as they want within 30 seconds of the game. After that time, the overall result is displayed and a "play again" button will show. There is a "reset button" during the game in case the player wants to restart their game.

#### Level: Difficult 
 It has 3 rounds, just like the normal mode, however, in this game, every time the computer wins it will score two points instead of 1!


### Intro page


### Choose your level

### Timer

### Progress bar

### Declaration of the winner 


### Replay the game

At the end of the game, a "Play again " button will be available. You can click this button if you want to play the game again and enjoy another round of Rock, Paper, Scissors, Lizard, Spock!

## Features Left to Implement


## Testing

### Validator testing

The website was tested using the tools made available by the World Wide Web Consortium, also known as "W3C".

The two tools used were the Markup Validation Service and the CSS Validation Service. Both tools were used to test the website by URL and also by direct input, with the results shown below.

No errors were returned for all HTML or CSS across all tests. Some warnings were displayed.

- HTML Validation by Direct Input
     
- CSS Validation by Direct Input

- JavaScript


### Manual testing

The site was tested manually across a range of devices to ensure all links and styling work correctly and to ensure responsiveness across a range of devices. All features on the page were tested, to ensure functionality was not impacted in any way. 

### Browser Compatibility

Testing was carried out on multiple browsers such as Google Chrome, Microsoft Edge, Mozilla Firefox, Brave,  Safari and Opera. Testing was carried out on an Apple iPhone, Apple iPhone 13, Samsung Galaxy S20 FE, Samsung Galaxy A51 and Apple iPad Pro.

### Lighthouse Testing

A test was ran using Lighthouse within Google Chrome to verify performance and accessibility standards were met and to ensure best practices were followed.
The full report can be viewed [here]().

### Bugs Fixed

In a first version of our project we had a problem displaying the results. The results player/computer displayed "a draw" everytime the user cliked a button and the overall results was always a draw as well. This happened because the function that was supposed to count and update the scores was not working properly.

![Results display](/assets/images/print_tally_0.png)

## Deployment 

### GitHub Pages
The site was deployed to GitHub pages. The steps to deploy are as follows: 

1. In the GitHub repository, navigate to the Settings tab
2. From the left hand menu select 'Pages'
3. From the source select Branch: main
4. Click 'Save'
5. A live link will be displayed when published successfully.

The live link can be found [here](https://nicolelir.github.io/Rock-Paper-Scissors-game/).

### Forking the GitHub Repository
You can fork the repository by following these steps:

1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner

### Cloning the GitHub Repository

You can clone the repository to use locally by following these steps:

1. Navigate to the GitHub Repository you want to clone
2. Click on the code drop down button
3. lick on HTTPS
4. Copy the repository link to the clipboard
5. Open your IDE of choice (git must be installed for the next steps)
6. Type git clone copied-git-url into the IDE terminal

The project will now be cloned locally for you to use.

## Credits

### Code

- Bootstrap 5: Boostrap library used throughout the project for layout and responsiveness using the Bootstrap Grid System.
- Favicon.io: Used to create the site Favicon and provided the code in the head of all pages.

### Content



### Media

- The icons in the ----------------were taken from--------------------------
- The fonts used were imported from Google Fonts.
- The images used were imported from ---------------------------

## Contribution

- **Scrum Master: Nicole Elizabeth Valdes**
- **Katie Coughlan**
- **Ryan Ferris**

### Acknowledgements

- The whole team at Code Institute for their teaching and support.
