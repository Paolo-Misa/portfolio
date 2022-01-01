import { Link } from 'react-router-dom'
import {Card} from "react-bootstrap"
import { Fragment } from 'react'

import '../styles/Dashboard.css'
// import projectData from "../data/projectData"

export default function Dashboard({project}){
    console.log(project[0].image)

    // const {image,name,description}= project
    return(
        
        <Fragment>

        

        <div>
            <h3>Paolo is an aspiring and <br/>passionate developer based in Laguna, Philippines</h3>

         <Link to="/">Profile</Link>
         </div>

        <div>
        
       
         

                 <Card className='dashboard-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/50/50" />
                <Card.ImgOverlay>
                    <Card.Title>{project[project.length-1].name}</Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                <Card.Text>
                {project[project.length-1].description}
                </Card.Text>
                </Card.Body>
                </Card> 

                <Card className='dashboard-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'../images/calculator.js'} />
                <Card.ImgOverlay>
                    <Card.Title>{project[project.length-2].name}</Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                <Card.Text>
                {project[project.length-2].description}
                </Card.Text>
                </Card.Body>
                </Card> 

                <Card className='dashboard-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project[project.length-3].image} />
                <Card.ImgOverlay>
                    <Card.Title>{project[project.length-3].name}</Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                <Card.Text>
                {project[project.length-3].description}
                </Card.Text>
                </Card.Body>
                </Card> 
            
        </div>
        
            </Fragment>

    )
}


 
 
