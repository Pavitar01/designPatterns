## React.js Design Patterns

![React Design Patterns](https://res.cloudinary.com/practicaldev/image/fetch/s--EMXGXPys--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m19kq9ziypewhqufozr5.jpg)

### Overview

Welcome to the React.js Design Patterns repository! This repository is a guide to essential design patterns in React.js, providing insights into structuring and organizing React applications for better scalability and maintainability.

### Table of Contents

1. [Introduction](#introduction)
2. [Why Design Patterns in React?](#why-design-patterns-in-react)
3. [Available Design Patterns](#available-design-patterns)
   - [1. Container Presentation Pattern](#1-container-presentation-pattern)
   - [2. Render Props Pattern](#2-render-props-pattern)
   - [3. Higher-Order Component (HOC) Pattern](#3-higher-order-component-hoc-pattern)
   - [4. Context Provider Pattern](#4-context-provider-pattern)
   - [5. Hooks Patterns](#5-hooks-patterns)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

### Introduction

React.js has gained immense popularity for building user interfaces. To create scalable and maintainable applications, it's crucial to employ effective design patterns. This repository explores various design patterns in React.js, focusing on key patterns for efficient application development.

### Why Design Patterns in React?

Design patterns offer proven solutions to common problems in software development. In React.js, design patterns help streamline code, enhance readability, and ensure a consistent structure across projects. By understanding and applying these patterns, developers can build robust and maintainable React applications.

### Available Design Patterns

#### 1. Container Presentation Pattern

Discover the Container Presentation pattern, emphasizing the separation of concerns between presentational and container components for a cleaner and more maintainable codebase.

## simple language: The parent component contain any of the logic part is meant to be container-presentation pattern

```jsx
import { useState } from "react";

const ContainerPresentation = () => {
  const [string, setString] = useState("hello");

  const newString = () => {
    if (string === "hello") setString("hi");
    else if (string === "hi") {
      setString("how r u");
    } else {
      setString("hello");
    }
  };

  return (
    <div>
      <button onClick={newString}>Change String</button>
      <ChangeString string={string} />
    </div>
  );
};

// The presentational component renders the UI based on the props it receives
const ChangeString = ({ string }: { string: string }) => {
  return <p>{string}</p>;
};

export default ContainerPresentation;
```

#### 2. Render Props Pattern

Understand the Render Props pattern as a technique for component composition, allowing the sharing of code between components by passing a function as a prop.

```jsx
import { ReactNode, useState } from "react";

// The props which render any of the HTML element and we can pass in children from its parent component
// This part is meant to be render-props pattern

const RenderProps = () => {
  const [string, setString] = useState("hello");

  const newString = () => {
    if (string === "hello") setString("hi");
    else if (string === "hi") {
      setString("how r u");
    } else {
      setString("hello");
    }
  };

  return (
    <div>
      <button onClick={newString}>Change String</button>
      <ChangeString string={string} />
      <Para>This is Children Props ['render props pattern']</Para>
    </div>
  );
};

const ChangeString = ({ string }: { string: string }) => {
  return <p>{string}</p>;
};

const Para = ({ children }: { children: ReactNode }) => {
  return <p>{children}</p>;
};

export default RenderProps;
```

#### 3. Higher-Order Component (HOC) Pattern

Delve into the Higher-Order Component pattern, a reusable component logic pattern for enhancing component behavior and reusing functionality across different components.

```jsx
/* eslint-disable @typescript-eslint/no-explicit-any */
// High Order Component
// High order function: The function which takes a function as input
// High order component: The component which takes a component as input, can make changes and return the modified Component

import React from "react";

const NormalComponent = ({ string }: { string?: string }) => {
  return <h1>{string}</h1>;
};

const Main = () => {
  return (
    <>
      <NormalComponent string={"normal component"} />
      <NewNormalComponent />
    </>
  );
};
// Naming convention: start with "with" + [componentName]
// Example: withAlert, but you can use any naming convention
const withAlert = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    return (
      <div>
        <p>This is the New Modified Normal Component</p>
        <WrappedComponent {...props} string="Modified Normal Component" />
      </div>
    );
  };
};

const NewNormalComponent = withAlert(NormalComponent);

export default Main;
```

#### 4. Context Provider Pattern

Explore the Context Provider pattern, a way to manage and share global state across components efficiently.

```jsx
import { createContext, useContext } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ContextProvider = () => {
    return (
        <main>
            <Title />
        </main>
    );
};

// Reducing the props drilling
const treeTypeContext = createContext<string[] | any>([]);

const Title = () => {
    const treeArray = ["timber", "palm", "pine", "oak"];
    return (
        <>
            <h1>Save Trees</h1>
            <treeTypeContext.Provider value={treeArray}>
                <Heading />
            </treeTypeContext.Provider>
        </>
    );
};

const Heading = () => {
    return (
        <>
            <h2>Why Trees are important?</h2>
            <ul>
                <SubHeading />
            </ul>
        </>
    );
};

const SubHeading = () => {
    return (
        <>
            <h3>Trees are important for:</h3>
            <SubSubHeading />
        </>
    );
};

const SubSubHeading = () => {
    const context = useContext(treeTypeContext);
    return (
        <ul>
            <li>Food </li>
            <li>Clean Air </li>
            <h5>Types of trees:</h5>{context.map((i: string) => <p>{i}</p>)}
        </ul>
    );
};

export default ContextProvider;
```

#### 5. Hooks Patterns
Learn about the Hooks pattern, a powerful feature in React for handling state and side effects in functional components.

In hooks pattern we create our own custom hooks to get the states or data
Learn how to create a custom hook, like 'useNetwork', for handling data fetching and managing state in functional components.

```jsx
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

const useNetwork = () => {
  const [products, setProducts] = useState < any > [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return { loading, products };
};

export default useNetwork;

```

lets create one 'hook-pattern' file to get the loading state and products array 
```jsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import useNetwork from './useNetwork';

const Hooks = () => {
  const { products, loading } = useNetwork();
  return (
    <>
      {loading ? <p>loading ...</p> : <div>
        {products.map((i: any, index: number) => <li key={index}>{i.title}</li>)}
      </div>}
    </>
  );
};

export default Hooks;
```

### Usage

To make the most of this repository, clone or download the code and explore the examples and explanations provided for each design pattern. Feel free to adapt these patterns to suit your specific project requirements.

### Contributing

Contributions are welcome! If you have insights, additional patterns, or improvements to existing content, please open an issue or submit a pull request. Check our [contribution guidelines](CONTRIBUTING.md) for more details.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
