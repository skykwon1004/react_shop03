import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MainList from "./MainList";
import MainVisual from "./MainVisual";


const Main = ({ shopData, sw }) => {
    const TabData = [ 'liquid','pencil','lipstick']

    return (
        <main>
            <MainVisual />
            <div className="mainTab">
                <h2>Lorem, ipsum dolor.</h2>
                <ul className="menu">
                    {
                        TabData.map((it, idx) => {
                            return <Link to={`/tab/${it}`}>{it}</Link>
                        })
                    }
                </ul>
                {/* 라우터로 탭만들기 */}
                <div className="con">
                    <Outlet />
                </div>
            </div>
            <MainList cate={'pencil'} shopData={shopData} sw={sw} />
            <MainList cate={'lipstick'} shopData={shopData} sw={sw} />
        </main>
    )
}

export default Main;