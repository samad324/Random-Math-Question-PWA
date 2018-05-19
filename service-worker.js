


self.addEventListener("install", function (event) {
  console.log("SW Intalled");
  event.waitUntil(
    caches.open("Static-Cache_v1").then(function (cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/js/app.js",
        "/css/stylesheet.css",
        "/images/background.jpg",
        "/images/icons/icon-36x36.png",
        "/images/icons/icon-48x48.png",
        "/images/icons/icon-72x72.png",
        "/images/icons/icon-144x144.png",
        "/images/icons/icon-192x192.png",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
      ])
    })
  )
});


self.addEventListener("active", function (event) {
  console.log("Activating [SW].....");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== "Static-Cache_v1" || key !== "Dynamic-Cache_v1" ) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  )
})



self.addEventListener("fetch",function(event){
  console.log(event);
  event.respondWith(
      caches.open("Dynamic-Cache_v1").then(function(cache){
          return cache.match(event.request).then(function(responce){
              return responce || fetch(event.request).then(function(res){
                  cache.put(event.request,res.clone());
                  return res;
              })
          })
      })
  )
})