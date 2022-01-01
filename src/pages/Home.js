
import { Fragment } from 'react'

import BannerBackGround from '../components/BannerBackGround'
import FooterComponent from '../components/FooterComponent'
import Dashboard from '../components/Dashboard'

import projectData from '../data/projectData'

export default function Home(){
    

    const project = projectData

    console.log(project[project.length-1].name)
    console.log(project[project.length-2].name)

    const data= {
        title: "Web Developer",
        image: "https://picsum.photos/900/500"
    }

  
    return(
        <Fragment>
            <BannerBackGround data={data}/>
            <Dashboard project={project}/>
            <FooterComponent/>
        </Fragment>
    )
}