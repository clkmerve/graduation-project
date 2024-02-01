import { Button, Form, Input,Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Carousel , message } from 'antd';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Giris = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();
  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]:value});
  }
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const handleLogin = async (values) => {
    try {
      if (!isRecaptchaVerified) {
        message.error("Lütfen ReCAPTCHA doğrulamasını yapınız.");
        return;
      }
      const response = await fetch (`http://localhost:5000/api/auth/login`,
       {
        method:"POST",
        headers:{
        "Content-Type":"application/json",
        },
        body: JSON.stringify(formData),
              
        })

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("user",JSON.stringify(data));
          message.success("Giriş Başarılı");
          if(data.role === "admin"){
            window.location.href="/admin";
          }else{
            navigate("/")
          }
          
          
        }
        else{
          message.error("Giriş Başarısız")
        }

        
    } catch (error) {
      console.log("Giriş hatası:",error);
    }
  };

  const onChange = ()=> {
    setIsRecaptchaVerified(true);
  }
  
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-[630px] bg-[#0000] justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2"></h1>
          <Form layout="vertical"onFinish={handleLogin}>
            
            <Form.Item
              label="E-mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "E-mail Alanı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input 
              onChange={handleInputChange}
               name="email"/>
            </Form.Item>
            <Form.Item
            label="Şifre"
            name="password"
            rules={[
              {
                required: true,
                message: "Şifre Alanı Boş Bırakılamaz!",
              }
              
            ]}>
            <Input.Password onChange={handleInputChange}
               name="password"/>
            </Form.Item>
           
            <ReCAPTCHA
            sitekey="6LcKOUMpAAAAAJ5A-Rj0CSQDhImD2SljAR7G9_EN"
            onChange={onChange}
            
            />
            <Form.Item name={"remember"} valuePropName="checked">
              <div className="flex justify-between items-center">
                <Checkbox>Beni Hatırla</Checkbox>
                <Link to={"/sifremiunuttum"}>Şifremi Unuttum</Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#018abe]"
                size="large"                                
              >
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>

          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Henüz bir hesabınız yok mu?&nbsp;
            <Link to="/kayit" className="text-blue-600">
              Şimdi kaydol
            </Link>
          </div>
        </div>

        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden min-w-[800px] bg-[#ffffff] h-[631px]">

          <div className="w-full h-full flex items-center">
            <div className="w-full ">
            <Carousel className="h-full" autoplay autoplaySpeed={3000}>
      <div className="!flex flex-col items-center justify-center h-full">
        <h3 className="text-4xl text-white text-center font-bold">Hoş Geldiniz!</h3> 
        <img 
        className=" w-[800px] h-[690px]" 
        src="/images/login-image.jpg" 
        alt="" />  
          
      </div>
     <div className="!flex flex-col items-center justify-center h-full">
        <h3 className="text-4xl text-white text-center font-bold">Hoş Geldiniz!</h3> 
        <img 
        className=" w-[800px] h-[690px]" 
        src="/images/foto6.jpg" 
        alt="" />  
          
      </div>
      <div className="!flex flex-col items-center justify-center h-full">
        <h3 className="text-4xl text-white text-center font-bold">Hoş Geldiniz!</h3> 
        <img 
        className=" w-[800px] h-[690px]" 
        src="/images/login-image2.jpg" 
        alt="" />  
          
      </div>
      <div className="!flex flex-col items-center justify-center h-full">
        <h3 className="text-4xl text-white text-center font-bold">Hoş Geldiniz!</h3> 
        <img 
        className=" w-[800px] h-[690px]" 
        src="/images/login-image2.jpg" 
        alt="" />  
          
      </div>
    </Carousel>
 </div>
  </div>
  
  </div>

      </div>
    </div>
  );
};

export default Giris;