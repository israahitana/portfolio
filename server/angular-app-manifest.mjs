
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://israahitana.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 627, hash: '43b090995d9c53b9da785b736a31e679088a07ce4ee9f514a53871835225f2e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 986, hash: 'a1c4659cec98c304a7228c3582363a20e1ee4a987befef8157f261e318b27648', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48615, hash: 'ae9b9700df140930a46fc2ed1d161004f6de1332c72a836cbd51de5383a6952e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OXW2MAEB.css': {size: 29, hash: 'fxngjyxXs5g', text: () => import('./assets-chunks/styles-OXW2MAEB_css.mjs').then(m => m.default)}
  },
};
