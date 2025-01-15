//Server action file
"use server"
import {users} from "@/database/schema";
import { eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";
import { redirect } from "next/navigation";

export const signInWithCredentials = async (params:Pick<AuthCredentials, "email" | "password">) =>{
    const { email, password } = params;

    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

    const { success } = await ratelimit.limit(ip)

    if(!success) redirect("/too-fast")

    try{
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            return { success: false, error: result.error };
        }

        return {success: true}

    }catch(error){
        console.log(error)
        return {success: false, error: "Failed to sign in"}
    }

}

export const signUp = async (params: AuthCredentials) => {
    const { fullName, email, universityId, password, universityCard } = params;
 
    //get IP address of the currently logged in user and limit number of requests 
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip)

    if(!success) redirect("/too-fast")

    const existingUser = await db.select().from(users).where(eq(users.email,email)).limit(1)

    if(existingUser.length > 0){
        return {success: true, error: "User already exists"}
    }

    const hashedPassword = await hash(password, 10)

    try{

       const response =  await db.insert(users).values({
            fullName,
            email,
            universityId,
            universityCard,
            password: hashedPassword,
            status: "PENDING",
            role: "USER",
            lastActivityDate: new Date(),
            createdAt: new Date(),
       })
        await signInWithCredentials({ email, password });
        
        return {success: true}

    }catch(error){
        console.log(error)
        return {success: false, error: "Failed to sign up"}
    }
}

