import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";


const{ 
    env:{ 
        imagekit:{publicKey,privateKey,urlEndpoint} 
    },
} = config

const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
});

export async function GET(){
    const response = NextResponse.json(imagekit.getAuthenticationParameters());

    // Fix CORS issues
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
}