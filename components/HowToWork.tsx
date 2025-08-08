import { Icon } from "@iconify/react/dist/iconify.js";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import people from "../public/people.png";

export default function HowToWork() {
  return (
    <div className="bg-primaryLight">
      <div className="container mx-auto py-20 items-center grid md:grid-cols-2 sm:grid-cols-1">
        <div>
          <Image src={people} alt="robot" />
        </div>
        <div className="space-y-5">
          <Chip>Work</Chip>
          <h2 className="text-4xl font-bold">
            How Does <span className="text-primary">Robo FX Trading</span>{" "}
            <br />
            Software Robot Work?
          </h2>
          <p>
            A Forex Robofx Robot that works as a fully Automated Forex Trading
            System that executes both Buy, Sell Trade Automatically & Close the
            Trade in Profit. Robo FX Trader Software is programmed to adapt to
            the current market conditions as it executes trades on both sides of
            the market 24/7.
          </p>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Fully Automatic , Setup once and the rest on Autopilot</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              The most popular forex robots are offered via the MetaTrade 4
              platform.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Open and Close trade Automatically</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Forex robots do not make order entry errors</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Eliminates Human Emotions such as fear and greed</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Our EA are coming with money management features and risk
              management
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Forex robots do not get tired</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>3 Years on testing ( recently decided to sale for public)</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Analysis of market data with 12 inner indicators</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>No Risky Strategies - No Martingale</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Profit Average Method</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Trades the Forex Market 24/5 (day and night)</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>24 Hours Support with Day & Night Shift</p>
          </div>
        </div>
      </div>
    </div>
  );
}
