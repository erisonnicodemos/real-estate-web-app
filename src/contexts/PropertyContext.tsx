import { Property } from '@/types/Property';
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

interface PropertyContextType {
  properties: Property[];
  savedProperties: Property[]; 
  fetchProperties: () => Promise<void>;
  getPropertyById: (id: number) => Property | undefined;
  saveProperty: (property: Property) => void; 
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [savedProperties, setSavedProperties] = useState<Property[]>([]);


  const fetchProperties = async () => {
    try {
      const response = await axios.get('/api/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const getPropertyById = (id: number) => {
    return properties.find((property) => property.Id === id);
  };

  const saveProperty = (property: Property) => {
    if (!savedProperties.find((savedProp) => savedProp.Id === property.Id)) {
      const updatedSavedProperties = [...savedProperties, property];
      setSavedProperties(updatedSavedProperties);
      localStorage.setItem('savedProperties', JSON.stringify(updatedSavedProperties));
    }
  };

  useEffect(() => {
    const savedPropertiesFromLocalStorage = localStorage.getItem('savedProperties');
    if (savedPropertiesFromLocalStorage) {
      setSavedProperties(JSON.parse(savedPropertiesFromLocalStorage));
    }
    fetchProperties();
  }, []);

  return (
    <PropertyContext.Provider value={{ properties, savedProperties, fetchProperties, getPropertyById, saveProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('usePropertyContext must be used within a PropertyProvider');
  }
  return context;
};