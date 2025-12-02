import React,{useEffect} from 'react'
import '../Subscriptions.css'; 

const Subscriptions = () => {
  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'Google Subscriptions & Services';

    // Reset the title when the component unmounts
  }, []);
  return (
    <div>
      <h3 className='subscriptions' > Subscriptions </h3>
      <h2 className='getto' > Get to know Google subscriptions <br /> and services.</h2>
      <h3 className='subhead'> <a href="https://store.google.com/us/product/nest_aware?hl=en-US"> Nest Aware </a> , <a href="https://fi.google.com/about/?pli=1"> Google Fi Wireless </a>, premium content, cloud storage, <br /> gaming, and more. </h3>
      <a href="#Fea"> <img alt="" src="../images/Subscriptions/Featured.png"  className='Featured'/> </a>
      <a href="#Sto"> <img alt="" src="../images/Subscriptions/storage.png"  className='storage'/> </a>
      <img alt="" src="../images/Subscriptions/phplan.png"  className='phplan'/>
      <a href="#sho"> <img alt="" src="../images/Subscriptions/shows.png"  className='shows'/> </a>
      <a href="#gam"> <img alt="" src="../images/Subscriptions/gaming.png"  className='gaming'/> </a>
      <h4 className='f1'> Featured </h4>
      <h4 className='s1'> Storage & security </h4>
      <h4 className='p1'> Phone plan </h4>
      <h4 className='sh1' > Shows & music </h4>
      <h4 className='g1'> Gaming </h4>

      <img alt="" src="../images/Subscriptions/Featured.png"  className='Featured1' id="Fea"/>
      <h4 className='f2'> Featured </h4>
      <img alt="" src="../images/Subscriptions/info1.png"  className='info1'  />
      <h3 className='renew'> Nest Renew </h3>
      <h4 className='descrin'> Support a clean energy future, right from <br /> home. Nest Renew is free to join and works <br /> with your compatible Nest thermostat to help <br /> you automatically prioritize usage to when <br /> energy is cleaner or less expensive.</h4>
      <a href="https://store.google.com/us/product/pixel_tablet?hl=en-US" className='lnmore'> Learn more </a>

      <img alt="" src="../images/Subscriptions/security.png"  className='sec1' id="Sto" />
      <h3 className='str1'> Storage & Security </h3>

      <img alt="" src="../images/Subscriptions/one.png"  className='one1'/>
      <img alt="" src="../images/Subscriptions/aware.png"  className='aware1'/>
      <h3 className='gone' > Google one </h3>
      <h3 className='gaware' > Nest aware </h3>
      <h4 className='para1g'> Get extra cloud storage. <br /> Back up the important things on your phone. <br /> Encrypt your online activity with a VPN. <br /> Earn Google Store rewards (up to 10% back). </h4>
      <h4 className='para2g'> Don’t miss a thing on all Nest cameras. <br /> t up to 60 days event video history. <br /> Get up to 10 days 24/7 video history. <br /> Receive alerts when packages arrive.</h4>
      <a href="https://store.google.com/us/product/pixel_tablet?hl=en-US" className='lnmo1'> Learn more </a>
      <a href="https://store.google.com/us/product/pixel_tablet?hl=en-US" className='lnmo2'> Learn more </a>

      <img alt="" src="../images/Subscriptions/video.png"  className='vid1' id="sho" />
      <h3 className='str2'> Shows & Music </h3>

      <img alt="" src="../images/Subscriptions/ytv.png"  className='ytv1'/>
      <img alt="" src="../images/Subscriptions/yprem.png"  className='yprem1'/>
      <img alt="" src="../images/Subscriptions/ymusic.png"  className='ymusic1'/>

      <h4 className='ytvt'> Youtube TV </h4>
      <h4 className='ypremt'> Youtube Premium </h4>
      <h4 className='ymusict'> Youtube Music Premium </h4>

      <h5 className='ytvcap'> Live TV from 85+ top channels. <br /> Record with unlimited DVR space. <br /> Watch on Nest displays, Chromecasts, and <br /> Pixels.</h5>
      <h5 className='ypremcap'> Ad-free YouTube. <br /> YouTube Music included. <br /> Download videos for offline viewing. <br /> Play even if your screen is locked.</h5>
      <h5 className='ymusiccap'> Ad-free YouTube Music. <br /> Play millions of songs and videos. <br /> Download songs to your Pixel. <br /> Enjoy music even while using other apps.</h5>
      
      <a href="https://store.google.com/us/product/pixel_tablet?hl=en-US"  className='lmytv'> Learn more </a>
      <a href="https://store.google.com/us/product/pixel_tablet?hl=en-US" className='lmyprem'> Learn more </a>
      <a href="https://store.google.com/us/product/pixel_tablet?hl=en-US" className='lmymusic'> Learn more </a>


      <img alt="" src="../images/Subscriptions/console.png"  className='console1' id="gam" />
      <img alt="" src="../images/Subscriptions/game.png"  className='game1'/>
      <h4 className='gplay'> Google play pass </h4>
      <h5 className='gplaycap'> Hundreds of games and apps. <br /> No ads or in-app purchases. <br /> Curated collection updated monthly. <br /> Share with up to 5 family members.</h5>
      <a href="https://store.google.com/us/product/pixel_tablet?hl=en-US"  className='lmygplay'> Learn more </a>

      <ol className='kimmy'>
        <li> Adjustments only shift electricity usage from your heating and cooling. Energy Shift is only available in areas served by major continental US grids, see here. Prioritize less expensive energy only available for customers on certain electric utility time-of-use rates (check availability).</li>
        <li> Nest Renew is available in select locations and requires 3rd generation Nest Learning Thermostat, Nest Thermostat E, or the newest Nest Thermostat (sold separately), connected to a Google account.</li>
        <li> 5G service not available in all areas; speed and performance depend on factors like device configuration and capabilities, and other factors. Actual results may vary. For more information visit g.co/fi/broadband-facts. </li>
        <li> Hotspot tethering counts towards your monthly data usage. On Simply Unlimited, you can use up to 5GB of hotspot tethering.</li>
        <li> Unlimited plans include high-speed data up to 35 GB/person for Simply Unlimited or up to 50 GB/person for Unlimited Plus, and slower after. Video may stream at standard definition (480p). </li>
        <li> For 2-4 lines, plus taxes and government fees </li>
      </ol>
      <hr className='horil2' />

      <h4 className='india2'> India </h4>
      <h4 className='pri2' > Privacy </h4>
      <h4 className='gnest2' > Google Nest Commitment to Privacy </h4>
      <h4 className='sales2' > Sales Terms </h4>
      <h4 className='terms2' > Terms of service </h4>
    </div>
  )
}

export default Subscriptions
