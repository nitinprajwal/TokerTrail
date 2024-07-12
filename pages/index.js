import React from "react";
import { Banner, CreatorCard, NFTCard } from "../components";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import images from "../assets";
import { makeId } from "../utils/makeid";
import { useTheme } from "next-themes";

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const theme = useTheme();

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 100;
    } else {
      current.scrollLeft += 100;
    }
  };
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };
  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);
    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  });

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          name="Discover, collect and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyles="justify-start mb-6 h-72 sm:60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />

        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text4-xl font-semibold ml-4 xs:ml-0">
            Top Sellers
          </h1>
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  creatorName={`0x${makeId(2)}...${makeId(2)}`}
                  creatorEths={10 - i * 0.5}
                />
              ))}
              {!hideButtons && (
                <>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                    onClick={() => handleScroll("left")}
                  >
                    <Image
                      src={images.left}
                      layout="fill"
                      objectFit="contain"
                      alt="leftarrow"
                      className={theme === "light" && "filter invert"}
                    />
                  </div>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                    onClick={() => handleScroll("right")}
                  >
                    <Image
                      src={images.right}
                      layout="fill"
                      objectFit="contain"
                      alt="rightarrow"
                      className={theme === "light" && "filter invert"}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Created NFTS  */}
        <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
                <h1 className=" flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text4-xl font-semibold sm:mb-4">Best NFTs</h1>
                {/* <div>Search Bar</div> */}
        </div>
        <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
             {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                <NFTCard
                key={`nft-${i}`}
                nft = {{
                    i,
                    name: `Nifty NFT ${i}`,
                    price: (10 - i * 0.534).toFixed(2),
                    seller: `0x${makeId(2)}...${makeId(2)}`,
                    owner: `0x${makeId(2)}...${makeId(2)}`,
                    description: 'Insane NFT on sale'
                }}
                />
             ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
