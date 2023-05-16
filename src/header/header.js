import './header.css'
import {FiShoppingCart} from 'react-icons/fi'
import {FaStickerMule} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import About from '../about';
import { useEffect, useState } from 'react';
import ProductsCard from '../components/productcard';
export default function Header(){
    

  
    return (<>
    
    
     <div className='parent-div'>
        <div className='left-div' >
        <FaStickerMule size={24} />
        <span className='title'>
            <Link to='/'>
        Shopping Adda

            </Link>

        </span>
        </div>
     <ul className="header-menu">
        <li>Home</li>
        <li>Pages</li>
        <li>Shop</li>
        <li>Element</li>
        <li>Blog</li>
      
     <Link to='/about'>

     <FiShoppingCart size={24} />0

     </Link>


    </ul>
     </div>
    <ProductsCard />

    </>)
}