"use client";
import { Card, Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }, [formState]);

  return (
    <Card className="py-20 rounded-none">
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="space-y-8 justify-between">
          <Chip className="rounded-xl">Contact us</Chip>
          <h2 className="text-4xl font-bold">Get In Touch With Us</h2>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Icon icon="carbon:map" className="text-primary text-lg" />
              <p>13thStreet, 47 W 13th St, New York, NY 10011, USA</p>
            </div>

            <div className="flex gap-2 items-center">
              <Icon icon="ic:baseline-email" className="text-primary text-lg" />
              <p>mining@robofxtrader.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon="ic:baseline-email" className="text-primary text-lg" />
              <p>support@robofxtrader.com</p>
            </div>

            <div className="flex gap-2 items-center">
              <Icon icon="ep:phone" className="text-primary text-lg" />
              <p>+19292301920</p>
            </div>
          </div>
        </div>

        <div className="">
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              id=""
              placeholder="Name *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="text"
              id=""
              placeholder="Phone *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="text"
              id=""
              placeholder="Email"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <textarea
              id=""
              placeholder="Message"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="submit"
              className="cursor-pointer btn-basic block w-1/3 p-3 rounded-lg"
              value="Submit"
            />
          </form>
          {formState.isSubmitSuccessful ? "Thank you for contacting us" : ""}
        </div>
      </div>
    </Card>
  );
}
