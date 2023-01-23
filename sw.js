(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"88cf5ffc857a7b7902ca715e1c1eb718","url":"404.html"},{"revision":"baa2d11a6b631e5547c1c0efe745c5b3","url":"accessibility.html"},{"revision":"728fc23c04727b48d2422bff2fee6568","url":"assets/css/styles.2d726830.css"},{"revision":"ea1a9801301cb349d1befced748ae69c","url":"assets/js/0287570d.b90a4e77.js"},{"revision":"7037ca9781468bf6324991d151f8e3e6","url":"assets/js/09267b88.1d14a979.js"},{"revision":"0297d635323b3114cb55e84adfa6af76","url":"assets/js/0e384e19.7275dd6e.js"},{"revision":"9e6112fbe84984c8a0723f8c426d6227","url":"assets/js/131.1e7b7ff6.js"},{"revision":"ace500327b444f5bca5ec23d040613a4","url":"assets/js/17896441.154c3692.js"},{"revision":"f2d0a6bf033adc09e8f6118046bdabd3","url":"assets/js/1be78505.026dd6f2.js"},{"revision":"f6f35b80e5b46bc4344b5bcfd802fc25","url":"assets/js/1cc5b5de.74c1de7f.js"},{"revision":"c8ef83f0963594b7c7972bda1e6a6353","url":"assets/js/1f391b9e.1c8152ae.js"},{"revision":"738e3df503a02bbfb57eac20d8bdf2cf","url":"assets/js/248.1947516f.js"},{"revision":"ddff307272c0955f3ba35b1db0d0c8da","url":"assets/js/264.899d6268.js"},{"revision":"fce028786fe24b4a66e8229885fafc34","url":"assets/js/363.1a8436f7.js"},{"revision":"18366c973b599a594bc9c28243fd4cda","url":"assets/js/40d47399.7a15027b.js"},{"revision":"ac3a3232041e0db41a056f8d807d5f25","url":"assets/js/47414879.fd93730b.js"},{"revision":"ae06efa31aea7efb425a67cf70c145b2","url":"assets/js/47f17b81.98441219.js"},{"revision":"5ab4ce3a33ceb333b4f0c2405625db68","url":"assets/js/501.bfa739f8.js"},{"revision":"1e988c6209d844f8e6c933994fea8b8c","url":"assets/js/794894c6.9e1e00a6.js"},{"revision":"d1a764bd121d959b16c885618401266d","url":"assets/js/7d2f9deb.eaaef3b8.js"},{"revision":"4c01f9b7f87002f2c1a381bacb6c830e","url":"assets/js/80e81b0a.f15e9256.js"},{"revision":"7275c48c356a0566a85de83174d8f84e","url":"assets/js/935f2afb.561b9d71.js"},{"revision":"127200aa30a07d6977da3ff1a72e630f","url":"assets/js/9531a6f3.4c2767e0.js"},{"revision":"123a268c1b5c896e8221de16eb6a01f5","url":"assets/js/982.5c8b72ff.js"},{"revision":"c9cd720721315f89bb551f8441ef5a07","url":"assets/js/9bf989c6.8cddfbbd.js"},{"revision":"164ae1896d2364f877d9a3f28acb9ae7","url":"assets/js/b4968a92.51d6afb2.js"},{"revision":"d4155fc2af2a820a4e47ee2d6df46202","url":"assets/js/c4f5d8e4.3238908a.js"},{"revision":"8b84b8851bbb57f413802fc7860ac683","url":"assets/js/c5f91b69.46b1fb03.js"},{"revision":"ef3dc377f63eca2609a5ba6ffa02dbd7","url":"assets/js/cf16dee5.0d5c7de1.js"},{"revision":"649415f133f7e8c8f162fe3882fc3de6","url":"assets/js/db805d55.288a10ce.js"},{"revision":"7f619dd740ecb6d63caec802e6dcbec3","url":"assets/js/ebd2c2fc.2dbf50dd.js"},{"revision":"22c8d7db3efb54e318bc39a333f87eb6","url":"assets/js/main.c1ba524f.js"},{"revision":"9cea6d0fd4a5f82a1dbdaa0441876a3e","url":"assets/js/runtime~main.11787173.js"},{"revision":"55195998ce9d467efa5047ead10cc19e","url":"docs/basic_image_processing.html"},{"revision":"104c449c501540673a4006688e28a1d5","url":"docs/camera_calibration.html"},{"revision":"b452e06392e87a13bc34c84ac869a493","url":"docs/convolutional_neural_networks.html"},{"revision":"50d9385208d061d40acd1e907ca2faa9","url":"docs/curve_fitting.html"},{"revision":"84c7c56613f73d0e84d7457b5dd3af56","url":"docs/edge_detection.html"},{"revision":"257f992595a8699ae0c493cd87b29204","url":"docs/features.html"},{"revision":"c8475d172f132a6cc6858972f0e43077","url":"docs/filtering_and_resampling.html"},{"revision":"c066bf4ff117104b3ff111c85ca2e6e9","url":"docs/geometric_transformation.html"},{"revision":"c8dd8300a2d87e48933cf2c9cf6340c5","url":"docs/hough_transform.html"},{"revision":"fb637ffe5f327e318b0dca357ed57d06","url":"docs/image_formation.html"},{"revision":"9f01deddf903c907b67cb76a5e3db2e2","url":"docs/intro_to_computer_vision.html"},{"revision":"ebd95f87ebd97905f4690bc7242d18bc","url":"docs/intro.html"},{"revision":"04829e1c6dae8cbe63c3c7af9cd75d28","url":"docs/neural_networks_basics.html"},{"revision":"a14d0cfbb34ab7da98f7a7a61d39a327","url":"docs/stereo.html"},{"revision":"b40b5e39115a4b6914ce5f66c16610b4","url":"index.html"},{"revision":"3816ba8b5fff3b9357f02c67a938d512","url":"katex/katex.min.css"},{"revision":"babf7e089730666ca877f52af72a1747","url":"manifest.json"},{"revision":"9f530f1a992617c2e551a32a9c3db357","url":"assets/ideal-img/ador.8eba0a0.135.png"},{"revision":"4a679e96046bf0bd00a0185d4b3a2650","url":"assets/ideal-img/ador.8f23f1e.100.png"},{"revision":"abe84c16fce8237385b40bae090efa65","url":"assets/ideal-img/applydesign_black.11ce005.400.png"},{"revision":"0af6a8715377d84c875c1f827a6c0c10","url":"assets/ideal-img/applydesign_black.32b12c2.100.png"},{"revision":"4b69bdac69ff27b4bc6cfcb4663fe5c3","url":"assets/ideal-img/applydesign_black.cabe7f6.665.png"},{"revision":"b36ef334bad4d7d7f8bc15664bc88f78","url":"assets/ideal-img/applydesign_black.d964ba0.200.png"},{"revision":"7c5091665cc4f6e273b93aff2568168a","url":"assets/ideal-img/applydesign.30193d5.665.png"},{"revision":"f2e3a8362d25149121d84cca4548324e","url":"assets/ideal-img/applydesign.53725e7.400.png"},{"revision":"8e49c094c0f73fb0c1c1c708b8fe3142","url":"assets/ideal-img/applydesign.cea1ab1.100.png"},{"revision":"9fb78b53216c5b1c57b224a0b3a04041","url":"assets/ideal-img/applydesign.d73a01e.200.png"},{"revision":"b9b1eddfea5f322b5ce856a5fc2832aa","url":"assets/ideal-img/beewise_black.25fffd2.100.png"},{"revision":"a255c74921a863f1678c48f3ca92529d","url":"assets/ideal-img/beewise_black.5059bd7.1600.png"},{"revision":"4f10c8112ead17b8dcfbe5d2f22264b4","url":"assets/ideal-img/beewise_black.54c2341.1200.png"},{"revision":"131d947df9361106645b8d8031e7e601","url":"assets/ideal-img/beewise_black.5819f6f.200.png"},{"revision":"20ab8038fa398a247b5ae1486b2f69bf","url":"assets/ideal-img/beewise_black.c1cfcd2.800.png"},{"revision":"70c5d9e29825df7bad65bc27d4dff6c0","url":"assets/ideal-img/beewise_black.eafb3b2.400.png"},{"revision":"bc434dd4f3ae24fc852e80b181c87fc5","url":"assets/ideal-img/firmus_black.163abb0.400.png"},{"revision":"bcd820fa273b5cc51c696df1f417c306","url":"assets/ideal-img/firmus_black.7f0f410.759.png"},{"revision":"84fd889696551d3d196edfdccebf8af5","url":"assets/ideal-img/firmus_black.db7fd15.100.png"},{"revision":"1b45fd75c7258767f6150244e300934a","url":"assets/ideal-img/firmus_black.f41b0d8.200.png"},{"revision":"0e6314d41c6b03198c617215260cd5fc","url":"assets/ideal-img/medhub_black.38a2795.751.png"},{"revision":"41974840f081a7c3697491f4d8c3ed04","url":"assets/ideal-img/medhub_black.5d476ab.400.png"},{"revision":"80a6156832c64251d28955b7382bfcb2","url":"assets/ideal-img/medhub_black.8a8aa66.200.png"},{"revision":"9589a1c31f908668c0af6808cf18bac6","url":"assets/ideal-img/medhub_black.d162201.100.png"},{"revision":"5ffdd8c0db49c665a733fc6a27a33457","url":"assets/ideal-img/yoni.423aac6.800.png"},{"revision":"703738fd9231782cc0b6bd32e04d5521","url":"assets/ideal-img/yoni.4a92433.200.png"},{"revision":"ed20733bb4601b519625fe8bbe97ae66","url":"assets/ideal-img/yoni.65791ce.400.png"},{"revision":"00bc491d1662d54fc7fc2176e9dfa3fa","url":"assets/ideal-img/yoni.a9455fe.100.png"},{"revision":"a71ff22973000e3eef4c47e02f0612b1","url":"assets/ideal-img/yoni.c161479.1000.png"},{"revision":"cb9e796a701abfa45131a320d1465023","url":"assets/images/applydesign_black-1cd5bbcf79eae387850be816c3441502.png"},{"revision":"ed40e1fbc220a55ef9d3498e377da034","url":"assets/images/applydesign-32c6c2dc41ecef1ce4f9fc4e93613466.png"},{"revision":"e981df3ad12e73ac1837fc9ca0de0c4f","url":"assets/images/beewise_black-287c5fbfce440b27651745b64c4672a8.png"},{"revision":"9927c02e5c3c9f0a337d284f3bb3fea3","url":"assets/images/firmus_black-d8d84ed30499924b05dc5bedf987d910.png"},{"revision":"17d2a49f216019495483b4460a1046ab","url":"assets/images/medhub_black-85d2c4d3f265cd220615a317075793a1.png"},{"revision":"cb4beaf9cfc54a418acbd1d52d89ccc2","url":"assets/images/yoni-507c98539adcfe8da902c55e0b782e0f.png"},{"revision":"490c8e56eafffed06d931a0c160dab3b","url":"img/algomonkeys_logo.svg"},{"revision":"163368a2ccdf3c57286ae1da812eeb0e","url":"img/banana.svg"},{"revision":"7a16d3ed9e314ca89ba88c30c4776d66","url":"img/favicon.ico"},{"revision":"f34b071fd0560cba6d1a53918c5b4daf","url":"img/logo_bg.svg"},{"revision":"7cd5ca63f3f3219ba10ed95bddb77f7c","url":"img/logos/ador.png"},{"revision":"a0ef2e03f60ebf359a1036247d7ed9e6","url":"img/logos/agadolive_black.svg"},{"revision":"11c91bcdbcb2f0c1a0a3f59131e69e1b","url":"img/logos/amp.svg"},{"revision":"cb9e796a701abfa45131a320d1465023","url":"img/logos/applydesign_black.png"},{"revision":"ed40e1fbc220a55ef9d3498e377da034","url":"img/logos/applydesign.png"},{"revision":"e981df3ad12e73ac1837fc9ca0de0c4f","url":"img/logos/beewise_black.png"},{"revision":"cade12ba88484a31755093d808827d7a","url":"img/logos/buildots_black.svg"},{"revision":"e842bdf2cdac52b8a996d799aee9ff97","url":"img/logos/carevature_black.svg"},{"revision":"f3ba7f68cfbf675dc101329717c8132f","url":"img/logos/carevature.svg"},{"revision":"ba172bfec95f3e5be5d2cee5e2370423","url":"img/logos/clarityo.svg"},{"revision":"bce8fb397a8ec870881e87b439bb6ab3","url":"img/logos/classiq_black.svg"},{"revision":"5fd462a2dc6f6a2624124a20587b03ee","url":"img/logos/deepchecks_black.svg"},{"revision":"f6fdde8ad475dfe009c7e225d42691a1","url":"img/logos/eyecontrol_black.svg"},{"revision":"9927c02e5c3c9f0a337d284f3bb3fea3","url":"img/logos/firmus_black.png"},{"revision":"19a75b4c56cae628aa178395815000f4","url":"img/logos/itc.svg"},{"revision":"4db6ffc8b5d9a0b55cd600e88dec3c00","url":"img/logos/mdhair.svg"},{"revision":"17d2a49f216019495483b4460a1046ab","url":"img/logos/medhub_black.png"},{"revision":"9024cebedfe99f3bf485527645e40375","url":"img/logos/simplex_black.svg"},{"revision":"516506636b93cd95e5f776d76572f413","url":"img/manifest_icons/icon-192x192.png"},{"revision":"5891989bea085b00793bb05fc9aabdfa","url":"img/manifest_icons/icon-256x256.png"},{"revision":"1804684a2cf0c69420248ce46c8d39ca","url":"img/manifest_icons/icon-384x384.png"},{"revision":"805b774f196f60768ef2983411c8f0d8","url":"img/manifest_icons/icon-512x512.png"},{"revision":"f4e76f53072082f4026372aadf56d196","url":"img/manifest_icons/maskable_icon_x128.png"},{"revision":"17057fdb2cd9260e042dd26a2d9887a3","url":"img/manifest_icons/maskable_icon_x192.png"},{"revision":"dcdf8ffc37168fe986539caddd4cd599","url":"img/manifest_icons/maskable_icon_x384.png"},{"revision":"98233a3c4bbab10cde979bf1b50c7c87","url":"img/manifest_icons/maskable_icon_x48.png"},{"revision":"a1fbf63c378837ecf13828917470acdb","url":"img/manifest_icons/maskable_icon_x512.png"},{"revision":"675974148f8377f7d679434ddfd83a5d","url":"img/manifest_icons/maskable_icon_x72.png"},{"revision":"0d8967c72f1f0f4d9723c6d5a7e3e13c","url":"img/manifest_icons/maskable_icon_x96.png"},{"revision":"bb91c995ad9f5f1226c836d3480af168","url":"img/meta_image.jpg"},{"revision":"1f7f5ab79b54cac2b0222055e35565e6","url":"img/programer_monkey.svg"},{"revision":"310f19a766be765c86dbcf8d97c08ecc","url":"img/quotation.svg"},{"revision":"231528f9156d939578b71bde7a6153ec","url":"img/three_dots.svg"},{"revision":"8eff4944f5cddb5692a387591dc2aa65","url":"img/what_we_do_icons/ar.svg"},{"revision":"9188c3f2c07f4715f58cb52cf618ed00","url":"img/what_we_do_icons/cloud_chip.svg"},{"revision":"7e43b84720d8deb84a5f76fccd9300b6","url":"img/what_we_do_icons/data.svg"},{"revision":"0804d436f4b9cf3fb72885657b7cc38f","url":"img/what_we_do_icons/eye.svg"},{"revision":"cb4beaf9cfc54a418acbd1d52d89ccc2","url":"img/yoni.png"},{"revision":"66c678209ce93b6e2b583f02ce41529e","url":"katex/fonts/KaTeX_AMS-Regular.woff2"},{"revision":"a9e9b0953b078cd40f5e19ef4face6fc","url":"katex/fonts/KaTeX_Caligraphic-Bold.woff2"},{"revision":"08d95d99bf4a2b2dc7a876653857f154","url":"katex/fonts/KaTeX_Caligraphic-Regular.woff2"},{"revision":"796f3797cdf36fcaea18c3070a608378","url":"katex/fonts/KaTeX_Fraktur-Bold.woff2"},{"revision":"f9e6a99f4a543b7d6cad1efb6cf1e4b1","url":"katex/fonts/KaTeX_Fraktur-Regular.woff2"},{"revision":"a9382e25bcf75d856718fcef54d7acdb","url":"katex/fonts/KaTeX_Main-Bold.woff2"},{"revision":"d873734390c716d6e18ff3f71ac6eb8b","url":"katex/fonts/KaTeX_Main-BoldItalic.woff2"},{"revision":"652970624cde999882102fa2b6a8871f","url":"katex/fonts/KaTeX_Main-Italic.woff2"},{"revision":"f8a7f19f45060f7a177314855b8c7aa3","url":"katex/fonts/KaTeX_Main-Regular.woff2"},{"revision":"1320454d951ec809a7dbccb4f23fccf0","url":"katex/fonts/KaTeX_Math-BoldItalic.woff2"},{"revision":"d8b7a801bd87b324efcbae7394119c24","url":"katex/fonts/KaTeX_Math-Italic.woff2"},{"revision":"ad546b4719bcf690a3604944b90b7e42","url":"katex/fonts/KaTeX_SansSerif-Bold.woff2"},{"revision":"e934cbc86e2d59ceaf04102c43dc0b50","url":"katex/fonts/KaTeX_SansSerif-Italic.woff2"},{"revision":"1ac3ed6ebe34e473519ca1da86f7a384","url":"katex/fonts/KaTeX_SansSerif-Regular.woff2"},{"revision":"1b3161eb8cc67462d6e8c2fb96c68507","url":"katex/fonts/KaTeX_Script-Regular.woff2"},{"revision":"82ef26dc680ba60d884e051c73d9a42d","url":"katex/fonts/KaTeX_Size1-Regular.woff2"},{"revision":"95a1da914c20455a07b7c9e2dcf2836d","url":"katex/fonts/KaTeX_Size2-Regular.woff2"},{"revision":"9108a400f4787cffdcc3a3b813401e6a","url":"katex/fonts/KaTeX_Size3-Regular.woff2"},{"revision":"61522cd3d9043622e235ab57762754f2","url":"katex/fonts/KaTeX_Size4-Regular.woff2"},{"revision":"b8b8393d2e65fcebda5fa99fa3264f41","url":"katex/fonts/KaTeX_Typewriter-Regular.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();