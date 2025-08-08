"use client";

interface BreadCumbProps {
  title: string;
  description: string;
}

export default function BreadCumb({ title, description }: BreadCumbProps) {
  return (
    <div className="homepagebg text-white bg-lightbg">
      <div className="container mx-auto py-10">
        <div className="w-3/6 text-black py-20">
          <h2 className="text-6xl mb-4">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
