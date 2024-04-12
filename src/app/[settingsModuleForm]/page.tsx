import Link from 'next/link'
import React from 'react'

const Dynamicpage = async({params}:{params:any}) => {
  const modles = await fetch(`http://localhost:1337/api/${params.settingsModuleForm}`, {
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyODM4MTczLCJleHAiOjE3MTU0MzAxNzN9.Cf9E_9HJHIOZ0Qya8Tc9mMLLrOtkL6mG74S09DH399g'}
  }).then((res)=>res.json())

  return (
  <>
  <Link href={`/${params.settingsModuleForm}/add`}>ADD</Link>
  </>

    )
}

export default Dynamicpage