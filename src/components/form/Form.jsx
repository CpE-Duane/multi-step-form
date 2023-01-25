import React, { useState } from 'react'
import Step1 from '../step-1/Step1'
import Step2 from '../step-2/Step2'
import Step3 from '../step-3/Step3'
import Step4 from '../step-4/Step4'
import ThankYou from '../thank-you/ThankYou'
import './form.css'

const Form = () => {

    let [currentStep, setCurrentStep] = useState(1)

    let step = (step) => {
        setCurrentStep(step)
    }

    let [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phoneNo: 0
    })

    let data = (data) => {
        setPersonalInfo({
            ...data
        })
    }

    let [selectedPlan, setSelectedPlan] = useState({
        name: '',
        img: '',
        monthly: false,
        price: 0,
        selected: false
    })

    let plan = (plan) => {
        setSelectedPlan({
            ...plan
        })
    }

    let [selectedAddOns, setSelectedAddOns] = useState([])

    let addOns = (addOns) => {
        setSelectedAddOns(addOns)
    }


    return (
        <div className='body'>
            <div className="card">
                <div className="navbar">
                    <ul>
                        <li>
                            <span className={`${currentStep === 1 ? 'current-step' : 'step'}`}>1</span>
                            <div className='step-name'>
                                <p>STEP 1</p>
                                <h4>YOUR INFO</h4>
                            </div>
                        </li>
                        <li>
                            <span className={`${currentStep === 2 ? 'current-step' : 'step'}`}>2</span>
                            <div className='step-name'>
                                <p>STEP 2</p>
                                <h4>SELECT PLAN</h4>
                            </div>
                        </li>
                        <li>
                            <span className={`${currentStep === 3 ? 'current-step' : 'step'}`}>3</span>
                            <div className='step-name'>
                                <p>STEP 3</p>
                                <h4>ADD-ONS</h4>
                            </div>
                        </li>
                        <li>
                            <span className={`${currentStep === 4 ? 'current-step' : 'step'}`}>4</span>
                            <div className='step-name'>
                                <p>STEP 4</p>
                                <h4>SUMMARY</h4>
                            </div>
                        </li>
                    </ul>
                </div>

                {
                    currentStep === 1 && 
                    <Step1 step={step} data={data} />
                }
                {
                    currentStep === 2 && 
                    <Step2 step={step} plan={plan} />
                }
                {
                    currentStep === 3 && 
                    <Step3 step={step} 
                        selectedPlan={selectedPlan} 
                        addOns={addOns} />
                }
                {
                    currentStep === 4 && 
                    <Step4 step={step}
                        selectedPlan={selectedPlan}
                        selectedAddOns={selectedAddOns} />
                }
                {
                    currentStep === 5 && 
                    <ThankYou />
                }

            </div>
        </div>
    )
}

export default Form