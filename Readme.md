1.Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById returns a single element with a specific ID.

getElementsByClassName returns a live HTMLCollection of elements with the given class.

querySelector returns the first element that matches a CSS selector.

querySelectorAll returns a static NodeList of all elements matching a CSS selector.

2.How do you create and insert a new element into the DOM?
By creating the element using document.createElement() and inserting it into the DOM using methods like appendChild(), insertBefore(), or append().

3.What is Event Bubbling and how does it work?
Event bubbling is the process where an event starts from the target element and propagates upward through its parent elements until it reaches the root of the DOM.

4.What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements. It is useful because it improves performance and allows handling of dynamically added elements.

5.Difference between preventDefault() and stopPropagation() methods

preventDefault() stops the default action of an element from occurring.

stopPropagation() prevents the event from propagating (bubbling or capturing) to parent elements.