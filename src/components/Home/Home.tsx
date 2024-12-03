import styles from './Home.module.scss'
import LandingBlock from '../LandingBlock/LandingBlock'
import FoodDisplay from '../HomeFoodDisplay/FoodDisplay'
function HomePage(){

    return (
    <div className={styles.container}>
    <LandingBlock />
    <FoodDisplay />

    </div> 
    )
}


export default HomePage