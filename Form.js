import React, { useState } from 'react';
import FormInput from './Forminput';
import FormSuccess from './Formsuccess';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        
            <div className="content-a">
            
                {!isSubmitted ? <FormInput submitForm= {submitForm} /> : <FormSuccess /> }
        
            
            </div>
        
    );
};

export default Form;