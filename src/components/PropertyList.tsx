import React, { useState } from "react";
import styles from "/src/styles/PropertyList.module.css";
import Link from "next/link";

interface Property {
  Id: number;
  ThumbnailURL: string;
  Title: string;
  Location: string;
  Bedrooms: number;
  Bathrooms: number;
  "Sale Price": number;
}

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  const [visibleProperties, setVisibleProperties] = useState(8);

  const loadMoreProperties = () => {
    setVisibleProperties((prev) => prev + 4);
  };

  return (
    <div className={styles.propertyList}>
      {properties.slice(0, visibleProperties).map((property) => (
        <div key={property.Id} className={styles.propertyCard}>
          <img
            src={property.ThumbnailURL}
            alt={property.Title}
            className={styles.propertyImage}
          />
          <h3 className={styles.propertyTitle}>{property.Title}</h3>
          <p className={styles.propertyLocation}>{property.Location}</p>
          <p className={styles.propertyDetails}>
            {property.Bedrooms} BR | {property.Bathrooms} Bath
          </p>
          <p className={styles.propertyPrice}>${property["Sale Price"]}</p>
          <Link href={`/details/${property.Id}`}>
            <button className={styles.viewDetailsButton}>View Details</button>
          </Link>
        </div>
      ))}
      {visibleProperties < properties.length && (
        <button className={styles.loadMoreButton} onClick={loadMoreProperties}>
          Load More
        </button>
      )}
    </div>
  );
};

export default PropertyList;
