
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../styles/BannerBackGround.css'



export default function BannerBackGround({data}){
    
    const {image,title}= data
   
    return(
        <Row>
            <Col className="p-0">   
               <div className="banner--title position-absolute">
                <h1 className="banner--text" >{title}</h1>
                   </div>
            <div className='banner-div'>
            <img className="banner--image" src={image} alt='background image should be here'/>
            </div>
               
            </Col>
        </Row>
    )
}