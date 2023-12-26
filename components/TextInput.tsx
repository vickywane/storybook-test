"use client";
import { useState } from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  type: string;
  handleTextChange: (e: string) => void;
}

export default function TextInput({
  label,
  placeholder,
  type,
  handleTextChange,
}: TextInputProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-4">
      {label && <label> {label} </label>}

      <input
        className="h-[56px] border-2 border-[#DDE2E5] w-[350px] px-4 rounded-lg"
        {...{
          placeholder,
          type,
          value,
          onChange: (e) => {
            setValue(e.target.value);

            handleTextChange(value);
          },
        }}
      />
    </div>
  );
}
