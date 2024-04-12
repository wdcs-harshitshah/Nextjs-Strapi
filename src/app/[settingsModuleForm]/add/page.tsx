import DynamicForm from '@/app/components/DynamicForm'
import ThemeForm from '@/app/ui/themeForm'
import React from 'react'

const page =async ({params}:{params:any}) => {
  const slug = params.settingsModuleForm.slice(0,params.settingsModuleForm.length-1)
  const formData = await fetch(`http://localhost:1337/api/content-type-builder/content-types/api::${slug}.${slug}`, {
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyODM4MTczLCJleHAiOjE3MTU0MzAxNzN9.Cf9E_9HJHIOZ0Qya8Tc9mMLLrOtkL6mG74S09DH399g'}
  }).then((res)=>res.json())
  return (
    <><div>Add page</div><DynamicForm formData={formData}  /></>
    
  )
}

export default page