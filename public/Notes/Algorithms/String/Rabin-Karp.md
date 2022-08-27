# Rabin-Karp Algorithm
Rabin-Karp is an string search algorithm by replace the inner `for loop` with a **`single comparsion`**.

> Example: replace substring with hash `hash`

```python
def rabin_karp(text: str, pattern: str) -> None:
    indexs = []
    M = len(pattern)
    N = len(text)
    h = 1
    hash_p = 0
    hash_z = 0
    power = 1
    
    for i in range(M):
        hash_p = hash_p * 10 + ord(pattern[i])
    
    for i in range(M):
        hash_z = hash_z * 10 + ord(text[i])
        power = power * 10
    power = power/10

    for i in range(0, N-M):
        if (hash_z == hash_p):
            indexs.append(i)
        hash_z = (hash_z-ord(text[i])*power)*10 + ord(text[i+M])
    return indexs

rabin_karp("abcaaccbbcc", "cc")
```

```python
def rabin_karp(text: str, pattern: str, q:int=13) -> None:
    indexs = []
    M = len(pattern)
    N = len(text)
    hash_p = 0
    hash_z = 0
    power = 1
    
    for i in range(M):
        hash_p = (hash_p*d + ord(pattern[i]))%q
        hash_z = (hash_z*d + ord(text[i]))%q
    for i in range(M-1):
        power = (power*d)%q

    for i in range(0, N-M):
        if (hash_z == hash_p):
            indexs.append(i)
        hash_z = (d*(hash_z-ord(text[i])*power) + ord(text[i+M]))% q

    if (hash_z == hash_p):
            indexs.append(i+1)
```

# Hash Caculation with string
```
text = abc
q = 13 # a prime number q such that dq fits into one word 
hash(abc) = (a*q^2 + a*q^1 + a*q^0) % 
```

例如：Hash("abcde") =( a * 31^4 + b*31^3 + c*31^2 + d*31^1 + e*31^0)%10^6

加法：abc+d

x=Hash("abc")

Hash("abcd")=x*31+d

减法：abcd-a

x = Hash("abcd")

Hash("bcd")=x-a*31^3

31这个数字是静置转换中常用的基数，可认为是经验知识。
需要取模，防止超出int范围
