import { use, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from "../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function RatingsReviewsSection({property}) {
    const [rating, setRating] = useState(0);
    const {user} = use(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewText = e.target.reviewText.value;
        // console.log(reviewText, rating)
        const userName = user.displayName;
        const profilePic = user.photoURL;
        const propertyName = property.propertyName;
        const postedTime = new Date().toISOString(); 
        const image= property.imageLink;
        const reviewData ={reviewText, rating, userName,propertyName,postedTime, image,profilePic} 
        // console.log(reviewData)
        fetch('http://localhost:3000/reviews',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Property Review is Successfully Added!')
                    e.target.reset();
                    
                }
            })

    };
    return (
        <section className="mt-10 p-4">
            <h2 className="text-3xl font-semibold text-secondary mb-6">Ratings & Reviews</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div>
                    <p className="mb-2 font-medium text-xl text-secondary">Your Rating</p>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        name='rating'
                        onChange={setRating}
                        isRequired
                    />
                </div>
                <label className="text-lg text-secondary font-semibold mb-2">Review</label>
                <textarea
                    placeholder="Write your review..."
                    className="textarea border-2 border-primary hover:outline-2 hover:outline-primary outline-0 text-lg text-secondary w-full"
                    name="reviewText"
                    required
                />
                <button className="btn w-full text-primary hover:text-white bg-white hover:bg-primary border-2 border-primary text-lg rounded-md">
                    Submit Review
                </button>
            </form>
             <Toaster />
        </section>
    );
}