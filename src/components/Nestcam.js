import React, {useEffect} from 'react'
import '../Nestcam.css';

function Nestaware() {
  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'Nest Cam(Battery) - Google Store';

    // Reset the title when the component unmounts
  }, []);
  return (
    <div>
      <h3 className='pix7'> Nest Cam (outdoor or indoor, battery)
 </h3>
      <button className='fretailers'> Find Retailers </button>
      <h1 className='know'> Know more.</h1>
      <h1 className='out'> Outside or in </h1>
       <h3 className='see'> See how it works </h3>
       <div class="igroup"> 
            <img alt="" src="../images/Nestcam/nestcam.png"  className='pic1'/>    
      </div> 
      <button className='ts'> Tech Specs </button>
            <h3 className='ta1'> Most relevant alerts. </h3>
            <h3 className='ta2'> See clearly. </h3>
            <h3 className='ta3'> Go back in time. </h3>
            <img alt="" src="../images/Nestcam/tab1.png"  className='ti1'/>
            <img alt="" src="../images/Nestcam/tab2.png"  className='ti2'/>
            <img alt="" src="../images/Nestcam/tab3.png"  className='ti3'/>

            <h3 className='i1'> Intelligent alerts delivered </h3>
            <h3 className='i2'> right to your phone. </h3>
            <img alt="" src="../images/Nestcam/logo.png"  className='lg1'/>
            <img alt="" src="../images/Nestcam/sun.png"  className='su'/>

           
            <video src="../images/Nestcam/nestcam.mp4"  autoPlay controls/> */
            <img alt="" src="../images/Pixel7pro/flip.png"  className='flipv'/>
            <button className='buyv'> Purchase Now </button>

            <ol className='list10v'>
              <li> <h6 className='lit10'> Compared to Pixel 6 which was launched in the US (Pixel 6 was not launched in India). Speed and power efficiency claims based on internal testing on pre-production devices. </h6></li>
              <li> <h6 className='lit11'> Measured diagonally; dimension may vary by configuration and manufacturing process.</h6> </li>
            </ol>
            <div style={{bottom:0}}>
<h6 className='coun1v'> Country availability </h6>
<h6 className='help1v'> Help center </h6>
<h6 className='walk1v'> Pixel walk-in centers </h6>
<h6 className='cont1v'> Contact us </h6>
<h6 className='disa1v'> Disability support </h6>
<h6 className='devi1v'> Device recycling </h6>
<img alt="" src="../images/twitter.png"  className='twitter1v'/>
<img alt="" src="../images/instagram.png"  className='instagram1v'/>
<img alt="" src="../images/facebook.png"  className='facebook1v'/>
<img alt="" src="../images/youtube.png"  className='youtube1v'/>
<img alt="" src="../images/tiktok.png"  className='tiktok1v'/>
<img alt="" src="../images/india.png"  className='india1v'/>
<h5 className='ind1v'> India </h5>
<h5 className='pri1v'> Privacy </h5>
<h5 className='goog1v'> Google Nest Commitment to Privacy </h5>
<h5 className='sale1v'> Sales Terms </h5>
<h5 className='term1v'> Terms of service </h5>
<h6 className='dev1v'> Developed & Designed By @Worldof_mayur7 & @iamganeshkanaki & @nikhilpagdimal </h6>
    </div>
         
</div>
  )
}

export default Nestaware
