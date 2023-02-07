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
import Section from '../../components/section';

const Work = () => (
  <Layout title="Tutoro">
    <Container>
      <Title>
        Extreme mazes <Badge>dec 2022 - jan 2023</Badge>
      </Title>
      <Heading size="md">
        A game where players compete to get out of a maze
      </Heading>
      <List ml={4} my="6">
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/NickTaykey/extreme-mazes-frontend"
            target="_blank"
          >
            Frontend code <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            href="https://github.com/NickTaykey/extreme-mazes-backend"
            target="_blank"
          >
            Backend code <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            <Link href="https://nextjs.org/" target="_blank">
              ReactJS <ExternalLinkIcon mx="2px" />
            </Link>
            ,{' '}
            <Link href="https://firebase.google.com/" target="_blank">
              Firebase
              <ExternalLinkIcon mx="2px" />
            </Link>
            ,{' '}
            <Link href="https://socket.io/" target="_blank">
              SocketIO
              <ExternalLinkIcon mx="2px" />
            </Link>
            ,
            <Link href="https://expressjs.com/" target="_blank">
              ExpressJS
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
              <source src="https://res.cloudinary.com/dmxuerbxv/video/upload/v1674492524/portfolio/Registrazione_schermo_2023-01-23_alle_17.41.00_wytf0p.mov" />
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
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
            I wanted to develop a game which used{' '}
            <strong>data structures and algorithms</strong>. I was already
            confortable with fullstack development, so I looked for interesting
            algorithms on Wikipedia. I stumbled across{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Maze_generation_algorithm"
              target="_blank"
            >
              this page
            </Link>{' '}
            about generating mazes using algorithms and I found the topic very
            interesting. I realized that I could draw a maze on a web page and
            turn it into a game.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Maze generation algorithm
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              There are many different algorithms to generate a random and
              solvable maze. I chose{' '}
              <strong>Randomized depth-first search</strong> algorithm, because
              it&apos;s one of the easiest to implement. Moreover it uses
              recursion and stacks, concepts that I recentely studied into depth
              at University.
            </Text>
            <Text my="2">
              Randomized depth-first search <strong>operates as follow</strong>:
            </Text>
            <UnorderedList>
              <ListItem>
                The maze is represented as grid of cells (like a large chess
                board), each cell starts with four walls.
              </ListItem>
              <ListItem>
                A random cell is choosen and a random neighbouring selected,
                this <strong>has not yet been visited</strong>. The wall between
                the two cells is <strong>removed</strong> and the neighbour is
                marked as <strong>visited</strong>. The neighbour is finally{' '}
                <strong>added to the stack</strong> in order to make
                backtracking possible.
              </ListItem>
              <ListItem>
                This process continues and when a cell has no unvisited
                neighbours is considered a <strong>dead-end</strong>. At this
                point the algorithm <strong>backtracks</strong> through the path
                to the first cell with an unvisited neighbour.
              </ListItem>
              <ListItem>
                This algorithm keeps running until each cell of the grid has
                been visited. The result is a maze which is solvable and
                characterized by <strong>long corridors</strong> (because the
                recursion goes on until every neighbour has been visited).
              </ListItem>
              <Text my="2">
                The algorithm can be <strong>visualized</strong> as follows:
              </Text>
              <video width="100%" preload="metadata" type="video/mp4" controls>
                <source src="https://res.cloudinary.com/dmxuerbxv/video/upload/v1674485702/portfolio/Depth-First_Search_Animation_qr2cca.ogv" />
                Sorry, your browser doesn&apos;t support embedded videos.
              </video>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                How did I develop Extreme Mazes?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              The game is a <strong>React web app</strong> built on the top of a{' '}
              <strong>RESTfull API</strong> developed with{' '}
              <strong>ExpressJS</strong>, using <strong>Firebase</strong> as
              Database.
            </Text>
            <Text my="3">
              In order to start playing, a user has to create a new maze by
              going to: <strong>/mazes/new</strong>. In this page when the{' '}
              <strong>Generate new Maze</strong> button is clicked a new maze is
              generated on the server side. The newly generated maze is stored
              on Firebase and sent to the client as a JSON response. Then the
              user is redirected to <strong>/mazes/:id</strong> and the maze is{' '}
              <strong>painted on a HTML canvas</strong>. Moreover, a{' '}
              <strong>circle representing the current player</strong> is painted
              over the first cell of the maze.
            </Text>
            <Text my="3">
              Any other player can be invited by{' '}
              <strong>sharing the link of the maze page</strong>.
            </Text>
            <Text>
              Once the player has been displayed, the user is able to move it by
              clicking on the <strong>arrow buttons</strong> underneath the
              canvas. At every click the position is updated and a{' '}
              <strong>position-update-request</strong> is emitted on the{' '}
              <strong>websocket channel</strong> initialized with the server
              when the maze has been received. In this way current{' '}
              <strong>player&apos;s position is updated in realtime</strong> for
              every other player.
            </Text>
            <Text mt="3">
              Even if the player refresh the page it will still be painted in
              his last position becuase, the coordinates have been stored both
              on <strong>localStorage</strong> and on <strong>Firebase</strong>{' '}
              to ensure maximum continuity of the game. Moreover,{' '}
              <strong>as soon as a client disconnect</strong> from the websocket
              server, it is removed from the maze of the other players.
            </Text>
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
            <Text>
              When I started I wanted to build the whole game just as a
              client-side app. I planned to use{' '}
              <strong>Firebase firestore</strong> to handle realtime updates.
              Unfortunately this has not been possible because of Firebase
              limitations related to the{' '}
              <strong>maximum document updates</strong> per second{' '}
              <Link
                href="https://stackoverflow.com/questions/64394360/firebaseerror-code-resource-exhausted-write-stream-exhausted-maximum-allowed"
                target="_blank"
              >
                Learn more here <ExternalLinkIcon mx="2px" />
              </Link>{' '}
              . These limitations complictes the use of Firebase to handle high
              frequency updates necessary to ensure realtime player
              interactions.
            </Text>
            <Text my="3">
              Once, I realized I could not rely on Firebase document realtime
              updates feature, I tried to use{' '}
              <Link href="https://ably.com/" target="_blank">
                Ably <ExternalLinkIcon mx="2px" />
              </Link>{' '}
              to implement realtime communication between clients (emulating
              what websockets do). I also needed database to make sure each
              player could access the maze to paint. Unfortunately the
              client-side integration: Ably-Firebase turned out to be{' '}
              <strong>too clunky and difficult to handle</strong>.
            </Text>
            <Text>
              After two weeks of experiments and debugging I decided that the
              only way to build the game in the most understandable and
              mantainable way was to handle realtime communication using
              websockets. Unfortunately by doing so I needed a{' '}
              <strong>custom backend</strong>. I built it using ExpressJS and
              Firebase as Database. By doing so generating the maze, displaying
              on the client side and handle realtime updates turned out to be
              very easy.
            </Text>
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
                This project let me{' '}
                <strong>learn more about HTML Canvas</strong>, in particulare
                how to visualize complex 2d shapes modeled by algorithms like
                the ones generating mazes.
              </ListItem>
              <ListItem my="3">
                I also learned <strong>how to build</strong> a project{' '}
                <strong>on the top of an existing algorithm</strong>. This
                requires learning how the algorithm works under the hood and
                trying to implement it by yourself following pseudo code. After
                that it&apos;s neccessary to think about creative ways to
                leverage that algorithm in order to do something very concrete,
                in this cas <strong>powering a game</strong>.
              </ListItem>
              <ListItem mt="3">
                Extreme Mazes consolidated in myself{' '}
                <strong>
                  the mindset that every software developer should embrace
                </strong>
                . This is about starting a project from an interesting idea
                (which can be realistically built): planning, building and
                delivering it. Unfortunately, many times things don&apos;t
                smoothly and plans need to be changed because of{' '}
                <strong>unexpected challenges</strong>. Like the ones I
                previously discussed in this page, but the most crucial aspect
                of this mindset is not to give up when facing difficulties.
                Instead, it&apos;s neccessary to understand state and goals of
                the project in order to{' '}
                <strong>find the best way to cope with challenges</strong> to
                complete the project.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Layout>
);

export default Work;
