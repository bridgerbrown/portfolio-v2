import React from 'react'
import Image from 'next/image';

function PayCats() {
    return(
        <>
            <div className='project-single-container'>
                <div className='project-image-container'>
                    <a href='https://paycats.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <Image 
                            src={'/paycats-preview.jpg' }
                            alt="paycats project preview" 
                            className='project-image reveal-left'
                            width={1280}
                            height={960}
                            />
                    </a>
                </div>
                <div className='project-details reveal-right'>
                    <div className='project-text'>
                        <a href='https://paycats.vercel.app/' target="_blank" rel="noopener noreferrer">
                            <h4 className='project-title'>PayCats - Venmo/PayPal clone</h4>
                        </a>
                        <div>
                            <h3 className='project-subtitle'>SOLO-PROJECT</h3>
                            {/* <h3 className='coming-soon'>Coming Soon...</h3>
                            <h3 className='coming-soon-bg'>Coming Soon...</h3> */}
                        </div>
                        <p className='project-description'>
                            PayCats is a Venmo/Paypal clone with a database of cat users you can securely sign up, pay and request money from. Like Venmo,
                            you can track your balance, make requests to users, and interact with the history of transactions. Each cat user has a different personality
                            with unique possibilities of responses and comments to your requests! 
                            <br/>
                            <br/>
                            This project was made using <span>TypeScript</span>
                            , <span>Tailwind CSS</span>, <span>React</span>
                            , <span>NextJS</span>, <span>Firestore</span> database
                            , and <span>Firebase</span> user authentication.
                        </p>
                    </div>
                    <div className='project-buttons'>
                        <a href='https://paycats.vercel.app/' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Preview
                        </a>
                        <a href='https://github.com/bridgerbrown/paycats' target="_blank" rel="noopener noreferrer" className='ReadMore'>
                            Github
                        </a>
                    </div>  
                </div>
            </div>
        </>

    )
}

export default PayCats