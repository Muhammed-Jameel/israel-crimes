import React from 'react'

const eventPage = ({params}: {params: {eventName: string, sectionChild: string}}) => {
  return (
    <div>
      This is the event page {decodeURIComponent(params.eventName)}
    </div>
  )
}

export default eventPage
