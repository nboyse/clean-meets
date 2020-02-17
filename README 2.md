# Clean-Meets

## Project Description

Clean-Meets it's a new online platform that connect it users with the main purpose of get together and help the enviroment to create a more direct infield help that it so more needed.
We have created a space where anyone can interact with other enviromentalist and actually do something to stop the contamination or planet earth as well as meeting new people while they do this.

We aim to exhibit the issue that is harming our planet at a face pace and encourage more people to join the cause. We are a non-profit platform that cares about the enviroment and the people who help keeping it safe for the next generations.

### Clean-Meets by Team Green Clean Features:
Sign up page
- User can sign up. 
- If emails do not match, an alert pops up, informing user.
- If any of the required fields are not filled, and alert pops up telling user the field is required. 
- Once all fields completed, page redirects to profile page.  

Login page
- User can login
- If incorrect email or password are entered, no entry to profile page is allowed and page redirects to login page.
- When you click login you get an alert before redirecting to profile page (redirect only happens if log in details are correct.) 
- User can also logout from this page and when they click this button an alert pops up before logging out and redicting to login page. 

Profile page 
- Has current weather forecast which updates itself. 
- Once user has logged in or signed up, profile page shows their name on page.
- User can upload a profile image.
- User can also logout from this page and when they click this button an alert pops up before logging out and redicting to login page. 

Posts page
- Posts are shown as threads with head and a picture.
- User can make a new post from this page or go directly to view a public posts list based on criteria (Category, Location, Activity). 
- User can view public posts.
- User can also redirect back to their profile page and logout. When they click log out an alert pops up before logging out and redirecting to login page.
- Posts are separated by categories,locations and activities.
- The page has a map that allows user to see the location of the place that it will be clean and this links to GoogleMaps to get directions on how to get to the location.
- Users can interact with each other and arrange the future date and activities by posting messages to eachother on a public post..
- Users can upload Pictures to each thread.
- Once on the Post a user has the option of "I'm in" to join a clean party.

----- Extra Features -------

- Users can create a "Clean Network" so they can meet again with the same people and be able to see what their friends are doing.
- User can see how many people are signed for a certain activity.
- there's a people counter on each thread.

#### Tools used in this project

It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for checking syntax and rule following.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Bootstrap] (https://getbootstrap.com) for css
- [FontAwesome] (from https://fontawesome.com) for css
- [bCrypt] for our password security 
- [MethodOverride] to allow a subclass or child class to provide a specific implementation of a method that is already provided by one of its superclasses or parent classes.
- [Flash] to prompt the user messages when features are tested.

## Card wall



## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of Node.js, currently `10.16.3`.
    ```
    nvm install 10.16.3
    ```

### Set up your project

1. Fork this repository
1. Rename your fork to `acebook-<team name>`
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```

### Start

1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)

### Test

* Run all tests
    ```
    npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.
```
npm run start:test
```
This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.
