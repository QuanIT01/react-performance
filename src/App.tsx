import React, { useMemo, useState } from "react";
//1 . necessary : re-render
//2 . unnecessary : re-render
const VeryHeavyComponent = ({ data }: { data: number[] | number }) => {
  console.log("VeryHeavyComponent render1");
  return (
    <div className="grid grid-cols-12 gap-5">
      {Array(500)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-20 h-20 bg-blue-500"
          >
            {index + 1}
          </div>
        ))}
    </div>
  );
};

const VeryHeavyComponent2 = () => {
  console.log("VeryHeavyComponent render2");
  return (
    <div className="grid grid-cols-12 gap-5">
      {Array(500)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-20 h-20 bg-blue-500"
          >
            {index + 1}
          </div>
        ))}
    </div>
  );
};

const VeryHeavyComponentMemo = React.memo(VeryHeavyComponent);
// const data = [1, 2, 3, 4, 5]; c1 đưa ra ngoài
const App = () => {
  const [counter, setCounter] = useState(0);
  const data = useMemo(() => [1, 2, 3, 4, 5], []);
  return (
    <div className="App">
      <span>{counter}</span>
      <button
        onClick={() => setCounter(counter + 1)}
        className="p-3 text-white bg-blue-500 rounded-lg"
      >
        +
      </button>
      <VeryHeavyComponentMemo data={data}></VeryHeavyComponentMemo>
      {/* <ComponentWithMouseMove2
        left={<VeryHeavyComponent></VeryHeavyComponent>}
        right={<VeryHeavyComponent2></VeryHeavyComponent2>}
      >
        <Counter></Counter>
      </ComponentWithMouseMove2> */}

      {/*TH3 chua toi uu :  <VeryHeavyComponent></VeryHeavyComponent>
      <Counter></Counter>
      <VeryHeavyComponent2></VeryHeavyComponent2> */}
      {/*TH2 : <ComponentWithMouseMove>
        <Counter></Counter>
        <VeryHeavyComponent></VeryHeavyComponent>
      </ComponentWithMouseMove> */}
    </div>
  );
};

// 1. tách logic component ra riêng nếu nó không liên quan với nhau
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

//2. tạo component sử dụng props children\
const ComponentWithMouseMove = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mouseValue, setMouseValue] = useState(0);
  const handleMouseMove = (e: any) => {
    setMouseValue(e.clientX);
  };
  return <div onMouseMove={handleMouseMove}>{children}</div>;
};
// 3. tạo component sử dụng các props khác nhau nhưng truyền vào là 1 component
const ComponentWithMouseMove2 = ({
  left,
  right,
  children,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [mouseValue, setMouseValue] = useState(0);
  const handleMouseMove = (e: any) => {
    setMouseValue(e.clientX);
  };
  return (
    <div onMouseMove={handleMouseMove}>
      {left}
      {children}
      {right}
    </div>
  );
};
// 4. Những giá trị không phải primitives value satring boolean number []
export default App;
