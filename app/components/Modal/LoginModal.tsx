'use client'

import {signIn} from 'next-auth/react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../Inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'
import Link from 'next/link'
import useLoginModal from '@/app/hooks/useLoginModal'
import { useRouter } from 'next/navigation'


const LoginModal = () => {

  const router = useRouter()
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    }).then((callback)=>{
      setIsLoading(false)

      if(callback?.ok){
        toast.success('Logged successful')
        router.refresh()
        loginModal.onClose()
      }

      if(callback?.error){
        toast.error(callback.error)
      }
    })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Aribnb' subtitle='Create account' />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='email'
      />
      <Input
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='password'
      />
    </div>
  )

  const toggle = useCallback(()=>{
    loginModal.onClose()
    registerModal.onOpen()
  }, [loginModal, registerModal])

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label={'Continue with Google'}
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label={'Continue with Github'}
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className=' text-neutral-500 text-center mt-4 font-light'>
        <div className='justify-center flex gap-2 items-center'>
          <span>Already have an account?</span>
          <Link href='/' onClick={toggle} className='text-neutral-800 cursor-pointer hover:underline'>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
