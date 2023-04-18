import React, {useEffect} from 'react'
import Image from 'next/image'


function Design() {
    function fadeIn() {
        let reveals = document.querySelectorAll(".fade-in");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
  
      useEffect(() => {
        window.addEventListener("scroll", fadeIn)
        fadeIn()
      }, [])

    return(
        <>
            <section className='section-container' id="design">
                <div className='section-line'>
                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />

                    <h3 className='section-title'>
                        Design
                    </h3>

                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />
                </div>
                <div className='Work-Container'>
                    <div className='design-section'>
                        <div className='design-project fade-in'>
                            <Image 
                                src={"/design/martinishot-logo.png"} 
                                className="design-images"
                                width={450}
                                height={450}
                                alt="martini shot logo"
                            />
                            <h3 className='design-title'>Martini Shot Podcast Logo</h3>
                            <p>February, 2022</p>
                            <a href='https://podcasts.apple.com/us/podcast/martini-shot/id1550168037' target="_blank" rel="noopener noreferrer" className='design-link'>
                                Website    
                            </a>
                        </div>
                        <div className='design-project fade-in'>
                            <Image 
                                src={"/design/withinreach-logo.png"} 
                                className="design-images"
                                width={1000}
                                height={942}
                                alt="fruit within reach logo"
                            />
                            <h3 className='design-title'>Fruit Within Reach Logo</h3>
                            <p>February, 2022</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Design