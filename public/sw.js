/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-d91a18a5'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  importScripts();
  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/_next/static/runtime/amp.js",
    "revision": "2fdd189ea17faa56a4f44a2fdd88b84f"
  }, {
    "url": "/_next/static/runtime/main.js",
    "revision": "9c298b91ecebf4b9d9719db37b98c072"
  }, {
    "url": "/_next/static/runtime/polyfills.js",
    "revision": "516c3d4deeff70783126396a5a14d34e"
  }, {
    "url": "/_next/static/runtime/react-refresh.js",
    "revision": "9d11ea7095b60a828f2db49ed1004ade"
  }, {
    "url": "/_next/static/runtime/webpack.js",
    "revision": "cdaf81856f4294f0baabffc0169ad755"
  }], {
    "ignoreURLParametersMatching": [/ts/]
  });
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 1,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 4,
      maxAgeSeconds: 31536000,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox.StaleWhileRevalidate({
    "cacheName": "static-font-assets",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 4,
      maxAgeSeconds: 604800,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox.StaleWhileRevalidate({
    "cacheName": "static-image-assets",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 64,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/\.(?:js)$/i, new workbox.StaleWhileRevalidate({
    "cacheName": "static-js-assets",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/\.(?:css|less)$/i, new workbox.StaleWhileRevalidate({
    "cacheName": "static-style-assets",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/\.(?:json|xml|csv)$/i, new workbox.NetworkFirst({
    "cacheName": "static-data-assets",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/\/api\/.*$/i, new workbox.NetworkFirst({
    "cacheName": "apis",
    "networkTimeoutSeconds": 10,
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 16,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkFirst({
    "cacheName": "others",
    "networkTimeoutSeconds": 10,
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: true
    })]
  }), 'GET');

});
//# sourceMappingURL=sw.js.map
