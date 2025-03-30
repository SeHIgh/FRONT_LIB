import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        // 여기에 커스텀 컴포넌트를 추가할 수 있습니다.
    };
}
// 예를 들어, <MyCustomComponent>를 추가하고 싶다면:
// import MyCustomComponent from "./MyCustomComponent";
//
// export function useMDXComponents(components: MDXComponents): MDXComponents {
//     return {
//         ...components,
//         MyCustomComponent,
//     };
// }
// 이와 같이 사용하면 MDX 파일 내에서 <MyCustomComponent>를 사용할 수 있습니다.