'use client'
import React from 'react'

export default async function Table({query}:{query:string}) {
    const invoices = ["Hello", "Hi", "How are you", "Where are you", "Hello", "Hi", "How are you", "Where are you"]
  return (
    <div>
        {invoices.map((invoice, id)=>(
            <div key={id}>
                {invoice}
            </div>
        ))}
    
    </div>
  )
}
