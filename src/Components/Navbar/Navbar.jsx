import styles from './Navbar.module.scss'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src='https://thesusoutdoors.com/cdn/shop/files/THESUS-LOGO1.png?v=1695740838&width=400' alt="logo" />
            </div>
            <div className={styles.middle}>
                <ul>
                    <li>New</li>
                    <li className={styles.red}>Sale</li>
                    <li>Rain</li>
                    <li>Snow</li>
                    <li>All Weather</li>
                    <li>Shop All</li>
                    <li>Values</li>
                </ul>
            </div>
            <div className={styles.right}>
                <ul>
                    <li><CiSearch className={styles.icon}/></li>
                    <li><IoPersonOutline className={styles.icon}/></li>
                    <li><BsBag className={styles.icon} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar