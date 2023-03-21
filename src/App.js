import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CateList from './shop/CateList';
import Itm from './shop/Itm';
import List from './shop/List';
import ListAll from './shop/ListAll';



const App = () => {

  const [shopData, setShopData] = useState([]);
  const url = 'https://desipossa.github.io/shop_cra/assets/data.json'

  const getData = async () => {
    const r = await axios.get(url);
    // console.log(r.data);
    setShopData(r.data);// 

  }

  useEffect(() => {
    getData();
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
      <Route path='/' element={<Layout categoryItm={categoryItm} />}>
        <Route index element={<List />} />
        <Route path='all' element={<ListAll shopData={shopData} />} />
        <Route path=':cate' element={<CateList shopData={shopData} />} />
        <Route path='detail/:itm' element={<Itm shopData={shopData} />} />
      </Route>
    </Routes>
  )
}

export default App