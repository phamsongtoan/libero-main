import React, { useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Information from '../../PageContactUs/Information'

const FormSubmit = ({ contactSetting }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, register, formState: { errors, isValid, dirtyFields }, reset } = useForm({ mode: 'all' })
  const onSubmitForm = async (formValues) => {
    setIsLoading(true)
    const res = await fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(formValues)
    })
    const data = await res.json()

    if (data.success) {
      toast('Your message have been saved!', { type: 'success' })
      reset()
    }

    setIsLoading(false)
  }

  return (
    <div className={cn(styles.formSubmit)}>
           <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="form-left" data-aos="fade-right">
                  <h2 className="text-uppercase fw-bold text-40">
                    CONTACT US/ <br />
                    FIND OUR OFFICE
                  </h2>
                  <span className="fst-italic d-block my-5 pb-3">
                    {contactSetting?.contactPreline}
                  </span>
                  <div>
                    <Information {...contactSetting}/>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div action="" className="form-right" data-aos="fade-left">
                  <div className="mb-4 input-group">
                    <input
                      type="text"
                      className={cn('form-control', {
                        'is-invalid': errors.name?.message,
                        'is-valid': dirtyFields.name && !errors.name
                      })}
                      placeholder="Name"
                      {...register('name', { required: 'Name is required' })}
                    />
                      {errors.name?.message && <div className="invalid-feedback">
                        {errors.name?.message}
                      </div>}
                  </div>
                  <div className="mb-4 input-group">
                    <input
                      type="email"
                      className={cn('form-control', {
                        'is-invalid': errors.email?.message,
                        'is-valid': dirtyFields.email && !errors.email
                      })}
                      placeholder="Email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Entered value does not match email format'
                        }
                      })}
                    />

                      {errors.email?.message && <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>}
                  </div>
                  <div className="mb-4 input-group">
                    <textarea
                      className={cn('form-control', {
                        'is-invalid': errors.message?.message,
                        'is-valid': dirtyFields.message && !errors.message
                      })}
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Message"
                      {...register('message', { required: 'Enter your message' })}
                    ></textarea>
                      {errors.message?.message && <div className="invalid-feedback">
                        {errors.message?.message}
                      </div>}
                  </div>
                  <button type="submit" disabled={!isValid || isLoading}>{isLoading ? 'Sending...' : 'Send'}</button>
                </div>
              </div>
            </div>
          </form>
    </div>
  )
}

export default FormSubmit
