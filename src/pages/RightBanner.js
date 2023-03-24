import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState } from "react";

const RightBannerWrap = styled.div`
position: fixed;
inset: 50% -400px auto auto;
transform: translate(0, -50%);
width: 400px;
height: 400px;
background: tomato;
transition: inset 0.5s;

span {
    position: absolute;
    inset: 0 auto auto 0;
    transform: translate(-100%, 0) rotate(270deg);
}

&.on {
    inset: 50% 0 auto auto;
}
`

const RightBanner = () => {
    const [on, setOn] = useState(false);
    return (
        <RightBannerWrap className={on ? 'on' : ''}>
            <span onClick={() => setOn(!on)}>
                <BsFillArrowUpCircleFill />
            </span>
        </RightBannerWrap>
    )
}

export default RightBanner;