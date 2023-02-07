import {
  Container,
  Heading,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { FaTelegramPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import NextLink from 'next/link';

const Posts = () => {
  const githubBtnBg = useColorModeValue('gray.800', 'gray.50');
  const githubBtnColor = useColorModeValue('gray.50', 'gray.800');
  return (
    <Layout title="Contacts">
      <Container>
        <Heading as="h3" fontSize={20} my={6} textAlign="center">
          Get in touch with me!
        </Heading>

        <Section delay={0.1}>
          <VStack>
            <NextLink passHref scroll={false} href="https://t.me/toccanen">
              <Button
                leftIcon={<FaTelegramPlane size="25" />}
                colorScheme="telegram"
                w="100%"
              >
                Telegram
              </Button>
            </NextLink>
            <NextLink
              passHref
              scroll={false}
              href="https://www.linkedin.com/in/niccol%C3%B2-toccane/"
            >
              <Button
                leftIcon={<FaLinkedin size="25" />}
                colorScheme="linkedin"
                w="100%"
              >
                Linkedin
              </Button>
            </NextLink>
            <NextLink
              passHref
              scroll={false}
              href="https://github.com/nicktaykey"
            >
              <Button
                leftIcon={<FaGithub size="25" />}
                colorScheme="transparent"
                bg={githubBtnBg}
                color={githubBtnColor}
                w="100%"
              >
                Github
              </Button>
            </NextLink>
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
