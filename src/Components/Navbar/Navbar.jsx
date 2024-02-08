import styles from './Navbar.module.scss'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [shrinkImage, setShrinkImage] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);

            if(position > 50){
                setShrinkImage(true)
            } else {
                setShrinkImage(false)
            }   
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []) 

    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to="/">
                    <img    className={`${styles.image} ${shrinkImage ? styles.shrink : ''}`} 
                            src='https://thesusoutdoors.com/cdn/shop/files/THESUS-LOGO1.png?v=1695740838&width=400' 
                            alt="logo" />
                </NavLink>
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
                    <NavLink style={{color: 'black'}} to="/account/login">
                        <li><IoPersonOutline className={styles.icon}/></li>
                    </NavLink>
                    <li><BsBag className={styles.icon} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar