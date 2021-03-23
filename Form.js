import React, { useState } from 'react';
import FormInput from '/Users/L-Hodges/my-app/src/components/Forminput';
import FormSuccess from '/Users/L-Hodges/my-app/src/components/Formsuccess';


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