window.onload=function(){

document.querySelector('.app').innerHTML='neocles';

return;
    navigator.serviceWorker.register('swcacheall.js').then((resp)=>{

        console.log("register",resp);
    }).catch((err)=>{
        console.log(err);
    
    });
    

}