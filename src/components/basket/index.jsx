import { useContext } from 'react';
import styles from './index.module.css'
import BasketContext from '../../context/context';


function Basket() {

    const { basket } = useContext(BasketContext)

    return (
        <>
            <div className={styles.sub_main_basket}>
                <img src="./icons8-add-shopping-cart-50.png" alt="basket" />
                <div className={styles.badge}><span>{basket.length}</span></div>
            </div>
        </>
    )
}


export default Basket;