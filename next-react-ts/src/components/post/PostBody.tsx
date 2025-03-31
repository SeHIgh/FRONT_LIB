// import { MDXRemote } from 'next-mdx-remote/rsc';
// import a11yEmoji from '@fec/remark-a11y-emoji';
// import rehypePrettyCode from 'rehype-pretty-code';
// import rehypeSlug from 'rehype-slug';
// import remarkBreaks from 'remark-breaks';
// import remarkGfm from 'remark-gfm';
// import { MdxComponents } from './MdxComponents';
 
// export const PostBody = ({ post }) => {
//   return (
//     <MDXRemote 
//       source={post.content}
//       components={MdxComponents}  
//       options={{
//         mdxOptions: {
//           remarkPlugins: [remarkGfm, a11yEmoji, remarkBreaks],
//           rehypePlugins: [
//             [
//               rehypePrettyCode,
//               {theme: {dark: 'github-dark-dimmed', light: 'github-light'}},
//             ],
//             rehypeSlug,
//           ],
//         },
//       }}
//     />
//   );
// };