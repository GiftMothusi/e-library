"use client"
import React, { useRef, useState } from 'react'
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config"
import ImageKit from "imagekit";
import Image from 'next/image'
import { toast } from "@/hooks/use-toast";


const{ 
    env:{ 
        imagekit:{publicKey,urlEndpoint} 
    },
} = config




const authenticator = async() => {
    try{
        const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)

        if(!response.ok){
            const errorText = await response.text();

            throw new Error(`Request failed with status: ${response.status}: ${errorText}`)
        }
        const data = await response.json()
        const {signature,expire,token} = data
        return {signature,expire,token}
        
    }catch(error: any){
        console.log(error)
        throw new Error(`Failed to authenticate with ImageKit:' ${error.message}`)
    }
}
const ImageUpload = ({onFileChange} : {onFileChange:(filePath: string)=>void}) => {
    const IKUploadRef = useRef(null)
    const [file, setFile] = useState<{filePath:string} | null>(null)


    const onError = (error: any) => {
        console.log(error);

        toast({
            title: 'Image upload failed',
            description: `Your Image could not be uploaded. Please try again.`,
            variant: "destructive",
        });
    }

    const onSuccess = (res: any ) => {
        setFile(res);
        onFileChange(res.filePath);

        toast({
            title: 'Image uploaded successfully',
            description: `${res.filePath} uploaded successfully!`,
        });
    
    }

    return (
    <ImageKitProvider 
            publicKey={publicKey} 
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
        >

            <IKUpload
                onError={onError}
                onSuccess={onSuccess}
                className='hidden'
                ref={IKUploadRef}
                fileName="test-upload.png"
            />

            <button className='upload-btn bg-dark-300' onClick={(e) => {
                e.preventDefault();
                
                if(IKUploadRef.current){
                    //@ts-ignore
                    IKUploadRef.current?.click();
                }
            }}
            >
                <Image src="/icons/upload.svg" alt="upload-icon" width={20} height={20} className="object-contain"/>
                <p className='text-base text-light-100'>Upload a File</p>

                {file && <p className="upload-filename">{file.filePath}</p>}
            </button>

            {file && (
                <IKImage 
                    alt={file.filePath}
                    path={file.filePath}
                    width={500}
                    height={500}
                />
            )}
    </ImageKitProvider>
    )
}

export default ImageUpload
