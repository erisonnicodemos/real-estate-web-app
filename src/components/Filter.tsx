import React, { FC, FormEvent, useState } from "react";
import styles from "/src/styles/Filter.module.css";

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

const Filter: FC<FilterProps> = ({ onFilterChange }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const filters = Object.fromEntries(formData.entries());
    onFilterChange(filters);
  };

  return (
    <form className={styles.filterContainer} onSubmit={handleSubmit}>
      <div className={styles.filterItem}>
        <label htmlFor="bedrooms">Bedrooms:</label>
        <select id="bedrooms" name="bedrooms">
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3+">3+</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="bathrooms">Bathrooms:</label>
        <select id="bathrooms" name="bathrooms">
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3+">3+</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="parking">Parking:</label>
        <select id="parking" name="parking">
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3+">3+</option>
        </select>
      </div>

      <div className={styles.filterItem}>
        <label htmlFor="price">Max Price: ${sliderValue}</label>
        <input
          type="range"
          id="price"
          name="price"
          min="0"
          max="1000000"
          value={sliderValue}
          onChange={handleSliderChange}
          className={styles.slider}
        />
      </div>

      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Filter;
