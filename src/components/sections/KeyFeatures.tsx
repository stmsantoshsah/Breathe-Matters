import React from "react";
import Portable from "../../../public/assets/portable.svg";
import BreathStrategies from "../../../public/assets/breath.svg";
import Breathwave from "../../../public/assets/breathwave.svg";
import Monitoring from "../../../public/assets/monitoring.svg";
const features = [
  {
    id: 1,
    icon: Monitoring,
    title: "Real-Time Monitoring",
    description:
      "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm.",
  },
  {
    id: 2,
    icon:Breathwave,
    title: "Health Insights",
    description:
      "Gain deep insights into your breathing patterns and how they impact your well-being.",
  },
  {
    id: 3,
    icon:BreathStrategies,
    title: "Adaptive Training",
    description:
      "Personalized feedback to improve your breathing efficiency over time.",
  },
  {
    id: 4,
    icon:Portable,
    title: "Secure & Reliable",
    description:
      "Your data is securely stored and analyzed for maximum privacy and accuracy.",
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <section className="py-16 !mt-[110px]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 !mb-12">
          Key Features You’ll Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 flex flex-col text-left">
              <div className="!mb-4">
                <img src={feature.icon} alt="icon" />
                </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
