"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  FaDumbbell,
  FaPaw,
  FaBolt,
  FaBuilding,
  FaShieldAlt,
  FaBed,
  FaTshirt,
  FaBiking,
  FaShoePrints,
  FaMoneyCheckAlt,
  FaTv,
  FaPaintBrush,
  FaShoppingBag,
  FaSeedling,
  FaPlane,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Fitness and Nutrition Service", icon: <FaDumbbell /> },
  { name: "Pet Store", icon: <FaPaw /> },
  { name: "Energy Supplier", icon: <FaBolt /> },
  { name: "Real Estate Agents", icon: <FaBuilding /> },
  { name: "Insurance Agency", icon: <FaShieldAlt /> },
  { name: "Bedroom Furniture Store", icon: <FaBed /> },
  { name: "Women's Clothing Store", icon: <FaTshirt /> },
  { name: "Men's Clothing Store", icon: <FaTshirt /> },
  { name: "Bicycle Store", icon: <FaBiking /> },
  { name: "Shoe Store", icon: <FaShoePrints /> },
  { name: "Mortgage Broker", icon: <FaMoneyCheckAlt /> },
  { name: "Appliance Store", icon: <FaTv /> },
  { name: "Cosmetics Store", icon: <FaPaintBrush /> },
  { name: "Electronics Store", icon: <FaShoppingBag /> },
  { name: "Garden Center", icon: <FaSeedling /> },
  { name: "Travel Agency", icon: <FaPlane /> },
];

export const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useRouter()

  // Move to the next category
  const nextCategory = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Move to the previous category
  const prevCategory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="max-w-[1200px] py-5 mx-auto overflow-hidden space-y-4 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl">What are you looking for?</div>
        <div className="flex items-center space-x-2">
          {/* Left arrow button */}
          <button
            onClick={prevCategory}
            className={`p-2 rounded-full ${
              currentIndex === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={currentIndex === 0}
          >
            <IoIosArrowBack size={24} />
          </button>

          {/* Right arrow button */}
          <button
            onClick={nextCategory}
            className={`p-2 rounded-full ${
              currentIndex === categories.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={currentIndex === categories.length - 1}
          >
            <IoIosArrowForward size={24} />
          </button>

          {/* See all button */}
          <button 
          onClick={()=> navigate.push('/categories')}
          className="py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center">
            <span className="ml-2">See all</span>
          </button>
        </div>
      </div>
      {/* Carousel container */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <div
            className="flex space-x-4 transform transition-transform duration-500 max-w-[1200px]"
            style={{ transform: `translateX(-${currentIndex * 200}px)` }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex min-w-[200px] flex-col items-center justify-center p-4 rounded-lg bg-gray-100 shadow-md"
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-center hover:underline-offset-2">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
