import React, { useState, useEffect } from "react";
import Image from "next/image";

const GoTop = (props) => {
    const [ showGoTop, setShowGoTop ] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop( window.pageYOffset > 50 )
    }
    
    const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }
    
    useEffect( () => {
        window.addEventListener( 'scroll', handleVisibleButton )
    }, [] )
    
    return (
        <div className={ showGoTop ? '' : "goTopHidden" } onClick={ handleScrollUp }>
            <button type={'button'} className="goTop">
                <Image
                    src={"/go-top-dark.svg"}
                    alt="go to top of page"
                    width={50}
                    height={50}
                    className="goTop__text"
                />
            </button>
        </div>
    )
}
export default GoTop;