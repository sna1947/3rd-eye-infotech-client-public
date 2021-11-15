import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mighty-island-81125.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (


       
            
        <Box sx={{ display: 'flex',flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper' }}>
                
     
            {
                  
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
         </Box>
    );
};

export default Products;