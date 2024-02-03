import React from 'react'
import shoes from './Shoes.png';
function Maincontent() {
  return (
   <>
   <div className="container">
    <div className='first'>
        <h1 className='heading'>Your Feet Deserves the Best</h1>
        <p className='para'>Your feet deserves the best and we are here to help you with our shoes Your feet deserves the best and we are here to help you with our shoes </p>
        <button type="button" className="btn btn-danger">Shop Now</button>
        <button type="button" className="btn btn-primary" style={{ backgroundColor: 'transparent', color: 'ActiveBorder', border: '1px solid ActiveBorder' }}>Category</button>

        <h6 style={{marginTop:'15px', fontSize:'12px'}}>Also available on</h6>

    </div>
    <div className='second'>
        <img className='image'src={shoes} alt="shoes" />
    </div>
   </div>
   </>
  )
}

export default Maincontent
