import React from 'react';

const AddProperties = () => {
    return (
        <div className="card-body p-6 md:p-8 mt-16 container mx-auto">
            <h1 className="text-4xl font-bold text-center text-secondary">
                Add Property
            </h1>
            <p className="text-center text-secondary mt-2">
                Fill in the details below to add a new property listing.
            </p>

            <div className='p-8 sm:p-12  bg-slate-100 shadow-lg rounded-md'>
                <form className="space-y-5 bg-slate-100 text-xl">
                    <div>
                        <label className="label mb-2">
                            <span className="text-secondary font-medium">Property Name</span>
                        </label>
                        <input
                            type="text"
                            name="propertyName"
                            placeholder="Enter property name"
                            className="input outline-primary border-0 w-full text-primary text-md font-semibold"
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
                            className="textarea textarea-bordered w-full h-28 outline-primary border-0 text-primary text-md font-semibold"
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

                                className="select select-bordered w-full outline-primary border-0 text-primary text-md font-semibold"
                            >
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

                                placeholder="Enter price"
                                className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold"
                                required
                            />
                        </div>
                        <div>
                            <label className="label mb-2">
                                <span className="label-text font-medium text-secondary">Square Feet</span>
                            </label>
                            <input
                                type="text"
                                name="price"

                                placeholder="Enter Square Feet"
                                className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold"
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

                                placeholder="Enter Beds Number"
                                className="input input-bordered w-full outline-primary border-0 text-primary text-md font-semibold"
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
                            className="input outline-primary border-0 w-full text-primary text-md font-semibold"
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

                            placeholder="Enter image URL"
                            className="input w-full outline-primary border-0 text-primary text-md font-semibold"
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

                                placeholder="Enter your email"
                                className="input outline-primary border-0 w-full text-primary text-md font-semibold"
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
                                value=''
                                placeholder="Enter your name"
                                className="input outline-primary border-0 w-full text-primary text-md font-semibold"
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-3">
                        <button type="submit" className="btn border-2 border-primary  w-full text-xl   text-primary font-semibold hover:bg-primary hover:text-white">
                            Add Property
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddProperties;