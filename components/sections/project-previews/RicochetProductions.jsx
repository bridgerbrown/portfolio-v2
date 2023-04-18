import React from 'react'
import Image from 'next/image';

function RicochetProductionsProject() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-img'>
                    <a href='https://ecommerce-paintings.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <Image 
                            src={'/ricochet-productions-preview.jpg' }
                            alt="ricochet productions project preview" 
                            className='Work-Preview reveal-left'
                            width={1280}
                            height={960}
                            />
                    </a>
                </div>
                <div className='Work-Details reveal-right'>
                <div className='project-text'>
                    <a href='https://ecommerce-paintings.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <h4 className='project-title'>RicochetProductions.com</h4>
                    </a>
                    <div>
                        <h3 className='coming-soon'>FREELANCE (in development)</h3>
                        <h3 className='coming-soon-bg'>FREELANCE (in development)</h3>
                    </div>
                    <p className='project-description'>
                        This is a freelance website currently in development for the company Ricochet Productions.
                        <br/>
                        <br/>
                        This project was made using <span>React</span>, <span>TypeScript</span>, <span>NextJS</span>, and <span>Tailwind CSS</span>.
                    </p>
                    </div>
                    <div className='project-buttons'>
                        <a href='https://ricochet-productions.vercel.app/' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Preview
                        </a>
                        <a href='https://github.com/bridgerbrown/ricochet-productions' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Github
                        </a>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default RicochetProductionsProject