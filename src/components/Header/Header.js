import React from 'react'
import './Header.css';


export default function Header() {
    return (
        <div className="start">
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>
                <nav className="navigation navbar navbar-default navbar-fixed-top" >
                    <div className="container-fluid" style={{backgroundColor: "green"}}>
                        <div className="navbar-header">
                            <a href="text1" className="navbar-brand" >
                            <h1 className="brand-title"> conduit </h1>
                            </a>
                        </div>
                        <a href="/login"><p id="menuText" className="navbar-text navbar-right" style={{color: "white", whiteSpace:"pre"}}> Sign In </p></a> 
                        <a href="signup"><p id="menuText" className="navbar-text navbar-right" style={{color: "white",whiteSpace:"pre"}}> Sign Up </p></a>
                        <a href="/"><p id="menuText" className="navbar-text navbar-right" style={{color: "white",whiteSpace:"pre"}}> Home </p></a>
                    </div>
                </nav>
            </header>
            <div class="top-banner"></div>
        </div>
    )
}
