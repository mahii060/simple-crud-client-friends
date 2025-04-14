import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedFriend = useLoaderData()
    console.log(loadedFriend);
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const department = form.department.value;
        const updatedFriend = { name, department }
        fetch(`http://localhost:5000/friends/${loadedFriend._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedFriend)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert(`${loadedFriend.name} is updated successfully!`)
                }
                console.log(data);
            })

    }
    return (
        <div>
            <h2>This is update page: {loadedFriend.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedFriend.name} />
                <br />
                <input type="text" name="department" id="" defaultValue={loadedFriend.department} />
                <br />
                <input type="submit" value="Update Friend" />
            </form>
        </div>
    );
};

export default Update;