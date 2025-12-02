import React, {useEffect} from 'react'
import '../Nestaware.css';

function Nestaware() {

  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'Nest Aware - Video Recording Support';

    // Reset the title when the component unmounts
  }, []);

  return (
    <div>
      <h3 className='pix7'> Nest Aware </h3>
      <button className='fretailers'> Find Retailers </button>
      <div class="igroup"> 
            <img alt="" src="../images/Nestaware/nest1.png"  className='picb1'/>
            <img alt="" src="../images/Nestaware/nest2.png"  className='picb3'/>    
      </div>
            <img alt="" src="../images/Nestaware/user.png"  className='userb'/>
            <h2 className='headb'> Don’t miss a thing with Google Nest Aware. </h2>
            <h3 className='para1b'> Get the most out of your Nest Cam with Nest Aware. See </h3>
            <h3 className='para2b'> more of what happened at home with longer video history </h3> 
            <h3 className='para3b'> and intelligent alerts that matter on your Google Home app. </h3>

            <h2 className='head2b'> Hear your caller clearly. </h2>
            <h3 className='para4b'> Pixel 7a can filter out your caller's background noise and </h3>
            <h3 className='para5b'> enhance their voice, so that you can hear them when they're </h3> 
            <h3 className='para6b'> in a crowded or noisy place. </h3>
            <h1 className="authb"> Our authorised retailer </h1> 

            <img alt="" src="../images/Pixel7pro/flip.png"  className='flipb'/>
            <button className='buyb'> Purchase Now </button>
            

            <ol className='list10b'>
              <li> <h6 className='lit10'> Compared to Pixel 6 which was launched in the US (Pixel 6 was not launched in India). Speed and power efficiency claims based on internal testing on pre-production devices. </h6></li>
              <li> <h6 className='lit11'> Measured diagonally; dimension may vary by configuration and manufacturing process.</h6> </li>
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
  )
}

export default Nestaware
