'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: number) => ({
      translateY: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.3,
        delay: i * 0.02,
      },
    }),
    hidden: { translateY: 200 },
  };

  // Split "EarthQuake" into individual characters
  const brandName = 'EarthQuake';
  const characters = brandName.split('');

  return (
    <>

      <div
        className='relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black'
        ref={container}
      >
        <div className='sm:container px-4 mx-auto'>
          <div className='md:flex justify-between w-full'>
            <div>
              <h1 className='md:text-4xl text-2xl font-semibold'>
                Let&apos;s do great work together
              </h1>
              <div className='pt-2 pb-6 md:w-99'>
                <p className='md:text-2xl text-xl py-4'>
                  Get early access to our Discord*
                </p>
                <a
                  href='https://discord.gg/HFUJEXfe'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white md:text-2xl'
                >
                  <span className='py-3 px-6 font-medium'>
                    Click here to join Discord
                  </span>
                  <span className='bg-black h-full px-4 flex items-center justify-center'>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      className='w-6 h-6'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className='flex gap-10'>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  SITEMAP
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/music-library'>Music Library</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/about'>About</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/faq'>FAQ</Link>
                </li>
              </ul>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  SOCIAL
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.instagram.com/earthquake_studio?igsh=MTc0cW5qcnZzaHUwcw%3D%3D&utm_source=qr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline'
                  >
                    Instagram
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://youtube.com/@earthquake_studio?si=N46OraR7VxQb6zIo'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline'
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-y-2 md:py-4 border-gray-200 flex items-center justify-center'>
            <motion.div
              ref={ref}
              className='text-4xl md:text-6xl font-light tracking-wider text-black flex'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
            >
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={variants}
                  className='inline-block'
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2'>
            <span className='font-medium'>
              &copy; 2025 Earthquakestudio. All Rights Reserved.
            </span>
            <Link href='/privacy' className='font-semibold'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
