import './App.css';
import React from 'react';
import { Routes, BrowserRouter, Route, } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Page2 from './components/Pixel7pro';
import Pixel6a from './components/Pixel6a';
import Pixel7 from './components/Pixel7';
import Pixel7a from './components/Pixel7a';
import Nestaware from './components/Nestaware';
import Nestcam from './components/Nestcam';
import Pixel7acase from './components/Pixel7acase';
import Nestcharge from './components/Nestcharge';
import Register from './components/Register';
import Login from './components/Login';
import Nestaudio from './components/Nestaudio';
import Nestaudiocompare from './components/Nestaudiocompare';
import NestSpecs from './components/NestSpecs';
import Nestmini from './components/Nestmini';
import Earbuds from './components/Earbuds'
import Emptycart from './components/Emptycart';
import Subscriptions from './components/Subscriptions';
import Tablets from './components/Tablets';
import TabSpecs from './components/TabSpecs';
import Upcoming from './components/Upcoming';
import Smarthome from './components/Smarthome';
import Watch from './components/Watch';

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Header/>
<Routes>
  <Route path='/Pixel7pro' element={<Page2/>} />
  <Route path='/' element={<Homepage/>} />
  <Route path='/Pixel6a' element={<Pixel6a/>} />
  <Route path='/Pixel7' element={<Pixel7/>} />
  <Route path='/Pixel7a' element={<Pixel7a/>} />
  <Route path='/Nestaware' element={<Nestaware/>} />
  <Route path='/Nestcam' element={<Nestcam/>} />
  <Route path='/Pixel7acase' element={<Pixel7acase/>} />
  <Route path='/Nestcharge' element={<Nestcharge />} />
  <Route path='/Register' element={<Register />} />
  <Route path='/Login' element={<Login />} />
  <Route path='/Nestaudio' element={<Nestaudio />} />
  <Route path='/Nestaudiocompare' element={<Nestaudiocompare />} /> 
  <Route path='/NestSpecs' element={<NestSpecs />} />
  <Route path='/Nestmini' element={<Nestmini />} />
  <Route path='/Earbuds' element={<Earbuds />} />
  <Route path='/Emptycart' element={<Emptycart />} />
  <Route path='/Subscriptions' element={<Subscriptions />} />
  <Route path='/Tablets' element={<Tablets />} />
  <Route path='/TabSpecs' element={<TabSpecs />} /> 
  <Route path='/Upcoming' element={<Upcoming />} />
  <Route path='/Smarthome' element={<Smarthome />} /> 
  <Route path='/Watch' element={<Watch />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
