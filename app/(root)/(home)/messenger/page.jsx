"use client"

import { instance } from '@/api'
import { useState, useEffect } from 'react'

const Messenger = () => {
  const [ product, setProduct ] = useState([])
  console.log(product, "datasdatasdatas");

  const fetchData = async () => {
    try {
      const res = await instance.get("/work")
      console.log(res?.data);
      setProduct(res?.data)
    }catch (err) {
      console.log(err);
    }
  }
 
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div>
        {product?.map((item, id) => (
          <div key={id}>{item?.title}</div>
        ))}
      </div>
    </div>
  )
}

export default Messenger