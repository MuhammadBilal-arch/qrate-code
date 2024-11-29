"use client";
import React from "react";
import {
  FaPaw,
  FaTint,
  FaIndustry,
  FaGraduationCap,
  FaMobileAlt,
  FaTheaterMasks,
  FaSuitcase,
} from "react-icons/fa";
import SearchSection from "../components/searchbar";
import { useRouter } from "next/navigation";

const CategoryList = () => {
  const navigate = useRouter();
  const categories = [
    {
      name: "Animals & Pets",
      subcategories: [
        "Animal Health",
        "Animal Parks & Zoo",
        "Cats & Dogs",
        "Horses & Riding",
        "Pet Services",
        "Pet Stores",
      ],
      color: "bg-yellow-200",
      icon: <FaPaw className="text-2xl text-yellow-600" />,
    },
    {
      name: "Beauty & Well-being",
      subcategories: [
        "Cosmetics & Makeup",
        "Hair Care & Styling",
        "Personal Care",
        "Salons & Clinics",
        "Tattoos & Piercings",
        "Wellness & Spa",
        "Yoga & Meditation",
      ],
      color: "bg-pink-200",
      icon: <FaTint className="text-2xl text-pink-600" />,
    },
    {
      name: "Business Services",
      subcategories: [
        "Administration & Services",
        "Associations & Centers",
        "HR & Recruiting",
        "Import & Export",
        "IT & Communication",
        "Office Space & Supplies",
        "Print & Graphic Design",
        "Research & Development",
        "Sales & Marketing",
        "Shipping & Logistics",
        "Wholesale",
      ],
      color: "bg-blue-200",
      icon: <FaSuitcase className="text-2xl text-blue-600" />,
    },
    {
      name: "Construction & Manufacturing",
      subcategories: [
        "Architects & Engineers",
        "Building Materials",
        "Chemicals & Plastic",
        "Construction Services",
        "Contractors & Consultants",
        "Factory Equipment",
        "Garden & Landscaping",
        "Industrial Supplies",
        "Manufacturing",
        "Production Services",
        "Tools & Equipment",
      ],
      color: "bg-green-200",
      icon: <FaIndustry className="text-2xl text-green-600" />,
    },
    {
      name: "Education & Training",
      subcategories: [
        "Colleges & Universities",
        "Courses & Classes",
        "Education Services",
        "Language Learning",
        "Music & Theater Classes",
        "School & High School",
        "Specials Schools",
        "Vocational Training",
      ],
      color: "bg-orange-200",
      icon: <FaGraduationCap className="text-2xl text-orange-600" />,
    },
    {
      name: "Electronics & Technology",
      subcategories: [
        "Appliances & Electronics",
        "Audio & Visual",
        "Computers & Phones",
        "Internet & Software",
        "Repair & Services",
      ],
      color: "bg-indigo-200",
      icon: <FaMobileAlt className="text-2xl text-indigo-600" />,
    },
    {
      name: "Events & Entertainment",
      subcategories: [
        "Adult Entertainment",
        "Children's Entertainment",
        "Clubbing & Nightlife",
        "Events & Venues",
        "Gambling",
        "Gaming",
        "Museums & Exhibits",
        "Music & Movies",
        "Theater & Opera",
        "Wedding & Party",
      ],
      color: "bg-teal-200",
      icon: <FaTheaterMasks className="text-2xl text-teal-600" />,
    },
  ];

  const onSelectCategory = (name: string) => {
    const formattedCategoryName = name
      .replace(/[&]/g, "") // Remove the '&' character
      .replace(/\s+/g, "_") // Replace spaces with underscores
      .toLowerCase(); // Convert to lowercase

    navigate.push(`/categories/${formattedCategoryName}`);
  };
  return (
    <div className="max-w-[1200px] mx-auto pb-10">
      <SearchSection />
      <h1 className="text-3xl text-black font-semibold my-10 text-center">
        Explore Companies by Category
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`rounded-md shadow-md hover:shadow-xl transition-all duration-300 pb-5`}
          >
            <div
              onClick={() => onSelectCategory(category.name)}
              className={`text-xl cursor-pointer space-y-2 font-bold text-gray-800 h-24 px-4 flex flex-col items-center justify-center text-center rounded-t-md ${category.color}`}
            >
              <div>{category.icon}</div>
              <div className="text-base font-semibold">{category.name}</div>
            </div>
            <ul className="mt-2 space-y-2 px-4">
              {category.subcategories.map((subcategory, subIndex) => (
                <li
                  onClick={() => onSelectCategory(subcategory)}
                  key={subIndex}
                  className="text-gray-600 border-b border-gray-300 py-2 hover:text-blue-500 cursor-pointer text-sm"
                >
                  {subcategory}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
