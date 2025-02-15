import React from "react";

// Dummy JSON data for cards
const cardData = [
  {
    title: "Measure What Matters",
    description: "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.",
  },
  {
    title: "Customized Interventions",
    description: "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones.",
  },
  {
    title: "Visualize Your Breathing",
    description: "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths.",
  },
  {
    title: "Engage in Practicums",
    description: "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training."
  },
];

const Works: React.FC = () => {
  return (
    <section
      className="sm:!py-20 !py-12 bg-cover bg-center work_section"

    >
      <div className="container mx-auto text-center ">
        <div className="max-w-[760px]">
          <h2 className="text-4xl font-bold !mb-8">How the CapnoTrainer® GO Works</h2>
          <div className="md:columns-2 gap-[15px] ">
            {cardData.map((card, index) => (
              <div key={index} className="bg-primary text-left text-white !p-6 rounded-2xl backdrop-blur-lg !mb-[15px]">
                <h3 className="!text-xl font-semibold mb-2">{card.title}</h3>
                <p className="!text-md">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
