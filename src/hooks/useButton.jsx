import { useState } from "react";

const useButton = () => {
  const [state, setState] = useState(true);

  function show() {
    setState(true);
  }

  function hide() {
    setState(false);
  }

  function toggle() {
    setState(!state);
  }

  return [state, show, hide, toggle];
};

export default useButton;
