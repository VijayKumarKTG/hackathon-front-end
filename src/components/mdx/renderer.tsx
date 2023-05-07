'use client';
import { MDXProvider } from '@mdx-js/react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const components = {
  // Add your custom components here
  p: (props: any) => (
    <p className='m-0 text-white text-[16px] leading-6' {...props} />
  ),
  a: (props: any) => (
    <a
      className='m-0 text-white text-[16px] leading-6 underline font-semibold'
      {...props}
    />
  ),
};

interface Props {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: Props) => (
  <MDXProvider>
    <ReactMarkdown remarkPlugins={[gfm]} components={components}>
      {markdown}
    </ReactMarkdown>
  </MDXProvider>
);

export default MarkdownRenderer;
