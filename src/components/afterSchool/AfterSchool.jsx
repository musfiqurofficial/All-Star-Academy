import React from "react";
import AfterSchoolHero from "./AfterSchoolHero";
import AfterSchoolTransportation from "./AfterSchoolTransportation";
import AfterSchoolHomeWork from "./AfterSchoolHomeWork";
import AfterSchoolWeeklyLineup from "./AfterSchoolWeeklyLineup";
import AfterSchoolForm from "./AfterSchoolForm";

const AfterSchool = () => {
  return (
    <div>
     <div className="hidden sm:block">
     <AfterSchoolHero />
     </div>
      <AfterSchoolForm />
      <AfterSchoolTransportation />
      <AfterSchoolHomeWork />
      <AfterSchoolWeeklyLineup />
    </div>
  );
};

export default AfterSchool;