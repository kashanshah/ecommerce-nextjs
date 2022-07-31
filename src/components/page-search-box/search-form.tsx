import React from 'react';
import { Controller, useForm } from 'react-hook-form';

export const SearchForm = (props: { className?: string }) => {
  const { className } = props;
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log('find data', { ...data, post_type: 'product' });
    return;
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <div className='searchform-input'>
        <Controller
          name='s'
          control={control}
          render={({ field }) => {
            return <input type='text' className='s' placeholder='Search for products' {...field} />;
          }}
        />
      </div>

      <button type='submit' className='searchsubmit'>
        <span className='submit-text'>Search </span>
      </button>
    </form>
  );
};
