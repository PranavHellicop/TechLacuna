import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from "../index"
// import "./privacy.css"
// import "./styles.css"

const PrivacyPolicy = () => {
    return (
        <Container>
            <div className='m-5 flex flex-col space-y-5 mt-7' >
                <div className='flex lg:flex-row flex-col justify-between items-center p-2 lg:space-x-5 space-y-3 mb-10'>
                    <div className='lg:w-1/2 w-full rounded-r-full border-8  border-r-light_dark-2 border-l-0 border-t-0 border-b-0'>
                        <img src="./Images/privacy2.svg" alt="" className='w-3/4 ' />
                    </div>
                    <div className='lg:w-1/2 w-full flex space-y-3 flex-col'>
                        <h1 className=' text-5xl font-josefin font-extrabold'>Privacy Policy</h1>
                        <p className='text-sm '>At TechLacuna AI, accessible from https://techlacuna.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TechLacuna AI and how we use it.</p>
                        <p className='text-sm '>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                        <p className='text-sm'>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in TechLacuna AI. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                    </div>

                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Consent</h2>
                    <p className='lg:text-lg text-sm'>By using our website, you hereby consent to our Privacy Policy and agree to its terms</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2  font-semibold font-josefin'>Information we collect</h2>
                    <p className='lg:text-lg text-sm mb-1'>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                    <p className='lg:text-lg text-sm mb-1'>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                    <p className='lg:text-lg text-sm mb-1'>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>How we use your information</h2>
                    <p className='lg:text-lg text-sm mb-1'>We use the information we collect in various ways, including to:</p>
                    <ul className='list-disc list-outside ml-8 lg:text-lg text-sm'>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Log Files</h2>
                    <p className='lg:text-lg text-sm mb-1'>TechLacuna AI follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Cookies and Web Beacons</h2>
                    <p className='lg:text-lg text-sm mb-1'>Like any other website, TechLacuna AI uses “cookies”. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Advertising Partners Privacy Policies</h2>
                    <p className='lg:text-lg text-sm mb-1'>You may consult this list to find the Privacy Policy for each of the advertising partners of TechLacuna AI.</p>
                    <p className='lg:text-lg text-sm mb-1'>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TechLacuna AI, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                    <p className='lg:text-lg text-sm mb-1'>Note that TechLacuna AI has no access to or control over these cookies that are used by third-party advertisers.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Third Party Privacy Policies</h2>
                    <p className='lg:text-lg text-sm mb-1'>TechLacuna AI’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
                    <p className='lg:text-lg text-sm mb-1'>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                    <p className='lg:text-lg text-sm mb-1'>Under the CCPA, among other rights, California consumers have the right to:</p>
                    <ul className='list-disc list-outside ml-8 lg:text-lg text-sm mb-1'>
                        <li>Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                        <li>Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.</li>
                    </ul>
                    <p className='lg:text-lg text-sm mb-1'>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>GDPR Data Protection Rights</h2>
                    <p className='lg:text-lg text-sm mb-1'>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <ul className='list-disc list-outside ml-8 lg:text-lg text-sm mb-1'>
                        <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                    </ul>
                    <p className='lg:text-lg text-sm mb-1'>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Children’s Information</h2>
                    <p className='lg:text-lg text-sm mb-1'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p className='lg:text-lg text-sm mb-1'>TechLacuna AI does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Changes to This Privacy Policy</h2>
                    <p className='lg:text-lg text-sm mb-1'>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Cancellation and Refund Policy for Digital Products</h2>
                    <p className='lg:text-lg text-sm mb-1'>Our digital products, including but not limited to software, e-books, and online courses, are non-tangible irrevocable goods. Therefore, we do not offer refunds or exchanges for digital products except in the following cases:</p>
                    <ul className='list-disc list-outside ml-8 lg:text-lg text-sm mb-1'>
                        <li>If the product is defective or not as described.</li>
                        <li>If you accidentally purchase the same digital product twice.</li>
                    </ul>
                    <p className='lg:text-lg text-sm mb-1'>If you encounter any issues with our digital products, please contact us within 24hrs of purchase to request a refund or resolution. We may ask you to provide proof of purchase and/or describe the issue you’re experiencing.</p>
                    <p className='lg:text-lg text-sm mb-1'>We reserve the right to amend or update this policy at any time without notice. By using our website and purchasing our digital products, you agree to be bound by this policy.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Contact Us</h2>
                    <p className='lg:text-lg text-sm mb-1'>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
                </div>
            </div>
        </Container>

    )
}

export default PrivacyPolicy