import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FooterNav } from '../../data'
import { Blog } from "../../Context/Context";

const About = () => {
  const { authModel, setAuthModel } = Blog();
  return (
    <div className=''>
      <div className='flex flex-col items-center mb-32'>
        <h1 className="font-title text-[2.7rem] sm:text-[3.7rem] md:text-[4.2rem] font-normal">Everyone Has a Story To Tell.</h1>
        <br />
        <p className='size text-[1.4rem] sm:text-[1.2rem] md:text-[1.4rem] font-title'>
          Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
          <br />
          <br />
          We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
          <br />
          <br />
          <span className='text-[1.8rem] sm:text-[1.5rem] md:text-[1.8rem] bg-gray-600'>Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</span>
          <br />
          <br />
          Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
          <br />
          <br />
          Instead of selling ads or selling your data, we’re supported by a growing community of Medium members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.
        </p>
      </div>
      <hr className='border-none h-0.5 bg-gray-600' />
      <div onClick={() => setAuthModel(true)} className='flex items-center justify-between p-10  hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300'>
        <p className='text-[2rem] sm:text-[3rem] md:text-[4rem] font-semibold'>Start Reading</p>
        <FaArrowRightLong className='text-[1.8rem] sm:text-[3rem] md:text-[4rem]' />
      </div>
      <hr className=' h-0.5 bg-gray-600' />
      <div onClick={() => setAuthModel(true)} className='flex items-center justify-between p-10  hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300'>
        <p className='text-[2rem] sm:text-[3rem] md:text-[4rem] font-semibold'>Start Writing</p>
        <FaArrowRightLong className='text-[1.8rem] sm:text-[3rem] md:text-[4rem]' />
      </div>
      <hr className='border-none h-0.5 bg-gray-600' />
      <div onClick={() => setAuthModel(true)} className='flex items-center justify-between p-10  hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300'>
        <p className='text-[1.9rem] sm:text-[3rem] md:text-[4rem] font-semibold '>Become a Member</p>
        <FaArrowRightLong className=' text-[1.8rem] sm:text-[3rem] md:text-[4rem]' />
      </div>
      <hr className='h-0.5 bg-gray-600' />
      <div className='size h-[70px] flex items-center md:justify-between md:flex-row flex-col pt-2'>
        <Link to={"/"}>
          <img
            className='h-[2.5rem] text-white'
            src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-2 text-xs underline">
            {FooterNav.map((link, i) => (
              <Link key={i} to={link.path}>
                {link.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default About