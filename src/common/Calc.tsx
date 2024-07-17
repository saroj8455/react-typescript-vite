import React, { useEffect } from 'react';

function calculateSum(...nums: any) {
  console.log('hi', nums);
  return nums.reduce((acc: any, curr: any) => acc + curr, 0);
  // console.log(arguments);
}

export default function Calc() {
  const nested = [1, [2, [3, [4]]]];

  useEffect(() => {
    console.log(calculateSum(1, 2, 3, 4));
    console.log(nested.flat(Infinity));
    console.log(nested.flat(2));
  }, []);

  return <div>Calc</div>;
}
