import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <>
       <BookOverview {...sampleBooks[0]}/>
       <BookList
            title="Popular Books"
            books={sampleBooks}
            containerClassName="mt-28"
       />
    </>
  )
}

export default Home