import React, { useState } from 'react';
import './Questions.css'
import Accordion from "./Accordion";
import { message } from 'antd';
import emailjs from 'emailjs-com';

const Questions=()=> {

   const [formData, setFormData] = useState({
      
      email: '',
      message: '',
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Email.js servis kimliği, şablon kimliği ve kullanıcı kimliği
        const serviceId = 'service_fay5bt6';
        const templateId = 'template_y4nmjjn';
        const userId = 'S5Q6R3zjdtFdLmMGR';
  
        // Email.js'e gönderilecek veriler
        const templateParams = {
          from_email: formData.email,
          message: formData.message,
        };
  
        // Email.js üzerinden e-posta gönderimi
        const response = await emailjs.send(serviceId, templateId, templateParams, userId);
  
        if (response.status === 200) {
          message.success('E-posta başarıyla gönderildi.');
          // İsteğe bağlı olarak kullanıcıya başarı mesajını gösterme veya yönlendirme işlemleri ekleyebilirsiniz.
           // Gönderim başarılı olduktan sonra input alanları temizleniyor
        setFormData({
          
          email: '',
          message: '',
        });
        } else {
          message.error('E-posta gönderimi başarısız.');
        }
      } catch (error) {
        console.error('Hata:', error);
      }
    };
   const [active, setActive]= useState(
      
      "title1"
     
   );

   return <div className='questions section container'>
        <div className="secHeading">
         <h2>Sık Sorulan Sorular</h2>
        </div>

        <div className="secContainer grid ">
         <div className="accordion ">
            <Accordion 
            title="Kahvenin yanında hangi tatlıyı önerirsiniz?" 
            desc="Size en güzel tatlılarımızdan olan MERVOLİNGO
            tatlımızı önermekten mutluluk duyarız." 
            active={active}
            setActive={setActive}/>

            <Accordion 
            title="Siparişi iade edebilir miyim? " 
            desc="Siparişiniz hazırlanmaya başlamadan iade edebilirsiniz." 
            active={active}
            setActive={setActive}/>

            <Accordion 
            title="Siz kimsizniz? " 
            desc="Biz yaklaşık 3 yıldır bu işi yapan harika insanlarız.
             Hedefimiz işimizde gelebileceğimiz en iyi yere gelmek." 
            active={active}
            setActive={setActive}/>

         </div>

         <div className="form ">
         <div className="secHeading">
         <h3>Kahveleriniz kaç dakikada hazır olur ?</h3>
         <span>Demlenme sürelerine göre yaklaşık 2 3 dakikada
           taze kahveniz hazır olmaktadır.
         </span>
        </div>

        <form className="formContent grid" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="email"
            placeholder='Email adresinizi giriniz'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder='Görüş ve önerileriniz'
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className='btn'>Gönder</button>
        </form>
         </div>
        </div>
       </div>
};

export default Questions;