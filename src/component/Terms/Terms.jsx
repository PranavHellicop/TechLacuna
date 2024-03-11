import React from 'react'
import { Container } from "../index"


const Terms = () => {
    return (
        <Container>
            <div className='m-5 flex flex-col space-y-5 mt-7' >
                <div className='flex lg:flex-row flex-col justify-between items-center p-3 lg:space-x-5 space-y-3 mb-10'>
                    <div className='lg:w-1/2 w-full rounded-r-full border-8 border-r-light_dark-2 border-l-0 border-t-0 border-b-0'>
                        <img src="./Images/privacy1.svg" alt="image" className='w-3/4' />
                    </div>
                    <div className='lg:w-1/2 w-full flex space-y-3 flex-col'>
                        <h1 className='text-center text-5xl font-josefin font-extrabold'>Terms and Conditions</h1>
                        <p className='text-sm'>Welcome to TechLacuna AI’s website (TechLacuna AI.). By accessing or using any part of the Site, you agree to be bound by these terms and conditions (“Terms”). If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms are considered an offer, acceptance is expressly limited to these Terms.</p>
                        

                    </div>

                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Services</h2>
                    <p className='lg:text-lg text-sm'>TechLacuna AI provides various digital services, including but not limited to website development, digital marketing, app development, and other related services. By using any of our services, you agree to be bound by these Terms.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2  font-semibold font-josefin'>Products</h2>
                    <p className='lg:text-lg text-sm mb-1'>TechLacuna AI also provides digital products, including but not limited to e-books, content, stickers, templates, and other related products. By purchasing any of our products, you agree to be bound by these Terms.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Payment</h2>
                    <p className='lg:text-lg text-sm mb-1'>Payment for any services or products will be made in the manner specified on the Site. Prices for services or products may be subject to change without notice.</p>
    
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Refund policy</h2>
                    <p className='lg:text-lg text-sm mb-1'>TechLacuna AI strives to provide the best possible service and products to its customers. If you are not satisfied with our services or products, please contact us for a refund. Refunds will be provided at the sole discretion of TechLacuna AI and will be subject to certain conditions, such as the condition of the product or service.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Intellectual property</h2>
                    <p className='lg:text-lg text-sm mb-1'>All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of TechLacuna AI or its content suppliers and is protected by Indian and international copyright laws. You may not copy, reproduce, distribute, or create derivative works from any content on the Site without the prior written consent of TechLacuna AI.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Disclaimer of warranties</h2>
                    <p className='lg:text-lg text-sm mb-1'>TechLacuna AI makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site. You expressly agree that your use of the Site is at your sole risk.</p>

                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Limitation of liability</h2>
                    <p className='lg:text-lg text-sm mb-1'>Under no circumstances shall TechLacuna AI be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Site or any of our services or products.</p>

                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Governing law</h2>
                    <p className='lg:text-lg text-sm mb-1'>These Terms and your use of the Site shall be governed by and construed in accordance with the laws of India.</p>

                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Changes to terms</h2>
                    <p className='lg:text-lg text-sm mb-1'>TechLacuna AI reserves the right to modify these Terms at any time without prior notice. Your continued use of the Site after any such modifications shall constitute your acceptance of these Terms as modified.</p>
                </div>
                <div>
                    <h2 className='text-3xl mb-2 font-semibold font-josefin'>Contact Us</h2>
                    <p className='lg:text-lg text-sm mb-1'>If you have any questions or concerns about these Terms, please contact us at contact@mranandtech.com..</p>
                </div>
                <p>Thank you for visiting TechLacuna AI.</p>
            </div>
        </Container>

    )
}

export default Terms