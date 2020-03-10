import React, {useState} from 'react';

const Picture = (props) => {
  // clicked state for each picture element
  // initially false
  const [clicked, setClicked] = useState({});
  
  // NOTE debug
  console.log('props.name', props.name);
  console.log('clicked', clicked);
  
  // Click handler function
  const handleClick = () => {
    setClicked(true);
  }

  let {src, id, name} = props;
  return (
    <div>
      <img alt={name} src={src} charid={id} onClick={handleClick}/>
    </div>
  )
}

export default Picture
