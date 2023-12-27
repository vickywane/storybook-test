"use client";
import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { Heading2 } from "./Headings";
import TextInput from "./TextInput";
import { Subtitle } from "./Typography";

const ProjectDetailsForm = () => {
  const [name, setName] = useState("");

  return (
    <form onSubmit={(e) => {}}>
      <Subtitle> Name </Subtitle>
      <Heading2> {name.length >= 2 ? name : "Project Title"} </Heading2>
      <br />
      <br />

      <TextInput
        type="text"
        label={"Name"}
        placeholder={"Project Name"}
        handleTextChange={(text) => setName(text)}
      />

      <br />

      <Dropdown
        handleSelected={() => {}}
        items={["Operational", "Running", "Stopped"]}
        name={"Status"}
      />
      <br />

      <Button clickHandler={() => {}} title={"Submit Project"} />

      <br />
      <br />
    </form>
  );
};

export default ProjectDetailsForm;
