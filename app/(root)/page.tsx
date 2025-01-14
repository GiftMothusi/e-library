import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import React from 'react'


const Home = async() => {

    const response = await db.select().from(users)
    console.log(JSON.stringify(response))   

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