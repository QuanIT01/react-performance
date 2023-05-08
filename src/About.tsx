import React from "react";
import useInputChange from "./useInputChange";

const About = () => {
  const { handleInputChange } = useInputChange("tuan");

  return (
    <div>
      <input type="text" name="fullname" onChange={handleInputChange} />
    </div>
  );
};

export default About;
