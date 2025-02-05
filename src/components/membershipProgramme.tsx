import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';

function MembershipProgramme() {
    const ulStyle = {
        marginLeft: "30px",
        listStyleType: "disc"
    };
    return (
        <div className='about-page'>
            <InternalHeader />
            <div className='container privacy-policy-page'>
                <h1>Membership Rules and Terms:</h1>
                <br />
                <h3>1. Membership Benefits</h3>
                <p>As an Auto Lending Canada Advantage Member, you gain access to:</p>
                <br />
                <ul style={ulStyle}>
                    <li style={{ listStyleType: "disc" }}><p><b>Exclusive Pre-Approval Status:</b>Priority processing for car loans to speed up your application.</p></li>
                    <li style={{ listStyleType: "disc", marginTop: "10px" }}><p><b>Bonus Savings Programs:</b>Access to exclusive offers and promotions through our partner network.</p></li>
                    <li style={{ listStyleType: "disc", marginTop: "10px" }}><p><b>Dedicated Member Support:</b>Priority customer support for all your financing inquiries.</p></li>
                    <li style={{ listStyleType: "disc", marginTop: "10px" }}><p><b>Auto Rewards Program:</b>Earn points for on-time payments and referrals, redeemable for discounts on future loans or other perks.</p></li>
                </ul>
                 <br />
                <h3>2. Eligibility</h3>
                <p>Membership is open to individuals who:</p>
                <br />
                <ul style={ulStyle}>
                    <li style={{ listStyleType: "disc" }}><p>Are 18 years or older.</p></li>
                    <li style={{ listStyleType: "disc", marginTop: "10px" }}><p>Reside in Canada and meet the requirements for applying for an auto loan.</p></li>
                </ul>
                <br />
                <h3>3. Membership Activation</h3>
                <p>Your membership is automatically activated upon completing your loan application with Auto Lending Canada. There are no additional fees to join.</p>

                <br />
                <h3>4. Program Governance</h3>
                <p>This program is governed by the Rules of the Auto Lending Canada Advantage Membership Program (outlined below). By becoming a member, you agree to these rules and any updates to the program communicated by Auto Lending Canada.</p>

                <br />
                <h3>5. Member Responsibilities</h3>
                <p>As a member, you:</p>
                <br />
                <ul style={ulStyle}>
                    <li style={{ listStyleType: "disc" }}><p>Consent to Auto Lending Canada and its partners obtaining credit reports and related information to process your car loan.</p></li>
                    <li style={{ listStyleType: "disc", marginTop: "10px" }}><p>Agree to provide accurate and up-to-date information in your application.</p></li>
                </ul>

                <br />
                <h3>6. Termination and Updates</h3>
                <p>Auto Lending Canada reserves the right to:</p>
                <br />
                <ul style={ulStyle}>
                    <li style={{ listStyleType: "disc" }}><p>Update the membership terms at any time.</p></li>
                    <li style={{ listStyleType: "disc", marginTop: "10px" }}><p>Suspend or terminate memberships for violation of program rules or misuse of benefits.</p></li>
                </ul>

                <br />
                <h3>7. Disclaimers</h3>
                <ul style={ulStyle}>
                    <li style={{ listStyleType: "disc" }}><p>Membership benefits cannot be combined with other offers unless explicitly stated.</p></li>
                    <li style={{ listStyleType: "disc", marginTop: "10px" }}><p>Auto Lending Canada Advantage Membership does not guarantee loan approval or specific rates. Approval and rates depend on creditworthiness and lender criteria.</p></li>
                </ul>
                <br />
                <hr/>
                <br />
                <p><b>Start enjoying the Auto Lending Canada Advantage today!</b></p>
                <p>If you have any questions, please feel free to contact our dedicated member support team.</p>
            </div>
        </div>
    );
}

export default MembershipProgramme;
