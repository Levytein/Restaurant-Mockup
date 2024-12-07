import styles from "./Menu.module.scss"
import moonlightDrink from '../../assets/moonlightFood.png'
import milkywayDrink from '../../assets/milkyWayFood.png'
import stardustFood from '../../assets/stardust.png'
import vanillaFood from '../../assets/purevanillafood.png'
import moonlight from '../../assets/cookies/moonlight.png'
import milkyway from '../../assets/cookies/milkyway.png'
import stardust from '../../assets/cookies/purevanilla.png'
import vanilla from '../../assets/cookies/stardustCookie.png'
function Menu (){

    const items =  [
        { imgSrc: `${milkywayDrink}`, cookieImgSrc:`${moonlight}`, caption: 'Milkyway Cloud Milk ', price:"4.99", description:"Smooth butterfly pea milk tea topped with a fluffy almond cream cloud.",imageSize:"" , longText:`${styles.caption}`, border:""},
        { imgSrc: `${moonlightDrink}`,cookieImgSrc:`${milkyway}`, caption: 'Moonlight Invitation from the Slumbering Moon ', price:"5.99", description:"Refreshing and sweet mocktail made with lychee, sparkling lemonade, and blue spirulina.",imageSize:"", longText:`${styles.longCaption}`, border:""},
        { imgSrc: `${stardustFood}`,cookieImgSrc:`${stardust}`, caption: 'Stardust Moon Jelly ', price:"4.99", description:"A fresh take on your favorite jelly dessert - flavored with strawberry, sparkling soda, and blue spirulina, topped with edible glitter and coconut flakes.",imageSize:`${styles.imgSmall}`,longText:`${styles.caption}` },
        { imgSrc: `${vanillaFood}`,cookieImgSrc:`${vanilla}`, caption: 'Pure Vanilla Soft Serve ', price:"4.99", description:"Delicate and velvety soft serve made with vanilla bean and rich Hokkaido Milk.",imageSize:`${styles.imgSmall}`,longText:`${styles.caption}` },
        { imgSrc: `${milkywayDrink}`,cookieImgSrc:`${moonlight}`, caption: 'Milkyway Cloud Milk ', price:"4.99", description:"Smooth butterfly pea milk tea topped with a fluffy almond cream cloud.",imageSize:"" , longText:`${styles.caption}`, border:``},
        { imgSrc: `${moonlightDrink}`,cookieImgSrc:`${milkyway}`, caption: 'Moonlight Invitation from the Slumbering Moon ', price:"5.99", description:"Refreshing and sweet mocktail made with lychee, sparkling lemonade, and blue spirulina.",imageSize:"", longText:`${styles.longCaption}`,border:`{${styles.bottomBorder}` },
        { imgSrc: `${stardustFood}`,cookieImgSrc:`${stardust}`, caption: 'Stardust Moon Jelly ', price:"4.99", description:"A fresh take on your favorite jelly dessert - flavored with strawberry, sparkling soda, and blue spirulina, topped with edible glitter and coconut flakes.",imageSize:`${styles.imgSmall}`,longText:`${styles.caption}` },
        { imgSrc: `${vanillaFood}`,cookieImgSrc:`${vanilla}`, caption: 'Pure Vanilla Soft Serve ', price:"4.99", description:"Delicate and velvety soft serve made with vanilla bean and rich Hokkaido Milk.",imageSize:`${styles.imgSmall}`,longText:`${styles.caption}` }

        ]; 
    return (
        <div className={styles.container}>
            <div className={styles.overlay} ></div>
            <div className={styles.menuGrid}>
            {items.map((item)=>(
                       <div className={`${styles.food} ${item.border}}`} >
                        <div className={styles.foodImage}> 
                        <img className={item.imageSize} src={item.imgSrc}></img>
                        </div>
                        <div className={styles.descriptionContainer}>
                        <div className={styles.captionContainer}>
                            <div className={item.longText}>{item.caption}</div>
                            <div className={styles.price}>{item.price}</div>
                            <div className={styles.divider}></div>
                        </div>
                        <div className={styles.description}>{item.description} <div className={styles.descCookie}><img src={item.cookieImgSrc} /></div> </div>
                        </div>
                         </div>
                    ))}

            </div>

        </div>
    )
}

export default Menu