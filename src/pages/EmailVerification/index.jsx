import React, { useState } from 'react';
import { useContext } from 'react';
import emailIcon from '../../resources/images/email-verification.jpg';
import TechPow_logo from '../../resources/Logos/TechPow Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../components/AppStateProvider';
import { toast } from 'react-toastify';

//importing the styles
import './style.css';

function EmailVerification() {
    const { state: { userEmail } } = useContext(AppContext);
    const [viewForm, setViewForm] = useState('');

    const ResendEmail = () => {

        const newEmail = {
            toEmail: userEmail,
            subject: "TechPow Registration Notification",
            body: "Dear " + userEmail + ". Thank you for completing you application on TechPow. Please click on the link below to login and complete your application."
        }
        //Calling api for email
        axios.post('https://localhost:44326/api/v1/Email/SendEmail',
            newEmail)
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    toast.success("Email has been resent!");
                }
                return false;
            }
            );

    }

    const displayChangeEmailForm = (div) => {
        setViewForm(div);
    }

    return (
        <div className="bg-pattern">
            <div className="verificationpage-header">
                <div>
                    <Link to="/">
                        <img src={TechPow_logo} alt="TechPow Logo" className="head-logo" />
                    </Link>
                </div>
                <div className="back-link">
                    <a href="/LandingPage"> &lt; Back to home</a>
                </div>
            </div>
            <div className="verification-container">
                <div className="ver-img-div">
                    <img className="email-img" src={emailIcon} alt="" />
                </div>
                <div>
                    <h4 className="center-text">Verify your Email</h4>
                </div>
                <div>
                    <p className="ver-text">
                        <span>An email has been sent to <strong>{userEmail}</strong> with instructions <br /> to complete your registration. If you have not received the email after a <br />few minutes, please check your spam folder.
                        </span></p>
                </div>
                <div className="resend-btn">
                    <button className="btn btn-primary" onClick={ResendEmail}>Resend Email </button>
                </div>
                <div className="incorrectemail-div">
                    <p className="ver-text">Incorrect Email address?</p><span className="green change-email" onClick={() => displayChangeEmailForm("change-email-container")}> Change it here</span>
                </div>
                {viewForm === "change-email-container" &&
                <div className="change-email-container">
                    <form>
                        <input
                            type="text"
                            className="donee-text-input white-hover email-form"
                            placeholder="mynewemail@gmail.com"
                        />
                        <button className="btn-primary">
                            Change email
                        </button>
                    </form>
                </div>
                }

            </div>

        </div >

    );
}
export default EmailVerification;;