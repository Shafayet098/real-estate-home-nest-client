import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Components/Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Update = () => {
    const property = useLoaderData();
    // console.log(property)
    const navigate = useNavigate();
    const { user } = use(AuthContext)
    // console.log(user)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const realEstateData = Object.fromEntries(formData.entries());
        realEstateData.postedTime = new Date().toISOString();
        // console.log(realEstateData)

        fetch(`https://real-estate-home-nest-server.vercel.app/properties/${property._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(realEstateData)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   toast.success('Property is Successfully Updated!')
                   navigate(`/properties/${property._id}`)
                }
            })

    }
    return (
        <div className="card-body p-6 md:p-8 mt-16 container mx-auto">
            <h1 className="text-4xl font-bold text-center text-secondary">
                Update Property
            </h1>
            <p className="text-center text-secondary mt-2">
                Edit the details below to Update an existing property.
            </p>

            <div className='p-8 sm:p-12  bg-slate-100 shadow-lg rounded-md'>
                <form onSubmit={handleFormSubmit} className="space-y-5 bg-slate-100 text-xl">
                    <div>
                        <label className="label mb-2">
                            <span className="text-secondary font-medium">Property Name</span>
                        </label>
                        <input
                            type="text"
                            name="propertyName"
                            defaultValue={property?.propertyName}
                            placeholder="Enter property name"
                            className="input outline-primary border-0 w-full text-primary text-lg font-semibold"
                            required
                        />
                    </div>

                    <div>
                        <label className="label mb-2">
                            <span className="label-text font-medium text-secondary">Description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter property description"
                            defaultValue={property?.description}
                            className="textarea textarea-bordered w-full h-28 outline-primary border-0 text-primary text-lg font-semibold"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="label mb-2">
                                <span className="label-text text-secondary font-medium">Category</span>
                            </label>
                            <select
                                name="category"
                                defaultChecked={property?.category}
                                className="select select-bordered w-full outline-primary border-0 text-primary text-lg font-semibold"                    >
                                <option>Rent</option>
                                <option>Sale</option>
                                <option>Commercial</option>
                                <option>Land</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                            </select>
                        </div>

                        <div>
                            <label className="label mb-2">
                                <span className="label-text font-medium text-secondary">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                defaultValue={property?.price}
                                placeholder="Enter price"
                                className="input input-bordered w-full outline-primary border-0 text-primary text-lg font-semibold"
                                required
                            />
                        </div>
                        <div>
                            <label className="label mb-2">
                                <span className="label-text font-medium text-secondary">Square Feet</span>
                            </label>
                            <input
                                type="text"
                                name="squareFeet"
                                defaultValue={property?.squareFeet}
                                placeholder="Enter Square Feet"
                                className="input input-bordered w-full outline-primary border-0 text-primary text-lg font-semibold"
                                required
                            />
                        </div>
                        <div>
                            <label className="label mb-2">
                                <span className="label-text font-medium text-secondary">Beds</span>
                            </label>
                            <input
                                type="number"
                                name="beds"
                                defaultValue={property?.beds}
                                placeholder="Enter Beds Number"
                                className="input input-bordered w-full outline-primary border-0 text-primary text-lg font-semibold"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="label mb-2">
                            <span className="label-text font-medium text-secondary">Location</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter city, area, or address"
                            defaultValue={property?.location}
                            className="input outline-primary border-0 w-full text-primary text-lg font-semibold"
                            required
                        />
                    </div>

                    <div>
                        <label className="label mb-2">
                            <span className="label-text font-medium text-secondary">Image Link</span>
                        </label>
                        <input
                            type="url"
                            name="imageLink"
                            defaultValue={property?.imageLink}
                            placeholder="Enter image URL"
                            className="input w-full outline-primary border-0 text-primary text-lg font-semibold"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="label mb-2">
                                <span className="label-text font-medium text-secondary">User Email</span>
                            </label>
                            <input
                                type="email"
                                name="userEmail"
                                value={user?.email}
                                placeholder="Enter your email"
                                className="input outline-primary border-0 w-full text-primary text-lg font-semibold"
                                required
                            />
                        </div>

                        <div>
                            <label className="label mb-2">
                                <span className="label-text font-medium text-secondary">User Name</span>
                            </label>
                            <input
                                type="text"
                                name="userName"
                                value={user?.displayName}
                                placeholder="Enter your name"
                                className="input outline-primary border-0 w-full  text-primary text-lg font-semibold"
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-3">
                        <button type="submit" className=" btn border-2 border-primary  w-full text-xl  rounded-lg py-4  text-primary font-semibold hover:bg-primary hover:text-white">
                            Update Property
                        </button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Update;