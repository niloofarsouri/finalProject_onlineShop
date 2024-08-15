import { useContext } from 'react';
import styles from './index.module.css'
import BasketContext from '../../context/context';
import Card from '../card';




function MyBasket() {

    const { basket } = useContext(BasketContext)

    return (
        <>
            <div className={styles.main_basket}>
                {
                    basket.map(item => {
                        return <Card
                            key={item.id} {...item}
                        />
                    })
                }
            </div>
        </>
    )
}


export default MyBasket;