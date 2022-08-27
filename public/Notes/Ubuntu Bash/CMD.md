### `ps`: list all process in system 
Default, ps only list processes that are part of what is called `current session` (programs launched from the terminal, or terminal
window, you’re currently in).

ps `-A` lists all processes on the computer. Such as `daemons programs`

### `cut`: selected parts of lines, to standard output
```bash
echo abcd | cut -c1,3,4 # select only these characters
$ acd

echo 'aaa,bbb' | cut -f2 -d ',' # select only these fields
$ bbb
```

### 'sed': Find and replace
```bash
echo 'aaab' | sed "s/a/b/"  # replace first a with b
echo 'aaab' | sed "s/a/b/g" # replace all a with b

sed -n 12,18p file.txt # Show only lines 12-18 of file.txt
```

### `Grep`: Search for PATTERNS in each FILE.
```bash
grep "REGEX" filename
```

### `sort`
```
-n: numeric-sort
-r: reverse
-t: field-separator
-k: sort via a key(field)
```

### `wc`
```bash
-m : Print the number of characters
-w : Print the number of words
-l : Print the number of lines
```