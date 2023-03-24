import { useState } from "react";
import MainList from "./MainList";
import MainSlideList from "./MainSlideList";
import MainVisual from "./MainVisual";


const Main = ({ shopData, sw }) => {
    const [num, setNum] = useState(0);
    const TabData = [
        { title: 'liquid', con: < MainSlideList cate={'liquid'} shopData={shopData} sw={sw} /> },
        { title: 'pencil', con: <MainSlideList cate={'pencil'} shopData={shopData} sw={sw} /> },
        { title: 'lipstick', con: <MainSlideList cate={'lipstick'} shopData={shopData} sw={sw} /> }
    ]

    return (
        <main>
            <MainVisual />
            <div className="mainTab">
                <ul className="menu">
                    {
                        TabData.map((it, idx) => {
                            return (
                                <li key={idx} onClick={() => setNum(idx)}>{it.title}</li>
                            )
                        })
                    }
                </ul>
                <div className="con">
                    {
                        TabData[num].con
                    }
                </div>
            </div>
            <MainList cate={'pencil'} shopData={shopData} sw={sw} />
            <MainList cate={'lipstick'} shopData={shopData} sw={sw} />
        </main>
    )
}

export default Main;