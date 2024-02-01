import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
    const [dataSource,setDataSource]=useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
      const columns = [
        {
          title: 'Kategori Görseli',
          dataIndex: 'img',
          key: 'img',
          render:(imgSrc) => (
            <img
            src={imgSrc}
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
          title: 'Oluşturma Tarihi',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
             title: "Actions",
             dataIndex: "actions",
             key: "actions",
             render: (_, record) => (  //normal parantez return eder
             <Space>
                 <Button type="primary" 
                 style={{background:"blue"}}
                 onClick={()=> navigate(`/admin/categories/update/${record._id}`)}
                 >
                   Düzenle
                 </Button>
               
              <Popconfirm 
                title="Kategoriyi Sil"
                description="Kategoriyi silmek istediğinizden emin misiniz?"
                okText="Evet"
                cancelText="Hayır"
                onConfirm={() => deleteCategory(record._id)}
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
//7.05 kLDIM
      const fetchCategories = useCallback(async () => {
        setLoading(true);
        try {
          const response = await fetch (`http://localhost:5000/api/categories`)
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

       const deleteCategory = async (categoryId) => {
        try {
          const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            message.success("Kategori başarıyla silindi.");
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

export default CategoryPage
