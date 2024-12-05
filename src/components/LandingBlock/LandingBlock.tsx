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
<img className={styles.milkyway} src={milkyway} alt ="Logo" />
<div className={styles.firstBlockText}>

<div>
<div className={styles.firstBlockAnimationContainer} ref={animatedTextBlock}>
<h1>The Dream Express Cafe ...</h1>
    <div className={styles.isWord}>is</div>
    <div className={styles.nowWord}>now</div>
    <div className={styles.openWord}>Open!</div>
</div>
</div>
<div className={styles.infoText}>
    <h2 className={styles.welcomeText}>Welcome!</h2>
    <p className={styles.welcomeInfo}>We've opened a new location that takes inspiration from all the fan favorites in Cookie Run:Kingdom! We hope you enjoy our desserts and drinks!</p>
    <div className={styles.infoButtonContainer}>
        <button className={styles.infoButton}>View Menu</button>
        <button className={styles.infoButton}>Order Pickup</button>
    </div>
</div>
</div>

</div>
</div>)
}

export default LandingBlock