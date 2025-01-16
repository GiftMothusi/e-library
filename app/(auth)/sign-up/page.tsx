"use client"
import AuthForm from '@/components/AuthForm'
import React from 'react'
import { signUpSchema } from '@/lib/validations'
import { signUp } from '@/lib/actions/auth'

const Page = () => {
  return (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            fullName: '',
            universityId: 0,
            universityCard: '',
            email: '',
            password: '',
        }}
        onSubmit={signUp}
    />
  )
}

export default Page
