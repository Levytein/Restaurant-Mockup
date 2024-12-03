import styles from './LandingBlock.module.scss'
import milkyway from '../../assets/milkyAnimation.gif'
function LandingBlock(){

return (
<div className={styles.firstBlock}>
<div className={styles.overlay} ></div>

<div className={styles.content}>
<img className={styles.milkyway} src={milkyway} alt ="Logo" />
<div className={styles.firstBlockText}>
<div>
<h1>The Dream Express Cafe ...</h1>
</div>
<div className={styles.firstBlockAnimationContainer}>
    <div className={styles.isWord}>is</div>
    <div className={styles.nowWord}>now</div>
    <div className={styles.openWord}>Open!</div>
</div>
</div>

</div>
</div>)
}
export default LandingBlock