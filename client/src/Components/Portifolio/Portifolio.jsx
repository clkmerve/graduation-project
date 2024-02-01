import React from 'react';
import './Portifolio.css'
import WifiIcon from '@mui/icons-material/Wifi';
import ChairIcon from '@mui/icons-material/Chair';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import image from '../../React-Proje-foto1/foto1.jpg';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const Portifolio=()=> {
   return <div className='portifolio section container'> 
<div className="secContainer grid">
   <div className="leftContent">
      <div className="secHeading">
         <h1 className='h1'>Neden Mi Bizi Seçmelisiniz<QuestionMarkIcon className='Icon'/></h1>
         <span className='yazı'>Mükemmel kahvelerin yanında sizi karşılayacak şeylerimiz mevcut!
                  </span>
      </div>

      <div className="grid">
         <div className="singlePortifolio flex">
            <div className="iconDiv">
           <WifiIcon className='Icon'/>
            </div>

            <div className="infor">
               <h2 className='h2'>Sonsuz İnternet</h2>
               <span className='netText'>Sınırsız internetin keyfini çıkarın!</span>
            </div>
         </div>
                
         <div className="singlePortifolio flex">
            <div className="iconDiv">
              <ChairIcon className='Icon'/>
            </div>
         
            <div className="infor">
               <h2 className='h2'>Konforlu Koltuklar</h2>
               <span className='netText'>Rahatınıza düşkünseniz aradığınız yer burası!</span>
            </div>
         </div>

         <div className="singlePortifolio flex">
            <div className="iconDiv">
              <AudiotrackIcon className='Icon'/>
            </div>
         
            <div className="infor">
               <h2 className='h2'>Müziğin Tadını Çıkarın</h2>
               <span className='netText'>Harika kahvelerinizi yudumlarken beyniniz müziğe doysun!</span>
            </div>
         </div>
        
      </div>
        
      </div>
   </div>


<div className="rightContent">
        <img src={image} alt="" />
</div>

   <div/>
 </div>
};

export default Portifolio;
