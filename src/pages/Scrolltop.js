import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrolltop = () => {

    const { pathname } = useLocation();
    //console.log(pathname);

    const scrTop = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {


        if (pathname.includes('/tab')) {
            return
        }
        scrTop();
        //if (pathname.includes('/tab')) 설명 -> index에 탭메뉴 부분을 누르면 스크롤이 0으로 가서 /tab으로 주소가 있으면 실행 안하게 하는것


    }, [pathname]);
    // pathname으로 인해 주소가 바뀔때마다 실행하라

    return null;
}

export default Scrolltop;

//페이지 열때마다 스크롤 위치 지정해줌


//낮은가격/높은가격 -> sort() 함수 써서 