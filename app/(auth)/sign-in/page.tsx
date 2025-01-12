"use client"
import AuthForm from '@/components/AuthForm'
import React from 'react'
import { signInSchema } from '@/lib/validations'

const SignIn = () => (
   <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
        email: '',
        password: '',
        }}
        onSubmit={() => {}}
   />
)

export default SignIn
