// Here you Can Add new Images to the homepage
// Before uploading the image to the folder you will need to change the oriantation of the image as portrait 4/3 dimention
// convert it to a .webp format using https://image.online-convert.com/convert-to-webp
// if the image file is more than 1 megabyte you will need to resize the image:  Contact Support 
// now upload the images to the GoodHair folder
// give the new image a simple new name such as img20
// use this path to find your image "images/GoodHair/yourNewImage.webp"

const images = [
	"images/GoodHair/img1.webp",
	"images/GoodHair/img2.webp",
	"images/GoodHair/img3.webp",
	"images/GoodHair/img4.webp",
	"images/GoodHair/img5.webp",
	"images/GoodHair/img6.webp",
	"images/GoodHair/img7.webp",
	"images/GoodHair/img8.webp",
	"images/GoodHair/img9.webp",
	"images/GoodHair/img10.webp",
	"images/GoodHair/img11.webp",
	"images/GoodHair/img12.webp",
	"images/GoodHair/img13.webp",
	"images/GoodHair/img14.webp",
	"images/GoodHair/img15.webp",
	"images/GoodHair/img16.webp"
];


window.addEventListener('load', () => {
    for (let i = 0; i < images.length; i++){
        let newImg = document.createElement('img');
        newImg.src = images[i];
        newImg.alt = "A picture of a Great Haircut"
        document.querySelector('#galleryMain').appendChild(newImg);
    }
})
