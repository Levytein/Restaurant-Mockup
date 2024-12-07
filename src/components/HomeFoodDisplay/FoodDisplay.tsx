import styles from './FoodDisplay.module.scss'
import moonlightDrink from '../../assets/moonlightFood.png'
import milkywayDrink from '../../assets/milkyWayFood.png'
import stardustFood from '../../assets/stardust.png'
import vanillaFood from '../../assets/purevanillafood.png'
import { useEffect,useRef} from 'react';
function FoodDisplay(){
    const itemsRef = useRef<HTMLDivElement[]>([]); 
    const activeRef = useRef(1); // Active index (starts at 1)
    const other1Ref = useRef<number | null>(null); // Previous item
    const other2Ref = useRef<number | null>(null);
    const countItem = 4;
    const items =  [
    { imgSrc: `${milkywayDrink}`, caption: 'Milkyway Cloud Milk 1',foodDescription:"Milkyway Cloud Milk", price:"4.99", description:"Smooth butterfly pea milk tea topped with a fluffy almond cream cloud." },
    { imgSrc: `${moonlightDrink}`, caption: 'Moonlight Invitation from the Slumbering Moon 2',foodDescription:"Moonlight Invitation from the Slumbering Moon", price:"5.99", description:"Refreshing and sweet mocktail made with lychee, sparkling lemonade, and blue spirulina." },
    { imgSrc: `${stardustFood}`, caption: 'Stardust Moon Jelly 3',foodDescription:"Stardust Moon Jelly", price:"4.99", description:"A fresh take on your favorite jelly dessert - flavored with strawberry, sparkling soda, and blue spirulina, topped with edible glitter and coconut flakes." },
    { imgSrc: `${vanillaFood}`, caption: 'Pure Vanilla Soft Serve 4',foodDescription:"Stardust Moon Jelly", price:"4.99", description:"Delicate and velvety soft serve made with vanilla bean and rich Hokkaido Milk." },

    ]; 

    let autoPlay: number;
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const figcaptionRefs = useRef<(HTMLElement | null)[]>([]);
    const autoPlayRef = useRef<number | null>(null);    
    useEffect(() => {
     
       startAutoPlay();
    
        return () => clearAutoPlay();
      }, []);
    
    const resetAnimation = (element: HTMLElement | null) => {
      if (element) {
        element.style.animation = 'none';
        void element.offsetWidth; 
        element.style.animation = '';
      }
    };
  
    const changeSlider = () => {
        itemsRef.current.forEach((item, index) => {
            if (!item) return;
        
            if (index === activeRef.current) {
              item.classList.add(`${styles.active}`);
            } else {
              item.classList.remove(`${styles.active}`);
            }
        
            if (index === other1Ref.current) {
              item.classList.add(`${styles.other1}`);
            } else {
              item.classList.remove(`${styles.other1}`);
            }
        
            if (index === other2Ref.current) {
              item.classList.add(`${styles.other2}`);
            } else {
              item.classList.remove(`${styles.other2}`);
            }
        
            const img = imgRefs.current[index];
            const figcaption = figcaptionRefs.current[index];
        
            if (img) resetAnimation(img);
            if (figcaption) resetAnimation(figcaption);
        });
      // Restart autoplay
      clearAutoPlay();
      startAutoPlay();
    };
    const startAutoPlay = () => {
        clearAutoPlay();
        autoPlayRef.current = window.setInterval(() => {
            handleNext();
          }, 5000);
      };
    
      const clearAutoPlay = () => {
        if (autoPlayRef.current !== null) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
          }
      };
  
      const handleNext = () => {
        activeRef.current = activeRef.current + 1 >= countItem ? 0 : activeRef.current + 1;
        other1Ref.current = activeRef.current - 1 < 0 ? countItem - 1 : activeRef.current - 1;
        other2Ref.current = activeRef.current + 1 >= countItem ? 0 : activeRef.current + 1;
        changeSlider();
      };
    
      const handlePrev = () => {
        activeRef.current = activeRef.current - 1 < 0 ? countItem - 1 : activeRef.current - 1;
        other1Ref.current = activeRef.current + 1 >= countItem ? 0 : activeRef.current + 1;
        other2Ref.current = other1Ref.current! + 1 >= countItem ? 0 : other1Ref.current! + 1;
        changeSlider();
      };
    
      const getItemClass = (index: number) => {
        if (index === activeRef.current) return `${styles.item} ${styles.active}`;
        if (index === other1Ref.current) return `${styles.item} ${styles.other1}`;
        if (index === other2Ref.current) return `${styles.item} ${styles.other2}`;
        return styles.item;
      };

    return (
        <div className={styles.secondBlock}>
            <section className={`${styles.carousel} ${styles.next}`}>
                <div className={styles.list}>
                    {items.map((item,index)=>(
                          <article key={index} className={`${getItemClass(index)} ${styles[`food${index+1}`]}`} 
                          ref={(el) => {
                            if (el) {
                              itemsRef.current[index] = el as HTMLDivElement;
                  
                            }
                          }}   >
                            <div className={styles.mainContent}> 
                                <div className={styles.content}>
                                    <div className={styles.productInfo}>
                                    <h2>{items[index].caption}</h2>
                                    <p className={styles.price}>{items[index].price}</p>
                                    <p className={styles.description}>{items[index].description}</p>
                                </div>
                            </div>
                        </div>
                        <figure className={styles.image}>
                            <img 
                              ref={(el) => {
                                imgRefs.current[index] = el;
                              }}
                            src={item.imgSrc}
                             alt={`Carousel item ${index + 1}`} />
                            <figcaption
                             ref={(el) => {
                                figcaptionRefs.current[index] = el;
                              }}
                            >{item.caption}</figcaption>
                          </figure>
                        </article>
                    ))}
                 
                </div>
                 <div className={styles.arrows}>
                    <button className={styles.prev} onClick={handlePrev}>{'<'}</button>
                    <button className={styles.next} onClick={handleNext}>{'>'}</button>

                </div>

            </section>
            
            </div>
   
  
    )
  
}


export default FoodDisplay

 