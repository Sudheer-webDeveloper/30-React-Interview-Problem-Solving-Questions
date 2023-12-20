import React, { useState } from 'react'

const Fifteen = () => {
    const [items, setItems] = useState([
        "Apple",
        "banana",
        "Mango",
        "KinderJoy",
        "cadbuary",
      ]);
    
      const [searchTerm, setSearchTerm] = useState("");
    
      const filterItems = () => {
        const searchitems = items.filter((item) => {
          return item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
        });
    
        return searchitems;
      };
    
      console.log(filterItems());
    
      return (
        <div className="search">
          <div className="input">
            <h1>Search Functinality 15 th question</h1>
            <label htmlFor="search"> search</label>
    
            <input
              type="search"
              id="search"
              placeholder="search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
    
          <div className="list">
            <ul>
              {filterItems().map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item}</li>
                  </div>
                );
              })}
            </ul>
          </div>

          <hr />
        </div>
      );
}

export default Fifteen
