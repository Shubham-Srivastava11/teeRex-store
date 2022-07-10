import Filters from '../Filters/Filters';
import style from './FilterCard.module.css';
import { useState, useEffect } from "react";

const FilterCard = (props) => {
    const [selectedFilter, setSelectedFilter] = useState([]);

    useEffect(() => {
        props.filter(selectedFilter);
        console.log(selectedFilter);
    }, [selectedFilter])

    const setFilters = (data) => {
        if (selectedFilter.includes(data)) {
            const i = selectedFilter.indexOf(data);
            selectedFilter.splice(i, 1);
            if (selectedFilter.length === 0) {
                props.filter([]);
            } else {
                setSelectedFilter(selectedFilter);
                // props.filter(selectedFilter);
            }

        } else {
            setSelectedFilter(selectedFilter.length > 0 ? [...selectedFilter, data] : [data]);
        }

    }

    const filters = [{
        id: 'color',
        key: 'Colour',
        value: ['Red', 'Blue', 'Green']
    },
    {
        id: 'gender',
        key: 'Gender',
        value: ['Male', 'Female']
    },
    {
        id: 'price',
        key: 'Price(INR)',
        value: ['0 - 250', '251 - 450', '450']
    },
    {
        id: 'type',
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
            </div>
        </div >
    );
}

export default FilterCard;