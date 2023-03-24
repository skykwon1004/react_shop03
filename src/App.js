import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from './pages/Main';
import MainSlideList from './pages/MainSlideList';
import Cart from './shop/Cart';
import CateList from './shop/CateList';
import Itm from './shop/Itm';
import List from './shop/List';
import ListAll from './shop/ListAll';
import SearchResult from './shop/SearchResult';



const App = () => {

  const [shopData, setShopData] = useState([]);
  const [cart, setCart] = useState([]);

  const url = 'https://desipossa.github.io/shop_cra/assets/data.json'

  const getData = async () => {
    const r = await axios.get(url);
    // console.log(r.data);
    setShopData(r.data);// 

  }

  useEffect(() => {
    getData();
  }, []);



  // 환율
  const [sw, setW] = useState([]);
  const getKr = async () => {
    const w = await axios.get('https://api.manana.kr/exchange/rate.json')
    setW(w.data[1].rate);
  }

  useEffect(() => {
    getKr()
  }, []);



  const originalItm = shopData.map(it => it.category);
  // - 카테고리 데이터 originalItm에 담기

  const filterItm = originalItm.filter(Boolean);
  // - 카테고리에 null이 있음 이것을 빼고 배열을 가져오고 싶을때 Boolean 참값만 넣어라

  const categoryItm = [...new Set(filterItm)];
  // - 배열에 있는 카테고리 중복된 것 제거하기 https://jsikim1.tistory.com/227 참고

  console.log(shopData)

  return (
    <Routes>
      <Route path='/' element={<Layout categoryItm={categoryItm} cart={cart} />}>
        <Route path='/' element={<Main shopData={shopData} sw={sw} />}>
          <Route index element={<MainSlideList cate={'liquid'} shopData={shopData} sw={sw} />}></Route>
          <Route path="tab/liquid" element={<MainSlideList cate={'liquid'} shopData={shopData} sw={sw} />}></Route>
          <Route path="tab/pencil" element={<MainSlideList cate={'pencil'} shopData={shopData} sw={sw} />}></Route>
          <Route path="tab/lipstick" element={<MainSlideList cate={'lipstick'} shopData={shopData} sw={sw} />}></Route>
        </Route>
        <Route path='all' element={<ListAll shopData={shopData} sw={sw} />} />
        <Route path=':cate' element={<CateList shopData={shopData} sw={sw} />} />
        <Route path='detail/:itm' element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
        <Route path='search' element={<SearchResult shopData={shopData} />} />
        <Route path='cart' element={<Cart shopData={shopData} cart={cart} setCart={setCart} />} />
      </Route>
    </Routes>
  )
}

export default App