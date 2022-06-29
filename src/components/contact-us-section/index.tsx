import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { constants } from '../../utils/constants';
import React, { useState } from 'react';
import { SocialLinks } from '../social-links';

type ContactUsRequestBody = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactUsSection = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsRequestBody>({
    defaultValues,
  });

  const { isLoading, mutate } = useMutation<
    AxiosResponse<{ msg: string }>,
    AxiosError<{ msg: string }>,
    ContactUsRequestBody
  >({
    mutationKey: 'contactUsForm',
    mutationFn: (data) => {
      return axios.post('/api/contact', data);
    },
    onSuccess: async (response) => {
      if (response?.data) {
        setSuccessMsg(response?.data?.msg || 'Your message has been sent successfully!');
        setErrorMsg('');
        reset(defaultValues);
      }
    },
    onError: async (error) => {
      if (error) {
        setErrorMsg(error?.response?.data?.msg || 'Oops! Something went wrong. Try again later');
        setSuccessMsg('');
      }
    },
  });

  const onSubmit = (data: ContactUsRequestBody) => {
    mutate(data);
    return;
  };

  return (
    <main className='main-content'>
      <div className='contact-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 pe-lg-5'>
              <h2 className='contact-form-title mb-3'>Get In Touch</h2>
              <p className='contact-form-desc'>Comments, questions? Morbi eleifend fringilla placerat!</p>
              <form id='contact-form' className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-field mb-4'>
                  <input
                    type='text'
                    id='con_name'
                    placeholder='Your Name*'
                    className={`input-field ${errors?.name && 'has-error'}`}
                    name='name'
                    readOnly={isLoading}
                    {...register('name', {
                      required: 'Please enter your name',
                      minLength: {
                        value: 3,
                        message: 'Please enter your full name',
                      },
                    })}
                  />
                  <p className='form-message color2'>{errors?.name?.message}</p>
                </div>
                <div className='group-input mb-4'>
                  <div className='form-field me-sm-4 mb-4 mb-sm-0'>
                    <input
                      type='email'
                      id='con_email'
                      placeholder='Your Email*'
                      className={`input-field ${errors?.email && 'has-error'}`}
                      name='email'
                      readOnly={isLoading}
                      {...register('email', {
                        required: 'Please enter your email address',
                      })}
                    />
                    <p className='form-message color2'>{errors?.email?.message}</p>
                  </div>
                  <div className='form-field'>
                    <input
                      type='tel'
                      id='con_number'
                      placeholder='Your Number*'
                      className={`input-field ${errors?.phone && 'has-error'}`}
                      name='phone'
                      readOnly={isLoading}
                      {...register('phone', {
                        required: 'Please enter your phone number',
                      })}
                    />
                    <p className='form-message color2'>{errors?.phone?.message}</p>
                  </div>
                </div>
                <div className='form-field mb-4'>
                  <textarea
                    id='con_message'
                    placeholder='Message'
                    className={`textarea-field ${errors?.phone && 'has-error'}`}
                    name='message'
                    readOnly={isLoading}
                    {...register('message', {
                      required: 'Please enter your message',
                      minLength: {
                        value: 5,
                        message: 'Please enter your full message',
                      },
                    })}
                  />
                  <p className='form-message color2'>{errors?.message?.message}</p>
                </div>
                <div className='d-grid'>
                  <button
                    type='submit'
                    value='submit'
                    className='btn btn-dark btn-primary-hover rounded-0'
                    name='submit'
                  >
                    Submit
                  </button>
                  <p className='form-messege mt-3 mb-0 color9'>{successMsg}</p>
                  <p className='form-messege mt-3 mb-0 color2'>{errorMsg}</p>
                </div>
              </form>
            </div>
            <div className='col-lg-4'>
              <div className='contact-info-wrap pt-5'>
                <ul className='contact-info'>
                  <li>
                    <i className='icon-phone' />
                    <a href={`tel:${constants?.phone.replaceAll('-', '').replaceAll(' ', '')}`}>{constants?.phone}</a>
                  </li>
                  <li>
                    <i className='ion-ios-email-outline' />
                    <a href={`mailto:${constants?.email}`}>{constants?.email}</a>
                  </li>
                  <li>
                    <i className='ion-android-chat' />
                    <a href='#'>Live chat with us</a>
                  </li>
                  <li>
                    <i className='ion-ios-location' />
                    <a href='#'>{constants?.address}</a>
                  </li>
                </ul>
                <SocialLinks className='social-link' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='map-wrap pt-85'>
        <iframe
          className='map-size'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd'
        />
      </div>
    </main>
  );
};
