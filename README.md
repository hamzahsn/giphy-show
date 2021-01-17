## Giphy show :fire: :rocket: :cloud: :zap:

## Introduction

This is a small app which shows Gifs trends and search them from the Giphy API and for this I used the minimal configuration to build it using React with typeScript.
In this App I have tried to follow TDD approach, and I have used for testing: [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/) and [Mock-service-worker](https://mswjs.io/) to mock the APIs instead of normal jest mocking to the API calls because with it we can make a real calls but intercepted by the worker from `MSW`.

For this App I made a custom configuration for webpack to run a React app which sits under `/config` folder and I have added also a style guide and linting with prettier guide which their config says so.

I also created a separate styling `lib` which contains my custom components which I use for my application and also in a large scale project there would be so depending on the needs or another design-system with storybook or another tool but I didn't use a technique like BEM or ITCSS...

Under mock folder there sits the config for [Mock-service-worker](https://mswjs.io/) where I have created the handlers for the APIs.

Last but not least, I have tried to make the minimal configuration for this app which I (personally) like to create it from scratch and personalize it depending on the needs without using `create-react-app`.

### Used tools

Because we are rending many images in this app, I have used infinite scroll technique where I used [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) instead of using a ready lib which I found it cool :sunglasses: and I also created lazy-loading-image component with blurred effect to render the image in a low speed connection as well and I have tested it with a slow 3G connection using chrome and working perfectly :grin:

## Quick start

### Client

to run the app, just install the dependencies and then run it:

```bash
npm install
npm start:client

or

yarn
yarn start:client
```

## Client ommands:

| Command                 |             description             |
| ----------------------- | :---------------------------------: |
| `npm run lint`          |    run lint against the project     |
| `npm run lint:fix `     |   fix lint issues in the project    |
| `npm run build:css`     |          build css styles           |
| `npm run watch:css`     |          watch css styles           |
| `npm run dev:client`    | run development without style build |
| `npm run start:client`  |       start the client build        |
| `npm run build:client`  |          build the project          |
| `npm run test`          |         run test of project         |
| `npm run test:watch`    |      watching tests of project      |
| `npm run test:coverage` |          run coverage test          |
| `npm run test:update`   |         update the coverage         |
