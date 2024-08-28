

const Search = ({search, searchHandler}) => {
    return (
        <>
            <input type="text" placeholder="Chercher..."  
            value={search} 
            onChange={searchHandler}/>
        </>
    );
};

export default Search;