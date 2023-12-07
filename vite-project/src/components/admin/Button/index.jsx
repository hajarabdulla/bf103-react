import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ content, href }) => {
  const navigate = useNavigate();

  return (
    <div
      className="mt-5 text-right px-20"
      onClick={() => navigate(`/admin/${href}`)}
    >
      <button
        type="button"
        className="focus:outline-none text-white bg-[#646cff] hover:bg-[#535be3] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
