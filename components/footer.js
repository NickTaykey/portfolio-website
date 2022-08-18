import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      align="center"
      fontSize="sm"
      color={useColorModeValue('gray.700', 'white')}
    >
      &copy; {new Date().getFullYear()} Niccolò Toccane. All Rights Reserved.
    </Box>
  )
}

export default Footer
