import { useEffect, useState } from "react";

const UseEffect: React.FC = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    console.log("Inside Useeffect");
    window.setInterval(() => {
      setVal((val) => val + 1);
      console.log("val is", val);
    }, 1000);
  }, []);

  return <div></div>;
};

export default UseEffect;
