/* eslint-disable react/no-children-prop */
'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import './editor.css';

function handleEditorChange({ html, text }: any) {
  console.log(html, text);
}

function handleImageUpload(file: File, callback: any) {
  console.log(file, callback);
}

function renderHTML(text: string) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={materialOceanic}
              language={match[1]}
              PreTag='div'
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        h1: (props: any) => <h1 className='m-0 text-white' {...props} />,
      }}>
      {text}
    </ReactMarkdown>
  );
}

const AskQuestion = () => {
  return (
    <div className='bg-darkblue py-14 px-36'>
      <form className='bg-gray-100 py-11 px-9 rounded-3xl'>
        <h1 className='text-bold text-[32px] leading-10 text-white m-0 mb-10'>
          Ask a Question
        </h1>

        <div className='flex flex-col mb-8'>
          <label
            htmlFor='title'
            className='text-white text-base leading-5 block mb-[14px]'>
            Title*{' '}
            <span className='text-gray-200'>(Must be relevant to topic)</span>
          </label>
          <input
            type='text'
            id='title'
            name='title'
            required
            aria-required
            placeholder='Enter your question title in a single statement'
            className='block bg-gray-500 rounded-sm px-6 py-4 text-lg text-white'
          />
        </div>

        <div className='h-[max-content] mb-8'>
          <label
            htmlFor='details'
            className='text-white text-base leading-5 block mb-[14px]'>
            Details of your problem*{' '}
            <span className='text-gray-200'>
              (Please explain it in a clear and detailed way so that there is no
              confusion)
            </span>
          </label>
          <MdEditor
            id='details'
            name='details'
            aria-required
            className='h-[300px] border-none bg-darkblue rounded-sm'
            shortcuts={true}
            renderHTML={renderHTML}
            onChange={handleEditorChange}
            onImageUpload={handleImageUpload}
          />
        </div>

        <div className='h-[max-content] mb-8'>
          <label
            htmlFor='solutions'
            className='text-white text-base leading-5 block mb-[14px]'>
            Any solutions which you may have encountered with{' '}
            <span className='text-gray-200'>(Optional)</span>
          </label>
          <MdEditor
            id='solutions'
            name='solutions'
            aria-required
            className='h-[300px] border-none bg-darkblue rounded-sm'
            shortcuts={true}
            renderHTML={renderHTML}
            onChange={handleEditorChange}
            onImageUpload={handleImageUpload}
          />
        </div>

        <div className='flex flex-col mb-8'>
          <label
            htmlFor='tags'
            className='text-white text-base leading-5 block mb-[14px]'>
            Add question tags*{' '}
            <span className='text-gray-200'>
              (Get more reach and visibility, max upto 8)
            </span>
          </label>
          <input
            type='text'
            id='tags'
            name='tags'
            required
            aria-required
            placeholder='Type your tags and hit comma ( , )'
            className='block bg-gray-500 rounded-sm px-6 py-4 text-lg text-white'
          />
        </div>

        <div className='mb-8'>
          <h2 className='text-white'>Community Guidlinies</h2>
          <ul className='text-silver-200'>
            <li>
              Be respectful and considerate: Treat others with respect and
              kindness, even if you disagree with their views or opinions.
            </li>

            <li>
              Stay on topic: Make sure your questions and answers are relevant
              to the platform and specific to the topic you&#39;re discussing.
            </li>

            <li>
              Use clear and concise language: Use clear and easy-to-understand
              language when asking or answering questions.
            </li>

            <li>
              Provide helpful and informative answers: When answering questions,
              make sure your response is helpful and provides useful information
              to the person asking the question.
            </li>

            <li>
              Avoid spamming or self-promotion: Do not use the platform to
              promote yourself or your own products/services.
            </li>

            <li>
              Keep it professional: Avoid using inappropriate language, jokes or
              comments that could be deemed offensive or unprofessional.
            </li>

            <li>
              Be open to feedback: Be open to constructive criticism and
              feedback from others, and use it to improve your contributions.
            </li>

            <li>
              Follow community rules and policies: Make sure to read and follow
              the platform&#39;s rules and policies, as well as any specific
              guidelines for individual communities or topics.
            </li>
          </ul>
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className='cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
          <b className='text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
            Post Question
          </b>
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
