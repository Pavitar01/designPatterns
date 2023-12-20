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

```jsx
import { useState } from "react";

// The parent component contains the logic and follows the container-presentation pattern
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

#### 3. Higher-Order Component (HOC) Pattern

Delve into the Higher-Order Component pattern, a reusable component logic pattern for enhancing component behavior and reusing functionality across different components.

#### 4. Context Provider Pattern

Explore the Context Provider pattern, a part of the React Context API, for managing and sharing global state across components efficiently.

#### 5. Hooks Patterns

Explore various patterns when using React Hooks for managing state and side effects in functional components, enabling a more concise and expressive component logic.

### Usage

To make the most of this repository, clone or download the code and explore the examples and explanations provided for each design pattern. Feel free to adapt these patterns to suit your specific project requirements.

### Contributing

Contributions are welcome! If you have insights, additional patterns, or improvements to existing content, please open an issue or submit a pull request. Check our [contribution guidelines](CONTRIBUTING.md) for more details.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
