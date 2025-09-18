import React from 'react'
import { useForm } from 'react-hook-form'
import axiosClient from '@/api/httpClient'

const useStudent = () => {
const usrFroms = useForm()
  return {
   usrFroms,
   onSubmit: async (data) => {
    try {
     const request = await axiosClient.post("studentFields",{
      ...data
     })
     
    } catch (error) {
        
    }
   }
  }
  
}

export default useStudent