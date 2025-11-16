let container = document.getElementById("heading");
console.log(container.firstElementChild.nodeName); 

let lastContainer = document.getElementById("heading");
console.log(lastContainer.lastElementChild.nodeName); 


let nodes = container.childNodes;
for(let n of nodes){
    console.log(n.nodeName);
}
