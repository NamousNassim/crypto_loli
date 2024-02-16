import React from 'react'
import millify from 'millify'; 
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News'; 
const { Title } = Typography;

const Homepage = () => {

  const {data , isFetching} = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats; 
    if (isFetching)
    {
      return 'loading..';
    }
  return (
    <> 
     <Title level={2} className='heading'>
     Crypto Stats 
     </Title>

     <Row> 
        <Col span={12} >
        <Statistic title="Cryptocurrencies Total" value={millify(globalStats.total)} />
        </Col>
        <Statistic title="Exchanges Total" value={millify(globalStats.totalExchanges)} />
        <Col span={12} >
        <Statistic title="Market Cap Total" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12} >
        <Statistic title="24H volume Total" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12} >
        <Statistic title="Market Total" value={millify(globalStats.totalMarkets)} />
        </Col>
      
     </Row>


     <div className='home-heading-container'>

     <Title level={2} className='home-title'>
      HOT CRYPTO CURRENCIES
     </Title> 
     
     <Title level={3} className='show-more'>
      <Link to='/cryptocurrencies'>Show More</Link>
     </Title>
     </div>
     <Cryptocurrencies simplified/>
     <div className='home-heading-container'>

<Title level={2} className='home-title'>
      HOT CRYPTO NEWS 
</Title> 

<Title level={3} className='show-more'>
 <Link to='/news'>Show More</Link>
</Title>
</div>
<News simplified />
    </>
  )
}

export default Homepage
