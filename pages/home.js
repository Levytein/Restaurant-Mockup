import milkyWayAnimation from '../assets/milkyAnimation.gif';
import  first from '../assets/cafeimages/1.jpg';
import  second from '../assets/cafeimages/2.jpg';
import  third from '../assets/cafeimages/3.jpg';
import  fourth from '../assets/cafeimages/4.jpg';
import  fifth from '../assets/cafeimages/5.jpg';
import  sixth from '../assets/cafeimages/6.jpg';
import  seventh from '../assets/cafeimages/7.jpg';
import  eigth from '../assets/cafeimages/8.jpg';

const homeDiv =()=>
{   
    //Creation of grid layout for home page

    const bannerContainer = document.createElement("div");
    bannerContainer.id="banner";
    const homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";

    const milkyAnimationContainer = document.createElement("div");
    const milkyWayAnim = document.createElement("img");

    milkyWayAnim.src = milkyWayAnimation;
    milkyWayAnim.id = "milkyWayAnim";
    milkyAnimationContainer.appendChild(milkyWayAnim);

    homeContainer.appendChild(milkyAnimationContainer);
    bannerContainer.appendChild(homeContainer);
    document.getElementById("content").appendChild(bannerContainer);

    //End of animation grid cell

    const sloganDiv = document.createElement("div");
    sloganDiv.id="sloganContainer";
    const slogan = document.createElement("div");
    const slogan2= document.createElement("div");
    slogan.textContent="All aboard the Sweets Express !";
    slogan2.textContent="Sweet and desserts based on Cookie Run!";
    sloganDiv.appendChild(slogan);
    sloganDiv.appendChild(slogan2);
    homeContainer.appendChild(sloganDiv);

    const galleryDiv = document.createElement("div");
    galleryDiv.id= "gallery";
    //Start of Gallery
    const images = [first, seventh, second, eigth,fourth, fifth, sixth];
    images.forEach((src) => {
        const image = document.createElement("img");
        image.src = src;
        image.className="image";
        image.setAttribute("draggable","false");
        
        galleryDiv.appendChild(image);
    });

    
    //Attach gallery to div
    document.getElementById("content").appendChild(galleryDiv);

};

export default homeDiv;