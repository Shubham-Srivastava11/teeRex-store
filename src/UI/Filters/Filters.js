import React, { useState } from "react";

const Filters = (props) => {

    // const [selectedFilter, setSelectedFilter] = useState();

    const filterData = (event) => {

        // setSelectedFilter();
        // props.props.props.filter([props.data.key + '-' + event.target.value]);
        props.filterHandler(props.data.id + ':' + event.target.value);

    }
    return (
        <React.Fragment>
            <h3>{props.data.key}</h3>
            <ul>
                {props.data.value.map((type) =>
                    <li>
                        <input
                            type='checkbox'
                            value={type}
                            onClick={filterData}>
                        </input>
                        <label> {type} </label>
                    </li>
                )}
            </ul>
        </React.Fragment>
    );
}

export default Filters;