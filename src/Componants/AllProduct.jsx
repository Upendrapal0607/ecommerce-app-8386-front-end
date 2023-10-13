import React from 'react'
import styled from 'styled-components'
import Card from './Card'



const AllProduct = ({ data }) => {

  return (
    <DIV>
      <div className="every-card-box">
        {data?.map((el, index) => <Card key={index} item={el} index={index} />)}
      </div>
    </DIV>
  )
}

export default AllProduct

const DIV = styled.div`
border:0px solid blue;
margin: auto;
width: 100%;
.every-card-box{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
  justify-content: center;
  gap:1rem;
  /* padding: .5rem; */
}
@media only screen and (min-width: 280px) and (max-width:450px) {
  width:100%;
  .every-card-box{
    grid-template-columns: repeat(1,1fr);
  }
}

@media only screen and (min-width: 450px) and (max-width: 667px) {
   width: 100%;
   .every-card-box{
    grid-template-columns: repeat(2,1fr);
  }
   
}
@media only screen and (min-width: 667px) and (max-width: 920px) {
  width:100%;
  .every-card-box{
    grid-template-columns: repeat(3,1fr);
  }
}
`