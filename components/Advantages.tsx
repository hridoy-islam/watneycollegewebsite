import { Chip } from "@nextui-org/react";
import Image from "next/image";
import icon1 from "../public/icon1.png";
import icon2 from "../public/icon2.png";
import icon3 from "../public/icon3.png";
import icon4 from "../public/icon4.png";
import icon5 from "../public/icon5.png";
import icon6 from "../public/icon6.png";

export default function Advantages() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-14">
        <div className="text-center space-y-6">
          <Chip>Advantages</Chip>
          <h2 className="text-4xl font-bold text-center">
            What you are getting from us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
          {/* content */}
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={icon1}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">One Time Setup</h3>
            </div>
            <p>
              (As once you avail our software our team will install the EA
              software for automated trading in your system or in VPS. as our
              team will guide and support you till start to get your profit.)
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={icon2}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">
                Smooth Experience on any Device
              </h3>
            </div>
            <p>
              The custom- built trading platform has been adapted for all
              devices you may choose and switching is mobile, Computer Etc.,
              Easy withdrawal in any time with any Device.
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={icon3}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">
                Zero Trading Knowledge Required
              </h3>
            </div>
            <p>
              The custom- built trading platform has been adapted for all
              devices you may choose and switching is mobile, Computer Etc.,
              Easy withdrawal in any time with any Device.
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
                Start Trading in 24 Hours
              </h3>
            </div>
            <p>
              Once your setup is completed, your trade will start and you can
              see your daily profits.
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={icon5}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">Zero Monitoring</h3>
            </div>
            <p>
              As our client no need to watch the market, as our EA software will
              trade by itself with most profitable strategy.
            </p>
          </div>
          <div className="space-y-4 border-2 border-dashed border-stroke rounded-xl p-5">
            <div className="flex gap-4 items-center">
              <Image
                src={icon6}
                alt="one time setup"
                className="bg-primaryLight p-2 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">
                Dedicated Expert Support
              </h3>
            </div>
            <p>
              24/7 expert analysers monitor your Auto Trade for Entire Period
              with Day & Night Shift.
            </p>
          </div>
          {/* content */}
        </div>
      </div>
    </div>
  );
}
