import React, { useEffect,useState } from 'react'

function Product() {
    //hook for taking the data from APi and finally mapping the data
    const[data,setData]=useState([]);
    // we put []->an emthy array as a inital value because I do nto know how many data is in this arrayof fake product api
    //This is the hook that runs exactly after the component will render
    useEffect(()=>{
        //registrering the API
        fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>{
            setData(data);
            console.log(data);
        }).catch((e)=>(
            console.log("Error is fetching API data")
        ))
        //passing the data tp useStatehook
    },[])
  return (
    <div className='container'> 
    <h1 className='text-center display-3'>List of All Products</h1>
    <table className="table table-bordereds">
        <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Detail</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
            <th>In Stock</th>
        </tr>
        {
            data.map((finals)=>(
                <tr>
                    <td>{finals.id}</td>
                    <td>{finals.title}</td>
                    <td>{finals.price}</td>
                    <td>{finals.description}</td>
                    <td>{finals.category}</td>
                    <td><img src={finals.image} style={{height:'120px', width:'120px'}}/></td>
                    <td>{finals.rating.rate}</td>
                    <td>{finals.rating.count}</td>
                </tr>
            ))
        }
    </table>
    </div>
  )
}

export default Product