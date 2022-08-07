import React, { useState } from "react";
import './Filters.css';

const Filters = (props) => {
    const filterData = (event) => {
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
                            onChange={filterData}
                            className='filterCheckbox'
                            data-testid={`filterId${type}`}>
                        </input>
                        <label> {type} </label>
                    </li>
                )}
            </ul>
        </React.Fragment>
    );
}

export default Filters;