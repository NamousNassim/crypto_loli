import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout , Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Exchange from './components/Exchange';
import CryptoDetails from './components/CryptoDetails';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';
import './App.css'
const App = () => {
  return (
    <div className='app'>
        <div className='navbar'> 
            <Navbar/>
        </div>

        <div className='main'> 
          <Layout> 
              <div className='routes'> 
              <Routes> 
    <Route path="/" element={<Homepage/>} /> 

    <Route path="/exchange" element={<Exchange/>} /> 

    <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} /> 

    <Route path="/crypto/:uuid" element={<CryptoDetails/>} /> 

    <Route path="/news" element={<News/>} /> 
      </Routes>

              </div>
          </Layout>
       

        <div className='footer' > 
        <Typography.Title level={5} style={{color : 'white' , textAlign : "center"}}> 
          CryptoLoli <br/>
          All rights reserved
        </Typography.Title>
        <Space>
        <Link to='/'>Home</Link>
       
        <Link to ='/news'>News</Link>
        </Space>
        </div>
        </div>
    </div>
  )
}

export default App;
