"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const TECH_STACKS = [
  {
    id: "nodejs",
    name: "Node.js",
    iconClass: "fa-brands fa-node-js",
    iconColor: "text-[#4E5968]",
    activeIconColor: "text-[#3182F6]",
    containerBg: "bg-[#F2F4F6]",
    hoverContainerBg: "bg-blue-50"
  },
  {
    id: "spring",
    name: "Spring",
    iconClass: "fa-solid fa-leaf",
    iconColor: "text-[#4E5968]",
    activeIconColor: "text-[#3182F6]",
    containerBg: "bg-[#F2F4F6]",
    hoverContainerBg: "bg-blue-50"
  },
  {
    id: "python",
    name: "Python",
    iconClass: "fa-brands fa-python",
    iconColor: "text-[#4E5968]",
    activeIconColor: "text-[#3182F6]",
    containerBg: "bg-[#F2F4F6]",
    hoverContainerBg: "bg-blue-50"
  },
  {
    id: "java",
    name: "Java",
    iconClass: "fa-brands fa-java",
    iconColor: "text-[#4E5968]",
    activeIconColor: "text-[#3182F6]",
    containerBg: "bg-[#F2F4F6]",
    hoverContainerBg: "bg-blue-50"
  }
  // {
  //   id: "docker",
  //   name: "Docker",
  //   iconClass: "fa-brands fa-docker",
  //   iconColor: "text-[#4E5968]",
  //   activeIconColor: "text-[#3182F6]",
  //   containerBg: "bg-[#F2F4F6]",
  //   hoverContainerBg: "bg-blue-50"
  // },
  // {
  //   id: "mysql",
  //   name: "MySQL",
  //   iconClass: "fa-solid fa-database",
  //   iconColor: "text-[#4E5968]",
  //   activeIconColor: "text-[#3182F6]",
  //   containerBg: "bg-[#F2F4F6]",
  //   hoverContainerBg: "bg-blue-50"
  // },
  // {
  //   id: "aws",
  //   name: "AWS",
  //   iconClass: "fa-brands fa-aws",
  //   iconColor: "text-[#4E5968]",
  //   activeIconColor: "text-[#3182F6]",
  //   containerBg: "bg-[#F2F4F6]",
  //   hoverContainerBg: "bg-blue-50"
  // },
  // {
  //   id: "github",
  //   name: "GitHub Actions",
  //   iconClass: "fa-brands fa-github",
  //   iconColor: "text-[#4E5968]",
  //   activeIconColor: "text-[#3182F6]",
  //   containerBg: "bg-[#F2F4F6]",
  //   hoverContainerBg: "bg-blue-50"
  // }
]

export default function TechSelectPage() {
  const router = useRouter()
  const [selectedTechs, setSelectedTechs] = React.useState<string[]>([])

  const toggleTech = (id: string) => {
    setSelectedTechs(prev => 
      prev.includes(id) 
        ? prev.filter(t => t !== id)
        : [...prev, id]
    )
  }

  const searchParams = useSearchParams()
  const job = searchParams.get('job')

  const handleNext = () => {
    if (selectedTechs.length === 0) {
      alert("최소 1개 이상의 기술을 선택해주세요.")
      return
    }
    // Next step logic here
    const query = selectedTechs.length ? `?techs=${selectedTechs.join(',')}` : ''
    //job params validation
    const jobQuery = job ? `&job=${job}` : ''
    router.push(`/select/task${query}${jobQuery}`)
  }


  const handlePrev = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 pb-40 px-20 max-w-[1100px] mx-auto">
        {/* Stepper */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
              <i className="fa-solid fa-check text-xs"></i>
            </div>
            <span className="font-medium">직군 선택</span>
          </div>
          <div className="w-12 h-[2px] bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#3182F6] text-white flex items-center justify-center font-bold text-sm">2</div>
            <span className="text-[#3182F6] font-bold">기술 스택</span>
          </div>
          <div className="w-12 h-[2px] bg-gray-200"></div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">3</div>
            <span className="font-medium">과제 선택</span>
          </div>
          <div className="w-12 h-[2px] bg-gray-200"></div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">4</div>
            <span className="font-medium">코드 분석</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-[40px] font-bold text-[#191F28] leading-[1.4] mb-4">
            익숙하거나 배우고 싶은<br />기술 스택을 선택해 주세요.
          </h1>
          <p className="text-[18px] text-[#4E5968]">
            최소 1개 이상의 기술을 선택하시면 맞춤형 소스 코드를 준비해 드립니다.
          </p>
        </div>

        {/* Tech Selection Grid */}
        <div className="grid grid-cols-4 gap-5">
          {TECH_STACKS.map((tech) => (
            <div
              key={tech.id}
              onClick={() => toggleTech(tech.id)}
              className={cn(
                "group relative p-6 bg-white border-2 rounded-[24px] cursor-pointer transition-all duration-200",
                selectedTechs.includes(tech.id)
                  ? "border-[#3182F6] shadow-lg shadow-blue-50"
                  : "border-gray-100 hover:border-[#3182F6] hover:shadow-lg hover:shadow-blue-50"
              )}
            >
              <div 
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
                  selectedTechs.includes(tech.id) ? "bg-blue-50" : tech.containerBg,
                  "group-hover:bg-blue-50"
                )}
              >
                <i className={cn(
                  tech.iconClass, 
                  "text-2xl transition-colors",
                  selectedTechs.includes(tech.id) ? tech.activeIconColor : tech.iconColor,
                  "group-hover:text-[#3182F6]"
                )}></i>
              </div>
              <h3 className="text-lg font-bold text-[#191F28]">{tech.name}</h3>
              <div 
                className={cn(
                  "absolute top-4 right-4 transition-opacity duration-200",
                  selectedTechs.includes(tech.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
              >
                <i className="fa-solid fa-circle-check text-xl text-[#3182F6]"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Info Tip */}
        <div className="mt-12 p-6 bg-[#F9FAFB] rounded-2xl flex items-start gap-4">
          <i className="fa-solid fa-lightbulb text-[#3182F6] mt-1"></i>
          <p className="text-[#6B7684] text-sm leading-relaxed">
            선택하신 기술 스택에 따라 프로젝트의 폴더 구조와 소스 코드 예시가 다르게 생성됩니다. 여러 개를 선택하시면 해당 기술들이 조합된 복합적인 프로젝트 환경을 경험하실 수 있습니다.
          </p>
        </div>
      </main>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full h-[100px] bg-white border-t border-gray-100 flex items-center justify-center px-20 z-50">
        <div className="w-full max-w-[1100px] flex items-center justify-between">
          <button 
            onClick={handlePrev}
            className="px-8 py-4 text-[#4E5968] text-[18px] font-bold rounded-2xl hover:bg-gray-50 transition-colors"
          >
            이전 단계
          </button>
          <Button 
            onClick={handleNext}
            className="px-12 py-6 bg-[#3182F6] text-white text-[18px] font-bold rounded-2xl hover:bg-[#1B64DA] transition-colors shadow-lg shadow-blue-100"
          >
            가상 입사 시작하기
          </Button>
        </div>
      </div>
    </div>
  )
}
