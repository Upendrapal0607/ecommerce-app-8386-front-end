import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from "styled-components"
import { Card, CardHeader, CardBody, CardFooter, Box, Flex, ButtonGroup, Text, Button, Stack, Divider, Heading, Image, Spacer, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartProduct, AddToCartProduct } from '../Redux/CartProductReducer/Type'
const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [IsCart, setIsCart] = useState(false)
  const [singleProduct, setSingleProduct] = React.useState({})
  const { Products } = useSelector(state => state.UserProductReducer)
  const dispatch = useDispatch()
  const toast = useToast()
  const data = useSelector(state => state.CartProduct)
  useEffect(() => {
    let single = Products?.data.filter(item => item._id == id)
    setIsCart(false)
    if (single.length < 1) {
      single = data?.data.filter(item => item._id == id)
      setIsCart(true)
    }
    console.log({ single })
    setSingleProduct(single[0])
  }, [])

  const handleAddToCard = () => {
    let CartItem = {
      name: singleProduct.name,
      category: singleProduct.category,
      details: singleProduct.details,
      gender: singleProduct.gender,
      image: singleProduct.image,
      price: singleProduct.price,
      rating: singleProduct.rating,
      productCount: 1,
      productId: singleProduct._id
    };
    let bag = true;

    if (Array.isArray(data?.data)) {

      for (let el of data?.data) {
        if (el.productId === singleProduct._id) {
          bag = false
        }
      }
    }
    if (bag) {
      dispatch(AddToCartProduct(CartItem)).then(res => {
        console.log({ CartAded: res });
        dispatch(getAllCartProduct())
        toast({
          title: `product added into the cart`,
          position: "bottom",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })

      })
    } else {
      toast({
        title: `product already added in cart`,
        position: "bottom",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })


    }


  };

  return (
    <DIV>
      <Box maxW={{ base: '100%', lg: '70%', md: '80%', sm: '90%' }} className='single-main'>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', lg: '60%', md: '70%', sm: '40%' }}
            maxH={{ base: '600px', lg: '500px', md: '500px', sm: '500px' }}
            src={singleProduct.image}
            alt={singleProduct.name}
          />


          <Stack ml={{ base: '0rem', lg: '1rem', md: '1rem', sm: '1rem' }}>

            <CardBody>

              <Flex m={"5px"}>
                <Heading size='md'>Name:</Heading>

                <Heading ml={"5px"} size='md'>{singleProduct.name}</Heading>
              </Flex>
              <Flex>
                <Heading size='sm'>Category:</Heading>
                <Heading ml={"5px"} size='sm'>{singleProduct.category}</Heading>
              </Flex>
              <Flex>
                <Text >
                  Price:
                </Text>
                <Text ml={"5px"} >
                  {singleProduct.price}
                </Text>
              </Flex>
              <Flex>
                <Text >
                  Gender:
                </Text>
                <Text ml={"5px"}>
                  {singleProduct.gender}
                </Text>
              </Flex>


              <Text >
                {singleProduct.details}
              </Text>
              <Text>
                {singleProduct.rating == 5 ? "★★★★★" : singleProduct.rating == 4 ? "★★★★" : singleProduct.rating == 3 ? "★★★" : singleProduct.rating == 2 ? "★★" : singleProduct.rating == 1 ? "★" : "★★★★★★"}
              </Text>
            </CardBody>

            <CardFooter>
              <Flex maxW={"200px"}>
                <Button p={"1rem 2rem"} variant='solid' colorScheme='blue' onClick={() => {
                  navigate(`/checkout/${singleProduct.price * 80 / 100}`);
                }}>
                  BUY NOW
                </Button>

                {!IsCart && <Button onClick={handleAddToCard} variant='solid' colorScheme='blue' ml={"2rem"} p={"1rem 2rem"}>
                  CART
                </Button>}
              </Flex>

            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </DIV>
  )
}

export default SingleProduct
const DIV = styled.div`
  
.single-main{
  width: 95%;
  margin:2rem auto;
  

}
.CardBody{
  margin-left: 2rem;
}

`