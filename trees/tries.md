## NOTES

- trie is dervied from retrieval
- efficient in handling strings
- is always a set of linked nodes with an empty root node
- each node represents a unique alphabet
- each node can point to null or to children nodes
- the depth of the trie depends on the longest word that it stores
- tries to provide the same path for words that share a common prefix
- the size of the trie depends on the number of alphabets (aka child nodes) and the number of child nodes in a trie depends on the total number of possible values
- require a lot of memory storage

## USE CASES

- word searches
- spell checking
- auto-suggestions

## BIG O

- retrieval/insertion time in the **worst case** is better than hash maps or binary search trees
