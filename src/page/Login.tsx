import React from 'react';

function Login() {
  return (
    <>
    
    <div className="flex w-full max-w-md flex-col items-center gap-7 rounded-[15px] bg-[#F3F3F3] px-5 p-10 shadow-[1px_2px_10px_rgba(0,0,0,0.15)]">
      <img
        className="h-[78px] w-[78px]"
        src="https://placehold.co/78x78"
        alt="Company Logo"
      />
      <h2 className="text-center text-xl font-semibold text-[#767676]">
        Masuk ke Akun Anda
      </h2>
      <form className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-base font-medium text-[#898989]">
            Email or Username
          </label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan Email"
            className="h-[45px] rounded-[5px] border-[0.5px] border-[#A4A4A4] px-2.5 text-sm placeholder:text-[#A4A4A4] focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-base font-medium text-[#898989]">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan Password"
            className="h-[45px] rounded-[5px] border-[0.5px] border-[#A4A4A4] px-2.5 text-sm placeholder:text-[#A4A4A4] focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Opsi Form */}
        <div className="flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="h-3 w-3 rounded-sm" />
            <label htmlFor="remember" className="text-[#898989]">
              Remember Me
            </label>
          </div>
          <a href="/forgot-password" className="text-[#2066A1] no-underline hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Tombol Login */}
        <button
          type="submit"
          className="h-[45px] rounded-[5px] bg-[#00529D] text-base font-medium text-white transition-colors hover:bg-[#00417c]"
        >
          Masuk
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;