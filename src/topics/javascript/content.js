export const intro = [
  "🚀 JavaScript — The Brain of a Website",
  "You’ve already met HTML (the structure) and CSS (the style). But websites need to think, react, and do things.",
  "That’s what JavaScript does — it's like the brain and muscles of your web page.",
  "> Imagine this: You click a button → the background color changes → a message pops up.",
  "> That’s JavaScript making the page interactive.",
  "Without JavaScript:",
  " A button is just a pretty block",
  " A form won’t actually send data",
  " A page can’t respond to anything you do",
  "With JavaScript:",
  "✅ You can click, type, hover, and the page responds!",
  "---",
  "💡 What can JavaScript do?",
  " Show or hide content",
  " Change text or colors",
  " Do math and store values",
  " React when users click, type, or scroll",
  " Talk to servers (in real apps)",
  "---",
  "🔧 Where do we write JavaScript?",
  "You can write JavaScript in two ways:",
  "1. Inside HTML using the `&lt;script&gt;` tag",
  "2. Or in a separate `.js` file",
  "Example inside HTML:",
  `&lt;script&gt;
  alert("Hello from JavaScript!");
&lt;/script&gt;`,
  "---",
  "👶 If you're new, just remember:",
  " HTML = What you see",
  " CSS = How it looks",
  " JavaScript = What it does when you use it",
  "It’s okay if it feels new or scary.",
  "You don’t need to become a genius overnight — just keep playing with it one step at a time. You're in CodeNest now. 🐣✨"
];

export const variables = [
  "🧠 Variables — JavaScript’s Memory Box",
  "A variable is like a little box where you store stuff you want to use later — like a name, score, or color.",
  'let name = "abcd";',
  "const age = 21;",
  "`let` → you can change the value later",
  "`const` → fixed value, can’t be changed",
  "📝 Real-life example:",
  "You walk into a shop and tell the cashier your name. They write it on a sticky note. That’s a variable — something JS remembers for later use.",
  "---",
  "📦 Arrays — A List of Items",
  "An array is just a list of values, stored in one place.",
  "Useful when you want to remember many things together.",
  'let fruits = ["apple", "banana", "mango"];',
  'console.log(fruits[0]); // prints "apple"',
  "Arrays start at index `0`",
  "You can access any item using its position",
  "📝 Think of it like:",
  "A shopping bag 🛍️ → First item: apple, second: banana…",
  "---",
  "🧾 Objects — Real-World Info Bundled Together",
  "An object is used to store details about one thing — like a person, car, or product.",
  "Everything inside has a key (like \"name\") and a value (like \"abcd\").",
  `let user = {
  name: "abcd",
  age: 21,
  isCool: true
};`,
  'console.log(user.name); // prints "abcd"',
  "📝 Real-life example:",
  "Think of your Instagram profile — your name, username, followers, bio — all that is stored in an object-like format.",
  "---",
  "🎯 Recap",
  "",
  "| Concept       | What it does        | Real-world feel                   |",
  "| ------------- | ------------------- | --------------------------------- |",
  "| `let`/`const` | Stores info         | Sticky notes                      |",
  "| Array `[]`    | Stores a list       | Shopping bag 🛍️                  |",
  "| Object `{}`   | Stores grouped info | Your profile card / identity info |"
];

export const func = [
  "🧠 Functions, Conditions, and Loops",
  "Let’s go step by step ↓",
  "---",
  "⚙️ Functions — Reusable Machines in JavaScript",
  "Imagine you have a coffee machine.",
  "You press a button → it makes coffee ☕",
  "You press it again → coffee again.",
  "A function is exactly that.",
  "It’s a block of code you define once and then use again and again.",
  "---",
  "🔧 How do you create a function?",
  `function sayHello() {
  console.log("Hello there!");
}`,
  "You’ve created a function called `sayHello`. It doesn’t do anything until you call it:",
  "sayHello(); // Output: Hello there!",
  "> 🧃 Function = Juice machine",
  "> You press the button (call it), and it does its job (make juice).",
  "---",
  "🔁 You can also pass ingredients (called parameters)",
  `function greet(name) {
  console.log("Hello, " + name + "!");
}`,
  'greet("abcd"); // Output: Hello, abcd!',
  "Here, `name` is like a blank — you can fill it with any value when calling the function.",
  "---",
  "🔄 A function can also return something",
  `function add(a, b) {
  return a + b;
}`,
  "let sum = add(5, 3); // sum = 8",
  "`return` means → \"give this result back so we can use it.\"",
  "---",
  "🤔 Conditionals — Making Decisions",
  "Sometimes, we want the code to take decisions.",
  "let age = 20;",
  `if (age &gt;= 18) {
  console.log("You can vote!");
} else {
  console.log("Sorry, you're too young.");
}`,
  "> 🧠 Think like your mom:",
  "> If you clean your room → you get ice cream",
  "> Else → no ice cream 😭",
  "---",
  "🔁 Loops — Repeat Without Repeating",
  "What if you want to do something 10 times? Loops handle that.",
  "➤ For Loop",
  `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
  "This prints 1 to 5.",
  "`i = 1` → start",
  "`i <= 5` → condition",
  "`i++` → increase each time",
  "> 🧠 Like telling a kid: “Count 1 to 5” — you don’t have to say each number, just tell them to repeat.",
  "---",
  "🔁 While Loop (Repeat until a condition is true)",
  "let i = 1;",
  `while (i <= 3) {
  console.log("Hi");
  i++;
}`,
  "Keeps running until the condition becomes false.",
  "---",
  "🏁 Recap",
  "",
  "| Concept  | What it does         | Real-world idea                   |",
  "| -------- | -------------------- | --------------------------------- |",
  "| Function | Reuse code as a task | Juice machine                     |",
  "| If-else  | Take decisions       | Clean room → ice cream 🍦         |",
  "| Loop     | Repeat tasks         | \"Do this 5 times\" without copying |"
];

export const events = [
  "🎯 Events and the DOM — Making the Page Come Alive",
  "---",
  "🖱️ Events — Listening to User Actions",
  "JavaScript can watch what the user does — like clicking, typing, or hovering — and react to those actions.",
  "These actions are called events.",
  "> Example:",
  "> You click a button → It shows a message → That’s an event in action.",
  "➤ Common events:",
  "`click` – when a user clicks",
  "`mouseover` – when mouse hovers",
  "`keydown` – when a key is pressed",
  "`submit` – when a form is submitted",
  "---",
  "👇 How to use an event?",
  "Let’s say you have a button in your HTML:",
  `&lt;button id="myBtn"&gt;Click me&lt;/button&gt;`,
  "In JavaScript:",
  `let btn = document.getElementById("myBtn");
btn.addEventListener("click", function () {
  alert("Button was clicked!");
});`,
  "🧠 This means: “Hey JS, when someone clicks this button — do this.”",
  "---",
  "🌐 DOM — The Way JavaScript Sees Your Web Page",
  "DOM stands for Document Object Model.",
  "It’s how JavaScript interacts with HTML and changes things on the fly.",
  "When your page loads, the browser turns your HTML into a tree that JS can understand and modify.",
  "---",
  "📄 Example: Changing Text",
  `&lt;h1 id="title"&gt;Hello!&lt;/h1&gt;`,
  `let heading = document.getElementById("title");
heading.textContent = "Hi abcd!";`,
  "Boom 💥 — The text on your web page changes.",
  "---",
  "✨ You can do so many cool things with DOM:",
  "Change text/images/colors",
  "Show/hide elements",
  "Add or remove elements",
  "React to user input",
  "---",
  "🧪 Another real use case",
  `&lt;input id="nameInput" placeholder="Enter your name" /&gt;
&lt;p id="greetMsg"&gt;&lt;/p&gt;`,
  `let input = document.getElementById("nameInput");
let msg = document.getElementById("greetMsg");
input.addEventListener("input", function () {
  msg.textContent = "Hello, " + input.value + "!";
});`,
  "Type your name → and the greeting updates instantly 🤯",
  "---",
  "🏁 Recap",
  "",
  "| Concept | What it does                   | Real-world vibe             |",
  "| ------- | ------------------------------ | --------------------------- |",
  "| Events  | Listen for user actions        | “Click me and I’ll do this” |",
  "| DOM     | Control the web page structure | Remote control for HTML     |"
];

export const best = [
  "✅ JavaScript Best Practices — Write Smart, Stay Sane 😌",
  "---",
  "1️⃣ Use `const` and `let` — avoid `var`",
  "`const` = for values you don’t plan to change",
  "`let` = for values that will change",
  "❌ `var` = old way, avoid it unless you know what you’re doing",
  "const pi = 3.14;",
  "let score = 10;",
  "---",
  "2️⃣ Use meaningful variable names",
  "Don’t be lazy with names like `x`, `temp`, or `data123`.",
  "✅ Good:",
  'let userName = "abcd";',
  'let cartItems = ["shoes", "bag"];',
  "---",
  "3️⃣ Write small, reusable functions",
  "Split your code into tiny chunks. Makes it easier to read, test, and fix.",
  `function greetUser(name) {
  return \`Hello, \${name}!\`;
}`,
  "---",
  "4️⃣ Always format your code properly",
  "Indent your code so it’s readable — it’s not just for others, it’s for you too.",
  "❌ Messy:",
  'function hello(){console.log("Hi")}',
  "✅ Clean:",
  `function hello() {
  console.log("Hi");
}`,
  "---",
  "5️⃣ Don’t Repeat Yourself (DRY Rule)",
  "If you find yourself writing the same code twice — stop!",
  "Wrap it inside a function or use a loop.",
  "---",
  "6️⃣ Comment wisely",
  "Use comments to explain why something is done, not what — your code should already be clear enough.",
  "// 👎 bad comment",
  "// adds 2 numbers",
  `function add(a, b) {
  return a + b;
}`,
  "// 👍 better comment",
  "// Adds tax to the product price",
  `function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}`,
  "---",
  "7️⃣ Avoid global variables",
  "Keep things scoped inside functions when possible. Global variables can create unwanted bugs.",
  "---",
  "8️⃣ Test your code often",
  "Don’t wait till the end — run your code step-by-step.",
  "Console is your bestie:",
  'console.log("Checking value: ", userName);',
  "---",
  "9️⃣ Practice Error Handling",
  "Use `try...catch` when working with things that might fail (like fetching data or working with files).",
  `try {
  let result = riskyFunction();
} catch (error) {
  console.log("Something went wrong:", error);
}`,
  "---",
  "🔟 Keep learning!",
  "JavaScript is huge. Learn the basics well, then slowly dive into things like:",
  "ES6+ features",
  "Promises and async",
  "LocalStorage / APIs / Frameworks",
  "---",
  "🚀 Summary — Write Code You’ll Be Proud Of",
  "✔️ Clean",
  "✔️ Simple",
  "✔️ Easy to read",
  "✔️ Easy to fix",
  "✔️ Easy to grow later"
];


