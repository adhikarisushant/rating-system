    import React,{useEffect, useContext} from 'react'
    import axios from 'axios';
    import {useNavigate} from 'react-router-dom'
    import { RestaurantsContext }from '../context/RestaurantsContext';
    import StarRating from './StarRating';
    
    const RestaurantList = (props) => {
        let navigate = useNavigate();
        const {restaurants, setRestaurants} = useContext(RestaurantsContext)

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:3005/api/v1/restaurants')
                    setRestaurants(response.data.data.restaurants)
                } catch(err) {
                    console.log(err);
                }   
            }
            fetchData()
        }, [])

        const handleDelete = async (e, id) => {
            e.stopPropagation()
            try{
                const response = await axios.delete(`http://localhost:3005/api/v1/restaurants/${id}`)
                // console.log(response);
                setRestaurants(restaurants.filter(restaurant => {
                    return restaurant.id !== id
                }))
            }catch(err){
                console.log(err)
            }
        }

        const handleUpdate = (e, id) => {
            e.stopPropagation()
            navigate(`/restaurants/${id}/update`)
        }

        const handleRestaurantSelect = (id) => {
            navigate(`/restaurants/${id}`)
        }

        const renderRating = (i) => {
            if(!i.count){
                return(
                    <span className="text-warning ml-1">0 reviews</span>
                );
            }
            return(
                <>
                    <StarRating rating={i.id} />
                    <span className="text-warning ml-1">({i.count})</span>
                </>
            );
        }

        return (
            <div className="list-group">
                <table className="table table table-hover table-dark">
                    <thead>
                        <tr className="bg-primary">
                            <th scope="col">Restaurant</th>
                            <th scope="col">Location</th>
                            <th scope="col">Price Range</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {restaurants && restaurants.map((i) => {
                            return(
                            <tr 
                            key={i.id}
                            onClick={() => handleRestaurantSelect(i.id)}
                            >
                                <td>{i.name}</td>
                                <td>{i.location}</td>
                                <td>{"$".repeat(i.price_range)}</td>
                                <td>{renderRating(i)}</td>
                                <td><button onClick={(e) => handleUpdate(e, i.id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, i.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                            )

                        })}


                    </tbody>
                </table>
            </div>
        )
    }
    
    export default RestaurantList
    