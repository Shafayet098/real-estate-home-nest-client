import React from 'react';

const ratings = [
    {
        id: 1,
        reviewer: "Ali Hossen",
        property: "Modern Chateau",
        rating: 5,
        review: "Amazing property! Very clean and well located.",
        date: "2026-03-15",
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 2,
        reviewer: "John Doe",
        property: "Luxury Villa",
        rating: 4,
        review: "Great place, but slightly expensive.",
        date: "2026-03-12",
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80",
    },
];
function RatingCard({ data }) {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">

            {/* Thumbnail */}
            <figure className="h-[180px]">
                <img
                    src={data.image}
                    alt={data.property}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body p-5 space-y-3">

                {/* Property Name */}
                <h2 className="text-lg font-semibold text-primary">
                    {data.property}
                </h2>

                {/* Reviewer */}
                <p className="text-sm text-base-content/70">
                    Reviewed by <span className="font-medium">{data.reviewer}</span>
                </p>

                {/* Stars */}
                <div className="flex text-warning text-lg">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                            {i < data.rating ? "★" : "☆"}
                        </span>
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-base-content/80 leading-6">
                    {data.review}
                </p>

                {/* Date */}
                <p className="text-xs text-base-content/50">
                    {new Date(data.date).toDateString()}
                </p>

            </div>
        </div>
    );
}
const Retings = () => {
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 mt-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-10">
                    My Ratings & Reviews
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ratings.map((item) => (
                        <RatingCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Retings;