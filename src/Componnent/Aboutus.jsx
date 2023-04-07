import React from 'react';
import Container from '../.../../Componnent/Container';
import infoIcons from "../assest/image/webinar-about-info-icon.png";
import singnature from "../assest/image/webinar-about-singnature.png";

export default function Aboutus() {
    return (
        <div className='aboutWrper pb-5'>
            <div className='d-flex align-items-center justify-content-center aboutWrperOne'>
                <h1 className='text-light text-center h1'>We are BeWebinar<br />
                    Meet our team</h1>
            </div>
            <div className='aboutWrperTwo'>
                <Container>
                    <div className='aboutbox'>
                        <h3 className='text-center'>About</h3>
                        <h3 className='text-center pt-3'>Michael Errloth</h3>
                        <p className='text-center pt-3'>Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo sis.</p>
                        <p className='text-center pt-3'>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodnas accumsan.</p>
                        <span className='text-center pt-5'>
                            <img src={singnature} alt="" />
                        </span>
                    </div>
                </Container>
            </div>



            {/* about us second section */}
            <Container>
                <div className='row mt-5 mb-5'>
                    <div className='col-sm-12 col-md-8'>
                        <h2>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ n voluptate velit esse</h2>
                        <div className='d-flex flex-column'>
                            <div className='d-flex gap-5 align-items-center mt-4 mb-4'>
                                <div className='h1'>1</div>
                                <div className='text-muted'>
                                    Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio. Vestibulum vehicula tempor nulla, sed hendrerit urna interdum in. Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus commodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper.</div>
                            </div>



                            <div className='d-flex gap-5 align-items-center mt-4 mb-4'>
                                <div className='h1'>2</div>
                                <div className='text-muted'>
                                    Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus commodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper.</div>
                            </div>







                            <div className='d-flex gap-5 align-items-center mt-4 mb-4'>
                                <div className='h1'>3</div>
                                <div className='text-muted'>
                                    Phasellus venenatis leo eu semper varius. Maecenas sit amet molestie leo. Morbi vitae urna mauris. Nulla nec tortor vitae eros iaculis hendrerit aliquet non urna. Nulla sit amet vestibulum magna, eget pulvinar libero.</div>
                            </div>




                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <div className='h-75 w-75 flex-column gap-5 p-3 d-flex align-items-center justify-content-center sideContainer'>
                            <div>
                                <img src={infoIcons} alt="" />
                            </div>
                            <div className='text-muted'>
                                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio
                            </div>
                        </div>
                    </div>
                </div>
            </Container>



        </div>
    )
}
