

import React, { useState } from 'react';
import Footer from '../../Components/Layout/Footer/Footer';
import './Contact.css';
import emailjs from 'emailjs-com';
import { message } from 'antd';

const Iletisim = () => {
  const [formData, setFormData] = useState({
    fullName: '',  // Ad ve Soyadı tek bir alanda birleştiriyoruz
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
      const templateId = 'template_4e0uwle';
      const userId = 'S5Q6R3zjdtFdLmMGR';

      // Email.js'e gönderilecek veriler
      const templateParams = {
        to_name: formData.fullName,
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
          fullName: '',
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

  return (
    <>
      <section className="contact">
        <div className="contact-top">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6005.737671585479!2d27.81716799038203!3d41.18102795913443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4e745bc85d6bf%3A0xf06945ec414379c0!2sT.C.%20Nam%C4%B1k%20Kemal%20%C3%9Cniversitesi%20%C3%87orlu%20M%C3%BChendislik%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1704495980778!5m2!1str!2str"
              width="100%"
              height="500"
              style={{
                border: '0',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="container">
            <div className="contact-titles">
              <h4>Bizimle İletişime Geç</h4>
              <h2>Mesajını İlet</h2>
              <p>Kahve Tutkunlarının Buluşma Noktası: Biz! Size Bir Adım Daha Yakınız, Bize Ulaşın!</p>
            </div>
            <div className="contact-elements">
              <form className="contact-form container" onSubmit={handleFormSubmit}>
                <div className="">
                  <label>
                    Ad-Soyad
                    <span>*</span>
                  </label>
                  <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Adınız ve Soyadınız"
              />
             </div>
                <div className="">
                  <label>
                    Email
                    <span>*</span>
                  </label>
                  <input
                type="text"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Adresiniz"
              />                
              </div>
                <div className="">
                  <label>
                    Mesajın
                    <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={handleInputChange}
                    size="30"
                    required=""
                    placeholder="Mesajınızı Yazın"
                  ></textarea>
                </div>
                <button className="btn">Gönder</button>
              </form>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong> Kahve İçelim :) </strong>
                    <p className="contact-street">Tekirdağ Çorlu — Namık Kemal Üniversitesi No1</p>
                    <a href="tel:Phone: +1 1234 567 88">Telefon: 90 505 101 23 45</a>
                    <a href="mailto:Email: contact@example.com">Email: merdan@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong> Çalışma Saatleri</strong>
                    <p className="contact-date">Pazartesi - Cuma : 9:00-17:00</p>
                    <p>Haftasonu Kapalı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Iletisim;

// import React, { useState } from 'react';
// import Footer from '../../Components/Layout/Footer/Footer';
// import image from '../../React-Proje-foto1/foto4.jpg';
// import './Contact.css';
// // import Navbar2 from '../Navbar2/Navbar2'
// import emailjs from 'emailjs-com';
// import { message } from 'antd';


// const Iletisim = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     surname: '',
//     email: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Email.js servis kimliği, şablon kimliği ve kullanıcı kimliği
//       const serviceId = 'service_fay5bt6';
//       const templateId = 'template_4e0uwle';
//       const userId = 'S5Q6R3zjdtFdLmMGR';

//       // Email.js'e gönderilecek veriler
//       const templateParams = {
//         to_name: `${formData.name} ${formData.surname}`,
//         from_email: formData.email,
//         message: formData.message,
//       };

//       // Email.js üzerinden e-posta gönderimi
//       const response = await emailjs.send(serviceId, templateId, templateParams, userId);

//       if (response.status === 200) {
//         message.success('E-posta başarıyla gönderildi.');
//         // İsteğe bağlı olarak kullanıcıya başarı mesajını gösterme veya yönlendirme işlemleri ekleyebilirsiniz.
//          // Gönderim başarılı olduktan sonra input alanları temizleniyor
//       setFormData({
//         name: '',
//         surname: '',
//         email: '',
//         message: '',
//       });
//       } else {
//         message.error('E-posta gönderimi başarısız.');
//       }
//     } catch (error) {
//       console.error('Hata:', error);
//     }
//   };
//   return (
    
//     <>
//    {/* <Navbar2/> */}
 

//    <div className="iletisim section container">
//     <div className="homeContainer grid">
//        <div className='foto'>
//       <img src={image} alt="" />
//     </div>

//        <div className="section">
//       <h2>Görüş ve önerileriniz bizim için değerli.</h2>
//       </div>

//       <div className="form grid">
//         <div className="formContent container">
//         <form onSubmit={handleFormSubmit}>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Adınız"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   name="surname"
//                   placeholder="Soyadınız"
//                   value={formData.surname}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="Email adresinizi giriniz"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//                 <textarea
//                   name="message"
//                   placeholder="Görüş ve önerileriniz"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                 ></textarea>
//                 <button type="submit" className="btn">
//                   Gönder
//                 </button>
//                 </form>
//          </div>
//            <div>
//            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6005.737671585479!2d27.81716799038203!3d41.18102795913443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4e745bc85d6bf%3A0xf06945ec414379c0!2sT.C.%20Nam%C4%B1k%20Kemal%20%C3%9Cniversitesi%20%C3%87orlu%20M%C3%BChendislik%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1704495980778!5m2!1str!2str"
//        width="100%" height="450"loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
//           </div>
//       </div>         
//     </div>  
//     </div>
//    <Footer/>
//    </>
  
//   )
// }

// export default Iletisim