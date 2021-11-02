import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder" style={{ height: '400px' }}
                        src='https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder" style={{ height: '400px' }}
                        src='https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder" style={{ height: '400px' }}
                        src='https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;