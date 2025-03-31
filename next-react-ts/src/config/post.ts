import { ReactElement, JSXElementConstructor } from "react";

/**
 * MDXComponentProps
 * : MDX 문법을 사용하여 작성한 컴포넌트에 전달되는 Props 타입
 */
export type MDXComponentProps = {
    children?: React.ReactNode; // 자식 요소
    className?: string; // CSS 클래스
    [key: string]: unknown; // 추가 임의 속성
};

/**
 * PostAbstract
 * : 포스트의 기본 식별 정보에 해당하는 타입
 */
export type PostAbstract = {
    url: string; // 포스트 URL
    category: string; // 포스트 카테고리
    slug: string; // 포스트 식별자
};

/**
 * PostMatter
 * : 포스트 메타데이터(Front Matter)를 정의하는 타입
 */
export type PostMatter = {
    title: string; // 포스트 제목
    date: string; // 포스트 작성일 (예: "2025-03-14" 혹은 "2025-03-14T00:00:00Z")
    description: string; // 포스트 요약
    author?: string; // 작성자
    tags?: string[]; // 태그 목록
    coverImage?: string; // 커버 이미지
    seo?: { title?: string; description?: string }; // SEO 메타데이터
};

/**
 * PostDetail
 * : 포스트의 상세 정보를 나타내는 타입, PostMatter를 상속하며, 추가적으로 다음의 필드를 포함함
 */
export type PostDetail = PostMatter & {
    content: ReactElement<
        MDXComponentProps,
        string | JSXElementConstructor<MDXComponentProps>
    >;  // MDX로 작성된 실제 포스트 본문
    // MDXComponentProps를 기반으로 하는 ReactElement이며, 내부에서 JSX Element나 문자열을 반환할 수 있음음
    dateString: string; // 사용자에게 보여줄 포맷팅된 날짜 (예: "2025년 3월 30일")
    readingMinutes: number; // 예상 읽는 시간(분 단위)
};

/**
 * Post
 * : 포스트의 전체 정보를 나타내는 타입, PostAbstract와 PostDetail을 상속함
 */
export type Post = PostAbstract & PostDetail;

/**
 * CategoryDetail
 * : 개별 카테고리에 대한 상세 정보를 정의하는 타입
 */
export type CategoryDetail = {
    name: string;   // 카테고리 이름
    count: number;  // 해당 카테고리에 속한 포스트의 수
};

/**
 * categoryList
 * : 블로그에서 사용될 카테고리의 전체 목록
 * as const를 사용하여 배열의 각 요소를 리터럴 타입으로 고정
 * ※ 필요 없는 카테고리가 있다면 배열에서 제거하고, 추가로 필요한 카테고리는 추가 가능능
 */
export const categoryList = [
    "All",
    "Study",
    "Next.js Blog",
    "CS",
    "Algorithm",
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Spring",
    "Chart.js",
    "BootStrap",
    "Tailwind CSS",
    "WebSocket",
] as const;

/**
 * Category
 * : categoryList 배열에 포함된 문자열 중 하나만 허용하는 타입
 * 즉, "All", "Study", "Next.js Blog", ... 중 하나의 값이어야 함.
 */
export type Category = (typeof categoryList)[number];
