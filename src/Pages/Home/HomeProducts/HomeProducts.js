// import { Box } from '@mui/system';
// import React from 'react';
// import { useEffect, useState } from 'react-rating/node_modules/@types/react';
// import HomeProduct from '../Home/HomeProduct/HomeProduct';

// const HomeProducts = () => {
//     const [homeproducts, setHomeProducts] = useState([]);

//     useEffect(()=>{
//         fetch('http://localhost:5000/products')
//         .then(res => res.json())
//         .then(data => setHomeProducts(data))
//     },[])
//     return (
//         <Box sx={{ display: 'flex',flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper' }}>
                
     
//             {
                  
//                   homeproducts.map(homeproduct => <HomeProduct
//                     key={homeproduct._id}
//                     homeproduct={homeproduct}
//                 ></HomeProduct>)
//             }
//          </Box>
//     );
// };

// export default HomeProducts;

// // {
                  
// //     homeproducts.slice(0, 6).map(homeproduct => <HomeProduct
// //       key={homeproduct._id}
// //       homeproduct={homeproduct}
// //   ></HomeProduct>)
// // }