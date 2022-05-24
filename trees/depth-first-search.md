## NOTES

- good for wide trees, fewer nodes to keep track of in a queue
- time complexity is the same in BFS and DFS, visiting every node once
- There are three traversal functions used with BSTs: inorder, preorder, and postorder. An
  inorder traversal visits all of the nodes of a BST in ascending order of the node key
  values. A preorder traversal visits the root node first, followed by the nodes in the sub‐
  trees under the left child of the root node, followed by the nodes in the subtrees under
  the right child of the root node. A postorder traversal visits all of the child nodes of the
  left subtree up to the root node, and then visits all of the child nodes of the right subtree
  up to the root node.

## VARIANT USE CASES

- IN ORDER on a binary search tree, returns sorted data
- PRE ORDER can be used to export a tree structure so it can be easily reconstructed or copied
