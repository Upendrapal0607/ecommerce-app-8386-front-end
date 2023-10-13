import React from 'react'
import styled from 'styled-components'

const AdminProductList = ({ data, handleEdit, HandleDelete }) => {


  return (
    <DIV>
      <div className='table-formate'>
        <p>SN.</p>
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Rating</p>
        <p>EDIT/DELTE</p>
        <div>

        </div>
      </div>
      {data?.map((el, index) => <div className="data-card" key={el._id}>
        <div className='data-name'>
          <h1>{index + 1}</h1>
        </div>
        <div className="data-image"><img src={el.image} alt="img" /></div>
        <div className='data-name'>
          <h1>{el.name}</h1>
        </div>
        <div className='data-price'>
          <p> {`${el.price}.00 ₹`}</p>
        </div>
        <div className="data-rating">
          <p>{el.rating == 1 ? "★" : el.rating == 2 ? "★★" : el.rating == 3 ? "★★★" : el.rating == 4 ? "★★★★" : el.rating == 5 ? "★★★★★" : "★★★★★★"}</p>
        </div>
        <div className="edit-delete-btn">
          <button onClick={() => handleEdit(el._id)}>EDIT</button>
          <button onClick={() => HandleDelete(el._id)}>DELETE</button>
        </div>
      </div>)}
    </DIV>
  )
}

export default AdminProductList

const DIV = styled.div`
border:0px solid red;
width:100%;
display:flex;
flex-direction: column;
gap: .5rem;

padding:0rem 0rem;

margin-bottom: 2rem;
color: #000000d6;
.table-formate{
border: 0px solid green;
display: flex;
justify-content: space-between;
align-items: center;

}
.table-formate>p{
  width:17%;
  border: 1px solid #000;
  margin: auto;
  text-align: center;
  padding:.5rem;


}
.table-formate:nth-child(last){
  width: 20%;
}


.data-card{
  justify-content: space-between;
  align-items: center;
  border:2px solid #0000007d;
  display: flex;
 
  padding-right: 6px;
}


.data-image>img{
  width:80%;
}
.data-image,.data-name,.data-price,.data-rating,.edit-delete-btn{
  border: 0px solid blue;
  width: 15%;
  text-align: center;
}
.data-image{
  width: 10%;
}
.edit-delete-btn{
  display: flex;
  gap:.2rem;

  align-items: center;
  justify-content: center;
}
.edit-delete-btn>button{
  border:0px solid blue;
    font-size: 16px;
    font-weight: 500;
    padding: .2rem .4rem;

    width:6rem;
    text-align: center;
    border-radius: 5px;
    background-color: #00000092;
color:#fff;
}
.edit-delete-btn>button:hover{
  background-color: #000000e4;
}
@media only screen and (min-width: 280px) and (max-width: 667px) {
    width: 100%;
    .table-formate{
 display: none;
    }
    .data-card{
      flex-direction: column;
    }
    .data-image{
width: 70%;
    }
  .data-name,.data-price,.data-rating,.edit-delete-btn{
  border: 0px solid blue;
  width: 100%;
  text-align: center;
}
.data-image>img{
  width:100%;
}

}

`