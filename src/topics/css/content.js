export const intro = [
    "🌈 What is CSS?",
    "------------------------------",
    "CSS stands for Cascading Style Sheets — and it’s what makes your boring black-and-white HTML look like a freakin’ masterpiece.",
    "You’ve got HTML as the skeleton, but CSS? That’s the outfit, the makeup, the vibe.",
    "Without CSS:\n&lt;p&gt;Hello world!&lt;/p&gt;",
    "With CSS:\n&lt;p style=\"color: hotpink; font-size: 24px;\"&gt;Hello world!&lt;/p&gt;",
    "Boom — now she’s glowing.",

    "---",

    "🧾 CSS Syntax — Looks Fancy, But It's Simple",
    "Here’s the formula:\nselector {\n  property: value;\n}",
    "Selector → Who are you styling? (like `p`, `.card`, `header`)",
    "Property → What are you changing? (like `color`, `font-size`, `background`)",
    "Value → What are you changing it to?",
    "🪄 Example:\nh1 {\n  color: royalblue;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}",

    "---",

    "🎯 3 Ways to Add CSS",

    "1. Inline (quick & dirty)\n&lt;p style=\"color: red;\"&gt;I'm spicy red!&lt;/p&gt;\nBad for big projects. Good for testing.",

    "---",

    "2. Internal (inside `&lt;style&gt;` tag)\n&lt;head&gt;\n  &lt;style&gt;\n    body {\n      background-color: f9f9f9;\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\nNice for small projects.",

    "---",

    "3. External (the professional way)\n&lt;link rel=\"stylesheet\" href=\"styles.css\" /&gt;\nThen in `styles.css`:\nbody {\n  background-color: ffffff;\n  color: 333;\n}\nBest way to keep things organized & clean.\nThis is what real devs use.",

    "---",

    "🍭 Common CSS Properties You’ll Love",
    "| Property         | What It Does                         |",
    "| ---------------- | ------------------------------------ |",
    "| `color`          | Text color                           |",
    "| `background`     | Background color/image               |",
    "| `font-size`      | Text size                            |",
    "| `font-family`    | Font style                           |",
    "| `margin`         | Space outside the element            |",
    "| `padding`        | Space inside the element             |",
    "| `border`         | Adds border around an element        |",
    "| `width`/`height` | Sets size                            |",
    "| `text-align`     | Aligns text (left, center, right)    |",
    "| `display`        | Changes layout (inline, block, flex) |",

    "---",

    "🧃 Example Time!\nLet’s style a button 💅\n&lt;button class=\"cool-btn\"&gt;Click Me&lt;/button&gt;\n.cool-btn {\n  background-color: 6c5ce7;\n  color: white;\n  border: none;\n  padding: 12px 20px;\n  font-size: 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.cool-btn:hover {\n  transform: scale(1.05);\n}\n👀 Now that button's got vibes.",

    "---",

    "🧠 TL;DR\nCSS = your website’s wardrobe 👗\n3 ways to add it: inline, internal, external\nUse selectors to target elements and properties to style them\nStart with basic stuff: colors, font, size, layout"

];
export const boxModel = [
    "🧱 The CSS Box Model – The Backbone of Every Element",
    "------------------------------",
    "If you want your layout to stop breaking,\nif you want spacing to make sense,\nif you want that “why tf is this div off-center” bug to go away —\nyou NEED to understand the Box Model.",

    "---",

    "🎁 Imagine Every Element is a Box",
    "Every HTML element is treated like a box, and that box has layers — like an onion 🧅",
    "Here’s the structure from inside to outside:\n|-----------------------------|\n|         margin              |\n|  |---------------------|   |\n|  |      border         |   |\n|  |  |-------------|    |   |\n|  |  |  padding    |    |   |\n|  |  |  content    |    |   |\n|  |  |-------------|    |   |\n|  |---------------------|   |\n|-----------------------------|",

    "---",

    "🧠 Let’s Break it Down:",

    "1. Content\nThis is where your text, image, or actual element lives.\nLike:\n&lt;p&gt;Hello World&lt;/p&gt;",

    "---",

    "2. Padding\nThis is the space inside the box, between the content and the border.\nIt pushes the content inward.\np {\n  padding: 20px;\n}",

    "---",

    "3. Border\nThis is the visible edge around your element.\np {\n  border: 2px solid black;\n}\nYou can style borders like:\n\n `dotted`\n `dashed`\n `solid`\n `none`\n `double` (fancy!)",

    "---",

    "4. Margin\nThis is the space outside the element. It pushes the whole box away from other elements.\np {\n  margin: 30px;\n}",

    "---",

    "🧪 A Real Example:\n.card {\n  padding: 20px;\n  border: 2px solid 333;\n  margin: 40px;\n}\n📦 This `.card` now has:\n20px space inside the box\nA 2px border\n40px space between it and anything around it",

    "---",

    "🛠️ Visual Hack:\nIf you ever feel lost, add this in CSS:\n{\n  outline: 1px solid red;\n}\nThis will show the actual boundaries of every element on your page.\nPure life-saver during layout debugging 🔥",

    "---",

    "💡 Bonus: `box-sizing` (important af)\nBy default, padding & border add extra size to the element.\nBut if you write this:\n{\n  box-sizing: border-box;\n}\nThen CSS includes padding & border inside the total size.\nMUCH easier to work with. You should always use this. Like, always.",

    "---",

    "🔚 TL;DR\nEvery element is a box with content, padding, border, and margin\nPadding pushes content inward\nMargin pushes the whole box outward\nbox-sizing: border-box keeps sizing sane\nUnderstanding this = fewer layout headaches forever"

]

export const idVsClass = [
    "🎯 `id` vs `class` in CSS — The Targeting Game",
    "------------------------------",
    "You've already used them in HTML.\nNow let’s learn how to style like a sniper, not a shotgun 😎",

    "---",

    "🔹 `id` — The One and Only",
    "Think of `id` like a person’s Aadhaar number —\none element, one `id`, no duplicates.",
    "&lt;h1 id=\"main-heading\"&gt;Welcome to CodeNest&lt;/h1&gt;",
    "In CSS:\nmain-heading {\n  color: e84393;\n  font-size: 32px;\n}",
    "✅ Use `id` when you're styling or targeting a unique element only once.",
    "⚠️ Don’t overuse it for styling. It's strong — too strong — and can cause specificity wars later.",

    "---",

    "🔸 `class` — The Squad Leader",
    "Think of `class` like a school uniform —\nYou give it to multiple people (elements), and they all look the same.",
    "&lt;p class=\"tagline\"&gt;Learn. Build. Repeat.&lt;/p&gt;",
    "&lt;p class=\"tagline\"&gt;Simple lessons for complex minds.&lt;/p&gt;",
    "In CSS:\n.tagline {\n  font-style: italic;\n  color: 636e72;\n}",
    "✅ Use `class` for grouping styles you’ll reuse — headers, buttons, cards, navbars, etc.",

    "---",

    "📊 `id` vs `class` — Quick Comparison",
    "| Feature    | `id`                       | `class`                      |",
    "| ---------- | -------------------------- | ---------------------------- |",
    "| Uniqueness | Only one per element       | Can be used on many elements |",
    "| Selector   | `#id-name`                 | `.class-name`                |",
    "| Use case   | Unique sections/components | Reusable styles              |",
    "| Priority   | Higher specificity         | Lower specificity            |",

    "---",

    "💣 Can You Mix Them?",
    "Of course.",
    "&lt;div id=\"intro\" class=\"card highlight\"&gt;\n  Hello, world!\n&lt;/div&gt;",
    "You can style them separately:\n#intro {\n  font-size: 20px;\n}\n.card {\n  padding: 16px;\n}\n.highlight {\n  background-color: ffeaa7;\n}",

    "---",

    "🧠 Selector Syntax Recap",
    "| Selector        | Targets                           |",
    "| --------------- | --------------------------------- |",
    "| `idName`        | One specific element with that id |",
    "| `.className`    | All elements with that class      |",
    "| `tagname`       | All `&lt;p&gt;` or `&lt;h1&gt;` or whatever   |",
    "| `div.className` | Only `div`s with that class       |",
    "| `div p`         | All `&lt;p&gt;` inside `&lt;div&gt;`          |",
    "| `.btn:hover`    | When mouse hovers on `.btn`       |",

    "---",

    "🔥 Real-Life Use Case",
    "&lt;button class=\"btn btn-primary\"&gt;Submit&lt;/button&gt;",
    ".btn {\n  padding: 12px 20px;\n  border-radius: 8px;\n}",
    ".btn-primary {\n  background-color: 0984e3;\n  color: white;\n}",
    "🎯 `.btn` handles shared button styles",
    "🎯 `.btn-primary` adds extra flair for a specific type",

    "---",

    "🧠 TL;DR\nUse `id` when you need to style only one special element.\nUse `class` for reusable styles across elements.\nAlways prefer `class` for styling unless absolutely necessary.\nCombine selectors for power 💪"

]
export const display = [
    "🧱 What is `display` in CSS?",
    "------------------------------",
    "Every HTML element has a `display` type.\nThis defines how the element behaves on the page —\nDoes it sit next to others? Stretch full width? Wrap content? Float like a champ?\nLet’s break it down like a pro.",

    "---",

    "🥇 Default Display Types",
    "There are two major default types:",

    "1. Block\nTakes full width available\nAlways starts on a new line\nExample elements: `&lt;div&gt;`, `&lt;p&gt;`, `&lt;h1&gt;`\ndisplay: block;",
    "&lt;p&gt;Hello&lt;/p&gt;\n&lt;p&gt;World&lt;/p&gt;\n👆 They’ll be stacked on top of each other.",

    "---",

    "2. Inline\nTakes only as much width as needed\nCan sit beside other inline elements\nExample elements: `&lt;span&gt;`, `&lt;a&gt;`, `&lt;strong&gt;`\ndisplay: inline;",
    "&lt;span&gt;Hello&lt;/span&gt; &lt;span&gt;World&lt;/span&gt;\n👆 They’ll appear side-by-side.",

    "---",

    "🥈 Modified Display Types (Game Changers)",

    "3. Inline-Block\nSits beside others like `inline`\nBut allows you to set width, height, padding like `block`\ndisplay: inline-block;\nPerfect for buttons, badges, etc.",

    "---",

    "4. None\nLiterally disappears the element from the page (like hide-and-seek master).\ndisplay: none;",
    "&lt;p class=\"bye\"&gt;You can't see me&lt;/p&gt;\n&lt;style&gt;\n  .bye {\n    display: none;\n  }\n&lt;/style&gt;",

    "---",

    "🌟 Flex — The Real MVP",
    "5. Flex\nWelcome to layout paradise.\nFlexbox is powerful, responsive, and gives you control like magic.\ndisplay: flex;",
    "By default, it makes children go side-by-side, like this:",
    "&lt;div class=\"container\"&gt;\n  &lt;div&gt;One&lt;/div&gt;\n  &lt;div&gt;Two&lt;/div&gt;\n  &lt;div&gt;Three&lt;/div&gt;\n&lt;/div&gt;",
    ".container {\n  display: flex;\n}",
    "👆 All child `&lt;div&gt;`s now sit next to each other.",

    "Bonus Flex Powers:",
    "`justify-content` → controls horizontal space\n`align-items` → controls vertical alignment\n`gap` → adds space between items",
    ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}",

    "---",

    "🧊 Grid — The Big Bro of Flex",
    "6. Grid\nWant full control of rows + columns?\nUse:\ndisplay: grid;",
    "It’s like designing your own board game layout:",
    ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n}",
    "You just made 3 equal-width columns.\nWant auto rows? Add `grid-auto-rows: 100px;`\nGrid is 💪 when building page layouts, dashboards, galleries, etc.",

    "---",

    "🧠 TL;DR: Common `display` Types",
    "| Type           | What It Does                            |",
    "| -------------- | --------------------------------------- |",
    "| `block`        | Full-width, new line                    |",
    "| `inline`       | Sits inline, width/height not respected |",
    "| `inline-block` | Inline + can set width/height           |",
    "| `none`         | Hides the element                       |",
    "| `flex`         | Layout in a row/column with control     |",
    "| `grid`         | Layout in rows + columns                |",

    "---",

    "👑 Summary\nUse `block` and `inline` to understand default behaviors\nUse `flex` for horizontal/vertical layout\nUse `grid` for structured rows and columns\n`none` = invisibility cloak 🧙‍♂️"

]
export const colorsFonts = [
    "🎨 1. Colors — The Vibe Makers",
    "🔹 Basic Color Names\nYou can literally write:\ncolor: red;\nbackground-color: black;\nBut we’re cooler than that 😎",

    "---",

    "🔸 HEX Codes\ncolor: e74c3c;   / Red /\nbackground: 2c3e50; / Dark blue-gray /\n6 digits: `RRGGBB`\nFrom `00` (dark) to `FF` (bright)",

    "---",

    "🔸 RGB & RGBA\ncolor: rgb(255, 255, 255);     / white /\ncolor: rgba(0, 0, 0, 0.7);     / black with 70% opacity /\n`rgba` = add transparency (a = alpha)",

    "---",

    "🔸 HSL & HSLA (for nerds)\ncolor: hsl(0, 100%, 50%);      / red /\ncolor: hsla(210, 50%, 40%, 0.9);\nUseful when you want to change just lightness or saturation easily.",

    "---",

    "🖋️ 2. Fonts — The Personality of Your Text",

    "🔹 Font Family\nfont-family: 'Poppins', sans-serif;",
    "| Category   | Examples                          |\n| ---------- | --------------------------------- |\n| Serif      | Times New Roman, Georgia          |\n| Sans-serif | Arial, Helvetica, Poppins, Roboto |\n| Monospace  | Courier New, Consolas             |\n| Cursive    | Comic Sans (nooo), Pacifico       |",
    "Use [Google Fonts](https://fonts.google.com/) for modern options.\nJust include this in your HTML `&lt;head&gt;`:\n&lt;link href=\"https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap\" rel=\"stylesheet\"&gt;",
    "And then use in CSS:\nbody {\n  font-family: 'Roboto', sans-serif;\n}",

    "---",

    "🔸 Font Size & Weight\nfont-size: 18px;        / or try 1.2rem /\nfont-weight: bold;      / or 100 to 900 /\n`bold`, `lighter`, `normal`\nor numeric values (400 = normal, 700 = bold)",

    "---",

    "🔸 Line Height & Letter Spacing\nline-height: 1.6;         / improves readability /\nletter-spacing: 1px;      / adds space between letters /\n✨ Great for headings and hero sections.",

    "---",

    "🎨 3. Themes — Dark, Light & Beyond\nWant your site to change mood like a Spotify skin?\nLet’s build a basic light/dark theme switcher idea.",

    "---",

    "💡 Light vs Dark Mode (Concept)",
    "HTML:\n&lt;body class=\"light\"&gt;\n  &lt;h1&gt;Hello abcd&lt;/h1&gt;\n&lt;/body&gt;",
    "CSS:\nbody.light {\n  background-color: ffffff;\n  color: 222;\n}\nbody.dark {\n  background-color: 1e1e1e;\n  color: f1f1f1;\n}",
    "JavaScript toggle:\nfunction toggleTheme() {\n  document.body.classList.toggle(\"dark\");\n  document.body.classList.toggle(\"light\");\n}",
    "🎯 Add a toggle button — boom, theme switch done!",

    "---",

    "🌈 Bonus: CSS Variables for Theme Magic",
    ":root {\n  --bg: ffffff;\n  --text: 222222;\n}",
    "body {\n  background-color: var(--bg);\n  color: var(--text);\n}",
    "Then for dark theme:\nbody.dark {\n  --bg: 000000;\n  --text: eeeeee;\n}",
    "This way, you don’t have to rewrite styles — just switch the variables 💅",

    "---",

    "💡 TL;DR Recap\n🎨 Use `HEX`, `RGB`, `HSL` for beautiful colors\n🖋️ Use modern fonts via Google Fonts\n🎚️ Adjust `font-size`, `weight`, `spacing` for elegance\n🌗 Create themes with class toggling or CSS variables"
];
export const elementControlSquad = [
    "👉 Position + Margin vs Padding + Borders & Shadows",
    "Let’s call it: 'CSS Element Control Squad' 🧱✨",
    "------------------------------",
    "1️⃣ `position` – Where the heck should this element sit?\nBy default, every element is positioned as `static`, which means \"just go with the normal HTML flow.\"\nBut sometimes, you want to move things around like a boss 💪",

    "🔸 `relative`\nMoves the element relative to itself\nDoesn’t affect surrounding elements\nposition: relative;\ntop: 20px;   / pushes the element down by 20px /\nleft: 10px;  / pushes the element to the right /\n👉 Still occupies the original space.",

    "---",

    "🔸 `absolute`\nMoves the element relative to the nearest positioned parent (`relative`, `absolute`, or `fixed`)\nGets pulled out of normal flow\nposition: absolute;\ntop: 0;\nright: 0;\n💡 Use inside a `relative` container if you want to place stuff in a corner.",

    "---",

    "🔸 `fixed`\nSticks to the viewport (screen) no matter how much you scroll.\nposition: fixed;\nbottom: 0;\nleft: 0;\n📌 Perfect for navbars, floating buttons.",

    "---",

    "🔸 `sticky`\nHybrid of `relative` and `fixed`\nStays in normal flow until a scroll point is hit\nposition: sticky;\ntop: 0;\n🔒 Great for sticky headers or section titles",

    "---",

    "2️⃣ Margin vs Padding – Know the difference once and for all",
    "| Property  | What it controls                                        | Visual |\n| --------- | ------------------------------------------------------- | ------ |\n| `padding` | Space inside the element (between content & border) | 🧸     |\n| `margin`  | Space outside the element (between it and others)   | 🧱🧱   |",
    "padding: 10px;\nmargin: 20px;",
    "Think of:\n&gt; Padding = breathing space inside the box\n&gt; Margin = pushing other boxes away",
    "Use this visual:\n[ margin [ border [ padding [ content ] ] ] margin ]",

    "---",

    "3️⃣ Borders, Border-Radius & Box-Shadow – Give your box some swag 💅",

    "🔸 `border`\nborder: 2px solid 333;\nYou can control:\nWidth\nStyle (`solid`, `dashed`, `dotted`, etc.)\nColor",

    "---",

    "🔸 `border-radius` – Make corners soft like marshmallows 🍥\nborder-radius: 8px;\nMake a circle:\nwidth: 100px;\nheight: 100px;\nborder-radius: 50%;",

    "---",

    "🔸 `box-shadow` – Make elements pop\nbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);",
    "Syntax:\nbox-shadow: X-offset Y-offset blur color;",
    "Looks like:\n       [shadow]\n      +--------+\n      | Button |\n      +--------+",

    "---",

    "✅ Summary",
    "| Feature         | Use For                        |\n| --------------- | ------------------------------ |\n| `position`      | Move or fix elements on screen |\n| `margin`        | Space outside element          |\n| `padding`       | Space inside element           |\n| `border`        | Outline the box                |\n| `border-radius` | Soften corners                 |\n| `box-shadow`    | Add depth, make it pop         |"

];
export const textStyling = [
    "🖋️ 1️⃣ Text Styling — Because plain text is boring",
    "------------------------------",
    "🔸 `text-align`\nAlign your text like a boss:\ntext-align: left;   / default /\ntext-align: center;\ntext-align: right;\nGreat for:\n• Centering headings\n• Aligning paragraphs\n• Making things look neat",

    "---",

    "🔸 `line-height`\nAdd breathing room between lines:\nline-height: 1.6;\nHelpful for longer paragraphs so readers don’t feel like they’re drowning 🫠",

    "---",

    "🔸 `letter-spacing`\nGive letters some space:\nletter-spacing: 1px;\nUse with uppercase headings to make them look dramatic 🧢",

    "---",

    "🔸 `text-transform`\ntext-transform: uppercase;  / Makes all letters BIG /\ntext-transform: lowercase;  / makes all small /\ntext-transform: capitalize; / First Letter Of Every Word /\nOne CSS line = total attitude shift.",

    "---",

    "🔸 `text-decoration`\nMostly used to remove that ugly underline from links:\ntext-decoration: none;\nAlso:\ntext-decoration: underline;\ntext-decoration: line-through;",

    "---",

    "🧠 Pro Tip: Combine for magic",
    "h1 {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-weight: bold;\n}",

    "---",

    "🖱️ 2️⃣ Hover & Active — Add life to your UI",

    "🔸 `:hover`\nTriggered when the mouse hovers over an element.\nbutton:hover {\n  background-color: 333;\n  color: fff;\n  cursor: pointer;\n}\n✨ Great for:\n• Buttons\n• Links\n• Cards",

    "---",

    "🔸 `:active`\nTriggered when the element is being clicked.\nbutton:active {\n  transform: scale(0.97);\n}\nGives that clicky feeling 🔘",

    "---",

    "🧠 Bonus: Smooth the hover with `transition`\nbutton {\n  transition: all 0.2s ease;\n}\nMakes the hover/active effects smooth like butter 🧈",

    "---",

    "✅ Summary",
    "| Property          | Use For                        |\n| ----------------- | ------------------------------ |\n| `text-align`      | Aligning text                  |\n| `line-height`     | Space between lines            |\n| `letter-spacing`  | Space between letters          |\n| `text-transform`  | Capitalization styles          |\n| `text-decoration` | Underlines, strike-throughs    |\n| `:hover`          | Styling on mouse-over          |\n| `:active`         | Styling on click               |\n| `transition`      | Smooth hover/active animations |"

];
export const flexbox = [
    "🧱 Flexbox – Your CSS Superpower for Layouts\nFlexbox is a layout model that makes it easy to align items, space them out, and build responsive layouts — without losing your mind 😵‍💫",

    "---",

    "🧩 Step 1: Make a container flexible\n.container {\n  display: flex;\n}\nBoom — now all direct children inside `.container` become flex items.",

    "---",

    "🔸 Main Flex Properties (for container)",

    "1️⃣ `flex-direction`\nControls direction of the items:\nflex-direction: row;       / default – side by side (horizontal) /\nflex-direction: column;    / stacked (vertical) /\n📐 Helps build horizontal menus, vertical lists, etc.",

    "---",

    "2️⃣ `justify-content`\nControls horizontal alignment (when `flex-direction: row`):\njustify-content: flex-start;   / default /\njustify-content: center;\njustify-content: flex-end;\njustify-content: space-between;\njustify-content: space-around;\njustify-content: space-evenly;\n🎯 Think: “where should my items go on the X-axis?”",

    "---",

    "3️⃣ `align-items`\nControls vertical alignment (when `flex-direction: row`):\nalign-items: flex-start;\nalign-items: center;\nalign-items: flex-end;\n🎯 Think: “how should they behave on the Y-axis?”",

    "---",

    "4️⃣ `gap`\nAdds space between items:\ngap: 1rem;\nNo more using margin on every item — just add `gap`.",

    "---",

    "🧸 Flex Item Properties (for children)",

    "1️⃣ `flex-grow`\nDefines how much an item should grow relative to others.\n.item {\n  flex-grow: 1;\n}\nIf all items have `flex-grow: 1`, they divide the space equally.",

    "---",

    "2️⃣ `flex-shrink`\nDefines how much it should shrink when needed.\n.item {\n  flex-shrink: 1;\n}\nUsually safe to leave this as default.",

    "---",

    "3️⃣ `flex-basis`\nDefines the initial size of an item before flexing.\n.item {\n  flex-basis: 200px;\n}",

    "---",

    "4️⃣ `align-self`\nOverrides `align-items` for one single item.\n.item {\n  align-self: center;\n}",

    "---",

    "🧠 Real-world Example:\n&lt;div class=\"navbar\"&gt;\n  &lt;div&gt;Logo&lt;/div&gt;\n  &lt;div&gt;Links&lt;/div&gt;\n  &lt;div&gt;Button&lt;/div&gt;\n&lt;/div&gt;\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n📸 Result: Logo left, Links center/right, Button far right — all aligned neatly.",

    "---",

    "✅ Summary",
    "| Property          | Use For                          |\n| ----------------- | -------------------------------- |\n| `display: flex`   | Makes a container flexible       |\n| `flex-direction`  | Row vs Column layout             |\n| `justify-content` | Align on main axis (X or Y)      |\n| `align-items`     | Align on cross axis (Y or X)     |\n| `gap`             | Space between items              |\n| `flex-grow`       | Items grow proportionally        |\n| `flex-shrink`     | Items shrink when needed         |\n| `flex-basis`      | Base size of an item             |\n| `align-self`      | Individual alignment override    |"
];
export const units = [
    "🎯 Units in CSS — How you measure stuff (like a frontend architect 🧱📏)\nDifferent units = different superpowers.\nLet’s break it down:",

    "---",

    "🔹 Absolute Units\nThese don’t care about screen size — they stay fixed.",
    "| Unit             | Description                          | Example            |\n| ---------------- | ------------------------------------ | ------------------ |\n| `px`             | Pixels (most common)                 | `font-size: 16px;` |\n| `pt`             | Points (used in print)               | `12pt`             |\n| `cm`, `mm`, `in` | Physical units (for printers mostly) |                    |\n✅ Use when: You want precise size regardless of device.",

    "---",

    "🔹 Relative Units\nThese scale based on parent, root, or viewport. Best for responsive design.",
    "| Unit  | Based On                      | Example             |\n| ----- | ----------------------------- | ------------------- |\n| `%`   | Parent size                   | `width: 50%;`       |\n| `em`  | Parent font-size              | `1em = parent size` |\n| `rem` | Root font-size (usually 16px) | `1rem = 16px`       |\n| `vw`  | 1% of viewport width          | `width: 50vw;`      |\n| `vh`  | 1% of viewport height         | `height: 100vh;`    |\n✅ Use when: You want things to adapt to different screens.",

    "---",

    "🧠 Real Talk:\nUse `px` for borders, shadows, specific spacing\nUse `rem` for font sizes (easy scaling)\nUse `%`, `vw`, `vh` for layouts that feel responsive",

    "---",

    "📱 Responsive Design — Make your site fit everywhere\nYour website shouldn’t break on mobile.\nEnter the hero: `@media` queries 🦸‍♀️",

    "---",

    "🔸 What is a Media Query?\nIt tells the browser:\n“If the screen is this size, apply these styles.”\n@media (max-width: 768px) {\n  .navbar {\n    flex-direction: column;\n  }\n}\n👆 This says:\n“When screen is 768px or smaller, stack navbar items vertically.”",

    "---",

    "🔸 Common Breakpoints (not fixed, just popular)",
    "| Device         | Width (px)          |\n| -------------- | ------------------- |\n| Mobile         | `max-width: 480px`  |\n| Tablet         | `max-width: 768px`  |\n| Laptop/Desktop | `min-width: 1024px` |",

    "---",

    "🔸 Example Use-Case\n.card {\n  width: 400px;\n}\n@media (max-width: 600px) {\n  .card {\n    width: 90%;\n  }\n}\n💡 Now `.card` will shrink on small screens instead of overflowing!",

    "---",

    "🧠 Tips:\n• Combine `flex` + `media queries` = magical responsive UI\n• Always check on at least 3 sizes: mobile, tablet, desktop\n• Use browser dev tools (responsive mode) to test quickly",

    "---",

    "✅ Summary",
    "| Concept     | Use For                            |\n| ----------- | ---------------------------------- |\n| `px`        | Fixed size (pixels)                |\n| `em`, `rem` | Scale based on font sizes          |\n| `%`         | Relative to parent                 |\n| `vw`, `vh`  | Relative to viewport               |\n| `@media`    | Change styles based on screen size |\n| `max-width` | Apply styles for smaller screens   |\n| `min-width` | Apply styles for larger screens    |\nThat’s how you make your designs adapt like a chameleon 🦎📱💻🖥️"
];
export const best = [
    "🎯 CSS Best Practices — Write it Clean, Make it Shine ✨",
    "---",

    "✅ 1️⃣ Use Meaningful Class Names\nDon’t be that `.a1`, `.redBox`, or `.thingy`.\nUse names that explain the role, not how they look.\n&lt;!-- ❌ Bad --&gt;\n&lt;div class=\"blue-text\"&gt;&lt;/div&gt;\n&lt;!-- ✅ Good --&gt;\n&lt;div class=\"alert-message\"&gt;&lt;/div&gt;",

    "---",

    "✅ 2️⃣ Keep It DRY (Don't Repeat Yourself)\nAvoid repeating the same styles over and over.\n/ ❌ Redundant /\n.card1 {\n  padding: 20px;\n  border-radius: 8px;\n}\n.card2 {\n  padding: 20px;\n  border-radius: 8px;\n}\n/ ✅ Reusable /\n.card {\n  padding: 20px;\n  border-radius: 8px;\n}\n💡 Tip: Use utility-first classes (like Tailwind) or BEM if things grow big.",

    "---",

    "✅ 3️⃣ Use a Consistent Unit System\nMixing `px`, `%`, `em`, `rem` everywhere = chaos.\n⛔ Don’t do:\nfont-size: 16px;\npadding: 2rem;\nmargin: 10%;\n✅ Pick 1–2 and stick with them (e.g., `rem` for fonts, `%`/`px` for layout).",

    "---",

    "✅ 4️⃣ Always Reset or Normalize Styles\nBrowsers come with weird default CSS.\nAdd this at the top of your CSS file to start clean:\n{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nOr use a full reset/normalize library.",

    "---",

    "✅ 5️⃣ Don’t Over-Nest in CSS\nAvoid crazy deep selectors like:\nbody .container .box .text .highlight .hovered-text { ... }\n💀 Painful to debug. Instead, simplify:\n.highlight {\n  color: yellow;\n}",

    "---",

    "✅ 6️⃣ Comment Wisely ✍️\nUse comments to mark sections or explain hacks.\n/ ===== Header Styling ===== /\n.header { ... }\n/ Fix for iOS Safari weirdness /\n.some-class {\n  -webkit-overflow-scrolling: touch;\n}\nBut don’t over-comment obvious things.",

    "---",

    "✅ 7️⃣ Mobile First, Always\nStart writing CSS for small screens, then scale up.\n.card {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .card {\n    width: 50%;\n  }\n}\n💡 Phones are everywhere. Start from there.",

    "---",

    "✅ 8️⃣ Don’t Inline Everything\nAvoid styles inside HTML unless it’s a one-time experiment.\n&lt;!-- ❌ --&gt;\n&lt;div style=\"color: red;\"&gt;&lt;/div&gt;\n&lt;!-- ✅ --&gt;\n&lt;div class=\"error-message\"&gt;&lt;/div&gt;\nKeep your HTML clean, CSS separate.",

    "---",

    "✅ 9️⃣ Keep Files Organized 🗂️\nSplit your CSS if the project grows:\n/styles\n  ├── base.css\n  ├── layout.css\n  ├── components.css\n  └── responsive.css\nOr use Tailwind/SCSS when needed.",

    "---",

    "✅ 🔟 Test. On. Devices.\nWhat looks good on laptop may break on a phone or tablet.\nAlways check responsiveness.\nUse browser dev tools &gt; responsive mode\n📱 💻 🖥️",

    "---",

    "👑 Final Blessings from My’s Castle:\nDon’t chase perfect UI, chase consistent flow\nWrite styles like you’ll read them 3 months later\nCSS is not just about looks — it’s how your ideas feel alive"
];


