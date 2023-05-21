import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import './Sign Up.css'
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Context/UserContext';


const SignUp = () => {


    const [errorPassword, steErrorPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const { GoogleSignup, GitHubSignUp, createUser, verifyEmail, updateUser } = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const fullname = event.target.fullname.value;
        //console.log(fullname);
        const phone = event.target.phone.value;
        //console.log(phone);
        const email = event.target.email.value;
        //console.log(email);
        const password = event.target.password.value;
        console.log(password);
        if (password === '') {
            steErrorPassword('');

            return;

        }
        if (!/(?=.*[A-Z])/.test(password)) {
            steErrorPassword('Password must contain a Capital letter');
            return;
        }
        if (password.length < 8) {
            steErrorPassword('Password should contain at least 8 character');
            return;

        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            steErrorPassword('Password should contain at least 2 digit')
            return;

        }
        if (!/(?=.*?[#?!@$%^&*_])/.test(password)) {
            steErrorPassword('Password should contain at least one special character')
            return;



        }
        steErrorPassword('');

        createUser(email, password)
            .then(results => {
                const user = results.user;
                //console.log(user);
                setSuccess(user);
                form.reset();
                VerifyUseremailAddress();
                updateUser();


            })
            .catch((error) => {
                console.log(error);

            });



    }


    const handleGoogleSignup = () => {
        GoogleSignup()
            .then(results => {
                const user = results.user;
                //console.log(user);
                setSuccess(user);

            })
            .catch((error) => {
                console.log(error);

            });




    }
    const handleGithubSignup = () => {
        GitHubSignUp()
            .then(result => {
                const user = result.user;
                setSuccess(user);


            }).catch((error) => {
                console.log(error);


            });
    }
    const VerifyUseremailAddress = () => {
        verifyEmail()
            .then(() => {
                alert('Please check email and verify')

            });

    }



    return (
        <div className='container signUp-section '>
            <h1 className="text-4xl font-bold heading">Please Sign Up Here!</h1>
            <div className='form-section'>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='fullname' placeholder="Enter Full Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control type="number" name='phone' placeholder="Enter Phone No" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    {
                        <p className='text-danger my-2'>{errorPassword}</p>
                    }
                    {
                        success && <p className='text-success'>Registered Successfully</p>
                    }

                    <label className="label mb-3">
                        <Link to="/signIn" className="label-text-alt link link-hover">
                            Already have account?</Link>
                    </label>


                    <Button className='submit' variant="primary bg-danger bg-gradient" type="submit">
                        Sign Up
                    </Button>
                    <Button onClick={handleGoogleSignup} className='btn btn-success submit mt-3' variant="primary" type="submit">
                        Google Sign Up
                    </Button>
                    <Button onClick={handleGithubSignup} className='btn btn-info submit mt-3' variant="primary" type="submit">
                        Github Sign Up
                    </Button>
                </Form>


            </div>
        </div>

    )
};

export default SignUp;