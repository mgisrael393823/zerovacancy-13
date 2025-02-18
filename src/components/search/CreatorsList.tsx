
import React from 'react';
import { CreatorCard } from '../creator/CreatorCard';
import { SortMenu } from '../sorting/SortMenu';

interface Creator {
  name: string;
  services: string[];
  price: number;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  workExamples: string[];
}

interface CreatorsListProps {
  creators: Creator[];
  sortBy: string;
  onSort: (value: string) => void;
  onImageLoad: (imageSrc: string) => void;
  loadedImages: Set<string>;
  imageRef: (node: HTMLImageElement | null) => void;
}

export const CreatorsList: React.FC<CreatorsListProps> = ({
  creators,
  sortBy,
  onSort,
  onImageLoad,
  loadedImages,
  imageRef,
}) => {
  const sortOptions = [
    { label: 'Rating', value: 'rating' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Distance', value: 'distance' }
  ];

  return (
    <div className="mb-8">
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 w-full gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-[-0.02em]">
          Featured Creators
        </h2>
        <div className="w-full sm:w-auto sm:absolute sm:right-0">
          <SortMenu 
            options={sortOptions}
            onSort={onSort}
            defaultValue={sortBy}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {creators.map((creator, index) => (
          <CreatorCard
            key={index}
            creator={creator}
            onImageLoad={onImageLoad}
            loadedImages={loadedImages}
            imageRef={imageRef}
          />
        ))}
      </div>
    </div>
  );
};
