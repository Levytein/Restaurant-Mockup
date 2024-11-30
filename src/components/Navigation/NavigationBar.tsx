import styles from './NavigationBar.module.scss'
import logo from '../../assets/Logo.png'

function NavigationBar(){

    return (
    <div className={styles.container}>
        <img src={logo} alt ="Logo" />
        <div className={styles.navigation}>
        <h2>Home</h2>
        <h2>Menu</h2>
        <h2>About</h2>
        </div>

    </div>)
}


export default NavigationBar