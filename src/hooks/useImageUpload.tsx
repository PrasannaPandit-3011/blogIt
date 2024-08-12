import React, { useState } from "react";
import toast from "react-hot-toast";

const useImageUpload = () => {
  const [fileName, setFileName] = useState<string>("No file selected");

  const handleImageUpload = (file: File) => {
    console.log(file);
    if (!file || file.type.split("/")[0] !== "image") {
      return toast.error("Only .jpeg/.jpg/.png/.gif files allowed");
    }
    setFileName(file.name);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    (e.target as HTMLElement).style.backgroundColor = "#b9b9b9";
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
    handleDragLeave(e);
  };

  return {
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleImageUpload,
    fileName,
  };
};

export default useImageUpload;
