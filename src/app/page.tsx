"use client"

import Link from "next/link"
import { ArrowRight, Code2, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-72px)] bg-white">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl space-y-8 animate-in fade-in zoom-in duration-500 fill-mode-both">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-4">
            <span className="animate-pulse w-2 h-2 rounded-full bg-blue-600"></span>
            실무 경험을 위한 새로운 도약
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#191F28] tracking-tight leading-[1.1]">
            개발자의 성장을 위한<br/>
            <span className="text-[#3182F6]">가상 입사 프로젝트</span>
          </h1>
          
          <p className="text-xl text-[#4E5968] max-w-2xl mx-auto leading-relaxed">
            실제 기업 환경과 유사한 프로젝트에 참여하여<br className="hidden md:block"/>
            협업 능력과 기술 역량을 키워보세요. 
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/select">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-[#3182F6] hover:bg-[#1B64DA] rounded-2xl shadow-lg shadow-blue-100 transition-all hover:scale-105">
                서비스 시작하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-medium rounded-2xl border-gray-200 text-[#4E5968] hover:bg-gray-50">
              서비스 소개 보기
            </Button> */}
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-[32px] bg-gray-50 hover:bg-blue-50/50 transition-colors">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-[#3182F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#191F28] mb-3">실전 코드 분석</h3>
              <p className="text-[#4E5968] leading-relaxed">
                현업 수준의 코드를 분석하고 리팩토링하며 코드 품질을 높이는 방법을 배웁니다.
              </p>
            </div>
            <div className="group p-8 rounded-[32px] bg-gray-50 hover:bg-blue-50/50 transition-colors">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-[#3182F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#191F28] mb-3">팀 협업 시뮬레이션</h3>
              <p className="text-[#4E5968] leading-relaxed">
                가상의 팀원들과 함께 코드 리뷰를 주고받으며 협업 커뮤니케이션을 익힙니다.
              </p>
            </div>
            <div className="group p-8 rounded-[32px] bg-gray-50 hover:bg-blue-50/50 transition-colors">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7 text-[#3182F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#191F28] mb-3">커리어 성장</h3>
              <p className="text-[#4E5968] leading-relaxed">
                프로젝트 완료 후 포트폴리오로 활용 가능한 상세 리포트를 제공받습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
