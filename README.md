# React Seed Project

This repo provides a way to quickly bootstrap a new React project with the following all included:

- React
- Redux
- Redux Sagas
- Emotion styled components and themes
- React Router
- Storybook
- Enzyme
- Airbnb linting

This was built using Create React App and is therefore managed with react-scripts.

## Project Structure

```bash
├── .storybook                  <-- Storybook config
├── public                      <-- Any public files such as images
├── src
│   ├─ api                      <-- Code for calling external API endpoints
│   ├─ components               <-- Shared components
│   ├─ helpers                  <-- Helper functions
│   ├─ hocs                     <-- Any higher-order components
│   ├─ hooks                    <-- Custom React Hooks
│   ├─ store                    <-- Redux code (see below)
│   ├─ stories                  <-- Storybook stories for components
│   ├─ styles                   <-- Global styles and themes
│   └─ views                    <-- Components for a particular route
├── .env.deployment             <-- Dev specific config
└── .env.production             <-- Prod specific config
```

For the redux structure, this project follows [re-ducks](https://github.com/alexnm/re-ducks) architecture.

## Run Locally

In order to bring up the project locally, you can run `npm start` to start it on `localhost:3000`.

## Building

In order to build the React bundle, run `npm build`.

## Testing

Tests are run using Jest and can be started by running `npm test`. Test coverage can be generated using `npm run test-coverage`.

Linting rules can be run using `npm run lint`, certain linting errors can be addressed automatically by running `npm run lint-fix`.

As well as this, `husky` is used to run both the linting and tests as a pre-commit hook to prevent commiting code that fails either of these.

## Storybook

Storybook is used as a component library. New components can be developed in isolation within Storybook before migrating it into the main application.

To start storybook, simply run `npm run storybook`. If you wish to build the storybook as a bundle in order to host it, you can run `npm run build-storybook`.
