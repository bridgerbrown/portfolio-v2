import React from 'react'
import Image from 'next/image'

function MartiniShotWebsite() {
return(
    <>
        <div className='project-last-single-container'>
            <div className='project-image-container'>
                <a href='https://www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={'/martini-shot-preview.jpg'}
                        alt="martini shot project preview" 
                        className='project-image fade-in'
                        width={1280}
                        height={960}
                        />
                </a>
            </div>
            <div className='project-details fade-in'>
                <div className='project-text'>
                    <a href='https://www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer">
                        <h4 className='project-title'>Martini Shot Podcast Website</h4>
                    </a>
                    <h3 className='project-subtitle'>FREELANCE</h3>
                    <p className='project-description'>A website for the podcast Martini Shot with writer and TV producer Rob Long (Cheers, Sullivan & Son).
                        This was one of my first website projects and was built using Wordpress, HTML, and CSS.
                        <br></br>
                        <br></br>
                        In addition to managing the website, I am also the audio producer/editor and designed the Martini Shot logo.</p>
                </div>
                <div className='project-buttons'>
                <a href='https://www.martinishotpodcast.com' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                    Preview
                </a>
                </div>    
            </div>
        </div>
    </>
)
}

export default MartiniShotWebsite