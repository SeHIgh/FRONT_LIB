"use client";

import React, { ReactElement, JSXElementConstructor } from "react";
// import Image from "next/image";
// import Link from "next/link";
import { MDXComponentProps } from "config/post";

interface MDXContentProps {
    content: ReactElement<
        MDXComponentProps,
        string | JSXElementConstructor<MDXComponentProps>
    >;
}

// interface ImageProps {
//     src: string;
//     alt: string;
//     width?: number;
//     height?: number;
// }

// interface LinkProps {
//     href: string;
//     children: React.ReactNode;
// }

// interface PreProps {
//     children: React.ReactNode;
// }

// // MDX에서 사용할 커스텀 컴포넌트들
// const components = {
//     // 이미지 최적화를 위한 커스텀 Image 컴포넌트
//     img: ({ src, alt, width = 800, height = 400 }: ImageProps) => (
//         <div className="my-8">
//             <Image
//                 src={src}
//                 alt={alt}
//                 width={Number(width)}
//                 height={Number(height)}
//                 className="rounded-lg"
//                 loading="lazy"
//             />
//         </div>
//     ),

//     // 커스텀 링크 컴포넌트
//     a: ({ href, children }: LinkProps) => (
//         <Link
//             href={href}
//             className="text-blue-600 hover:text-blue-800 underline"
//             target={href.startsWith("http") ? "_blank" : "_self"}
//             rel={href.startsWith("http") ? "noopener noreferrer" : ""}
//         >
//             {children}
//         </Link>
//     ),

//     // 코드 블록을 위한 커스텀 컴포넌트
//     pre: ({ children }: PreProps) => (
//         <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4">
//             {children}
//         </pre>
//     ),
// };

export function MDXContent({ content }: MDXContentProps) {
    return <div className="mdx-content">{content}</div>;
}
