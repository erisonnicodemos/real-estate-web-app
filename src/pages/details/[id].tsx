import React, { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Details.module.css";
import { Property } from "@/types/Property";
import { usePropertyContext } from "@/contexts/PropertyContext";
import SavedPropertiesModal from "@/components/SavedPropertiesModal";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [message, setMessage] = useState("");
  const { getPropertyById, saveProperty } = usePropertyContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (id) {
      const propertyId = parseInt(id as string, 10);
      const selectedProperty = getPropertyById(propertyId);
      setProperty(selectedProperty || null);
    }
  }, [id, getPropertyById]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      fullName: { value: string };
      email: { value: string };
      phone: { value: string };
      comments: { value: string };
    };

    const fullName = target.fullName.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const comments = target.comments.value;

    if (!fullName || !email || !phone || !comments) {
      setMessage("All fields are required.");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setMessage("Invalid email format. (e.g., example@example.com)");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      setMessage("Phone number must be numeric (e.g., 1234567890).");
      return;
    }

    setMessage("Message sent successfully.");
    alert("Message sent successfully."); 
  };

  const handleSaveProperty = () => {
    if (property) {
      saveProperty(property);
      setMessage("Property saved successfully.");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={styles.propertyDetails}>
          <h1>
            {property?.Title}
            <button
              className={styles.favoriteButton}
              onClick={handleSaveProperty}
            >
              ❤️ Save Property
            </button>
            <button className={styles.favoriteButton} onClick={toggleModal}>
              📚 Saved Properties
            </button>
          </h1>
          {showModal && (
            <SavedPropertiesModal isOpen={showModal} onClose={toggleModal} />
          )}
          <p className={styles.price}>${property?.["Sale Price"]}</p>
          <img src={property?.ThumbnailURL} alt={property?.Title} />
          <div className={styles.details}>
            <div>
              <span>{property?.Bedrooms}</span> BED
            </div>
            <div>
              <span>{property?.Bathrooms}</span> BATH
            </div>
            <div>
              <span>{property?.Parking}</span> PARKING
            </div>
            <div>
              <span>{property?.Sqft}</span> SQFT
            </div>
            <div>
              <span>{property?.YearBuilt}</span> YEAR BUILT
            </div>
          </div>
          <div className={styles.description}>
            <p>{property?.Description}</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Contact Agent</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email (e.g., example@example.com)"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone (e.g., 1234567890)"
              pattern="[0-9-()+ ]+"
            />
            <textarea
              name="comments"
              required
              placeholder="Comments"
            ></textarea>
            <button type="submit">Contact Now</button>
          </form>
        </div>
      </div>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Details;
