import { Subtitle } from "./Typography";

interface DropdownProps {
  items: Array<any>;
  handleSelected: (e : string) => void;
  name: string;
}

const Dropdown = ({ items, handleSelected, name }: DropdownProps) => {
  if (!items) return null;

  return (
    <div>
      <Subtitle> {name} </Subtitle>
      <select
        onSelect={(item) => {}}
        className="w-[420px] h-[56px] border-2 border-[#DDE2E5] rounded-lg p-2"
      >
        {items.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
