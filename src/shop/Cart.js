import axios from "axios";
import { useEffect, useState } from "react";

const Cart = ({ shopData, cart, setCart }) => {
    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data);
    }

    useEffect(() => {
        getKr()
    }, []);
//환율 바꾸는 state

    // const allPrice = Number(cart[0].price) + Number(cart[1].price);
    const allPrice = cart.reduce((current, next) => current + Number(next.price * next.num), 0);

    // cart 배열을 통째로 수정할 꺼임...
    const crarModify = (id) => {
        console.log("변함 : ", id, cart);
        //id 같은 요소를 변경하고 그 요소가 포함된 새배열로 cart를 빠꿔줌;
        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num + 1 } : it);
        //[it, it, new, it]
        setCart(newCart);
    }

    return (
        <>
            <h1>장바구니</h1>
            {
                cart.map(it => <li key={it.id}>
                    {it.id}
                    {it.name}
                    {it.desc}
                    {it.price}
                    {it.num}
                    <button onClick={() => crarModify(it.id)}>+</button>
                    <img src={it.img} alt="" />
                </li>)
            }

            <h2>
                합계 :
                {
                    allPrice &&
                    parseInt(allPrice * sw[1]?.rate).toLocaleString()
                }
                원
            </h2>
        </>
    )
}

export default Cart;