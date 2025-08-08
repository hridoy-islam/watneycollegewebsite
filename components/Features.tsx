import { Chip } from "@nextui-org/react";
import Image from "next/image";
import icon4 from "../public/icon4.png";
import feature1 from "../public/feature1.png";
import feature2 from "../public/feature2.png";
import feature4 from "../public/feature4.png";
import feature5 from "../public/feature5.png";
import feature6 from "../public/feature6.png";
import feature7 from "../public/feature7.png";

export default function Features() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-14">
        <div className="text-center space-y-6">
          <Chip>Features</Chip>
          <h2 className="text-4xl font-bold text-center">
            Features Of Robo FX Trader Software
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 my-10">
          {/* content */}
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={feature1}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">Robo fX EA System</h3>
            </div>
            <p>
              The complete Robo FX Trader EA EA ready for quick-installation.
              Robo FX Trader EA comes with a quick-install wizard that will walk
              you through the simple install and configuration process. No
              additional skills, tools, or downloads are required. Just
              double-click the wizard, and let it do the rest!
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={feature2}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">Quick Strategy Guide</h3>
            </div>
            <p>
              We've included a detailed guide that will walk you through the
              best techniques for setting up and using Robo FX Trader. We'll
              show you how to maximize the performance of Robo FX Trader with
              our informative Quick Strategy Guide
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={icon4}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">
                24/7 Quick Response Support
              </h3>
            </div>
            <p>
              Our support desk is open 24/7 to answer your questions. We pride
              ourselves on rapid follow-up often answering questions within one
              business day.
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={feature4}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">Lifetime Updates</h3>
            </div>
            <p>
              As a Robo FX Trader customer you will have access to all future
              updates to IG Robofx EA free of charge. We're giving you all you
              need to start trading withRobo FX Trader today.
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={feature5}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">
                Precise and Scientific Trading
              </h3>
            </div>
            <p>
              Robo FX Trader takes human emotion out of the equation. It will
              flawlessly execute an optimized strategy every second of every
              session. This is the best way to trade Forex!
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={feature6}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">
                Rapid Market Impulse Trading Levels
              </h3>
            </div>
            <p>
              Robo FX Trader sets your trades to take advantage of market
              volatility movement. Each trade can be configured based on your
              trading strategy.
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={feature7}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">
                Optimal Money-Management
              </h3>
            </div>
            <p>
              Robo FX Trader systematically tracks your open trading positions
              and closes each out at the optimal profit levels.
            </p>
          </div>
          {/* content */}
        </div>
      </div>
    </div>
  );
}
