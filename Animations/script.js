

function Click(){
     let red = document.getElementById("red");
     let pos = 0;
     let anim = setInterval(animate,5);

     function animate(){
         if(pos == 200){
            clearInterval(anim);

         }else{
               pos++;
               red.style.top = pos + "px"; 
               red.style.left = pos + "px";
         }

         }
     }



    //  document.getElementById("button").onclick = abc;

    document.getElementById("button").addEventListener("click",abc);
    document.getElementById("button").addEventListener("click",function(){
        this.style.border = "5px solid red";
    })



      function abc (){
        document.getElementById("button").style.backgroundColor = "green";
      }


