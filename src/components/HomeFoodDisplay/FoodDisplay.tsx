import styles from './FoodDisplay.module.scss'
import milkyway from '../../assets/milkyAnimation.gif'
import { useState, useEffect,useRef} from 'react';
function FoodDisplay(){
    const itemsRef = useRef<HTMLDivElement[]>([]); 
    const [active, setActive] = useState(0);
    const [other1, setOther1] = useState(1);
    const [other2, setOther2] = useState(2);
    const countItem = 3;
    const items =  [
    { imgSrc: `${milkyway}`, caption: 'Item 1' },
    { imgSrc: `${milkyway}`, caption: 'Item 2' },
    { imgSrc: `${milkyway}`, caption: 'Item 3' }
    ]; 

    let autoPlay: number;
    const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const figcaptionRefs = useRef<(HTMLElement | null)[]>([]);
    const autoPlayRef = useRef<number | null>(null);    
    useEffect(() => {
     
        autoPlay = setInterval(() => {
          handleNext();
        }, 5000);
    
        // Cleanup interval on unmount
        return () => clearInterval(autoPlay);
      }, [active]);
    
    // Function to reset animations
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
        
            if (index === active) {
              item.classList.add(`${styles.active}`);
            } else {
              item.classList.remove(`${styles.active}`);
            }
        
            if (index === other1) {
              item.classList.add(`${styles.other1}`);
            } else {
              item.classList.remove(`${styles.other1}`);
            }
        
            if (index === other2) {
              item.classList.add(`${styles.other2}`);
            } else {
              item.classList.remove(`${styles.other2}`);
            }
        
            const img = imgRefs.current[index];
            const figcaption = figcaptionRefs.current[index];
        
            console.log('Image ref:', img);
            console.log('Figcaption ref:', figcaption);
        
            if (img) resetAnimation(img);
            if (figcaption) resetAnimation(figcaption);
        });
      // Restart autoplay
      clearAutoPlay();
      startAutoPlay();
    };
    const startAutoPlay = () => {
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
        setActive((prev) => (prev + 1 >= countItem ? 0 : prev + 1));
        setOther1((prev) => (prev + 1 >= countItem ? 0 : prev + 1));
        setOther2((prev) => (prev + 1 >= countItem ? 0 : prev + 1));
        changeSlider();
      };
    
      const handlePrev = () => {
        setActive((prev) => (prev - 1 < 0 ? countItem - 1 : prev - 1));
        setOther1((prev) => (prev - 1 < 0 ? countItem - 1 : prev - 1));
        setOther2((prev) => (prev - 1 < 0 ? countItem - 1 : prev - 1));
        changeSlider();
      };
    
      const getItemClass = (index: number) => {
        if (index === active) return `${styles.item} ${styles.active}`;
        if (index === other1) return `${styles.item} ${styles.other1}`;
        if (index === other2) return `${styles.item} ${styles.other2}`;
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
                              const img = el.querySelector<HTMLImageElement>(`${styles.image} img`);
                              const figcaption = el.querySelector<HTMLElement>(`${styles.image} figcaption`);
                              // You can directly access img and figcaption here after the element is rendered
                              resetAnimation(img);
                              resetAnimation(figcaption);
                            }
                          }}   >
                            <div className={styles.mainContent}> 
                                <div className={styles.content}>
                                    <div className={styles.productInfo}>
                                    <h2>Name of Product</h2>
                                    <p className={styles.price}>$20</p>
                                    <p className={styles.description}>a lotatate</p>
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
                    ))};
                  
                </div>
                <div className={styles.arrows}>
                    <button className={styles.prev} onClick={handlePrev}></button>
                    <button className={styles.next} onClick={handleNext}></button>

                </div>

            </section>
            
            </div>
   
  
    )
  
}


export default FoodDisplay

 