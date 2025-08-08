import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Card, Chip } from "@nextui-org/react";

export default function Pricing() {
  return (
    <div className="bg-primaryLight">
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 items-center py-20">
        <div className="space-y-6">
          <Chip className="bg-white rounded-lg">PRICING PLAN</Chip>
          <h2 className="md:text-4xl sm:text-2xl font-semibold">
            Get pricing plans for Hardware & Software Installation for Auto
            Trading Robot.
          </h2>
          <p>One Time Installation & Life Time Benefits.</p>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:mt-4 gap-6 items-center ">
          <Card className="p-6 space-y-4 justify-between">
            <div className="flex items-center gap-4">
              <Icon
                icon="icon-park-solid:trend"
                className="text-primary bg-primaryLight p-2 rounded-lg"
                width={50}
              />
              <h3 className="text-2xl font-bold">Price Discussion</h3>
            </div>

            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Robofx account Setup</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Trader Account Setup</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>VPS Server Setup</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Dedicated Account Manager</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>24/7 Account Monitor</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Life Time Maintenance & Support</p>
            </div>

            <Button className="btn-basic rounded-md">Get Started</Button>
          </Card>
          <Card className="p-6 pt-0 space-y-4 justify-between">
            <Chip className="rounded-lg mx-auto rounded-t-none bg-primaryLight text-primary font-semibold text-md">
              Most Popular
            </Chip>
            <div className="flex items-center gap-4">
              <Icon
                icon="icon-park-solid:trend"
                className="text-primary bg-primaryLight p-2 rounded-lg"
                width={50}
              />
              <h3 className="text-2xl font-bold">Price Discussion</h3>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Multiple account Setup</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Trader Account Setup</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>VPS Server Setup</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Free Buy & Sell Indicator</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Free Signals</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Dedicated Account Manager</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>24/7 Account Monitor</p>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:tick-all" className="text-primary" />
              <p>Life Time Maintenance & Support</p>
            </div>
            <Button className="btn-basic rounded-md">Get Started</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
