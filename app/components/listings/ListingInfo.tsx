'use client'

import useContries from '@/app/hooks/useCountries'
import { SafeUser } from '@/app/types'
import React from 'react'
import { IconType } from 'react-icons'
import Avatar from '../Avartar'
import ListingCategory from './ListingCategory'
import dynamic from 'next/dynamic'

const Map = dynamic(()=>import('../Map'), {
  ssr: false
})

interface ListingInfoProps {
  user: SafeUser
  category:
    | {
        icon: IconType
        label: string
        description: string
      }
    | undefined
  description: string
  guestCount: number
  roomCount: number
  bathroomCount: number
  locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  locationValue,
}) => {
  const { getByValue } = useContries()

  const coordinates = getByValue(locationValue)?.latlng
  return (
    <div className=' col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div
          className='
            text-xl
             font-semibold
             flex
             items-center
             gap-2 
            
        '
        >
          <span>Hosted by {user?.name}</span>
          <Avatar src={user.image} />
        </div>
        <div
          className='
            flex
            items-center
            gap-4
            font-light
            text-neutral-500
        '
        >
          <span>{guestCount} guest</span>
          <span>{roomCount} rooms</span>
          <span>{bathroomCount} bathrooms</span>
        </div>
      </div>
      <hr/>
      {category && (
        <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description}
        />
      )}
      <hr/>
      <div className='text-lg font-light text-neutral-500'>
        {description}
      </div>
      <hr/>
      <Map center={coordinates}/>
    </div>
  )
}

export default ListingInfo
