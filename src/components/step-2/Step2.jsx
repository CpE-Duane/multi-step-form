import React, { useEffect, useState } from 'react'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Step2 = (props) => {

    const [selectedPlan, setSelectedPlan] = useState({
        name: '',
        img: '',
        yearly: false,
        price: 0,
        selected: false
    })

    const [isYearly, setIsYearly] = useState(false)

    const [options, setOptions] = useState([
        {
            name: 'Arcade',
            img: arcade,
            yearly: false,
            price: 10,
            selected: false
        },
        {
            name: 'Advanced',
            img: advanced,
            yearly: false,
            price: 20,
            selected: false
        },
        {
            name: 'Pro',
            img: pro,
            yearly: false,
            price: 30,
            selected: false
        }
    ])

    const chooseOption = (option) => {
        setSelectedPlan({
            ...option,
            selected: true,
            yearly: isYearly
        })
    }


    const selectTime = () => {
        setIsYearly(prev => !prev)
    }

    useEffect(() => {
        setSelectedPlan(prev => {
            return {
                ...selectedPlan,
                yearly: isYearly
            }
        })
        console.log(selectedPlan)

        return () => {
            return {
                ...selectedPlan
            }
        }
    }, [isYearly])

    const nextStep = () => {
        props.plan(selectedPlan)
        if (selectedPlan.name === '') {
            errorMsg("Please select your plan.")
            return
        } else {
            props.step(3)
        }
        console.log(selectedPlan)
    }

    const goBack = () => {
        props.step(1)
    }

    const errorMsg = (msg) => {
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
                                        ${isYearly ? `${option.price * 12}/yr` : `${option.price}/mo`}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="monthly-yearly">
                <p className={`time ${!isYearly ? 'selected-time' : ''}`}>Monthly</p>
                <label className="switch">
                    <input type="checkbox"
                        onChange={selectTime}
                        checked={isYearly} />
                    <span className="slider round"></span>
                </label>
                <p className={`time ${isYearly ? 'selected-time' : ''}`}>Yearly</p>
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