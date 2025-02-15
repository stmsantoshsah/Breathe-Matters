import React from "react";
import CapnoGym from "/assets/capnogym.png"
const WhatMakesUsDifferent: React.FC = () => {
  return (
    <section className="py-16 bg-white lg:!mt-[160px] md:!mt-[100px] !mt-[50px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-[20px]">
       
        <div className="w-full sm:max-w-[35%]">
          <img
            src={CapnoGym}
            alt="CapnoTrainer GO"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full sm:max-w-[65%]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What Makes the CapnoTrainer® go Different?
          </h2>
          <p className="text-gray-600 !mt-[20px]">
          Unlike traditional breathing tools that focus on shallow techniques, the CapnoTrainer® GO goes deeper. It integrates psychophysiology, behavioral analysis, and cutting-edge technology to provide a complete understanding of your breath’s role in health and performance.
          </p>
          <div className="text-primary font-semibold sm:!p-[25px] !p-[15px] bg-white rounded-[10px] sm:text-[20px] text-[16px] sm:!ml-[-40px] !mt-[40px]" style={{boxShadow:"0px 21.64px 47.09px 0px #0000001A"}}>
          “Breathing is behavior. And behavior can be changed. The CapnoTrainer® helps you edit, optimize, and own your breath for life.”
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
