import { Row, Col, Card, Statistic } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async (endpoint, setDataFunction) => {
      try {
        const res = await fetch(`http://localhost:5000/api/${endpoint}`);
        const textData = await res.text();
        // console.log(`Veri çekildi (${endpoint}):`, textData);
    
        // Yanıtın JSON formatında olup olmadığını kontrol et
        if (textData.startsWith("{") || textData.startsWith("[")) {
          const data = JSON.parse(textData);
          setDataFunction([...data]);
        } else {
          console.error(`Veri çekme hatası (${endpoint}): Yanıt JSON formatında değil.`);
        }
      } catch (error) {
        console.error(`Veri çekme hatası (${endpoint}):`, error);
      }
    };
    

    fetchData("products", setProducts);
    fetchData("users", setUsers);

  }, []);
  
  const totalProductCount = products.length;
  const totalUserCount = users.length;
  return (
    <div>
      <Row gutter={16}>
        
      <Col span={8}>
          <Card>
            <Statistic title="Toplam Müşteri Sayısı"  
            value={totalUserCount} 
            prefix={<img src="/images/user.png" alt="Image" style={{ marginRight: 8 ,width: '50px', height: '50px',}} />}
            />
            
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Toplam Ürün Satışı" 
             value={totalProductCount} 
             prefix={<img src="/images/product.png" alt="Image" style={{ marginRight: 8 ,width: '50px', height: '50px',}} />}/>
          </Card>
        </Col>
       
        {/* <Col span={8}>
          <Card>
            <Statistic title="Toplam Gelir" value={totalRevenue} prefix="₺" />
          </Card>
        </Col> */}
      </Row>
      {/* <Card style={{ marginTop: "20px" }}>
        <h2>Son Aydaki Ürün Satış Artışı</h2>
        <LineChart
  width={600}
  height={600}
  data={products} // Veri eklenmiş
  margin={{ top: 5, right: 30, bottom: 5 }}
>
  <XAxis dataKey="name" />  Veri yapısına göre güncellendi 
  {/* <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend />
  <Line
    type="monotone"
    dataKey="satilanUrunSayisi"
    stroke="#8884d8"
    activeDot={{ r: 8 }}
  />
</LineChart>
      </Card> 
      */}
      <Card style={{ marginTop: "20px" }}>
        <h2>Son Aydaki Müşteri Artışı</h2>
        <LineChart
  width={600}
  height={300}
  data={users} // Veri eklenmiş
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
>
  <XAxis dataKey="createdAt" /> 
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend />
  <Line
    type="monotone"
    dataKey="musteriSayisi"
    stroke="#82ca9d"
    activeDot={{ r: 8 }}
  />
</LineChart>
      </Card>
    </div>
  );
};

export default DashboardPage;