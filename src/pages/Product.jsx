import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { CircularProgress, Button } from '@material-ui/core';
import { ProductsList } from '../components/ProductsList/ProductsList';
import { BuilderComponent, BuilderContent } from '@builder.io/react';

export function Product() {
  const id = window.location.pathname.split('/')[2];
  console.log(id)

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://cdn.builder.io/api/v2/content/product?apiKey=900ba6c488b3475599deca93010086e9&query.data.slug=${id}&limit=1
    `)
    .then(results => results.json())
    .then(data => {setProduct(data.results[0].data)})
    .then(console.log(product))

  }, []);
  // useEffect(() => {
  //   // const url = `https://api.shopstyle.com/api/v2/products/${id}`;
  //   // if (product !== null) {
  //   //   setProduct(null);
  //   // }
  //   async function fetchProduct() {
  //     console.log(id);
  //     const result = await fetch(`https://cdn.builder.io/api/v2/content/product?apiKey=900ba6c488b3475599deca93010086e9&query.data.slug=${id}&limit=1
  //     `).then(res => res.json());
  //     console.log(result)
  //     setProduct(result[0]);
  //     console.log(product)
  //   }
  //   fetchProduct();
  // }, [id]);


  return (
    <div>
      {product.name}
      <img src={product.image} />
    </div>
    // <div style={{ display: 'flex', flexDirection: 'column', padding: 50 }}>
    //   <div style={{ margin: '0 auto', maxWidth: 1200, width: '100%' }}>
    //     {product == null ? (
    //       <div
    //         style={{
    //           display: 'flex',
    //           padding: 100,
    //           justifyContent: 'center',
    //         }}
    //       >
    //         <CircularProgress disableShrink color="inherit" />
    //       </div>
    //     ) : product.errorCode ? (
    //       <div style={{ padding: 100, textAlign: 'center', color: '#666' }}>Product not found</div>
    //     ) : (
    //       <div>
    //         <div style={{ display: 'flex', position: 'relative', alignItems: 'flex-start' }}>
    //           <div style={{ width: '50%', flexShrink: 0, textAlign: 'center', minHeight: '80vh' }}>
    //             {[product.image].concat(product.alternateImages).map(image => (
    //               <img
    //                 style={{
    //                   display: 'block',
    //                   padding: 5,
    //                   objectFit: 'contain',
    //                   width: '100%',
    //                   maxHeight: 800,
    //                 }}
    //                 src={image.sizes.Best.url}
    //               />
    //             ))}
    //           </div>
    //           <div style={{ position: 'sticky', top: 100, marginLeft: 50 }}>
    //             <h2>{product.name}</h2>
    //             <h3>{product.priceLabel}</h3>
    //             <p>{product.description}</p>
    //             <Button variant="outlined" size="large" style={{ marginTop: 10 }} fullWidth>
    //               Add to bag
    //             </Button>
    //             <BuilderComponent model="product-detail" />
    //           </div>
    //         </div>
    //         <div style={{ marginTop: 50 }}>
    //           <ProductsList />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}
