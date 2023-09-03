import React from "react";

const page = (props) => {
    return(
        <>
        <div className="main">
            <h1>This is Home</h1>
            <p>Author Name is {props.Author}</p>
        </div>
        </>
    )
}

export default page