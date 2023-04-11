import {
 Badge,
 Container,
 Heading,
 SimpleGrid,
 Flex,
 Text,
} from '@chakra-ui/react';
import { WorkGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';
import Section from '../components/section';

import thumbXTremeMazes from '../public/images/projects/extreme-mazes-thumbnail.png';
import thumbPortfolio from '../public/images/projects/portfolio.png';
import thumbTutoro from '../public/images/projects/tutoro.png';
import thumbPython from '../public/images/projects/python.png';
import thumbCpp from '../public/images/projects/cpp-thumbnail.png';
import thumbMatrixLab from '../public/images/projects/matrix-lab.png';
import thumpPersonalFinanceDashBoard from '../public/images/projects/pf-dashboard.png';
import thumpEActions from '../public/images/projects/e-actions-thumbnail.png';

const Projects = () => (
 <Layout title="Projects">
  <Container>
   <Heading as="h3" fontSize={20} my={6} textAlign="center">
    My best personal projects
   </Heading>
   <SimpleGrid columns={[1, 1, 2]} gap={6}>
    <Section>
     <WorkGridItem id="tutoro" title="Tutoro" thumbnail={thumbTutoro}>
      <Badge colorScheme="green" width="40%" mx="auto" my="2">
       Best so far
      </Badge>
      <Text>
       Built a Tutor booking fullstack website and PWA using NextJS, MongoDB,
       Typescript and Chakra UI.
      </Text>
     </WorkGridItem>
    </Section>
    <Section>
     <WorkGridItem
      id="portfolio"
      title="This website"
      thumbnail={thumbPortfolio}
     >
      Created my portfolio customizing a themeplate based on Chakra UI and
      powered by NextJS available on Github.{' '}
     </WorkGridItem>
    </Section>
    <Section>
     <WorkGridItem
      id="python-scripts"
      title="Python scripts"
      thumbnail={thumbPython}
      width="150px"
      height="150px"
     >
      Wrote multiple scripts for automating boring tasks, ie: passwords
      management and web data fetching (using web scraping).
     </WorkGridItem>
    </Section>
    <Section>
     <WorkGridItem
      id="cpp-competitive-programming"
      title="C++ competitive programming"
      thumbnail={thumbCpp}
      width="250px"
      height="150px"
     >
      Implemented Data Structures and Algorithms and build command line tools
      solving logical and mathematical problems.
     </WorkGridItem>
    </Section>
    <Section>
     <WorkGridItem
      id="extreme-mazes"
      title="Extreme Mazes"
      thumbnail={thumbXTremeMazes}
      width="200px"
      height="340px"
     >
      Developed a web multiplayer game where players compete to get out of a
      randomly generated maze.
     </WorkGridItem>
    </Section>
    <Section>
     <WorkGridItem
      id="matrix-lab"
      title="Matrix Lab"
      thumbnail={thumbMatrixLab}
      width="1000px"
      height="600px"
     >
      <Flex direction="column">
       <Text>
        Developed a web app which visualizes linear-algebra matrix operations:
        (ie: determinant, inverse matrix, matrix product and rref).
       </Text>
      </Flex>
     </WorkGridItem>
    </Section>
    <Section>
     <WorkGridItem
      id="personal-finance-dashboard"
      title="Personal Finance Dashboard"
      thumbnail={thumpPersonalFinanceDashBoard}
      width="1000px"
      height="600px"
     >
      Developed a personal finance dashboard which allows users to group their
      daily expenses with tags in order to visualize frequencies and total
      amounts.
     </WorkGridItem>
    </Section>
    <Section>
     <WorkGridItem
      id="e-actions"
      title="e-actions"
      thumbnail={thumpEActions}
      width="1000px"
      height="600px"
     >
      Developed website where users can bid on auction products and ask
      questions about them.
     </WorkGridItem>
    </Section>
   </SimpleGrid>
  </Container>
 </Layout>
);

export default Projects;
