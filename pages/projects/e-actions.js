import {
 AccordionButton,
 AccordionPanel,
 AccordionIcon,
 UnorderedList,
 AccordionItem,
 useColorModeValue,
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
import { CopyBlock, a11yDark, a11yLight } from 'react-code-blocks';

const code = `service cloud.firestore {
    match /databases/{database}/documents {
          function isUserAuthenticated() {
        return request.auth != null;
      }
      
      function isUserItemCreator(itemCreatorId) {
          return request.auth.uid == itemCreatorId;
      }
      
      function doesUserOwnResource() {
        return isUserAuthenticated() && request.auth.uid == resource.data.userId;
      }
    
      match /questions/{document=**} {
          function isValidQuestion(data) {
            return data.text is string && data.text.size() > 0;
        }
        
        function isValidTextUpdate(data) {
            return doesUserOwnResource() && isValidQuestion(data);
        }
        
        function isValidAnswerUpdate(data) {
          return isUserItemCreator(data.itemCreatorId) && isValidQuestion(data) && data.answer is string;
        }
        
          allow delete: if isUserAuthenticated() && doesUserOwnResource();
          allow create: if isUserAuthenticated() && isValidQuestion(request.resource.data);
        allow update: if isUserAuthenticated() && (isValidTextUpdate(request.resource.data) || isValidAnswerUpdate(request.resource.data));
        allow read: if true;
      }
      
        match /items/{document=**} {       
        function isValidExternalUpdate(data) {
             return data.views is number || data.questions is list;
        }
        
        function areItemFieldsValid(data) {
            return (
              data.name is string && data.name.size() > 0 &&
            data.nameLowerCase is string && data.nameLowerCase.size() > 0 &&
            data.description is string && data.description.size() > 0  &&
            data.minPrice is number && data.minPrice > 0 &&
            data.categories is list && data.categories.size() > 0 &&
            data.views == request.resource.data.views
          );
        }
        
        function isViewsInizialiedToZero(data) {
            return data.views is number && data.views == 0;
        }
        
              
        allow create: if true;
        allow create: if isUserAuthenticated() && isViewsInizialiedToZero(request.resource.data) && areItemFieldsValid(request.resource.data);
        allow update: if isValidExternalUpdate(request.resource.data) || (doesUserOwnResource() && areItemFieldsValid(request.resource.data));
        allow delete: if doesUserOwnResource();
        allow read: if true;
      }
      
      match /user-offers/{document=**} {
          allow create: if isUserAuthenticated();
          allow read: if true;
      }
    }
  }`;

const Work = () => {
 const v = useColorModeValue(a11yLight, a11yDark);
 return (
  <Layout title="E-actions">
   <Container>
    <Title>
     E-actions <Badge>Mar 2023</Badge>
    </Title>
    <Heading size="md">An online auctions website</Heading>
    <List ml={4} my="6">
     <ListItem>
      <Meta>Github</Meta>
      <Link href="https://github.com/NickTaykey/e-actions" target="_blank">
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
        <source src="https://res.cloudinary.com/dmxuerbxv/video/upload/v1681589504/portfolio/eactions_otntb7.mov" />
        Sorry, your browser doesn&apos;t support embedded videos.
       </video>
      </AccordionPanel>
     </AccordionItem>

     <AccordionItem>
      <h2>
       <AccordionButton>
        <Box flex="1" textAlign="left" fontWeight="bold">
         How did I develop e-actions?
        </Box>
        <AccordionIcon />
       </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
       <Text>
        E-actions is the first project I developed using svelte. I have been
        very impressed by Svelte for several reasons:
       </Text>
       <UnorderedList spacing={4} my={4}>
        <ListItem>
         It simplifies <strong>components definition</strong> as well as state
         management for building complex UIs.
        </ListItem>
        <ListItem>
         It provides tools to manage <strong>app wide state</strong> more
         effectively (ie context, writable and readable stores)
        </ListItem>
        <ListItem>
         Unlike other framworks (React included) it offers more features to
         build large scale project{' '}
         <strong>without relying on other libraries</strong> (ie for SSR, SSG
         and routing).
        </ListItem>
        <ListItem>
         The only drawback of Svelte is that it is not very popular yet, so
         there are fewer blog posts and libraries compared to React.
        </ListItem>
       </UnorderedList>
       <Text>
        I used Firestore as serverless backend for this project, I already knew
        Firestore, but this project allowed me to learn it more into depth,
        mastering the following aspects:.
       </Text>
       <UnorderedList my={4} spacing={4}>
        <ListItem>
         I used <strong>complex queries</strong> to build fuzzy search and
         category based search for items.
        </ListItem>
        <ListItem>
         I implemented <strong>real time offers</strong> using the onSnapshot
         API.
        </ListItem>
        <ListItem>
         I implemented <strong>user authentication</strong> using the built-in
         strategies for Github and Google OAuth.
        </ListItem>
        <ListItem>
         Moreover, I also learned how to secure access to protected resources on
         Firebase using <strong>security rules</strong>. Security rules are the
         way Firebase allow developers to build a custom backends by writing
         code which is executed before a query is processed in order to validate
         request data and to check if the user is allowed to execute the query.
         <Box mt="3">
          <CopyBlock
           language="js"
           text={code}
           codeBlock
           theme={v}
           showLineNumbers={false}
          />
         </Box>
        </ListItem>
       </UnorderedList>
      </AccordionPanel>
     </AccordionItem>
    </Accordion>
   </Container>
  </Layout>
 );
};

export default Work;
