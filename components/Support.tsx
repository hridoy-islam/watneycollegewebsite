import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, Chip } from "@nextui-org/react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  subject: string;
  name: string;
  email: string;
  department: string;
  priority: string;
  message: string;
};

export default function Support() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/support", {
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
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center">
        <div className="space-y-8 justify-between pr-8">
          <Chip className="rounded-xl">Ticket</Chip>
          <h2 className="text-4xl font-bold">Ticket Panel</h2>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ticket ID</h3>
            <p>
              Convert all information into tickets. We prioritize, categorize
              and assign them to the right Department.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl">For Support</h2>

            <div className="flex gap-2 items-center">
              <Icon icon="ic:baseline-email" className="text-primary text-lg" />
              <p>support@robofxtrader.com</p>
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
              {...register("subject", { required: true })}
              id=""
              placeholder="Subject *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.subject && (
              <span className="text-danger">This field is required</span>
            )}
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
              {...register("email", { required: true })}
              id=""
              placeholder="Email *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <select
              {...register("department")}
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            >
              <option value="">Department*</option>
              <option value="">Support</option>
              <option value="">Agreement Support</option>
            </select>
            {errors.department && (
              <span className="text-danger">This field is required</span>
            )}
            <select
              {...register("priority")}
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            >
              <option value="">Priority*</option>
              <option value="">Low</option>
              <option value="">Medium</option>
              <option value="">High</option>
            </select>

            {errors.priority && (
              <span className="text-danger">This field is required</span>
            )}

            <textarea
              {...register("message")}
              id=""
              placeholder="Message"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            ></textarea>

            {errors.message && (
              <span className="text-danger">This field is required</span>
            )}

            {/* <input type="file" name="" id="" /> */}

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
