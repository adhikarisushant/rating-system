import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
    const {id} = useParams()
    const {selectedRestaurants, setSelectedRestaurants} = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/api/v1/restaurants/${id}`);
                setSelectedRestaurants(response.data.data.restaurant);
            } catch(err) {
                console.log(err);
            }
        }


        fetchData();
    },[])

    return (
        <div>
            {selectedRestaurants && selectedRestaurants.name}
               
        </div>
    )
}

export default RestaurantDetailPage
