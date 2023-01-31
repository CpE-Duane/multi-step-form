import React, { useState } from 'react'
import { useEffect } from 'react'


const Step4 = (props) => {

    let [total, setTotal] = useState(0)

    useEffect(() => {
        for (let i = 0; i < props.selectedAddOns.length; i++) {
            setTotal(prev => prev + props.selectedAddOns[i].price)
        }

        return () => {
            setTotal(0)
        }
    }, [])

    let nextStep = () => {
        props.step(5)
    }

    let goBack = () => {
        props.step(3)
    }


    return (
        <div className='summary'>
            <h1>Finishing up</h1>
            <p className='instructions'>
                Double-check everything looks OK before confirming.
            </p>

            <div className="subscription-list">
                <div className="subscription-plan">
                    <div className='subs-plan-name'>
                        {props.selectedPlan.name}
                        {props.selectedPlan.yearly ? ' (Yearly)' : ' (Monthly)'}
                    </div>
                    <div className='subs-plan-price'>
                        ${props.selectedPlan.yearly ? props.selectedPlan.price * 12: props.selectedPlan.price}/
                        {props.selectedPlan.yearly ? 'yr' : 'mo'}
                    </div>
                </div>
                {
                    props.selectedAddOns.length > 0 &&
                    <div className="subscription-addons">
                        {
                            props.selectedAddOns.map(addons => {
                                return (
                                    <div className='addon'
                                        key={addons.id}>
                                        <p className='addons-name'>
                                            {addons.name}
                                        </p>
                                        <p className='addons-price'>
                                            ${addons.price}/{props.selectedPlan.monthly ? 'mo' : 'yr'}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>

            <div className='total'>
                <p>
                    Total {props.selectedPlan.yearly ? ' (Yearly)' : ' (Monthly)'}
                </p>
                <h3>
                    ${total + (props.selectedPlan.yearly ? props.selectedPlan.price * 12 : props.selectedPlan.price)}/
                    {props.selectedPlan.yearly ? 'yr' : 'mo'}
                </h3>
            </div>

            <div className="buttons">
                <button className='go-back'
                    onClick={goBack}>
                    Go Back
                </button>
                <button className='next-step'
                    onClick={nextStep}>
                    Confirm
                </button>
            </div>

        </div>
    )
}

export default Step4