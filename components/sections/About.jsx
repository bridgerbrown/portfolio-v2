import React from 'react'
import Image from 'next/image';
import { useEffect } from 'react';

function About() {
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
                className='fade-in' 
                id='bio-img'
                width={352}
                height={352}
                />
              <div className="bio-items fade-in">  
                  <h5 className='bio-heading-line'>
                    Hello! My name is Bridger Brown and I am a <br></br>Front-End Developer and Designer based out of Portland, Oregon.
                  </h5>                  
                  <p>
                      I am a creative developer who is always trying to improve my craft by
                      learning new technologies and building new projects.
                      Websites are an interactive art form and I am passionate about creating that functional experience with a designers eye.
                      <br></br>
                      <br></br>
                      I attended the <a href="https://scrimba.com/" target="_blank" rel="noopener noreferrer" className='bio-text-link'>Scrimba Front-End Developer Bootcamp</a>
                      , multiple <a target="_blank" rel="noopener noreferrer" href="https://www.schoolofmotion.com/" className='bio-text-link'>School of Motion</a> design courses, and 
                      am a graduate of <a target="_blank" rel="noopener noreferrer" href="https://www.berklee.edu/" className='bio-text-link'>Berklee College of Music</a> with a Bachelors in Performance.
                      <br></br>
                      <br></br>
                      I am also very passionate about music, mindfulness, and keyboards (I type in DVORAK on a split keyboard using VIM commands).
                  </p>
                  {/* <div className='bio-category-buttons'>
                      <button>Education</button>
                      <p>&#62;</p>
                  </div>  */}
                  <div className='bio-buttons'>
                    <div className='resume-div'>
                        <button className='resume-button'
                          onClick={() => window.open('/Bridger_Brown_Resume_2023.pdf')}
                        >
                          Resume
                        </button>
                    </div> 
                    <div className='bio-social-buttons'>
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
                    </div>
                    {/* <button>Resume</button> */}
                  </div>
              </div> 
          </div>
      </section>
    </>
  )
}

export default About