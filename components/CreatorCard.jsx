import React from 'react'
import Image from 'next/image'
import images from '../assets'


const CreatorCard = ({rank, creatorImage, creatorName, creatorEths}) => {
  return (
    <div className='min-w-190 min-lg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4'>
        <div className='w-8 h-8 minlg:w-10 minlg:h-10 bg-nft-red-violet flexCenter'>
            <p className='font-poppins text-white text-base font-semibold minlg:text-lg rounded-full'>{rank}</p>
        </div>
        <div className='my-2 flex justify-center'>
            <div className='relative w-20 h-20 minlg:w-28 minlg:h-28'>
                <Image 
                src={creatorImage}
                layout='fill'
                objectFit='cover'
                alt='creator'
                className='rounded-full'
                />
            </div>
        </div>
        <div className='mt-3 minlg:mt-7 text-center flexCenter flex-col'>
            {/* TODO: Fix Hydration Error while rendering creator names */}
            {/* <p className='font-poppins text-base dark:text-white text-nft-black-1 font-semibold '>{creatorName}</p> */} 
            <p className=' mt-1 font-poppins text-base dark:text-white text-nft-black-1 font-semibold'>{creatorEths.toFixed(2)} <span className='font-normal'>ETH</span></p>
        </div>
    </div>
  )
}

export default CreatorCard