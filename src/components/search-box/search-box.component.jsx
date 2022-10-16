import './search-box.styles.css';

//Direct Desructuring can also be done
const SearchBox = ({ className, placeholder, onChangeHandler }) => {
    //const SearchBox = (props) => {
    return (
        <input
            type='search'
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
}

export default SearchBox;