import React, { Fragment, useState } from "react";
import { REMOVE_STAR } from "./GraphQl/GraphQl-Mutations";

//render props
const Users = () => {
  return (
    <Increment
      render={(count, increment) => (
        <Fragment>
          <h1>Number of users: {count}</h1>
          <button onClick={increment}>Increment</button>
        </Fragment>
      )}
    />
  );
};

const Contributors = () => {
  return (
    <Increment
      render={(count, increment) => (
        <Fragment>
          <h1>Number of contributors: {count}</h1>
          <button onClick={increment}>Increment</button>
        </Fragment>
      )}
    />
  );
};

const Increment = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return render(count, increment);
};

export default { Users, Contributors };

// hooks
// const useCount = init => {
//   const [count, setCount] = useState(init);
//   const increment = () => setCount(count + 1);

//   return {
//     count,
//     increment,
//   };
// };

// const Users = () => {
//   const { count, increment } = useCount(10);

//   return (
//     <Fragment>
//       <h1>Number of Users: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </Fragment>
//   );
// };

// const Contributors = () => {
//   const { count, increment } = useCount(10);

//   return (
//     <Fragment>
//       <h1>Number of Contributors: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </Fragment>
//   );
// };

// export default { Users, Contributors };
