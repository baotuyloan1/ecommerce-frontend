import axios from "axios";
import Card from "../Card/Card";
import "./FeaturedProducts.scss"
import { useEffect, useState } from "react";

const FeaturedProducts = ({ type }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:8080/api/products/').then(
        //     res => res.json()).then(data => {
        //         if (data['_embedded']['laptopDtoList'] && data['_embedded']['phoneDtoList']) {
        //             return setProducts(data['_embedded']['laptopDtoList'].concat(data['_embedded']['phoneDtoList']))

        //         }


        //     })
        const fetchData = async()=>{
            try{
                const res = await axios.get(process.env.REACT_APP_API_URL+"/products")
                setProducts(res.data['_embedded']['laptopDtoList']?.concat(res.data['_embedded']?.['phoneDtoList']));
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
        
    }, [])


    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='bottom'>
                {products.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts