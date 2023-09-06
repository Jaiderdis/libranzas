import React, { useState } from 'react';

const Dropzone = ({ onFileChange, accept, labelText, icon, uploadedFileName }) => {
  const [draggedOver, setDraggedOver] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDraggedOver(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    setDraggedOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setDraggedOver(false);
    onFileChange(droppedFiles[0]);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ${
        draggedOver ? 'bg-blue-100' : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      }`}
    >
      {uploadedFileName ? (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">Archivo Arrastrado:</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{uploadedFileName}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {icon}
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">{labelText}</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{accept}</p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
