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
import pfsk1 from '../../public/images/pf-dashboard-sketches/sk1.jpeg';
import pfsk2 from '../../public/images/pf-dashboard-sketches/sk2.png';
import Image from 'next/image';

const Work = () => (
 <Layout title="Personal Finance Dashboard">
  <Container>
   <Title>
    Personal Finance Dashboard <Badge>Feb 2023</Badge>
   </Title>
   <Heading size="md">A dashboard to track personal finances</Heading>
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
     <Meta>LIVE</Meta>
     <Link
      href="https://personal-finance-dashboard.netlify.app/"
      target="_blank"
     >
      https://personal-finance-dashboard.netlify.app/
     </Link>
    </ListItem>
    <ListItem>
     <Meta>Stack</Meta>
     <span>
      <Link href="https://nextjs.org/" target="_blank">
       ReactJS <ExternalLinkIcon mx="2px" />
      </Link>
      ,
      <Link href="https://www.typescriptlang.org/" target="_blank">
       Typescript
       <ExternalLinkIcon mx="2px" />
      </Link>
      ,
      <Link href="https://chakra-ui.com/" target="_blank">
       Chakra UI
       <ExternalLinkIcon mx="2px" />
      </Link>
      ,
      <Link href="https://formidable.com/open-source/victory/" target="_blank">
       Victory
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
       <source src="https://res.cloudinary.com/dmxuerbxv/video/upload/v1676570590/portfolio/registrazione-schermo-2023-02-16-alle-184437_w35SbNgi_z57apv.mp4" />
       Sorry, your browser doesn&apos;t support embedded videos.
      </video>
     </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
     <h2>
      <AccordionButton>
       <Box flex="1" textAlign="left" fontWeight="bold">
        How did I develop this Dashboard?
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
       . I used chakra UI to bootstrap the UI as quickly as possible. In order
       to visualize data I used a Library called{' '}
       <Link href="https://formidable.com/open-source/victory/" target="_blank">
        Victory
       </Link>{' '}
       . This is one of the most popular{' '}
       <strong>data visualization libraries</strong> for React. It allows
       developers to easily display data with the most common types of charts.
       It provides React components for each type of chart, moreover the style
       of every graph is easily customizable using props. One of the best
       features of Victory is that it allows developers to provide a{' '}
       <strong>custom style</strong> for every piece of the chart. This is
       possible by passing callbacks as style props for computing style
       according to the data displayed by each piece of the chart. This has been
       very <strong>useful for implementing expense tags</strong> to display
       each expense with the same color of its tag on different charts.
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
      <Text>
       I wanted to build a web app which made expense tracking easier, in fact
       while studying excel in order to learn personal finance management, I
       realized that setting up a spreadsheet with tags and visually impactful
       charts it&apos;s not easy, so I wanted to build a dashboard which
       provides a nice interface for dealing with expense tracking. In the end I
       have been able to develop a complete and functional prototype of such a
       dashboard and in order to{' '}
       <strong>showcase its features more effectively</strong> I pre-seeded it
       with random expenses data and tags.
      </Text>
      <Text my="2">A couple of sketches drawn while prototyping the app:</Text>
      <Image
       src={pfsk1}
       alt="Personal Finance Dashboard sketch 1"
       className="grid-item-thumbnail"
       placeholder="blur"
       loading="lazy"
      />
      <Image
       src={pfsk2}
       alt="Personal Finance Dashboard sketch 1"
       className="grid-item-thumbnail"
       placeholder="blur"
       loading="lazy"
      />
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
      <UnorderedList spacing={2}>
       <ListItem>
        In the beginning, I wanted to use <strong>D3.js</strong> to develop this
        project, but I did not know it and I soon realized that React&apos;s
        virtual DOM did not suit D3&apos;s manipulation needs very well. So I
        looked for alternative libraries that work better with React. I found
        Victory and I&apos;m very satisfied with the final result.
       </ListItem>
       <ListItem>
        Another major challenge which I faced was about performance issues.
        Every expense object is associated with its ID with the{' '}
        <strong>tagId</strong> property. In order to look for all the expenses
        with a specific tag, in the first versions of the dashboard I used the{' '}
        <strong>array find</strong> method. This is not a very efficient
        solution, in fact it linearly searches for elements in an array. In
        order to avoid possible performance issues I used a{' '}
        <strong>Javascript ES6 Map</strong>
        to associate every tagId with its tag object and this made the time
        complexity of tags related operations dropping{' '}
        <strong>from O(n) to O(1)</strong>.
       </ListItem>
      </UnorderedList>
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
      <UnorderedList spacing={2}>
       <ListItem>
        This project helped me learning the{' '}
        <strong>basics of data visualization</strong> for the web and it made me
        more interested in learning D3 into depth, in fact it allows to build
        even more complex dashboards and data visualization for the web.
       </ListItem>
       <ListItem>
        Helped me better understand how much of a difference Maps can made when
        speaking about <strong>searching perfornce optiminzation</strong>.
       </ListItem>
       <ListItem>
        Moreover, this project made me more aware of the imporatance of
        budgetting and of keeping track of our personal finances.
       </ListItem>
      </UnorderedList>
     </AccordionPanel>
    </AccordionItem>
   </Accordion>
  </Container>
 </Layout>
);

export default Work;
