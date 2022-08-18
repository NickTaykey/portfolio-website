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
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/work';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Tutoro">
    <Container>
      <Title>
        Tutoro <Badge>Summer 2022</Badge>
      </Title>
      <Heading size="md">
        A tutor-booking web app (with <strong>PWA</strong> support).
      </Heading>
      <List ml={4} my="6">
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tutoro-nicktaykey.vercel.app/" target="_blank">
            https://tutoro-nicktaykey.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/NickTaykey/tutoro" target="_blank">
            https://github.com/NickTaykey/tutoro <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            <Link href="https://nextjs.org/" target="_blank">
              NextJS
            </Link>
            ,{' '}
            <Link href="https://reactjs.org/" target="_blank">
              ReactJS
            </Link>
            ,{' '}
            <Link href="https://www.typescriptlang.org/" target="_blank">
              Typescript
            </Link>
            ,{' '}
            <Link href="https://www.mongodb.com/" target="_blank">
              MongoDB
            </Link>
            ,{' '}
            <Link href="https://chakra-ui.com/" target="_blank">
              Chakra UI
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
              <source src="https://res.cloudinary.com/dmxuerbxv/video/upload/v1660628225/portfolio/video_nsxfhq.mp4" />
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                What is Tutoro?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Tutoro is a website and a{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Progressive_web_application"
              target="_blank"
            >
              PWA
            </Link>{' '}
            which enables students to book tutoring sessions and to have their
            homework reviewed by qualified tutors.
            <br />
            <br />
            <Link
              href="https://en.wikipedia.org/wiki/Progressive_web_application"
              target="_blank"
            >
              PWA
            </Link>{' '}
            stands for progressive web application. They are websites which can
            be saved on any device and used offline as native apps. This
            technology enables web developers to create web apps which can
            become mobile, desktop and tablet ready.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                My goals when I started
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I wanted to build a fairly complex web project which could test my
            development skills by pushing me outside of that comfort zone which
            you feel when you learn through online courses. I knew I wasn&apos;t
            going to build something &quot;production-ready&quot;, but a{' '}
            <strong>working prototype of an idea</strong> also known as{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Minimum_viable_product"
              target="_blank"
            >
              MVP
            </Link>{' '}
            in the startup world. By knowing this from the beginning I was able
            to overcome many obstacles which made the development harder (such
            as <strong>dealing with bugs</strong> for days and{' '}
            <Link
              href="https://www.parkersoftware.com/blog/developer-impostor-syndrome-why-you-feel-like-a-fake/#:~:text=Developer%20imposter%20syndrome%20sees%20both,against%20the%20skills%20of%20others."
              target="_blank"
            >
              impostor syndrome
            </Link>
            ).
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Why did I develop a tutor-booking app?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I chose to develop a tutor-booking app for personal reasons. During
            high school, I always struggled in scientific subjects (especially
            maths and physics) so I really felt the need of having a tutor who
            could explain these subjects to me in a simpler way. I do believe
            that if I had had a service like Tutoro (which I haven&apos;t found
            yet) my life would have been much easier at school. In conclusion{' '}
            <strong>I tried to solve a problem of mine</strong> (which probably
            affects many other people as well) by creating a solution{' '}
            <strong>leveraging my software development skills.</strong>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                What did I learn? <u>Technical</u>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem mb="2">
                I learned <strong>NextJS, Typescript and Chakra UI</strong> all
                by doing this project, in fact, when I got started I had basic
                knowledge of HTML, CSS, JS and React. I did many researches and
                found out that NextJS with Typescript and ChakraUI is one the
                best stack to develop a project like this (especially as a solo
                developer). I cannot say that I mastered these technologies, in
                fact, I still have a lot to learn, but{' '}
                <strong>I learned to learn by developing</strong>. This improved
                my confidence a lot.
              </ListItem>
              <ListItem mb="2">
                I expanded my knowledge about <strong>Git and Github</strong>{' '}
                (especially about those <strong>weird commands</strong> like
                rebase, cherrypick and stash) which isn&apos;t explained in most
                online courses. Moreover, I learned how to organize my Git
                workflow using feature branches.{' '}
                <strong>I still have a lot to learn</strong> about version
                control systems and I will in my next internships and projects.
              </ListItem>
              <ListItem mb="2">
                I mastered many <strong>Javascript features</strong> (ie:
                promises, error handling and built-in data structures).
                Moreover, I developed a{' '}
                <strong>better debugging and problem solving approach</strong>.
                I also realized how amazing <strong>Typescript</strong> is
                (because of code autocompletion and bug prevention).
              </ListItem>
              <ListItem mb="2">
                I explored several advanced features of <strong>MongoDB</strong>{' '}
                (ie indexes, geospatial queries and population strategies).
                Moreover, I learned{' '}
                <strong>
                  how to integrate Typescript and MongoDB for data modelling
                </strong>
                .
              </ListItem>
              <ListItem>
                I learned how to integrate Mapbox with any React project using{' '}
                <Link
                  href="https://visgl.github.io/react-map-gl/"
                  target="_blank"
                >
                  ReactMapGL
                </Link>{' '}
                (a library developed by <strong>Uber</strong> to integrate React
                and Mapbox).
              </ListItem>
              <ListItem>
                Lastly, I integrated credit card payments using{' '}
                <strong>Stripe</strong>.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                What did I learn? <u>Non-technical</u>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem mb="2">
                I realized that when you build side projects the highest
                priority is to <strong>make the idea work</strong>. This means
                creating a basic prototype of the idea, without worrying about
                scalability, tests and performances.
              </ListItem>
              <ListItem mb="2">
                <strong>"Smaller is better"</strong>, when developing side
                projects It&apos;s better to develop an intuitive and good
                looking prototype rather than a big project. In fact, smaller
                apps have more potential to impress who look at them because
                they are <strong>easier to use</strong>. This is something which
                I didn&apos;t know while developing Tutoro. In fact, I quit the
                project because the codebase was growing too much, becoming too
                difficult to maintain. So I wish I knew this fact, when I got
                started.
              </ListItem>
              <ListItem mb="2">
                <strong>"If you want to go far, go together"</strong>, generally
                speaking{' '}
                <strong>side projects don't become online businesses</strong>{' '}
                because even if they have potential, it&apos;s very difficult to
                turn them into online businesses by being (only) a developer. In
                fact, the skill set required to build a successful online
                company goes beyond software development. I realized this only
                by developing Tutoro and becoming aware of the non-technical
                aspects behind the development of an online company.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                How did I develop Tutoro?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem mb="2">
                I started small by{' '}
                <strong>displaying some markers on a map</strong> (locations of
                random generated tutor-users). Then, I added{' '}
                <strong>search and filter</strong> features for tutors displayed
                on the map. By implementing these features, I gained a lot of
                experience at dealing with maps in React projects, solving many
                integration <strong>bugs in ReactMapGL</strong>.
              </ListItem>
              <ListItem mb="2">
                I implemented User <strong>reviews</strong>. On the front-end, I
                learned how to use <strong>Typescript</strong> when creating
                React components. On the back-end, I learned how to refact
                NextJS API routes using <strong>middleware</strong> and the{' '}
                <Link
                  href="https://www.npmjs.com/package/next-connect"
                  target="_blank"
                >
                  next-connect
                </Link>{' '}
                library.
              </ListItem>
              <ListItem mb="2">
                After having implemented reviews,{' '}
                <strong>I designed the Session model</strong> which enables
                users to book tutoring sessions. By implementing it,{' '}
                <strong>
                  I learned how to create MongoDB data models whose instances
                  have a status property
                </strong>
                . This property makes the UI update according to the status of
                each Session instance (this can be approved, not approved or
                rejected). This step didn&apos;t involve particularly complex
                MongoDB concepts, but I found it challenging because I had to
                design the model from scratch.{' '}
                <strong>I didn&apos;t find any online resource</strong> which
                explained the proper way to design this sort of model.
              </ListItem>
              <ListItem mb="2">
                Next, I implemented authentication using{' '}
                <Link href="https://next-auth.js.org/" target="_blank">
                  next-auth
                </Link>{' '}
                a library which makes authentication easier to handle in NextJS.
                I chose to use <strong>Google OAuth</strong> as the only
                authentication strategy because I didn&apos;t want to handle
                passwords and I wanted to make the authentication process as
                smooth as possible.
              </ListItem>
              <ListItem mb="2">
                After having added authentication, I implemented{' '}
                <strong>Posts</strong> which allows users to send direct
                questions to tutors. The most complex aspect of implementing
                this feature was about handling file uploads. In fact, because{' '}
                <Link
                  href="https://vercel.com/docs/concepts/functions/serverless-functions"
                  target="_blank"
                >
                  Vercel
                </Link>{' '}
                <strong>
                  (NextJS best hosting provider) uses serverless functions to
                  host API routes and they don't allow file storage
                </strong>
                . So, I had to use a service called{' '}
                <Link href="https://cloudinary.com/" target="_blank">
                  Cloudinary
                </Link>{' '}
                to host files in the cloud.
              </ListItem>
              <ListItem mb="2">
                Once I had the core features implemented, I{' '}
                <strong>styled the UI using Chakra</strong>, I started with
                styling the UI with the default theme (figuring out the various
                components as I needed them). Then I{' '}
                <strong>customized the default theme</strong> and implemented
                dark and light mode.
              </ListItem>
              <ListItem mb="2">
                The most complex feature of Tutoro is the{' '}
                <strong>real time view of sessions and posts status</strong>. In
                fact,{' '}
                <Link
                  href="https://vercel.com/support/articles/do-vercel-serverless-functions-support-websocket-connections"
                  target="_blank"
                >
                  Vercel doesn't support web sockets
                </Link>{' '}
                so I had to find a real time communications provider, which fit
                Vercel restrictions, I used{' '}
                <Link href="https://ably.com/" target="_blank">
                  Ably
                </Link>{' '}
                and after having solved many bugs and integration issues I was
                able to implement real time update of Session and Post models.
              </ListItem>
              <ListItem mb="2">
                Lastly, I <strong>integrated Stripe</strong> and added the
                checkout page in the session booking flow. Moreover, I
                configured NextJS using{' '}
                <Link
                  href="https://www.npmjs.com/package/next-pwa"
                  target="_blank"
                >
                  Next PWA
                </Link>{' '}
                to serve a PWA.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                How did I deploy Tutoro?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem mb="2">
                I chose <strong>Vercel</strong> (and not other free providers
                such as Netlify or Heroku) to host this fullstack app because
                this is the most performant provider to host NextJS projects. It
                serves the pages of the website as{' '}
                <strong>static and server-side rendered pages</strong>, to
                achieve excellent loading performances.{' '}
                <strong>
                  The API routes are hosted as serverless functions
                </strong>
                , invoked just when needed by an incoming http request,
                providing more scalability for the whole service.
              </ListItem>
              <ListItem mb="2">
                To host the Database I went for{' '}
                <Link
                  href="https://www.mongodb.com/atlas/database"
                  target="_blank"
                >
                  Mongo Atlas
                </Link>{' '}
                a cloud based solution for hosting MongoDB databases which
                offers a <strong>free trial</strong>.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
