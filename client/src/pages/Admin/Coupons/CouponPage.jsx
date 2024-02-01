import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CouponPage = () => {
    const [dataSource,setDataSource]=useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

      const columns = [
        {
          title: 'Kupon Kodu',
          dataIndex: 'code',
          key: 'code',
          render:(code) => <b>{code}</b>
        },
        {
          title: 'İndirim Oranı',
          dataIndex: 'discountPercent',
          key: 'discountPercent',
          render:(text) => <b>%{text}</b>
        },
        
        {
             title: "Actions",
             dataIndex: "actions",
             key: "actions",
             render: (_, record) => (  //normal parantez return eder
             <Space>
                 <Button type="primary" 
                 style={{background:"blue"}}
                 onClick={()=> navigate(`/admin/coupons/update/${record._id}`)}
                 >
                   Güncelle
                 </Button>
               
              <Popconfirm 
                title="Kategoriyi Sil"
                description="Kategoriyi silmek istediğinizden emin misiniz?"
                okText="Evet"
                cancelText="Hayır"
                onConfirm={() => deleteCoupon(record._id)}
                okButtonProps={{ style: { backgroundColor: 'blue'} }}

              >
                 <Button type="primary" danger>
                   Sil
                 </Button>
               </Popconfirm>
               </Space>
             ),
           },
      ];

      const fetchCategories = useCallback(async () => {
        setLoading(true);
        try {
          const response = await fetch (`http://localhost:5000/api/coupons`)
            if (response.ok) {
                const data = await response.json();  
                setDataSource(data);      
              }else{
              message.error("Veri Getirme Başarısız")
            }            
        } catch (error) {
          console.log("Veri hatası:",error);
        }
        finally {
      setLoading(false);
    }
      },[`http://localhost:5000`]);

        useEffect(()=>{
        fetchCategories();
      },[fetchCategories])

       const deleteCoupon = async (couponId) => {
        try {
          const response = await fetch(`http://localhost:5000/api/coupons/${couponId}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            message.success("Kupon başarıyla silindi.");
            fetchCategories();
          } else {
            message.error("Silme işlemi başarısız.");
          }
        } catch (error) {
          console.log("Silme hatası:", error);
        }
       };
    
      
      
      
    

  return (
    <Table 
    dataSource={dataSource} 
    columns={columns} 
    rowKey={(record)=>record._id}
    loading={loading}/>
  )
}

export default CouponPage
