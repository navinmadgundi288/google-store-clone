import React,{useEffect} from 'react'
import '../Emptycart.css';
import { Link } from 'react-router-dom';


const Emptycart = () => {
  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'Shopping basket - Google Store';

    // Reset the title when the component unmounts
  }, []);
  return (
    <div>
      <h2 className='basket'> Your basket is empty</h2>
      <Link to='/'> <button className='contins'> Continue Shopping </button> </Link>
      <img alt="" src="../images/Earbuds/shopping-cart.png"  className='basimg'/>
      <h2 className='savd'> Saved for later </h2>
      <hr className='hori' />
      <h2 className='noit'> No items saved yet </h2>
      <h2 className='noit2'> Add items that you're not buying today to this list </h2>
      <hr className='hori2' />
      <img alt="" src="../images/india.png"  className='basimg2'/>
      <h4 className='india1'> India </h4>
      <h4 className='pri1' > Privacy </h4>
      <h4 className='gnest1' > Google Nest Commitment to Privacy </h4>
      <h4 className='sales1' > Sales Terms </h4>
      <h4 className='terms1' > Terms of service </h4>
    </div>
  )
}

export default Emptycart
