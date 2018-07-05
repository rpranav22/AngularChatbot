// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dialogflow:{
    // angularBot: '695a0e748c3f4f1fa036e41751574665'
    angularBot: 'a1afb857776d447492ffbc81337d4a97'
  },

  serverUrl: 'https://core.raplstage.com/api/',
  domainUrl: 'localhost:4200',
  client_secret: 'B4QRIuiopfRyFRqhYf4sZtkW7f7MB6nJwRKv4rp2',
  client_id: 2,
  firebase: {
      apiKey: 'AIzaSyCS2lBDJ3-jqaE09tzyBg2Eott1KpA6LpE',
      authDomain: 'rapl-4fb6e.firebaseapp.com',
      databaseURL: 'https://rapl-4fb6e.firebaseio.com/',
      projectId: 'rapl-4fb6e',
      storageBucket: 'rapl-4fb6e.appspot.com'
  },
  facebookAppId: '358394564582290'
};
