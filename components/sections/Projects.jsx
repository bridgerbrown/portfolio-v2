import React from 'react'
import EcommerceProject from '../sections/project-previews/EcommerceProject'
import MartiniShotWebsite from '../sections/project-previews/MartiniShotWebsite'
import QuizProject from '../sections/project-previews/QuizProject'
import Image from 'next/image'
import PayCats from './project-previews/Paycats'
import RicochetProductionsProject from './project-previews/RicochetProductions'
import SpheresProject from './project-previews/SpheresProject'

function Projects() {
    return(
        <>
            <section className='section-container' id="projects">
                <div className='section-line'>
                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />

                    <h3 className='section-title'>
                        Projects
                    </h3>

                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />
                </div>
                <div className='all-projects-container'>
                    <PayCats />
                    <EcommerceProject />
                    <SpheresProject />
                    <RicochetProductionsProject />
                    <QuizProject />
                    <MartiniShotWebsite />
                </div>
            </section>
        </>
    )
}

export default Projects
