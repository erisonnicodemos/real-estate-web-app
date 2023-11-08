import React from "react";
import styles from "/src/styles/SavedPropertiesModal.module.css";
import { usePropertyContext } from "@/contexts/PropertyContext";
import { Property } from "@/types/Property";

interface SavedPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SavedPropertiesModal: React.FC<SavedPropertiesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { savedProperties } = usePropertyContext();
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`${styles["saved-properties-modal"]} ${
        isOpen ? "" : styles.hidden
      }`}
    >
      <div className={styles["saved-properties-modal-content"]}>
        <span className={styles["saved-properties-modal-close"]} onClick={handleClose}>
          &#x2715;
        </span>
        <h2>Saved Properties</h2>
        <ul>
          {savedProperties.map((property: Property) => (
            <li key={property.Id}>{property.Title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SavedPropertiesModal;
