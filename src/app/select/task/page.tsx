"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

// Mock Data for Repositories based on HTML reference
const REPOSITORIES = [
  {
    id: 7,
    title: "Clean-Architecture-Template",
    description:
      "중도 합류를 통해 기존의 레이어드 아키텍처를 클린 아키텍처로 전환하는 과정을 경험해보세요. 테스트 코드 작성이 주요 과제입니다.",
    tech: "TypeScript",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "초급",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "1,240",
    stars: "85",
    isRecommended: true,
  },
  {
    id: 2,
    title: "E-commerce-Dashboard-Refactor",
    description:
      "복잡한 상태 관리 로직을 Redux Toolkit에서 Zustand로 전환하고 성능 최적화를 진행하는 프로젝트입니다.",
    tech: "React",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "중급",
    levelClass: "bg-[#FFF0F0] text-[#FF4D4F]",
    views: "856",
    stars: "42",
    isRecommended: false,
  },
  {
    id: 3,
    title: "Personal-Blog-SEO-Project",
    description:
      "SEO 최적화가 필요한 블로그 프로젝트에 합류하여 Meta 태그 관리 및 서버 사이드 렌더링 로직을 개선합니다.",
    tech: "Next.js",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "초급",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "2,103",
    stars: "128",
    isRecommended: false,
  },
  {
    id: 4,
    title: "FastAPI-Microservice-Auth",
    description:
      "마이크로서비스 아키텍처 기반의 인증 모듈을 구축하는 과정입니다. OAuth2와 JWT 구현 경험을 쌓을 수 있습니다.",
    tech: "Python",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "중급",
    levelClass: "bg-[#FFF0F0] text-[#FF4D4F]",
    views: "542",
    stars: "31",
    isRecommended: false,
  },
  {
    id: 5,
    title: "Spring-JPA-Board-Legacy",
    description:
      "기존의 MyBatis 기반 게시판 프로젝트를 Spring Data JPA로 마이그레이션하는 협업 프로젝트입니다.",
    tech: "Spring",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "입문",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "3,421",
    stars: "204",
    isRecommended: false,
  },
  {
    id: 6,
    title: "Vue3-Composition-UI-Kit",
    description:
      "Vue3의 Composition API를 활용하여 사내 공통 UI 컴포넌트 라이브러리를 구축하는 프로젝트에 기여해보세요.",
    tech: "Vue.js",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "초급",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "93,323",
    stars: "7,600",
    isRecommended: false,
  },
  {
    id: 1,
    title: "elasticsearch",
    description:
      "Elasticsearch는 분산형 RESTful 검색 및 분석 엔진입니다. 방대한 데이터를 실시간으로 저장, 검색, 분석할 수 있으며, 검색 엔진 최적화 및 플러그인 개발을 경험할 수 있습니다.",
    tech: "Java",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "중급",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "670",
    stars: "55",
    isRecommended: false,
  },
];

function TaskSelectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedRepoId, setSelectedRepoId] = React.useState<number | null>(
    null,
  );

  // Get params
  const job = searchParams.get("job");
  const techsParam = searchParams.get("techs");
  const selectedTechIds = techsParam ? techsParam.split(",") : [];

  // Map IDs to Names for display
  const TECH_ID_TO_NAME: Record<string, string> = {
    java: "Java",
    nodejs: "Node.js",
    spring: "Spring", // Adjusted to match mock data
    python: "Python",
    react: "React",
    typescript: "TypeScript",
    nextjs: "Next.js",
    vuejs: "Vue.js",
  };

  // Generate available filters - Show ALL techs regardless of selection
  // const filterTechs = ["React", "TypeScript", "Next.js", "Node.js", "Python", "Spring Boot", "Vue.js", "Java"]
  const filterTechs = ["Java", "Spring", "Python", "Node.js"];

  // Initialize active filters with selected techs from params
  // Use useEffect to update if params change, or just initial state
  const [activeFilters, setActiveFilters] = React.useState<string[]>(() => {
    return selectedTechIds
      .map((id) => TECH_ID_TO_NAME[id] || id)
      .filter((name) => filterTechs.includes(name));
  });

  const toggleFilter = (tech: string) => {
    setActiveFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  // Filter Repositories
  const filteredRepos = REPOSITORIES.filter((repo) => {
    // If no filters selected, show ALL (or show NONE? usually ALL in this context if "All" button is gone)
    // Interpret "Not All" as removing the "All" button, but empty selection implies no restrictions.
    if (activeFilters.length === 0) return true;

    // Check if repo matches ANY of the active filters
    return activeFilters.some(
      (filter) =>
        repo.tech.toLowerCase().includes(filter.toLowerCase()) ||
        filter.toLowerCase().includes(repo.tech.toLowerCase()),
    );
  });

  const handleNext = () => {
    if (!selectedRepoId) {
      alert("프로젝트를 선택해주세요.");
      return;
    }
    // Pass the selected repository ID and previous techs to the analysis page
    // Also pass 'job' param if needed by next step, though currently only analysis uses it?
    // Let's pass it to be safe and consistent
    const query = techsParam
      ? `?techs=${techsParam}&repo=${selectedRepoId}`
      : `?repo=${selectedRepoId}`;
    const jobQuery = job ? `&job=${job}` : "";
    router.push(`/select/analysis${query}${jobQuery}`);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header is handled by layout, but we need main padding */}

      <main className="px-20 py-12 max-w-[1440px] mx-auto">
        {/* Progress Stepper - Custom for this page to match design */}
        <div className="flex items-center gap-3 mb-12">
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#3182F6] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <span className="text-[#3182F6] font-bold">과제 선택</span>
          </div>
          <div className="w-12 h-[2px] bg-gray-200"></div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <span className="font-medium">코드 분석</span>
          </div>
        </div>

        {/* Filter Section */}
        <section className="bg-white rounded-2xl p-8 border border-[#E5E8EB] shadow-sm mb-10">
          <div className="mb-0">
            <h2 className="text-sm font-bold text-[#8B95A1] mb-4 uppercase tracking-wider">
              기술 스택 필터
            </h2>
            <div className="flex flex-wrap gap-3">
              {filterTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={cn(
                    "px-5 py-2.5 rounded-full font-medium text-sm transition-colors",
                    activeFilters.includes(tech)
                      ? "bg-[#3182F6] text-white font-semibold"
                      : "bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]",
                  )}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* <div className="flex justify-end border-t border-[#F2F4F6] pt-6">
                <button className="px-8 py-4 bg-[#3182F6] text-white rounded-xl font-bold text-[16px] hover:bg-[#1B64DA] transition-colors shadow-lg shadow-blue-100">
                    필터링 적용하기
                </button>
            </div> */}
        </section>

        {/* Repository List Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#191F28]">
                탐색된 레포지토리
              </span>
              <span className="text-[#3182F6] font-bold text-xl">
                {filteredRepos.length}
              </span>
            </div>
            {/* <div className="flex bg-[#F2F4F6] p-1 rounded-lg">
                    <button className="px-4 py-2 bg-white rounded-md shadow-sm text-sm font-bold flex items-center gap-2 text-[#191F28]">
                        <i className="fa-solid fa-grip"></i> 카드 뷰
                    </button>
                    <button className="px-4 py-2 text-[#8B95A1] text-sm font-medium flex items-center gap-2 hover:text-[#4E5968]">
                        <i className="fa-solid fa-list"></i> 리스트 뷰
                    </button>
                </div> */}
          </div>

          {filteredRepos.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              {filteredRepos.map((repo) => (
                <div
                  key={repo.id}
                  onClick={() => setSelectedRepoId(repo.id)}
                  className={cn(
                    "group relative p-6 bg-white rounded-2xl border-2 transition-all cursor-pointer",
                    selectedRepoId === repo.id
                      ? "border-[#3182F6] shadow-sm"
                      : "border-[#E5E8EB] shadow-sm hover:border-[#3182F6]",
                  )}
                >
                  {selectedRepoId === repo.id && (
                    <div className="absolute top-4 right-4">
                      <i className="fa-solid fa-circle-check text-[#3182F6] text-xl"></i>
                    </div>
                  )}

                  <div className="flex gap-2 mb-4">
                    <span
                      className={cn(
                        "text-[11px] font-bold px-2 py-1 rounded",
                        repo.techClass,
                      )}
                    >
                      {repo.tech}
                    </span>
                    {/* <span className={cn("text-[11px] font-bold px-2 py-1 rounded", repo.levelClass)}>{repo.level}</span> */}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#191F28] group-hover:text-[#3182F6] transition-colors">
                    {repo.title}
                  </h3>
                  <p className="text-[#4E5968] text-sm leading-relaxed mb-6 line-clamp-3">
                    {repo.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F2F4F6]">
                    {/* <button className="text-[#3182F6] text-sm font-bold flex items-center gap-1">
                                    자세히보기 <i className="fa-solid fa-arrow-right text-[10px]"></i>
                                </button> */}
                    <div className="flex items-center gap-3 text-[#8B95A1] text-xs">
                      <span className="flex items-center gap-1">
                        <i className="fa-regular fa-eye"></i> {repo.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="fa-regular fa-star"></i> {repo.stars}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#8B95A1]">
              <i className="fa-solid fa-magnifying-glass text-4xl mb-4"></i>
              <p>선택하신 기술 스택에 해당하는 과제가 없습니다.</p>
            </div>
          )}
        </section>
      </main>

      {/* Bottom Floating Action Bar */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-20 flex justify-end pointer-events-none z-50">
        <button
          onClick={handleNext}
          className={cn(
            "pointer-events-auto px-12 py-5 bg-[#191F28] text-white rounded-2xl font-bold text-lg shadow-2xl transition-all active:scale-95 flex items-center",
            !selectedRepoId &&
              "opacity-50 cursor-not-allowed hover:bg-[#191F28]",
          )}
        >
          선택한 프로젝트로 합류하기{" "}
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}

export default function TaskSelectPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <TaskSelectContent />
    </React.Suspense>
  );
}
