// FullPageComponent.js

import React, { useRef, useEffect } from 'react';
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";


// import fullpage from 'fullpage.js/dist/fullpage.extensions.min'; // Import the fullpage library
import "./vendors/bootstrap/css/bootstrap.css";
import './vendors/fontawesome/css/all.css';
import {useLocation} from "react-router";
import './index.css';

function FullPageComponent({getCredentials}) {
    const fullpageRef = useRef(null);
    const location = useLocation();
    const credentials = getCredentials();
    const stalked = Math.floor(Math.random() * (120393 - 1023 + 1)) + 1023;
    useEffect(() => {
        // Initialize fullPage.js when the component mounts
        if (fullpageRef.current) {
            new fullpage(fullpageRef.current, {
                 anchors: ['firstPage', 'secondPage', 'thirdPage'],
                // Add your fullpage.js configurations here
                // For example:
                // sectionsColor: ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71'],
            });
        }
    }, []);

    return (
        <div ref={fullpageRef}>
            {/* Content for each fullPage.js section */}
            <div className="section slide-1" data-anchor="page-1">

                <div className="text-center">
                    <h1>Welcome   [ {credentials.username} ]</h1>
                    <div>
                        <span >Are you ready? It's time to unlock your 2023 recap</span>

                    </div>
                    <a href="#secondPage"><button className="btn btn-outline-dark mt-4 btn-lg">Lets go</button></a>

                </div>


            </div>
            <div className="section slide-2" data-anchor="page-2">

                <div className="slide" data-anchor="slide1">
                    <div className="text-center">

                        <span>This year you explored a wide range of personas</span>
                        <span>How did your scrolling habits size up?</span>


                    </div>
                </div>

                <div className="slide" data-anchor="slide2">
                    <div className="text-center">
                        <div className="persona-1">
                            <div className="">
                                <h4>Person1</h4>
                            </div>

                        </div>
                    </div>

                </div>




            </div>
            <div className="section slide-3" data-anchor="page-3">
                <div>
                    <span >In 2023 you were quite the detective 🔎</span>

                </div>
            </div>
            <div className="section slide-4" data-anchor="page-4">
                <div className="text-center">
                    <h1>You browsed {stalked} profiles</h1>

                <p>
                    But there was one that <span className="text-decoration-underline">really</span> called your attention
                </p>

                </div>
            </div>

            <div className="section slide-5">


                <div className="slide" data-anchor="slide1">
                    <div className="text-center">
                        <h1>The account you stalked the most was ...</h1>


                        <div className="">
                            <img src="/annabelleprofile.png"></img>
                        </div>



                        <h3>@ XYZ</h3>



                        <p>
                            You scrolled through their profile {Math.floor(stalked/17)} times this year, which puts you in their top, 5 stalkers.
                        </p>
                        <h4>You've really gotten to know them now</h4>
                    </div>
                </div>

                <div className="slide" data-anchor="slide2">
                    <div className="text-center">
                        <span>You might think your digital footprint goes unnoticed, but we keep track </span>
                    </div>
                </div>

                <div className="slide" data-anchor="slide3">
                    <div className="text-center">
                        <img src="question2,1.jpeg" alt="Girl in a jacket" width="500" height="600"/>
                        {/*<span>You admired xys post for {Math.floor(stalked/13.4)} minutes  </span>*/}
                    </div>
                </div>


            </div>

            <div className="section slide-6">


                <div className="slide" data-anchor="slide1">
                    <div className="text-center">
                        <h1>Enough about them, what about you?</h1>
                        <span> Your followers couldn't get enough of your content, but only one couldn't look away </span>
                    </div>
                </div>
                <div className="slide" data-anchor="slide2">
                    <div className="text-center">

                        <h3> Spent {Math.floor(stalked/3.4)} on your profile looks like you have a secrete admier </h3>
                    </div>
                </div>

            </div>

            <div className="section slide-7">
                <div className="text-center">
                    <h1>
                        You posted {stalked/155} this year, but this one came on top
                    </h1>
                </div>
            </div>

            <div className="section slide-8">
                <div className="text-center">
                    <h1> post info  </h1>
                </div>
            </div>

            <div className="section slide-9">
                <div className="text-center">
                    <h1>That was fun.</h1>
                    <h1>Same time next year?</h1>
                </div>
            </div>


        </div>
    );
}

export default FullPageComponent;
