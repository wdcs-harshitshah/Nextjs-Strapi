//  'use client' 

import SideNav from '@/app/ui/sideNav'
// import React, { useState, useEffect } from 'react';

// const Settings = () => {
//  const [settings, setSettings] = useState({});

//  useEffect(() => {
//     const fetchSettings = async () => {
//       const res = await fetch('/api/settings');
//       const data = await res.json();
//       setSettings(data);
//     };

//     fetchSettings();
//  }, []);

//  const handleChange = (e:any) => {
//     setSettings({ ...settings, [e.target.name]: e.target.value });
//  };

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`/api/settings/${settings}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(settings),
//     });
//     if (response.ok) {
//       alert(`{} updated successfully`);
//     } else {
//       alert('Failed to update settings');
//     }
//  };

//  return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
// {}
//         </label>
//         <input
//           type="text"
//           name="siteName"
//           id="siteName"
//           //value={settings.siteName || ''}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div>
//         <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
//           {}
//         </label>
//         <input
//           type="text"
//           name="siteDescription"
//           id="siteDescription"
//           //value={settings || ''}
//           onChange={handleChange}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//       SAVE
//       </button>
//     </form>
//  );
// };

// export default Settings;

// import React, { Fragment } from 'react';
// import { Field, Form, Formik } from 'formik';
// import { string, object, number } from 'yup';

// interface IField{
//   name: string,
//   label: string,
//   initialValue: any,
//   type: any
// }

// const fields: IField[] = [
//   {
//     name: 'firstName',
//     label: 'Firstname',
//     initialValue: '',
//     type: string().required()
//   },
//   {
//     name: 'lastName',
//     label: 'Lastname',
//     initialValue: '',
//     type: string().required()
//   },
//   {
//     name: 'email',
//     label: 'Email',
//     initialValue: '',
//     type: string().required()
//   },
//   {
//     name: 'password',
//     label: 'Password',
//     initialValue: '',
//     type: string().required()
//   },
//   {
//     name: 'age',
//     label: 'Age',
//     initialValue: 18,
//     type: number()
//   }
// ];

// const initialValues = Object.fromEntries(fields.map((field)=>[field.name, field.initialValue]))

// const SchemaObject = Object.fromEntries(fields.map((field)=>[field.name, field.type]))

// const UserSchema = object().shape(SchemaObject);

// const Settings = () => (
//   <Fragment>
//     <h1>User</h1>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={values =>
//         console.log({values})
//       }
//       validationSchema={UserSchema}
//       >
//         {({ errors, touched }) => {
//           return(
//           <Form>
//             <div>
//                {fields.map(({label, name}, index) => (
//                   <div key={index}>
//                     <label style={{width: 100, display: 'inline-block'}}>{label}</label>
//                     <Field name={name} />
//                     {touched[name] && errors[name] && <div style={{color: 'red'}}>{errors[name]?.toString()}</div>}
//                   </div>
//                 ))}
//               <div>
//                 <button type="submit">Submit</button>
//               </div>
//             </div>
//         </Form>
//       );
//       }}
//     </Formik>
//   </Fragment>
// );

// export default Settings;

import React from 'react'

const  settings = async() => {

  const modules = await fetch(`http://localhost:1337/api/menus?nested&populate=*`, {
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyODM4MTczLCJleHAiOjE3MTU0MzAxNzN9.Cf9E_9HJHIOZ0Qya8Tc9mMLLrOtkL6mG74S09DH399g'}
  }).then((res)=>res.json())
  
  const data = modules.data[0].attributes.items.data
  
  console.log("🚀 ~ settings ~ data:", data)
  //console.log(data,"dfkj")
  
  return (
<>
<SideNav data={data}/>
</>
  )
}

export default settings