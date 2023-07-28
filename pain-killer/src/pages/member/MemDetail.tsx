import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../api/axios_interceptors';

interface Memdetail {
    id: number,
    name: string,
    phone: string,
    job: string,
    birthDate: string,
    sex: string,
    acqusitionFunnel: string,
    acquisitionFunnel: string,
    visitedAt: string,
    createdAt: string,
    updatedAt: string
}


const MemDetail = () => {
  const { useData } = useParams();

  const [memContent, setMemContent] = useState<Memdetail>();

  const navigate = useNavigate();

  const onPrevious = () => {
    navigate(-1);
  }


  const getMemDetail = async () => {
    try{
      const indicate = await instance.get(`/members/${useData}`)
      setMemContent(indicate.data)
      console.log(indicate);
    }catch(error){
      alert(error);
    }
  }

  useEffect(() => {
    getMemDetail();
  }, [])

  return(
    <h1>{memContent?.name}</h1>
  )
}



export default MemDetail;