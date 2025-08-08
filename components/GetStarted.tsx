import { Card, Chip } from "@nextui-org/react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  message: string;
};

export default function GetStarted() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/getstarted", {
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
    <Card className="py-20">
      <div className="container mx-auto md:w-6/12 sm:w-10/12 text-center space-y-4">
        <Chip className="rounded-xl">Get Started</Chip>
        <h2 className="text-4xl font-bold">Automatic AI Bot Download</h2>
        <div className="">
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("name", { required: true })}
              id=""
              placeholder="Name *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="text"
              {...register("phone", { required: true })}
              id=""
              placeholder="Phone *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Email"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="text"
              {...register("city", { required: true })}
              id=""
              placeholder="City *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.city && (
              <span className="text-danger">This field is required</span>
            )}
            <input
              type="text"
              {...register("country", { required: true })}
              id=""
              placeholder="Country *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.country && (
              <span className="text-danger">This field is required</span>
            )}

            <textarea
              id=""
              placeholder="Message *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
              {...register("message", { required: true })}
            ></textarea>

            {errors.message && (
              <span className="text-danger">This field is required</span>
            )}

            <input
              type="submit"
              className="cursor-pointer btn-basic block w-1/3 mx-auto p-3 rounded-lg"
              value="Download"
            />
          </form>
          {formState.isSubmitSuccessful ? "Thank you for contacting us" : ""}
        </div>
      </div>
    </Card>
  );
}
