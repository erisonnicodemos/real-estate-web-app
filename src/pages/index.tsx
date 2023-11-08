import React, { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList';
import Filter from '@/components/Filter';
import { Property, PropertyFilters } from '@/types/Property';
import { usePropertyContext } from '@/contexts/PropertyContext';

const Home: React.FC = () => {
  const { properties, fetchProperties } = usePropertyContext();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<PropertyFilters>({
    bedrooms: 'all',
    bathrooms: 'all',
    parking: 'all',
    price: '',
  });

  useEffect(() => {
    // Carregue todas as propriedades no primeiro render
    fetchProperties();
  }, []);

  useEffect(() => {
    // Aplicar os filtros quando as propriedades forem carregadas
    if (properties.length > 0) {
      const filtered = properties.filter((property: Property) => {
        if (filters.bedrooms !== 'all' && property.Bedrooms !== parseInt(filters.bedrooms)) {
          return false;
        }

        if (filters.bathrooms !== 'all' && property.Bathrooms !== parseInt(filters.bathrooms)) {
          return false;
        }

        if (filters.parking !== 'all' && property.Parking !== parseInt(filters.parking)) {
          return false;
        }

        if (filters.price && property['Sale Price'] > parseInt(filters.price)) {
          return false;
        }

        return true;
      });

      setFilteredProperties(filtered);
    }
  }, [properties, filters]);

  const handleFilterChange = (newFilters: PropertyFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;
