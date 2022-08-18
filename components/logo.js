import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="'Montserrat', sans-serif"
          fontWeight="bold"
        >
          Niccolò Toccane
        </Text>
      </a>
    </Link>
  )
}

export default Logo
