import Image from "next/image";
import { Nav } from "./components/nav";
import { ASSETS } from "@/public/path";
import { IoIosSearch } from "react-icons/io";
import { CategoryCarousel } from "./components/carousels/categories";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { Footer } from "./components/footer";
import { Reviews } from "./components/reviews";

export default function Home() {
  const insuranceCompanies = [
    {
      name: "AARDY",
      website: "aardy.com",
      trustScore: "5 out of 5",
      rating: 4.9,
      reviews: 29630,
    },
    {
      name: "TripInsure101",
      website: "tripinsure101.com",
      trustScore: "5 out of 5",
      rating: 4.9,
      reviews: 3191,
    },
    {
      name: "MexiPass International Insurance Services",
      website: "www.mexipass.com",
      trustScore: "5 out of 5",
      rating: 4.9,
      reviews: 1725,
    },
    {
      name: "Travel Defenders",
      website: "traveldefenders.com",
      trustScore: "5 out of 5",
      rating: 4.9,
      reviews: 1288,
    },
  ];

  return (
    <div className="bg-white overflow-hidden">

      <div
        className="flex w-full bg-cover bg-center h-[50vh] items-center justify-center"
        style={{ backgroundImage: `url(${ASSETS.HERO})` }}
      >
        <div className="text-black text-center space-y-8 -mt-20">
          <div className="space-y-2">
            <div className="font-bold  xl:text-5xl">
              Find a company you can trust
            </div>
            <div className="font-medium  xl:text-2xl">
              Real reviews by real people.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex w-[500px] 2xl:w-[600px] items-center justify-between px-2 bg-white text-black space-x-2 h-14 rounded-[30px]  shadow-custom">
              <input
                className="bg-transparent outline-none h-full w-full px-4"
                placeholder="Search for company or category"
                type="text"
              />
              <button className="bg-blue-500 h-10 w-10 min-w-10 rounded-full text-xl text-white flex items-center justify-center">
                <IoIosSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black w-full mt-10">
        <CategoryCarousel />
      </div>
      <div className="max-w-[1200px] mt-10 mx-auto bg-blue-500 rounded-2xl flex justify-between p-14">
        <div className="flex flex-col space-y-4 w-1/2">
          <div className="font-bold text-4xl">
            Help millions make the right choice
          </div>
          <div className="text-xl">
            Share your experience on Trustpilot, where real reviews make a
            difference.
          </div>
          <div>
            <button className="bg-black py-2 px-4 rounded-lg">
              Login or sign up
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-6 w-1/2">
          <img
            src={ASSETS.HERO}
            alt=""
            className="rounded-2xl h-52 w-[150px]"
          />
          <img
            src={ASSETS.HERO}
            alt=""
            className="rounded-2xl h-52 w-[150px]"
          />
          <img
            src={ASSETS.HERO}
            alt=""
            className="rounded-2xl h-52 w-[150px]"
          />
        </div>
      </div>
      {/* BEST IN BANKS */}
      <div className="max-w-[1200px] mx-auto text-black mt-10 space-y-4">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl">Best in Bank</div>
          {/* See all button */}
          <button className="py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center">
            <span className="ml-2">See more</span>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="border-gray-200 border p-4 rounded-2xl">
            <div className="relative h-20 w-[100px]">
              <div className="absolute space-x-1 py-0.5 flex items-center right-0 z-10 top-0 bg-blue-500 text-white text-xs px-2 rounded">
                <FaCheck className="text-[10px]" />{" "}
                <div className="font-medium">verified</div>
              </div>
              <img
                src={ASSETS.HERO}
                alt=""
                className="h-24 w-[100px] absolute rounded-xl"
              />
            </div>
            <div className="mt-8">
              <div className="font-semibold">DuGood Credit Union</div>
              <div className="text-sm text-gray-500 font-medium">
                www.dugood.org
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="flex space-x-1 items-center">
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="text-xs flex space-x-1">
                  <div>4.0</div>
                  <div className="text-gray-500">(993)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-gray-200 border p-4 rounded-2xl">
            <div className="relative h-20 w-[100px]">
              <div className="absolute space-x-1 py-0.5 flex items-center right-0 z-10 top-0 bg-blue-500 text-white text-xs px-2 rounded">
                <FaCheck className="text-[10px]" />{" "}
                <div className="font-medium">verified</div>
              </div>
              <img
                src={ASSETS.HERO}
                alt=""
                className="h-24 w-[100px] absolute rounded-xl"
              />
            </div>
            <div className="mt-8">
              <div className="font-semibold">DuGood Credit Union</div>
              <div className="text-sm text-gray-500 font-medium">
                www.dugood.org
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="flex space-x-1 items-center">
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="text-xs flex space-x-1">
                  <div>4.0</div>
                  <div className="text-gray-500">(993)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-gray-200 border p-4 rounded-2xl">
            <div className="relative h-20 w-[100px]">
              <div className="absolute space-x-1 py-0.5 flex items-center right-0 z-10 top-0 bg-blue-500 text-white text-xs px-2 rounded">
                <FaCheck className="text-[10px]" />{" "}
                <div className="font-medium">verified</div>
              </div>
              <img
                src={ASSETS.HERO}
                alt=""
                className="h-24 w-[100px] absolute rounded-xl"
              />
            </div>
            <div className="mt-8">
              <div className="font-semibold">DuGood Credit Union</div>
              <div className="text-sm text-gray-500 font-medium">
                www.dugood.org
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="flex space-x-1 items-center">
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="text-xs flex space-x-1">
                  <div>4.0</div>
                  <div className="text-gray-500">(993)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-gray-200 border p-4 rounded-2xl">
            <div className="relative h-20 w-[100px]">
              <div className="absolute space-x-1 py-0.5 flex items-center right-0 z-10 top-0 bg-blue-500 text-white text-xs px-2 rounded">
                <FaCheck className="text-[10px]" />{" "}
                <div className="font-medium">verified</div>
              </div>
              <img
                src={ASSETS.HERO}
                alt=""
                className="h-24 w-[100px] absolute rounded-xl"
              />
            </div>
            <div className="mt-8">
              <div className="font-semibold">DuGood Credit Union</div>
              <div className="text-sm text-gray-500 font-medium">
                www.dugood.org
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="flex space-x-1 items-center">
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaStar className="text-[#fdcc0d]" />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="text-xs flex space-x-1">
                  <div>4.0</div>
                  <div className="text-gray-500">(993)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BEST IN TRAVEL INSURANCE COMPANY */}
      <div className="max-w-[1200px] mx-auto text-black my-10 space-y-4">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl">Best in Travel Insurance Company</div>
          {/* See all button */}
          <button className="py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center">
            <span className="ml-2">See more</span>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {insuranceCompanies.map((item, index) => (
            <div key={index} className="border-gray-200 border p-4 rounded-2xl">
              <div className="relative h-20 w-[100px]">
                <div className="absolute space-x-1 py-0.5 flex items-center right-0 z-10 top-0 bg-blue-500 text-white text-xs px-2 rounded">
                  <FaCheck className="text-[10px]" />{" "}
                  <div className="font-medium">verified</div>
                </div>
                <img
                  src={ASSETS.HERO}
                  alt=""
                  className="h-24 w-[100px] absolute rounded-xl"
                />
              </div>
              <div className="mt-8">
                <div className="font-semibold line-clamp-1">{item?.name}</div>
                <div className="text-sm text-gray-500 font-medium">
                  {item?.website}
                </div>
                <div className="flex space-x-2 mt-2">
                  <div className="flex space-x-1 items-center">
                    <FaStar className="text-[#fdcc0d]" />
                    <FaStar className="text-[#fdcc0d]" />
                    <FaStar className="text-[#fdcc0d]" />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <div className="text-xs flex space-x-1">
                    <div>4.0</div>
                    <div className="text-gray-500">(993)</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Reviews/>

    </div>
  );
}
