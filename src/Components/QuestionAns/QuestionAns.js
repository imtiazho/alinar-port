import React from 'react';
import './QuestionAns.css';

const QuestionAns = () => {
    return (
        <div id='faq'>
            <h2 className='sention-title'> <p>Alinar</p>Frequently Asked Questions</h2>
            <div class="accordion">
                <div>
                    <input type="radio" name="example_accordion" id="section1" class="accordion__input" />
                    <label for="section1" class="accordion__label">Do you have any outlets?</label>
                    <div class="accordion__content">
                        <p>We don't have an outlet yet but InshAllah we are planning to set up an outlet very soon.</p>
                    </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section2" class="accordion__input" />
                    <label for="section2" class="accordion__label">Your product return policy?</label>
                    <div class="accordion__content">
                        <p>You must provide us with the customer's name, number and address so that we can provide warranty service as applicable. In the case of customer returns, we will only accept the returned item if it is returned to us in an undamaged condition. Body dented/damaged packaging/seal broken product or any other condition which renders the product unsalable, will not be admissible to claim under return policy.</p>
                    </div>
                </div>
                <div>
                    <input type="radio" name="example_accordion" id="section3" class="accordion__input" />
                    <label for="section3" class="accordion__label">Do you make your products in your own factory?</label>
                    <div class="accordion__content">
                        <p>Yes! We manufacture the products meticulously in our own factory by skilled craftsmen.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAns;