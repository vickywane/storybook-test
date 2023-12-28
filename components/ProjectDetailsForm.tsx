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
      <Heading2 data-testid="form-title">
        <span data-testid="form-title">
          {name.length >= 2 ? name : "Project Title"}
        </span>
      </Heading2>
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
