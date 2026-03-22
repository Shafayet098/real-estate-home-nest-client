import React, { use, useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
// import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../../Components/Context/AuthContext';
import PropertyCard from './PropertyCard';
import { useNavigation } from 'react-router';

const MyProperties = () => {
    const { user } = use(AuthContext)
    const [properties, setProperties] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/properties/admin/${user.email}`)
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    // console.log(properties)
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div className='mt-22 container mx-auto'>
            <div className='text-4xl text-secondary text-center'>
                You Can Make Any Change : Updata/Delete
            </div>
            <div>
                {
                    properties.length ?
                        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                properties.map(property => <PropertyCard
                                    key={property._id}
                                    property={property}
                                    setProperties={setProperties}
                                    properties={properties}></PropertyCard>)
                            }
                        </div>
                        :
                        <div className='text-4xl flex justify-center items-center mt-20 text-red-300'>
                            No Property Is Added
                        </div>
                }
            </div>
        </div>
    );
};

export default MyProperties;