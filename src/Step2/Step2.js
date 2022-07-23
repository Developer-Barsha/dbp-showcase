import React from 'react';
import './Step2.css';
import button_logo from '../images/showcase-button-logo.png';

const Step2 = () => {
    return (
        <div>
            <div className='step2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" alt="" />
                <h3>Install our app on Shopify store :</h3>

                <button className='showcase-btn'>
                    <p>Install Showcase</p>
                    <div>
                        <img src={button_logo} alt="" />
                    </div>
                </button>


                {/* bottom text */}

            </div>
            <div className='bottom_text'>
                <p>Already have an account? Sign in</p>
                <button className='step'>Next step</button>
            </div>
        </div>
    );
};

export default Step2;
