import milkyWay from "../assets/milkyWay.png"
import milkyWayFood from "../assets/milkyWayFood.png"

import moonLight from "../assets/moonlight.png"
import moonLightFood from "../assets/moonLightFood.png"

import stardust from "../assets/stardust.png"
import stardustCookie from "../assets/stardustCookie.png"

import pureVanilla from "../assets/purevanilla.png"
import pureVanillaFood from "../assets/purevanillafood.png"

const menuDiv = ()=>
{
    const menu = document.createElement("div");
    menu.id = "menuContainer";

    // Cookie Menu Item Descriptions and Price
    const foodOne = document.createElement("div");
    const foodOneTitle = document.createElement("div");
    const foodOneDescription = document.createElement("div");
    foodOneTitle.textContent="Milky Way Cloud Milk 4.99";
    foodOneDescription.textContent = 'Smooth butterfly pea milk tea topped with a fluffy almond cream cloud.';
    foodOneDescription.id = 'description';
    foodOne.id="foodText";
    foodOne.appendChild(foodOneTitle);
    foodOne.appendChild(foodOneDescription);

   
    menu.appendChild(foodOne);

    
    //Cookie Menu Food and Stamp Sections
    const foodOneImgContainer = document.createElement("div");
    const foodOneCookieStampImg = document.createElement("img");
    foodOneImgContainer.id = 'cookieContainerL';
    const foodOnePic = document.createElement("img");
    foodOnePic.src= milkyWayFood;
    foodOneCookieStampImg.src = milkyWay;
    foodOneCookieStampImg.id="stamp";
    foodOneImgContainer.appendChild(foodOneCookieStampImg);
    foodOnePic.id = "foodPic";

    foodOneImgContainer.appendChild(foodOnePic);

    menu.appendChild(foodOneImgContainer);
    menu.appendChild(foodOne);

    /////////////////////////////////////////////////////////////////////////////////////////////
    const foodTwo = document.createElement("div");
    const foodTwoTitle = document.createElement("div");
    const foodTwoDescription = document.createElement("div");
    foodTwoTitle.textContent="Moonlight Invitation from the Slumbering Moon 5.99";
    foodTwoDescription.textContent ='Refreshing and sweet mocktail made with lychee, sparkling lemonade, and blue spirulina.';
    foodTwoDescription.id = 'description';
    foodTwo.id="foodTextL";
    foodTwo.appendChild(foodTwoTitle);
    foodTwo.appendChild(foodTwoDescription);
    menu.appendChild(foodTwo);

    
    const foodTwoImgContainer = document.createElement("div");
    const foodTwoCookieStampImg = document.createElement("img");
    foodTwoImgContainer.id = 'cookieContainerR';
    const foodTwoPic = document.createElement("img");
    foodTwoCookieStampImg.src = moonLight;
    foodTwoCookieStampImg.id="stamp";
    foodTwoPic.src= moonLightFood;
    foodTwoPic.id = "foodPic";
    foodTwoImgContainer.appendChild(foodTwoCookieStampImg);
    foodTwoImgContainer.appendChild(foodTwoPic);

    menu.appendChild(foodTwo);
    menu.appendChild(foodTwoImgContainer);


    // Cookie Menu Item Descriptions and Price
    const foodThree = document.createElement("div");
    const foodThreeTitle = document.createElement("div");
    const foodThreeDescription = document.createElement("div");
    foodThreeTitle.textContent="Stardust Moon Jelly 4.99";
    foodThreeDescription.textContent = 'A fresh take on your favorite jelly dessert - flavored with strawberry, sparkling soda, and blue spirulina, topped with edible glitter and coconut flakes.';
    foodThreeDescription.id = 'description';
    foodThree.id="foodText";
    foodThree.appendChild(foodThreeTitle);
    foodThree.appendChild(foodThreeDescription);

   
    menu.appendChild(foodThree);

    
    //Cookie Menu Food and Stamp Sections
    const foodThreeImgContainer = document.createElement("div");
    const foodThreeCookieStampImg = document.createElement("img");
    foodThreeImgContainer.id = 'cookieContainerL';
    const foodThreePic = document.createElement("img");
    foodThreePic.src= stardust;
    foodThreeCookieStampImg.src = stardustCookie;
    foodThreeCookieStampImg.id="stampStardust";
    foodThreeImgContainer.appendChild(foodThreeCookieStampImg);
    foodThreePic.id = "foodPicStardust";

    foodThreeImgContainer.appendChild(foodThreePic);

    menu.appendChild(foodThreeImgContainer);
    menu.appendChild(foodThree);

    /////////////////////////////////////////////////////////////////////////////////////////////
    /* // Cookie Menu Item Descriptions and Price
       const foodFour = document.createElement("div");
       const foodFourTitle = document.createElement("div");
       const foodFourDescription = document.createElement("div");
       foodFourTitle.textContent="Stardust Moon Jelly 4.99";
       foodFourDescription.textContent = 'A fresh take on your favorite jelly dessert - flavored with strawberry, sparkling soda, and blue spirulina, topped with edible glitter and coconut flakes.';
       foodFourDescription.id = 'description';
       foodFour.id="foodText";
       foodFour.appendChild(foodFourTitle);
       foodFour.appendChild(foodFourDescription);
   
      
       menu.appendChild(foodFour);
   
       
       //Cookie Menu Food and Stamp Sections
       const foodFourImgContainer = document.createElement("div");
       const foodFourCookieStampImg = document.createElement("img");
       foodFourImgContainer.id = 'cookieContainerL';
       const foodFourPic = document.createElement("img");
       foodThreePic.src= stardust;
       foodFourCookieStampImg.src = stardustCookie;
       foodFourCookieStampImg.id="stampStardust";
       foodFourImgContainer.appendChild(foodFourCookieStampImg);
       foodFourPic.id = "foodPicStardust";
   
       foodThreeImgContainer.appendChild(foodThreePic);
   
       menu.appendChild(foodFourImgContainer);
       menu.appendChild(foodFour);
*/
    // Cookie Menu Item Descriptions and Price
    const foodLast = document.createElement("div");
    const foodLastTitle = document.createElement("div");
    const foodLastDescription = document.createElement("div");
    foodLastTitle.textContent="Pure Vanilla Soft Serve 4.99";
    foodLastDescription.textContent = 'Delicate and velvety soft serve made with vanilla bean and rich Hokkaido Milk.';
    foodLastDescription.id = 'description';
    foodLast.id="foodTextLast";
    foodLast.appendChild(foodLastTitle);
    foodLast.appendChild(foodLastDescription);

    
    //Cookie Menu Food and Stamp Sections
    const foodLastImgContainer = document.createElement("div");
    const foodLastCookieStampImg = document.createElement("img");
    foodLastImgContainer.id = 'cookieContainerLast';
    const foodLastPic = document.createElement("img");
    foodLastPic.src= pureVanillaFood;
    foodLastCookieStampImg.src = pureVanilla;
    foodLastCookieStampImg.id="stamp";
    foodLastImgContainer.appendChild(foodLastCookieStampImg);
    foodLastPic.id = "foodPic";

    foodLastImgContainer.appendChild(foodLastPic);
    menu.appendChild(foodLast);    
    menu.appendChild(foodLastImgContainer);



    return menu;
};

export default menuDiv;