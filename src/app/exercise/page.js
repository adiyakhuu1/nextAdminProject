// "use client";

import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted! Perform cleanup here.");
    };
  }, []); // Runs once on mount, and cleanup happens on unmount.

  return <div>{console.log("goodbye world")}Goodbye, world!</div>;
}

export default MyComponent;
