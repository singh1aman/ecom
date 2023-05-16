import { useEffect, useState } from 'react';
import './productcard.css'
import Addtocart from './addtocart';
import { Link,useNavigate } from 'react-router-dom';
export default function ProductsCard(){
    const [products, setProducts] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch('https://fakestoreapiserver.reactbd.com/products');
          const data = await response.json();
          setProducts(data);
        };
    
        fetchProducts();
      }, []);
      function addToCart(){
      
      }
    return(
        <>
        <div className='main'>
        {products.map(product => (
           <div className='container'>

           <div className='top-part'>
              {/* <img alt='' src='https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600'></img> */}
              <img src={product.image}></img>
           </div>
           <div className='bottom-part'>
            <div style={{marginLeft:'5px'}} className='title'>{product.title}</div>
            <div className='cat-div'>
            <div style={{marginLeft:'5px'}}>{product.category}</div>
            <div className='price-div'>
            <div className='price'>${product.price}</div>
            <div style={{marginRight:'5px'}}>${product.oldPrice}</div>
            </div>
            </div>
           <Link to='/itemdetails'>
            <div className='cart' onClick={()=>'itemdetails'}>add to cart</div>
             
           </Link>



           </div>

       </div>
        ))}
      </div>
       
        </>
    )
}









{/* <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div> */}