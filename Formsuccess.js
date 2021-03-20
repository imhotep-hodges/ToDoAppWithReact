import React from 'react';
import IMG_2960 from '/Users/L-Hodges/my-app/src/artwork/IMG_2960.png';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">
                <h1>We have received your message!</h1>
            </div>
            <div className="successimage">
                <img src={IMG_2960} alt="Larry Avatar" className="avatar2" />
            </div> 
        </div>
    );


};

export default FormSuccess;