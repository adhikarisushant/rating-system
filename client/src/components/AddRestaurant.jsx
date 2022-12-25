import React, {useState, useContext} from 'react'
import axios from 'axios';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
    const  { addRestaurants } = useContext(RestaurantsContext) 
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:3005/api/v1/restaurants", {
                name,
                location,
                price_range: priceRange,
            })
            addRestaurants(response.data.data.restaurant)
            // console.log(response);
        } catch(err){
            console.log(err)
        }

    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input 
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="form-control" />
                    </div>

                    <div className="col">
                        <input 
                        type="text" 
                        placeholder="location"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="form-control" />
                    </div>

                    <div className="col">
                        <select 
                        value={priceRange}
                        onChange={(e) =>setPriceRange(e.target.value)}
                        className="custom-select my-1 mr-sm-2">
                            <option disabled>
                                Price Range
                            </option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$$</option>
                            <option value="4">$$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
