//Reference taken from https://www.youtube.com/watch?v=DEPwA3mv_R8 and https://www.youtube.com/watch?v=FB_kOSHk1DM
//Here everytime, the component gets rendered , a new instance of summ function is created. Hence the useEffect function
//gets rendered when sum function instance gets created. But in here, the setResult() is setting the same value
//all the time. Hence it doesnt call for the component rendering after it renders the component two times with the same value.

import { useEffect, useState } from "react";

const TestUseCallBack: React.FC = () => {
  const [result, setResult] = useState(0);
  const num1 = 4;
  const num2 = 5;

  const sum = () => num1 + num2;

  useEffect(() => {
    console.log("Entered useEffect");
    setResult(num1 + num2);
  }, [sum]);

  return <div>This is to learn in detail about useCallback</div>;
};

export default TestUseCallBack;
