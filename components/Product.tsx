import { Card } from "@nextui-org/react";
import exchangeservice from "../../public/exchangeservice.png";
import technical from "../../public/technicalsupport.png";
import mining from "../../public/mininghardware.png";
import automation from "../../public/automation.png";
import electricity from "../../public/electricity.png";
import secure from "../../public/securedata.png";
import Image from "next/image";

export default function Product() {
  return (
    <div className="container mx-auto py-20">
      <Card className="bg-primary text-white p-10">
        <div className="text-center space-y-4 px-10">
          <h3>MEET THE INNOVATION</h3>
          <h2 className="font-bold text-3xl">
            A Game-Changer in Cryptocurrency Mining
          </h2>
          <p>
            In the dynamic and ever-shifting landscape of cryptocurrency, our
            latest offering emerges as a true game-changer. This isn't just a
            crypto mining rig; it's a testament to innovation and
            forward-thinking design. Tailored to meet the needs of both seasoned
            miners and novices, it bridges the gap between complex technology
            and user accessibility. Prepare to be amazed by a product that not
            only promises high performance but also reshapes your mining
            experience with its revolutionary features. Welcome to the future of
            cryptocurrency mining, where efficiency, reliability, and elegance
            converge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mt-5">
          <Card className="p-8 text-center space-y-3">
            <Image
              src={exchangeservice}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">
              Next-Gen Hash Rate Performance
            </h2>
            <p>
              🚀 Unparalleled Power: Experience the pinnacle of mining
              efficiency with our rig's exceptional hash rate. It's engineered
              to maximize your mining potential, ensuring you stay ahead in the
              competitive world of cryptocurrency.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image
              src={technical}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">Energy-Efficient Operation</h2>
            <p>
              💡 Eco-Friendly Mining: Our rig is designed with sustainability in
              mind. It consumes less power without compromising on performance,
              reducing your carbon footprint while maximizing your mining
              rewards.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image src={mining} alt="Exchange Services" className="mx-auto" />
            <h2 className="font-bold text-lg">User-Friendly Interface</h2>
            <p>
              🖥️ Ease of Use: Whether you're a beginner or a pro, our intuitive
              interface makes mining simple and straightforward. Enjoy
              hassle-free setup and operation, allowing you to focus on what
              matters most - your mining success.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image
              src={automation}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">Robust Security Features</h2>
            <p>
              🔒 Safe and Secure: With top-tier security protocols, our mining
              rig ensures your operations are protected against threats. Your
              digital assets and mining process are safeguarded, giving you
              peace of mind.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image
              src={electricity}
              alt="Exchange Services"
              className="mx-auto"
            />
            <h2 className="font-bold text-lg">Compact and Sleek Design</h2>
            <p>
              🎨 Aesthetic Meets Practicality: Not only is our rig powerful, but
              it's also a visual treat. Its sleek, compact design fits
              seamlessly into any space, marrying form and function in a
              stylish, modern package.
            </p>
          </Card>
          <Card className="p-8 text-center space-y-3">
            <Image src={secure} alt="Exchange Services" className="mx-auto" />
            <h2 className="font-bold text-lg">24/7 Customer Support</h2>
            <p>
              🌐 Dedicated Assistance: Our team of experts is available around
              the clock to provide support and answer any questions. From
              technical issues to general inquiries, we're here to ensure your
              mining journey is smooth and profitable.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
}
