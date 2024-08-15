import { useContext } from "react";
import BasketContext from "../../context/context";
import Card from "../card";




function MyFavorite() {


    const { favorite } = useContext(BasketContext)

    return (
        <>
            <div>
                {
                    favorite.map(item => {
                        return <Card
                            key={item.id} {...item}
                        />
                    })
                }
            </div>
        </>
    )
}

export default MyFavorite;