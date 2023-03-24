import { useRef } from "react";
import { Link } from "react-router-dom";
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

const MainSlideList = ({ shopData, sw, cate }) => {

    const list = shopData.filter(it => it.category === cate);

    const option = {
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        dots: true
    }

    const slide = useRef(null);

    return (
        <div className="SlideList inner">
            <Slide className="list" {...option} ref={slide}>
                {
                    list.map(it => {
                        return (
                            <div key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <div className="itmTitle">
                                        {it.name}
                                    </div>
                                    <p className="itmDesc">
                                        {it.description?.substring(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                    </p>
                                    <div className="itmPrice">
                                        <span>{parseInt(it.price * sw)}</span> 원
                                        {/* 자바스크립트 정수만 나오게 하는 parseInt */}
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </Slide>
            <button onClick={() => slide.current.slickPrev()} className="arrow prev">뒤</button>
            <button onClick={() => slide.current.slickNext()} className="arrow next">앞</button>
        </div>
    )
}

export default MainSlideList;