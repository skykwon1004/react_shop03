import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrolltop = () => {

    const { pathname } = useLocation();
    //console.log(pathname);

    const scrTop = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        scrTop();
    }, [pathname]);
    // pathname으로 인해 주소가 바뀔때마다 실행하라

    return null;
}

export default Scrolltop;

// 서브페이지갈때 콘텐트가 헤더쪽으로 올라가서 페이지 열때마다 스크롤 위치 지정해줌


//낮은가격/높은가격 -> sort() 함수 써서 