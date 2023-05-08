import React, { useState } from "react";
import useInputChange from "./useInputChange";

const tabClassName = "px-6 py-3 text-xs rounded cursor-pointer bg-gray-100";
const tabActiveClassName = "text-white bg-blue-500 pointer-events-none";
function App() {
  const [sortedType, setSorttedType] = useState<"desc" | "asc">("desc");
  type SortedData = "desc" | "asc";
  const hanldeSortData = (value: SortedData) => {
    setSorttedType(value);
  };
  // const [activeTab, setACtiveTab] = useState<"tab1" | "tab2">("tab1");
  // const handleClickDesc = () => {
  //   setSorttedType("desc");
  //   setACtiveTab("tab1");
  // };
  // const handleClickAsc = () => {
  //   setSorttedType("asc");
  //   setACtiveTab("tab2");
  // };
  const { handleInputChange } = useInputChange("evondev");

  return (
    <div className="App">
      <div className="flex items-center p-5 gap-x-5">
        <TabItem
          isActive={sortedType === "desc"}
          onClick={() => hanldeSortData("desc")}
        >
          Sort Desc
        </TabItem>
        <TabItem
          isActive={sortedType === "asc"}
          onClick={() => hanldeSortData("asc")}
        >
          Sort Asc
        </TabItem>
        <input type="text" name="fullname" onChange={handleInputChange} />
        {/* <div
          className={`${tabClassName}${
            activeTab === "tab2" ? tabActiveClassName : "bg-gray-100"
          }`}
          onClick={handleClickAsc}
        >
          Sort ASC
        </div> */}
      </div>
    </div>
  );
}
interface TabItemProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
function TabItem({
  children,
  isActive = false,
  onClick = () => null,
}: TabItemProps) {
  return (
    <div
      className={`${tabClassName}${isActive ? tabActiveClassName : ""}`}
      onClick={isActive ? undefined : onClick}
    >
      {children}
    </div>
  );
}
export default App;
