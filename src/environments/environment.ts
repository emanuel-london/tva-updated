// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false, // production: false => in enviroment.ts
  config : {
    apiKey: 'your api key goes here',
    authDomain: 'your authDomain goes here',
    databaseURL: 'your databaseUrl goes here',
    projectId: 'your projectId goes here',
    storageBucket: 'your storageBucket goes here',
    messagingSenderId: 'your messagingSenderId goes here'
  },

MAPBOX_API_KEY: 'pk.eyJ1IjoiY29udGVudHNjaWVuY2UiLCJhIjoiY2o2ejVndm9yMjdyZzMzczYwdGh2ZHYyZSJ9.KTnjS1mgEkRatw5noEpYvw'
};
