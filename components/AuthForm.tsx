"use client"
import React from 'react'
import { DefaultValues, useForm, UseFormReturn, SubmitHandler, FieldValues, Path } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodType } from "zod"
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FIELD_NAMES, FIELD_TYPES } from '@/constants'
import ImageUpload from './ImageUpload'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'


interface Props<T extends FieldValues>{
    schema: ZodType<T>,
    defaultValues: T,
    onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
    type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm =<T extends FieldValues> ({type,schema,defaultValues,onSubmit}: Props<T>) => {

    const router = useRouter();
    const isSignIn = type === 'SIGN_IN'
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async(data) => {
        const result = await onSubmit(data);

        if(result.success) {
            toast({
                title: "Succcessfully Logged in",
                description: isSignIn ? "You have successfully  signed in" :" You have successfully signed up.",
            })

            router.push('/')
        }else{
            toast({
                title: "Error",
                description: isSignIn ? "Error signing in" : "Error in signing up",
                variant: "destructive",
            })
        }
       
    }
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold text-white'>
                {isSignIn ? 'Welcome back to E-Library': 'Create an account'}
            </h1>
            <p className='text-light-100'>
                {isSignIn 
                    ? 'Access the vast collection of resources and stay updated'
                    : 'Please complete all fields and upload a valid university ID to gain access to the library'
                }
            </p>  
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className='capitalize'>{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
                                <FormControl>
                                    {field.name === 'universityCard' ? ( 
                                    <ImageUpload onFileChange={field.onChange}/> )
                                    :  (
                                    <Input className='form-input' required type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]} {...field} /> 
                                    )}
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type="submit" className='form-btn'>
                        {isSignIn ? 'Sign in' : 'Sign up'}
                    </Button>
                </form>
            </Form>
            <p className='text-center text-base font-medium'>
                   {isSignIn
                        ? 'New to E-Library? '
                        : ' Already have an account?'
                    }
                    <Link className='font-bold text-primary' href={isSignIn ? '/sign-up' : 'sign-in'}>
                        {isSignIn ? 'Create an account' : 'Sign in'}
                    </Link>  
            </p>
        </div>
   
    )
}

export default AuthForm
