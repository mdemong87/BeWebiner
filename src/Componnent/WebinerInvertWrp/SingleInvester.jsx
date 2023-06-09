import React from 'react';
import Container from "react-bootstrap/Container";
import { BsFillDatabaseFill, BsLightbulbFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";



export default function SingleInvester({ imge }) {
    return (
        <div className='singleInversterWrper'>
            <Container>
                <div className='w-100 p-3'>
                    <img className='w-100' src={imge} alt="" />
                </div>
                <div>
                    <div className='w-75 m-auto mt-5 d-flex align-items-center justify-content-between singeInverterItems'>
                        <div className='d-flex align-items-center gap-1 pt-4'>
                            <FaLayerGroup className='inversterIcons' />
                            <div className='d-flex flex-column dddd'>
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-1 pt-4'>
                            <BsFillDatabaseFill className='inversterIcons' />
                            <div className='d-flex flex-column dddd'>
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-1 pt-4'>
                            <BsLightbulbFill className='inversterIcons' />
                            <div className='d-flex flex-column dddd'>
                                <h3>Lorem, ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-50 m-auto mt-5'>
                        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam beatae nemo odit consequatur laudantium, optio exercitationem quibusdam, rem officia ratione itaque culpa praesentium dolor commodi, magni nobis quam! Esse, aliquam?  rem officia ratione itaque culpa praesentium dolor commodi, magni nobis quam! Esse, aliquam?</p>
                        <button className='mt-5 SignUptodayBtn'>Sign Up Now</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
