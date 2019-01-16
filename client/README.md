## `First Steps`

### Make sure NodeJS is installed

https://nodejs.org/en/download/

### Navigate to /cient in terminal
 
### Install Dependencies

```sh
npm install
```

## Usage

### Launch the local Web Server and watch for changes

```sh
npm start
```

Runs the app in development / production mode using Webpack dev server.
Open [http://localhost:3000](http://localhost:3000) 🎉 to view it in the browser.

### Run Tests

```sh
npm test
```

Runs the unit tests using Karma as test runner and Jasmine as testing framework.

### Bundle for Production

```sh
npm run build
``` 

Creates a bundle into the `dist` folder:

## Editing

### All Typescript code is in the /src folder

If using an IDE that support Typescript bindings (e.g. vsCode), you will get real-time syntax and type errors and autocomplete/intellisense menu as you type. 

### Typescript auto-compiles into JavaScript any time a save is made to a .ts file

Additionally, the Web Server refreshes the browser each time a recompile takes place