const originalSetTimeout = window.setTimeout;
window.setTimeout = (fn,time)=>{
    const wrap = () =>{
        try{
            fn()
        }catch(e){
            //do something
        }
    }
    return originalSetTimeout(wrap,time);
}