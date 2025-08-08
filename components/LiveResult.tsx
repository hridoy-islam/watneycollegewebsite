import { Button } from "@nextui-org/react";

export default function LiveResult() {
  return (
    <div className="liveResultBg text-white py-20">
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1">
        <div></div>
        <div className="space-y-6">
          <h2 className="text-4xl">
            Live Daily Results Of Robofx <br />{" "}
            <span className="text-primary">VERIFIED</span>
          </h2>
          <p className="text-xl">
            Myfxbook is a automated online trading tool that enables traders to
            evaluate, analyse, share and compare their trading strategies and
            trading account performance.
          </p>
          <p className="text-xl">
            2020 has been a rollercoaster ride for markets, with plenty of
            crashes, rallies, insolvencies, and stimulus packages. We are proud
            to announce that Robo FX Trader Software market volatility closed
            every week in profit.
          </p>
          <Button className="btn-basic">Live Result</Button>
          <p className="text-primary">ROBOFX Verified Account</p>
        </div>
      </div>
    </div>
  );
}
