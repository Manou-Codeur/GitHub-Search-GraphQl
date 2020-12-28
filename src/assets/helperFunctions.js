import React, { useState } from "react";

export const formatDate = input => {
  if (!input) return "none";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const inputWithNoRegionTime = input.split("T")[0];
  const arr = inputWithNoRegionTime.split("-");
  return `${months[arr[1] - 1]} ${arr[2]}, ${arr[0]}`;
};

export const myLazy2 = asyncCallback => {
  let Component;

  return props => {
    if (Component) {
      return <Component {...props} />;
    }

    throw asyncCallback().then(module => {
      Component = module.default;
    });
  };
};
