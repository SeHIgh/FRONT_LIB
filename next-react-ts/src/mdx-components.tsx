import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        // 커스텀 컴포넌트를 여기에 추가할 수 있습니다.
    };
}
