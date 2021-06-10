# ESL Highspot Coding Exercise

## Technologies/Tools used

* React - open-source front-end JavaScript library for building user interfaces
* create-react-app - command-line tool from Facebook that allows you to generate a new React project and use a pre-configured webpack build for development
* Axios - promise based HTTP client for the browser and node.js

Once git cloned to local, run the below scripts:

## Installation ##

1. Install all the necessary dependencies

`npm install`

2. To start the application

`npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Once installed, this application will connect to an API to retrieve and show 20 cards, each containing information on the card, as well as allow the user to search for cards by name. To check the details hover on the card which flips the card to show details.

## Modules ##

* The application was created to be modular, allowing the components to be reused.

* Cards, ESLCard, Loader, Search - maintaining a clear separation of concerns for each component. 

* To get the data from API, axios has been used to make http requests. Axios has the ability to intercept HTTP requests. Fetch, by default, doesn't provide a way to intercept requests

* To keep it simple, the application does not use any 3rd party libraries other than axios and react infinite scroll.

* If the features are to be extended I would consider using redux which helps in managing the state but to keep it simple I have used react only.

## Issue ##

Sometimes the first page loads twice, this could be potentially an issue with react-infinite-scroll-component.


## ToDo ##

1. Testing - unit testing and integration testing
Add Jest for component testing

2. Imporove error handling as the API documentation provides status codes with explanations
