import { Fa500Px } from 'react-icons/fa'
import getCurrentUser from '../actions/getCurrentUser'
import getFavotiteListings from '../actions/getFavoriteListings'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import FavoritesClient from './FavoritesClient'

const ListingPage = async () => {
  const listings = await getFavotiteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No favorites found.'
          subtitle='Looks like you have no favorites listings'
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default ListingPage
