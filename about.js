let shoeImage = document.getElementById("imgApp1");

let allImage = ["./images2/alexander-rotker-l8p1aWZqHvE-unsplash.jpg", "./images2/nathan-jongerius-dbiZRVk_RQk-unsplash.jpg"];

let imageIndex = 0;


const imagesChange = () => {
    shoeImage.setAttribute("src", allImage[imageIndex]);
    imageIndex++;

    if(imageIndex >= allImage.length){
        imageIndex = 0;
    }
}

let realTime = setInterval (imagesChange, 3000);

shoeImage.onclick = () => {
    clearInterval(realTime);
}