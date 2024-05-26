import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack} className="px-4 py-2 bg-white text-gray-800 flex items-center gap-3 rounded dark:bg-gray-800 dark:text-white">
      <FaArrowLeftLong /> Back
    </button>
  );
}

export default BackButton;
