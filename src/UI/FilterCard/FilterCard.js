import Filters from '../Filters/Filters';
import style from './FilterCard.module.css';
import { useState } from "react";

const FilterCard = (props) => {
    const [selectedFilter, setSelectedFilter] = useState([]);

    const setFilters = (data) => {

        setSelectedFilter(selectedFilter.length > 0 ? [...selectedFilter, data] : [data]);
        props.filter(selectedFilter);
    }

    const filters = [{
        key: 'Colour',
        value: ['Red', 'Blue', 'Green']
    },
    {
        key: 'Gender',
        value: ['Male', 'Female']
    },
    {
        key: 'Price(INR)',
        value: ['0 - 250', '251 - 450', '450']
    },
    {
        key: 'Type',
        value: ['Polo', 'Hoodie', 'Basic']
    }]
    return (


        <div className={style.card_container} >
            <div className={style.innerCard}>
                {filters.map((data) =>
                    <Filters
                        key={data.key}
                        data={data}
                        filterHandler={setFilters} />
                )}
                {/* <h3>Colour</h3>
                <ul>
                    <li> <input type='checkbox' value='Red' onClick={filterData} ></input><label>  Red</label> </li>
                    <li> <input type='checkbox' ></input><label>  Blue</label> </li>
                    <li> <input type='checkbox' ></input><label>  Green</label> </li>
                </ul>
                <h3>Gender</h3>
                <ul>
                    <li> <input type='checkbox' ></input><label>  Men</label> </li>
                    <li> <input type='checkbox' ></input><label>  Women</label> </li>

                </ul>
                <h3>Price(INR)</h3>
                <ul>
                    <li> <input type='checkbox' ></input><label>  0 - 250</label> </li>
                    <li> <input type='checkbox' ></input><label>  251 - 450</label> </li>
                    <li> <input type='checkbox' ></input><label>  450</label> </li>
                </ul>
                <h3>Type</h3>
                <ul>
                    <li> <input type='checkbox' ></input><label>  Polo</label> </li>
                    <li> <input type='checkbox' ></input><label>  Hoodie</label> </li>
                    <li> <input type='checkbox' ></input><label>  Basic</label> </li>
                </ul> */}
            </div>
        </div >
    );
}

export default FilterCard;