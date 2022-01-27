# Edd Williams - TotallyMoney

![image](https://user-images.githubusercontent.com/21102414/151379830-fe0e30cc-b164-496c-9d8c-855104cea6a7.png)
![image](https://user-images.githubusercontent.com/21102414/151379620-0145de41-ce5a-4a96-a129-ab5dedba5b69.png)


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

- Animations are handled using both tailwind transitions and react-transition-group. I used this as an opportunity to try both out and I think tailwind's implementation is nicer but perhaps not as complete as the group
- I think there is something a little off with my configuration of tailwind because hot module reload isn't working with the JIT compiler. create-react-app is likely hiding some things and messing it up, but I didn't want to go down the road of ejecting anything


### Server
- Uses express to provide the routing and HTTP mechanism
- The server determines which cards are available, based on the incoming data
- Designed in a way to make it easy to add more cards and requirements down the line

### Testing
- Uses Jest as the test runner, react-testing-library for rendering
- I'm not overly happy with the UI test suite
    - There are errors when running the tests
    - Had some real problems mocking fetch and because of the transition group I had to mock all those components 
    - This added a lot of complexity that I probably didn't need


```
yarn test // (from either directory)
```

