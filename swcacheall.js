console.log('hi sw');


const cacheName='v2';
 
self.addEventListener('install',installListener);

self.addEventListener('activate',activateListener);
self.addEventListener('fetch',fetchListener);



function installListener(e){
console.log("installed");



}



function activateListener(e){
    console.log("activated");

//remove unwanted caches
    e.waitUntil(
        caches.keys().then(
            cacheNames=>{
            return Promise.all(cacheNames.map(cache=>{
                if(cache!==cacheName){
                    console.log('deleted');
                    return caches.delete(cache);
                }
            })//map
            )//all 
        }).then(()=>self.skipWaiting()).catch(err=>console.log('error clearing',err))
        );
    }


    function fetchListener(e){

console.log('fetching');

e.respondWith(
    fetch(e.request).then(
res=>{
    //copy
    const resClone=res.clone();
    
        caches.open(cacheName)
        .then( cache=>{
            cache.put(e.request,resClone)
        })
        return res;
}
    ).catch(()=>{
        caches.match(e.request).then(res=>res)
    })
)//respondWith


    }