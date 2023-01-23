import {
  Container,
  Badge,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Tag,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Title } from '../../components/work';
import Layout from '../../components/layouts/article';
import { CopyBlock, a11yDark, a11yLight } from 'react-code-blocks';
import {
  bracketsControl,
  bracketsControlStackC,
  bracketsControlStackH,
  calcRpnC,
  calcRpnH,
  entryC,
  entryH,
  hanoi,
  islands,
  treeRemoval,
  mainBoolPrefix,
  mazeSolver,
  permutations,
  sarrus,
  stackC,
  stackCMaze,
  stackCRpn,
  stackH,
  stackHMaze,
  stackHRpn,
  trasponseMatrix,
  treeMultipleInstances,
  minMaxTree,
  submat,
  idNumbersMain,
  idNumbersStackC,
  idNumbersStackH,
  textFileBalancedTree,
  calcEntryH,
  calcExpressionH,
  calcMain,
  calcExpressionC,
  calcEntryC,
} from '../../lib/cppSnippets';

const Work = () => {
  const v = useColorModeValue(a11yLight, a11yDark);
  return (
    <>
      <Layout title="C++ competitive programming">
        <Container>
          <Title>
            C++ competitive programming <Badge>sept. 2022 - jan. 2023</Badge>
          </Title>
          <Heading size="sm" my="6">
            Programs developed using Data Structures and Algorithms.
          </Heading>
          <Text mb="6">
            Homework for University of Trento&apos;s Programming 1 course.
          </Text>
          <Accordion mb="6" allowMultiple>
            <AccordionItem id="intro-to-programming-1">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What is programming 1?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  The first programming course of{' '}
                  <strong>University of Trento</strong>&apos;s C.S. bachelor
                  degree is <strong>Programming 1</strong>. This course aims to
                  teach basic concepts of programming using <strong>C++</strong>
                  . Moreover, it gives a complete problem solving foundation
                  necessary to tackle advanced university programming courses.
                  This pages illustrates the most challenging programs given to
                  students as homework between <strong>Sept. 2022</strong> and{' '}
                  <strong>Jan. 2023</strong> (semester in which I took the
                  course).
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="what-i-learned">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What I learned
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList spacing="2">
                  <ListItem>
                    By following this course,{' '}
                    <strong>I learned to code in C++</strong>. I had never coded
                    in this language before (I had experience mainly in
                    Javascript and Python). I struggled a lot at the beginning
                    of the course, especially while learning concepts like
                    dynamic allocation and pointers, but by doing many exercises
                    I understood them and I was gradually able to complete every
                    assignment given in the course.
                  </ListItem>
                  <ListItem>
                    Even if I had already studied recursion and knew its use
                    cases, this course let me{' '}
                    <strong>understand recursion at its core</strong> by
                    understanding how{' '}
                    <strong>
                      compilers parse recursive code to optimize it
                    </strong>
                    . This is put in practice by transforming recursive function
                    written as <strong>tail recursive</strong> into equivalent
                    iterative functions. This simplifies developers&apos; lives
                    especially when dealing with trees, where recursion allows
                    to perform basic operations in a very readable way.
                  </ListItem>
                  <ListItem>
                    <Text>
                      This course taught me basic{' '}
                      <strong>data structures and algorithms</strong>. I had
                      never studied them before, but I found them fascinating I
                      learned:
                    </Text>
                    <UnorderedList my="2">
                      <ListItem>Stacks</ListItem>
                      <ListItem>Sorting algorithms</ListItem>
                      <ListItem>Search algorithms</ListItem>
                      <ListItem>Queues</ListItem>
                      <ListItem>Priority Queues</ListItem>
                      <ListItem>Binary Search Trees</ListItem>
                      <ListItem>Linked lists</ListItem>
                    </UnorderedList>
                    <Text>
                      This has been a great opportunity to{' '}
                      <strong>start my interview preparation journey</strong>.
                      Starting to solve basic DSA problems, in order to
                      understand what I will need to focus on in the future in
                      order to pass technical job interviews.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      After having completed this course{' '}
                      <strong>my problem solving skills improved</strong>,
                      especially for solving basic data structures problems. I
                      learned that in order to solve these problems it&apos;s
                      better to <strong>rephrase the problem first</strong>,
                      thinking about: inputs, outputs and simple examples.
                      Afterwards it&apos;s necessary to{' '}
                      <strong>think about the logic</strong> which needs to be
                      implemented in order to solve the problem. If it&apos;s
                      very difficult to figure out an algorithm to process
                      thought examples, then it may be useful to think about a{' '}
                      <strong>simplified version of the problem</strong> and
                      reflect on the logic which needs to be set up to solve it.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Multiple instances research in Binary Search Tree">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Multiple instances research in Binary Search Tree
                  </Box>
                  <Tag colorScheme="teal">Easy</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  This exercise was about modeling a <strong>library</strong>{' '}
                  using a <strong>Binary Search tree</strong> containing Book
                  objects. The most interesting feature we were asked to
                  implement was a function which searched for{' '}
                  <strong>all the books of a specific author</strong> in the
                  tree, saving them in a <strong>Linked List</strong>.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={treeMultipleInstances}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Calculate determinant of a matrix using sarrus method">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Calculate determinant of a matrix using sarrus method
                  </Box>
                  <Tag colorScheme="teal">Easy</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  Simple programs which asks for a matrix in input and
                  calculates the determinant using Sarrus&apos; algorithm. By
                  default the matrix is 3x3 but it can be used for any quadratic
                  matrix.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={sarrus}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Prefixed Boolean expressions Parser">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Prefixed Boolean expressions Parser
                  </Box>
                  <Tag colorScheme="teal">Easy</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  A program which takes a boolean expression as input. This has
                  to be prefixed, so each{' '}
                  <strong>operator (& and !) precedes</strong> its values. The
                  program parses the expression, evaluating it with the support
                  of a stack. If for whatever reason the evaluating function
                  find an <strong>unexpected values</strong> for the expression
                  to be correctly resolved, it sets the is valid parameter to
                  false. Otherwise, if the expression is correctly formated it
                  returns its computer value{' '}
                  <strong>&apos;T&apos; or &apos;F&apos;</strong>.
                </Text>
                <Text my="4">
                  Examples:
                  <br />
                  <strong>F&T</strong> : Invalid expression
                  <br />
                  <strong>&F&TT</strong> : F
                </Text>
                <Tabs>
                  <TabList>
                    <Tab>stack.h</Tab>
                    <Tab>stack.cc</Tab>
                    <Tab>main.cc</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={stackH}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={stackC}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={mainBoolPrefix}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Print sub-matrix">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Print sub-matrix
                  </Box>
                  <Tag colorScheme="teal">Easy</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  Give the coordinates of the{' '}
                  <strong>first and last element</strong> of the matrix. The
                  follwing function <strong>prints the submatrix</strong>{' '}
                  identified by the first and last element given.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={submat}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Check if a maze (rappresented by a matrix) is solvable">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Check if a maze (represented by a matrix) is solvable
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  A maze can be represented by a{' '}
                  <strong>quadratic matrix</strong> containing two type of
                  values one which represents a <strong>wall</strong> and
                  another representing a <strong>walkable area</strong>. With
                  this approach it is possible to write an algorithm which
                  checks wheter a maze is solvable or not by walking each random
                  path. A <strong>stack is used to keep track</strong> of every
                  cell that has been walked. Each time a{' '}
                  <strong>dead-end</strong> is found, the corresponding cell is
                  poped from the stack and every other path of each previous
                  cell is walked as long as a{' '}
                  <strong>path which solves the maze</strong> is found. If every
                  path of each cell is walked and yet a path to exit the maze is
                  not round, the maze is not solvable.
                </Text>
                <Tabs>
                  <TabList>
                    <Tab>stack.h</Tab>
                    <Tab>stack.cc</Tab>
                    <Tab>main.cc</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={stackHMaze}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={stackCMaze}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={mazeSolver}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Build Reverse Polish Notation calculator">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Build Reverse Polish Notation calculator
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <AccordionPanel pb={4}>
                  <Text mb="4">
                    A <strong>Reverse Polish Notation</strong> calculator is a
                    type of calculator in which operands preceed operators. By
                    doing so, <strong>complex mathematical</strong> expressions
                    can be inputed
                    <strong>without the need of brackets</strong>, simplyfing
                    the input of complex expressions. A RPN calculator can be
                    implemented by using a <strong>Stack</strong> in which
                    numbers are stored as their are received. As soon as an
                    operator is inserted, the <strong>stack is emptied</strong>{' '}
                    and the result of the operation is computed, this is then
                    stored in the stack replacing the last two operands.
                    Allowing it to be part of another operation.
                  </Text>
                  <Tabs>
                    <TabList overflowX="auto" overflowY="hidden" pb="1">
                      <Tab>entry.h</Tab>
                      <Tab>entry.cc</Tab>
                      <Tab>calcRpn.cc</Tab>
                      <Tab>calcRpn.h</Tab>
                      <Tab>stack.h</Tab>
                      <Tab>stack.cc</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <CopyBlock
                          language="cpp"
                          text={entryH}
                          codeBlock
                          theme={v}
                          showLineNumbers={false}
                        />
                      </TabPanel>
                      <TabPanel>
                        <CopyBlock
                          language="cpp"
                          text={entryC}
                          codeBlock
                          theme={v}
                          showLineNumbers={false}
                        />
                      </TabPanel>
                      <TabPanel>
                        <CopyBlock
                          language="cpp"
                          text={calcRpnC}
                          codeBlock
                          theme={v}
                          showLineNumbers={false}
                        />
                      </TabPanel>
                      <TabPanel>
                        <CopyBlock
                          language="cpp"
                          text={calcRpnH}
                          codeBlock
                          theme={v}
                          showLineNumbers={false}
                        />
                      </TabPanel>
                      <TabPanel>
                        <CopyBlock
                          language="cpp"
                          text={stackHRpn}
                          codeBlock
                          theme={v}
                          showLineNumbers={false}
                        />
                      </TabPanel>
                      <TabPanel>
                        <CopyBlock
                          language="cpp"
                          text={stackCRpn}
                          codeBlock
                          theme={v}
                          showLineNumbers={false}
                        />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </AccordionPanel>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Solve Flavio Giuseppe's problem using linked lists">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Solve Flavio Giuseppe&apos;s problem using linked lists
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">Giuseppe Flavio&apos;s problem:</Text>
                <UnorderedList>
                  <ListItem>
                    Imagine that{' '}
                    <strong>N people have to elect a leader</strong>.
                  </ListItem>
                  <ListItem>
                    The election takes place as follows:{' '}
                    <strong>
                      people arrange themselves in a circle, eliminating one
                      person each M
                    </strong>
                    , following the order of the circle, and closing the circle
                    ad each deletion.
                  </ListItem>
                  <ListItem>
                    The problem is to{' '}
                    <strong>find out which person will stay</strong> for last,
                    and will therefore be the leader.
                  </ListItem>
                </UnorderedList>
                <Text my="2">
                  To represent people arranged in a circle we build a{' '}
                  <strong>circular linked list</strong> where, for each person,
                  a link connects the person to the person immediately to their
                  left in the circle. The construction of the list can be done
                  as follows:
                </Text>
                <UnorderedList>
                  <ListItem>
                    A circular list of a single node is constructed for person
                    1.
                  </ListItem>
                  <ListItem>The other N-1 people join one at a time.</ListItem>
                  <ListItem>
                    The result is a circle with nodes from 1 to N.
                  </ListItem>
                  <ListItem>
                    We take the first node of the circle and skip M-1 nodes, we
                    remove node M by updating the links to keep the structure
                    circular.
                  </ListItem>
                  <ListItem>
                    Let&apos;s start again from node M-1 by applying the same
                    principle.
                  </ListItem>
                  <ListItem>
                    We repeat the approach until only one node is left. The
                    content will give the name of the leader.
                  </ListItem>
                  <ListItem>
                    Memorization of the order where the elements are removed
                    answers the question.
                  </ListItem>
                </UnorderedList>
                <CopyBlock
                  language="cpp"
                  text={treeMultipleInstances}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Find islands in matrix">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Find islands in matrix
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  Given a matrix find all the islands{' '}
                  <strong>numbers different other 0</strong> completely{' '}
                  <strong>surrounded by zeros</strong>.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={islands}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Calculate Trasponse matrix">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Calculate Trasponse matrix
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  The trasponse matrix is obtained writing{' '}
                  <strong>each row as a column</strong>.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={trasponseMatrix}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Check validity of brackets combination">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Check validity of brackets combination
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  Algorithm which checks if a{' '}
                  <strong>combination of brackets is valid</strong>
                  (every bracket is closed properly).
                </Text>
                <Tabs>
                  <TabList>
                    <Tab>stack.h</Tab>
                    <Tab>stack.cc</Tab>
                    <Tab>main.cc</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={bracketsControlStackH}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={bracketsControlStackC}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={bracketsControl}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Sort values read from file using a Balanced Binary Tree">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Sort values read from file using a Balanced Binary Tree
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  Program that receives the path of a file containing one
                  integer per line. The program creates a binary search tree
                  balanced with the numbers contained in the file.
                </Text>
                <Text my="4">
                  A balanced binary search tree is a tree that automatically{' '}
                  <strong>keeps its height small</strong> (guaranteed to be
                  logarithmic) for a sequence of insertions and deletions.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={textFileBalancedTree}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="I & D numbers Decoder">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    I & D numbers Decoder
                  </Box>
                  <Tag colorScheme="yellow">Medium</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  The following program receives strings composed only by{' '}
                  <strong>&quot;I&quot; and &quot;D&quot;</strong>. These encode
                  numbers in which &quot;I&quot; mean that the next digit is{' '}
                  <strong>greater</strong> than the former. &quot;D&quot; means
                  that the next digit is <strong>lower</strong> than the former.
                  The decode function convert a string in this format to an
                  integer. Example:
                  <strong>&quot;IIDDIDID&quot; : 125437698</strong>.
                </Text>
                <Tabs>
                  <TabList>
                    <Tab>stack.h</Tab>
                    <Tab>stack.cc</Tab>
                    <Tab>main.cc</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={idNumbersStackH}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={idNumbersStackC}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={idNumbersMain}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Solve Hanoi's Tower recursively">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Solve Hanoi&apos;s Tower recursively
                  </Box>
                  <Tag colorScheme="red">Very Difficult</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  Hanoi&apos; tower is a mathematical game which consists on{' '}
                  <strong>stacking n disks</strong> from the larger to the
                  smaller on one stake. Generally, there are three stakes and
                  the <strong>rules</strong> are the following:
                </Text>
                <UnorderedList my="4">
                  <ListItem>
                    It&apos;s allowed to move only{' '}
                    <strong>one stake at the time</strong>.
                  </ListItem>
                  <ListItem>
                    Stakes always have to be staked{' '}
                    <strong>from the smaller to the larger</strong>.
                  </ListItem>
                </UnorderedList>
                <Text>This problem can be easily solved using recursion.</Text>
                <UnorderedList my="4">
                  <ListItem>
                    The algorithm starts by moving the smallest disk to an empty
                    stake.
                  </ListItem>
                  <ListItem>
                    Then the second smallest disk is moved to another empty
                    stake
                  </ListItem>
                  <ListItem>Afterwards the two disks are staked up.</ListItem>
                  <ListItem>
                    The process is repeated for all the remaining disks in
                    order.
                  </ListItem>
                </UnorderedList>
                <CopyBlock
                  language="cpp"
                  text={hanoi}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Build mathematical expression calculator using Binary Trees">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Build mathematical expression calculator using Binary Trees
                  </Box>
                  <Tag colorScheme="red">Very Difficult</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  Standard arithmetic expressions use (binary) operators infixes
                  and parentheses: ((34 * 3)/(31 - 5) + (21+3)/(24-12)) these
                  can be represented by a <stong>binary tree</stong> whose{' '}
                  <strong>leaves contain numbers</strong> and the other{' '}
                  <strong>nodes contain operators</strong>.{' '}
                  <strong>An expression is read and created recursively</strong>{' '}
                  as follows: if a number is read, a leaf expression is created.
                  Otherwise, open parenthesis is read and an intermediate node
                  is created.{' '}
                  <strong>An expression is evaluated recursively</strong> as
                  follows: if it&apos;s a leaf, its value is returned otherwise,
                  the two subtrees are recursively evaluated, and the node
                  operator is applied.
                </Text>
                <Tabs>
                  <TabList>
                    <Tab>entry.h</Tab>
                    <Tab>expression.h</Tab>
                    <Tab>entry.cc</Tab>
                    <Tab>expression.cc</Tab>
                    <Tab>main.cc</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={calcEntryH}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={calcExpressionH}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={calcEntryC}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={calcExpressionC}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                    <TabPanel>
                      <CopyBlock
                        language="cpp"
                        text={calcMain}
                        codeBlock
                        theme={v}
                        showLineNumbers={false}
                      />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Calculate all possible permutations of ACGT">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Calculate all possible permutations of ACGT
                  </Box>
                  <Tag colorScheme="red">Very Difficult</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  DNA is a long chain of units called nucleotides. There are 4
                  types of nucleotides denoted by the letters{' '}
                  <strong>A, C, G, and T</strong>. The function{' '}
                  <strong>gen_k_mer(k)</strong> generates all the possible ACGT{' '}
                  <strong>combinations of k letters</strong>. It calculates the
                  permutations of k characters with the letters ACGT. These will
                  be <strong>4^k</strong> in total.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={permutations}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Iteractive removal of nodes from Binary Tree">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Remove a node from Binary Tree
                  </Box>
                  <Tag colorScheme="red">Very Difficult</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  This problem is much easier to solve using a{' '}
                  <strong>recursive</strong> approach.
                </Text>
                <UnorderedList my="4">
                  <ListItem>
                    <strong>Navigate</strong> the tree until the node with the
                    passed value is found
                  </ListItem>
                  <ListItem>
                    If both the{' '}
                    <strong>left and right branches are empty</strong>, discard
                    the node.
                  </ListItem>
                  <ListItem>
                    If <strong>only the left</strong> branch points to another
                    node, replace the current node with its predecessor. And
                    keep traversing the tree from the current left branch.
                  </ListItem>
                  <ListItem>
                    If <strong>only the right branch</strong> points to another
                    node, replace the current node with its successor and keep
                    traversing the tree from the current right branch.
                  </ListItem>
                </UnorderedList>
                <Text mb="4">
                  Through this algorithm all the nodes with a specific values
                  will be removed from the tree.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={treeRemoval}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id="Find min and max node in Binary Tree Iteractively">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    Find min and max node in Binary Tree Iteractively
                  </Box>
                  <Tag colorScheme="red">Very Difficult</Tag>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text mb="4">
                  In order to find max and min values from a tree, it&apos;s
                  necessary to traverse the tree{' '}
                  <strong>only on right side branches</strong> if looking for
                  the max or on <strong>left side branches</strong> if looking
                  for the min. In order to implement the research iteractively,
                  the tree must be traversed with a loop{' '}
                  <strong>as long as a NULL node</strong> is found.
                </Text>
                <CopyBlock
                  language="cpp"
                  text={minMaxTree}
                  codeBlock
                  theme={v}
                  showLineNumbers={false}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Layout>
    </>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';
