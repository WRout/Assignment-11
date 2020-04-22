

var element;


function selectElement (element){
    if (element === "background"){
        this.element = document.getElementById("background");
        document.getElementById("current").innerHTML = "Currently Selected: Background";
        console.log(element);
        
    } else if (element === "left_side"){
        this.element = document.getElementById("left_side");
        document.getElementById("current").innerHTML = "Currently Selected: Left Block";
        console.log(element);
        
    } else if (element === "middle"){
        this.element = document.getElementById("middle");
        document.getElementById("current").innerHTML = "Currently Selected: Middle Block";
        console.log(element);
        
    } else if (element === "right_side"){
        this.element = document.getElementById("right_side");
        document.getElementById("current").innerHTML = "Currently Selected: Right Block";
        console.log(element);
        
    } else {
        console.log("Unassigned element!");
    }
}



function red(){
    elementNull();
    element.style.backgroundColor = "red";
    console.log(element.style.backgroundColor);
}

function blue(){
    elementNull();
    element.style.backgroundColor = "blue";
    console.log(element.style.backgroundColor);
}

function green(){
    elementNull();
    element.style.backgroundColor = "green";
    console.log(element.style.backgroundColor);
}

function yellow(){
    elementNull();
    element.style.backgroundColor = "yellow";
    console.log(element.style.backgroundColor);
}



function elementNull() {
    
    if((element === null) || (element === "") || (element === undefined)){
       document.getElementById("current").innerHTML = "Please select a part of the page to modify!";
    } else {
        console.log("element has a value!")
    }
}



function reset() {
    element = null;
    document.getElementById("current").innerHTML = "Page Reset!";
    document.getElementById("background").style.backgroundColor = "#737373";
    document.getElementById("left_side").style.backgroundColor = "aqua"
    document.getElementById("middle").style.backgroundColor = "red";
    document.getElementById("right_side").style.backgroundColor = "green";
}
