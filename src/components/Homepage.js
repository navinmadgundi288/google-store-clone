import React , {useState, useEffect} from 'react'
import Products from './ProductsAPI';
import ProductCard from './ProductCard';
import HomepageFooter from './HomepageFooter';
import '../Homepage.css';

const Homepage = () => {
  const[Product, SetProduct] = useState(Products);

  const filterItem = (category) => {
    const updatedList =  Product.filter((CurElem) => {
            return CurElem.category === category
    }) 
      SetProduct(updatedList)
  };

  useEffect(() => {
    // Update the title when the component mounts
    document.title = 'Google Store for Google Made Products';

    // Reset the title when the component unmounts
    return () => {
      document.title = 'Original Page Title';
    };
  }, []); // The empty dependency array ensures this effect runs only once
  return (
    <>
    <div className="protype1">
<h6 class="prod"> Product type </h6>
  <button className='fretailersz20' onClick={() => filterItem("Connected home")}> Connected home </button>
  <button className='fretailersz30' onClick={() => filterItem("Phones")}> Phones </button>
  <button className='fretailersz40' onClick={() => filterItem("Accessories")}> Accessories </button>
</div>

<div className="protype2">
<ProductCard Product={Product} />
</div>
<HomepageFooter />
    </>
    
  )
}

export default Homepage
