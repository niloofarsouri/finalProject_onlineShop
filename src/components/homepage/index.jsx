import { useContext, useEffect, useState } from 'react';
import styles from './index.module.css'
import BasketContext from '../../context/context';
import Card from '../card';
import { json } from 'react-router-dom';





function Homepage() {

    const [products, setProducts] = useState([])
    const { setAllProduct } = useContext(BasketContext)



    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json =>
                setProducts(json),
                setAllProduct(json)

            )
    }, [])

    return (
        <>


            <div className={styles.main_container}>
                {
                    products.map(product => {
                        return <Card
                            key={product.id} {...product}
                        />
                    })
                }
            </div>
        </>
    )
}


export default Homepage;