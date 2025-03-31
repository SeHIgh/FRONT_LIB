// import Image from 'next/image';
// import { useMemo } from 'react';

// const ExternalLink = ({ href, children }) => (
//     <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500"
//     >
//         {children}
//     </a>
// );

// const Callout = ({ children }) => (
//     <blockquote className="border-l-4 pl-4 italic text-gray-600 bg-gray-100">
//         {children}
//     </blockquote>
// );
// // import { Callout } from './Callout';

// export function MDXComponents() {
//     const components = useMemo(() => ({
//         a: ExternalLink,
//         img: ({ src, alt, ...props }) => (
//             <div className="relative w-full h-[400px] my-8">
//                 <Image
//                     src={src}
//                     alt={alt}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     loading="lazy"
//                     quality={75}
//                 />
//             </div>
//         ),
//         blockquote: Callout,
//         Callout,
//     }), []);

//     return components;
// }
