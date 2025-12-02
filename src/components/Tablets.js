import React,{useEffect} from 'react'
import '../Tablets.css';
import { Link } from 'react-router-dom';

const Tablets = () => {
  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'Pixel Tablet,Help in Your Hand - Google Store';

    // Reset the title when the component unmounts
  }, []);
  return (
    <div>
        <h3 className='pixtab'> Pixel Tablet </h3>
        <Link to='/TabSpecs'> <h4 className='tecsp'> Tech Specs </h4> </Link>
       <img alt="" src="../images/Tablets/tabg1.png"  className='porcelin'/>
       <img alt="" src="../images/Tablets/tabg2.png"  className='hazel'/>
       <img alt="" src="../images/Tablets/tabg3.png"  className='rose'/>
       {/* <button className='over'> Overview </button>
       <button className='tespecs'> Tech Specs </button> */}
       <h2 className='tabgoo'> The tablet only Google could make</h2>
       <a href="https://www.youtube.com/watch?v=-gWSDhkceLM"> <img alt="" src="../images/Tablets/play.png"  className='playvid'/> </a>
       <a href="https://www.youtube.com/watch?v=-gWSDhkceLM"> <h3 className='explo'> Explore the tablet </h3> </a>

       <img alt="" src="../images/Tablets/stand.png"  className='stand'/>
       <h3 className='includ'> The included charging <br /> dock is also a speaker. </h3>

       <img alt="" src="../images/Tablets/g2.png"  className='g2'/>
       <h3 className='g2info'> Personalized help with <br /> Google Tensor G2. </h3>

       <img alt="" src="../images/Tablets/playv.png"  className='playv'/>
       <h3 className='playvinfo'> Integrated entertainment <br /> with Google TV and more. </h3>

       <img alt="" src="../images/Tablets/pair.png"  className='pair'/>
       <h3 className='pairinfo'> Pairs with Pixel phones and <br /> earbuds </h3>

       <img alt="" src="../images/Tablets/home.png"  className='home'/>
       <h3 className='homeinfo'> Easily control your <br /> home with the Google <br /> Home app. </h3>

       <img alt="" src="../images/Tablets/tab11.jpg"  className='tab11'/>
       <img alt="" src="../images/Tablets/longtab.jpg"  className='longtab'/>
       <img alt="" src="../images/Tablets/fasttab.jpg"  className='fasttab'/>
       <img alt="" src="../images/Tablets/vidtab.jpg"  className='vidtab'/>
       <img alt="" src="../images/Tablets/docktab.jpg"  className='docktab'/>

       <h3 className='chargi'> Charging Speaker dock </h3> 
       <h2 className='mock'> The dock that helps you do more. </h2>
       <video src="../images/Tablets/tab.mp4"  className='playvtab' autoplay controls/>
       <video src="../images/Tablets/roomfill.mp4"  className='playvtab2' autoplay controls/>
       <h3 className='charre'> Charged and ready </h3>
       <h3 className='charinfo'> The Charging Speaker Dock keeps the Pixel Tablet powered <br /> 24/7 – so it’s ready when you are. </h3>

       <h3 className='roomre'> Room-filling sound </h3>
       <h3 className='roominfo'> The Pixel Tablet becomes your personal DJ with next-level <br />audio from the dock’s speaker. </h3>
       <h4 className='pixport'> Pixel portfolio </h4>
       <h2 className='itw'> It works with Pixel devices. <br /> And other devices, too. </h2>

       <img alt="" src="../images/Tablets/sea1.jpg"  className='sea1'/>
       <img alt="" src="../images/Tablets/sea2.jpg"  className='sea2'/>

       <h3 className='sea1info1'> A simpler way to share. </h3>
       <h4 className='sea1info2'> With Nearby Share, you can quickly and securely share photos, videos, <br /> contacts, links, and more between your Pixel Tablet and nearby Android <br /> phones and laptops. </h4>

       <h3 className='sea2info1'> Fix photos from other devices. </h3>
       <h4 className='sea2info2'> Easily remove distractions in the background of your pictures with Magic <br /> Eraser in Google Photos. Or change the color and brightness so an object <br /> blends right in </h4>

       <h2 className='acce'> Accessorize your tablet. </h2>

       <video autoplay loop controls muted className='vidp'>
       <source src="../images/Tablets/tab01.mp4" type="video/mp4" />
       </video>

      <video autoplay loop controls muted className='vido'>
      <source src="../images/Tablets/tab02.mp4" type="video/mp4" />
      </video>

       <h2 className='pio'> Pixel Tablet subscriptions <br /> and services. </h2>

       <img alt="" src="../images/Tablets/new.png"  className='gone'/>
       <img alt="" src="../images/Tablets/youtube.png"  className='gyou'/>

       <h3 className='mon1'> 3 months of <br /> Google One <br /> included.</h3>
       <h3 className='mon2'> Get 3 months <br /> of YouTube <br /> Premium. </h3>

       <h4 className='ghelp'> Google One helps you get more from your <br /> Pixel Tablet. Get access to 100 GB of cloud <br /> storage from Google One to use across <br /> Google Drive, Gmail, and Google Photos </h4>
       <h4 className='ghelp2'> Pixel Tablet comes with 3 months of YouTube <br /> Premium.12 Enjoy your favorite YouTube videos <br /> and music ad-free, in the background, and <br /> offline on your lightning-fast tablet.</h4>

       <ol> 
        <li> <h5> Subscriptions may be required for certain content. </h5></li>
        <li> <h5> Sold separately. </h5> </li>
        <li> <h5> Requires compatible smart home devices (sold separately). </h5> </li>
        <li> <h5> Screen has rounded corners. When measured diagonally as a rectangle, screen is 11 inches. Actual viewable area is less. Subscriptions may be required. </h5> </li>
        <li> <h5> Home control features require compatible smart devices (sold separately). </h5> </li>
        <li> <h5> Requires Google Home app. </h5> </li>
        <li> <h5> Requires compatible phones running on Android 6.0 or newer or Chromebooks running on Chrome OS 91 or newer. </h5> </li>
        <li> <h5> Requires Google Photos app. May not work on all image elements.</h5> </li>
        <li> <h5> Requires Google Home app and compatible smart home devices (sold separately).</h5> </li>
       </ol>

       <hr className='horizen' />

       <h5 className='indz'> India </h5>
       <h5 className='priz'> Privacy </h5>
       <h5 className='goozs'> Google Nest Commitment to Privacy </h5>
       <h5 className='salz'> Sales Terms </h5>
       <h5 className='terz'> Terms of service </h5>

    </div>
  )
}

export default Tablets
