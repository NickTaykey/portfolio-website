import {
  Container,
  Box,
  Badge,
  Link,
  Text,
  Heading,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/work';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Tutoro">
    <Container>
      <Title>
        Awesome Answers <Badge>Summer 2019</Badge>
      </Title>
      <Heading size="md">A Q&A website</Heading>
      <List ml={4} my="6">
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://awesome-answ.herokuapp.com/questions"
            target="_blank"
          >
            https://awesome-answ.herokuapp.com/questions{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            <Link href="https://nodejs.org/" target="_blank">
              NextJS
            </Link>
            ,{' '}
            <Link href="http://expressjs.com/" target="_blank">
              ExpressJS
            </Link>
            ,{' '}
            <Link href="https://www.mongodb.com/" target="_blank">
              MongoDB
            </Link>
            ,{' '}
            <Link
              href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
              target="_blank"
            >
              Bootstrap4
            </Link>
          </span>
        </ListItem>
      </List>
      <Heading as="h3" fontSize={20}>
        A tought
      </Heading>
      <Box my="6">
        <Text mb="2">
          This was <strong>my first fullstack development project</strong>,
          thanks to which I realized that everything is possible, if you are
          driven enough to achieve it.
        </Text>
        <Text mb="2">
          The most important thing that I learned from Awesome Answers is that{' '}
          <strong>
            in programming 20% of the effort produces 80% of the outcome
          </strong>
          . When you are developing a side project bearing in mind this concept
          it&apos;s crucial. You want to develop something whose code is not the
          best, but which puts into practice an Idea.
        </Text>
        <Text mb="2">
          I have always been a <strong>perfectionist</strong> through my life
          and this is probably my biggest weakness, which I am working hard to
          improve every day. I always see this aspect of my personality when I
          deal with side projects.
        </Text>
        <Text mb="2">
          While I was building Awesome Answers <strong>I wrote bad code</strong>{' '}
          because it was the best I could write (I knew very little about
          fullstack development). In my future projects{' '}
          <strong>I will write bad code</strong> because that&apos;s the best
          way to go to produce valuable products and being rewarded for them.
        </Text>
        <Text mb="2">
          So the reason why I am displaying this project in my portfolio is
          because I want it to remind to myself that{' '}
          <strong>
            perfectionism doesn&apos;t make any sense while coding
          </strong>
          . Moreover, I want this project to remind myself{' '}
          <strong>who I was, where I started and who I want to become</strong>.
        </Text>
      </Box>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
