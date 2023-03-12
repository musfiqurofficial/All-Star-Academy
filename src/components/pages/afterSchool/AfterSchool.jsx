import React from "react";
import AfterSchoolTransportation from "./AfterSchoolTransportation";
import AfterSchoolHomeWork from "./AfterSchoolHomeWork";
import AfterSchoolWeeklyLineup from "./afterSchoolWeekly/AfterSchoolWeeklyLineup";
import AfterSchoolHero from "./AfterSchoolHero";
import AfterSchoolFaq from "./AfterSchoolFaq";

const AfterSchool = () => {
  return (
    <div>
      <AfterSchoolHero></AfterSchoolHero>
      <AfterSchoolTransportation />
      <AfterSchoolHomeWork />
      <AfterSchoolWeeklyLineup />
      <AfterSchoolFaq></AfterSchoolFaq>

    </div>
  );
};

export default AfterSchool;
