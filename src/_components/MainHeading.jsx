import React from "react";

export default function MainHeading({ data, size=3}) {
  return (
    <h2 className={`scroll-m-20 text-center text-${size}xl font-semibold tracking-tight first:mt-0`}>
      {data}
    </h2>
  );
}
