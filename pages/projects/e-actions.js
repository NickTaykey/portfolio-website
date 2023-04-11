import {
 AccordionButton,
 AccordionPanel,
 AccordionIcon,
 UnorderedList,
 AccordionItem,
 Container,
 Accordion,
 ListItem,
 Heading,
 Badge,
 List,
 Link,
 Text,
 Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/work';
import Layout from '../../components/layouts/article';

const Work = () => (
 <Layout title="E-actions">
  <Container>
   <Title>
    E-actions <Badge>Mar 2021</Badge>
   </Title>
   <Heading size="md">An online auctions website</Heading>
   <List ml={4} my="6">
    <ListItem>
     <Meta>Github</Meta>
     <Link
      href="https://github.com/NickTaykey/personal-finance-dashboard"
      target="_blank"
     >
      Code
     </Link>
    </ListItem>
    <ListItem>
     <Meta>Stack</Meta>
     <span>
      <Link href="https://sveltejs.dev/" target="_blank">
       Svelte <ExternalLinkIcon mx="2px" />
      </Link>
      ,
      <Link href="https://www.typescriptlang.org/" target="_blank">
       Typescript
       <ExternalLinkIcon mx="2px" />
      </Link>
      ,
      <Link href="https://getbootstrap.com/" target="_blank">
       Bootstrap
       <ExternalLinkIcon mx="2px" />
      </Link>
      ,
      <Link href="https://firebase.google.com/" target="_blank">
       Firebase
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
       <source src="https://res.cloudinary.com/dmxuerbxv/video/upload/v1681242067/eactions_jgavsb.mov" />
       Sorry, your browser doesn&apos;t support embedded videos.
      </video>
     </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
     <h2>
      <AccordionButton>
       <Box flex="1" textAlign="left" fontWeight="bold">
        How did I develop this e-actions?
       </Box>
       <AccordionIcon />
      </AccordionButton>
     </h2>
     <AccordionPanel pb={4}>
      <Text>
       E-actions is the first project I developed using svelte. I have been very
       impressed by Svelte for several reasons:
      </Text>
      <UnorderedList spacing={4} my={4}>
       <ListItem>
        It simplifies components definition as well as state management for
        building complex UIs.
       </ListItem>
       <ListItem>
        It provides tools to manage app wide state more effectively (ie context,
        writable and readable stores)
       </ListItem>
       <ListItem>
        Unlike other framworks (React included) it offers more features to build
        large scale project without relying on other libraries (ie for SSR, SSG
        and routing).
       </ListItem>
       <ListItem>
        The only drawback of Svelte is that it is not very popular yet, so there
        are fewer blog posts and libraries compared to React.
       </ListItem>
      </UnorderedList>
      <Text>
       I used Firestore as serverless backend for this project, I already knew
       Firestore, but this project allowed me to learn it more into depth,
       mastering the following aspects:.
      </Text>
      <UnorderedList my={4} spacing={4}>
       <ListItem>
        I used complex queries to build fuzzy search and category based search
        for items.
       </ListItem>
       <ListItem>
        I implemented real time offers using the onSnapshot API.
       </ListItem>
       <ListItem>
        I implemented auth using the built-in strategies for Github and Google
        OAuth.
       </ListItem>
      </UnorderedList>
     </AccordionPanel>
    </AccordionItem>
   </Accordion>
  </Container>
 </Layout>
);

export default Work;
