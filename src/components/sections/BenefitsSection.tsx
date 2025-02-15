import React from "react";
import Image1 from "../../assets/WellnessEnthusiasts.png";
import Image2 from "../../assets/HealthPractitioners.png";
import Image3 from "../../assets/AthletePerformers.png";
import Image4 from "../../assets/HealthcareProfessionals.png";
import Image5 from "../../assets/educators.png";
const cardsData = [
  {
    id: 1,
    title: "Enhanced Focus",
    description: "Improve concentration with mindful breathing.",
    image: Image1,
  },
  {
    id: 2,
    title: "Better Sleep",
    description: "Achieve deeper, more restful sleep patterns.",
    image: Image2,
  },
  {
    id: 3,
    title: "Stress Relief",
    description: "Reduce anxiety and stress levels naturally.",
    image: Image3,
  },
  {
    id: 4,
    title: "Physical Performance",
    description: "Optimize breathing for endurance and strength.",
    image: Image4,
  },
  {
    id: 5,
    title: "Boost Immunity",
    description: "Support overall health through proper respiration.",
    image: Image5,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="!mt-[160px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center !mb-10">
          Who Is the CapnoTrainer® GO For?
        </h2>
        <div className="flex flex-wrap gap-[24px] for_cards">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="relative bg-cover bg-center for_card "
            >
              <img src={card.image} alt="card image" className="rounded-[10px] w-full cover" />
              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-primary text-white !px-4 !py-2 rounded-[8px] shadow-md">
                <h4 className="text-sm font-semibold">{card.title}</h4>
                <p className="text-xs">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
