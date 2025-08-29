1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

document.getElementById(id)

    - Picks one element based to its id.
    - Returns one element or null if none found.
    - I think, fastest, since each id is unique.

document.getElementsByClassName(className)

    - Selects multiple elements by class.
    - Returns a live HTMLCollection (which updates automatically as the DOM changes).
    - Accessing individual elements requires a loop.

document.querySelector(selector)

    - Uses CSS selector syntax to select the first matching element.
    - Can choose by id, class, tag etc.
    - Returns one element or null.

document.querySelectorAll(selector)

    - Uses a CSS selector to pick all matched elements.
    - Returns a static NodeList that does not automatically update if the DOM changes.

2.  How do you create and insert a new element into the DOM?

    - Create element → document. createElement("tag") Set content: element.content = "Hello"; 
    - Insert into DOM using parent.appendChild(element)

3.  What is Event Bubbling and how does it work?

    When an event is triggered on a child element, it initially executes
    on that element, then "bubbles up" to its parent, then the parent's
    parent, and finally to the document. It is the default behavior in
    JavaScript.

4.  What is Event Delegation in JavaScript? Why is it useful?

    - Instead of adding event listeners to several child components, add a single listener to the parent and handle events by verifying
    - the target (event.target). Uses event bubbling to work.

5.  What is the difference between preventDefault() and
    stopPropagation() methods?

    event.preventDefault()

        - Stops the element's default action.
        - For example, prohibit form submission or link navigation.

    event.stopPropagation()

        - This prevents the event from bubbling up to parent items.
        - Does not change the default behavior.
