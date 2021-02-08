- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
   - Using the regular expression `/\d+/` within `url.match()` allows us to find the numeric id within a url for a person/planet/film and use that number as an id to represent the person/planet/film within our redux store.
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
    - This is stored in localStorate. Within `store.js`, we define the config for `persistReducer` to use `storage` (imported from `redux-persist/lib/storage` and which defaults to localStorage for web) as our storage location and the `root` reducer to be the base reducer. `persistReducer` then returns a new reducer (`persistedReducer`) which is used as the reducer for our redux store and uses localStorage to store our visited topics.
  
- What does `combineReducers` do? Why are we using it?
    -  `combineReducers` is a redux method that allows us to write reducers that only worry about a single piece of state by turning an object whose values are different reducer functions into a single reducing function that can be used to create a store. We are using it to simplify our app by writing multiple small & simple reducers that only worry about one piece of redux state as opposed to one long reducer that worries about all/multiple pieces of state.

- How does the "Reset to Fresh Exploration" feature work?
    1. If a film/person/planet has already been added to the redux store, the "Reset to Fresh Exploration" button will apear when on the home page.
    2. When the "Reset to Fresh Exploration" button is clicked, we dispatch an action created with the `resetAll` action creator (the action looks like `{ type: RESET_ALL }`).
    3. The reducer associated with the store then returns a new object with films, people and planets set to `{}` as the redux state.
    4. Because `HomePage` interacts with the redux store, it is re-rendered and now displays the "Start with 'A New Hope'" button since now films/people/planets can be found in the redux store.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
    - They are each simple components that use an `ItemList` component because the code for `ItemList` would have been repeated within `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` if it was not put into its own component. This is good design because now, if we needed to add a new category of items to list, we could easily just include an `ItemList` component with the correct arguments instead of adding additional lengthy and redundant logic.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded. We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
    - This would be worse because if we already had several films that were loaded, we would be selecting an unnecessary amount of films since the value of the `loaded` variable only depends on where at least 1 film has been loaded. Also, this could lead to longer render times.

- What good ideas for designing and organizing React apps have you learned from
  studying this code?
    - I've learned the benefits of creating a `store.js` file that optomizes your redux store for persisting data with localStorage.
    - I've learned how to easily persist data with tools from the `redux-persist` package
    - I've learned the benefits of creating a single reusable component that can be used within different components.
    - I've learned that creating multiple reducers and using `combineReducers` to combine them all simplifies your code.
  
- Which Star Wars character would make the best React developer, and why?
    - Jango Fett - clone troopers were grown from the genetic template of Jango Fett, so he himself is a reusable component.
