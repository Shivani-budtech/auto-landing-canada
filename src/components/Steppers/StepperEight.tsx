import React, { useEffect } from 'react';
import $ from 'jquery';
import 'select2'; // Import Select2 jQuery plugin
import 'select2/dist/css/select2.min.css';

const StepperEight = ({ formData, setFormData, nextStep, prevStep }) => {

    useEffect(() => {
        // Initialize Select2 for the first select box
        $('#income_year').select2({
            placeholder: 'Select Year',
            minimumResultsForSearch: -1
        }).on("change", function () {
            setFormData({ ...formData, income_year: this.value })
        });

        // Initialize Select2 for the second select box
        $('#income_month').select2({
            placeholder: 'Select Month',
            minimumResultsForSearch: -1
        }).on("change",function(){
            setFormData({ ...formData, income_month: this.value })
        });

        
    });

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>How long have you been receiving this income?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input'>
                        <span>
                            Select Year
                        </span>
                        <div className="form-input">
                            <select id="income_year">
                            <option value="option1" selected={formData.income_year === "option1"}>Option 1</option>
                            <option value="option2" selected={formData.income_year === "option2"}>Option 2</option>
                            <option value="option3" selected={formData.income_year === "option3"}>Option 3</option>
                            <option value="option4" selected={formData.income_year === "option4"}>Option 4</option>
                            </select>
                        </div>
                    </div>
                    <div className='stepper-input'>
                        <span>
                            Select Month
                        </span>
                        <div className="form-input">
                            <select id="income_month">
                                <option value="option1" selected={formData.income_month === "option1"}>Option 1</option>
                                <option value="option2" selected={formData.income_month === "option2"}>Option 2</option>
                                <option value="option3" selected={formData.income_month === "option3"}>Option 3</option>
                                <option value="option4" selected={formData.income_month === "option4"}>Option 4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Previous</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default StepperEight;
