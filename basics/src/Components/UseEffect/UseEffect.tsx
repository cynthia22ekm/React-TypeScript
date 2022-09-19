//Reference taken from https://www.youtube.com/watch?v=dH6i3GurZW8. useEffect has an empty dependency array. Hence it will
//only be rendered once with the initial value of 'val'. Hence when we try to console.log(val) inside useEffect, we always get
//the value 1. But when the output the value of val inside return, it will display the value like a counter
//This is because the setInterval runs evenry seconds even if its inside useEffect.
//https://typeofnan.dev/fix-the-maximum-update-depth-exceeded-error-in-react/

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

  return <div>{val}</div>;
};

export default UseEffect;
