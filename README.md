<!-- ## SRC
# Components
# Header
# Compendium (Main)
- Pokemon component - display pokemon details for each pokemon
# Controls
- Select - dropdown
# Footer

# Services
- pokemon.js - to fetch all the information
    - fetch pokemon function
    - fetch type function
# Hooks
- usePokemon.js

## State
- Pokemon - get from API
- Type - get from API
- Selected Type - state controlled by the select component 
- Loading

## Events
- on page load, useEffect to display the whole list of pokemon and their types 
- filter by selected types 
    - pass selectedTypes state into the dependency array 
    - this will need to be a separate API call using the fetch type function  -->

<!-- ## Plan - order of operations
1) Set up header main and footer layout - passed into App.js (done)
<<<<<<< HEAD
2) Load list of pokemon 
    1) Set up fetch pokemon function (done)
=======
2) Load list of pokemon (done)
    1) Set up fetch pokemon function
>>>>>>> 62b1c684fd5d26439294c6a865461e8e2ec67d53
    2) Import data from fetch into hook (useEffect)
    3) Pass the hook into compendium that will map and render the html elements
    4) Pass the compendium into main to display
3) Set up dropdown with types state as each option 
    1) set filter type function 
    2) add the eventHandler for the type changing (the state and the setter function that is passed into the dependency array) -->