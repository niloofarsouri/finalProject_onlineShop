import { useEffect, useContext, useState } from 'react';
import styles from './index.module.css'
import BasketContext from '../../../context/context';
import { useParams } from 'react-router-dom';



function ProductDetail() {

    const [productDetail, setProductDetail] = useState({})

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json =>
                setProductDetail(json))
    }, [])




    return (
        <>
            <div className={styles.product_card}>

                <img src={productDetail.image} alt="image" />

                <div className={styles.sub_product_card}>
                    <h2>{productDetail.title}</h2>
                    <p>{productDetail.description}</p>
                    <p>price: {productDetail.price}$</p>
                    <p>{productDetail.category}</p>
                    {/* <button>Remove</button> */}
                </div>

            </div>
        </>
    )
}


export default ProductDetail;