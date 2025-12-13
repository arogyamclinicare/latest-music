'use client';

import React, { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const [openPopup, setOpenPopUp] = useState(false);
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

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const clientEmail = formData.get('newsletter_email')!;

    // TODO: Integrate with newsletter API
    // Newsletter signup handled here

    setOpenPopUp(true);
    target.reset();

    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <>
      {openPopup && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-6 py-4 rounded-lg shadow-lg z-50">
          <p className="font-medium">We received your message, thanks!</p>
        </div>
      )}

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
                  Sign up for our newsletter*
                </p>
                <div className='hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white hover:text-black md:text-2xl'>
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className='relative z-2 grid grid-cols-6 w-full h-full'
                  >
                    <input
                      type='email'
                      name='newsletter_email'
                      className='border-none bg-transparent py-3 px-6 col-span-5 text-white placeholder:text-white/70 focus:outline-none'
                      placeholder='Your Email *'
                      required
                    />
                    <button
                      type='submit'
                      className='cursor-pointer w-full hover:bg-white bg-black text-black h-full cols-span-1 flex items-center justify-center transition-colors'
                    >
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        className='w-full h-[80%]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                          fill='#000'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
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
                  <Link href='/about'>About us</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/music-library'>Music Library</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/how-it-works'>How It Works</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/for-artists'>For Artists</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/pricing'>Pricing</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  SOCIAL
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline'
                  >
                    Twitter
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline'
                  >
                    Instagram
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline'
                  >
                    Facebook
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
              &copy; 2024 Earthquakestudio. All Rights Reserved.
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
