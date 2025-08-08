import { Button } from "@nextui-org/react";

export default function Cta() {
  return (
    <div className="container mx-auto bg-gray flex justify-between items-center py-20 my-10">
      <p className="text-2xl">
        Get help with your Canada Life products and services.
      </p>
      <Button className="bg-primary text-lightbg text-xl px-8 py-6 ">
        Contact Us
      </Button>
    </div>
  );
}
