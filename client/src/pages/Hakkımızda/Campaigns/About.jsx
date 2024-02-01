import Hakkımızda from "./AboutItem";
import './Abouts.css' 
import image from "../../../React-Proje-foto1/foto4.jpg"


import "./Abouts.css"
import Footer from "../../../Components/Layout/Footer/Footer";

const About = () => {
  return (
    <section className="campaigns">
      <div className="container">
      
      
        
      
  <div className="section">
    <div className='foto-container'>
      <img src={image} alt="" className="foto" />
        <span className="foto-ustu-yazi container ">
        <h2>Biz Kimiz</h2>
        KAHVE İÇELİM olarak, kahve tutkunlarına ve lezzet 
    arayışındaki herkese unutulmaz bir deneyim sunma
    vizyonuyla yola çıktık. Kaliteli kahvenin yanı sıra
    sıcak bir atmosfer, samimi bir hizmet ve enfes 
    lezzetlerle dolu bir menü sunarak müşterilerimizin
    kafe kültürünü en iyi şekilde yaşamalarını 
    hedefliyoruz.
         </span>
    </div>
     
</div>




        <div className="bilgi">
          <h2>Lezzet ve Kalite</h2>
      <span>Kafe olarak, her bir fincan kahve ve her bir 
        tabak lezzetli atıştırmalıkla sizlere unutulmaz 
        bir lezzet yolculuğu sunuyoruz. Özenle seçilmiş
         kahve çekirdekleri, uzman baristalarımız 
         tarafından özel bir dikkatle hazırlanarak, 
         damak zevkinize hitap etmek için bekliyor. 
         Lezzetli ve taze içeceklerimiz, özenle seçilmiş 
         malzemelerle hazırlanan yemeklerimizle 
         misafirlerimizi ağırlamaktan mutluluk duyuyoruz</span>
       </div>


        <div>
        <div className="campaigns-wrapper">
          <Hakkımızda />
          <Hakkımızda />
        </div>
        <div className="campaigns-wrapper">
          <Hakkımızda />
          <Hakkımızda />
        </div>

        <div className="bilgi">
          <h2>Atmosfer ve Misafirperverlik</h2>
      <span>Kafe ortamımız, sıcaklığı, modern tasarımı ve rahat atmosferiyle dikkat çekiyor. Rahat koltuklarımızda oturarak, sevdiklerinizle veya tek başınıza keyifli bir zaman geçirebilirsiniz. Her bir müşterimizi ailemizin bir parçası gibi görüyor ve sıcak bir karşılama ile ağırlıyoruz.</span>
       </div>

       <div className="bilgi">
          <h2>İnsana Saygı ve Sürdürülebilirlik</h2>
      <span>Sadece kahve değil, aynı zamanda insanlara ve çevreye duyduğumuz saygı da ön planda. Sürdürülebilir ve adil ticaret prensiplerine bağlı kalarak, kahve üreticilerine destek olmayı ve çevresel etkimizi en aza indirmeyi hedefliyoruz.</span>
       </div>

       <div className="bilgi">
             <h2>Hizmet ve Güleryüz</h2>
              <span>Müşteri memnuniyeti bizim için her şeyden 
                önce gelir. Güler yüzlü ve deneyimli ekibimiz, 
                size en iyi hizmeti sunmak için burada. Sizleri
                 tanımak, sizinle sohbet etmek ve kahve deneyiminizi 
                 paylaşmak için sabırsızlanıyoruz.</span>
          </div>

        <div className="fotik section ">
           
          <div>
            <img src={image} alt="" className="foto" />
          </div>

          <div className="bilgi">
             <h3>Kahve İçelim</h3>
              <span> olarak, sadece bir kafe
               değil, bir buluşma noktası ve keyifli bir deneyim 
               merkezi olmayı amaçlıyoruz. Bizimle tanışın, kahvemizi
                deneyin ve bu lezzet dolu yolculukta bizimle 
                birlikte olun!
             </span>
          </div>
          
        </div>

         </div>
      </div>
      <Footer/>
    </section>
  );
};

export default About;