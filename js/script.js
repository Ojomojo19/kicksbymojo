let mainImage = document.getElementById("mainImage");

let shoeImage = ["./shoes/Brown Minimalist and Modern Sneakers Fashion Logo Display (1).png", "./shoes/fourthshoe.jpg.jpg","./shoes/secondshoe.jpg.jpg","./shoes/maksim-larin-NOpsC3nWTzY-unsplash.jpg"];

let imageIndex = 0;

const changeImage = () => {
    mainImage.setAttribute("src", shoeImage[imageIndex]);
    imageIndex++;
    if (imageIndex >= shoeImage.length){
        imageIndex = 0;
    }
}



let realTimer = setInterval(changeImage, 3000);

mainImage.onclick = () => {
    clearInterval(realTimer); 
}

// let extraPoint = document.createElement("a");

// let nameTitle = document.createTextNode("Sign In");
// extraPoint.appendCohild(nameTitle);

// document.getElementById("extraInfo").appendChild(extraPoint);

const loadButton = () => {
    document.getElementById("realBut").onclick = function(){
        let pastLen = document.getElementById("listLen");
         pastLen.style.display = "block";
         mainImage.style.display = "none";
         var butStuff = document.getElementById("realBut");
         butStuff.style.display = "none";
         var nameKicks = document.getElementById("kicksName");
         nameKicks.style.display = "none";
    }
    nameButton();
}

const nameButton = () => {
    document.getElementById("fakeBut").onclick = function(){
        let pastLen = document.getElementById("listLen");
         pastLen.style.display = "none";
         mainImage.style.display = "block";
         var butStuff = document.getElementById("realBut");
         butStuff.style.display = "block";
         var nameKicks = document.getElementById("kicksName");
         nameKicks.style.display = "block";
    }
}

window.onload = function(){
    loadButton();
}
