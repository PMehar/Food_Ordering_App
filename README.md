Namaste React 🚀
 
 
# Parcel
- Dev Build
- Local Server
- HMR - Hot module replacement
- File Watcher Algorithm - written in c++
- Caching - faster builds
- Image optimization
- Minification 
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Dignostics 
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different build for dev and prod bundles

# Laying the foundation 
- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind The scenes of JSX
- Babel and Parcel role in JSX
- Functional Component (Component Composion)

# Talk is cheap , Show me the code
Header
 - logo
 - Nav items
Body
 -search
 -RestaurantContainer
    -RestaurantCard
       . img
       . Name of Restaurant , star rating ,cuisine , delivery time
Footer
 -CopyRight
 -Links
 -Address
 -Contact

 Just because we write reusable component restaurantCards We were able to pass dynamic Props Inside that  (we created a reusable cards)

# Lets get hooked
Two types of Export/Import
  - default export/import 
    =>export default Component;
    =>import Component from "path";
  - Named export/import
    =>export const Component =()=>{...};
    =>import {Component} from "path";

- how to handle Onclick event

# React Hooks (normal JS utility functions)
  -useState() -superPowerful state variable in react
      maintain the state of your component its scope is inside that component
      whenever state variable updates react will re-render the components
  -useEffect()


# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Create slice (cartSlice)
 - Despatch(action)
 - Selector

# Types of testing (developer)
 - unit Testing
 - Integration Testing
 - End to End testing (e2e testing)

# Setting up testing in our App
 - Installed React Testing Library
 - Installed jest
 - Install Babel dependencies
 - Configure babel
 - Configure parcel config file to disable default transpilations 
 - Configure jest [npx jest --init]
 - Install jsdom library
      [Headers.test.js ,
      Headers.test.ts,
      Headers.spec.js,
      Headers.spec.ts   .... allthese files will considered as testing files]

- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel config (helping our testing library to convert the jsx code to html so that it can be read properly)

- Install @testing-library/jest-dom