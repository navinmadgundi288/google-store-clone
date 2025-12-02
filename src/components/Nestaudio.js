import React, {useEffect} from 'react'
import '../Nestaudio.css';
import { Link } from 'react-router-dom';

function Nestaudio() {

  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'Nest Audio, amazing sound at your';

    // Reset the title when the component unmounts
  }, []);
  return (
    <div>

      
      <h3 className='pix710'> Nest Audio
 </h3>
 <div className='fixed-part'>
      <button className='fretailers10'> Find Retailers </button>
      <button className='fretailers11'>  Purchase Now </button>
      </div>

      <div className='scrolling-part'> 
      <h1 className='know10'> Amazing sound</h1>
      <h1 className='out10'> At your command </h1>
       <h3 className='see10'> See how it works </h3>
       <div class="pgroup"> 
            <img alt="" src="../images/nestaudio/nestaud.jpg"  className='pix1'/>    
      </div> 
     
       
      <Link to={'/Nestaudio'}> <button className='ts1'> Overview </button> </Link>
      <Link to={'/NestSpecs'}> <button className='ts2'> Tech Specs </button> </Link>
      <Link to={'/Nestaudiocompare'}> <button className='ts3'>   Compare   </button> </Link>
     
    
  
      <h3 className='cap1'> Meet Nest Audio, the helpful speaker that’s all </h3>
      <h3 className='cap2'> about sound. </h3>
            
      <img alt="" src="../images/nestaudio/assistant.png"  className='pij1'/> 
      <img alt="" src="../images/nestaudio/playmusic.png"  className='pij2'/> 
      <img alt="" src="../images/nestaudio/home.png"  className='pij3'/> 
         
         <h3 className='assis1'> Just say “Ok Google” </h3>
         <h3 className='assis2'> Google is a huge help around the house. </h3>

         <h3 className='musi1'> Experience room-filling sound.</h3>
         <h3 className='musi2'> Stream your favourite music, radio and more. </h3>

         <h3 className='hom1'> Control your smart home. </h3>
         <h3 className='hom2'> Turn on lights, TVs and more. </h3>

         <img alt="" src="../images/nestaudio/assistant.png"  className='pif1'/> 
         <h3 className='okg'> Ok Google, play Jazz</h3>
         <h3 className='det'> Hear music the way that it should sound on Nest Audio</h3>

         <h2 className='sound'> The way that sound should sound. </h2>
         <img alt="" src="../images/nestaudio/max1.jpg"  className='pij4'/> 

         <h3 className='hea1'> Rich, full sound. </h3>
         <h4 className='hea2'> With Nest Audio’s woofer, tweeter and </h4>
         <h4 className='hea3' > tuning software, crisp vocals and </h4>
         <h4 className='hea4'> powerful bass fill your room.5Nest Audio is </h4>
         <h4 className='hea5'> 75% louder than the original Google </h4>

         <h3 className='hea6' > Clear audio. </h3>
         <h4 className='hea7' > Nest Audio adapts to your environment </h4>
         <h4 className='hea8' > and whatever you’re listening to. So music </h4>
         <h4 className='hea9' > sounds better. And news, radio and </h4>
         <h4 className='hea10' > audiobooks sound even clearer </h4>

         <img alt="" src="../images/nestaudio/playmusic.png"  className='pif2'/>

         <h3 className='twi'> Twice as mesmerising</h3>
         <h4 className='par' > Just pair two Nest Audio speakers together for stereo sound </h4>

         <img alt="" src="../images/nestaudio/lands.jpg"  className='pif3'/>
        <div class="batch"> 
         <img alt="" src="../images/nestaudio/k.jpg"  className='pif4'/>
         <img alt="" src="../images/nestaudio/k1.jpg"  className='pif5'/>
         <img alt="" src="../images/nestaudio/k2.jpg"  className='pif6'/>
         </div>

         <h3 className='here'> Music here, there and everywhere </h3>
         <h3 className='there'> Fill your home with sound from all your Nest speakers and displays. And broadcast messages, chat between rooms and make calls. </h3>

         <img alt="" src="../images/nestaudio/home.png"  className='pif7'/> 
         <h3 className='con1'> Control your smart </h3>
         <h3 className='con2'> devices with your </h3>
         <h3 className='con3'> voice. </h3>
         <h4 className='con4'> Turn on the lights and more. Nest Audio works with your compatible </h4>
         <h4 className='con5'> smart devices. And it’s easy to set up right in the Google Home app. </h4>
         <h3 className='con6'> Just ask Nest Audio to… </h3>

         <img alt="" src="../images/nestaudio/lamp.png"  className='pif8'/>

         <img alt="" src="../images/nestaudio/g.png"  className='pif9'/> 

         <h3 className='has1'> Keep me updated about </h3>
         <h3 className='has2'> devices, news, tips and offers </h3>
         <h3 className='has3'> from Google Store. </h3>

         <button className='btnc'>Sign up</button>

      <h4 className='has4'> By submitting your email, you accept the terms & conditions. </h4>

      <ol>
        <li> Nest Audio requires a Wi-Fi network, a nearby electrical socket, a Google Account and a compatible mobile device. See g.co/home/req for details. </li>
        <li> Music subscriptions may be required. </li>
        <li> Compatible smart devices required. </li>
        <li> Subscription(s) may be required, and additional terms, conditions and/or charges may apply. </li>
        <li> Home size, materials and layout can affect how sound travels </li>
        <li> Subscriptions may be required. </li>
        <li> Sound improvements as compared to the original Google Home. </li>
      </ol>
      <div style={{bottom:0}}>
<h6 className='coun1b'> Country availability </h6>
<h6 className='help1b'> Help center </h6>
<h6 className='walk1b'> Pixel walk-in centers </h6>
<h6 className='cont1b'> Contact us </h6>
<h6 className='disa1b'> Disability support </h6>
<h6 className='devi1b'> Device recycling </h6>
<img alt="" src="../images/twitter.png"  className='twitter1b'/>
<img alt="" src="../images/instagram.png"  className='instagram1b'/>
<img alt="" src="../images/facebook.png"  className='facebook1b'/>
<img alt="" src="../images/youtube.png"  className='youtube1b'/>
<img alt="" src="../images/tiktok.png"  className='tiktok1b'/>
<img alt="" src="../images/india.png"  className='india1b'/>
<h5 className='ind1b'> India </h5>
<h5 className='pri1b'> Privacy </h5>
<h5 className='goog1b'> Google Nest Commitment to Privacy </h5>
<h5 className='sale1b'> Sales Terms </h5>
<h5 className='term1b'> Terms of service </h5>
<h6 className='dev1b'> Developed & Designed By @Worldof_mayur7 & @iamganeshkanaki & @nikhilpagdimal </h6>
    </div>
         </div>

</div>
  )
}

export default Nestaudio
