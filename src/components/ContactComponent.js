import { Card ,ListGroup} from "react-bootstrap"

import "../styles/Contact.css"

export default function ContactComponent(){
    return(
        <div className="contact-card-holder">
        

            <Card className=" contact" style={{ width: '36rem' }}>
                
                <ListGroup variant="flush">
                    <ListGroup.Item><i className="bi bi-telephone-fill socIcons text-secondary"> +63 936 954 4483</i></ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-envelope-fill socIcons text-secondary"> paolo.misa@gmail.com</i></ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-linkedin socIcons text-secondary"  > www.linkedin.com/in/paolo-c-misa</i></ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-messenger socIcons text-secondary"> https://m.me/paolo.misa</i></ListGroup.Item>
                    <ListGroup.Item><i className="bi bi-github socIcons text-secondary"> https://github.com/Paolo-Misa</i></ListGroup.Item>
                    
                </ListGroup>
            </Card>
        </div>
    )
}

