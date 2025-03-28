import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import { Helmet } from "react-helmet-async";

function TermsOfUSe() {
    const ulStyle = {
        marginLeft: "30px",
        listStyleType: "disc"
    };
    return (
        <>
         <Helmet>
                <meta charSet="UTF-8" />
                <title>Terms of Service | Auto Lending Canada</title>
                <meta 
                    name="description" 
                    content="In the event you are interested in purchasing and obtaining financing for a Vehicle, we may put you in touch with an authorized motor vehicle dealer." 
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/terms-of-use" />

                {/* Open Graph Metadata for Social Sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Terms of Service | Auto Lending Canada" />
                <meta 
                    property="og:description" 
                    content="In the event you are interested in purchasing and obtaining financing for a Vehicle, we may put you in touch with an authorized motor vehicle dealer." 
                />
                <meta property="og:url" content="https://autolendingcanada.ca/terms-of-use" />
            </Helmet>

        <div className='about-page'>
            <InternalHeader />
            <div className='container privacy-policy-page'>
                <p><b>Overview</b></p>
                <br />
                <p>These terms of use (“<b>Terms</b>”) constitute a binding legal agreement between Auto Lending Canada Ltd. DBA Auto Lending Canada and any affiliates or subsidiaries through which we may operate (referenced herein as “<b>Auto Lending Canada</b>,” “<b>us</b>”, “<b>we</b>”, or “<b>our</b>”). These Terms govern your use of our website, accessible at <a target='_blank' href='https://autolendingcanada.ca/'>www.autolendingcanada.ca</a> (the “<b>Website</b>”). By using or accessing the Website you agree to be bound by these Terms. If you do not agree with or accept any of these Terms, you may not access the Website.</p>
                <br />
                <p>By using the Website you represent and warrant that you are above the age of 19 or the age of majority in your jurisdiction. If you are using the Website on behalf of a separate legal entity such as a corporation, then you affirm that you are an authorized representative or agent of that entity with the authority to bind such entity, and agree to these terms on behalf of such entity. In such a circumstance, both you and the entity will be bound by these Terms and the words “you” and “your” as used in these terms will refer to and apply to both you personally and the entity.</p>
                <br />
                <p>We reserve the right to modify the Terms at any time by posting a revised notice of the Terms on the Website. Your continued use or the Website constitutes acceptance of these Terms.</p>
                <br />
                <p><b>Website Provided for Informational Purposes Only</b></p>
                <br />
                <p>The Website contains information regarding vehicles that may be available for purchase (“Vehicles”), including pricing information as well as information regarding make, model, and features of such Vehicles. The Website also contains general information about our credit application process, including that provided in the “FAQ” section of our Website. Such information is provided for informational purposes only, and does not constitute an offer to sell such Vehicles on the terms set out on the Website or confirmation that you qualify for financing for such Vehicles.</p>
                <br />
                <p><b>We do not sell Vehicles or offer Vehicles for sale, including through the Website. In the event you are interested in purchasing and obtaining financing for a Vehicle, we may put you in touch with an authorized motor vehicle dealer. Any contract for the purchase of a Vehicle shall be exclusively between yourself and VAC, and, without limiting the generality of any other section of these Terms, you hereby agree and acknowledge that we shall not be liable to you in any manner in respect to  the purchase of any Vehicle from VAC, or any steps in the associated credit approval process for such purchase.</b></p>
                <br />
                <p>We also make no representation or warranty regarding the information provided on the Website, including any information relating to Vehicles.  Without limiting the generality of the foregoing, while we attempt to provide accurate images and descriptions of the Vehicles, including colors, make and model and features, we make no representations and warranties of any nature regarding the accuracy of this information and we shall not be liable in any manner for the failure of any Vehicle to match the images and descriptions set out on the Website. You are responsible for confirming the features and specifications of such before agreeing to purchase any Vehicle.</p>
                <br />
                <p><b>Use of Website</b></p>
                <br />
                <p>You agree not to (a) use the Website  for any purpose that is unlawful under applicable law, tortious, or prohibited by these Terms, including any purpose that may be considered defamatory, discriminatory, fraudulent, or otherwise malicious or harmful to any person or entity or infringes, violates or misappropriates the intellectual property rights of any third party; (b) use the Website impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity; (c) access or attempt to access the Website through automated queries including scrapers, spiders, robots, crawlers, indexing tools, or other automated tools for the purposes of obtaining information from the Website in an automated manner; (d) harvest or otherwise collect, use or disclose personal information about users of the Website; (e) mirror, frame, or otherwise simulate the appearance or functionality of the Website; (f) inhibit any person’s use or access of the Website or impair any element of the Website or its underlying infrastructure, including through accessing the Website in a manner that could disable, overburden or place an unreasonable load on the Website’s infrastructure; (g) reverse engineer, decompile, copy, modify, distribute, transmit, license, sublicense, display, revise, perform, transfer, sell or otherwise make available to any third party or otherwise publish, deep-link, create derivative works from or exploit in any way the Website or its content; (h) upload to the Website, or use the Website to distribute, viruses, trojans, malware or other harmful software code of any nature.</p>
                <br />
                <p><b>Intellectual Property</b></p>
                <br />
                <p>The Website and materials provided on the Website are the intellectual property of Auto Lending Canada and we reserve all right to the same. Nothing in these Terms shall act as a license or assignment to such materials unless expressly specified by us. You may not copy, modify, create derivative works based upon, publicly display or otherwise commercially exploit the Website or materials in any manner without our express written permission.</p>
                <br />
                <p><b>Third Party Content</b></p>
                <br />
                <p>From time to time we may link to other websites or content providers or provide third-party content on our Website solely as a convenience to you. Additionally, our Website or content may be available through third-party providers. When accessing the Website through a third party, your use of the Website may also be subject to the terms and conditions, and privacy policy, of such third party. We do not endorse, guarantee, provide any representations or warranties, or assume any responsibility or liability for any products or services provided by such third-party providers.</p>
                <br />
                <p><b>Representations and Warranties</b></p>
                <br />
                <p>In addition to and not in derogation of any other representations and warranties you provide to us in these Terms, you represent and warrant to us that: (a) you are at least nineteen (19) years old and have reached the age of majority in the jurisdiction where you reside; (b) the performance of your obligations under these Terms will not violate, conflict with, or result in a default under any other agreement, including confidentiality agreements between you and third parties; (c) you are using the Website in a jurisdiction where access to, and use of, the Website (or any part thereof) is not prohibited or illegal; (d) your User Content does not violate the privacy rights, intellectual property rights, or any other rights, of any third party; (e) you understand the contents of these Terms and have had the opportunity to obtain legal advice with respect to these Terms before agreeing to be bound by them; and (f) you have the capacity and authority to enter into and perform your obligations under, these Terms.</p>
                <br />
                <p><b>Disclaimer and Limitation of Liability</b></p>
                <br />
                <p>THE WEBSITEAND ANY PRODUCTS OR SERVICES AVAILABLE THROUGH THE WEBSITE ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY REPRESENTATIONS, WARRANTIES, OR CONDITIONS OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AUTO LENDING CANADA HEREBY DISCLAIMS ALL CONDITIONS OR WARRANTIES WHATSOEVER, WHETHER STATUTORY, EXPRESS, OR IMPLIED, WITH RESPECT TO THE WEBSITE OR SUCH PRODUCTS AND SERVICES. WITHOUT LIMITING THE FORGOING, THE WEBSITE AND ANY PRODUCTS AND SERVICES AVAIBALE THROUGH THE WEBSITE ARE  PROVIDED WITHOUT STATUTORY, IMPLIED, OR EXPRESS WARRANTIES OR CONDITIONS OF MERCHANTABILITY, QUALITY, PERFORMANCE, FITNESS FOR A PARTICULAR PURPOSE, COMPLETENESS, ACCURACY, CURRENCY, RELIABILITY, EFFECTIVENESS, USABILITY, OR NON-INFRINGEMENT. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING YOU AGREE AND ACKNOWLEDGE THAT NO OFFER TO PURCHASE A VEHICLE IS MADE THROUGH THE WEBSITE AND NO REPRESENTATIONS  AND WARRANTIES ARE MADE IN RESPECT TO ANY VEHICLE THROUGH THE WEBSITE.</p>
                <br />
                <p>ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING IN ANY WAY TO THESE TERMS OF USE, YOUR USE OF THE WEBSITE OR PRODUCTS OR SERVICES AVAILABLE THROUGH THE WEBSITE MUST BE COMMENCED IN ARBITRATION WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. AFTER THAT ONE (1)-YEAR PERIOD, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.</p>
                <br />
                <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AUTO LENDING CANADA OR ITS DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, JOINT VENTURES, LICENSORS (EXCEPT OTHER USERS), AGENTS, AFFILIATES, SUCCESSORS, ASSIGNS, OR SUBSIDIARIES (COLLECTIVELY, THE “REPRESENTATIVES”) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR OR RELATED TO LOSS OF PROFITS, LOSS OF REVENUES, PROPERTY DAMAGE, LOSS OF GOODWILL, USE, DATA LOSS, PERSONAL INJURY, LOST OPPORTUNITIES, DAMAGE TO REPUTATION, COMMERCIAL LOSS, FINANCIAL LOSS, OR ECONOMIC LOSS, OR INTANGIBLE LOSSES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER THEORY OR BASIS OF LIABILITY. THE FOREGOING LIMITATION SHALL APPLY EVEN IF AUTO LENDING CANADA, OR AUTO LENDING CANADA’S REPRESENTATIVES, HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                <br />
                <p><b>Disputes</b></p>
                <br />
                <p><b>You agree that in the event of any dispute between you and Auto Lending Canada arising out of or relating to these Terms or relating to the Products sold by Auto Lending Canada, that you and Auto Lending Canada shall consult and negotiate a resolution in good faith. If we do not reach settlement within a period of ninety (90) days, then such dispute shall be referred to and finally resolved by mandatory and binding arbitration in accordance with the Arbitration Act (British Columbia). The place of arbitration shall be Vancouver, British Columbia, Canada, the number of arbitrators shall be one, and the language of the arbitration shall be English. </b></p>
                <br />
                <p><b>If the courts or applicable law in your province, state, or country will not permit you to consent to binding arbitration, then any legal suit, action, or proceeding arising out of or related to this Agreement will be instituted exclusively in the courts of the Province of British Columbia, Canada, and you irrevocably submit to the exclusive jurisdiction of such courts in any such suit, action, or proceeding.</b></p>
                <br />
                <p><b>You agree to waive any right you may have to commence or participate in any class action against Auto Lending Canada, and you also agree to opt out of any class proceedings against Auto Lending Canada. You also agree to waive any right you may have to participate in a trial by jury with respect to any dispute you may have with Auto Lending Canada.</b></p>
                <br />
                <p><b>Privacy</b></p>
                <br />
                <p>We take your privacy seriously. To find out about how we collect, share and use your content and information, please read our Privacy Policy, available at <a href='https://autolendingcanada.ca/privacy-policy'>www.autolendingcanada.ca/privacypolicy/</a>. The Privacy Policy forms part of these Terms and is incorporated by reference.</p>
                <br />
                <p><b>General</b></p>
                <br />
                <p>You agree and acknowledge that: (a) Nothing in these Terms affects consumer rights that, pursuant to applicable law, cannot be limited or waived; (b) Auto Lending Canada may terminate these Terms or stop providing the Website at any time in its sole discretion; (c) these Terms constitute the entire agreement between you and Auto Lending Canada with respect to the subject matter contained herein, and supersedes all prior and contemporaneous understandings, agreements, representations and warranties, both written and oral, with respect to such subject matter; (d) we may assign these Terms in part or in their entirety, including our rights, interests, and obligations hereunder, on written notice to you. These Terms are personal to you and you may not assign these Terms to any person; (e) Our failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision; (f) to the extent permitted by applicable law, the parties hereby waive any provision of law that would render any clause of these Terms invalid or otherwise unenforceable in any respect. In the event that a provision of these Terms is held to be invalid or otherwise unenforceable, such provision will be interpreted to fulfill its intended purpose to the maximum extent permitted by applicable law, and the remaining provisions of these Terms will continue in full force and effect; (g) unless the context otherwise requires, words importing the singular include the plural and vice versa, and words importing gender include all genders. Where the word “including” or “includes” is used in these Terms, it means “including (or includes) without limitation;” (h) these Terms will enure to the benefit of and be binding upon the parties to these Terms and their respective successors, heirs and permitted assigns.</p>
                <br />
                <p><b>Effective Date</b></p>
                <br />
                <p>These Terms are dated and effective as of October 2, 2023.</p>
            </div>
        </div>
        </>
    );
}

export default TermsOfUSe;
