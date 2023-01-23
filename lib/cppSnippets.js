export const treeMultipleInstances = `#include <cstddef>
#include <cstring>
#include <cstdlib>
#include <iostream>

using namespace std;

#define MAXSSIZE 50

struct book {
  char title[MAXSSIZE];
  char author[MAXSSIZE];
  char ISBN[MAXSSIZE];
  int id;
};

struct tree {
  book info;
  tree * left;
  tree * right;
};

void printBook(const book & l) {
  cout << "==============================" << endl;
  cout << "title: " << l.title << endl;
  cout << "author: " << l.author << endl;
  cout << "ISBN: " << l.ISBN << endl;
  cout << "Id: " << l.id << endl;
  cout << "==============================" << endl;
}

book readBook() {
  book res;
  char b[100];
  cout << "title: "; 
  cin >> b;
  strncpy(res.title, b, MAXSSIZE);
  cout << "author: "; 
  cin >> b;
  strncpy(res.author, b, MAXSSIZE);
  cout << "ISBN: "; 
  cin >> b;
  strncpy(res.ISBN, b, MAXSSIZE);
  cout << "Id: "; 
  cin >> b;
  res.id = atoi(b);
  return res;
}

int compare(const book & l1, const book & l2) {
  return strcmp(l1.author, l2.author);
}

int compareAuthor(const char * author, const book & l) {
  return strcmp(author, l.author);
}

struct node {
  book val;
  node * next;
};

void init(tree * & t) {
  t = (tree *)NULL;
}

void deinit(tree * & t) {
  if (t != NULL) {
    deinit(t->left);
    deinit(t->right);
    delete t;
  }
}

void insert(tree * & t, const book & v) {
  if (t == (tree*)NULL) {
    t = new (nothrow) tree;
    if (t != (tree*)NULL) {
      t->info = v;
      t->left = (tree*)NULL;
      t->right = (tree*)NULL;
    }
  }
  else if (compare(v, t->info) <= 0)
    insert(t->left, v);
  else if (compare(v, t->info) > 0)
    insert(t->right, v);
}

void orderedPrint(const tree * t) {
  if (t != (tree *)NULL) {
    orderedPrint(t->left);
    printBook(t->info);
    orderedPrint(t->right);
  }
}

void print_it(node * current) {
    while (current != NULL) {
        printBook(current->val);
        current = current -> next;
    }
}

void deinit_it(node * current) {
    while (current != NULL) {
        node * t = current->next;
        delete current;
        current = t;
    }
}

void print_all_aux(const tree * t, const char * author, node * & firstNode, node * & list) {
  if (t != (tree *)NULL) {
    if (compareAuthor(author, t->info) == 0) {
      // In this case, go only to left, because by specification
      // can only find on the left elements with the same author,
      // and thus avoid looking on right, thus avoiding
      // useless searches.
      print_all_aux(t->left, author, firstNode, list);
      // printBook(t->info);
      node * n = new node;
      n->val = t->info;
      if (firstNode == NULL) firstNode = n;
      if (list != NULL) list->next = n;
      list = n;
    }
    if (compareAuthor(author, t->info) < 0) {
      print_all_aux(t->left, author, firstNode, list);
    } else {
      print_all_aux(t->right, author, firstNode, list);
    }
  }

}

node * printAll(const tree * t, const char * author) {
  node * firstNode, * list;
  firstNode = list = NULL;
  print_all_aux(t, author, firstNode, list);
  return firstNode;
}

int main() {
  tree * library;

  init(library);
  char res;

  do {
    cout << "Options: " << endl
          << "Insert (i)" << endl
          << "Ordered print (o)" << endl
          << "Print all (t)" << endl
          << "end (f)" << endl;
    cout << ": ";
    cin >> res;

    switch (res) {
      case 'i': {
        book l = readBook();
        insert(library, l);
        break;
      }
      case 'o': {
        cout << "library:" << endl;
        orderedPrint(library);
        cout << endl;
        break;
      }
      case 't': {
        char author[MAXSSIZE];
        cout << "author: ";
        cin >> author;
        cout << endl << "All books of author \"" << author << "\" sono:" << endl;
        node * f = printAll(library, author);
        print_it(f);
        deinit_it(f);
        break;
      }
      case 'f':
        break;
      default:
        cout << "Unknown operation" << endl;
        break;
      }
  } while (res != 'f');

  deinit(library);
}`;

export const sarrus = `#include <iostream>
#include <cstdlib>

using namespace std;

const int ROWS = 3;
const int COLS = 3;

void init(int matrix[][COLS]);
void print(const int matrix[][COLS]);
int sarrus(const int matrix[][COLS]);
int multiplyDiagonal(const int matrix[][COLS], int startCol, bool inverse);

int main() {

    srand(time(NULL));

    int matrix[ROWS][COLS];

    init(matrix);
    print(matrix);

    int d = sarrus(matrix);
    cout << "determinant " << d << endl;

    return 0;
}

void init(int matrix[][COLS]) {
    for (int row = 0; row < ROWS ; row++) {
        for (int col = 0 ; col < COLS ; col++) {
            matrix[row][col] = rand() % 10;
        }
    }
}

void print(const int matrix[][COLS]) {
    for (int row = 0 ; row < ROWS ; row++) {
        for (int col = 0 ; col < COLS ; col++) {
            cout << matrix[row][col] << " ";
        }
        cout << endl;
    }
    cout << endl;
}

int sarrus(const int matrix[][COLS]) {
    return multiplyDiagonal(matrix, 0, false)
        + multiplyDiagonal(matrix, 1, false)
        + multiplyDiagonal(matrix, 2, false)
        - multiplyDiagonal(matrix, 0, true)
        - multiplyDiagonal(matrix, 1, true)
        - multiplyDiagonal(matrix, 2, true);
}

int multiplyDiagonal(const int matrix[][COLS], int startCol, bool inverse) {

    int val = 1;
    int s = inverse ? -1 : 1;

    for (int row = 0 ; row < ROWS ; row++) {
        int col = (startCol+row*s) % COLS;
        col = (col < 0) ? col+COLS : col;
        val *= matrix[row][col];
    }

    return val;
}`;

export const stackH = `#ifndef STACK_H
#define STACK_H

#include <iostream>
using namespace std;

struct node {
	char value;
	node* next;
};
typedef node* list;

void init();
void deinit();
bool push(char);
bool top(char &);
bool pop();
bool empty();

#endif`;

export const stackC = `#include "stack.h"

static list stack;

bool empty () {
	return (stack == NULL);    
}

void init() {
	stack = NULL;
}

bool top (char &n) {
	bool res;
	if (empty()) {
		res = false;
	}
	else {
		n=stack->value;
		res = true;
	}
	return res;
}

bool push (char n) {
	bool res;
	list newNode = new node;
	if (newNode==NULL) {
		res = false;
	}
	else {
		newNode->value = n;
		newNode->next = stack;
		stack = newNode;
		res = true;
	}
	return res;
}

bool pop () {
	bool res;
	if (empty()) {
		res = false;
	}
	else {
		list firstNode = stack;
		stack = stack->next;
		delete firstNode;
		res = true;
	}
	return res;
}
    
void deinit() {
	while (pop()) {
		;
	}
}`;

export const mainBoolPrefix = `#include <iostream>
#include "stack.h"

using namespace std;

int strlen(char str[]) {
    int l = 0;
    for (int i = 0; str[i] != '\0'; ++i) {
     l++;   
    }
    return l;
}

char parse(char exp [], bool & valid);

int main() { 
    int max = 100;
    char exp [max];
    bool valid = true;
    char res;

    cout << "exp: ";
    cin >> exp;

    res = parse(exp, valid);

    if (valid) {
        cout << "Result: " << res << endl;
    }
    else {
        cout << "Invalid expression" << endl;
    }
    
    return 0;
}

char parse(char exp [], bool & valid) {
    valid = true;
    init();
    for (int i = strlen(exp); i >= 0 && valid; i--) {
        if (exp[i] == 'T' || exp[i] == 'F') {
            push(exp[i]);
        } else if (exp[i] == '!') {
            char lastValue;
            top(lastValue);
            pop();
            if (lastValue == 'T' || lastValue == 'F') {
                lastValue = lastValue == 'T' ? 'F' : 'T';
                push(lastValue);
            } else valid = false;
        } else if (exp[i] == '&') {
            char lastValue;
            top(lastValue);
            pop();
            char secondToLastValue;
            top(secondToLastValue);
            pop();
            if (
                (lastValue == 'T' || lastValue == 'F') &&
                (secondToLastValue == 'T' || secondToLastValue == 'F')
            ) {
                lastValue = lastValue == 'T' && secondToLastValue == 'T' ? 'T' : 'F';
                push(lastValue);
            } else valid = false;
        }
    }
    char res;
    top(res);
    pop();
    if (!empty()) {
        valid = false;
        deinit();
    }
    return res; 
}`;

export const stackHMaze = `#ifndef STACK_H
#define STACK_H

#include <iostream>
using namespace std;

struct cell {
    int rowIndex;
    int colIndex;
};

struct node {
	cell value;
	node* next;
};

typedef node* list;

void init();
void deinit();
bool push(cell);
bool top(cell &);
bool pop();
bool empty();

#endif`;

export const stackCMaze = `#include "stack.h"

static list stack;

bool empty () {
	return (stack == NULL);    
}

void init() {
	stack = NULL;
}

bool top (cell &n) {
	
	bool res;
	if (empty()) {
		res = false;
	}
	else {
		n=stack->value;
		res = true;
	}
	return res;
}


bool push (cell n) {
	bool res;
	list newNode = new node;
	if (newNode==NULL) {
		res = false;
	}
	else {
		newNode->value = n;
		newNode->next = stack;
		stack = newNode;
		res = true;
	}
	return res;
}

bool pop () {
	bool res;
	if (empty()) {
		res = false;
	}
	else {
		list firstNode = stack;
		stack = stack->next;
		delete firstNode;
		res = true;
	}
	return res;
}

void deinit() {
	while (pop()) {
		;
	}
}`;

export const mazeSolver = `#include <iostream>
#include "stack.h"

using namespace std;

void solve(int [][5], int, int);

int main(int argc, char* argv[]) {
    int maze[5][5] = {
        { 1, 0, 1, 1, 0 },
        { 1, 1, 1, 0, 1 },
        { 0, 1, 0, 1, 1 },
        { 1, 1, 1, 1, 1 },
        { 1, 1, 1, 1, 1 }
    };

    cout << "path: ";
    solve(maze, 4, 2);
   
    return 0;
}

void solve(int maze[][5], int x, int y) {
    init();

    cell start;
    start.rowIndex = 0;
    start.colIndex = 0;
    push(start);
    
    bool visited[5][5] = {
        { false, false, false, false, false },
        { false, false, false, false, false },
        { false, false, false, false, false },
        { false, false, false, false, false },
        { false, false, false, false, false }
    };

    visited[0][0] = true;

    while (!empty()) {
        cell temp;
        top(temp);
        int xCoord = temp.rowIndex;
        int yCoord = temp.colIndex;
        if (xCoord == x && yCoord == y) {
            while (!empty()) {
                top(temp);
                cout << "[" << temp.rowIndex << "," << temp.colIndex << "], ";
                pop();
            }
            cout << endl;
        } else {
            if (xCoord - 1 >= 0 && !visited[xCoord-1][yCoord] && maze[xCoord - 1][yCoord] == 1) {
                cell newCell;
                newCell.rowIndex = xCoord-1;
                newCell.colIndex = yCoord;
                push(newCell);
                visited[xCoord-1][yCoord] = true;
            } else if (xCoord + 1 < 5 && !visited[xCoord+1][yCoord] && maze[xCoord + 1][yCoord] == 1) {
                cell newCell;
                newCell.rowIndex = xCoord+1;
                newCell.colIndex = yCoord;
                push(newCell);
                visited[xCoord+1][yCoord] = true;
            } else if (yCoord - 1 >= 0 && !visited[xCoord][yCoord-1] && maze[xCoord][yCoord-1] == 1) {
                cell newCell;
                newCell.rowIndex = xCoord;
                newCell.colIndex = yCoord - 1;
                push(newCell);
                visited[xCoord][yCoord-1] = true;
            } else if (yCoord + 1 < 5 && !visited[xCoord][yCoord+1] && maze[xCoord][yCoord+1] == 1) {
                cell newCell;
                newCell.rowIndex = xCoord;
                newCell.colIndex = yCoord + 1;
                push(newCell);
                visited[xCoord][yCoord+1] = true;
            } else {
                pop();
            }
        }
    }

    deinit();
}`;

export const calcRpnC = `#include "entry.h"
#include "stack.h"
#include "calc_rpn.h"

static void clear()
{ // print 10 new line to clean the terminal
  for (int i=0; i<10; i++)
    cout << '\n';
}

int calc() {
  entry e, op1, op2;
  retval res;

  init();
  do {
    print();
    res = read_entry(e);
    if (res == FAIL) {
      clear();
      cout << "!!! Wrong data type !!!\n";
    }
    // SWITCH OFF
    else if (offp(e)) {
    }
    // NUMBER
    else if (!operatorp(e)) {
      res = push(e);
      clear();
      if (res == FAIL) {
        cout << "!!! Too few data in the stack !!!\n";
      }
    }
    // OPERATOR
    else if (length() < 2) {
      clear();
      cout << "!!! Too few operands !!!\n";
    }
    else {
      top(op1);
      pop();
      top(op2);
      pop();
      entry r = calculate(op1, op2, e);
      push(r);
      clear();
    }
  } while (!offp(e));
  deinit();
  return 0;
}`;
export const calcRpnH = `#ifndef CALC_RPN_H
#define CALC_RPN_H

#include "entry.h"
#include "stack.h"

int calc ();

#endif`;
export const entryC = `#include "entry.h"

static bool isdouble(char * s,double & x) {
  return (sscanf(s,"%lf",&x) > 0);
}

int offp(const entry & e)
{
  return (e.type == OFF);
}

int operatorp(const entry & e)
{
  return (e.type == OPERATOR);
}

retval read_entry(entry & e)
{
  double num;
  retval res;
  char buffer[MaxDim];

  cin.getline(buffer, MaxDim);
  if (isdouble(buffer, num)) {
    e.type = NUM;
    e.num = num;
    res = OK;
  }
  else if (strlen(buffer) == 1) { //operator or off or error
    switch (buffer[0]) { //operator or off
    case 'q':
      e.type = OFF;
      res = OK;
      break;
    case '+':
      e.type = OPERATOR;
      e.op = PLUS;
      res = OK;
      break;
    case '-':
      e.type = OPERATOR;
      e.op = MINUS;
      res = OK;
      break;
    case '*':
      e.type = OPERATOR;
      e.op = TIMES;
      res = OK;
      break;
    case '/':
      e.type = OPERATOR;
      e.op = DIVIDE;
      res = OK;
      break;
    default:
      res = FAIL;
      break;
    }
  }
  else { // neither num nor operator
    res = FAIL;
  }
  return res;
}

static void print_operator(Operator op) {
  switch (op){
  case PLUS:
    cout << '+';
    break;
  case MINUS:
    cout << '-';
    break;
  case TIMES:
    cout << '*';
    break;
  case DIVIDE:
    cout << '/';
    break;
  default:
    break;
  }
  cout << endl;
}

void print_entry (const entry & e) {
  if (e.type == OPERATOR)
    print_operator(e.op);
  else
    cout << e.num << endl;
}

entry calculate(const entry & op1,
	      const entry & op2, const entry & e) {
  entry res;
  res.type = NUM;
  switch (e.op) {
  case PLUS:
    res.num = op2.num + op1.num;
    break;
  case MINUS:
    res.num = op2.num - op1.num;
    break;
  case TIMES:
    res.num = op2.num * op1.num;
    break;
  case DIVIDE:
    if (op1.num == 0.0)
      cerr << "error: 0 division!\n";
    else
      res.num = op2.num / op1.num;
    break;
  }
  return res;
}`;

export const entryH = `#ifndef ENTRY_H
#define ENTRY_H

using namespace std;
#include <iostream>

#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <cerrno>
#include <cctype>

const int MaxDim = 40;

enum EntryType {OPERATOR,NUM,OFF};
enum Operator {PLUS, MINUS, TIMES, DIVIDE};
enum retval {FAIL,OK};

struct entry 
{
  EntryType  type;
  Operator op;
  double num;
};

int offp (const entry &);
int operatorp (const entry &);
void print_entry (const entry &);
retval read_entry (entry &);
entry calculate(const entry & , const entry & , const entry & );

#endif`;

export const stackHRpn = `#ifndef STACK_H
#define STACK_H

#include <iostream>
using namespace std;

#include "entry.h"

void init();
void deinit ();
retval push (const entry &);
retval top (entry &);
retval pop ();
void print();
int length();

#endif`;

export const stackCRpn = `#include "entry.h"
#include "stack.h"

static const int dim = 100;
static int idx = -1;
entry elem[dim];

static bool emptyp()
{
  return (idx == 0);
}

static bool fullp()
{
  return (idx == dim);
}

int length()
{
  return idx;
}

void init ()
{
  idx = 0;
  // elem = new entry[dim];
}

void deinit() {
  // delete [] elem;
}

retval top(entry &n)
{
  retval res;
  if (emptyp())
    res = FAIL;
  else {
    n = elem[idx-1];
    res = OK;
  }
  return res;
}

retval push(const entry & n)
{
  retval res;
  if (fullp())
    res = FAIL;
  else {
    elem[idx]=n;
    idx++;
    res = OK;
  }
  return res;
}

retval pop()
{
  retval res;
  if (emptyp())
    res = FAIL;
  else {
    idx--;
    res = OK;
  }
  return res;
}

void print()
{
  int i;
  cout << "\nvvvvvvvvvvvv\n";
  for (i=0; i < idx; i++)
    print_entry(elem[i]);
  cout << "^^^^^^^^^^^^\n";
}`;

export const mainRpn = `#include "entry.h"
#include "calc_rpn.h"

int main ()
{
  calc();
  return 0;
}`;

export const flavioGiuseppe = `#include <iostream>
using namespace std;

#include <stdlib.h>

struct node {
  int val;
  node * next;
};

int main(int argc, char *argv[]) {
  int i;

  if ((argc == 1) || (argc > 3)) {
    cerr << "Uso: " << argv[0] << " <n> <m> " << endl;
    exit(1);
  }

  int N = atoi(argv[1]);
  int M = atoi(argv[2]);

  node * t = new node;
  t->val = 1; t->next = NULL;
  t->next = t;

  node * x = t;
  for (i = 2; i <= N; i++) {
    node * n = new node;
    n->val = i; n->next = t;
    x->next = n;
    x = x->next;
  }

  cout << "Ring: " << t->val << " ";
  for (node * l = t->next; l != t; l = l->next) {
    cout << l->val << " ";
  }
  cout << endl;

  while (x != x->next) {
    for( i = 1; i < M; i++) x = x->next;
    node * t = x->next;
    x->next = x->next->next;
    t->next = NULL;
    cout << "Remove person: " << t->val << endl;
    delete t;
  }
  cout << "The leader is: " << x->val << endl;
  delete x;
}`;

export const trasponseMatrix = `#include <iostream>
#include <cstdlib>

using namespace std;

const int ROWS = 3;
const int COLS = 3;

void init(int matrix[][COLS]);
void print(const int matrix[][COLS]);
void printTrasponse(const int matrix[][COLS]);
void trasponse(const int matrix[][COLS], int trasponse[][ROWS]);

int main() {

    int matrix[ROWS][COLS];
    int trasponse[COLS][ROWS];

    srand(time(NULL));

    init(matrix);
    print(matrix);
    
    trasponse(matrix, trasponse);
    printTrasponse(matrix);

    return 0;
}

void init(int matrix[][COLS]) {
    for (int i = 0 ; i < ROWS ; i++) {
        for (int j = 0 ; j < COLS ; j++) {
            matrix[i][j] = rand() % 10;
        }
    }
}

void print(const int matrix[][COLS]) {
    for (int r = 0 ; r < ROWS ; r++) {
        for (int c = 0 ; c < COLS ; c++) {
            cout << matrix[r][c] << " ";
        }
        cout << endl;
    }
    cout << endl;
}

void trasponse(const int matrix[][COLS], int trasponse[][ROWS]) {
    for (int r = 0 ; r < ROWS ; r++) {
        for (int c = 0 ; c < COLS ; c++) {
            trasponse[c][r] = matrix[r][c];
        }
    }
}

void printTrasponse(const int matrix[][COLS]) {
    for (int c = 0 ; c < COLS ; c++) {
        for (int r = 0 ; r < ROWS ; r++) {
            cout << matrix[r][c] << " ";
        }
        cout << endl;
    }
    cout << endl;
}`;

export const islands = `#include <iostream>
#include <cstdlib>

using namespace std;

const int ROWS = 10;
const int COLS = 10;

void init(int matrix[][COLS]);
void print(const int matrix[][COLS]);
int findIslands(const int matrix[][COLS]);
int checkIfIsland(const int matrix[][COLS], int r, int c);

int main() {

    int matrix[ROWS][COLS];

    srand(time(NULL));

    init(matrix);
    print(matrix);

    int isole = findIslands(matrix);
    cout << "La matrix ha " << isole << " isole" << endl;

    return 0;
}

void init(int matrix[][COLS]) {
    for (int r = 0; r < ROWS ; r++) {
        for (int c = 0 ; c < COLS ; c++) {
            matrix[r][c] = rand() % 2;
        }
    }
}

void print(const int matrix[][COLS]) {
    for (int r = 0 ; r < ROWS ; r++) {
        for (int c = 0 ; c < COLS ; c++) {
            cout << matrix[r][c] << " ";
        }
        cout << endl;
    }
    cout << endl;
}

int findIslands(const int matrix[][COLS]) {
    int isole = 0;
    for (int r = 0 ; r < ROWS ; r++) {
        for (int c = 0 ; c < COLS ; c++) {
            if (matrix[r][c] == 1) {
                isole+= checkIfIsland(matrix, r, c);
            }
        }
    }
    return isole;
}

int checkIfIsland(const int matrix[][COLS], int rDiPartenza, int cDiPartenza) {
    int somma = 0;
    for (int r = rDiPartenza-1 ; r <= rDiPartenza+1 ; r++) {
        for (int c = cDiPartenza-1 ; c <= cDiPartenza+1 ; c++) {
            if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
                somma += matrix[r][c];
            }
        }
    }
    return somma == 1 ? 1 : 0;
}`;

export const bracketsControl = `#include <iostream>
#include "stack.h"

using namespace std;

int main() {

    init();

    char buffer[101];
    bool correct = true;

    cout << "expression: " << endl;
    cin >> buffer;

    int idx = 0;
    char currChar = buffer[idx];

    while (currChar != '\0') {

        currChar = buffer[idx];

        if (currChar == '(') {
            push(currChar);
        }
        else if (currChar == ')') {

            int tmp;
            if (top(tmp)) {
                pop();
            }
            else {
                correct = false;
            }
        }
        idx++;
    }

    if (correct && !pop()) {
        cout << "correct" << endl;
    }
    else {
        cout << "not correct" << endl;
    }

    deinit();

    return 0;
}`;

export const bracketsControlStackH = `#ifndef STACK_H
#define STACK_H

struct node {
	int value;
	node* next;
};
typedef node* list;

void init();
bool push(int);
bool top(int &);
bool pop();
void deinit();

#endif`;

export const bracketsControlStackC = `#include <iostream>
#include "stack.h"

using namespace std;

static list stack;

static bool empty () {
	return (stack == NULL);    
}

void init() {
	stack = NULL;
}

bool top (int &n) {
	bool res;
	if (empty()) {
		res = false;
	}
	else {
		n=stack->value;
		res = true;
	}
	return res;
}

bool push (int n) {
	bool res;
	list newNode = new (nothrow) node;
	if (newNode==NULL) {
		res = false;
	}
	else {
		newNode->value = n;
		newNode->next = stack;
		stack = newNode;
		res = true;
	}
	return res;
}

bool pop () {
	bool res;
	if (empty()) {
		res = false;
	}
	else {
		list firstNode = stack;
		stack = stack->next;
		delete firstNode;
		res = true;
	}
	return res;
}

void deinit() {
    int tmp;
	while(top(tmp)) {
		pop();
	}
}`;

export const hanoi = `#include <iostream>

using namespace std;

void hanoi(int n, char start, char end, char support);

int main() {
    int n;
    cout << "Number of disks: ";
    cin >> n;
    hanoi(n, 'A', 'C', 'B');
    return 0;
}

void hanoi(int n, char start, char end, char support) {
    if (n == 1) {
        cout << "Move disk from stake " << start << " to stake " << end << endl;
    } else {
        hanoi(n-1, start, support, end);
        cout << "Move disk from stake " << start << " to stake " << end << endl;
        hanoi(n-1, support, end, start);
    }
}`;

export const permutations = `#include <iostream>
#include <cstring>
#include <cstdlib>

using namespace std;

int gen_k_mer(int k);

int main(int argc, char * argv[]) {
  if (argc != 2) {
    cout << "Accepted format: " << argv[0] << " <positive_number> " << endl;
    exit(1);
  }
  int k = atoi(argv[1]);
  if (k <= 0) {
    cout << "Accepted format: " << argv[0] << " <positive_number> " << endl;
  }
  cout << "Start" << endl;
  int count = gen_k_mer(k);
  cout << "N k-mer generated: " << count << endl;
  return 0;
}

char convert(char c) {
    if (c == 'A') return 'C';
    if (c == 'C') return 'G';
    if (c == 'G') return 'T';
    if (c == 'T') return 'A';
    return ' ';
}

int gen_k_mer(int k) {
  int len_str = 4;
  char s[k+1];
  char s_last[k+1];

  for (int i=0; i<k; i++) {
    s[i] = 'A';
  }
  s[k] = '\0';

  for (int i=0; i<k; i++) {
    s_last[i] = 'T';
  }
  s_last[k] = '\0';

  int counter = 1;
  while (strcmp(s, s_last) != 0) {
    counter ++;
    cout << s << endl;
    for (int i=0; i<k; i++) {
      if (s[i] == 'T') {
      	s[i] = convert(s[i]);
      } else {
        s[i] = convert(s[i]);
        break;
      }
    }
  }

  cout << s << endl;
  return counter;
}`;

export const treeRemoval = `#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

#define MAXVALUE 100
#define MAXSIZE 100

typedef struct tree {
  int data;
  struct tree * left;
  struct tree * right;
} tree;

void insert(tree * & result, const int num) {
  if (result == NULL) {
    result = new tree;
    *result = {num, NULL, NULL};
  } else if (result->data > num) {
    insert(result->left, num);
  } else {
    insert(result->right, num);
  }
}

tree * createTree(const int num) {
  tree * result = NULL;
  for(int i = 0; i < num; i++) {
    insert(result, rand() % MAXVALUE);
  }
  return result;
}

void print_tree(tree * root, int space = 0){
  if (root != NULL) {
    space++;
    print_tree(root->right, space);

    for (int i = 1; i < space; i++) cout<<"  ";
    cout<<root->data<<"\n";
    print_tree(root->left, space);
  }
}

void delete_tree(tree * & root) {
  if (root != NULL) {
    delete_tree(root->left);
    delete_tree(root->right);
    delete root;
    root = NULL;
  }
}

tree * remove_element(tree * root, const int value);

int main() {
  srand(0);
  tree * root = createTree(rand() % MAXSIZE);

  cout << "Initial tree: " << endl;
  print_tree(root);
  cout << endl;
  int key = 84;
  cout << "removing: " << key << endl;
  root = remove_element(root, key);
  key = 77;
  cout << "removing: " << key << endl;
  root = remove_element(root, key);
  key = rand() % MAXVALUE;
  cout << "removing: " << key << endl;
  root = remove_element(root, key);
  key = rand() % MAXVALUE;
  cout << "removing: " << key << endl;
  root = remove_element(root, key);
  key = rand() % MAXVALUE;
  cout << "removing: " << key << endl;
  root = remove_element(root, key);
  cout << "removing: " << key << endl;
  root = remove_element(root, key);
  cout << "Final tree: " << endl;
  print_tree(root);
  cout << endl;
  delete_tree(root);
  
  return 0;
}

int successor(tree * root) {
  root = root->right;
  while (root->left != NULL) root = root->left;
  return root->data;
}

int predecessor(tree * root) {
  root = root->left;
  while (root->right != NULL) root = root->right;
  return root->data;
}

tree * remove_element(tree * root, const int value) {
  if (NULL != root) {
    if (root->data > value) {
      root->left = remove_element(root->left, value);
    } else if (root->data < value) {
      root->right = remove_element(root->right, value);
    } else {
      if (root->left == NULL && root->right == NULL) {
        delete root;
        root = NULL;
      } else if (root->right != NULL) {
        root->data = successor(root);
        root->right = remove_element(root->right, root->data);
      } else { // root->left != NULL
        root->data = predecessor(root);
        root->left = remove_element(root->left, root->data);
      }
    }
  }
  return root;
}`;

export const minMaxTree = `#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

#define MAXVALUE 100
#define MAXSIZE 100

typedef struct tree {
  int value;
  struct tree * left;
  struct tree * right;
} tree;

void insert(tree * & result, const int num) {
  if (result == NULL) {
    result = new tree;
    result->value = num;
    result->left = result->right = NULL;
  } else if (result->value > num) {
    insert(result->left, num);
  } else {
    insert(result->right, num);
  }
}

tree * createTree(const int num) {
  tree * result = NULL;
  for(int i = 0; i < num; i++) {
    insert(result, rand() % MAXVALUE);
  }
  return result;
}

void print_tree(tree * root, int space = 0){
  if (root != NULL) {
    space++;
    print_tree(root->right, space);
    for (int i = 1; i < space; i++) cout << "  ";
    cout << root->value << "\n";
    print_tree(root->left, space);
  }
}

int maxmin_value(tree * root, bool do_max) {
  if (NULL == root) return -1;
  tree * r = root;
  int res;
  while(r != NULL) {
    res = r->value;
    r = do_max ? r->right : r->left;
  }
  return res;
}

int main() {
  srand(0);
  tree * root = createTree(rand() % MAXSIZE);
  cout << "Initial tree: " << endl;
  print_tree(root);
  cout << endl;
  cout << "max: " << maxmin_value(root, true) << endl;
  cout << "min: " << maxmin_value(root, false) << endl;
  return 0;
}`;

export const submat = `#include <iostream>
#include <cstdlib>

using namespace std;

int ** initMatrix(int rows, int columns);
void deinitMatrix(int ** mstrix, int rows);
void printMatrix(int ** mstrix, int rows, int columns, int coordRow, int coordCol, int rowsSubMatrix, int columnsSubMatrix);

int ** initMatrix(int rows, int columns) {
    int ** mstrix = new int*[rows];
    for (int row = 0; row < rows; row++) {
        mstrix[row] = new int[columns];
        for (int column = 0; column < columns; column++) {
            mstrix[row][column] = rand() % 10;
        }
    }
    return mstrix;
}

void deinitMatrix(int ** mstrix, int rows) {
    for (int i = 0; i < rows; i++) {
        delete[] mstrix[i];
    }
    delete [] mstrix;
}

void printMatrix(int ** mstrix, int rows, int columns, int coordRow, int coordCol, int rowsSubMatrix, int columnsSubMatrix) {
    for (int row = coordRow; row < rows && (row-coordRow) < rowsSubMatrix; row++) {
        for (int column = coordCol; column < columns && (column-coordCol) < columnsSubMatrix; column++) {
            cout << mstrix[row][column] << " ";
        }
        cout << endl;
    }
}

int main(int argc, char ** argv) {
    if (argc != 3) {
        cout << "./a.out [N_rows] [N_columns" << endl;
        exit(1);
    }
    int mat_width = atoi(argv[1]);
    int mat_height = atoi(argv[2]);
    int ** mat = initMatrix(mat_width, mat_height);
    cout << "===" << endl;
    printMatrix(mat, mat_height, mat_width, 2, 1, 2, 3);
    cout << "===" << endl;
    printMatrix(mat, mat_height, mat_width, 2, 1, 4, 500);
    cout << "===" << endl;
    deinitMatrix(mat, mat_width);
    return 0;
}`;

export const idNumbersStackH = `#ifndef STACK_H
#define STACK_H

#include <iostream>
using namespace std;

struct node {
	int value;
	node* next;
};
typedef node* list;

void init();
void deinit();
bool push(int);
bool top(int &);
bool pop();
bool empty();

#endif`;

export const idNumbersStackC = `#include "stack.h"

static list stack;

bool empty () {
	return (stack == NULL);    
}

void init() {
	stack = NULL;
}

bool top (int &n) {
	bool res;
	if (empty()) {
		res = false;
	}	else {
		n=stack->value;
		res = true;
	}
	return res;
}

bool push (int n) {
	bool res;
	list newNode = new node;
	if (newNode == NULL) {
		res = false;
	} else {
		newNode->value = n;
		newNode->next = stack;
		stack = newNode;
		res = true;
	}
	return res;
}

bool pop () {
	bool res;
	if (empty()) {
		res = false;
	} else {
		list firstNode = stack;
		stack = stack->next;
		delete firstNode;
		res = true;
	}
	return res;
}
    
void deinit() {
	while (pop()) {
		;
	}
}`;

export const idNumbersMain = `#include <iostream>
#include <string.h>
#include <math.h>
#include "pila.h"

using namespace std;

int decode(char nCoded []);

int main() { 
    int dimMax = 9;
    char nCoded [dimMax];
    cout << "Insert array: ";
    cin >> nCoded;
    int decoded = decode(nCoded);
    cout << "decoded: " << decoded << endl;
}

int decode(char nCoded []) {
    init();

    int decoded = 0;
    int codedLen = strlen(nCoded);
    int e = codedLen;
 
    for (int i = 0; i <= codedLen; i++) {
        push(i + 1);
 
        if (i == codedLen || nCoded[i] == 'I') {
            while (!vuota()) {
                int temp;
                top(temp);
                decoded = decoded + temp * pow(10, e);
                e--;
                pop();
            }
        }
    }
 
    deinit();
    return decoded;
}`;

export const textFileBalancedTree = `#include <iostream>
#include <fstream>

using namespace std;

struct node {
  int value;
  node* left;
  node* right;
};
typedef node* tree;

tree createBalancedTree(int array[], int dim);
void insertBalancedNode(tree & root, int array[], int lowerIdx, int upperIdx);
int readArray(int array[], char * file);
void sortArray(int array[], int dim);
void deinitTree(tree root);

void printTree(tree root, int space=0);

int main(int argc, char* argv[]) {
  if (argc != 2) {
    cout << "Usage: ./a.out <file>" << endl;
    exit(1);
  }

  int array[100];
  int dim = readArray(array, argv[1]);
  cout << "L'array contiene " << dim << " elementi" << endl;

  if (dim > 0) {
    sortArray(array, dim);
    cout << "L'array ordinato è il seguente: ";
    for (int i = 0 ; i < dim ; i++) {
      cout << array[i] << " ";
    }
    cout << endl;
    tree root = createBalancedTree(array, dim);
    cout << "Stampa tree: " << endl;
    printTree(root);
    deinitTree(root);
  }

  return 0;
}

int readArray(int array[], char * file) {
  int dim = 0;
  fstream input;
  input.open(file, ios::in);
  if (input.fail()) {
      cout << "Errore in lettura" << endl;
      dim = -1;
  } else {
      int numero;
      while(input >> numero) {
          array[dim] = numero;
          dim++;
      }
  }

  return dim;
}

void sortArray(int array[], int dim) {
  for (int i = 0; i < dim; i++) {
    for (int j = 0; j < dim; j++) {
      if (array[i] < array[j]) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

tree createBalancedTree(int array[], int dim) {
  tree root = NULL;
  insertBalancedNode(root, array, 0, dim-1);
  return root;
}

void insertBalancedNode(tree& root, int array[], int lowerIdx, int upperIdx) {
  if (lowerIdx <= upperIdx) {
    int middleIdx = (lowerIdx + upperIdx) / 2;
    root = new node {array[middleIdx], NULL, NULL};
    insertBalancedNode(root->left, array, lowerIdx, middleIdx - 1);
    insertBalancedNode(root->right, array, middleIdx + 1, upperIdx);
  }
}

void deinitTree(tree root) {
  if (root != NULL)  {
    deinitTree(root->left);
    deinitTree(root->right);
    delete root;
  }
}

void printTree(tree root, int space){
  if (root != NULL) {
    space ++;

    printTree(root->right, space);

    for (int i = 1; i < space; i++) {
        cout<<"\t";
    }

    cout << root->value << "\n";

    printTree(root->left, space);
  }
}`;

export const calcExpressionH = `#ifndef EXPRESSION_H
#define EXPRESSION_H

using namespace std;

#include <iostream>
#include <cstdlib>
#include <cstring>
#include <cerrno>
#include <ctype.h>

struct node_expression;

typedef node_expression * expression;

struct node_expression {
  entry e;
  expression left;
  expression right;
};

retval read_expression (expression & );
void print_expression(const expression & );
double evaluate_expression(expression &);
expression compose_expression (const expression &,const entry &, const expression &);

#endif`;

export const calcExpressionC = `using namespace std;
#include <iostream>
#include "entry.h"
#include "expression.h"

double evaluate_expression(expression & exp) {
  entry & e = exp->e;
  if (operatorp(e)) {
    double op1,op2;
    expression & left = exp->left;
    expression & right = exp->right;
    op1 = evaluate_expression(left);
    op2 = evaluate_expression(right);
    e.num = apply_operator(left->e,right->e,e);
  }
  return e.num;
}

expression compose_expression(const expression & exp1, const entry & op, const expression & exp2) {
  if (!operatorp(op)) {
    cout << "errore: ";
    print_entry(op);
    cout << "' non e' un operatore!\n";
    return NULL;
  }
  else {
    expression exp;
    exp = new node_expression;
    exp->e=op;
    exp->left=exp1;
    exp->right=exp2;
    return exp;
  }
}

retval read_expression (expression & exp) {
  retval res = OK;
  entry e;
  read_entry(e);
  if (nump(e)) {
    exp = new node_expression;
    exp->e=e;
    exp->left=NULL;
    exp->right=NULL;
  } else if (openp(e)) {
    expression exp1, exp2;
    entry op, rpar;
    read_expression(exp1);
    read_entry(op);
    read_expression(exp2);
    read_entry(rpar);
    exp = new node_expression;
    exp->e=op;
    exp->left=exp1;
    exp->right=exp2;
  } else {
    cout << "error: (' espected instead of ";
    print_entry(e);
    exit(0);
  }
  return res;
}

void print_expression(const expression & exp) {
  if (exp!=NULL) {
    if (nump(exp->e))
      print_entry(exp->e);
    else if (operatorp(exp->e)) {
      cout << "(";
      print_expression(exp->left);
      print_entry(exp->e);
      print_expression(exp->right);
      cout << ")";
    }
  }
}`;

export const calcEntryH = `#ifndef ENTRY_H
#define ENTRY_H

using namespace std;

#include <iostream>
#include <cstdlib>
#include <cstring>
#include <cerrno>
#include <ctype.h>

const int MaxDim = 20;

enum EntryType {OPERATOR,NUM,OPEN,CLOSE};
enum Operator {PLUS, MINUS, TIMES, DIVIDE};

enum retval {FAIL,OK};

struct entry 
{
  EntryType  type;
  Operator op;
  double num;
};


bool operatorp (const entry &);
bool openp (const entry &);
bool closep (const entry &);
bool nump (const entry &);

void print_entry (const entry &);
retval read_entry (entry &);

double apply_operator(const entry & e1, const entry & e2, const entry & op);

#endif`;

export const calcEntryC = `#include <cstdio>
#include "entry.h"

bool operatorp (const entry & e) {
  return (e.type==OPERATOR);
}

bool openp (const entry & e) {
  return (e.type==OPEN);
}

bool closep (const entry & e) {
  return (e.type==CLOSE);
}

bool nump (const entry & e) {
  return (e.type==NUM);
}

static bool isdouble(char * s,double & x) {
  return (sscanf(s,"%lf",&x) > 0);
}

retval read_entry (entry & e) {
  retval res = OK;
  double tmp;
  char buffer[MaxDim];
  
  cin >> buffer;

  //PARENTHESIS
  if (strcmp(buffer,"(")==0) 
    e.type=OPEN;
  else if (strcmp(buffer,")")==0) 
    e.type=CLOSE;
  //OPERATORS
  else if (strcmp(buffer,"+")==0) {
    e.type=OPERATOR;
    e.op=PLUS;
  } else if (strcmp(buffer,"-")==0) {
    e.type=OPERATOR;
    e.op=MINUS;
  } else if (strcmp(buffer,"*")==0) {
    e.type=OPERATOR;
    e.op=TIMES;
  }
  else if (strcmp(buffer,"/")==0) {
    e.type=OPERATOR;
    e.op=DIVIDE;
  }
  //NUMBERS
  else if (isdouble(buffer,tmp)) {
    e.type=NUM;
    e.num=tmp;
  }
  // OTHERS
  else {
    res=FAIL;
  }
  return res;
}

static void print_operator(Operator op) {
  switch (op){
    case PLUS:
      cout << '+';
      break;
    case MINUS:
      cout << '-';
      break;
    case TIMES:
      cout << '*';
      break;
    case DIVIDE:
      cout << '/';
      break;
    default:
      break;
  }
}

void print_entry (const entry & e) {
  switch(e.type) {
  case OPERATOR: 
    print_operator(e.op);
    break;
  case NUM: 
    cout << e.num;
    break;
  case OPEN: 
    cout << "(";
    break;
  case CLOSE: 
    cout << ")";
    break;
  }
}

double apply_operator(const entry & e1, const entry & e2, const entry & op) {
  double res;
  double n1=e1.num;
  double n2=e2.num;
  switch (op.op) {
  case PLUS: res= n1+n2;break;
  case MINUS: res= n1-n2;break;
  case TIMES: res= n1*n2;break;
  case DIVIDE: res= n1/n2;break;
  }
  return res;
}`;

export const calcMain = `using namespace std;
#include <iostream>
#include "entry.h"
#include "expression.h"

void deinit(expression t) {
  if (t->left != NULL) {
    deinit(t->left);
  }
  if (t->right != NULL) {
    deinit(t->right);
  }
  delete t;
}

int main() {

  const int MaxDim = 10;
  int Currdim = 0;
  expression exp_list[MaxDim];

  expression exp1, exp2, exp;
  double value;
  entry op;  
  int index, index1, index2;
  char choice;

  do {
    cout << endl;
    cout << "(l) list all expressions\n";
    cout << "(i) insert new expression\n";
    cout << "(p) print expression\n";
    cout << "(c) compose two expressions\n";
    cout << "(e) evaluate expression\n";
    cout << "(r) remove expression\n";
    cout << "(q) quit\n";
    cout << endl;
    cin >> choice;
    switch(choice) {
      case 'e':
        for (int i=0;i<Currdim;i++) {
          cout << i << ": ";
          print_expression(exp_list[i]);
          cout << endl;
        }
        break;
      case 'i': 
        read_expression( exp_list[Currdim++]);
        cout << endl;
        break;
      case 's': 
        cout << "expression to print: ";
        cin >> index;
        print_expression(exp_list[index]);
        cout << endl;
        break;
      case 'c': 
        cout << "expressions to compose: ";
        cin >> index1 >> index2;
        cout << "operatore?: ";
        read_entry(op);
        exp_list[Currdim++] = compose_expression(exp_list[index1], op, exp_list[index2]);
        cout << endl;
        break;
      case 'v': 
        cout << "expression: ";
        cin >> index;
        cout << "is " << evaluate_expression(exp_list[index]) << endl;
        break;
      case 'r': 
        cout << "expression to remove: ";
        cin >> index;
        cout << endl;
        for(int i = index; i<Currdim; i++)
          exp_list[i]=exp_list[i+1];
        Currdim--;
        cout << endl;
        break;
      case 'f': 
        break;
      default:
        cout << "wrong operation\n";
    }
  } while (choice!='f');

  for (int j = 0; j < Currdim; ++j) {
    deinit(exp_list[j]);
  }
}`;
