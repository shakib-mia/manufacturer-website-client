import React from "react";

const Blogs = () => {
  return (
    <div className="mt-20 container mx-auto">
      <section>
        <h1 className="text-2xl">
          1. How will you improve the performance of a React Application
        </h1>
        <p>
          I can improve react app performance by
          <br /> 1. keeping components state local where necessary
          <br /> 2. avoiding useless renders.
          <br /> 3. adding lazy loading image
        </p>
        <h1 className="text-2xl">
          2. What are the different ways to manage a state in a React
          application?
        </h1>
        <p>Ways to manage a state in a React application:</p>
        1. using built in{" "}
        <code className="text-red-500 bg-red-200 p-1 rounded">
          setState
        </code>{" "}
        method 2. using Hooks. As I used in this project
      </section>

      <h1 className="text-2xl">3. How does prototypical inheritance work?</h1>
      <p>
        prototypical inheritance is a method by which an object can inherit the
        properties and methods of other object.{" "}
      </p>

      <h1 className="text-2xl">
        4. Why you do not set the state directly in React?
      </h1>
      <p>
        When we use react hooks we can change the state value. But when we will
        set the state directly, we cannot change the value{" "}
      </p>

      <h1 className="text-2xl">
        5. You have an array of products. Each object has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <p>
        At first, I will create in input field and get the value from that. Then
        I will loop through the array and get each object with the name. And
        then I will compare between the input field value and object's name
        value. I can use .find() to get the value and show the result in UI
      </p>
    </div>
  );
};

export default Blogs;
