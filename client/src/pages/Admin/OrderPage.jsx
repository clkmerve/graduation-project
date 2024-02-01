import { Spin, Table, message } from "antd";
import { useEffect, useState } from "react";

const OrderPage = () => {
    const [dataSource,setDataSource]=useState([])
    const [loading, setLoading] = useState(false);
      const columns = [
        {
          title: "Müşteri Email",
          dataIndex: "receipt_email",
          
        },
        {
          title: "Sipariş Fiyatı",
          dataIndex: "amount",
          render: (record) => <b>{(record / 100).toFixed(2)}₺</b>,
        },     
      ];
      useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
    
          try {
            const response = await fetch(
              `https://api.stripe.com/v1/payment_intents`,
              {
                method: "GET",
                headers: {
                Authorization: `Bearer sk_test_51OYU9xKpiKwShdhdulrwNNVnge1qh51BcLALaI7ZZ4X9xT5plzosZcYh5tgjybWOQkHUUOutX2po9bd4FDREc6EU00Efo6KD04`,
                  },
                }
              );
              if (response.ok) {
                const { data } = await response.json();
                setDataSource(data);
              } else {
                message.error("Veri getirme başarısız.");
              }
            } catch (error) {
              console.log("Veri hatası:", error);
            } finally {
              setLoading(false);
            }
          };
          fetchData();
      },[`sk_test_51OYU9xKpiKwShdhdulrwNNVnge1qh51BcLALaI7ZZ4X9xT5plzosZcYh5tgjybWOQkHUUOutX2po9bd4FDREc6EU00Efo6KD04`])
      return (
        <Spin spinning={loading}>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey={(record) => record.id}
          loading={loading}
        />
      </Spin>
  )
}

export default OrderPage
