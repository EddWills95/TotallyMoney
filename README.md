# Edd Williams - TotallyMoney

## Running
UI:
```
cd ui
yarn install
yarn start
```

Server:
```
cd server
yarn install
yarn dev
```

## Explanations
### UI
- React application which contains a form to take customer data
- Also has a mechanism to fetch a previous result based on this table:

| Code  | Cards |
| ---   | ---   |
| 100   | Student |
| 010   | Anywhere |
| 001   | Liquid |

- You can add the numbers to provide more than one card. I.e. `111` will return all the cards
- I did this to make it easier during testing. It's also the start of a nifty feature

- Animations are handle using both tailwind transitions and react-transition-group. I used this as an opportunity to try both out and I think tailwind's implementation is nicer but perhaps not as complete as the group


### Server
- Uses express to provide the routing and HTTP mechanism
- The server determines which cards are available, based on the incoming data
- Designed in a way to make it easy to add more cards and requirements down the line

### Testing
- Uses Jest as the test runner, react-testing-library for rendering

```
yarn test // (from either directory)
```