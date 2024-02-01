// SifremiUnuttum.jsx
import { Button, Form, Input, message } from "antd";
import { useState } from "react";

const SifremiUnuttum = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPassword = async () => {
    try {
      console.log("Forgot password request:", formData); // FormData'ya bakın
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Forgot password response:", response); // Sunucu cevabına bakın
  
      if (response.ok) {
        message.success("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
      } else {
        const data = await response.json();
        message.error(data.error || "Şifre sıfırlama bağlantısı gönderilemedi.");
      }
    } catch (error) {
      console.error("Şifremi unuttum hatası:", error);
    }
  };
  
  

  return (
    <div>
      <div style={{fontSize:"30px" , justifyContent:"center"}}>Şifremi Unuttum </div>
      <Form>
        <Form.Item label="E-mail" name="email">
          <Input name="email" onChange={handleInputChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleForgotPassword} style={{background:"blue"}}>
            Şifremi Sıfırla
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SifremiUnuttum;
