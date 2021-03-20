import React from 'react';
import IMG_2959 from '/Users/L-Hodges/my-app/src/artwork/IMG_2959.png';



function Home() {
    return (
        <div className="content-a">
            <h1 className="welcomeHome">Welcome to my ToDo App</h1>
            <br></br>
            <div className="homeimage">
                <img src={IMG_2959} alt="Larry Avatar" className="avatar" />
            </div>    
        </div>
    );
};

export default Home;
