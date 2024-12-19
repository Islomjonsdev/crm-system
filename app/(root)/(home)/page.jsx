import Auth from '@/components/Auth'
import React from 'react'

const page = () => {
    const user = false

    if (!user) {
        return (
            <div>
                <Auth />
            </div>
        )
    }
  return (
    <div>page</div>
  )
}

export default page