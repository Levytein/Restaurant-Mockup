import styles from './Home.module.scss'
import LandingBlock from '../LandingBlock/LandingBlock'
import FoodDisplay from '../HomeFoodDisplay/FoodDisplay'
import MockMap from '../MockMap/MockMap'
function HomePage(){

    return (
    <div className={styles.container}>
    <LandingBlock />
    <FoodDisplay />
    <MockMap />
    </div> 
    )
}


export default HomePage