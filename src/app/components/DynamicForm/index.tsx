
"use client";
export default function DynamicForm({ formData }: { formData: any }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle input change
  };
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle checkbox change
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file input change
  };
  //   const formData = {
  //     data: {
  //       // provided data object
  //     },
  //   };
    const formElements = Object.keys(formData.data.schema.attributes).map(
       (fieldName, index) => {
         const fieldData = formData.data.schema.attributes[fieldName];
         let inputElement = null;
         switch (fieldData.type) {
           case "string":
           case "email":
           case "password":
             inputElement = (
               <input
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                 type={fieldData.type === "password" ? "password" : "text"}
                 placeholder={fieldName}
                 required={fieldData.required}
                 minLength={fieldData.minLength}
                 maxLength={fieldData.maxLength}
                 defaultValue={fieldData.default || ""}
                 id={fieldName}
                 onChange={handleChange}
               />
             );
             break;
           case "boolean":
             inputElement = (
               <input
                 className="form-checkbox h-5 w-5 text-indigo-600"
                 type="checkbox"
                 id={fieldName}
                 onChange={handleChecked}
                 checked={fieldData.default || false}
               />
             );
             break;
           case "decimal":
           case "integer":
           case "big integer":
           case "float":
             inputElement = (
               <input
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                 type="number"
                 placeholder={fieldName}
                 required={fieldData.required}
                 defaultValue={fieldData.default || ""}
                 id={fieldName}
                 onChange={handleChange}
               />
             );
             break;
           case "date":
             inputElement = (
               <input
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                 type="date"
                 required={fieldData.required}
                 defaultValue={fieldData.default || ""}
                 id={fieldName}
                 onChange={handleChange}
               />
             );
             break;
           case "text":
             inputElement = (
               <textarea
                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                 placeholder={fieldName}
                 required={fieldData.required}
                 minLength={fieldData.minLength}
                 maxLength={fieldData.maxLength}
                 defaultValue={fieldData.default || ""}
                 id={fieldName}
                //  onChange={handleChange}
               ></textarea>
             );
             break;
           case "media":
             inputElement = (
               <div className="relative">
                 <input
                   className="hidden"
                   type="file"
                   id={fieldName}
                   accept={fieldData.allowedTypes.join(",")}
                   multiple={fieldData.multiple}
                   required={fieldData.required}
                   onChange={handleFileChange}
                 />
                 <label
                   htmlFor={fieldName}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-white text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                 >
                   Upload File
                 </label>
               </div>
             );
             break;
           default:
             inputElement = null;
         }
         return (
           <div key={index} className="mb-4">
             <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700">
               {fieldName}
             </label>
             {inputElement}
           </div>
         );
       }
    );
    return (
       <form className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
         {formElements.map((element, index) => (
           <div key={index} className="mb-4">
             {element}
           </div>
         ))}
         <button
           type="submit"
           className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50"
         >
           Submit
         </button>
       </form>
    );
   }