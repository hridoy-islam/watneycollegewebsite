"use client";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Faq() {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto ">
        <div className="mb-5 space-y-4">
          <h3 className="text-center md:text-4xl sm:text-2xl">
            Got Questions? Find Answers Here
          </h3>
        </div>

        <Accordion>
          <AccordionItem
            key="first"
            aria-label="first"
            indicator={<Icon icon="ic:baseline-plus" color="black" />}
            title="What makes this crypto mining rig different from others in the market?"
          >
            🌟 Answer: Our rig stands out due to its unparalleled hash rate
            performance, energy-efficient operation, and user-friendly
            interface. It's designed for both efficiency and sustainability,
            making it a top choice for both experienced miners and beginners.
          </AccordionItem>
          <AccordionItem
            key="second"
            aria-label="second"
            indicator={<Icon icon="ic:baseline-plus" color="black" />}
            title="How energy-efficient is this mining rig?"
          >
            💡 Answer: Our rig is one of the most energy-efficient models
            available today. It reduces power consumption significantly without
            sacrificing performance, aligning with eco-friendly practices while
            maximizing your mining profitability.
          </AccordionItem>
          <AccordionItem
            key="third"
            aria-label="third"
            indicator={<Icon icon="ic:baseline-plus" color="black" />}
            title="Is the mining rig suitable for beginners?"
          >
            🖥️ Answer: Absolutely! We've designed the interface to be intuitive
            and user-friendly, ensuring that even those new to crypto mining can
            set up and start mining with ease.
          </AccordionItem>

          <AccordionItem
            key="fourth"
            aria-label="fourth"
            indicator={<Icon icon="ic:baseline-plus" color="black" />}
            title="What security features does the rig offer?"
          >
            🔒 Answer: Security is a top priority for us. Our rig includes
            advanced security protocols to protect your mining operations and
            digital assets from various online threats, ensuring a safe mining
            environment.
          </AccordionItem>

          <AccordionItem
            key="five"
            aria-label="five"
            indicator={<Icon icon="ic:baseline-plus" color="black" />}
            title="Can the rig handle continuous, heavy-duty mining?"
          >
            🚀 Answer: Yes, our rig is built for durability and continuous
            operation. Its advanced cooling system ensures it stays at optimal
            temperatures, reducing wear and tear for long-term, heavy-duty
            mining.
          </AccordionItem>

          <AccordionItem
            key="six"
            aria-label="six"
            indicator={<Icon icon="ic:baseline-plus" color="black" />}
            title="What kind of customer support do you offer?"
          >
            🌐 Answer: We provide 24/7 customer support with a team of
            knowledgeable experts ready to assist you with any technical issues
            or queries you might have. Our goal is to ensure your mining
            experience is seamless and profitable.
          </AccordionItem>
          <AccordionItem
            key="seven"
            aria-label="seven"
            indicator={<Icon icon="ic:baseline-plus" color="black" />}
            title="How does this rig contribute to a sustainable mining practice?"
          >
            💚 Answer: By focusing on energy efficiency and reduced power
            consumption, our rig not only lowers your electricity costs but also
            minimizes the environmental impact of crypto mining, contributing to
            more sustainable practices in the industry.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
