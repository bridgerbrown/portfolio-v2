import React from "react";
import Image from "next/image";

function Skills() {
    return(
        <section className="skills-container section-container">
            <div>
                <div className='section-line'>
                    <Image 
                        src={"/star1.png"}
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />
                    
                    <h3 className='section-title' id="skills-header">
                        Skills
                    </h3>
                    
                    <Image 
                        src={"/star1.png"} 
                        className="swirls"
                        width={25}
                        height={25}
                        alt="swirl icon"
                    />
                </div>
            </div>
            <div className="skill-icons fade-in">
                <div className="skill">          
                    <i className="devicon-javascript-plain"></i>
                    <p>JAVASCRIPT</p>
                </div>
                <div className="skill">       
                    <i className="devicon-typescript-original"></i>
                    <p>TYPESCRIPT</p>
                </div>
                <div className="skill">     
                    <i className="devicon-react-original"></i>
                    <p>REACT</p>
                </div>
                <div className="skill">       
                    <i className="devicon-nextjs-original"></i>
                    <p>NEXT.JS</p>
                </div>
                <div className="skill">
                    <i className="devicon-html5-plain"></i>
                    <p>HTML</p>
                </div>
                <div className="skill">  
                    <i className="devicon-css3-plain"></i>
                    <p>CSS</p>
                </div>
                <div className="skill">       
                    <i className="devicon-jest-plain"></i>
                    <p>JEST</p>
                </div>
                <div className="skill">       
                    <i className="devicon-nodejs-plain"></i>
                    <p>NODEJS</p>
                </div>
                <div className="skill">       
                    <i className="devicon-tailwindcss-plain"></i>
                    <p>TAILWIND CSS</p>
                </div>
                <div className="skill">       
                    <i className="devicon-mongodb-plain"></i>
                    <p>MONGODB</p>
                </div>
                <div className="skill">       
                    <i className="devicon-redux-plain"></i>
                    <p>REDUX</p>
                </div>
                <div className="skill">       
                    <i className="devicon-threejs-original"></i>
                    <p>THREE.JS</p>
                </div>
                <div className="skill">       
                    <i className="devicon-git-plain"></i>
                    <p>GIT</p>
                </div>
                <div className="skill">       
                    <i className="devicon-wordpress-plain"></i>
                    <p>WORDPRESS</p>
                </div>
                <div className="skill">       
                    <i className="devicon-photoshop-plain"></i>
                    <p>PHOTOSHOP</p>
                </div>
                <div className="skill">       
                    <i className="devicon-illustrator-plain"></i>
                    <p>ILLUSTRATOR</p>
                </div>
            </div>
        </section>
    )
}

export default Skills