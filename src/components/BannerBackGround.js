
import {Row,Col,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../styles/BannerBackGround.css'



export default function BannerBackGround({data}){
    
    const {image,title}= data
   
    return(
        // <Row className="banner p-0 m-0">
        //     <Col className=" p-0 m-0">   
        //        <div className="banner--title position-absolute p-0 m-0">
        //         <h1 className="banner--text" >{title}</h1>
        //            </div>
        //     <div className='banner-div'>
        //     <img className="banner--image" src={image} alt='background image should be here'/>
        //     </div>
               
        //     </Col>
        // </Row>

 <Card className="bg-dark" style={{ width: '100vw' }}>
<Card.Img src={image} alt="Card image" />
<Card.ImgOverlay>
  <Card.Title className='banner--text '>{title}</Card.Title>
  
  
</Card.ImgOverlay>
</Card> 
    )
}



