import { Button } from '@mui/material'
import styles from './index.module.css'
import { useContext, useState } from 'react'
import BasketContext from '../../context/context'
import { useNavigate } from 'react-router-dom'



function Card({ id, image, title, description, price, category }) {

    const [addFavorite, setAddFavorite] = useState(true)
    const { basket, setBasket, favorite, setFavorite } = useContext(BasketContext)

    const navigate = useNavigate()

    const handleAddToBasket = () => {
        setBasket(prev => {
            return [...prev, { id, image, title, description, price, category }]
        })
    }


    const handleAddToFavorite = (state) => {
        setFavorite(prev => {
            return [...prev, { id, image, title, description, price, category }]
        })

        setAddFavorite(state)
    }

    const handleDetail = (productId) => {
        navigate(`/product/${productId}`)
    }

    return (
        <>
            <div className={styles.main_card}>
                <img src={image} onClick={() => handleDetail(id)} />

                <div className={styles.sub_main_card}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p>{category}</p>
                </div>

                <div className={styles.sub_main_add}>
                    <div className={styles.btn}>
                        {
                            basket.find(item => item.id == id) ?

                                <Button variant='contained' className={styles.has}>Added</Button>
                                :
                                <Button variant='outlined' onClick={handleAddToBasket} >Add To Basket</Button>

                        }
                    </div>

                    <div className={styles.favorite}>
                        {
                            // favorite.find(item => item.id == id) ?
                            //     <img src="./icons8-heart-60.png" alt="favorite" />
                            //     :
                            //     <img src="./icons8-heart-50.png" alt="favorite" />


                            addFavorite ?
                                <img src="./icons8-heart-50.png" alt="red" onClick={() => handleAddToFavorite(false)} />
                                :
                                <img src="./icons8-heart-60.png" alt="outline" onClick={() => handleAddToFavorite(true)} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;