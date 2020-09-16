import React from 'react'
import LoadingGif from '../images/gif/805.gif'
function Loading (){
  return (
      <div className="page-loading">
          <h3>The Page is loading...</h3>
          <img className="gif" src={LoadingGif} alt="The Page is loading" />
      </div>
  )
}

export default Loading