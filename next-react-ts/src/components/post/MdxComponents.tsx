import { MDXComponents } from "mdx/types";

const ExternalLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
    >
        {children}
    </a>
);

const Image = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-full h-auto" />
);

const Callout = ({ children }) => (
    <blockquote className="border-l-4 pl-4 italic text-gray-600 bg-gray-100">
        {children}
    </blockquote>
);
// import { Callout } from './Callout';
export const MdxComponents: MDXComponents = {
    a: ExternalLink,
    img: Image,
    blockquote: Callout,
    Callout,
};
