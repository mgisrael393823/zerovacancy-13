
import React, { useRef, useState, useEffect } from 'react';
import { CreatorCard } from '../creator/CreatorCard';
import { SortMenu } from '../sorting/SortMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

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
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sortOptions = [
    { label: 'Rating', value: 'rating' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Distance', value: 'distance' }
  ];

  // Function to render the dot indicators
  const renderDotIndicators = () => {
    return (
      <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
        {creators.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index 
                ? "bg-primary w-4" 
                : "bg-gray-300"
            )}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-3 sm:gap-4 bg-gray-50/50 p-3 sm:p-4 rounded-lg border border-gray-100/80">
        <div className="w-full sm:w-auto">
          <SortMenu 
            options={sortOptions}
            onSort={onSort}
            defaultValue={sortBy}
          />
        </div>
      </div>

      {isMobile ? (
        <div className="relative w-full">
          <Carousel
            opts={{
              align: "start",
              containScroll: false,
            }}
            className="w-full"
            onSelect={(api) => {
              const selectedIndex = api.selectedScrollSnap();
              setCurrentSlide(selectedIndex);
            }}
          >
            <CarouselContent className="-ml-4">
              {creators.map((creator, index) => (
                <CarouselItem key={creator.name} className="pl-4 basis-[85%]">
                  <div className="relative w-full">
                    <CreatorCard
                      creator={creator}
                      onImageLoad={onImageLoad}
                      loadedImages={loadedImages}
                      imageRef={imageRef}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="absolute left-2 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
            />
            <CarouselNext 
              className="absolute right-2 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
            />
          </Carousel>
          {renderDotIndicators()}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.name}
              creator={creator}
              onImageLoad={onImageLoad}
              loadedImages={loadedImages}
              imageRef={imageRef}
            />
          ))}
        </div>
      )}
    </div>
  );
};
