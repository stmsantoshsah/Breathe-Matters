import React from "react";
import Image1 from "../../assets/WellnessEnthusiasts.png";
import Image2 from "../../assets/HealthPractitioners.png";
import Image3 from "../../assets/AthletePerformers.png";
import Image4 from "../../assets/HealthcareProfessionals.png";
import Image5 from "../../assets/educators.png";
const cardsData = [
  {
    id: 1,
    title: "Wellness Enthusiasts",
    description: "Achieve better sleep, reduce anxiety, and enhance overall vitality.",
    image: Image1,
  },
  {
    id: 2,
    title: "Health Practitioners",
    description: "Provide clients with revolutionary breathing behavior analysis for lasting results.",
    image: Image2,
  },
  {
    id: 3,
    title: "Athletes & Performers",
    description: "Boost endurance, focus, and physical resilience.",
    image: Image3,
  },
  {
    id: 4,
    title: "Healthcare Professionals",
    description: "Enhance patient care with cutting-edge breathing assessment tools.",
    image: Image4,
  },
  {
    id: 5,
    title: "Educators & Trainers",
    description: "Incorporate evidence-based breathing techniques into your teaching or coaching.",
    image: Image5,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="lg:!mt-[160px] md:!mt-[100px] !mt-[50px]">
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
              <div className="w-full max-w-[calc(100%-40px)] absolute bottom-4 left-1/2 right-4 -translate-x-1/2 bg-[#008080A6] text-white !p-5 rounded-[8px] shadow-md">
                <h4 className="text-[20px] font-semibold">{card.title}</h4>
                <p className="text-[16px]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
