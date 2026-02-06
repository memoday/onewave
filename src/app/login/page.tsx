"use client"

import * as React from "react"

export default function LoginPage() {
  const handleLogin = () => {
    alert("현재는 디자인 데모입니다. 실제 로그인은 구현되지 않았습니다.")
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[480px] flex flex-col items-center text-center">
        
        <h1 className="text-[40px] font-bold text-[#191F28] leading-[1.4] mb-4">
          로그인
        </h1>
        <p className="text-[18px] text-[#4E5968] mb-12">
          서비스 이용을 위해 로그인이 필요합니다.
        </p>

        <button
          onClick={handleLogin}
          className="w-full py-5 bg-[#24292F] text-white rounded-2xl hover:bg-[#333] transition-all duration-200 flex items-center justify-center gap-3 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <i className="fa-brands fa-github text-2xl"></i>
          GitHub로 계속하기
        </button>

        <div className="mt-8 flex items-center gap-2 text-sm text-[#8B95A1]">
          <span>문제해결이 필요하신가요?</span>
          <a href="#" className="underline hover:text-[#191F28]">문의하기</a>
        </div>
      </div>
    </div>
  )
}
