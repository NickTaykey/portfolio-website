import {
  Container,
  Badge,
  Link,
  Box,
  Heading,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/work';
import Layout from '../../components/layouts/article';
import msk1 from '../../public/images/matrix-lab-sketches/msk1.png';
import msk2 from '../../public/images/matrix-lab-sketches/msk2.png';
import msk3 from '../../public/images/matrix-lab-sketches/msk3.png';
import Image from 'next/image';

const Work = () => (
  <Layout title="Tutoro">
    <Container>
      <Title>
        Matrix Lab <Badge>Feb 2023</Badge>
      </Title>
      <Heading size="md">
        A game where players compete to get out of a maze
      </Heading>
      <List ml={4} my="6">
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/NickTaykey/matrix-lab" target="_blank">
            Code
          </Link>
        </ListItem>
        <ListItem>
          <Meta>LIVE</Meta>
          <Link href="https://matrixlab.netlify.app/" target="_blank">
            Check it out
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            <Link href="https://nextjs.org/" target="_blank">
              ReactJS <ExternalLinkIcon mx="2px" />
            </Link>
            <Link href="https://www.typescriptlang.org/" target="_blank">
              Typescript
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>
      <Accordion mb="6" allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                A short demo video
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <video width="100%" preload="metadata" type="video/mp4" controls>
              <source src="https://res.cloudinary.com/dmxuerbxv/video/upload/v1675766059/portfolio/Registrazione_schermo_2023-02-07_alle_11.25.55_lml4yr.mov" />
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                How did I develop Matrix Lab?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              The whole project is a React App setup with{' '}
              <Link href="https://create-react-app.dev/" target="_blank">
                Create React App
              </Link>
              . I used React Router to set up multiple pages each visualizing a
              particular matrix algorithm. The state of the app is managed by a
              single React Context. I <strong>separated</strong> the code
              related to the <strong>implementation</strong> of the algorithms
              from the one related to the <strong>visualization</strong> of the
              result. In this way I was able to develop the app by keeping it{' '}
              <strong>scalable and updatable</strong> without any major
              constraint. Morevore, typescript made the development process
              safer and more enjoyable.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                My goal when I started
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I wanted to build a web app which{' '}
            <strong>visualized a mathematical algorithm</strong>. In my last
            university semester I took a <strong>linear algebra course</strong>,
            I realized that in this subject there are a lot of algorithms which
            are very easy to implement and interesting to visualize. Personally
            I believe that these algorithms are very interesting to visualize
            because many <strong>students</strong>, myself included,{' '}
            <strong>struggle at seeing how to apply their process</strong>. This
            is especially true when studying them in books which do not provide
            an intuitive step by step visualization of the algorithm. So, I hope
            that this web app will help other students at learning linear
            algebra by giving them a{' '}
            <strong>
              tool to better visualize the most common matrix algorithms
            </strong>
            .
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Which challenges did I face?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text marginBottom="2">
              I faced two main challenges while developing Matrix Lab.
            </Text>
            <UnorderedList>
              <ListItem>
                Implementing <strong>matrix operation algorithms</strong> by
                following pseudo code was pretty challenging, not because of the
                algorithm&apos;s complexity, but because of the{' '}
                <strong>edge cases</strong>. These have been quite difficult to
                handle, especially in the algorithm calculating the inverse of a
                Matrix. In fact, in this scenario in order to have an algorithm
                easy to write and to maintain it is necessary to isolate every
                row which contains only zeros. Unfortunately, I understood this
                only after hours spent debugging the unexpected behavior of the
                algorithm when it was run with a matrix including a row of
                zeros.
              </ListItem>
              <ListItem>
                Another major challenge which I faced was about realizing which
                was the <strong>best approach to visualize</strong> matrix
                operations step by step. This process involved a lot of
                brainstorming a sketching both on paper and on Figma. In fact my
                goal was not just to develop an app which could be easily used
                on a desktop device, but I wanted it mobile ready too. So I
                really had to think about the best way to step-by-step compose
                the visualization of each algorithm and realize both the best
                way to display it and to describe the steps in an array of
                objects.
              </ListItem>
            </UnorderedList>
            <Text my="3">
              <strong>Some sketches</strong> made to prototype the visualization
              for matrix product:
            </Text>
            <Image
              src={msk1}
              alt="Matrix lab sketch 1"
              className="grid-item-thumbnail"
              placeholder="blur"
              loading="lazy"
            />
            <Image
              src={msk2}
              alt="Matrix lab sketch 1"
              className="grid-item-thumbnail"
              placeholder="blur"
              loading="lazy"
            />
            <Image
              src={msk3}
              alt="Matrix lab sketch 1"
              className="grid-item-thumbnail"
              placeholder="blur"
              loading="lazy"
            />
            <Text my="3">
              Figma prototype for matrix <strong>selection strategy</strong> in
              matrix product feature:
            </Text>
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpjbvIsDSwXLM2vP07euWSi%2Fmatrix-calc%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D266%252C422%252C0.17%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2"
              allowFullScreen
            ></iframe>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                What did I learn?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>
                This project helped me improve my{' '}
                <strong>knowledge about linear algebra</strong>, moreover it
                also helped me better learn how fundamental matrix algorithms
                work. By visualizing these algorithms, I better realized where
                the logic behind them lies, moreover compared to when I started
                the project, now I am much{' '}
                <strong>faster at doing matrix operations</strong>. This project
              </ListItem>
              <ListItem my="3">
                By writing functions to visualize these algorithms, I improved{' '}
                <strong>algorithm design skills</strong> and also my debugging
                skills. Before starting the project I was pretty scared about
                having to write code which deals with abstract mathematical
                operations, but after completing the project I am definitely
                more confident at tackling these sorts of problems.
              </ListItem>
              <ListItem mt="3">
                This project made me more aware of the importance that a well
                designed UI plays on the <strong>usability of an app</strong>.
                In fact, while bootstrapping Matrix Lab I really had to think
                about the optimal way to let the user interact with matrix
                objects. This became crucial when I started writing the code
                which produces the step-by-step visualization of each algorithm,
                because I had to understand which pieces of the result I needed
                to store in order to properly visualize each step. Moreover, I
                learned to appreciate the value of a succinct UI when
                visualizing algorithms, especially when the whole visualization
                has to be mobile friendly.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Layout>
);

export default Work;
