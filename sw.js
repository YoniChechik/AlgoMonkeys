(()=>{"use strict";var e={136:()=>{try{self["workbox:core:7.0.0"]&&_()}catch(e){}},447:()=>{try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},227:()=>{try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},390:()=>{try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}s(136);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[i.prefix,e,i.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||r(i.precache),o=e=>e||r(i.runtime);function h(e,t){const s=t();return e.waitUntil(s),s}s(447);function l(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),i=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:i.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=t?t(i):i,c=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,r)}function g(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class y{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(390);function v(e){return"string"==typeof e?new Request(e):e}class m{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new y,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=v(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new n("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:i,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=v(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,t){const s=v(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const i=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=g(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===g(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=v(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class R{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new m(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(n){if(n instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class b extends R{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(b.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const n=a.integrity,i=e.integrity,r=!i||i===n;if(s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||n:void 0})),n&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==b.copyRedirectedCacheableResponsesPlugin&&(a===b.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(b.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}b.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},b.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class C{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new b({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=l(s),i="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,i),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return h(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return h(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}s(227);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"3bd81196756e7caf97f22980b78b915f","url":"404.html"},{"revision":"479c2e9e33d90723b8d5d2c1048c9882","url":"accessibility.html"},{"revision":"89f003681b27d9181b67ff5d6757d9e8","url":"assets/css/styles.1ddda47b.css"},{"revision":"1597a49c7b31140e93c5e791dccb82d6","url":"assets/js/0058b4c6.4dd118c2.js"},{"revision":"a38ce815949b7d74133e2a2db76e355c","url":"assets/js/09267b88.71554d54.js"},{"revision":"0c2c3f4cd59d3ca7a89a1a495acac666","url":"assets/js/0e384e19.38964fba.js"},{"revision":"e57cb24b55a23ea16f6892a5c84c4c00","url":"assets/js/17896441.9c8b3b62.js"},{"revision":"7b835fa037a1be1f95448b37cde4c2aa","url":"assets/js/1cc5b5de.1e744314.js"},{"revision":"ac438afe6133cd9cd0fe094e83d88349","url":"assets/js/1f391b9e.1dc50fe9.js"},{"revision":"9e0d27739f9b24961cb911dc9739675d","url":"assets/js/248.d6068103.js"},{"revision":"3cd083a2b6e5fab84d70f75bf09002f9","url":"assets/js/40d47399.92631cb0.js"},{"revision":"5682c4f27ad01f58c494a3cead325d51","url":"assets/js/47414879.936820f9.js"},{"revision":"8853f3692d04e2ae9d143e615f7eb4a9","url":"assets/js/47f17b81.90b2fb4a.js"},{"revision":"1979de893a3be5f234e9299180cd732c","url":"assets/js/560.90cd116f.js"},{"revision":"5e826d44f4baf50df2e93a48002f1a9f","url":"assets/js/5e95c892.6158aa81.js"},{"revision":"b84b39049ce43f05585ec360c705eac7","url":"assets/js/616.06d72c4f.js"},{"revision":"68975edfc78a9728ab6a7fdcb3713192","url":"assets/js/691.352e154d.js"},{"revision":"de89c27f97e603a82ab40de64150150c","url":"assets/js/730.ab70de9a.js"},{"revision":"a26d1b5f49510aeab615bd0dbeb2feee","url":"assets/js/794894c6.09085013.js"},{"revision":"d7a2ccbc27501cdd8c5b6320404f1886","url":"assets/js/7d2f9deb.29146d50.js"},{"revision":"4d7a7bfd904c1419ee6d34986d0e01ee","url":"assets/js/80e81b0a.368f0872.js"},{"revision":"675e03f315592ba1262a54eab3e99b85","url":"assets/js/828.45f6c67e.js"},{"revision":"2d2e2a94cafdcec265baae836c9b0d82","url":"assets/js/9531a6f3.c6c0f2cb.js"},{"revision":"fb854182a2beadc386c4f17dfc5bad4c","url":"assets/js/9bf989c6.5ed797b9.js"},{"revision":"c642724c2a83c52edf898ad89c657e5c","url":"assets/js/a7456010.d27e4924.js"},{"revision":"b97382aa4e9bfa8c2be492638c0d74d2","url":"assets/js/a7bd4aaa.f45d9a89.js"},{"revision":"9b0a9e4488af5a5b60e9e42503b2b534","url":"assets/js/a94703ab.6907454c.js"},{"revision":"1cbfc85f09b914113b4931975a5aa60c","url":"assets/js/aba21aa0.bddde0da.js"},{"revision":"6f5bf4cf5187135c05332b117b66979c","url":"assets/js/b4968a92.08ea5bed.js"},{"revision":"f124bf675e929da811def4296fe818c8","url":"assets/js/c4f5d8e4.762b27d5.js"},{"revision":"5166d463b55eba4f46ad2136a0ec7763","url":"assets/js/c5f91b69.b1f79ee6.js"},{"revision":"8ed4007dd97a743a2c3bdbb625470cef","url":"assets/js/cf16dee5.f091c265.js"},{"revision":"837e789c2e9df23e1e7b21c3864150e7","url":"assets/js/ebd2c2fc.bbf60aa8.js"},{"revision":"0805581bae329870aa9b43ad992b370e","url":"assets/js/main.63eeda29.js"},{"revision":"b9ad7f76fe093eaa84fe5c2acdf02658","url":"assets/js/runtime~main.ce6d55d9.js"},{"revision":"466b16cef33cb65cb1902055ceb68717","url":"docs/basic_image_processing.html"},{"revision":"61772877a636d9b6bdb91d51db5f8ec6","url":"docs/camera_calibration.html"},{"revision":"e51f3b419da09c3e760a24afa5eff4ac","url":"docs/convolutional_neural_networks.html"},{"revision":"6851fba709844ab0ed1625bc84ce2964","url":"docs/curve_fitting.html"},{"revision":"8e163e55f37f7a705d4d3523e9d210a9","url":"docs/edge_detection.html"},{"revision":"ce6c97a543b660f583e2d6f3b3ddb857","url":"docs/features.html"},{"revision":"651a08e61d6f6915d68d3292dc9d1e7d","url":"docs/filtering_and_resampling.html"},{"revision":"fc05eb2417d07e5903578393b42a9c23","url":"docs/geometric_transformation.html"},{"revision":"5073c0aaeb410831dd6f445b739a22b7","url":"docs/hough_transform.html"},{"revision":"b0b8e21131295d015d3c16339f8b2a38","url":"docs/image_formation.html"},{"revision":"70dcfb095e0dcd8b4e09e1d2b2350276","url":"docs/intro_to_computer_vision.html"},{"revision":"d22008cccd5222f18d57f3840874aa29","url":"docs/intro.html"},{"revision":"345414ab9213f54c1319f6375e103921","url":"docs/neural_networks_basics.html"},{"revision":"cc0dc4802101eca6115808c6898896e7","url":"docs/stereo.html"},{"revision":"d0c5392595b570172953cf2994b2b3a9","url":"index.html"},{"revision":"f2e4452d40f71520411734780b5ec3e0","url":"katex/katex.min.css"},{"revision":"babf7e089730666ca877f52af72a1747","url":"manifest.json"},{"revision":"c169d1539ea58b7bc5a9a75ca8c5bea4","url":"assets/ideal-img/ador.8de8f15.100.png"},{"revision":"9f530f1a992617c2e551a32a9c3db357","url":"assets/ideal-img/ador.8eba0a0.135.png"},{"revision":"73d221cce6f147500c9c499373aea17c","url":"assets/ideal-img/applydesign_black.374c7a2.100.png"},{"revision":"592b4dd53505d87c51134c39319b6905","url":"assets/ideal-img/applydesign_black.817b8e3.400.png"},{"revision":"4b69bdac69ff27b4bc6cfcb4663fe5c3","url":"assets/ideal-img/applydesign_black.cabe7f6.665.png"},{"revision":"24423b5de2643577eaf444149cde9e96","url":"assets/ideal-img/applydesign_black.f9ba86e.200.png"},{"revision":"7c5091665cc4f6e273b93aff2568168a","url":"assets/ideal-img/applydesign.30193d5.665.png"},{"revision":"1c016b6497dd9a396327ef9bca393bd0","url":"assets/ideal-img/applydesign.6d4affc.200.png"},{"revision":"c947d816ddb3eb25bf72ecd9d9a4fed7","url":"assets/ideal-img/applydesign.6ef351c.100.png"},{"revision":"65db7704274af222c5450681cba1a16e","url":"assets/ideal-img/applydesign.bcd6bf7.400.png"},{"revision":"bf27f9669699e422ede3fa388eeecc16","url":"assets/ideal-img/beewise_black.287d7f8.100.png"},{"revision":"a2d7140e2e00af1ac74dcda1ec0262a2","url":"assets/ideal-img/beewise_black.955a77d.200.png"},{"revision":"d4b131a410685f55ed736da2fd1214a6","url":"assets/ideal-img/beewise_black.a222ad6.400.png"},{"revision":"393ff6beadb1b662e6db0ca1107b7cdd","url":"assets/ideal-img/beewise_black.b4cb8f7.1200.png"},{"revision":"4f876d106db7c39af50cc637261c4244","url":"assets/ideal-img/beewise_black.bd11704.800.png"},{"revision":"065e5023b091df68d744fbab9a625f36","url":"assets/ideal-img/beewise_black.dc250fd.1600.png"},{"revision":"c26546758ef7c24d5c70ca7609a4ec4b","url":"assets/ideal-img/codiq_black.4653c69.329.png"},{"revision":"eef12582ff29e8f0c4c75c6a607c2cad","url":"assets/ideal-img/codiq_black.5f85f79.100.png"},{"revision":"504e68cbd7dbcd01dc5e400a5661aa2b","url":"assets/ideal-img/codiq_black.8b5c781.200.png"},{"revision":"efdb5023983bc939093b06579a19e40a","url":"assets/ideal-img/firmus_black.78562ad.100.png"},{"revision":"bcd820fa273b5cc51c696df1f417c306","url":"assets/ideal-img/firmus_black.7f0f410.759.png"},{"revision":"155af21f05f6759f474e0dd03301df69","url":"assets/ideal-img/firmus_black.c6bab88.200.png"},{"revision":"e583c4a821d4e61fb8d6ef130813864f","url":"assets/ideal-img/firmus_black.d1be4fa.400.png"},{"revision":"0e6314d41c6b03198c617215260cd5fc","url":"assets/ideal-img/medhub_black.38a2795.751.png"},{"revision":"0036db0d7831fe2488a99a514fb90246","url":"assets/ideal-img/medhub_black.570e62f.100.png"},{"revision":"9470a72df22d0617854f8edb35dd3f97","url":"assets/ideal-img/medhub_black.a040a98.400.png"},{"revision":"dc1159c8035037e2ed6d7e4bbdb8a8c5","url":"assets/ideal-img/medhub_black.af4f0eb.200.png"},{"revision":"b17159f148b8f7b743e277e0d6cc3439","url":"assets/ideal-img/yoni.1dbaa0b.100.png"},{"revision":"7eea17bd71d04e81fd2400c18a1eac9d","url":"assets/ideal-img/yoni.365e70c.400.png"},{"revision":"3562810ef73fd7a0d5d154ed32d9da66","url":"assets/ideal-img/yoni.3ab907c.200.png"},{"revision":"a71ff22973000e3eef4c47e02f0612b1","url":"assets/ideal-img/yoni.c161479.1000.png"},{"revision":"66ccf8a3c7dfa87ff25d4b4daef2191e","url":"assets/ideal-img/yoni.f8a47e9.800.png"},{"revision":"cb9e796a701abfa45131a320d1465023","url":"assets/images/applydesign_black-1cd5bbcf79eae387850be816c3441502.png"},{"revision":"ed40e1fbc220a55ef9d3498e377da034","url":"assets/images/applydesign-32c6c2dc41ecef1ce4f9fc4e93613466.png"},{"revision":"e981df3ad12e73ac1837fc9ca0de0c4f","url":"assets/images/beewise_black-287c5fbfce440b27651745b64c4672a8.png"},{"revision":"385057bc8f603780ea7f2400870b4fde","url":"assets/images/codiq_black-5ec2272b4beaeb1cb0e05b1bef3c95ad.png"},{"revision":"9927c02e5c3c9f0a337d284f3bb3fea3","url":"assets/images/firmus_black-d8d84ed30499924b05dc5bedf987d910.png"},{"revision":"17d2a49f216019495483b4460a1046ab","url":"assets/images/medhub_black-85d2c4d3f265cd220615a317075793a1.png"},{"revision":"cb4beaf9cfc54a418acbd1d52d89ccc2","url":"assets/images/yoni-507c98539adcfe8da902c55e0b782e0f.png"},{"revision":"ef44fa2dc2dc5057e5533c2c84c9b3a1","url":"img/algomonkeys_logo.svg"},{"revision":"163368a2ccdf3c57286ae1da812eeb0e","url":"img/banana.svg"},{"revision":"7a16d3ed9e314ca89ba88c30c4776d66","url":"img/favicon.ico"},{"revision":"f34b071fd0560cba6d1a53918c5b4daf","url":"img/logo_bg.svg"},{"revision":"7cd5ca63f3f3219ba10ed95bddb77f7c","url":"img/logos/ador.png"},{"revision":"a0ef2e03f60ebf359a1036247d7ed9e6","url":"img/logos/agadolive_black.svg"},{"revision":"11c91bcdbcb2f0c1a0a3f59131e69e1b","url":"img/logos/amp.svg"},{"revision":"cb9e796a701abfa45131a320d1465023","url":"img/logos/applydesign_black.png"},{"revision":"ed40e1fbc220a55ef9d3498e377da034","url":"img/logos/applydesign.png"},{"revision":"e981df3ad12e73ac1837fc9ca0de0c4f","url":"img/logos/beewise_black.png"},{"revision":"cade12ba88484a31755093d808827d7a","url":"img/logos/buildots_black.svg"},{"revision":"e842bdf2cdac52b8a996d799aee9ff97","url":"img/logos/carevature_black.svg"},{"revision":"f3ba7f68cfbf675dc101329717c8132f","url":"img/logos/carevature.svg"},{"revision":"ba172bfec95f3e5be5d2cee5e2370423","url":"img/logos/clarityo.svg"},{"revision":"bce8fb397a8ec870881e87b439bb6ab3","url":"img/logos/classiq_black.svg"},{"revision":"385057bc8f603780ea7f2400870b4fde","url":"img/logos/codiq_black.png"},{"revision":"5fd462a2dc6f6a2624124a20587b03ee","url":"img/logos/deepchecks_black.svg"},{"revision":"f6fdde8ad475dfe009c7e225d42691a1","url":"img/logos/eyecontrol_black.svg"},{"revision":"9927c02e5c3c9f0a337d284f3bb3fea3","url":"img/logos/firmus_black.png"},{"revision":"19a75b4c56cae628aa178395815000f4","url":"img/logos/itc.svg"},{"revision":"4db6ffc8b5d9a0b55cd600e88dec3c00","url":"img/logos/mdhair.svg"},{"revision":"17d2a49f216019495483b4460a1046ab","url":"img/logos/medhub_black.png"},{"revision":"d8176c827488c0f241e1a5aecc6e2b0e","url":"img/logos/simplex_black.svg"},{"revision":"d3d964455fa0ac2857cb1031017f609a","url":"img/logos/simply.svg"},{"revision":"516506636b93cd95e5f776d76572f413","url":"img/manifest_icons/icon-192x192.png"},{"revision":"5891989bea085b00793bb05fc9aabdfa","url":"img/manifest_icons/icon-256x256.png"},{"revision":"1804684a2cf0c69420248ce46c8d39ca","url":"img/manifest_icons/icon-384x384.png"},{"revision":"805b774f196f60768ef2983411c8f0d8","url":"img/manifest_icons/icon-512x512.png"},{"revision":"f4e76f53072082f4026372aadf56d196","url":"img/manifest_icons/maskable_icon_x128.png"},{"revision":"17057fdb2cd9260e042dd26a2d9887a3","url":"img/manifest_icons/maskable_icon_x192.png"},{"revision":"dcdf8ffc37168fe986539caddd4cd599","url":"img/manifest_icons/maskable_icon_x384.png"},{"revision":"98233a3c4bbab10cde979bf1b50c7c87","url":"img/manifest_icons/maskable_icon_x48.png"},{"revision":"a1fbf63c378837ecf13828917470acdb","url":"img/manifest_icons/maskable_icon_x512.png"},{"revision":"675974148f8377f7d679434ddfd83a5d","url":"img/manifest_icons/maskable_icon_x72.png"},{"revision":"0d8967c72f1f0f4d9723c6d5a7e3e13c","url":"img/manifest_icons/maskable_icon_x96.png"},{"revision":"bb91c995ad9f5f1226c836d3480af168","url":"img/meta_image.jpg"},{"revision":"1f7f5ab79b54cac2b0222055e35565e6","url":"img/programer_monkey.svg"},{"revision":"310f19a766be765c86dbcf8d97c08ecc","url":"img/quotation.svg"},{"revision":"231528f9156d939578b71bde7a6153ec","url":"img/three_dots.svg"},{"revision":"8eff4944f5cddb5692a387591dc2aa65","url":"img/what_we_do_icons/ar.svg"},{"revision":"9188c3f2c07f4715f58cb52cf618ed00","url":"img/what_we_do_icons/cloud_chip.svg"},{"revision":"7e43b84720d8deb84a5f76fccd9300b6","url":"img/what_we_do_icons/data.svg"},{"revision":"0804d436f4b9cf3fb72885657b7cc38f","url":"img/what_we_do_icons/eye.svg"},{"revision":"cb4beaf9cfc54a418acbd1d52d89ccc2","url":"img/yoni.png"},{"revision":"66c678209ce93b6e2b583f02ce41529e","url":"katex/fonts/KaTeX_AMS-Regular.woff2"},{"revision":"a9e9b0953b078cd40f5e19ef4face6fc","url":"katex/fonts/KaTeX_Caligraphic-Bold.woff2"},{"revision":"08d95d99bf4a2b2dc7a876653857f154","url":"katex/fonts/KaTeX_Caligraphic-Regular.woff2"},{"revision":"796f3797cdf36fcaea18c3070a608378","url":"katex/fonts/KaTeX_Fraktur-Bold.woff2"},{"revision":"f9e6a99f4a543b7d6cad1efb6cf1e4b1","url":"katex/fonts/KaTeX_Fraktur-Regular.woff2"},{"revision":"a9382e25bcf75d856718fcef54d7acdb","url":"katex/fonts/KaTeX_Main-Bold.woff2"},{"revision":"d873734390c716d6e18ff3f71ac6eb8b","url":"katex/fonts/KaTeX_Main-BoldItalic.woff2"},{"revision":"652970624cde999882102fa2b6a8871f","url":"katex/fonts/KaTeX_Main-Italic.woff2"},{"revision":"f8a7f19f45060f7a177314855b8c7aa3","url":"katex/fonts/KaTeX_Main-Regular.woff2"},{"revision":"1320454d951ec809a7dbccb4f23fccf0","url":"katex/fonts/KaTeX_Math-BoldItalic.woff2"},{"revision":"d8b7a801bd87b324efcbae7394119c24","url":"katex/fonts/KaTeX_Math-Italic.woff2"},{"revision":"ad546b4719bcf690a3604944b90b7e42","url":"katex/fonts/KaTeX_SansSerif-Bold.woff2"},{"revision":"e934cbc86e2d59ceaf04102c43dc0b50","url":"katex/fonts/KaTeX_SansSerif-Italic.woff2"},{"revision":"1ac3ed6ebe34e473519ca1da86f7a384","url":"katex/fonts/KaTeX_SansSerif-Regular.woff2"},{"revision":"1b3161eb8cc67462d6e8c2fb96c68507","url":"katex/fonts/KaTeX_Script-Regular.woff2"},{"revision":"82ef26dc680ba60d884e051c73d9a42d","url":"katex/fonts/KaTeX_Size1-Regular.woff2"},{"revision":"95a1da914c20455a07b7c9e2dcf2836d","url":"katex/fonts/KaTeX_Size2-Regular.woff2"},{"revision":"9108a400f4787cffdcc3a3b813401e6a","url":"katex/fonts/KaTeX_Size3-Regular.woff2"},{"revision":"61522cd3d9043622e235ab57762754f2","url":"katex/fonts/KaTeX_Size4-Regular.woff2"},{"revision":"b8b8393d2e65fcebda5fa99fa3264f41","url":"katex/fonts/KaTeX_Typewriter-Regular.woff2"}],s=new C({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})();