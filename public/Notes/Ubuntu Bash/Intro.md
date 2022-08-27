# Unix
Unix systems philosophy:
* use of plain text for storing data
* hierarchical file system
* treating devices and certain types of inter-process communication (IPC) as files
* use software tools, small programs strung together through a command terminal
  * Small programs can assemble in any way and end up to solve complex tasks

# Operating system components

* A kernel - the `master control` program, which starts and stops processes, and  handles low-level interaction with hardware, etc.
* Applications - many modular tools and `programs`
  * Each `program` run in its own process

### Programs
Nearly every thing we use in `Unix` like system are external programs

The communication between programs and ens-user, mostly though:
* Get arguments on the command line
* Receive input from standard input
* Send output to standard output or standard error for error message

> Unix treats almost everything (programs, hardware devices, kernel information, directories) as a type of file.

# Open source
Originally open source defined as any software is free to use, current days open source more refer to an Intellectual Property(art works, music, software) that  gives you free access to the source code for the software, and allows you to `change` it, and `redistribute` your changes.

Advatanges use open sorece:
* flexibility
* cost
* transparency

Some people also assert that open source software:
*  higher quality
*  better security
*  more stable

# Unix Files and filesystems - Everything is a file
On Linux, the file information is visible by looking at the content of particular files. These are virtual files, that just used to present a `view` of some aspect of the operating system.

> Example: `ls /proc`: The /proc directory holds details of all the programs(`processes`) that are currently running.

A processes in a system could be running, or they could be:
* waiting for data input
* sleeping, because the process is waiting for an event
* stopped(`suspended`) usually because the user deliberately stopped the process.

# Pipelines
Piping is a process that allow a multiple program run smoothly without specify intermediates.

Example:
1. A file contain student student information 
2. We want student names and marks
3. sort the result in descending order
4. then take just the top five students
5. At last save as PDF for printing

Solution:
1. extraction of names and marks, and store the result in a `file`
2. sort that file, and put the sorted result in a `second file`
3. run a command which just gives us the first five students, and `save to third file`
4. then convert third file to PDF.

This Solution requie, 4 steps and 3 un-needed files, a bit cumbersome

A simpiler solutoin is pip those steps that each steps out put as input to others.

> so:  cut -f 1,4 marks.txt | sort -n --key 2 | head -n 5 | pandoc -o top5.pdf

# Version control
Version control system lets you track how a set of files change over time, and lets you `roll back` to previous
points in the history.

Things can do in Version control system:
* roll back
* delete “branches” of history 
* merge branches of history

Use software version control systems as we can check:
* when a file was changed
* who changed it
* why they changed it - comments
* how the change relates to other changes

# Git & GitHub
Git is one of the most commonly used Version control system, that is public available to everyone.

terminology:
* a repository - set of files you wish to track
* commit - a state of the files at a particular point in their `history`
* cloning - make a copy of a repository
### GitHub
GitHub is a web-based hosting service for git repositories. 
> Note: Git is not GitHub, `git` is an open source program 

# Bash
### variables
Set variables
```bash
$ hello="Hello world"
$ echo $hello
Hello world
$
```

Unset variables
```Bash
$ unset hello
$ echo $hello

$
```

Environment variables
```bash
$ echo $USER
$ echo $BASH_VERSION
4.3.48(1)-release
```
Every running process – not just bash programs – has a set of environment variables.

A few environment variables defined by Linux:
* HOME – the path to your home directory
* PATH – a colon-separated list of directories which will be searched for executables
* PWD – the current working directory
* USER – your username

> External command inherits s its environment from bash but not normal variables

But we can make a normal variable an environment variable:
```Bash
$ hello="Hello world"
$ export hello
```

turn it back into a normal variable again
```Bash
$ export -n useful_url
```

Use `set` to see all variable
```bash
$set
BASH=/bin/bash
BASHOPTS=checkwinsize:cmdhist:complete_fullquote:expand_aliases
BASH_ALIASES=()
...
```

> Note: bash treat variables as containing strings, to perfrom arithmetic operation we need `$((operation))`
```bash
$ myvar="3"
$ echo $((myvar + 4))
7
```

### Defining commands
```bash
$ alias cd-home="cd ~/home"
$ cd_tmp () { cd ~/home; }
$ echo "cd ~/home" > cd_tmp
```

### Expansion
```bash 
$ echo ${hello}andotherstuff
Hello worldandotherstuff
```

## Wildcards
The asterisk (`*`) represents an arbitrary string of characters;

`?` matches a single letter in a filename

```bash
$ ls
file1 file10 file2 file3
$ ls file?
file1 file2 file3
```

```bash
$ ls file[23]
file2 file3
```
# regular expressions
Regular expressions are a way of specifying patterns in text.
 
In bash we use grep to searching patterns in text.

grep options
* `-i` or `--ignore-case`: do a case-insensitive search
* -v or --invert-match: print all lines that don’t match the regular expression
* -l or --files-with-matches: list all files with lines that match the regular expression, but not their contents.

* `^` - at the start of the line
* `$` means at the end of the line
* `.` one  or more other character
* `*` zero or more of the previous item
* `[abc]` Square brackets match a set or range of characters- in the case a b c
* `|` match one thing OR another
* `?` match zero or one times
* `+` match one or more times
* `{n}` (where n is a number) match exactly n times
* `{n,}` match n or more times
* `{,n}` match at most n times
* `{n,m}` match from n to m times


`sed` - find and replace
```bash
# search files in /bin start with c  and replace c with d
ls /bin | grep '^c' | sed 's|^c|d|'
```

```bash
# search files in /bin start with c  and replace c with d only 4th line
ls /bin | grep '^c' | sed '4s|^c|d|'
```


### function
```bash
print_the_date () {
    echo "the date is:"; date; 
}

greet_a_person () {
    echo "Hello, $1."
    date
}
# $1 is the paramater
```

# Conditionals in Bash
```bash
if conditional ; then
  statement 1;
  statement 2;
fi

while conditional ; do
  statement 1;
  statement 2;
done
```
# Exit codes
In Unix-like systems, an exit code of 0 means `success`, and anything else means `failure`.

Bash stores the exit code of the most recently executed command in a special variable called `$?`

When defining a function, you can use the `return` statement to specify the exit value of your function.
```bash
always_fails () {
  return 1;
}
```

> Note: If you don’t specify a return value, the exit value of the function will be that of the last command it executes.

```Bash
# same as return 1
always_fails () {
  false;
}
```

Other exit code
```Bash
# declare have an exit code.
$ declare myvar=0
$ echo $?
0

# arithmetic expression inside double brackets
$ (( 1 > 10 ))
$ echo $?
1

# Square brackets
[ "1" -eq 1 ]
$ echo $?
0
```

# Markdown
Markdown specifies a way of writing text files so that you can indicate whether text is intended to be bold, italic, a heading, a link to a webpage, and so on.

When writing a document in Markdown format, you use special syntax to indicate how words and phrases should look when formatted.

* *always* - italic
* **always** - bold
* # always - heading h1

`*, #`  special syntax is called markup, and Markdown is called a markup language

# make and Makefiles
The make tool is used for building things on Unix-like systems, using `recipes` contained in Makefiles.

Makefile contain what are called `rules` for building things; their syntax is
```makefile
output: ingredient1 ingredient2 ...
  command1
  command2
  command3
  ...
```

The rule specifies:
* something we want to make (the output);
* what ingredients we need to make it; and
* what commands we need to run, to turn those ingredients into the output.

We use make file as it tracks whether any of the dependencies have changed and are newer than the the output So:
1. we don’t re-build things if we don’t have to – this can save a great deal of time
2. we do re-build things when their dependencies have changed

## Generic recipes
make lets us write generic recipes, which use the following `special variable`:
* `$@` – the current target file
* `$^` – all dependencies listed for the current target
* `$<` – the first (left-most) dependencies for the current target





















