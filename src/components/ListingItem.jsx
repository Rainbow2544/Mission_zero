import React from "react";
import "./ListingItem.css";

const ListingItem = ({ listing }) => {
  return (
    <div key={listing.id} id={listing.id} className="listingItemContainer">
      <img className="listingImg" src={listing.img} alt={listing.city} />
      <p className="cityName">
        {listing.city}, {listing.country}
      </p>
      <div className="des">
        <p>{listing.des}</p>
      </div>
    </div>
  );
};

export default ListingItem;
