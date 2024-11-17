# How to Handle Asynchronous Operations Using `async/await` Over `Callback/Promise` in TypeScript

---

Javascript or Typescript support various ways of handling asynchronous operations. Both `async/await` and `callback/promise` are among the most used ones. Before the introduction of `async/await`, `callback/promise` was the go-to way to handle promises. But it lead to many phenomenons for scaling projects, like "Callback Hell" or "Too much chaining" or "Code un-readability" etc. That's when the need for a more robust way to handle promises appear more prominently than ever before. Voila! We got `async/await`.

## Understanding Asynchronous Operations

Before diving into examples of how to handle async operations in typescript, let's understand what `Asynchronous Programming` actually means.

- Asynchronous programming basically means the unblocking nature of execution where some code that needs time(how much we're not sure of) to be executed, don't block/stop later codes to execute. And when the execution of non-blocking codes are done, then the asynchronous codes get executed one by one. For example, fetching data from server may need time, so it doesn't block other function instead it lets them to finish and then fetches the data.

Now, let explore both ways to handle asynchronous operations in typescript:

1. **`callback/promise`**
2. **`async/await`**

### 1. Using Callbacks

Let's fetch some posts from _json/placeholder_ using callbacks:

```typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
type GetPosts = (data: Post[]) => void;

const getPosts = (callback: GetPosts) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    });
};

console.log(
  getPosts((data: Post[]) => {
    console.log(data);
  })
);
```

or, We could do something with similar then,catch syntax like this:

```typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

getPosts().then((data) => {
  console.log(data);
});
```

### 2. Using Async/Await

Let's fetch the same data but now using `async/await` method:

```typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = async (): Promise<void> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  console.log(posts);
};

getPosts();
```

**Conclusion:**
Async/await has for sure, made async funtions more readable but the other options are just as used and preferred as the former. So, there is no such obligation to use a specific one rather devs can choose whichever they prefer.
