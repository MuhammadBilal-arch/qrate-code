import Link from 'next/link';

export const Reviews = () => {
  const reviews = [
    {
      reviewText: "A great experience! Highly recommend this service.",
      rating: 4.9,
      clientName: "John Doe",
      reviewCount: 29630,
      companyName: "Aardy",
      website: "https://www.aardy.com",
      url: 'https://www.aardy.com',
    },
    {
      reviewText: "Excellent customer support and easy to use!",
      rating: 4.8,
      clientName: "Jane Smith",
      reviewCount: 3191,
      companyName: "TripInsure101",
      website: "https://www.tripinsure101.com",
      url: 'https://www.tripinsure101.com',
    },
    {
      reviewText: "Quick and reliable. Will definitely use again.",
      rating: 5,
      clientName: "Carlos Gomez",
      reviewCount: 1725,
      companyName: "MexiPass",
      website: "https://www.mexipass.com",
      url: 'https://www.mexipass.com',
    },
    {
      reviewText: "Very smooth process and great prices!",
      rating: 4.7,
      clientName: "Emma Brown",
      reviewCount: 1288,
      companyName: "Travel Defenders",
      website: "https://www.traveldefenders.com",
      url: 'https://www.traveldefenders.com',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl text-black font-semibold text-center mb-8">What Our Customers Are Saying</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
              <p className="text-sm text-gray-700 mb-4">{review.reviewText}</p>
              <div className="flex items-center mb-2">
                <span className="text-xl font-semibold text-yellow-500">{review.rating} </span>
                <span className="ml-2 text-sm text-gray-400">Rating</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">By: {review.clientName}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-700 font-semibold">Company: {review.companyName}</p>
                <Link href={review.website} className="text-sm text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  {review.website}
                </Link>
              </div>
              <Link href={review.url} className="text-blue-500 hover:text-blue-700 text-sm" target="_blank" rel="noopener noreferrer">
                Read More Reviews
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
