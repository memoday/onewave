"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button" // Using standard button from HTML reference to match style exactly if needed, or stick to provided HTML classes

const JOBS = [
  {
    id: "frontend",
    title: "프론트엔드",
    iconClass: "fa-solid fa-laptop-code",
    description: "웹 페이지의 구조와 디자인을 구현하고<br>사용자 인터랙션을 개발합니다.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: "backend",
    title: "백엔드",
    iconClass: "fa-solid fa-server",
    description: "데이터를 저장 및 관리하고<br>서버 로직과 API를 개발합니다.",
    tags: ["Node.js", "Spring Boot", "MySQL"],
  }
]

export default function SelectPage() {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = React.useState<string | null>(null)

  const handleNext = () => {
    if (!selectedJob) {
      alert("직군을 선택해주세요.")
      return
    }
    if (selectedJob === "frontend") {
      alert("미구현 기능입니다. 백엔드를 선택해주세요")
      return
    }
    router.push(`/select/tech?job=${selectedJob}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 pb-32 px-20 max-w-[1000px] mx-auto">
        {/* Stepper */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#3182F6] text-white flex items-center justify-center font-bold text-sm">1</div>
            <span className="text-[#3182F6] font-bold">직군 선택</span>
          </div>
          <div className="w-12 h-[2px] bg-gray-200"></div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">2</div>
            <span className="font-medium">기술 스택</span>
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
        <div className="mb-16">
          <h1 className="text-[40px] font-bold text-[#191F28] leading-[1.4] mb-4">
            어떤 직군으로<br />가상 입사를 시작할까요?
          </h1>
          <p className="text-[18px] text-[#4E5968]">
            관심 있는 직군을 선택하시면 실무 환경과 가장 유사한 프로젝트를 추천해 드립니다.
          </p>
        </div>

        {/* Job Selection Grid */}
        <div className="grid grid-cols-2 gap-6">
          {JOBS.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job.id)}
              className={cn(
                "group relative p-10 bg-white border-2 rounded-[32px] cursor-pointer transition-all duration-300",
                selectedJob === job.id
                  ? "border-[#3182F6] shadow-xl shadow-blue-50"
                  : "border-gray-100 hover:border-[#3182F6] hover:shadow-xl hover:shadow-blue-50"
              )}
            >
              <div 
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors",
                  selectedJob === job.id ? "bg-blue-50" : "bg-[#F2F4F6]",
                  "group-hover:bg-blue-50"
                )}
              >
                <i className={cn(
                  job.iconClass, 
                  "text-3xl transition-colors",
                  selectedJob === job.id ? "text-[#3182F6]" : "text-[#4E5968]",
                  "group-hover:text-[#3182F6]"
                )}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#191F28] mb-3">{job.title}</h3>
              <p 
                className="text-[#4E5968] leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
              {/* <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-[#4E5968] text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div> */}
              
              <div 
                className={cn(
                  "absolute top-8 right-8 transition-opacity duration-200",
                  selectedJob === job.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
              >
                <i className="fa-solid fa-circle-check text-2xl text-[#3182F6]"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Info Tip */}
        <div className="mt-12 p-6 bg-[#F9FAFB] rounded-2xl flex items-start gap-4">
          <i className="fa-solid fa-circle-info text-[#8B95A1] mt-1"></i>
          <p className="text-[#6B7684] text-sm leading-relaxed">
            직군은 언제든지 마이페이지에서 변경할 수 있습니다. 선택하신 직군에 따라 가상 팀원들의 코드 리뷰 스타일과 협업 툴 환경이 다르게 구성됩니다.
          </p>
        </div>
      </main>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full h-[100px] bg-white border-t border-gray-100 flex items-center justify-center px-20">
        <div className="w-full max-w-[1000px] flex justify-end">
          <button 
            onClick={handleNext}
            className="px-12 py-4 bg-[#3182F6] text-white text-[18px] font-bold rounded-2xl hover:bg-[#1B64DA] transition-colors shadow-lg shadow-blue-100"
          >
            다음 단계로 이동
          </button>
        </div>
      </div>
    </div>
  )
}
