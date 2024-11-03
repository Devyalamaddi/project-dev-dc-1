'use client';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Lock, UserRound } from 'lucide-react';
import LoginButton from '../buttons/LoginButton';

type SignUpFormData = {
  email: string;
  username: string; // Added username to the form data type
  password: string;
  rememberMe?: boolean;
};

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();
  // const [err, setErr] = useState('');

  const onLoginFormSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log("Form Data:", data);
    // Simulate a successful signup
    alert("Account created successfully!"); // You can replace this with your own logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-10 bg-transparent backdrop-blur-3xl shadow-black rounded-2xl shadow-2xl">
        <h1 className="text-center font-bold text-black text-3xl mb-10">SignUp</h1>

        <form className="space-y-8" onSubmit={handleSubmit(onLoginFormSubmit)}>
          {/* Email input */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email</label>
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

          {/* Username input */}
          <div className="relative">
            <label htmlFor="username" className="sr-only">Username</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <UserRound className="h-6 w-6 text-gray-400" />
            </div>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="pl-12 w-full p-4 border border-gray-800 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 text-black"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>
            )}
          </div>

          {/* Password input */}
          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
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
            <LoginButton text={"Create Account"} />
          </div>
        </form>

        {/* Sign up link */}
        <hr className="my-5" />
        <p className="text-white text-center">
          Already Registered?{' '}
          <Link
            href="/login"
            className="font-semibold text-black transition duration-200 ease-in-out underline-offset-2 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
