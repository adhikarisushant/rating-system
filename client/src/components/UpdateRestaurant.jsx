import axios from 'axios';
import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const UpdateRestaurant = (props) => {
    const {id} = useParams();
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(`http://localhost:3005/api/v1/restaurants/${id}`);
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        }

        fetchData();
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const updatedRestaurant = await axios.put(`http://localhost:3005/api/v1/restaurants/${id}`, {
            name,
            location,
            price_range: priceRange
        })
        navigate(`/`)
        // console.log(updatedRestaurant); 
    }

    return (
        <form action="form-group">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" type="text" />
            </div>

            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" className="form-control" type="text" />
            </div>

            <div className="form-group">
                <label htmlFor="price_range">Price Range</label>
                <input value={priceRange} onChange={(e) => setPriceRange(e.target.value)} id="price_range" className="form-control" type="number" />
            </div>

            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
    )
}

export default UpdateRestaurant
