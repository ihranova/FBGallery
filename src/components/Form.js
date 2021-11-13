import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import useStorage from "../hooks/useStorage";

export default function Form() {
  const [progress, file, setFile, error, link, checkImageType] = useStorage();

  const uploadChange = (e) => {
    const fileImage = e.target.files[0];
    checkImageType(fileImage);
  };
  return (
    <form className="text-center font-rubik mt-5 relative w-100">
      <label className="border-2 border-dotted rounded absolute h-auto p-3 lg:w-1/2 cursor-pointer left-0 right-0 mx-auto">
        <input
          type="file"
          className="opacity-0 absolute"
          onChange={uploadChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 block mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <p className="text-lg text-gray-500 mt-2">
          Drag and drop the files here
        </p>
      </label>
      <div className="output relative top-28 bottom-0">
        {error && <div className="error text-red-600">{error}</div>}
        {file && <ProgressBar progress={progress} />}
        {file && (
          <div className="flex items-center justify-center my-5">
            <img
              src="https://foxcodestudio.com/wp-content/themes/foxcodestudio/assets/img/icon_file.svg"
              className="mr-2 w-5"
            />
            {file.name}
          </div>
        )}
        {link && (
          <div className="flex items-center justify-center my-5">
            <img
              src="https://foxcodestudio.com/wp-content/themes/foxcodestudio/assets/img/icon_file.svg"
              className="mr-2 w-5"
            />
            <a href={link} target="_blank">
              {link}
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
