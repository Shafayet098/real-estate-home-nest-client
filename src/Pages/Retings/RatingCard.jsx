
import { AuthContext } from '../../Components/Context/AuthContext';
import { Rating } from '@smastrom/react-rating';

const RatingCard = ({ review }) => {
    return (
        <div className="container flex flex-col w-full max-w-lg mx-auto divide-y divide-slate-300 rounded-md rounded-t-2xl bg-slate-100 shadow-md  text-secondary">
            <div className='h-[160px] overflow-hidden rounded-t-2xl object-cover'>
                <img className='object-cover' src={review?.image} alt="" />
            </div>
            <div className="flex justify-between p-4">

                <div className="flex space-x-4">
                    <div>
                        <img src={review?.profilePic} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-300" />
                    </div>
                    <div>
                        <h4 className="font-bold">{review?.userName}</h4>
                        <span className="text-xs text-gray-400">{review?.postedTime}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-yellow-500">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review?.rating}
                        name='rating'
                    />
                    <span className="text-3xl font-bold mr-4">{review?.rating}</span>
                </div>
            </div>
            <div className='px-4'>
                <div className='text-secondary text-xl font-semibold'>Property Name: {review?.propertyName}</div>
                <div className="py-2 space-y-2 text-md text-accent">
                    <p><span className='text-secondary font-semibold'>Remark:</span>  {review?.reviewText}</p>

                </div>
            </div>

        </div>
    );
};

export default RatingCard;