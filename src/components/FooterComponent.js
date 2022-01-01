

import '../styles/FooterStyle.css'


export default function FooterComponent (){

    return(
        <footer className="fixed_footer">
            <div className="content">
                 <h5 className='m-0'>Paolo Misa</h5> 
                 <h5>|</h5>
                 <p className='m-0'>paolo.misa@gmail.com</p>

            </div>
                    <div className='footer--socials justify-content-end'>

                        <a href='mobile: +639369544483'>
                        <i className="bi bi-telephone-fill socIcons text-secondary"></i>
                        </a>   

                    
                        <a href='https://www.linkedin.com/in/paolo-c-misa' target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin socIcons text-secondary"  ></i> 
                        </a>
                    
                        <a href='https://m.me/paolo.misa' target="_blank" rel="noreferrer">
                        <i className="bi bi-messenger socIcons text-secondary"></i>

                        </a>

                        <a href='https://github.com/Paolo-Misa' target="_blank" rel="noreferrer">
                        <i className="bi bi-github socIcons text-secondary"></i>

                        </a>
                    
                        
                        </div>  
        
        </footer>
    )
}