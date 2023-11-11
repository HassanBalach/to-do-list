import React from 'react'

export default function Button() {
  return (
    <div>
       <button className="bg-red-700  text-white rounded-sm hover:border border-black p-1 ml-2" onClick={addElement}>
          Submit
        </button>
    </div>
  )
}
