"use client"

import { Loader2 } from 'lucide-react'
import React from 'react'
import { Button } from './button'
import { useFormStatus } from 'react-dom'
export const CreateInvoiceButton = () => {
   const {pending} = useFormStatus()

    return (     
   <>
      {
            pending ? (
                <Button disabled type="submit">
                      <Loader2 className="size-4 text-primary" />
                    Create Invoice
                  
                </Button>
            
            ):(
                <Button>Create invoice</Button>
            )
        }
   
   </>
  )
}

