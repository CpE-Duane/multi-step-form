import React, { useState } from 'react'
import { useEffect } from 'react'

const Step3 = (props) => {

    const [selectedAddOns, setSelectedAddOns] = useState([])
    const [addOns, setAddOns] = useState([
        {
            name: 'Online service',
            instructions: 'Access to multiplayer games',
            price: props.selectedPlan.yearly ?  12 : 1,
            id: 1
        },
        {
            name: 'Larger Storage',
            instructions: 'Extra 1TB of cloud save',
            price: props.selectedPlan.yearly ?  24 : 2,
            id: 2
        },
        {
            name: 'Customizable Profile',
            instructions: 'Custom theme on your profile',
            price: props.selectedPlan.yearly ?  36 : 3,
            id: 3
        }
    ])

    let selectAddOns = (e,addon) => {
        if (e.target.checked) {
            setSelectedAddOns((selectedAddOns) => {
                return [...selectedAddOns, addon]
            })
        } else {          
            setSelectedAddOns(selectedAddOns.filter(selectedAddOn => selectedAddOn.id !== addon.id))
        } 

    }

    let nextStep = () => {
        props.addOns(selectedAddOns)
        props.step(4)
    }

    let goBack = () => {
        props.step(2)
    }

    return (
        <div className='select-add-ons'>
            <h1>Pick add-ons</h1>
            <p className='instructions'>
                Add-ons help enhance your gaming experience.
            </p>

            <div className='addons-options'>
                {
                    addOns.map((addon) => {
                        return (
                            <div className='add-ons'
                                key={addon.id}>
                                <div className='add-ons-name'>
                                    <input type="checkbox"
                                        onChange={(e) => 
                                            selectAddOns(e,addon)
                                        } />
                                    <div>
                                        <h3>{addon.name}</h3>
                                        <p className='benefits'>
                                            {addon.instructions}
                                        </p>
                                    </div>
                                </div>
                                <p className='add-ons-price'>+${addon.price}/{props.selectedPlan.yearly ? 'yr' : 'mo'}</p>
                            </div>
                        )
                    })
                }
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

export default Step3