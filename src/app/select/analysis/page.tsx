"use client";

import * as React from "react";
import { useState, useEffect } from "react";

// Mock data for AI Review
const MOCK_AI_REVIEW = {
  mustFix: [
    {
      id: 1,
      file: "src/services/store.service.ts",
      line: 84,
      title: "데이터 일관성 (Consistency)",
      content:
        "문서 업데이트 시 if_seq_no와 if_primary_term 파라미터를 사용하여 쓰기 충돌을 방지한 점이 적절합니다. 이를 통해 네트워크 지연 상황에서도 데이터의 일관성(Consistency)을 유지할 수 있습니다.",
      keyword: "if_seq_no",
      status: "done",
    },
    {
      id: 3,
      file: "src/services/update.service.ts",
      line: 56,
      title: "성능 최적화 (Performance)",
      content:
        "불필요한 전체 문서 업데이트 대신 Partial Update를 사용하여 샤드(Shard)에 가해지는 부하를 최소화했습니다.",
      keyword: "Partial Update",
      status: "done",
    },
  ],
  recommendation: [
    {
      id: 2,
      file: "src/utils/retry.ts",
      line: 24,
      title: "재시도 매커니즘 (Retry)",
      content:
        "현재 로직에서 충돌 발생 시 즉시 에러를 반환하고 있습니다. 실제 운영 환경에서는 retry_on_conflict 옵션을 추가하여 일시적인 경합 상황을 부드럽게 처리하는 것을 추천합니다.",
      keyword: "retry_on_conflict",
      status: "pending",
    },
  ],
};

export default function AnalysisPage() {
  const [currentStep, setCurrentStep] = useState(1); // 1: Bot Install, 2: PR Polling, 3: AI Review
  const [isPolling, setIsPolling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const installBot = async () => {
    setIsLoading(true);
    try {
      // Use proxy path /api/external
      const response = await fetch("/api/external/users/onboarding", {
        method: "GET",
      });
      const data = await response.json();
      if (data.botInstallUrl) {
        window.open(data.botInstallUrl, "_blank");
        setCurrentStep(2);
        setIsPolling(true);
      }
    } catch (error) {
      console.error("Failed to fetch bot install url:", error);
      alert("봇 설치 URL을 받아오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPolling) {
      intervalId = setInterval(async () => {
        try {
          // Use proxy path /api/external
          const response = await fetch("/api/external/users/mission-status");
          const data = await response.json();

          if (data.isMerged) {
            setIsPolling(false);
            setCurrentStep(3);
            clearInterval(intervalId);
          }
        } catch (error) {
          console.error("Failed to check PR status:", error);
        }
      }, 10000); // Poll every 10 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPolling]);

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
              <div className="w-8 h-8 rounded-full bg-[#3182F6] text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <span className="text-[#3182F6] font-bold">코드 분석</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-180px)] overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="flex-1 p-10 space-y-12 overflow-y-auto">
            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-16">
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-[#191F28]">
                      워크플로우
                    </h2>
                    <span className="px-3 py-1 bg-[#E8F3FF] text-[#3182F6] text-xs font-bold rounded-lg">
                      진행 단계
                    </span>
                  </div>
                  <div className="space-y-0">
                    {/* Step 1 */}
                    <div
                      className={`flex gap-8 transition-opacity duration-300 ${currentStep === 1 ? "opacity-100" : "opacity-40"}`}
                    >
                      <div className="flex flex-col items-center pt-1 shrink-0">
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-lg ${currentStep === 1 ? "bg-[#3182F6] text-white" : "bg-white text-[#8B95A1] border-2 border-[#E5E8EB]"}`}
                        >
                          {currentStep > 1 ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            1
                          )}
                        </div>
                        <div className="w-0.5 flex-1 bg-[#E5E8EB] my-2"></div>
                      </div>
                      <div className="pb-12">
                        <h3 className="text-lg font-bold text-[#191F28] mb-3">
                          Github Bot 설치
                        </h3>
                        <p className="text-[#4E5968] leading-relaxed mb-4">
                          Github Bot을 설치할 레포지토리를 선택해주세요.
                        </p>
                        {currentStep === 1 && (
                          <button
                            onClick={installBot}
                            disabled={isLoading}
                            className="px-5 py-3 bg-[#3182F6] text-white font-bold rounded-xl hover:bg-[#2272EB] transition-colors flex items-center gap-2"
                          >
                            {isLoading
                              ? "설치 URL 가져오는 중..."
                              : "Github Bot 설치하기"}{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div
                      className={`flex gap-8 transition-opacity duration-300 ${currentStep === 2 ? "opacity-100" : "opacity-40"}`}
                    >
                      <div className="flex flex-col items-center pt-1 shrink-0">
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-lg ${currentStep === 2 ? "bg-[#3182F6] text-white" : "bg-white text-[#8B95A1] border-2 border-[#E5E8EB]"}`}
                        >
                          {currentStep > 2 ? (
                            <i className="fa-solid fa-check"></i>
                          ) : (
                            2
                          )}
                        </div>
                        <div className="w-0.5 flex-1 bg-[#E5E8EB] my-2"></div>
                      </div>
                      <div className="pb-12">
                        <h3 className="text-lg font-bold text-[#191F28] mb-2">
                          코드 작성 및 PR 생성
                        </h3>
                        <p className="text-[#4E5968] text-sm mb-4">
                          제시된 이슈를 수정하고 PR 생성 후 병합을 진행해주세요.
                        </p>
                        {currentStep === 2 && (
                          <div className="flex items-center gap-3 px-4 py-3 bg-[#E8F3FF] rounded-xl text-[#3182F6] font-medium text-sm animate-pulse">
                            <i className="fa-solid fa-spinner fa-spin"></i>
                            PR 병합 대기 중... (10초마다 확인)
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div
                      className={`flex gap-8 transition-opacity duration-300 ${currentStep === 3 ? "opacity-100" : "opacity-40"}`}
                    >
                      <div className="flex flex-col items-center pt-1 shrink-0">
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-lg ${currentStep === 3 ? "bg-[#3182F6] text-white" : "bg-white text-[#8B95A1] border-2 border-[#E5E8EB]"}`}
                        >
                          3
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#191F28] mb-2">
                          AI 코드 리뷰 확인
                        </h3>
                        <p className="text-[#4E5968] text-sm">
                          AI 사수가 분석한 코드 리뷰 결과를 확인하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-16">
                {currentStep === 3 && (
                  <section className="animate-fade-in-up">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-[#191F28]">
                        AI 시니어 리뷰
                      </h2>
                      <div className="flex gap-3">
                        <span className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF0F0] text-[#F04452] text-xs font-bold rounded-full">
                          <i className="fa-solid fa-circle-exclamation"></i>{" "}
                          필수 수정 {MOCK_AI_REVIEW.mustFix.length}
                        </span>
                        <span className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF8E1] text-[#FFBB00] text-xs font-bold rounded-full">
                          <i className="fa-solid fa-circle-info"></i> 권장{" "}
                          {MOCK_AI_REVIEW.recommendation.length}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {/* Must Fix Items */}
                      {MOCK_AI_REVIEW.mustFix.map((item) => (
                        <div
                          key={item.id}
                          className="group p-8 bg-white rounded-[32px] transition-all hover:translate-x-1 border border-transparent hover:border-[#F04452]/20"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-sm font-bold text-[#F04452] flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F04452]"></span>
                              {item.title}
                            </span>
                            <span className="text-xs font-mono text-[#8B95A1]">
                              {item.file}:{item.line}
                            </span>
                          </div>
                          <p className="text-[#333D4B] font-medium leading-relaxed mb-6">
                            {item.content
                              .split(item.keyword)
                              .map((part, i, arr) => (
                                <React.Fragment key={i}>
                                  {part}
                                  {i < arr.length - 1 && (
                                    <code className="bg-[#F2F4F6] px-1.5 py-0.5 rounded text-[#F04452]">
                                      {item.keyword}
                                    </code>
                                  )}
                                </React.Fragment>
                              ))}
                          </p>
                          <button className="text-[#3182F6] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            리뷰 반영 완료{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      ))}

                      {/* Recommendation Items */}
                      {MOCK_AI_REVIEW.recommendation.map((item) => (
                        <div
                          key={item.id}
                          className="group p-8 bg-white rounded-[32px] transition-all hover:translate-x-1"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-sm font-bold text-[#3182F6] flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#3182F6]"></span>
                              {item.title}
                            </span>
                            <span className="text-xs font-mono text-[#8B95A1]">
                              {item.file}:{item.line}
                            </span>
                          </div>
                          <p className="text-[#333D4B] font-medium leading-relaxed mb-6">
                            {item.content
                              .split(item.keyword)
                              .map((part, i, arr) => (
                                <React.Fragment key={i}>
                                  {part}
                                  {i < arr.length - 1 && (
                                    <code className="bg-[#F2F4F6] px-1.5 py-0.5 rounded text-[#3182F6]">
                                      {item.keyword}
                                    </code>
                                  )}
                                </React.Fragment>
                              ))}
                          </p>
                          <button className="text-[#8B95A1] text-sm font-bold flex items-center gap-2">
                            반영 대기 중 <i className="fa-solid fa-clock"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
