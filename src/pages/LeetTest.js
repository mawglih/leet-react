import { useLoaderData } from "react-router-dom";

const DisplayData = () => {
    const card = useLoaderData();
    console.log('test data', card);

    return(
        <div>This is a test</div>
    )
}

export default DisplayData;
