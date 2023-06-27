import React from 'react'
import Image from 'next/image';

function SpheresProject() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-image-container'>
                    <a href='https://mars-sphere-animation.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <Image 
                            src={'/spheres-preview.jpg' }
                            alt="mars spheres animation project preview" 
                            className='project-image fade-in'
                            width={1280}
                            height={960}
                            />
                    </a>
                </div>
                <div className='project-details fade-in'>
                    <div className='project-text'>
                        <a href='https://mars-sphere-animation.vercel.app/' target="_blank" rel="noopener noreferrer">
                            <h4 className='project-title' id='smaller-project-title'>Three.js Spheres Animation</h4>
                        </a>
                        <h3 className='project-subtitle'>SOLO-PROJECT</h3>
                        <p className='project-description'>
                            A 3D environment scrolling animation using a 
                            mars-themed sky texture and rotating reflective spheres, made using <span>Three.js</span> and <span>WebGL</span>.
                        </p>
                    </div>
                    <div className='project-buttons'>
                        <a href='https://mars-sphere-animation.vercel.app/' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Preview
                        </a>
                        <a href='https://github.com/bridgerbrown/mars-spheres-animation' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Github
                        </a>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default SpheresProject
