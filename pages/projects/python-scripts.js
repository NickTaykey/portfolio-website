import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Container,
  Badge,
  Link,
  Box,
  Heading,
  AlertIcon,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
  Text,
  Alert,
} from '@chakra-ui/react';
import { Title } from '../../components/work';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Python">
    <Container>
      <Title>
        Python scripts <Badge>summer 2021</Badge>
      </Title>
      <Heading size="md" my="6">
        Python3 scripts written by me while learning
      </Heading>
      <Text mb="2">
        I learned Python in summer 2021 by taking{' '}
        <Link
          href="https://www.udemy.com/certificate/UC-19a5f1b2-46cc-4208-aabe-f4c4389ebeb3/"
          target="_blank"
        >
          The modern Python3 bootcamp
          <ExternalLinkIcon mx="2px" />
        </Link>{' '}
        with this course I mastered all the basics of Python programming and
        tackled intermediate/advanced topics for example:
      </Text>
      <UnorderedList>
        <ListItem mb="2">OOP</ListItem>
        <ListItem mb="2">
          Generators, decorators and lambda expressions
        </ListItem>
        <ListItem mb="2">Unit testing</ListItem>
        <ListItem mb="2">Performance optimization</ListItem>
        <ListItem mb="2">Regexp</ListItem>
        <ListItem mb="2">
          Code refactoring and{' '}
          <Link href="https://peps.python.org/pep-0008/" target="_blank">
            PEP8
          </Link>
        </ListItem>
        <ListItem mb="2">
          <Link
            href="https://en.wikipedia.org/wiki/Web_scraping"
            target="_blank"
          >
            Web Scraping
          </Link>{' '}
          with{' '}
          <Link
            target="_blank"
            href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
          >
            BS4
          </Link>{' '}
          and{' '}
          <Link target="_blank" href="https://scrapy.org/">
            Scrapy
          </Link>
        </ListItem>
        <ListItem mb="2">Virtual environments</ListItem>
      </UnorderedList>
      <Text mb="6">
        As I was learning I wrote many scripts to practice python, these are the
        best.
      </Text>
      <Accordion mb="6" allowMultiple>
        <AccordionItem id="visa-checker">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Passport visa requirements checker
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              This script it&apos;s about web scraping and uses{' '}
              <Link href="https://www.passportindex.org/" target="_blank">
                this website
              </Link>{' '}
              (which provides passports data) to tell you if your Country&apos;s
              passport <strong>needs a visa or not</strong> to visit a certain
              country.{' '}
              <Link
                href="https://replit.com/@toccaneni/visa-checker"
                target="_blank"
              >
                Check out the script in action
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="passwords-manager">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Passwords manager
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              This script is a{' '}
              <strong>
                tool for generating secure passwords and storing them safely
              </strong>
              . Users can generate passwords and crypting them using a{' '}
              <strong>master password</strong> this is used to crypt each
              password. The crypted strings are stored in a CSV file. Similarly,
              when the user wants to Check out his passwords he has to type the
              master password in order to have the content of the CSV file
              decrypted. Moreover, users can have{' '}
              <strong>multiple passwords storages</strong> for passwords
              belonging to different contexts.{' '}
              <Link
                href="https://replit.com/@toccaneni/passwordsmanager"
                target="_blank"
              >
                Check out the script in action
                <ExternalLinkIcon mx="2px" />
              </Link>{' '}
              <Link
                href="https://github.com/NickTaykey/passwords-manager"
                target="_blank"
              >
                Check out the code on Github
                <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="iphone-reseller">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                IPhone reselling price calculator
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontStyle="italic" mb="4">
              Have you ever wondered if you there were a way to buy each year
              the latest iPhone and spending less than changing it every 2
              years?
            </Text>
            <Text mb="4">
              Well, there is and it&apos;s very simple, you just{' '}
              <strong>buy the latest</strong> iPhone every year (in the same
              price range) and you{' '}
              <strong>sell the one you already have</strong> on{' '}
              <Link
                href="https://swappie.com/us/iphone/?changeLang=en"
                target="_blank"
              >
                Swappie
              </Link>
              . In this way you will pay the new iPhone around{' '}
              <strong>10-15% the official price</strong>. Because iPhones are
              devices which keep their value and have a huge second hand market.
              This script proves this assumption and tells you how much you
              would save by implementing this approach.
            </Text>
            <Box mb="4">
              <Link
                display="block"
                href="https://github.com/NickTaykey/swappie-smart-scraper"
                target="_blank"
              >
                Check out the code on Github <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Text mb="4">
              To create this script I retrieved second hand iPhone prices from
              Swappie using{' '}
              <strong>web scraping with BeautifulSoup4 (BS4)</strong>. Then, I
              wrote the logic to calculate the cumulative savings. I structured
              the whole codebase using Object{' '}
              <strong>Oriented Programming</strong> when I wanted to write more
              modular and maintainable code. Moreover, I used{' '}
              <strong>procedural programming</strong> while setting up the
              command line interface, in which code modularity and
              maintainability was not the main goal.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Famous quotes game
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              This script is a quiz game of the most famous quotes from the
              international literature. I retrieved quotes and authors from{' '}
              <Link href="http://quotes.toscrape.com" target="_blank">
                This scrapable website
              </Link>
              . In order to implement web scraping, I used a library called{' '}
              <strong>Scrapy</strong> which provides a more scalable way to do
              web scraping by creating scraping scripts which operates as{' '}
              <strong>microservices</strong>.{' '}
              <Link
                href="https://replit.com/@toccaneni/quotes-scraper"
                target="_blank"
              >
                Check out the script in action <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
