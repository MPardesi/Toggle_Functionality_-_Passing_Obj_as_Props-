import React from 'react';

export default function Prop(props)
{
  console.log(props.object.name);
  return(
    <div>
      {props.object.name}
    </div>
  )
}