let imageContainer=document.querySelector(".image-container");
const btn=document.querySelector('.btn');

btn.addEventListener("click", () => {
    pictureNumber=10;
    loadImages();
})

function loadImages(){
    console.log("hi");
    for (let i=0; i < pictureNumber; i++){
        const newImage=document.createElement("img");
        newImage.src=`https://picsum.photos/300?random=${Math.floor(
            Math.random() * 2000
        )}`;
        imageContainer.appendChild(newImage);
    }
}