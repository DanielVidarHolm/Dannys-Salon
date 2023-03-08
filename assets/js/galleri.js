// Here you Can Add new Images to the homepage
// Before uploading the image to the folder you will need to change the oriantation of the image as portrait 4/3 dimention
// convert it to a .jpg format using https://image.online-convert.com/convert-to-jpg
// if the image file is more than 1 megabyte you will need to resize the image:  Contact Support 
// now upload the images to the GoodHair folder
// give the new image a simple new name such as img20
// use this path to find your image "images/GoodHair/yourNewImage.jpg"

const images = [
	"images/GoodHair/img1.jpg",
	"images/GoodHair/img2.jpg",
	"images/GoodHair/img3.jpg",
	"images/GoodHair/img4.jpg",
	"images/GoodHair/img5.jpg",
	"images/GoodHair/img6.jpg",
	"images/GoodHair/img7.jpg",
	"images/GoodHair/img8.jpg",
	"images/GoodHair/img9.jpg",
	"images/GoodHair/img10.jpg",
	"images/GoodHair/img11.jpg",
	"images/GoodHair/img12.jpg",
	"images/GoodHair/img13.jpg",
	"images/GoodHair/img14.jpg",
	"images/GoodHair/img15.jpg",
	"images/GoodHair/img16.jpg"
];


window.addEventListener('load', () => {
    for (let i = 0; i < images.length; i++){
        let newImg = document.createElement('img');
        newImg.src = images[i];
        newImg.alt = "A picture of a Great Haircut"
        document.querySelector('#galleryMain').appendChild(newImg);
    }
})
