import React from "react";
import AfterSchoolHero from "./AfterSchoolHero";
import AfterSchoolTransportation from "./AfterSchoolTransportation";
import AfterSchoolHomeWork from "./AfterSchoolHomeWork";
import AfterSchoolWeeklyLineup from "./AfterSchoolWeeklyLineup";

const AfterSchool = () => {
  return (
    <div>
      <AfterSchoolHero />
      <AfterSchoolTransportation />
      <AfterSchoolHomeWork />
      <AfterSchoolWeeklyLineup />
    </div>
  );
};

export default AfterSchool;
