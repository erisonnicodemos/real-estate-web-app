interface Property {
    Id: number;
    DateListed: string;
    Title: string;
    Description: string;
    "Sale Price": number;
    ThumbnailURL: string;
    PictureURL: string;
    Location: string;
    Sqft: number;
    Bedrooms: number;
    Bathrooms: number;
    Parking: number;
    YearBuilt: number;
}

interface PropertyListProps {
    properties: Property[];
}

interface PropertyFilters {
    bedrooms: string; 
    bathrooms: string; 
    parking: string; 
    price: string; 
}

export type { Property, PropertyListProps, PropertyFilters };
