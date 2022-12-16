import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../assets/utils/helpers';
import { validateEmail } from '../../assets/utils/helpers';

function Contact() {
    const [portfolioPages] = useState([
        {
            name: 'contact'
        }
    ]);

    const [currentPage] = useState(portfolioPages[0]);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
            console.log('Handle Form', formState);
        }
    };

    return (
        <section className='bg-dark'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto mb-4 mt-5'>
                        <h1 className='text-center text-light'>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className='light my-4'/>
                            <form id='contact-form' onSubmit={handleSubmit} className='mb-5'>
                                <div>
                                    <label className='text-white' htmlFor='name'>name:</label>
                                    <input className='form-control' placeholder='name' type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                                </div>
                                <div>
                                <label className='text-white' htmlFor='email'>Email address:</label>
                                <input className='form-control' placeholder='Email' type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                            </div>
                            <div>
                                <label className='text-white' htmlFor='message'>Message:</label>
                                <textarea className='form-control' placeholder='Message' name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className='error-text'>{errorMessage}</p>
                                </div>
                            )}
                            <div className='text-center'>
                                <button type='submit' className='submit-btn btn-xl'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        );
        }
export default Contact;
                               