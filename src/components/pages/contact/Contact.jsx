import React from 'react';
import '../contact/Contact.css'
import GoogleMap from '../home/GoogleMap';

const Contact = () => {
    return (

        <div>
            <GoogleMap></GoogleMap>
            <div className='px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-10 py-20'>
                <section className="main_form flex flex-col md:flex-row">
                    <div className="from_section p-5">
                        <h1 className="text-3xl md:text-4xl mb-10">Contact Us</h1>
                        <p className="mb-9">
                            Please fill out the contact form below detailing your inquiry and we
                            will get back to you within 2 business days.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input className='hover:border-[#093F7C]' type="text" name="name" placeholder="Name*" />
                            <input type="email" name="email" placeholder="Email*" />
                            <input type="text" name="subject" placeholder="Subject*" />
                            <textarea
                                className="mt-5"
                                name="message"
                                id="#"
                                cols="10"
                                rows="5"
                                placeholder="Message"
                            />
                            <input className="baton mt-3 rounded-sm" type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="flex flex-col justify-center p-5">
                        <p className="mt-20">
                            For all inquiries, please call our main reception between 8.30am-4.30pm:
                            425-526-4600
                        </p>

                        <p className="mt-20">
                            30355 SE Highpoint Way
                            <br />
                            Preston, WA 98050
                        </p>
                        <p className="mt-5">
                            Tel: 425-526-4600
                            <br />
                            Email: brandy@allstarkiddos.com
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Contact;