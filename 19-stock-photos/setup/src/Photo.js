import React from 'react'

const Photo = ({id,urls,likes,user}) => {
  return (
    <article className='photo'>
      <img src={urls.regular} alt={id} />
      <div className='photo-info'>
        <div>
          <h4>
            {user.name}
          </h4>
          <p>
            {likes}
          </p>
        </div>
        <a href={user.portfolio_url}>
          <img src={user.profile_image.small} alt="usr-img" />
        </a>
      </div>

    </article>
  )
}

export default Photo
