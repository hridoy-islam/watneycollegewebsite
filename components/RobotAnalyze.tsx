import Image from "next/image";
import robot from "../public/robot.png";
import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function RobotAnalyze() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-20 items-center grid md:grid-cols-2 sm:grid-cols-1">
        <div className="space-y-5">
          <Chip>Auto Analyze</Chip>
          <h2 className="text-4xl font-bold">
            Robot Will Analyze The Chart <br /> Automatically & Take Trade.
          </h2>
          <p>Buy using the Robo FX Trader Software automatic Robot Software</p>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Robots can trade far more effectively and efficiently than any
              human
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Monitoring multiple trades, across multiple platforms
              simultaneously
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Consistent trading - robots always adhere to the rules you set for
              the
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Order entry achieved in seconds</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Instant reaction to stock market fluctuations</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Completely unemotional trading</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Trading when you can't be online. You sleep, the robot carries on
              trading
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Using a robot that is pre-programmed with specific trading system
              rules
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Automated robots have more capacity to process data than a human
              being
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>
              Robots are not scared to take the risk that you might not want to
              make
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>No instinctive or impulsive trading, everything is calculated</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:tick-all" className="text-primary" />
            <p>Ability to back test to see the accuracy of the robot trader</p>
          </div>
        </div>
        <div>
          <Image src={robot} alt="robot" />
        </div>
      </div>
    </div>
  );
}
