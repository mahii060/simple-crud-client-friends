import { useLoaderData } from "react-router-dom";

const Update = () => {
    const friend = useLoaderData()
    console.log(friend);
    return (
        <div>
            <h2>This is update page: {friend.name}</h2>
        </div>
    );
};

export default Update;