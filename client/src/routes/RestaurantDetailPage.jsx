import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { RestaurantsContext } from '../context/RestaurantsContext';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import StarRating from '../components/StarRating';

const RestaurantDetailPage = () => {
    const {id} = useParams()
    const {selectedRestaurants, setSelectedRestaurants} = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/api/v1/restaurants/${id}`);
                setSelectedRestaurants(response.data.data);
            } catch(err) {
                console.log(err);
            }
        }


        fetchData();
    },[])

    return (
        <div>
            {selectedRestaurants && (
                <>
                <h2 className="text-center display-1">{selectedRestaurants.restaurant.name}</h2>
                <div className="text-center">
                    <StarRating rating={selectedRestaurants.restaurant.average_rating} />
                    <span className="text-waring ml-1">
                        {selectedRestaurants.restaurant.count?
                        (`${selectedRestaurants.restaurant.count}`)
                        :('(0)')}
                    </span>

                </div>
                <div className="mt-3">
                    <Reviews reviews={selectedRestaurants.reviews} />
                </div>
                <AddReview />
                </>
            )}
            {/* selectedRestaurants.name */}
               
        </div>
    )
}

export default RestaurantDetailPage
