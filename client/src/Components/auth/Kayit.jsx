import { Button, Form, Input,Checkbox, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from 'antd';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Kayit = () => {
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });
  const navigate = useNavigate()
  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]:value});
  }
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const handleRegister = async (values) => {
    try {
      if (!isRecaptchaVerified) {
        message.error("Lütfen ReCAPTCHA doğrulamasını yapınız.");
        return;
      }
      const response = await fetch (`http://localhost:5000/api/auth/register`,
       {
        method:"POST",
        headers:{
        "Content-Type":"application/json",
        },
        body: JSON.stringify(formData),
              
        })

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("user", JSON.stringify(data));
    
          if (data.message === "E-posta adresinize doğrulama linki gönderildi. Doğrulama yaptıktan sonra giriş yapabilirsiniz.") {
            // Doğrulama linki gönderildiğinde kullanıcıyı belirttiğiniz sayfaya (örneğin "/giris") yönlendir
            navigate("/giris");
          } else {
            // Doğrulama linki gönderilmediyse başarılı kayıt mesajını göster
            message.success("Aktivasyon maili hesabınıza gönderildi.Lütfen mailinizi kontrol edin.");
          }
        } else {
          message.error("Kayıt Başarısız");
        }
      } catch (error) {
        console.log("Giriş hatası:", error);
      }
    };

  

const onChange = ()=> {
  setIsRecaptchaVerified(true);
}

  return (
    //bg-[#cccfcf]
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full  bg-[#ffffff] justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2"></h1>
          <Form layout="vertical" onFinish={handleRegister}>
          <Form.Item
              label="Kullanıcı Adı"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Alanı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input 
              onChange={handleInputChange}
               name="username"
               />
            </Form.Item>
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
               name="email"
               />
            </Form.Item>
            <Form.Item
  label="Şifre"
  name="password"
  rules={[
    {
      required: true,
      message: "Şifre Alanı Boş Bırakılamaz!",
    },
    {
      min: 6,
      message: "Şifre en az 6 karakter olmalıdır.",
    },
    {
      pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&#.]+$/,
      message: "Şifre en az bir büyük harf, bir rakam ve bir özel karakter içermelidir.",
    },
  ]}
>
  <Input.Password 
  onChange={handleInputChange}
  name="password" 
  />
</Form.Item>
          {/* <Form.Item>
              <Checkbox>
                Tarafıma ticari elektronik ileti gönderilmesini kabul ediyorum.
              </Checkbox>
            </Form.Item> */}
          
            <ReCAPTCHA
            sitekey="6LcKOUMpAAAAAJ5A-Rj0CSQDhImD2SljAR7G9_EN"
            onChange={onChange}
            />
            <Form.Item >
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#018abe]"
                size="large"                                
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>



          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Bir hesabınız var mı?&nbsp;
            <Link to="/giris" className="text-blue-600">
              Şimdi giriş yap
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

export default Kayit;