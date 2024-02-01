// SifreSifirla.jsx

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';

const SifreSifirla = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const { token } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSifreSifirla = async () => {
    try {
      // formData içindeki yeni şifreleri sunucuya gönder
      const response = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success('Şifre başarıyla sıfırlandı. Yeni şifrenizle giriş yapabilirsiniz.');
        navigate('/giris'); // Şifre sıfırlama tamamlandıktan sonra giriş sayfasına yönlendir
      } else {
        const data = await response.json();
        message.error(data.error || 'Şifre sıfırlama başarısız.');
      }
    } catch (error) {
      console.error('Şifre sıfırlama hatası:', error);
    }
  };

  return (
    <div>
      <div style={{ fontSize: '30px', justifyContent: 'center' }}>Şifre Sıfırla </div>
      <Form>
      <Form.Item label="Yeni Şifre" name="newPassword">
  <Input type="password" name="newPassword" onChange={handleInputChange} />
</Form.Item>
<Form.Item label="Yeni Şifre Tekrar" name="confirmPassword">
  <Input type="password" name="confirmPassword" onChange={handleInputChange} />
</Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSifreSifirla} style={{ background: 'blue' }}>
            Şifre Sıfırla
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SifreSifirla;
