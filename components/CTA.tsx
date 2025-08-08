import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Adjust path as needed

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  onButtonClick: () => void;
}

export default function CTA({
  title,
  description,
  buttonText,
  imageSrc,
  onButtonClick,
}: CTAProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-primary rounded-xl px-6 md:px-10 lg:px-16 ">
          
          {/* Text Section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-6">
              {description}
            </p>
            <Button
              size="lg"
              onClick={onButtonClick}
              className="group bg-white text-primary hover:bg-white"
            >
              {buttonText}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 max-w-xs sm:max-w-sm md:max-w-full">
            <img
              src={imageSrc}
              alt="CTA Visual"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
