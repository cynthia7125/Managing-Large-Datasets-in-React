# React Commits: Applying Rendered Changes
This means:
1. Existing components are updated.
2. Newly added components are mounted.
3. Removed components are mounted.

# Implementing Infinite Scroll
1. Add dummy component to the bottom  of the table.
2. Add observer to respond when user scrolls to the bottom of the table.
3. Load next page once observer responds.

# Implementing Windowing
1. Height of overall list is pre-calculated.
2. Each list element is assigned an absolute position within the list.
3. Elements can be added or removed from the DOM as needed without effecting other elements.

- [React windowing liblary](https://github.com/bvaughn/react-window)
```
npm install --save react-window react-vertualized-auto-sizer
```
## Windowing Limitations
1. Complex Implementation.
2. Height and positioning constraints. (needs to be calculated before hand)
3. Loss of HTML sematics.

- Infinite scroll is well suited for sequentially loaded content
- Use windowing when you want to display the entirety of data without any performance impact

# React Keys
1. Identification - Used to identify elements in collections of React components.
2. Tracking changes - Helps React keep track of updated elements.

# When Does React Re-Render Components
1. State Changes - State or prop changes in a component or its parent.
2. Key Changes = A component in a collection is assigned another key.
3. Lifecycle Methods - Certain lifecycle methods can force the component to update.(could lead to component freezing since they do not get updated)