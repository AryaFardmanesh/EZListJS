# EZListJS

EZListJS is a lightweight and easy-to-use JavaScript library designed for working with linked list data structures. With EZListJS, you can effortlessly manage and manipulate linked lists in your JavaScript applications.

## License

EZListJS is licensed under the [MIT License](LICENSE.md).

## Features

- **Simplicity**: EZListJS provides a straightforward interface for creating, modifying, and traversing linked lists.
- **Lightweight**: With minimal dependencies and efficient implementation, EZListJS offers high performance while keeping your project's footprint small.
- **Flexibility**: EZListJS is highly adaptable and can be easily integrated into various JavaScript projects, from small scripts to large-scale applications.

Whether you're a beginner learning about data structures or an experienced developer needing a reliable tool for managing linked lists, EZListJS is here to simplify your workflow and empower your projects.

## Installation

To start using EZListJS in your project, simply install it via npm:

```bash
npm install ezlistjs
```

```js
// Import the LinkedList class from EZListJS
const { LinkedList } = require('ezlistjs');

// Create a new linked list
const list = new LinkedList();
```

## Method Documentation

EZListJS provides a variety of methods for creating, modifying, and interacting with linked lists. Below is an overview of the available methods along with their descriptions and usage examples:

### `.add(item, index = last)`

This method adds an item to the linked list at the specified index. If no index is provided, the item is added to the last position in the list.

#### Parameters:

- `item`: The item you want to add to the list.
- `index`: (Optional) The position where you want to add the item in your list.
    - Default value: last position in your list.

### `.remove(index = last)`

This method removes the item at the specified index from the linked list. If no index is provided, the last item in the list is removed.

#### Parameters:

- `index`: (Optional) The index of the item you want to remove from the list.
    - Default value: index of the last item in the list.

### `.isEmpty()`

This method checks if the linked list is empty.

#### Returns:

- `true` if the linked list is empty.
- `false` if the linked list is not empty.

### `.size()`

This method returns the number of items in the linked list.

#### Returns:

- The number of items in the linked list.

### `.item(index)`

This method returns the item at the specified index in the linked list.

#### Parameters:

- `index`: The index of the item you want to retrieve from the list.

#### Returns:

- The item at the specified index in the linked list.

### `.indexOf(item, [startIndex], [endIndex])`

This method returns the index of the first occurrence of the specified item within the specified range.

#### Parameters:

- `item`: The item you want to search for in the list.
- `startIndex`: (Optional) The starting index of the search range.
- `endIndex`: (Optional) The ending index of the search range.

#### Returns:

- The index of the first occurrence of the specified item within the specified range, or `-1` if the item is not found.

### `.lastIndexOf(item, [startIndex], [endIndex])`

This method returns the index of the last occurrence of the specified item within the specified range.

#### Parameters:

- `item`: The item you want to search for in the list.
- `startIndex`: (Optional) The starting index of the search range.
- `endIndex`: (Optional) The ending index of the search range.

#### Returns:

- The index of the last occurrence of the specified item within the specified range, or `-1` if the item is not found.

### `.include(item, [startIndex], [endIndex])`

This method checks if the specified item is included in the linked list within the specified range.

#### Parameters:

- `item`: The item you want to check for in the list.
- `startIndex`: (Optional) The starting index of the search range.
- `endIndex`: (Optional) The ending index of the search range.

#### Returns:

- `true` if the specified item is found in the linked list within the specified range.
- `false` if the specified item is not found in the linked list within the specified range.

### `.findAll(item, [startIndex], [endIndex])`

This method returns an array of all occurrences of the specified item within the specified range.

#### Parameters:

- `item`: The item you want to search for in the list.
- `startIndex`: (Optional) The starting index of the search range.
- `endIndex`: (Optional) The ending index of the search range.

#### Returns:

- An array containing all occurrences of the specified item within the specified range.

### `.forEach(callback, [startIndex], [endIndex])`

This method executes a provided function once for each item in the linked list within the specified range.

#### Parameters:

- `callback`: A function to execute for each item in the list.
- `startIndex`: (Optional) The starting index of the iteration range.
- `endIndex`: (Optional) The ending index of the iteration range.

### `.toArray([startIndex], [endIndex])`

This method converts the linked list to an array within the specified range.

#### Parameters:

- `startIndex`: (Optional) The starting index of the conversion range.
- `endIndex`: (Optional) The ending index of the conversion range.

#### Returns:

- An array representation of the linked list within the specified range.

Explore the various methods to effectively manage and manipulate linked lists using EZListJS in your JavaScript applications.


## Advanced Topic: Time Complexity Analysis

Below is an analysis of the time complexity for each method in the EZListJS library:

### `.add(item, index = last)`

This method adds an item to the linked list at the specified index.

#### Time Complexity:
- Add in first: O(1)
- Add in middle: O(n)
- Add in last: O(1)

### `.remove(index = last)`

This method removes the item at the specified index from the linked list.

#### Time Complexity:
- Remove from first: O(1)
- Remove from middle: O(n)
- Remove from last: O(n)

### `.isEmpty()`

This method checks if the linked list is empty.

#### Time Complexity:
- O(1)

### `.size()`

This method returns the number of items in the linked list.

#### Time Complexity:
- O(1)

### `.item(index)`

This method returns the item at the specified index in the linked list.

#### Time Complexity:
- Accessing by index: O(n)

### `.indexOf(item [, startIndex [, endIndex]])`

This method returns the index of the first occurrence of the specified item within the specified range.

#### Time Complexity:
- Searching: O(n)

### `.lastIndexOf(item [, startIndex [, endIndex]])`

This method returns the index of the last occurrence of the specified item within the specified range.

#### Time Complexity:
- Searching: O(n)

### `.include(item [, startIndex [, endIndex]])`

This method checks if the specified item is included in the linked list within the specified range.

#### Time Complexity:
- Searching: O(n)

### `.findAll(item [, startIndex [, endIndex]])`

This method returns an array of all occurrences of the specified item within the specified range.

#### Time Complexity:
- Searching: O(n)

### `.forEach(callback [, startIndex [, endIndex]])`

This method executes a provided function once for each item in the linked list within the specified range.

#### Time Complexity:
- O(n)

### `.toArray([startIndex [, endIndex]])`

This method converts the linked list to an array within the specified range.

#### Time Complexity:
- O(n)

Understanding the time complexity of each method can help you optimize your code and make informed decisions when working with large datasets in EZListJS.
