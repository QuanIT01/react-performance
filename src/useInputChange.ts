import { ChangeEvent, useState } from "react";

export default function useInputChange(initalvalue: string) {
  const [value, setValue] = useState(initalvalue);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    handleInputChange,
  };
}
