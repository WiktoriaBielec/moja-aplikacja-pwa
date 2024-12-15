self.addEventListener("install",function(e){e.waitUntil(caches.open("my-cache").then(function(e){return e.addAll(["/","/index.html","/script.js","/style.css","/manifest.json"])}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}))});
//# sourceMappingURL=sw.js.map
