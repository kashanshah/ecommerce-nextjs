import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';

export type SubscriptionFormDataType = {
  email: string;
};

type SubscribeToNewsletterProps = {
  title?: string;
  subTitle?: string;
  placeholder?: string;
  btnText?: string;
};

export const SubscribeToNewsletter = (props: SubscribeToNewsletterProps) => {
  const {
    title = 'KEEP CONNECTED',
    subTitle = 'Get updates by subscribe our weekly newsletter',
    placeholder = 'Your email address',
    btnText = 'Subscribe',
  } = props;

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const defaultValues = {
    email: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscriptionFormDataType>({
    defaultValues,
  });

  const { isLoading, mutate } = useMutation<
    AxiosResponse<{ msg: string }>,
    AxiosError<{ msg: string }>,
    SubscriptionFormDataType
  >({
    mutationKey: 'submit',
    mutationFn: (data) => {
      return axios.post('/api/newsletter', data);
    },
    onSuccess: async (response) => {
      if (response?.data) {
        setSuccessMsg(response?.data?.msg || 'You have been subscribed to newsletter successfully!');
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

  const onSubmit = (data: SubscriptionFormDataType) => {
    mutate(data);
  };

  return (
    <section className='newsletter_section pt-95 pb-95'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='newsletter_inner d-flex justify-content-between align-items-center'>
              <div className='newsletter_text'>
                <h3>{title}</h3>
                <p>{subTitle}</p>
              </div>
              <div className='newsletter_subscribe'>
                <form id='mc-form' onSubmit={handleSubmit(onSubmit)}>
                  <input
                    readOnly={isLoading}
                    className={`border-0 ${errors?.email && 'has-error'}`}
                    placeholder={placeholder}
                    type='email'
                    autoComplete='false'
                    {...register('email', { required: 'Enter your email address' })}
                  />
                  <i className='icon-envelope-open icons' />
                  <button className='border-0' id='mc-submit' disabled={isLoading}>
                    {btnText}
                  </button>
                </form>
                <div className='mailchimp-alerts text-centre'>
                  <div className='mailchimp-submitting'>{isLoading && 'Submitting...'}</div>
                  <div className='mailchimp-success'>{successMsg}</div>
                  <div className='mailchimp-error'>{(errors?.email && errors?.email?.message) || errorMsg}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
