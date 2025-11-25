
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://israahitana.github.io/portfoliop/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfoliop"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 628, hash: '82482ae5e6855518a8ca88babf9fdc3ee18223a31e2bbc5d371051dc4cd3f88d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 987, hash: 'ccbb78e8cfcf1c0df58a806d4a27acdc13670afb9579a6873e1358d2eba13d8e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48616, hash: '13c768d404fe510b07aaa5f6c6c21a0ec9a05ed4df819948f0d08f1396bdd638', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OXW2MAEB.css': {size: 29, hash: 'fxngjyxXs5g', text: () => import('./assets-chunks/styles-OXW2MAEB_css.mjs').then(m => m.default)}
  },
};
