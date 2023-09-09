'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Container from '../Container'
import CategoryBox from './CategoryBox'
import { GiBoatFishing, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {FaSkiing} from 'react-icons/fa'
import {BsSnow} from 'react-icons/bs'


export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property has windmills!',
  },
  {
    label: 'Windminlls',
    icon: GiWindmill,
    description: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property has windmills!',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property has windmills!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has windmills!',
  },
  {
    label: 'IsLands',
    icon: GiIsland,
    description: 'This property has windmills!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property has windmills!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has windmills!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property has windmills!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has windmills!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property has windmills!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property has windmills!',
  },
]

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()
    const isMainPage = pathname === '/'

    if(!isMainPage){
        return null
    }
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
            
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
