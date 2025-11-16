function myFunction(){
    let x = document.getElementById("numb").value;
    let text;
    
    if(isNaN(x)|| x<1 ||x>10){
        text = "input not valid";
    }
    else{
        text = "input ok";
    }
    document.getElementById("demo").innerText = text;

}