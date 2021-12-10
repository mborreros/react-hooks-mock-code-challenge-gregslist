import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ products, handleDelete }) {

  console.log(products)

  const productsToDisplay = products.map((product) => {
    return (
      <ListingCard 
          key={product.id} 
          id={product.id}
          description={product.description} 
          image={product.image} 
          location={product.location}
          handleDelete={handleDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {productsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
