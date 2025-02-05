import React from 'react';
import '../stepper.css';
import '../responsive.css';

function VerificationCode() {
    return (
        <div className='apply-stepper header-marging'>
            <div className="stepper-progress-container">
                <div className='stepper-progress'>
                    <div className='stepper-complete' style={{ width: '100%' }}>
                        <img src={require(`../images/stepper.webp`)} alt="Stepper" />
                    </div>
                </div>
            </div>
            <div>
                <div className='stepper-content'>
                    <div className="stepper-question">
                        <div className='stepper-title-sec'>
                            <span className='stepper-question-title'>Enter verification code:</span>
                        </div>
                        <span className='stepper-time'>Almost Done</span>
                    </div>
                    <div className="stepper-input">
                        <div className='stepper-text-input' style={{ maxWidth: "636px" }}>
                            <span className="input-guide">Please enter the 4 digit code we sent to<br />(905) 000-XXXX</span>
                            <span className='text-input verification-code-input'>
                                <input type='number' max="9" className='' value="" name="verification_code_1" />
                                <input type='number' max="9" className='' value="" name="verification_code_2" />
                                <input type='number' max="9" className='' value="" name="verification_code_3" />
                                <input type='number' max="9" className='' value="" name="verification_code_4" />
                            </span>
                        </div>
                        <div className='stepper-btn'>
                            <button type='button' className='secondary-btn'>Back</button>
                            <button type='button' className='primary-btn'>Verify</button>
                        </div>
                        <div className="stepper-desc verify-desc">
                            <a href='#'>
                                Call me instead
                            </a>
                            <a href='#'>
                                Resend Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerificationCode;
