'use client'
import React, { useState } from 'react';

const ThemeForm = () => {
 const [themeName, setThemeName] = useState('');
 const [themeFile, setThemeFile] = useState(null);
 const [selectedFont, setSelectedFont] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Theme Name:', themeName);
    console.log('Theme File:', themeFile);
    console.log('Selected Font:', selectedFont);
 };

 const handleFileChange = (e) => {
    setThemeFile(e.target.files[0]);
 };

 return (
    <form onSubmit={handleSubmit} className="border border-slate-400 flex flex-col items-center w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Theme</h2>
      <div className="mb-4">
        <label htmlFor="themeName" className="block text-sm font-medium text-gray-700">Theme Name:</label>
        <input
          type="text"
          id="themeName"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="themeFile" className="block text-sm font-medium text-gray-700">Upload Theme File:</label>
        <input
          type="file"
          id="themeFile"
          onChange={handleFileChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fontSelect" className="block text-sm font-medium text-gray-700">Select Font:</label>
        
<select
id="fontSelect"
value={selectedFont}
onChange={(e) => setSelectedFont(e.target.value)}
required
className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
>
<option value="">Select a font</option>
<option value="Arial">Arial</option>
<option value="Times New Roman">Times New Roman</option>
<option value="Verdana">Verdana</option>
</select>
      </div>
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Save
      </button>
    </form>
 );
};



export default ThemeForm;
