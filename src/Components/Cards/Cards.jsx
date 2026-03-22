import { GrLocation } from 'react-icons/gr';
import { LiaBathSolid } from 'react-icons/lia';
import { LuSquareMenu } from 'react-icons/lu';
import { RiHotelBedLine } from 'react-icons/ri';
import { Link } from 'react-router';
import Card from '../Card/Card';

const Cards = ({ properties }) => {
    // console.log(properties)
    return (
        <section className=" text-gray-100">
            <div className='flex flex-col items-center mb-16'>
                <h1 className='text-4xl md:text-5xl text-secondary text-center font-semibold mb-3'>Featured Properties</h1>
                <div className='w-12 h-1 bg-secondary mb-2'></div>
                <p className='text-secondary text-center text-md md:text-xl'>His needs result from something escape him indeed are consectetur will</p>
            </div>

            <div className="grid justify-center grid-cols-1 px-2 sm:px-4 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    properties.slice(0, 6).map(property => <Card property={property}
                    key={property._id}></Card>)
                }
            </div>

            <div className="flex justify-center mt-12">
                <Link to={'/allproperties'}>
                    <button type="button" className="cursor-pointer px-6 py-3 text-md font-semibold outline-2 outline-primary rounded-md bg-white hover:bg-primary  text-primary hover:text-white">Load more posts...</button>
                </Link>
            </div>
        </section>
    );
};

export default Cards;