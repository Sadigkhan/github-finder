import React, { useState } from "react";

function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visible,setVisible]=useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchQuery,setSearchQuery);
    handleVisible();
  };




  const handleVisible = (event) =>{
    setVisible(true);
  }

  const handleClear = () => {
    setSearchQuery("");
    props.onSearch("", setSearchQuery);
    setVisible(false);
  };
  return (
    <form onSubmit={handleSubmit} >
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search users on GitHub"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
      {
          visible && (
             <button className="btn btn-outline-danger btn-block mb-3" type="submit" onClick={handleClear}>Clear Browsing Data</button>
          )
      }
    </form>
  );
}

export default Search;