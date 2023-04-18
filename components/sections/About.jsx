import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react';

function About() {
  function revealLeft() {
      let reveals = document.querySelectorAll(".reveal-left");
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

    function revealRight() {
      let reveals = document.querySelectorAll(".reveal-right");
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
      window.addEventListener("scroll", revealLeft)
      window.addEventListener("scroll", revealRight)
      revealLeft()
      revealRight()
    }, [])

  return(
    <>
      <section className='bio-container section-container' id="bio">
          <div className='section-line'>
            <Image 
              src={"/star1.png"} 
              className="swirls"
              width={25}
              height={25}
              alt="swirl icon"
            />

            <h3 className='section-title'>
              About
            </h3>

            <Image 
              src={"/star1.png"} 
              className="swirls"
              width={25}
              height={25}
              alt="swirl icon"
              />
          </div>
          <div className="bio">  
              <Image 
                src={"/cortona-headshot.png"}
                alt="bridger headshot image" 
                className='reveal-left' 
                id='bio-img'
                width={352}
                height={352}
                />
              <div className="bio-items reveal-right">                    
                  <p>Hello, my name is Bridger Brown and I am a Front-End Web developer and designer based out of Portland, Oregon.
                  <br></br>
                      <br></br> 
                      Websites are an interactive art form and I am passionate about creating that experience through a designers eye.
                      I love working towards the pursuit of mastery in whatever I pursue and with the
                      deep ceiling for growth and possibilities, I enjoy developing my craft in programming.
                      <br></br>
                      <br></br>
                      I am also a musician that graduated from Berklee College of Music in 2016 with a Bachelors in Guitar Performance.
                      I am very passionate about music, art, keyboards, and self-improvement.
                  </p>
                  {/* <div className='bio-other-buttons'>
                    <button>Education</button>
                    <button>Music</button>
                  </div> */}
                  <div className='bio-buttons'>
                    <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer" >
                      <Image 
                        src={"/LinkedIN_black.png"} 
                        alt="LinkedIN icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                        <p>LinkedIn</p>
                    </a>
                    <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer" >
                      <Image 
                        src={"/Github_black.png"} 
                        alt="Github icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                        <p>Github</p>
                    </a>
                    <a href='https://www.instagram.com/bridger.design/' target="_blank" rel="noopener noreferrer" > 
                      <Image 
                        src={"/Instagram_black.png"} 
                        alt="Instagram icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                        <p>Design</p>
                    </a>
                    <a href='https://www.instagram.com/bridger.brown/' target="_blank" rel="noopener noreferrer" > 
                      <Image 
                        src={"/Instagram_black.png"} 
                        alt="Instagram icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                        <p>Music</p>
                    </a>
                    {/* <button>Resume</button> */}
                  </div>
              </div> 
          </div>
      </section>
    </>
  )
}

export default About