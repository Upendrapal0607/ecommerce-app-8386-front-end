import React from 'react'
import { Box, Skeleton, SkeletonCircle, SkeletonText, Spinner, Stack } from '@chakra-ui/react'

const Loader = () => {

  return (
    <div style={{ margin: "auto" }}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </div>
  )
}

export default Loader
