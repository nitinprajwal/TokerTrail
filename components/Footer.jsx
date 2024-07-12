import React from "react";
import Image from "next/image";
import images from "../assets";
import { Button } from ".";
import { useTheme } from "next-themes";

const FooterLinks = ({heading, items}) => (
    <div className="flex-1 justify-start items-start ">
        <h3 className="font-poppins dark:text-white text-nft-black-1 text-xl mb-10">{heading}</h3>
        {items.map((item, index) =>(
            <p key={index} className="font-poppins  dark:text-white text-nft-black-1 font-normal text-base cursor-pointer  dark:hover:text-white hover:text-nft-dark my-3">{item}</p>
        ))}
    </div>
)

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className=" w-full minmd:4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              TokenTrail
            </p>
          </div>
          <p className='font-poppins "dark:text-white text-nft-black-1 font-semibold text-base mt-6'>
            Subscribe to get the latest updates
          </p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white dark:border-nft-black-2 border-nft-gray-2 rounded-md ">
            <input
              type="email"
              placeholder="your email"
              className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minglg:text-lg outline-none"
            />
            <div className="flex-initial">
              <Button btnName="Email" classStyles="rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex-1 flexBetween flex-wrap ml-10 md:ml-0 md:mt-8">
            <FooterLinks heading='Learn More' items={['Explore', 'How it Works', 'Contact Us']}/>
            <FooterLinks heading='Help Section' items={['Help Center', 'Terms of Service', 'Privacy Policy']}/>
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t  dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            Cryptokat
          </p>
          <div className="flex flex-row sm:mt-4">
            {[
              images.instagram,
              images.twitter,
              images.telegram,
              images.discord,
            ].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={index}>
                <Image
                  src={image}
                  objectFit="contain"
                  width={24}
                  height={24}
                  alt="socialmedia handles"
                  className={theme === "Light" && "filter invert"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
