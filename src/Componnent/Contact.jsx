import React from 'react';
import Container from "../Componnent/Container";
import contactIcons from "../assest/image/webinar-contact-pricing-icon.png";
import contactIconsTwo from "../assest/image/webinar-contact-pricing-icon2.png";


export default function Contact() {

    return (
        <div>
            <section className='contactFrist d-flex align-items-center justify-content-center'>
                <h1 className='w-50 text-center'>Sign up today
                    and learn how to invest
                    with Michael Errolth</h1>
            </section>
            <section>
                <h1 className='text-center'>Fill the form</h1>
                <Container>
                    <form className='w-75 m-auto mt-4 d-flex flex-column' action="">
                        <input className='border mb-4 p-2' type="text" placeholder='Full Name' />
                        <input className='border mb-4 p-2' type="email" placeholder='Email' />
                        <input className='border mb-4 p-2' type="text" placeholder='Message' />
                        <button className='sendMessagebtn'>Send Message</button>
                    </form>
                </Container>
            </section>





            <section className=' mt-5 mb-5'>
                <Container>
                    <div className='w-75 m-auto'>

                        <div className='text-center'>
                            <h1 className='pt-5'>Choose your pricing plan</h1>
                            <p className='p-3'>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris.</p>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 text-center border'>
                                <div>
                                    <img className='w-50 m-4' src={contactIcons} alt="" />
                                </div>
                                <div>
                                    <h1>Standard</h1>
                                    <div><span className='h2'>$39/</span>monthly</div>
                                </div>
                                <div className='text-muted pt-4'>
                                    <div className='p-1'>Dolor sit amet</div>
                                    <div className='p-1'>Lorem ipsum + Quanta</div>
                                    <div className='p-1'>Consectetur adipisic</div>
                                    <div className='p-1'>Lorem ipsum</div>
                                    <button className='viewBtn one'>View More details</button>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 card text-center'>
                                <div>
                                    <img className='w-50 m-4' src={contactIconsTwo} alt="" />
                                </div>
                                <div className='pt-5'>
                                    <h1>Pro</h1>
                                    <div><span className='h2'>$59/</span>monthly</div>
                                </div>
                                <div className='text-muted pt-4'>
                                    <div className='p-1'>Dolor sit amet</div>
                                    <div className='p-1'>Lorem ipsum + Quanta</div>
                                    <div className='p-1'>Consectetur adipisic</div>
                                    <div className='p-1'>Lorem ipsum</div>
                                    <button className='viewBtn'>View More details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


        </div>
    )
}
