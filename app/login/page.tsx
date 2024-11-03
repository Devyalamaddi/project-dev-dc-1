'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Lock } from 'lucide-react';
import LoginButton from '../buttons/page';

type LoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [err, setErr] = useState('');

  const onLoginFormSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("Form Data:", data);
    alert("Login successful!"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-10 bg-transparent backdrop-blur-md shadow-2xl shadow-black rounded-2xl">
        <h1 className="text-center font-bold text-black text-3xl mb-10">Login</h1>

        {err && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{err}</p>
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit(onLoginFormSubmit)}>
          {/* Email input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-6 w-6 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="pl-12 w-full p-4 border border-gray-800 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 text-black"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-6 w-6 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="pl-12 w-full p-4 border border-gray-800 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 text-black"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <LoginButton text={"Login"}/>
          </div>
        </form>

        <hr className="my-5" />
        <p className="text-white text-center">
          New User?{' '}
          <Link
            href="/signup"
            className=" font-semibold text-black transition duration-200 ease-in-out underline-offset-2"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
