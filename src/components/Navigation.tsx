"use client";

import * as React from "react";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-20">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src="/cozzy_logo.webp" alt="" />
          </div>
          <span className="text-[22px] font-bold text-[#191F28]">COZZY</span>
        </Link>
      </div>
      <nav className="flex items-center gap-8">
        <Link href="/select">
          <span className="text-[#4E5968] font-medium cursor-pointer">
            시작하기
          </span>
        </Link>
        {/* <span className="text-[#4E5968] font-medium cursor-pointer">프로젝트 둘러보기</span> */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
          {/* Using a placeholder since the original image might not load or be desired. Using a simple icon or just the div */}
          <img
            src="https://vinsign.app/resources/avatars/avatar-1.png"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </nav>
    </header>
  );
}
