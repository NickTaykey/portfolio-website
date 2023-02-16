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
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/work';
import Layout from '../../components/layouts/article';

const Work = () => (
 <Layout title="Portfolio">
  <Container>
   <Title>
    Tutoro <Badge>Summer 2022</Badge>
   </Title>
   <Heading size="md">How did I create my personal website?</Heading>
   <List ml={4} my="6">
    <ListItem>
     <Meta>Website</Meta>
     <Link href="PRODUCTION_URL" target="_blank">
      PRODUCTION_LINK <ExternalLinkIcon mx="2px" />
     </Link>
    </ListItem>
    <ListItem>
     <Meta>Github</Meta>
     <Link href="GITHUB_LINK" target="_blank">
      GITHUB_LINK <ExternalLinkIcon mx="2px" />
     </Link>
    </ListItem>

    <ListItem>
     <Meta>Stack</Meta>
     <span>
      <Link href="https://nextjs.org/" target="_blank">
       NextJS
      </Link>
      {' & '}
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
        Why did I choose this stack?
       </Box>
       <AccordionIcon />
      </AccordionButton>
     </h2>
     <AccordionPanel pb={4}>
      I chose NextJS because it&apos;s <strong>blazing fast</strong> for
      developing and deploying static websites. Moreover, it makes the whole
      content management process very easy (you just write plain HTML). Among
      the many UI frameworks, I went for ChakraUI because, in my opinion, it
      offers the best compromise between{' '}
      <strong>styled components and theme customization</strong>.
     </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
     <h2>
      <AccordionButton>
       <Box flex="1" textAlign="left" fontWeight="bold">
        How did I get inspired for the design?
       </Box>
       <AccordionIcon />
      </AccordionButton>
     </h2>
     <AccordionPanel pb={4}>
      For the design I drew most of my inspiration from{' '}
      <Link href="https://www.craftz.dog/">
       Takuya Matsuyama&apos;s portfolio <ExternalLinkIcon mx="2px" />
      </Link>{' '}
      (founder of Inkdrop). I customized a lot the template of his project,
      simplifying it and making it fir my needs. And whoala, here I have an
      awesome portfolio.{' '}
      <Link href="https://github.com/craftzdog/craftzdog-homepage">
       Template which Inspired me <ExternalLinkIcon mx="2px" />
      </Link>
     </AccordionPanel>
    </AccordionItem>
   </Accordion>
  </Container>
 </Layout>
);

export default Work;
