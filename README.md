# SoldPriceMapClient

This is the client side component of the Sold Price Map technical challenge. The UI can be accessed at https://soldprice.davidnorton.app/

Client Source Code: https://github.com/piemasters/SoldPriceMapClient
Server Source Code: https://github.com/piemasters/SoldPriceMapServer

## Local Setup

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Challenge
You have been given a [set of data points](data/sold-price-data.txt), with each item taking the following form:

```
X Y P
```

where `0 <= X < 100` and `0 <= Y < 100`, and `10000 < P < 10000000`.
`X` and `Y` represent the coordinates of a house which has been sold, and `P` is the price in which it was sold. For example, the point "`5 10 100000`" would be interpreted as a house sold for £100,000 at the point `(5, 10)`.

Using this data plot each point on a grid. The points should be filled with a colour representing how expensive a house was in relation to other houses. The choice of colour is up to you, however, you should use a different colour for each of the following groups:

- 0% - 5%
- 5% - 25%
- 25% - 75%
- 75% - 95%
- 95% - 100%

## Technology Stack
Below are the technologies I have chosen to use for the challenge and the reason chosen:
- Angular 7 - Familiarity  with the framework
- Typescript - Bundled with the Angular CLI, great for creating models for type-checking
- Material - Quick & simple to setup and use
- ng2-charts - Angular directives for Chart.js, one of the most popular charting libraries with the functionality required for the proposed challenge
- RxJS - To allow use of the Observable type for simplifying async operations
- Karma - Bundled with the Angular CLI for running tests
- Protractor - Bundled with the Angular CLI for running integration tests
- Jasmine - Used for writing unit and integration tests as it comes already setup with Angular CLI

## Solution Design

The UI will be broken down into the following components:
- App - Wrapper for the application
  - Header - The navbar for the application, used to access all routes (only the SoldPrice route in this case)
  - SoldPrice - Used as a container for all SoldPrice components and to store their state
    - SoldPriceGrid - Binds to the server response data held in SoldPrice component and renders a grid in the required format
    - SoldPricesService - Handles sending the request to the server and handling the response 
    - SoldPriceForm - Used to configure the query parameters used by the SoldPricesService and triggers the request. Sends the response to the SoldPrice component so that the SoldPriceGrid can be updated.
