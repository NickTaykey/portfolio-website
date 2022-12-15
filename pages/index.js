import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Avatar,
  VStack,
} from '@chakra-ui/react';
import { FaTelegramPlane } from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        my={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('gray.200', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a CS student and self taught Developer based in Italy!
        🇮🇹
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Niccolò Toccane
          </Heading>
          <p>Aspiring Software engineer and Entrepreneur</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Avatar
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            src="/images/niccolo.jpg"
            alt="Profile image"
            size="2xl"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who is Niccolò?
        </Heading>
        <Paragraph>
          Niccolò is an ambitious self-taught Developer, who is studying
          Computer Science at University of Trento, Italy. He loves building
          digital products which can help people and become online business
          opportunities. In the future He sees himself working as a Software
          Engineer while on his way of becoming a digital Entrepreneur.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <VStack alignItems="flex-start">
          <Heading as="h3" variant="section-title">
            My journey so far
          </Heading>
          <BioSection>
            <BioYear>Year 1</BioYear>
            Discovered my passion for Web development, learned to build basic
            fullstack websites at{' '}
            <Link
              href="https://www.udemy.com/certificate/UC-WRYCW2JB/"
              target="_blank"
            >
              The Web Developer Bootcamp
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Year 2</BioYear>
            Learned advanced Web Development by completing{' '}
            <Link
              href="https://www.udemy.com/certificate/UC-9a26e68c-5d7e-456d-8452-5f2f84e0056c/"
              target="_blank"
            >
              The advanced web developer bootcamp
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Year 3</BioYear>
            Graduated from high school{' '}
            <Link href="https://www.liceibelluno.edu.it/" target="_blank">
              Liceo Scientifico Galileo Galilei
            </Link>{' '}
            in Belluno with <strong>100/100</strong>
          </BioSection>
          <BioSection>
            <BioYear>Today</BioYear> Studying Computer Science at{' '}
            <Link href="https://www.unitn.it/en" target="_blank">
              University of Trento
            </Link>{' '}
            building side projects in the free time
          </BioSection>
        </VStack>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Coding, Web Design and Entrepreneurship</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nicktaykey" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoGithub />}
              >
                @nicktaykey
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoLinkedin />}
              >
                @toccanen
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/toccanen" target="_blank">
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<FaTelegramPlane />}
              >
                @toccanen
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
