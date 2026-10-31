import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';
const LatestCollection = () => {
    const{ products } = useContext(ShopContext);
    console.log(products);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    }, [products])
    
    return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST '} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quo ut facilis veritatis enim natus. Nobis veniam eum sequi. Nulla reiciendis obcaecati ratione nobis vitae sit dolorum doloribus, hic non numquam incidunt sed molestias exercitationem magnam eos quis pariatur cum expedita commodi distinctio! Quod saepe dolorum iusto eveniet sed nam.
        </p>
    </div>
    <div className='grid grid-col-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index)=>(
                <ProductItem  key={index}  id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
    </div>
    </div>
  )
}

export default LatestCollection
