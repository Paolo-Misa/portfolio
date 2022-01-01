
import { Fragment } from 'react'

import BannerBackGround from '../components/BannerBackGround'
import FooterComponent from '../components/FooterComponent'

export default function Home(){

    const data= {
        title: "Web Developer",
        image: "https://picsum.photos/900/500"
    }
    return(
        <Fragment>
            <BannerBackGround data={data}/>
            <BannerBackGround data={data}/>
            <FooterComponent/>
        </Fragment>
    )
}