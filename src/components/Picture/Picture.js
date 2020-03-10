import React from 'react'

const Picture = (props) => {
  let {id, name, href} = props;
  return (
    <div {...props}>
      <img
        src={href}
        alt={name}
        key={id}
      />
    </div>
  )
}

export default Picture
