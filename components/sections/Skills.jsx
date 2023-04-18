import React from "react";
import Image from "next/image";

function Skills() {
    return(
        <section className="skills-container Section-container">
            <div>
                <div className='section-line'>
                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />
                    <h3 className='Section-Headers' id="skills-header">Skills</h3>
                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />
                </div>
                <p className="currently-learning">I am currently learning...
                    <span>
                        <i class="devicon-python-plain" id="currently-icon"></i>
                        Python
                    </span>
                    .
                </p>
            </div>
            <div className="skill-icons">
                <div className="skill">          
                    <i class="devicon-javascript-plain"></i>
                    <p>JAVASCRIPT</p>
                </div>
                <div className="skill">     
                    <i class="devicon-react-original"></i>
                    <p>REACT</p>
                </div>
                <div className="skill">       
                    <i class="devicon-typescript-original"></i>
                    <p>TYPESCRIPT</p>
                </div>
                <div className="skill">       
                    <i class="devicon-nextjs-original"></i>
                    <p>NEXT.JS</p>
                </div>
                <div className="skill">
                    <i class="devicon-html5-plain"></i>
                    <p>HTML</p>
                </div>
                <div className="skill">  
                    <i class="devicon-css3-plain"></i>
                    <p>CSS</p>
                </div>
                <div className="skill">       
                    <i class="devicon-jest-plain"></i>
                    <p>JEST</p>
                </div>
                <div className="skill">       
                    <i class="devicon-nodejs-plain"></i>
                    <p>NODEJS</p>
                </div>
                <div className="skill">       
                    <i class="devicon-tailwindcss-plain"></i>
                    <p>TAILWIND CSS</p>
                </div>
                <div className="skill">       
                    <i class="devicon-mongodb-plain"></i>
                    <p>MONGODB</p>
                </div>
                <div className="skill">       
                    <i class="devicon-redux-plain"></i>
                    <p>REDUX</p>
                </div>
                <div className="skill">       
                    <i class="devicon-jquery-plain"></i>
                    <p>JQUERY</p>
                </div>
                <div className="skill">       
                    <i class="devicon-git-plain"></i>
                    <p>GIT</p>
                </div>
                <div className="skill">       
                    <i class="devicon-wordpress-plain"></i>
                    <p>WORDPRESS</p>
                </div>
                <div className="skill">       
                    <i class="devicon-photoshop-plain"></i>
                    <p>PHOTOSHOP</p>
                </div>
                <div className="skill">       
                    <i class="devicon-illustrator-plain"></i>
                    <p>ILLUSTRATOR</p>
                </div>
            </div>
        </section>
    )
}

export default Skills