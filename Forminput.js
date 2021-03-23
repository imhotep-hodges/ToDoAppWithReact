import React from 'react';
import useForm from '/Users/L-Hodges/my-app/src/components/useForm';
import validate from '/Users/L-Hodges/my-app/src/components/validate';

const FormInput = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate); 

    return (
        <div className="blackboard">
            
            <form className="form1" onSubmit={handleSubmit}>
                <h1>Leave me some Feedback!</h1>

                <div className="form-inputs">
                    <label htmlFor="firstname" className="form-label">
                    First Name:
                    </label>
                        <input type="text" name="firstname" className="form-input" 
                        placeholder="Enter here"
                        value={values.firstname}
                        onChange={handleChange}
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}
                              
                    
                
                </div>

                <div>
                <label htmlFor="lastname" className="form-label">
                Last Name:
                </label>
                    <input type="text" name="lastname" className="form-input" 
                    placeholder="Enter here"
                    value={values.lastname}
                    onChange={handleChange}
                    />
                    
                
                </div>
                <br></br>

                <div className="form-inputs">
                
                    <label htmlFor="email" className="form-label">
                    Email:
                    </label> 
                    <input type="email" name="email" id="email" className="form-input" 
                    placeholder="Enter here"
                    value={values.email}
                    onChange={handleChange}
                    />
                    <br></br>
                    {errors.email && <p>{errors.email}</p>}
                
                </div>

                <div className="form-inputs">
                    <label htmlFor="textbox" className="form-label">
                    Message:
                    </label>
                    <textarea type="text" name="textbox" className="form-input" 
                    placeholder="Enter here" rows="4" cols="50"
                    value={values.textbox}
                    onChange={handleChange}
                    >

                    </textarea>                        
                     <br></br>                  
                </div>

                
                <div className="formsubmit">
                <p className="form-input">
								<input id="formbutton" type="submit" value="Send" />
						</p>
                
                </div>
                

            </form>
        
        </div>


    );
};

export default FormInput;