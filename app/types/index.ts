import { Listing, Reservation, User } from '@prisma/client'

export type SafeListing = Omit<Listing, 'createdAt'> & {
  createdAt: string
}

export type SafeReservations = Omit<
  Reservation,
  'createdDate' | 'startDate' | 'endDate' | 'listing'
> & {
  createdDate: string
  startDate: string
  endDate: string
  listing: SafeListing
}

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}
