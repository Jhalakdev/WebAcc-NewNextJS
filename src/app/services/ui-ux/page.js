'use client'
import Footer from '@/app/components/Footer/Footer'
import Canvas from './Canvas'
import uiux from './uiux.module.css'
import LocoScroll from '../../../../hooks/LocoScroll'
import { useEffect } from 'react'
export default function UIUX() {
    // LocoScroll(true);
    useEffect(function () {
        if (window.innerWidth > 900) {
            // document.getElementById('body').style.overflowY = 'hidden';
        }
    })
    return (


        <div data-scroll-container className={uiux.homePage}>
            <div className={uiux.hero}>

                <div className={uiux.text + ' ' + uiux.herotext}>

                    <h1>Premium
                        <span>UI/UX</span>
                        <br />
                        Designers in Ranchi.</h1>
                    <p>At Web Accuracy, we specialize in creating stunning and intuitive user experiences that leave a lasting impression.</p>
                    <button>Get in touch</button>
                </div>
                <Canvas />
            </div>
            <div className={uiux.sec1}>
                <div className={uiux.carousel}>
                    <div className={uiux.carouselslider}>
                        <img src='/1.jpg' />
                        <img src='/2.jpg' />
                        <img src='/3.jpg' />
                        <img src='/4.jpg' />
                        <img src='/5.jpg' />
                    </div>
                    <div className={uiux.carouselslider}>
                        <img src='/1.jpg' />
                        <img src='/2.jpg' />
                        <img src='/3.jpg' />
                        <img src='/4.jpg' />
                        <img src='/5.jpg' />
                    </div>
                </div>
            </div>
            <div className={uiux.sec2}>
                <div className={uiux.text}>
                    <h1>We deliver <span>premium</span> UX/UI Design faster, better and more affordably.</h1>
                    <p>Take your product to the next level with our affordable, high-quality design service and win more clients through stunning UX/UI Design.</p>
                </div>
                <div className={uiux.services}>
                    <div className={uiux.service}>
                        <div className={uiux.left}>

                            <div className={uiux.text}>
                                <span>Service 1</span>
                                <h1>UI Design</h1>
                                <p> Our expert UI designers will create visually appealing interfaces that captivate users. We pay meticulous attention to color schemes, typography, and layout to ensure a cohesive and appealing design.</p>
                            </div>
                        </div>
                        <div className={uiux.right}>
                            <img src='/1.jpg' />
                        </div>
                    </div>
                    <div className={uiux.service + ' ' + uiux.even}>
                        <div className={uiux.left}>
                            <div className={uiux.text}>
                                <span>Service 2</span>
                                <h1>UX Design</h1>
                                <p>User experience is at the heart of what we do. Our UX designers focus on creating seamless and enjoyable interactions for your visitors, enhancing user satisfaction and encouraging conversions.</p>
                            </div>
                        </div>
                        <div className={uiux.right}>
                            <img src='/2.jpg' />
                        </div>
                    </div>
                    <div className={uiux.service}>
                        <div className={uiux.left}>
                            <div className={uiux.text}>
                                <span>Service 3</span>
                                <h1>Mobile App Design</h1>
                                <p>In the age of mobile, having a user-friendly and visually appealing mobile app is crucial. Our designers are skilled in crafting mobile app interfaces that provide a consistent experience across devices.</p>
                            </div>
                        </div>
                        <div className={uiux.right}>
                            <img src='/3.jpg' />
                        </div>
                    </div>
                    <div className={uiux.service + ' ' + uiux.even}>
                        <div className={uiux.left}>
                            <div className={uiux.text}>
                                <span>Service 4</span>
                                <h1>Responsive Design</h1>
                                <p>Every website we design is fully responsive, ensuring optimal performance and visual appeal on various devices, including smartphones, tablets, and desktops.</p>
                            </div>
                        </div>
                        <div className={uiux.right}>
                            <img src='/4.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
}