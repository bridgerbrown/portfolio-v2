import React from "react";
import Image from "next/image";

function Contact() {
    function copyContact(){
        let email = 'bridgerbrowndev@gmail.com'
        navigator.clipboard.writeText(email);
        let button = document.getElementById("copy-button")
        button.innerText = "Copied! ✔"
    }

    return (
      <>
        <section className="contact-container Section-container" id="contact">
            <div className='section-line'>
              <Image 
                src={"/star1.png"} 
                className="swirls"
                width={25}
                height={25}
                alt="swirl icon"
              />
              <h3 className='Section-Headers'>Contact</h3>
              <Image 
                src={"/star1.png"} 
                className="swirls"
                width={25}
                height={25}
                alt="swirl icon"
              />
            </div>
            <div className="contact-items">
                <p>I am currently available for work. Feel free to reach out to me for any inquiries!</p>
                <div className="contact-icons">
                    <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer" >
                      <Image 
                        src={"/LinkedIN_black.png"}
                        alt="LinkedIN icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                    </a>
                    <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer" >
                      <Image 
                        src={"/Github_black.png"}
                        alt="Github icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                    </a>
                    <a href='https://www.instagram.com/bridger.brown/' target="_blank" rel="noopener noreferrer" > 
                      <Image 
                        src={"/Instagram_black.png"} 
                        alt="Instagram icon" 
                        className='Social-Icons'
                        width={38}
                        height={38}
                        />
                    </a>
                    <button onClick={copyContact} id="copy-button">Copy Email</button>
                </div>
            </div>
        </section>
      </>
    )
}

export default Contact