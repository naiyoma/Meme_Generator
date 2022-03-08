import React from "react"

function Header() {
    return(
        <div className="header">
            <img src="troll-face.png"
                className="header--image"
            />  
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header-project">Dao Memes</h4>
        </div> 
    )
}

export default Header