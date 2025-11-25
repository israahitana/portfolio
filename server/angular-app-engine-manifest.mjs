
export default {
  basePath: 'https://israahitana.github.io/portfoliop',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
