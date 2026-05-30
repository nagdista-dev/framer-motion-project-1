import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
 

const Footer = () => {
  return (
      <div className="container mx-auto py-16 px-4">
            <div className="border-t border-white/10 pt-8 flex justify-center items-center gap-10 max-sm:flex-col">
                <ul className="flex items-center justify-center gap-6 flex-wrap">
                    
                    <a 
                        href="https://github.com"
                        className='text-white/70 hover:text-purple-300 transition-colors duration-300'
                    >
                        <AiFillGithub size={24} />
                    </a>

                    <a href="https://x.com" className='text-white/70 hover:text-purple-300 transition-colors duration-300'>
                        <AiOutlineTwitter size={24} />
                    </a>
                    <a href="https://facebook.com" className='text-white/70 hover:text-purple-300 transition-colors duration-300'>
                        <AiFillFacebook size={24} />
                    </a>
                    <a href="https://instagram.com" className='text-white/70 hover:text-purple-300 transition-colors duration-300'>
                        <AiFillInstagram size={24} />
                    </a>
                    <a href="https://telegram.org" className='text-white/70 hover:text-purple-300 transition-colors duration-300'>
                        <FaTelegramPlane size={24} />
                    </a>
                </ul>
            </div>
      </div>
  );
};

export default Footer