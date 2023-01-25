import React, { useEffect, useState } from 'react'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Step2 = (props) => {

    let [selectedPlan, setSelectedPlan] = useState({
        name: '',
        img: '',
        monthly: false,
        price: 0,
        selected: false
    })

    let [time, setTime] = useState(false)

    let [options, setOptions] = useState([
        {
            name: 'Arcade',
            img: arcade,
            monthly: true,
            yearly: false,
            priceMonthly: 10,
            priceYearly: 120,
            selected: false
        },
        {
            name: 'Advanced',
            img: advanced,
            monthly: true,
            yearly: false,
            priceMonthly: 20,
            priceYearly: 240,
            selected: false
        },
        {
            name: 'Pro',
            img: pro,
            monthly: true,
            yearly: false,
            priceMonthly: 30,
            priceYearly: 360,
            selected: false
        }
    ])

    let chooseOption = (option) => {
        setSelectedPlan({
            ...option,
            selected: true,           
        })

    }


    let selectTime = () => {
        setTime(!time)
        setSelectedPlan({
            ...selectedPlan,
            monthly: time,
            yearly: !time
        })
    }


    let nextStep = () => {
        props.plan(selectedPlan)
        if (selectedPlan.name === '') {
            errorMsg("Please select your plan")
            return
        } else {
            props.step(3)
        }
    }

    let goBack = () => {
        props.step(1)
    }

    let errorMsg = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }


    return (
        <div className='select-plan'>
            <h1>Select your plan</h1>
            <p className='instructions'>
                You have the option of monthly or yearly billing.
            </p>
            <div className="options">
                {
                    options.map((option) => {
                        return (
                            <div className={`plan ${selectedPlan.name === option.name ? 'selected' : ''}`}
                                onClick={() => chooseOption(option)}
                                key={option.name}>
                                <div>
                                    <img src={option.img} alt="" />
                                </div>
                                <div className='price'>
                                    <h3>{option.name}</h3>
                                    <p>
                                        ${!time ? 
                                        `${option.priceMonthly}/mo` : 
                                        `${option.priceYearly}/yr`}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="monthly-yearly">
                <p className={`time ${!time ? 'selected-time' : ''}`}>Monthly</p>
                <label className="switch">
                    <input type="checkbox" 
                        onChange={selectTime} 
                        checked={time && true} />
                    <span className="slider round"></span>
                </label>
                <p className={`time ${time ? 'selected-time' : ''}`}>Yearly</p>
            </div>

            <div className="buttons">
                <button className='go-back'
                    onClick={goBack}>
                    Go Back
                </button>
                <button className='next-step'
                    onClick={nextStep}>
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default Step2