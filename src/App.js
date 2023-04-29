import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import UserList from "./Components/UserList";
import Alert from "./Components/Alert";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [noResults,setNoResults] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      let url = "https://api.github.com/users";
      if (query) {
        url = `https://api.github.com/search/users?q=${query}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if(data.items && data.items.length===0){setNoResults(true)}else{setNoResults(false)}
      if (query) {
        setUsers(data.items);
      } else {
        setUsers(data);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [query]);

  const handleSearch = (searchQuery, setSearchQuery) => {
    if (searchQuery.trim() === "") {
      setQuery("");
    } else {
      setQuery(searchQuery);
    }
    setSearchQuery("");
  };

  

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Search onSearch={handleSearch} />
        <Alert noResults={noResults}/>
        <UserList users={users} loading={loading} />
      </div>
    </div>
  );
}

export default App;