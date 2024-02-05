import styles from './Main.module.scss'
import { IoIosArrowRoundForward } from "react-icons/io";
import  {useEffect, useRef, useState} from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Main = () => {

    const containerRef = useRef(null);
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>setItems(json))
    }, [])

    const scrollTo = (offset) => {
        if (containerRef.current) {
          containerRef.current.scrollTo({
            left: containerRef.current.scrollLeft + offset,
            behavior: 'smooth'
          });
        }
      };

    return(
        <div className={styles.main}>
            <div className={styles.imageHeader}>
                <h2>Shop yourself some love this Valentine&apos;s day</h2>
                <h1>Winter Sale On Now</h1>
                <button>Shop sale</button>
            </div>
            <div className={styles.quote}>
                <h1>Socially and Environmentally</h1>
                <h1>Progressive Outdoor Footwear That</h1>
                <h1>Helps You #BeOutside</h1>
            </div>
            <div className={styles.categories}>
                <div className={styles.box}>
                    <div className={styles.imageContainer}>
                        <img src="https://thesusoutdoors.com/cdn/shop/collections/anyday-rainboot-collection.png?v=1699896365&width=320" alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Rain</h3>
                        <IoIosArrowRoundForward/>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imageContainer}>
                        <img src="https://thesusoutdoors.com/cdn/shop/collections/ethical-hiking-boot-yellow.png?v=1694501390&width=320" alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>All weather</h3>
                        <IoIosArrowRoundForward/>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imageContainer}>
                        <img src="https://thesusoutdoors.com/cdn/shop/collections/winter-boot-sustainable.png?v=1699896322&width=320" alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Snow</h3>
                        <IoIosArrowRoundForward/>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imageContainer}>
                        <img src="https://thesusoutdoors.com/cdn/shop/collections/sage-green-sustainable-clog.png?v=1686561141&width=320" alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Sun</h3>
                        <IoIosArrowRoundForward/>
                    </div>
                </div>
            </div>
            <div className={styles.bestSelling}>
                <h1>Stay Cozy All<br/>Season Long</h1>
                <h2>Our best selling Weekend Boot - but<br/>upgraded</h2>
                <button>Shop the Weekend Boot Z</button>
            </div>
            
            <div className={styles.onSaleNow}>
                <h1>On Sale Now</h1>
                <p>Select products up to 30% off. Weekend Boots and Terrus Clogs will not be restocked until spring 2024. Get yours before they&aposre gone!</p>
            </div>
            <div className={styles.container} ref={containerRef}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>€{item.price} EUR</p>
                        <button>Choose options</button>
                    </div>
            ))}
            </div>
            <div className={styles.arrows}>
                <RiArrowDropLeftLine className={styles.arrow} onClick={() => scrollTo(-360)}/>
                <RiArrowDropRightLine className={styles.arrow} onClick={() => scrollTo(360)}/>
            </div>
            <div className={styles.viewAll}>
                <button>View all</button>
            </div>
            <div className={styles.learnMore}>
                <div className={styles.learnOne}>
                    <img src="https://thesusoutdoors.com/cdn/shop/files/SustainableMaterialsSectionHomepage.png?v=1699600794&width=750" alt="" />
                </div>
                <div className={styles.learnTwo}>
                    <h2>Thoughtfully Designed From Natural and Recycled Materials</h2>
                    <p>Each pair diverts 1-2 kg of waste from our waterways and landfill, reduces 20kg of CO2 from the atmosphere, and conserves 10L of water when compared to your traditional leather boot.</p>
                    <button>Learn more</button>
                </div>
            </div>
    </div>
    )
}

export default Main