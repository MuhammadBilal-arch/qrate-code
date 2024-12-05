"use client";
import { useState , Fragment } from "react";
import { ASSETS } from "@/public/path";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";

const Category = () => {
  const companies = [
    {
      name: "AARDY",
      website: "aardy.com",
      trustScore: "5 out of 5",
      rating: 4.9,
      reviews: 29630,
      status: "Verified",
      location: "United States",
    },
    {
      name: "TripInsure101",
      website: "tripinsure101.com",
      trustScore: "5 out of 5",
      rating: 4.7,
      reviews: 3191,
      status: "Verified",
      location: "United States",
    },
    {
      name: "MexiPass International Insurance Services",
      website: "www.mexipass.com",
      trustScore: "5 out of 5",
      rating: 4.5,
      reviews: 1725,
      status: "Claimed",
      location: "Canada",
    },
    {
      name: "Travel Defenders",
      website: "traveldefenders.com",
      trustScore: "5 out of 5",
      rating: 4.0,
      reviews: 1288,
      status: "Verified",
      location: "United States",
    },
  ];

  // Filter state
  const [ratingFilter, setRatingFilter] = useState("Any");
  const [locationFilter, setLocationFilter] = useState("United States");
  const [companyStatusFilter, setCompanyStatusFilter] = useState("Verified");

  // Filtered companies based on filters
  const filteredCompanies = companies.filter((company) => {
    const ratingCondition =
      ratingFilter === "Any" ||
      (ratingFilter === "3.0+" && company.rating >= 3) ||
      (ratingFilter === "4.0+" && company.rating >= 4) ||
      (ratingFilter === "4.5+" && company.rating >= 4.5);

    const locationCondition = company.location === locationFilter;
    const statusCondition = company.status === companyStatusFilter;

    return ratingCondition && locationCondition && statusCondition;
  });

  return (
    <div className=" min-h-screen px-5 md:px-0">
      <div className=" mx-auto text-black">
        <div className="bg-teal-500 text-white text-center py-10">
          <div className="text-3xl lg:text-4xl font-bold mb-3">
            Best in Home & Garden
          </div>
          <div>Compare the best companies in this category</div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          {/* Main Section */}
          <main className="max-w-7xl mx-auto flex mt-10">
            {/* Filters */}
            <aside className="w-64 p-4 bg-gray-100 min-h-screen">
              {/* Rating Filter */}
              <div className="mb-6 text-sm">
                <h3 className="font-semibold mb-2">Rating</h3>
                <ul className="text-xs flex rounded-md space-x-1">
                  {["Any", "3.0+", "4.0+", "4.5+"].map((rating) => (
                    <li
                      key={rating}
                      className="px-2 py-1 border border-black cursor-pointer"
                      onClick={() => setRatingFilter(rating)}
                    >
                      {rating}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location Filter */}
              <div className="mb-6 text-sm">
                <h3 className="font-semibold mb-2">Location</h3>
                <div className="px-2 bg-white">
                  <select
                    className="py-1 px-4 w-full outline-none"
                    onChange={(e) => setLocationFilter(e.target.value)}
                    value={locationFilter}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>

              {/* Company Status Filter */}
              <div className="mb-6 text-sm">
                <h3 className="font-semibold mb-2">Company Status</h3>
                <ul className="space-y-2">
                  {["Verified", "Claimed"].map((status) => (
                    <li
                      key={status}
                      className="cursor-pointer"
                      onClick={() => setCompanyStatusFilter(status)}
                    >
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={companyStatusFilter === status}
                          className="mr-2"
                        />
                        {status}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold mb-2 text-sm">Subcategories</h3>
                  <h3 className="text-xs text-blue-500 font-medium">
                    Show all
                  </h3>
                </div>
                <ul className="space-y-2 text-xs">
                  <li className="border border-black px-4 py-1.5 max-w-min whitespace-nowrap rounded-sm">
                    Adult Entertainment
                  </li>
                  <li className="border border-black px-4 py-1.5 max-w-min whitespace-nowrap rounded-sm">
                    Children Entertainment
                  </li>
                </ul>
              </div>
            </aside>

            {/* Companies List */}
            <div className="flex-1 space-y-4 bg-white p-4">
              <div className="flex justify-between text-xs">
                <div>1-20 of 10,000 results</div>
                <div className="flex space-x-2 items-center">
                  <div>Sort by</div>
                  <select className="max-w-[150px] rounded-sm text-center border border-gray-300 py-1">
                      <option>Most relevant</option>
                      <option>Highest number of reviews</option>
                      <option>Most recent reviews</option>
                  </select>
                </div>
              </div>
              {filteredCompanies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white shadow-custom rounded-lg px-4 py-3 flex flex-col justify-between"
                >
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      {/* Image Section */}
                      <img
                        src={ASSETS.HERO}
                        alt={`${company.name} Logo`}
                        className="h-28 w-[120px] object-cover rounded-lg mb-4"
                      />

                      {/* Company Info */}
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-lg font-bold">{company.name}</h3>
                        <a
                          href={`https://${company.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 text-sm hover:underline"
                        >
                          {company.website}
                        </a>
                        <p className="text-gray-500 text-sm mt-1">
                          {company.reviews.toLocaleString()} reviews
                        </p>
                        <p className="text-gray-500 text-sm">
                          Trust Score: {company.trustScore}
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <div className="flex space-x-1 items-center">
                            {[...Array(5)].map((_, starIndex) => (
                              <Fragment key={starIndex}>
                                {starIndex < Math.floor(company.rating) ? (
                                  <FaStar className="text-[#fdcc0d]" />
                                ) : (
                                  <FaRegStar className="text-[#fdcc0d]" />
                                )}
                              </Fragment>
                            ))}
                          </div>
                          <div className="text-xs flex space-x-1">
                            <div>{company.rating.toFixed(1)}</div>
                            <div className="text-gray-500">
                              ({company.reviews.toLocaleString()})
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="bg-blue-500 text-white px-3 py-0.5 h-6 text-xs flex items-center justify-center rounded">
                      MOST RELEVANT
                    </span>
                  </div>

                  {/* Rating and Badge */}
                  <div className="flex items-center justify-between text-sm mt-2 border-t border-gray-200 py-1">
                    <div className="space-x-2 flex text-gray-400">
                      <MdOutlineMailOutline />
                      <TiPhoneOutline />
                    </div>
                    <div className="text-blue-500">Reviews</div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-center my-4">
                <button className="px-3 py-1 border rounded-l">Previous</button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button key={page} className="px-3 py-1 border">
                    {page}
                  </button>
                ))}
                <button className="px-3 py-1 border rounded-r">Next</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Category;
