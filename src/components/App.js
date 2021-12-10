import { React, useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(listings => setProducts(listings))
  }, [])

  function handleDelete(id) {
    console.log("product id:" + id)
    
    fetch(`http://localhost:6001/listings/${id}`, {
        method: 'DELETE',
        body: '',
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(product => console.log(product))

    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(listings => setProducts(listings))
  }

  function handleSearch(searchInput) {
    setSearch(searchInput)
    console.log(search)
  }

  const productsToDisplay = products.filter((product) => {
    return (!search) ? true : product.description.includes(search)
  })

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer products={productsToDisplay} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
