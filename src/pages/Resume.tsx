import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full h-full">
        <object
          data="/Hunter_Nguyen_Resume.pdf"
          type="application/pdf"
          className="w-full h-full"
          aria-label="Resume PDF Viewer"
        >
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Unable to display PDF file. Please download it instead.
            </p>
            <a
              href="/Hunter_Nguyen_Resume.pdf"
              download
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default Resume;
