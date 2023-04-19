import React from 'react'
import Image from 'next/image';

function EcommerceProject() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-image-container'>
                    <a href='https://ecommerce-paintings.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <Image 
                            src={'/ecommerce-preview.jpg'}
                            alt="ecommerce paintings project preview" 
                            className='project-image reveal-left'
                            width={1280}
                            height={960}
                            />
                    </a>
                </div>
                <div className='project-details reveal-right'>
                    <div className='project-text'>
                        <a href='https://ecommerce-paintings.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <h4 className='project-title'>
                            eCommerce Paintings
                        </h4>
                        </a>

                        <h3 className='project-subtitle'>SOLO-PROJECT</h3>

                        <p className='project-description'>
                            An eCommerce demo website with features such as a database of dynamically updating products, cart functionality, and email user authentication.
                            <br/>
                            <br/>
                            This project was made using <span>React</span>, <span>NextJS</span> (server-side and static rendering), <span>Firestore</span> database, <span>Firebase</span> user authentication and 
                            the art database of the <span>Art Institute of Chicago&apos;s public API</span>. 
                        </p>
                    </div>
                    <div className='project-buttons'>
                        <a href='https://ecommerce-paintings.vercel.app/' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Preview
                        </a>
                        <a href='https://github.com/bridgerbrown/ecommerce-basic' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Github
                        </a>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default EcommerceProject