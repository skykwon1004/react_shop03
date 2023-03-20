import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
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

  console.log(shopData)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<List />} />
        <Route path='/all' element={<ListAll shopData={shopData}/>} />
      </Route>
    </Routes>
  )
}

export default App