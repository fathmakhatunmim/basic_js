function getData(dataId,getNextdata){
    setTimeout(()=>{
        console.log("data",dataId);
            if(getNextdata){
                getNextdata();
            }
 },2000);

}

getData(1,()=>{
    getData(2);
})