import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopData, cart, setCart }) => {
    const { itm } = useParams();
    const Itm = shopData.find(it => String(it.id) === itm);
    //String ( ) 문자로 만들어버림 === 일치

    const GO = useNavigate();

    const addCart = () => {
        //cart배열에다가 여기 아이템을 담고,
        setCart([
            ...cart,
            {
                id : Itm.id,
                name: Itm.name,
                price: Itm.price,
                desc: Itm.description,
                img: Itm.api_featured_image,
                num: 1
            }
        ])
        GO('/cart');//addCart를 클릭하면 Cart페이지로 이동해라
    }

    return (
        <div className="itm--">
            {
                Itm && //객체가 있는지 없는지 검증
                <>
                    <figure>
                        <img src={Itm.api_featured_image} alt="" />
                    </figure>
                    <strong>
                        {Itm.name}
                    </strong>
                    <p>
                        {Itm.description?.substring(0, 100)} {Itm.description?.length > 100 ? '...' : ''}
                    </p>

                    <button onClick={addCart}>Add Cart</button>
                </>
            }
        </div>

    )
}

export default Itm;