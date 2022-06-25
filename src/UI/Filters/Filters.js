import React, { useState } from "react";

const Filters = (props) => {

    // const [selectedFilter, setSelectedFilter] = useState([]);

    const filterData = (event) => {
        // console.log(props.data.key);
        // console.log(event.target.value);
        props.filterHandler(props.data.key + '-' + event.target.value);
        // console.log(selectedFilter);
    }
    return (
        <React.Fragment>
            <h3>{props.data.key}</h3>
            <ul>
                {props.data.value.map((type) =>
                    <li >
                        <input type='checkbox' value={type} onClick={filterData}></input>
                        <label> {type} </label>
                    </li>
                )}

            </ul>
        </React.Fragment>
    );
}

export default Filters;