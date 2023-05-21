import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Context/UserContext';

const SignIn = () => {
    const { signinUser, forgetPassword, GoogleSignup, GitHubSignUp } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');



    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        //console.log(email);
        const password = event.target.password.value;
        //console.log(password);
        signinUser(email, password)
            .then(userCredential => {
                // Signed in 
                const user = userCredential.user;
                //console.log(user);
                setSuccess(user);

            })
            .catch((error) => {
                //console.log(error);

            });


    }
    const handleGoogleSignIn = () => {
        GoogleSignup()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                const user = result.user;
                setSuccess(user);

            }).catch((error) => {
                console.log(error);
            });

    }
    const handleGithubSignIn = () => {
        GitHubSignUp()
            .then((result) => {

                const user = result.user;
                setSuccess(user);


            }).catch((error) => {
                console.log(error);
            });

    }
    const handleOnBlurr = event => {
        const email = event.target.value;
        setUserEmail(email);
        ////console.log(email);

    }
    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please Give us your email address');
            return;
        }
        forgetPassword(userEmail)
            .then(() => {
                // Password reset email sent!
                alert(`Password reset link sent at ${userEmail}`)
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <div className='container signIn-section '>
            <h1 className="text-4xl font-bold heading">Please Sign In Here!</h1>
            <div className='form-section'>
                <Form onSubmit={handleSignIn}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleOnBlurr} type="email" name='email' placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>


                    <label className="label mb-3">
                        <Link to="/signUp" className="label-text-alt link link-hover">
                            New here?</Link>
                    </label><br></br>
                    {
                        success && <p className='text-success'>You are now logged In <Link to='/shop'>Enjoy your Shopping</Link></p>
                    }
                    <label className="label mb-3">
                        <Link onClick={handleForgetPassword} className="label-text-alt link link-hover">
                            Forget Password?</Link>
                    </label><br></br>


                    <Button className='login btn btn-primary text-white bg-danger bg-gradient' variant="primary" type="submit">
                        Sign In
                    </Button>
                    <Button onClick={handleGoogleSignIn} className='login btn btn-primary text-white bg-success bg-gradient' variant="primary" type="submit">
                        Google SignIn
                    </Button>
                    <Button onClick={handleGithubSignIn} className='login btn btn-primary text-white bg-info bg-gradient' variant="primary" type="submit">
                        GitHub SignUp
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;