'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4b838227af759d1fa1080b37c7f5be44",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/AssetManifest.bin": "219f08bd9bd4b320e383dd75c5cf96bb",
"assets/fonts/MaterialIcons-Regular.otf": "f5d1c14b5b118dd0cdcfbdbf13628438",
"assets/AssetManifest.json": "fc4bcf9fe3009043ffb88f24879666c8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/images/qrcodes/vinty_app_store.png": "b2f152fe5dc4a8d1cf4a0c1cb34af846",
"assets/assets/images/qrcodes/blendin_play_store.png": "c5f02d0622a322012ebfe0557cfe64b4",
"assets/assets/images/qrcodes/myt_app_store.png": "2ec40b2a8de91e9f0caf28118299e943",
"assets/assets/images/qrcodes/myt_play_store.png": "de13a5906f029e8dbca742fbe031b94c",
"assets/assets/images/qrcodes/mangoo_app_store.png": "2b8d3c2ac05284268c3e4ce1477e69d7",
"assets/assets/images/qrcodes/vinty_play_store.png": "dd03f98723e37d920dc8232fc3a59dfc",
"assets/assets/images/qrcodes/blendin_app_store.png": "6c6c43b63862668b7beb5c5ba9850077",
"assets/assets/images/qrcodes/mangoo_play_store.png": "58cf89033d9820e72d588b333fce83f6",
"assets/assets/images/icons/android.png": "7deb20d6fbc344ac6ac0c50b976d05ba",
"assets/assets/images/icons/flutter.png": "a08da77cdbe62e3ef3792d4abd03ecc4",
"assets/assets/images/icons/firebase.png": "b13806afaa257c9b0be78de423578e85",
"assets/assets/images/icons/asp.png": "72c6ae55a8ab9c67c67cf56a079443fc",
"assets/assets/images/screenshots/sudarson_ss_5.jpg": "64fc3100ab9f9cbcf75f170a55b7fad4",
"assets/assets/images/screenshots/myt_ss_4.webp": "d0ab0236147ac5e921c4ec638f14f6f2",
"assets/assets/images/screenshots/vinty_ss_1.webp": "185bf269bf9236ac33717b03e6933061",
"assets/assets/images/screenshots/myt_ss_5.webp": "1dae7377fdc63b38a64c06c432b6528b",
"assets/assets/images/screenshots/blendin_ss_5.webp": "cb450c819d35186bfd08a57b33eac8a3",
"assets/assets/images/screenshots/mangoo_ss_1.webp": "ca76b28dda600a0576dfb80a8f7c99ff",
"assets/assets/images/screenshots/tapas_ss_5.png": "72704f1a1b28c18b74bb3e0843db7d63",
"assets/assets/images/screenshots/blendin_ss_4.webp": "44deec5b0b14c7145eac6f5ee13726da",
"assets/assets/images/screenshots/myt_ss_2.webp": "411993b97fb9346a0431d3e36de7ca74",
"assets/assets/images/screenshots/vinty_ss_7.webp": "7f75f41befbd71ff6de1ebb0821379d9",
"assets/assets/images/screenshots/vinty_ss_4.webp": "233f42825358c796a1f14bb9559c6488",
"assets/assets/images/screenshots/myt_ss_6.webp": "73031a365f1dfd89dd989b4bc1fe1794",
"assets/assets/images/screenshots/blendin_ss_1.webp": "6941ed190591e6004e094ad9c2f5b297",
"assets/assets/images/screenshots/icr_ss_1.jpg": "1a9244ef306c66ef99c3d5b68985b835",
"assets/assets/images/screenshots/icr_ss_4.jpg": "079a6a797a4b4b6e477e838cb7d8f75b",
"assets/assets/images/screenshots/tapas_ss_3.png": "72728376c79b9881a7103014e3498480",
"assets/assets/images/screenshots/icr_ss_7.jpg": "562476fbe495b14c00398f899f1a6a8b",
"assets/assets/images/screenshots/icr_ss_6.jpg": "1ef30b77109d05dcdcd3d90ce5c94bf8",
"assets/assets/images/screenshots/vinty_ss_6.webp": "57cb6c51c68a4683e299cde481586a2d",
"assets/assets/images/screenshots/blendin_ss_3.webp": "c80cf1ed04ae473d75ecdf2b56fc0344",
"assets/assets/images/screenshots/sudarson_ss_3.jpg": "b430c21fcbc86673c0495eba23389472",
"assets/assets/images/screenshots/tapas_ss_6.png": "1283469f4aeb647e273cc2c0a5bb23e2",
"assets/assets/images/screenshots/myt_ss_7.webp": "60cab6d4b218b820452cefa2439986fd",
"assets/assets/images/screenshots/tapas_ss_2.png": "607aa0cb050fa62f9a976fd4985463e1",
"assets/assets/images/screenshots/myt_ss_3.webp": "90aadca68c2a9565640e6ac5e4d5b3d6",
"assets/assets/images/screenshots/sudarson_ss_1.jpg": "8ee926dab6dc0ebef2c5ee658b5f305b",
"assets/assets/images/screenshots/blendin_ss_2.webp": "ee94eac7d4e8f1cf40dcd18931b91c6d",
"assets/assets/images/screenshots/sudarson_ss_4.jpg": "c8cb5d5a651d21a35848573792117d29",
"assets/assets/images/screenshots/sudarson_ss_2.jpg": "ecf5bf2af99536e4991b7fd005d5ac1e",
"assets/assets/images/screenshots/myt_ss_1.webp": "c24035032fd0fc21529e2972457d0ad4",
"assets/assets/images/screenshots/vinty_ss_3.webp": "347b5796736ba9e0c21b0bc913a01b0a",
"assets/assets/images/screenshots/mangoo_ss_2.webp": "305be580f3a2d5d615bc320e74835fa9",
"assets/assets/images/screenshots/tapas_ss_1.png": "afafba7176e6187b2977b9b03b2a8d3a",
"assets/assets/images/screenshots/tapas_ss_4.png": "a50a8f3246c50ff85c5d6623391f2131",
"assets/assets/images/screenshots/mangoo_ss_3.webp": "94a959bba834ccc5e9e3cff215474c0b",
"assets/assets/images/screenshots/icr_ss_2.jpg": "b87a61cd03282e17fedd46be0ffab965",
"assets/assets/images/screenshots/icr_ss_5.jpg": "df7c3841679eb4e40759cc922cf057e7",
"assets/assets/images/screenshots/icr_ss_3.jpg": "254ba7232c9f125db9aba83a8a10ff15",
"assets/assets/images/screenshots/vinty_ss_2.webp": "eef54228e1d5edd372dc0e6cc206f56d",
"assets/assets/images/screenshots/vinty_ss_5.webp": "d33af9606b27d1b0e3d32385a7e521d5",
"assets/assets/images/logos/tapas_logo.png": "dd180661c3a9634ddb942f0c67ac7626",
"assets/assets/images/logos/mangoo_logo.png": "4ad00e71df939b62e1a7961d7c803caa",
"assets/assets/images/logos/blendin_logo.png": "fee7e70a0f0dddfbe86c4a554565e857",
"assets/assets/images/logos/myt_logo.png": "503adb68d71f9d7c611bbab1d2d02b94",
"assets/assets/images/logos/vinty_logo.png": "7066c4d26246971621e7ca936c19fb7d",
"assets/assets/images/logos/icr_logo.png": "c6554c5a52f8eedffba7217f52ec9ae6",
"assets/assets/images/logos/sudarson_logo.png": "005075b701506bfbdf86aa103a614efb",
"assets/assets/images/portfolio_art.png": "8f904d3ed554cd2d0a82e5a9f9a66316",
"assets/NOTICES": "6378616318c414f481d473f11ea6d3ab",
"assets/AssetManifest.bin.json": "29884d93b2c097c62378a0b940d5493f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"manifest.json": "297c0b216be74f053fad666abe931628",
"index.html": "323036de0734c000f05b78a85eebf407",
"/": "323036de0734c000f05b78a85eebf407",
"version.json": "009c9e65172e010890f7f65fde438006",
"flutter_bootstrap.js": "90f2d394ea8330c00f0f09416faec95a",
"main.dart.js": "d82275c4a12dbbf8ce83c1bd2d76d946",
"favicon.png": "ebc7c6cbc1636ab67d856d0ec6835126"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
