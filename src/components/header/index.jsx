import { Link } from 'react-router-dom';
import styles from './index.module.css'
import { useContext } from 'react';
import BasketContext from '../../context/context';
import Basket from '../basket';
import Favorite from '../favorite';



function Header() {


    const { basket } = useContext(BasketContext)

    return (
        <>
            <div className={styles.main}>
                <Link to={'/'}>
                    <div className={styles.sub_main_logo}>
                        <img src="./sample-logo.png" alt="logo" />
                    </div>
                </Link>

                <Link to={'/favorite'}>
                    <Favorite />
                </Link>

                <Link to={'/basket'}>
                    <Basket />
                </Link>
            </div>
        </>
    )
}


export default Header;