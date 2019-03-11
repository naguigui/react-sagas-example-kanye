# Redux sagas example with Kanye West Quote API

This is a demo of how to set up Redux Sagas and fetching the famous quotes from Kanye West.

Used
```
redux-saga
redux-actions
react-redux
```

This also includes how to test redux, our smart components, and our dumb components with enzyme. Setup may be different for other react applications but since this app was made with CRA (create-react-app), it accepts a `src/setupTests.js` to configure its jest config. 

If you are working on a barebones React app which requires a webpack setup, you also need to have a jest config in your package.json to use enzyme.

An example would be:

```
jest: {
    "setupFiles": [
        "./src/setUpTests.js"
    ],
}
```

To Run:

```
Clone the repository
npm install
npm start
```