import { ReactNode, useState } from "react";

//The props which render any of the html element and we can pass in children from its parent component 
//this part is meant to be render-props pattern 

const RenderProps = () => {
  const [string, setString] = useState("hello");

  const newString = () => {
    if (string === "hello") setString("hi");
    else if (string === "hi") {
      setString("how r u");
    } else {
      setString("hello");
    }
  };

  return (
    <div>
      <button onClick={newString}>Change String</button>
      <ChangeString string={string} />
      <Para>This is Children Props
        ['render props pattern']
      </Para>
    </div>
  );
};

const ChangeString = ({ string }: { string: string }) => {
  return <p>{string}</p>;
};

const Para = ({ children }: { children: ReactNode }) => {
  return <p>{children}</p>;
};

export default RenderProps;
