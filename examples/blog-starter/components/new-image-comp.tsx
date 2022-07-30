import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react'
import { API_EDNPOINT } from '../lib/constants';
interface StateType {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

function NewImageComponent() {
    const [imageArr, setImageArr] = useState<StateType[]>()
    const [refetch, setRefetch] = useState<Boolean>(false)

    useEffect(() => {
        axios.get(
            `${API_EDNPOINT}/albums/1/photos`
        ).then(
            (res) => {
                console.log(res?.data);
                setImageArr(res?.data);
            }, (err) => {
                console.error(err);
            }
        ).catch((err) => {
            console.error(err);
        })
    }, [])

    const randomURL = useMemo(() => {
        if (!imageArr?.length) return ''
        let index: number = Math.floor(Math.random() * imageArr.length);
        return imageArr[index]?.url
    }, [refetch, imageArr?.length])

    // const randomURL = imageArr?.length ? imageArr[Math.floor(Math.random() * imageArr.length)]?.url : ""

    return (
        <div className=" flex w-full flex-col items-center justify-center my-4">
            <button className='rounded border px-4 py-1' onClick={() => setRefetch(prev => !prev)}>Relaod</button>
            <img src={randomURL} className="h-[300px] mt-2" />
        </div>
    )
}

export default NewImageComponent;