import React,{useEffect} from 'react'
import '../TabSpecs.css';

const TabSpecs = () => {
    useEffect(() => {
        // Update the title when the component mounts
        document.title = 'Pixel Tablet Technical Specs - Google Store';
    
        // Reset the title when the component unmounts
      }, []);
  return (
    <div>
      <h3 className='cho'> Choose your color </h3>
      <img alt="" src="../images/TabSpecs/tabs1.png"  className='tabs1'/>
      <div id="bottom"> </div>
      <img alt="" src="../images/TabSpecs/tabs2.png"  className='tabs2'/>
      <img alt="" src="../images/TabSpecs/tabs3.png"  className='tabs3'/>
      <h4 className='por'> Porcelin </h4>
      <h4 className='haz'> Hazel </h4>
      <h4 className='ros'> Rose </h4>

      <h3 className='tsl'> Tech Specs </h3>
      <h4 className='disptab'> Display </h4>
      <ul className='disspecs'>
        <li> 10.95-inch display  </li>
        <li> LCD </li>
        <li> 2560x1600 resolution </li>
        <li> 276 pixels per inch density </li>
        <li> 16:10 aspect ratio </li>
        <li> 500 nits brightness (typical) </li>
      </ul>

      <h4 className='dimtab'> Dimension and weight  </h4>
      <ul className='dimspecs'>
        <li> 17.39 oz (493 g)  </li>
        <li> 10.2 width x 6.7 height x 0.3 depth (in) </li>
        <li> 258 width x 169 height x 8.1 depth (mm) </li>
      </ul>

      
      <h4 className='battab'> Battery and charging  </h4>
      <ul className='batspecs'>
        <li> Up to 12 hours of video streaming  </li>
        <li> Built-in 27-watt-hour battery </li>
        <li> Charging via Charging Speaker Dock (included) or USB-C® charger (sold separately) </li>
      </ul>

       
      <h4 className='memtab'> Memory and storage </h4>
      <ul className='memspecs'>
        <li> 8 GB LPDDR5 RAM  </li>
        <li> 128 & 256 GB UFS 3.1 storage </li>
      </ul>

      <h4 className='protab'> Processor </h4>
      <ul className='prospecs'>
        <li> Google Tensor G2  </li>
        <li> Titan M2 security coprocessor </li>
      </ul>

      <h4 className='sectab'> Security </h4>
      <ul className='secspecs'>
        <li> End-to-end security designed by Google  </li>
        <li> Minimum 5 years of security updates </li>
        <li> Anti-phishing and anti-malware protection </li>
        <li> Automatic security checks and privacy controls with Safety Center </li>
        <li> Camera and mic toggles </li>
        <li> Private Compute Core </li>
        <li> Android System Intelligence </li>
      </ul>

      <h4 className='frotab'> Front camera </h4>
      <ul className='frospecs'>
        <li> 8 MP  </li>
        <li> 1.12 μm pixel width </li>
        <li> ƒ/2.0 aperture </li>
        <li> Fixed focus </li>
        <li> 84° field of view </li>
        <li> 1/4" image sensor size </li>
      </ul>

      <h4 className='reartab'> Rear camera </h4>
      <ul className='rearspecs'>
        <li> 8 MP  </li>
        <li> 1.12 μm pixel width </li>
        <li> ƒ/2.0 aperture </li>
        <li> Fixed focus </li>
        <li> 84° field of view </li>
        <li> 1/4" image sensor size </li>
      </ul>

      <h4 className='senstab'> Sensors </h4>
      <ul className='sensspecs'>
        <li> Ambient light sensor  </li>
        <li> Accelerometer </li>
        <li> Gyroscope </li>
        <li> Magnetometer </li>
        <li> Hall Sensor </li>
      </ul>

      <h4 className='authtab'> Authentication </h4>
      <ul className='authspecs'>
        <li> Fingerprint Unlock with power button fingerprint sensor  </li>
        <li> Pattern, PIN, password </li>
      </ul>

      <h4 className='boxtab'> In the box </h4>  
      <ul className='boxspecs'>
        <li> Pixel Tablet </li>
        <li> Charging Speaker Dock </li>
        <li> Power Adapter </li>
        <li> Quick Start Guide </li>
        <li> Safety & Warranty Booklet </li>
      </ul>

      
    </div>
  )
}

export default TabSpecs
