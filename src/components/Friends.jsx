import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const Friends = () => {
    const loadedFriends = useLoaderData()
    const [friends, setFriends] = useState(loadedFriends)
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/friends/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert(`${_id} deleted successfully`)
                    const remaining = friends.filter(friend => friend._id !== _id);
                    setFriends(remaining)
                }
                console.log(data);
            })

    }
    return (
        <div>
            <h1>Friends list</h1>
            {
                friends.map(friend => <p key={friend._id}
                >Name: {friend.name}; Department: {friend.department} <button
                    onClick={() => handleDelete(friend._id)}
                    title="Delete">X</button>
                    <Link to={`/update/${friend._id}`}>
                        <button>Update</button>
                    </Link>
                </p>)
            }
        </div>
    );
};

export default Friends;