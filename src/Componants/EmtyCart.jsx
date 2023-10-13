import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
const EmtyCart = () => {
  const navigate = useNavigate()
  return (
    <DIV>
      <div className='Empty' onClick={() => navigate("/Product")}>
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c1a552112421559.Y3JvcCwxMzczLDEwNzQsMzMsMA.jpg" alt="" />
      </div>
    </DIV>
  )
}

export default EmtyCart

const DIV = styled.div`
.Empty{
width: 50%;
margin: auto;
}
.Empty>img{
width: 100%;
cursor: pointer;
}
@media only screen and (min-width: 280px) and (max-width: 667px) {
  .Empty{
width: 100%;

}
}

`