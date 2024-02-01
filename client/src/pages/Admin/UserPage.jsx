import { Button, Popconfirm, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";

const UserPage = () => {
    const [dataSource,setDataSource]=useState([])
    const [loading, setLoading] = useState(false);
      const columns = [
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
             title: "Actions",
             dataIndex: "actions",
             key: "actions",
             render: (_, record) => (  //normal parantez return eder
              <Popconfirm
                title="Kullanıcıyı Sil"
                description="Kullanıcıyı silmek istediğinizden emin misiniz?"
                okText="Evet" 
                cancelText="Hayır"
                onConfirm={() => deleteUser(record.email)}
                okButtonProps={{ style: { backgroundColor: 'blue'} }}
              >
                 <Button type="primary" danger>
                   Sil
                 </Button>
               </Popconfirm>
             ),
           },
      ];

      const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
          const response = await fetch (`http://localhost:5000/api/users`)
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
        fetchUsers();
      },[fetchUsers])

       const deleteUser = async (userEmail) => {
        try {
          const response = await fetch(`http://localhost:5000/api/users/${userEmail}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            message.success("Kullanıcı başarıyla silindi.");
            fetchUsers();
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

export default UserPage
