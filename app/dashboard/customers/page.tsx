import React from 'react'
import { formatDateToLocal } from '@/app/lib/utils'
const Page = () => {
  let date = new Date().toString()
  let formattedDate =formatDateToLocal( date)
  return (
    <div>
     date formaté: {formattedDate}
      {/* {date.toLocaleDateString()} */}
  
    </div>
 
  )
}

export default Page