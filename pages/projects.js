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

import thumbPortfolio from '../public/images/projects/portfolio.png';
import thumbTutoro from '../public/images/projects/tutoro.png';
import thumbPython from '../public/images/projects/python.png';

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} my={6} textAlign="center">
        My best personal projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tutoro" title="Tutoro" thumbnail={thumbTutoro}>
            <Flex direction="column">
              <Badge colorScheme="green" width="40%" mx="auto" my="2">
                Best so far
              </Badge>
              <Text>
                Built a Tutor booking fullstack website and PWA using NextJS,
                MongoDB, Typescript and Chakra UI.
              </Text>
            </Flex>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="portfolio"
            title="This website"
            thumbnail={thumbPortfolio}
          >
            Created my portofolio customizing a themeplate based on Chakra UI
            and powered by NextJS available on Github.{' '}
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
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from '../components/chakra';
