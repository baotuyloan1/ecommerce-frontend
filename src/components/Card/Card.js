import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

const urlImg = 'http://localhost:8080'

function Card({item}) {
  return (
    <Link className='link' product={item} to={`/product/${item?.id}`}>
    <div className='card'>
        <div className='image'>
            {true && <span>New Season</span>}
            <img src={`${urlImg}${item.imgUrl}`} className='mainImg'/>
            {item.imagesDetail.length > 0  && <img className='secondImg' src={urlImg+item.imagesDetail[0]['url']}></img>} 
        </div>
        <h2>{item.name}</h2>
        <div className='prices'>
            <h3>${item.oldPrice || item.price + 20}</h3>
            <h3>${item.price}</h3>
        </div>
    </div>

    </Link>
  )
}

export default Card