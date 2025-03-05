import styles from './LandingBlock.module.scss'
import milkyway from '../../assets/milkyAnimation.gif'
import { useRef,useEffect } from 'react';
function LandingBlock(){

const animatedTextBlock = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (animatedTextBlock.current) {
        animatedTextBlock.current.style.display = 'none';
      }
    }, 8600); // 8s delay + 0.6s animation duration
  
    return () => clearTimeout(timeoutId);
  }, []);


return (
<div className={styles.firstBlock}>
<div className={styles.overlay} ></div>

<div className={styles.content}>
  <div className={styles.imageContainer}>
<img className={styles.milkyway} src={milkyway} alt ="Logo" />
</div>
<div className={styles.firstBlockText}>

<div>
<div className={styles.firstBlockAnimationContainer} ref={animatedTextBlock}>
<h1>The Dream Express Cafe ...</h1>
    <div className={styles.isWord}>is</div>
    <div className={styles.nowWord}>now</div>
    <div className={styles.openWord}>Open!</div>
</div>
</div>
<div className={styles.infoContainer}>
<h2 className={styles.welcomeText}>Welcome!</h2>
<div className={styles.infoText}>

    <div className={styles.hours}>
            <h2>Hours of Operation</h2>
            <div className={styles.listContainer}>
              <div className={styles.listHours}>
                <div className={styles.addressText}>
            <ul>
                <li>MON-THURS: 11am to 8pm</li>
                <li>FRI: 11am to 9pm</li>
                <li>SAT: 9am to 9pm</li>
                <li>SUN: 9am to 8pm</li>
            </ul>
            </div>
            <div className={styles.infoButtonContainer}>
            <button className={styles.infoButton}>View Menu</button>
            </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.listAddress}>
              <div className={styles.addressText}>
              <h3>
                Address
              </h3>
              <p>1313 Disneyland Dr Anaheim CA 92802</p>
              </div>
              <div className={styles.infoButtonContainer}>
    
    <button className={styles.orderButton}>Order Pickup</button>
</div>
          </div>
            </div>
        
        </div>
        
        </div>
     
</div>

</div>


</div>
</div>)
}

export default LandingBlock