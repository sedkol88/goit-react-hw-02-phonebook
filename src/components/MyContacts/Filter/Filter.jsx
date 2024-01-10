import styles from './filter.module.css';

const Filter = ({ changeFilter }) => {
  return <input onChange={changeFilter} name="filter" placeholder="Search" />;
};

export default Filter;
