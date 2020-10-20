window.onload=function(){


    navigator.serviceWorker.register('swcacheall.js').then((resp)=>{

        console.log("register",resp);
    }).catch((err)=>{
        console.log(err);
    
    });
    

}