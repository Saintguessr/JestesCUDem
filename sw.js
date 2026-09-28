var C='cudem-v2',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(n){var u=new URL(e.request.url);
if(n.ok&&(u.origin===location.origin||u.hostname.indexOf('fonts.g')==0)){var cp=n.clone();caches.open(C).then(function(c){c.put(e.request,cp)})}return n}).catch(function(){return caches.match('index.html')})}))});
