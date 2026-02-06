"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function AnalysisPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-20 pt-20 pb-10">
            {/* Stepper */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <span className="font-medium">직군 선택</span>
              </div>
              <div className="w-12 h-[2px] bg-gray-200"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
                   <i className="fa-solid fa-check text-xs"></i>
                </div>
                <span className="font-medium">기술 스택</span>
              </div>
              <div className="w-12 h-[2px] bg-gray-200"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <span className="font-medium">과제 선택</span>
              </div>
              <div className="w-12 h-[2px] bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#3182F6] text-white flex items-center justify-center font-bold text-sm">4</div>
                <span className="text-[#3182F6] font-bold">코드 분석</span>
              </div>
            </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-180px)] overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden">
            <div className="flex-1 p-10 space-y-12 overflow-y-auto">
                <div className="grid grid-cols-12 gap-16">
                    <div className="col-span-7 space-y-16">
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-2xl font-bold text-[#191F28]">워크플로우</h2>
                                <span className="px-3 py-1 bg-[#E8F3FF] text-[#3182F6] text-xs font-bold rounded-lg">진행 단계</span>
                            </div>
                            <div className="space-y-0">
                                <div className="flex gap-8">
                                    <div className="flex flex-col items-center pt-1 shrink-0">
                                        <div className="w-10 h-10 bg-[#3182F6] text-white rounded-2xl flex items-center justify-center font-bold text-lg">1</div>
                                        <div className="w-0.5 flex-1 bg-[#E5E8EB] my-2"></div>
                                    </div>
                                    <div className="pb-12">
                                        <h3 className="text-lg font-bold text-[#191F28] mb-3">데이터 모델 정의 확인</h3>
                                        <p className="text-[#4E5968] leading-relaxed mb-4">
                                            먼저 <code className="bg-[#F2F4F6] px-2 py-1 rounded-md text-[#3182F6] font-mono text-sm">src/models/payment.ts</code> 파일을 열어 결제 상태값의 구조를 파악하세요.
                                        </p>
                                        <div className="p-6 bg-white rounded-[24px]">
                                            <div className="flex items-center gap-2 mb-3">
                                                <i className="fa-solid fa-robot text-[#3182F6]"></i>
                                                <span className="text-xs font-bold text-[#8B95A1] uppercase tracking-wider">AI Analysis</span>
                                            </div>
                                            <p className="text-sm text-[#4E5968] leading-relaxed">이 파일은 결제 생명주기를 관리하는 핵심 Interface입니다. 외부 의존성으로 <span className="font-bold text-[#191F28]">TypeORM</span>을 사용하고 있으며 데이터 무결성 제약 조건이 포함되어 있습니다.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-8">
                                    <div className="flex flex-col items-center pt-1 shrink-0">
                                        <div className="w-10 h-10 bg-white text-[#8B95A1] rounded-2xl flex items-center justify-center font-bold text-lg border-2 border-[#E5E8EB]">2</div>
                                        <div className="w-0.5 flex-1 bg-[#E5E8EB] my-2"></div>
                                    </div>
                                    <div className="pb-12 opacity-40">
                                        <h3 className="text-lg font-bold text-[#191F28] mb-2">비즈니스 로직 수정</h3>
                                        <p className="text-[#4E5968] text-sm">Service 레이어에서 상태 전이 로직을 수정합니다.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8">
                                    <div className="flex flex-col items-center pt-1 shrink-0">
                                        <div className="w-10 h-10 bg-white text-[#8B95A1] rounded-2xl flex items-center justify-center font-bold text-lg border-2 border-[#E5E8EB]">3</div>
                                    </div>
                                    <div className="opacity-40">
                                        <h3 className="text-lg font-bold text-[#191F28] mb-2">API 엔드포인트 연결</h3>
                                        <p className="text-[#4E5968] text-sm">Controller에 새로운 파라미터를 추가합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-[#191F28]">AI 시니어 리뷰</h2>
                                <div className="flex gap-3">
                                    <span className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF0F0] text-[#F04452] text-xs font-bold rounded-full">
                                        <i className="fa-solid fa-circle-exclamation"></i> 필수 수정 2
                                    </span>
                                    <span className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF8E1] text-[#FFBB00] text-xs font-bold rounded-full">
                                        <i className="fa-solid fa-circle-info"></i> 권장 3
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="group p-8 bg-white rounded-[32px] transition-all hover:translate-x-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm font-bold text-[#F04452] flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#F04452]"></span>
                                            필수 수정 (Must Fix)
                                        </span>
                                        <span className="text-xs font-mono text-[#8B95A1]">src/services/pay.service.ts:42</span>
                                    </div>
                                    <p className="text-[#333D4B] font-medium leading-relaxed mb-6">
                                        결제 트랜잭션 처리 중 예외 발생 시 롤백 로직이 누락되었습니다. <code className="bg-[#F2F4F6] px-1.5 py-0.5 rounded text-[#F04452]">try-catch</code> 블록을 추가하여 데이터 무결성을 보장해주세요.
                                    </p>
                                    <button className="text-[#3182F6] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                        리뷰 반영 완료 <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <div className="group p-8 bg-white rounded-[32px] transition-all hover:translate-x-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm font-bold text-[#3182F6] flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]"></span>
                                            스타일 (Style)
                                        </span>
                                        <span className="text-xs font-mono text-[#8B95A1]">src/utils/formatter.ts:12</span>
                                    </div>
                                    <p className="text-[#333D4B] font-medium leading-relaxed mb-6">
                                        변수명 <code className="bg-[#F2F4F6] px-1.5 py-0.5 rounded text-[#3182F6]">tempData</code>는 역할이 불분명합니다. <code className="bg-[#F2F4F6] px-1.5 py-0.5 rounded text-[#3182F6]">paymentHistory</code>와 같이 구체적인 네이밍을 권장합니다.
                                    </p>
                                    <button className="text-[#8B95A1] text-sm font-bold flex items-center gap-2">
                                        반영 대기 중 <i className="fa-solid fa-clock"></i>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="col-span-5 space-y-16">
                        <section>
                            <h2 className="text-xl font-bold text-[#191F28] mb-8">PR 진행 현황</h2>
                            <div className="space-y-8">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#E8F3FF] flex items-center justify-center text-[#3182F6]">
                                        <i className="fa-solid fa-flask text-xl"></i>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-base font-bold text-[#191F28]">로컬 테스트 시뮬레이션</div>
                                        <div className="text-sm text-[#2DCA73] font-medium">Success (Pass 12/12)</div>
                                    </div>
                                    <i className="fa-solid fa-circle-check text-[#2DCA73] text-xl"></i>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#F2F4F6] flex items-center justify-center text-[#8B95A1]">
                                        <i className="fa-solid fa-code-pull-request text-xl"></i>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-base font-bold text-[#191F28]">PR 생성하기</div>
                                        <div className="text-sm text-[#8B95A1] font-medium">리뷰 반영 후 활성화됩니다</div>
                                    </div>
                                    <button className="px-5 py-2 bg-[#F2F4F6] text-[#8B95A1] text-xs font-bold rounded-xl cursor-not-allowed">작성</button>
                                </div>
                            </div>
                            <div className="mt-10 pt-10">
                                <h3 className="text-xs font-bold text-[#8B95A1] mb-5 uppercase tracking-widest">좋은 PR 템플릿 힌트</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
                                        <i className="fa-solid fa-lightbulb text-[#FFBB00] mt-1"></i>
                                        <p className="text-sm text-[#4E5968] leading-relaxed">변경 전후의 <span className="font-bold text-[#191F28]">스크린샷이나 로그</span>를 첨부하면 리뷰어가 훨씬 더 빠르게 이해할 수 있어요.</p>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl">
                                        <i className="fa-solid fa-lightbulb text-[#FFBB00] mt-1"></i>
                                        <p className="text-sm text-[#4E5968] leading-relaxed">"어떻게" 구현했는지 보다 <span className="font-bold text-[#191F28]">"왜"</span> 이렇게 수정했는지에 집중해서 작성해보세요.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#191F28] mb-8">학습 리포트 요약</h2>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-[#191F28] mb-4">
                                        <span>자주 지적받는 리뷰 유형</span>
                                        <span className="text-[#3182F6]">Top 3</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-[11px] font-bold text-[#8B95A1]">
                                                <span>비즈니스 로직</span>
                                                <span>60%</span>
                                            </div>
                                            <div className="h-2.5 bg-[#F2F4F6] rounded-full overflow-hidden">
                                                <div className="w-[60%] h-full bg-[#3182F6]"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-[11px] font-bold text-[#8B95A1]">
                                                <span>코드 컨벤션</span>
                                                <span>25%</span>
                                            </div>
                                            <div className="h-2.5 bg-[#F2F4F6] rounded-full overflow-hidden">
                                                <div className="w-[25%] h-full bg-[#2DCA73]"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-[11px] font-bold text-[#8B95A1]">
                                                <span>테스트 코드</span>
                                                <span>15%</span>
                                            </div>
                                            <div className="h-2.5 bg-[#F2F4F6] rounded-full overflow-hidden">
                                                <div className="w-[15%] h-full bg-[#FFBB00]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 bg-[#191F28] rounded-[32px] text-white">
                                    <h3 className="text-sm font-bold text-[#3182F6] mb-3 uppercase tracking-wider">Next Step</h3>
                                    <p className="text-sm leading-relaxed mb-6 text-[#ADB5BD]">
                                        "현재 비즈니스 로직 이해도가 매우 높습니다. 다음 단계에서는 <span className="text-white font-bold underline decoration-[#3182F6] decoration-2 underline-offset-4">에러 핸들링 패턴</span>을 더 깊게 다뤄보는 것을 추천합니다."
                                    </p>
                                    <button className="w-full py-3 bg-[#333D4B] text-white text-sm font-bold rounded-xl hover:bg-[#4E5968] transition-colors">
                                        추천 이슈 큐레이션 보기
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="pt-8 pb-20">
                    <h2 className="text-2xl font-bold text-[#191F28] mb-10">다음 난이도 도전하기</h2>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="group cursor-pointer">
                            <div className="mb-5 flex justify-between items-center">
                                <span className="px-3 py-1 bg-white text-[#8B95A1] text-[11px] font-bold rounded-lg">LEVEL 3</span>
                                <i className="fa-solid fa-arrow-right text-[#E5E8EB] group-hover:text-[#3182F6] transition-all transform group-hover:translate-x-1"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#191F28] mb-3 group-hover:text-[#3182F6] transition-colors">Redis 캐싱 레이어 최적화</h3>
                            <p className="text-sm text-[#4E5968] leading-relaxed mb-6">조회 성능 개선을 위한 캐싱 전략 수립 및 대용량 트래픽 대응 구현</p>
                            <div className="flex gap-3">
                                <span className="text-[11px] font-bold text-[#8B95A1]">#Backend</span>
                                <span className="text-[11px] font-bold text-[#8B95A1]">#Performance</span>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="mb-5 flex justify-between items-center">
                                <span className="px-3 py-1 bg-white text-[#8B95A1] text-[11px] font-bold rounded-lg">LEVEL 4</span>
                                <i className="fa-solid fa-arrow-right text-[#E5E8EB] group-hover:text-[#3182F6] transition-all transform group-hover:translate-x-1"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#191F28] mb-3 group-hover:text-[#3182F6] transition-colors">결제 취소 웹훅 시스템 구축</h3>
                            <p className="text-sm text-[#4E5968] leading-relaxed mb-6">비동기 메시지 큐를 활용한 안정적인 알림 및 재처리 시스템 설계</p>
                            <div className="flex gap-3">
                                <span className="text-[11px] font-bold text-[#8B95A1]">#Architecture</span>
                                <span className="text-[11px] font-bold text-[#8B95A1]">#Kafka</span>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="mb-5 flex justify-between items-center">
                                <span className="px-3 py-1 bg-white text-[#8B95A1] text-[11px] font-bold rounded-lg">LEVEL 2</span>
                                <i className="fa-solid fa-arrow-right text-[#E5E8EB] group-hover:text-[#3182F6] transition-all transform group-hover:translate-x-1"></i>
                            </div>
                            <h3 className="text-xl font-bold text-[#191F28] mb-3 group-hover:text-[#3182F6] transition-colors">어드민 통계 대시보드 API</h3>
                            <p className="text-sm text-[#4E5968] leading-relaxed mb-6">복잡한 집계 쿼리 최적화 및 실시간 데이터 시각화 인터페이스 지원</p>
                            <div className="flex gap-3">
                                <span className="text-[11px] font-bold text-[#8B95A1]">#Database</span>
                                <span className="text-[11px] font-bold text-[#8B95A1]">#Query</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
      </div>
    </div>
  )
}
