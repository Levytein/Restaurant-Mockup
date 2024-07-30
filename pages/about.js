import about from '../assets/about.jpg';
const aboutDiv = ()=>
{
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "aboutContainer";

    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.id = "aboutTextContainer";
    const aboutTextHead = document.createElement("h3");
    aboutTextHead.id="headText";
    aboutTextHead.textContent = "About Dream Express Cafe";
    const aboutTextSub = document.createElement("p");
    aboutTextSub.id="subText";
    aboutTextSub.textContent= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
    
    const aboutContactButton = document.createElement("button");
    aboutContactButton.id="contactButton";
    aboutContactButton.textContent = "Contact Us";
    
    aboutTextContainer.appendChild(aboutTextHead);
    aboutTextContainer.appendChild(aboutTextSub);
    aboutTextContainer.appendChild(aboutContactButton);
    aboutContainer.appendChild(aboutTextContainer);
    document.getElementById("content").appendChild(aboutContainer);

    const pictureContainer = document.createElement("div");
    pictureContainer.id= "pictureContainer";
    
    const pictureAbout = document.createElement("img");
    pictureAbout.id ="aboutImg";
    pictureAbout.src =about;
    pictureContainer.appendChild(pictureAbout);
    aboutContainer.appendChild(pictureContainer);
    return aboutContainer;
};
export default aboutDiv;