import React from 'react';
import bannerIMG1 from '../../assets/vector1.png'
import bannerIMG2 from '../../assets/vector2.png'
const Banner = ({ inProgressCount, resolvedCount }) => {

    return (
        <div className='bg-[#f7f7f7]'>
            <div className='max-w-7xl mx-auto'>
                <div className='px-[2rem] py-[2rem] text-white h-100 md:h-65 flex flex-col md:flex-row gap-4 justify-center'>
                    <div className='relative bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] w-full h-full flex flex-col justify-center items-center rounded-[0.6rem]'>
                        <img className='absolute left-0 bottom-0 w-[40%] md:w-auto h-40 md:h-[100%]' src={bannerIMG1} alt="banner image-1" />
                        <h4 className='text-[1.2rem]'>In-Progress</h4>
                        <span className='font-bold text-[2.5rem]'>{inProgressCount}</span>
                        <img className='absolute right-0 bottom-0 w-[40%] md:w-auto h-40 md:h-[100%]' src={bannerIMG2} alt="banner image-2" />
                    </div>

                    <div className='relative bg-[linear-gradient(125.07deg,#54cf68,#00827a_100%)] w-full h-full flex flex-col justify-center items-center rounded-[0.6rem]'>
                        <img className='absolute left-0 bottom-0 w-[40%] md:w-auto h-40 md:h-[100%]' src={bannerIMG1} alt="banner image-1" />
                        <h4 className='text-[1.2rem]'>Resolved</h4>
                        <span className='font-bold text-[2.5rem]'>{resolvedCount}</span>
                        <img className='absolute right-0 bottom-0  w-[40%] md:w-auto h-40 md:h-[100%]' src={bannerIMG2} alt="banner image-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;