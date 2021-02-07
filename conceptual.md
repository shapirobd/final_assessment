### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
	- Redux is a JS library that allows you centralize the state for your application.

- What are three features of the Redux developer tool in Chrome?
	- Action:
		- Displays information about the most recent action that was dispatched
	- State:
		- Displays the current state of the Redux store with live updates
	- Diff:
		- Displays what changes were made to the Redux state based on the most recent action.

- What is a store?
	- A store is a refernce to the place where centralized state is stored.

- What is a reducer?
	- A reducer is a function that accepts a state and an action and uses those parameters to return a new state object.

- What is an action?
	- An action is an object that is passed to the store and thus processed by the reducer in order to modify the Redux state. It contains information on what the new state object returned by the reducer should look like.

- What is an action creator?
	- An action creator is a function that creates an action object. Moving your action creators to their own file serves to abstract their logic.

- How does data flow in a React/Redux application?
	1. App is rendered and the store is created, which dispatches an initial action.
	2. The initial state is returned by the reducer.
	3. useSelector runs on all components connected to the store, which allows data to be retreived and renedered by these components.
	4. On dispatch, any components connected to the store that receive new data from useSelector will re-render.

- What is the purpose of the `<Provider>` component?
	- The <Provider> component accepts a prop of a Redux store and wraps around the App comonent, thus providing all components within the app access to information within the redux store.

- What is the purpose of the `useSelector` hook? What does it return?
	- The `useSelector` hook allows you to retrieve the values of certain pieces of state from the redux store. It returns some value or values from the store.

- Describe the `useDispatch` hook. What do you use it for?
	- The `useDispatch` hook returns a reference to the dispatch function from the redux store. You use this hook when you want to dispatch an action to the redux store in order to modify its state.

- What is redux-thunk and why would you use it?
	- Redux-thunk is a middleware for redux that will help us write action creators that return functions rather than action objects. You would want to use it when you want to dispatch multiple times, asynchronously or with additional logic.

- What are propTypes?
	- propTypes allow you to specify the data types you want certain props to be for a given compoent. If these specifications are not met, the app will not break but you will get a warning letting you know that which props are of the incorrect type.

- Describe the `useCallback` hook.  What is it used for?
	- The `useCallback` hook returns a memoized version of a given callback that only changes if one of its dependencies has changed. This is used for preventing unnecessary (and potentially infinite) renders. For instance, if you have a function declared within a component and within that same component you have a `useEffect` that uses that function, the function will be recreated every time the component is rendered, causing the `useEffect` to run again, causing a re-render, causing the function to be recreated, etc. Placing the function within a `useCallback` prevents this from happening because the function will no longer be redefined/recreated on each render unless a given dependency changes.

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
	- SIMILARITIES:
		- both use a similar pattern of accepting a state and an action in order to modify state
		- when we combine `useReducer` with `useContext`, we can centralize our state similarly to Redux and its `Provider` component
	- DIFFERENCES:
		- useReducer:
			- Returns an array with the state object and a dispatch function
			- We wrap `App` in a context provider for the dispatch function as well as a context provider for the reducer.
		- Redux
			- We use `useSelector` to retrieve individual pieces of state from the store and `useDispatch` to create a dispatch function.
			- We wrap `App` in one Provider