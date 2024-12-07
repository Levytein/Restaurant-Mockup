import styles from './NavigationBar.module.scss'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
function NavigationBar(){

    return (
    <div className={styles.container}>
        <img src={logo} alt ="Logo" />
        <div className={styles.navigation}>
        
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <h2>About</h2>
        </div>

    </div>)
}


export default NavigationBar