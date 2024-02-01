import { Button, Form, Input, Spin, message} from "antd";
import { useState } from "react";



const CreateCategoryPage = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm()

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Kategori başarıyla oluşturuldu.");
        form.resetFields();
      } else {
        message.error("Kategori oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Kategori oluşturma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

 

      return (
        <Spin spinning={loading}>
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Kategori İsmi"
            name="name"
            rules={[
              {
                required: true,
                message: "Lütfen kategori adını girin!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Kategori Linki"
            name="link"
            rules={[
              {
                required: true,
                message: "Lütfen kategori linki girin!",
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Kategori Görseli (Link)"
            name="img"
            rules={[
              {
                required: true,
                message: "Lütfen kategori görsel linkini girin!",
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Button type="primary" htmlType="submit" style={{background:"blue"}}>
          Oluştur
        </Button>
      </Form>
    </Spin>
  )
}

export default CreateCategoryPage
