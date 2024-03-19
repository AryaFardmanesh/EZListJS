# EZListJS

EZListJS is a lightweight and easy-to-use JavaScript library designed for working with linked list data structures. With EZListJS, you can effortlessly manage and manipulate linked lists in your JavaScript applications.

## License

EZListJS is licensed under the [MIT License](LICENSE).

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
    - Type expected: Number(int).
    - Default value: last position in your list.

### `.remove(index = last)`

This method removes the item at the specified index from the linked list. If no index is provided, the last item in the list is removed.

#### Parameters:

- `index`: (Optional) The index of the item you want to remove from the list.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

### `.isEmpty()`

This method checks if the linked list is empty.

#### Returns:
- `boolean`
    - `true` if the linked list is empty.
    - `false` if the linked list is not empty.

### `.size()`

This method returns the number of items in the linked list.

#### Returns:
- `boolean`
    - The number of items in the linked list.

### `.item(index = last)`

This method returns the item in the specified list in the linked list. If no index is provided, returns the last item in the list.

#### Parameters:

- `index`: The index of the item you want to retrieve from the list.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

#### Returns:

- If find:
    - The item at the specified index in the linked list.
- If not find:
    - undefined

### `.indexOf(item, startIndex = 0, endIndex = last)`

This method returns the index of the first occurrence of the specified item within the specified range.

#### Parameters:

- `item`: The item you want to search for in the list.
    - Type expected: Any.
    - Default value: None.
- `startIndex`: (Optional) The starting index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.
- `endIndex`: (Optional) The ending index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

#### Returns:
- Number(int).
    - The index of the first occurrence of the specified item within the specified range, or `-1` if the item is not found.

### `.lastIndexOf(item, startIndex, endIndex)`

This method returns the index of the last occurrence of the specified item within the specified range.

#### Parameters:

- `item`: The item you want to search for in the list.
    - Type expected: Any.
    - Default value: None.
- `startIndex`: (Optional) The starting index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.
- `endIndex`: (Optional) The ending index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

#### Returns:

- Number(int).
    - The index of the last occurrence of the specified item within the specified range, or `-1` if the item is not found.

### `.include(item, startIndex = 0, endIndex = size)`

This method checks if the specified item is included in the linked list within the specified range.

#### Parameters:

- `item`: The item you want to check for in the list.
    - Type expected: Any.
    - Default value: None.
- `startIndex`: (Optional) The starting index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.
- `endIndex`: (Optional) The ending index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

#### Returns:

- Boolean:
    - `true` if the specified item is found in the linked list within the specified range.
    - `false` if the specified item is not found in the linked list within the specified range.

### `.findAll(item, startIndex = 0, endIndex = last)`

This method returns an array of all occurrences of the specified item within the specified range.

#### Parameters:

- `item`: The item you want to search for in the list.
    - Type expected: Any.
    - Default value: None.
- `startIndex`: (Optional) The starting index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.
- `endIndex`: (Optional) The ending index of the search range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

#### Returns:

- Array:
    - An array containing all occurrences of the specified item within the specified range.

### `.forEach(callback, startIndex = 0, endIndex = last)`

This method executes a provided function once for each item in the linked list within the specified range.

#### Parameters:

- `callback`: A function to execute for each item in the list.
    - Type expected: Any.
    - Default value: None.
- `startIndex`: (Optional) The starting index of the iteration range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.
- `endIndex`: (Optional) The ending index of the iteration range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

### `.toArray(startIndex = 0, endIndex = last)`

This method converts the linked list to an array within the specified range.

#### Parameters:

- `startIndex`: (Optional) The starting index of the conversion range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.
- `endIndex`: (Optional) The ending index of the conversion range.
    - Type expected: Number(int).
    - Default value: index of the last item in the list.

#### Returns:
- Array
    - An array representation of the linked list within the specified range.

Explore the various methods to effectively manage and manipulate linked lists using EZListJS in your JavaScript applications.


## Advanced Topic: Time Complexity Analysis

Understanding the time complexity of each method can help you optimize your code and make informed decisions when working with large datasets in EZListJS.

Below is an analysis of the time complexity for each method in the EZListJS library:

### Time Complexity `.add()`:
- Add in empty: O(1)
- Add in first: O(1)
- Add in middle: O(n)
- Add in last: O(1)

### Time Complexity `.remove()`:
- Remove in empty: O(1)
- Remove from first: O(1)
- Remove from middle: O(n)
- Remove from last: O(n)

### Time Complexity `.isEmpty()`:
- O(1)

### Time Complexity `.size()`:
- O(1)

### Time Complexity `.item()`:
- O(n)

### Time Complexity `.indexOf()`:
- O(n)

### Time Complexity `.lastIndexOf()`:
- O(n)

### Time Complexity `.include()`:
- O(n)

### Time Complexity `.findAll()`:
- O(n)

### Time Complexity `.forEach()`:
- O(n)

### Time Complexity `.toArray()`:
- O(n)
