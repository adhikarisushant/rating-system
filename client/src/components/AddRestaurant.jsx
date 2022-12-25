import React from 'react'

const AddRestaurant = () => {
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input 
                        type="text"
                        placeholder="name"
                        className="form-control" />
                    </div>

                    <div className="col">
                        <input 
                        type="text" 
                        placeholder="location"
                        className="form-control" />
                    </div>

                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>
                                disabled
                            </option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$$</option>
                            <option value="4">$$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
