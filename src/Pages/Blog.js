import React from 'react';

const Blog = () => {
    return (
      <div>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5 mt-10 rounded-2xl">
        {/* -------- */}
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold ">
            <p className=" p-4 "> Q: What is the difference between SQL and NoSQL?</p>
          </div>
          <div className="collapse-content">
            <p className="text-justify">
            The five critical differences between SQL vs NoSQL are:
            <br />

1. SQL databases are relational, NoSQL databases are non-relational.<br/>
2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
<br/>
3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
<br />
4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
<br />
5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
          </div>
        </div>

        {/* -------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
            <p className=" p-4 ">
              Q: What is JWT, and how does it work?
            </p>
          </div>
          <div className="collapse-content">
            <p>
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </p><br/>
            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

</p>
          </div>
        </div>

        {/* -------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
            <p className=" p-4 ">Q: What is the difference between javascript and NodeJS?</p>
          </div>
          <div className="collapse-content">
            <p>
            JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language<br/> whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps..
            </p>
          </div>
        </div>

        {/* ----------- */}

        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold ">
            <p className=" p-4 "> Q: How does NodeJS handle multiple requests at the same time?</p>
          </div>
          <div className="collapse-content">
            <p className="text-justify">
            When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;