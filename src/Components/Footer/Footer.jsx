import styles from './Footer.module.scss'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { ImPinterest2 } from "react-icons/im";
import { SiApplepay } from "react-icons/si";
import { LiaCcDinersClub } from "react-icons/lia";
import { LiaCcDiscover } from "react-icons/lia";
import { FaGooglePay } from "react-icons/fa";
import { LiaCcMastercard } from "react-icons/lia";



const Footer = () => {
    return(
        <div>
            <div className={styles.footer}>
                <div className={styles.sectionOne}>
                    <img src="https://thesusoutdoors.com/cdn/shop/files/Thesus-white-logo.png?v=1686324987&width=1100" alt="" />
                    <h3>Socially and environmentally progressive outdoor footwear</h3>
                    <div className={styles.footerIcons}>
                        <CiFacebook className={styles.footerIcon} />
                        <FaInstagram className={styles.footerIcon} />
                        <RiTiktokLine className={styles.footerIcon} />
                        <ImPinterest2 className={styles.footerIcon} />
                    </div>
                </div>
                <div className={styles.sectionTwo}>
                    <h3>Our Shop</h3>
                    <ul>
                        <li>All Products</li>
                        <li>The Weekend Boot</li>
                        <li>The Anyday Rain Boot</li>
                        <li>The Modern Winter Boot</li>
                        <li>The Winter Weekend Boot Z</li>
                        <li>The Terrus Clog</li>
                        <li>Accessories</li>
                        <li>Thesus Gift Card</li>
                    </ul>
                </div>
                <div className={styles.sectionThree}>
                    <h3>Help</h3>
                    <ul>
                        <li>Size Guide</li>
                        <li>Shipping Policy</li>
                        <li>Refund Policy</li>
                        <li>Wear and Care FAQ</li>
                    </ul>
                </div>  
                <div className={styles.sectionFour}>
                    <h3>About Us</h3>
                    <ul>
                        <li>Values</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className={styles.underFooter}>
                <div className={styles.cards}>
                    <SiApplepay className={styles.footerCard} />
                    <LiaCcDinersClub className={styles.footerCard}/>
                    <LiaCcDiscover className={styles.footerCard}/>
                    <FaGooglePay className={styles.footerCard}/>
                    <LiaCcMastercard className={styles.footerCard}/>
                </div>
                <div className={styles.other}>
                    <p>© 2024,</p>
                    <ul>
                        <li>Thesus Outdoors Powered by Shopify</li>
                        <li>Refund policy</li>
                        <li>Privacy policy</li>
                        <li>Terms of service</li>
                        <li>Shipping policy</li>
                        <li>Contact information</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer