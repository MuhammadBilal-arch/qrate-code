'use client'
import { useState } from "react";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const suggestions = [
    "Web Development",
    "React",
    "Next.js",
    "TailwindCSS",
    "JavaScript",
    "HTML & CSS",
    "Node.js",
    "GraphQL",
    "Express.js",
  ];

  // Filter suggestions based on the search term
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="">
      <div className="bg-teal-500 text-white ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center py-10 text-center lg:py-20">
            <div className="w-full px-4 lg:w-1/2 lg:px-0">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                    What are you looking for?
                </h2> 
              </div>

              <div className="mb-10">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      ></path>
                    </svg>
                  </div>

                  <form action="#" method="GET">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search here for threads"
                      className="p-4 pl-10 outline-none text-gray-600 rounded w-full border-gray-100"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setShowDropdown(e.target.value.length > 0); // Show dropdown if input has value
                      }}
                    />
                  </form>

                  {showDropdown && filteredSuggestions.length > 0 && (
                    <ul className="absolute w-full mt-2 bg-white text-black shadow-lg rounded-lg border">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
                          onClick={() => setSearchTerm(suggestion)} // Set selected suggestion as input value
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* <div className="text-lg">
                <p>
                  Can't find what you're looking for?<br className="sm:hidden" />
                  <a href="#" className="border-b border-white pb-1">
                    Create a new thread
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
