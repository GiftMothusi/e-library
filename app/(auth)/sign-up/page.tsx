"use client"
import AuthForm from '@/components/AuthForm'
import React from 'react'
import { signUpSchema } from '@/lib/validations'

const SignUp = () => {
  return (
    <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            fullName: '',
            universityId: '',
            universityCard: '',
            email: '',
            password: '',
        }}
        onSubmit={() => {}}
    />
  )
}

export default SignUp
