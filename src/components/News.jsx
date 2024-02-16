import React from 'react'
import { Select, Typography , Row , Col, Avatar , Card } from 'antd'
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsAPI';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews, error, isLoading } = useGetCryptoNewsQuery(simplified ? 5 : 100);

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  console.log(cryptoNews);

  return (
<Row gutter={[24, 24]}>
  {cryptoNews.data.map((news, i) => (
    <Col xs={24} sm={12} lg={8} key={i}>
      <Card hoverable className="news-card">
        <a href={news.url} target="_blank" rel="noreferrer">
          <div>
            <img src={news.thumbnail} alt={news.title} style={{ width: '100%' }} />
            <Title level={4}>{news.title}</Title>
            <p>{news.description}</p>
          </div>
        </a>
      </Card>
    </Col>
  ))}
</Row>
  );
}

export default News;