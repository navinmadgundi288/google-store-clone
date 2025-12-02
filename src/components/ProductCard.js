import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ Product }) => {

  return (
    <div>
      {Product.map((CurElem) => {
        return (
          <>
            <div className={CurElem.divClass} key={CurElem.id}>
              <Link to={CurElem.Attach}>
                <img src={CurElem.image} alt="" className={CurElem.className} />
              </Link>
              <figcaption className={CurElem.textClass} > {CurElem.name}</figcaption>
            </div>
          </>
        )
      })}

    </div>
  )
}

export default ProductCard
