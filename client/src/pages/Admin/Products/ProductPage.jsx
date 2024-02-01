import { Button, Popconfirm, Space, Table, message } from "antd";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
    const [dataSource,setDataSource]=useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
      const columns = [
        {
          title: 'Ürün Görseli',
          dataIndex: 'img',
          key: 'img',
          render:(imgSrc) => (
            <img
            src={imgSrc[0]}
            alt="Image"
            style={{
                width:"100px",
                height:"100px",
                
            }}
            />
          )
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render:(text) => <b>{text}</b>
        },
        {
          title: "Kategori",
          dataIndex: "categoryName",
          key: "categoryName",
          render: (text) => <span>{text}</span>,
        },
        {
          title: 'Oluşturma Tarihi',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: "Fiyat",
          dataIndex: "price",
          key: "price",
          render: (text) => <span>{text.current.toFixed(2)}</span>,
        },
        {
          title: "İndirim",
          dataIndex: "price",
          key: "price",
          render: (text) => <span>%{text.discount}</span>,
        },
        {
             title: "Actions",
             dataIndex: "actions",
             key: "actions",
             render: (_, record) => (  //normal parantez return eder
             <Space>
                 <Button type="primary" 
                 style={{background:"blue"}}
                 onClick={()=> navigate(`/admin/products/update/${record._id}`)}
                 >
                   Düzenle
                 </Button>
               
              <Popconfirm 
                title="Kategoriyi Sil"
                description="Kategoriyi silmek istediğinizden emin misiniz?"
                okText="Evet"
                cancelText="Hayır"
                onConfirm={() => deleteProduct(record._id)}
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

    

        useEffect(()=>{
          const fetchData = async () => {
            setLoading(true);
            try {
              const [categoriesResponse, productsResponse] = await Promise.all([
                fetch(`http://localhost:5000/api/categories`),
                fetch(`http://localhost:5000/api/products`),
              ]);
      
              if (!categoriesResponse.ok || !productsResponse.ok) {
                message.error("Veri getirme başarısız.");
              }
      
              const [categoriesData, productsData] = await Promise.all([
                categoriesResponse.json(),
                productsResponse.json(),
              ]);
      
              const productsWithCategories = productsData.map((product) => {
                const categoryId = product.category;
                const category = categoriesData.find(
                  (item) => item._id === categoryId
                );
      
                return {
                  ...product,
                  categoryName: category ? category.name : "",
                };
              });
      
              setDataSource(productsWithCategories);
            } catch (error) {
              console.log("Veri hatası:", error);
            } finally {
              setLoading(false);
            }
          };
        fetchData();
      },[`http://localhost:5000`])

       const deleteProduct = async (productId) => {
        try {
          const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
        message.success("Kategori başarıyla silindi.");
        setDataSource((prevProducts) => {
          return prevProducts.filter((product) => product._id !== productId);
        });
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

export default ProductPage
