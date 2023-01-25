import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Step1 = (props) => {

    let schema = yup.object().shape({
        name: yup.string().required("Name is required."),
        email: yup.string().email("Invalid email.").required("Email is required."),
        phoneNo: yup.number().transform((value) => (isNaN(value) ? undefined : value)).required("Phone number is required."),
    })

    let { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    let nextStep = (data) => {
        props.data({
            ...data
        })
        props.step(2)
    }



    return (
        <div className="personal-info-form">
            <h1>Personal info</h1>
            <p>
                Please provide your name, email address, and phone number.
            </p>
            <form onSubmit={handleSubmit(nextStep)}>
                <div className='label-and-error'>
                    <span>Name</span>
                    <span className='errorMsg'>{errors.name?.message}</span>
                </div>
                <input type="text"
                    placeholder='e.g. Duane Villapando'
                    {...register("name")} />

                <div className='label-and-error'>
                    <span>Email</span>
                    <span className='errorMsg'>{errors.email?.message}</span>
                </div>
                <input type="email"
                    placeholder='e.g. dvillapando@gmail.com'
                    {...register("email")} />

                <div className='label-and-error'>
                    <span>Phone Number</span>
                    <span className='errorMsg'>{errors.phoneNo?.message}</span>
                </div>
                <input type="number"
                    placeholder='e.g. 09*********'
                    {...register("phoneNo")} />

                <div className='page-buttons'>
                    <button className="next-step" type='submit'>
                        Next Step
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Step1