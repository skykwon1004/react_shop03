import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";

const ToTopWrapper = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
font-size: 40px;
color: tomato;
opacity: 0;
visibility: hidden;
transition: .5s;
cursor: pointer;

&.on {
    opacity: 1;
    visibility: visible;
}

`
const ToTop = () => {

    const [scr, setScr] = useState(0);
    //scr = 스크롤값 
    useEffect(() => {
        //서버에서 데이타 가져올 때
        //window 이벤트 있을 때
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    const scrollHandler = () => {
        let sct = window.scrollY;
        setScr(sct);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const ToTopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }
    return (
        <ToTopWrapper onClick={ToTopHandler} className={scr > 400 ? 'on' : ''}>
            <BsFillArrowUpCircleFill />
        </ToTopWrapper>
    )
}
export default ToTop;