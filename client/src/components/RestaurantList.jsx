    import React from 'react'
    
    const RestaurantList = () => {
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
                        <tr>
                            <td>McDonalds</td>
                            <td>New york</td>
                            <td>$$$</td>
                            <td>rating</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    
    export default RestaurantList
    