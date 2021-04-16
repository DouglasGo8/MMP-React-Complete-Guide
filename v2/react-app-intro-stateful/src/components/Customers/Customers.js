import React, { useState } from "./node_modules/react";

import { Customer } from "./Customer";

/**
 * Using react hooks
 */
export const Customers = () => {
  /**
   * array descontructor
   */
  const [p1, p2] = useState({
    customers: [
      {
        name: "Ketty",
        age: 37,
      },
    ],
    foo: 'bla'
  });

  const changeCustomerName = () => {
    // old state will not stay in p2
    p2({
      customers: [
        {
          name: "Ketty",
          age: 36,
        },
      ],
      // foo: p1.foo // must be manually inserted
    });
  };

  return (
    <div>
      <Customer name={p1.customers[0].name} age={p1.customers[0].age} />
      <button onClick={changeCustomerName}>Switch Age</button>
    </div>
  );
};
