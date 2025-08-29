# JavaScript DOM & Events

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Whenever we want to get elements through HTML and use them in JavaScript, we have to call elements from HTML. One of the ways is `getElementById`, where we insert an ID into an HTML tag and then call that element using `getElementById`. Since IDs are unique, it is used to call a single element. On the other hand, `getElementsByClassName` works with classes instead of IDs. Since multiple elements can have the same class, this method can target many elements at once. Meanwhile, `querySelector` allows us to select an element using CSS-style selectors and always returns the first matched element. Its counterpart, `querySelectorAll`, returns all elements that match the selector, making it useful when we need to apply changes to multiple elements at once.

---

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, we use `document.createElement()` to generate the element in JavaScript. After creating it, we select a parent element and use methods like `.appendChild()` to place the new element inside the chosen parent. For example, if we create a new `<div>`, we can append it to a container element so that it appears in the page structure.

---

### 3. What is Event Bubbling and how does it work?

Event bubbling is a mechanism in JavaScript where an event starts from the innermost target element and then propagates upward to its ancestors. For example, if a click event happens on a child element, the event first triggers on that child and then moves to the parent, grandparent, and so on until it reaches the top of the DOM tree. If we want to stop this process at a certain point, we can use the `event.stopPropagation()` method.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique that takes advantage of event bubbling. Instead of attaching event listeners to many child elements, we attach a single listener to a parent element and handle events as they bubble up from the children. This is especially useful when dealing with large numbers of elements or dynamically created elements because it reduces memory usage and simplifies code management. For instance, attaching one event listener to a parent `<ul>` allows us to handle clicks on all its `<li>` children without individually assigning listeners.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

The `preventDefault()` method stops the browser’s default behavior for an element. For example, when used on a form submission button, it prevents the form from reloading the page, or when used on a link, it prevents navigation. On the other hand, `stopPropagation()` is used to stop the event from bubbling up the DOM hierarchy. In other words, `preventDefault()` prevents the default action of the event, while `stopPropagation()` prevents the event from being passed on to ancestor elements.