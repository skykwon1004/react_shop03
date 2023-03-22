import { Link, useLocation } from "react-router-dom";

const Nav = ({ categoryItm }) => {
    //const { pathname } = useLocation();
    //주소에 있는 뒤에 텍스트를 뿌려주는 방법 pathname
    //React 페이지 이동 시 스크롤 맨 위로 오게 하는 방법 -> 검색하면 사용방법 알수있다
    return (
        <nav className="Nav gnb">
            <ul>
                {/* <li>path : { pathname }</li> */}
                <li><Link to="/">home</Link></li>
                <li><Link to="/all">all list</Link></li>
                {
                    categoryItm.map((it, idx) => {
                        return (
                            <li key={idx}><Link to={`/${it}`}>{it}</Link></li>
                        )
                    })
                }
            </ul>
        </nav >
    )
}

export default Nav;