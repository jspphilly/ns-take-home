## Coinbase crypto tracker

### Developer Note - Jacob Phillips 1/22/2022

My approach to this project was to try and emulate the style shown within the application creation instructions screenshot without.

I approached the project with a blank canvas, and opted out of using any external styling beyond the inclusion of:
* [React Icons](https://react-icons.github.io/react-icons/)

I'm fairly pleased with the result, though I perhaps spent a little too long on the project considering the initial requirements.

I decided to add a few distinctive pieces of functionality that while not referenced directly in the requirements, I feel are a valid interpretation of the constraints. These pieces are:

* interval (or manual) refresh of the prices
* color and icon based guidance to indicate the price movements (this satisifies the last updated requirement implicitly)
* valid coin hash for limiting the submission of values to only coins found within the hash

### Major Challenges
Free version of the API kinda blows. You can't query for more than one price at a time, no names are returned, and there's no way to get a valid list of all coins to cache.

This prompted me to search for a few simple workarounds:

* cache of large list of crypto key -> name
* found a site that uses a predictable mechanism to provide images of coins
* grouped my calls together and resolved within Promise.All



### Areas for improvement
Lots of stuff here. Only listing the most obvious ones:

#### GENERAL
* increased error checking, handling, and guardian clauses
* more / better comments
* convert to typescript
* MAYBE A TEST OR TWO!

#### APP
* save any tracked coins in local storage (or flatfile)
* transitions
* better sorting (with animation)
* search existing tracked coins
* untrack coins




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
