'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'components/shared/button';
import InfoIcon from 'components/shared/info-icon';
import Input from 'components/shared/input';

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Email is a required field'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formFailed, setFormFailed] = useState(false);
  async function fakeSuccessRequest() {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setLoading(false);
  }

  const onSubmitHandler = async (data) => {
    setFormSuccess(false);
    setFormFailed(false);

    try {
      yup.string().email().required().validateSync(data.email);
      await fakeSuccessRequest();
      setFormSuccess(true);
    } catch {
      reset();
      setFormFailed(true);
    } finally {
      setLoading(false);
    }
  };

  const resetSubmitButton = () => {
    setLoading(false);
    setFormSuccess(false);
    setFormFailed(false);
  };

  return (
    <div className="flex flex-col h-24">
      <div className="form-border rounded-large p-px max-h-14 max-w-[466px] overflow-hidden">
        <form
          className="form-bg flex rounded-large items-center justify-between max-h-[54px] lg:max-w-[464px] overflow-hidden"
          noValidate
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Input
            className="form-text flex flex-1 text-[15px] bg-transparent pl-[23px] sm:pl-4 py-[18px] font-light leading-5 tracking-tight-4"
            {...register('email')}
            placeholder="Your business email..."
            type="email"
            onChange={resetSubmitButton}
          />
          <div className="py-1.5 pe-1 overflow-hidden rounded-large min-w-[147px] xl:min-w-max">
            {loading ? (
              <InfoIcon theme="primary-blue" content="loading" className="p-2" animation />
            ) : (
              <Button
                className={clsx(
                  !loading && !formSuccess && !formFailed ? 'block w-full' : 'hidden'
                )}
                theme="primary-blue-filled"
                size="sm"
                type="submit"
              >
                Free trial
              </Button>
            )}
            {formFailed && <InfoIcon theme="primary-pink" content="cross" />}
            {formSuccess && <InfoIcon theme="primary-green" content="check" />}
          </div>
        </form>
      </div>
      <p className="text-red pl-6 sm:pl-4 pt-3 font-medium leading-5 tracking-tight-4">
        {errors.email?.message}
      </p>
    </div>
  );
};

export default Form;
