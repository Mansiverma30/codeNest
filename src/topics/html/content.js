export const intro = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🟥 What the Heck is HTML?</div>",
    "🏠 <span class='text-gray-100'>Imagine you're building a house — the bricks, walls, rooms... all that structure? That's what <span class='text-yellow-400 font-semibold'>HTML</span> is for a website.</span>",
    "🎨 <span class='text-gray-100'>HTML doesn’t care about </span><span class='text-pink-400 font-semibold'>colors</span><span class='text-gray-100'>, </span><span class='text-green-400 font-semibold'>animations</span><span class='text-gray-100'>, or fancy styles.</span>",
    "🧱 <span class='text-gray-100'>Its job is to put stuff in the right place, like saying:</span>",
    `<span class='text-teal-300'>🔹 This is a heading</span>`,
    `<span class='text-teal-300'>🔹 This is a paragraph</span>`,
    `<span class='text-teal-300'>🔹 This is an image</span>`,
    `<span class='text-teal-300'>🔹 This is a button</span>`,
    " ",
    "💡 <span class='text-yellow-400 font-medium'>Quick note:</span> <span class='text-gray-100'>HTML stands for <i>HyperText Markup Language</i> — fancy name, but don’t stress it.</span>",
    "🧠 <span class='text-gray-100'>Just remember: <span class='text-lime-400 font-semibold'>HTML tells the browser what each part of your page is.</span></span>",
    " ",
    "<div class='border-b border-lime-400/30 pb-1 mb-3 text-lime-300 text-lg font-bold'>🚀 Your First HTML Page (Boilerplate)</div>",
    "<span class='text-gray-100'>Every HTML page starts with this simple skeleton:</span>",
    `<code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;!DOCTYPE html&gt;</code>`,
    `<code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;html&gt;</code>`,
    `  <code class="text-teal-300 bg-[#2f2f47]  rounded block w-fit">&lt;head&gt;</code>`,
    `    <code class="text-teal-300 bg-[#2f2f47]  rounded block w-fit">&lt;title&gt;</code><span class='text-white'>My First Page</span><code class="text-teal-300 bg-[#2f2f47]  rounded  w-fit">&lt;/title&gt;</code>`,
    `  <code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;/head&gt;</code>`,
    `  <code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;body&gt;</code>`,
    `    <code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;h1&gt;</code><span class='text-white'>Hello, CodeNest!</span><code class="text-teal-300 bg-[#2f2f47]  rounded  w-fit">&lt;/h1&gt;</code>`,
    `    <code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;p&gt;</code><span class='text-white'>This is my first web page.</span><code class="text-teal-300 bg-[#2f2f47]  rounded  w-fit">&lt;/p&gt;</code>`,
    `  <code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;/body&gt;</code>`,
    `<code class="text-teal-300 bg-[#2f2f47] block rounded  w-fit">&lt;/html&gt;</code>`,
    " ",
    "<div class='border-b border-orange-400/30 pb-1 mb-3 text-orange-300 text-lg font-bold'>🧠 Let's break it down like a desi dev:</div>",
    `<span class="text-white">&lt;!DOCTYPE html&gt;</span> <span class="text-gray-400">- Bro, I’m writing HTML5, okay?</span>`,
    `<span class="text-white">&lt;html&gt;</span> <span class="text-gray-400">- This whole thing is your web page.</span>`,
    `<span class="text-white">&lt;head&gt;</span> <span class="text-gray-400">- Invisible stuff: page title, SEO, metadata.</span>`,
    `<span class="text-white">&lt;body&gt;</span> <span class="text-gray-400">- Visible stuff: text, images, buttons, etc.</span>`,
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Tags and Attributes</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>tags and attributes</code> in the terminal to continue.</div>",

    " ",
];

export const tags = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🏷️ Tags, Elements & Attributes — Learn the Lingo Like a Pro</div>",

    "🧱 <span class='text-gray-100'>Tags are like wrappers — they <span class='font-semibold'>open</span> and <span class='font-semibold'>close</span> around content.</span>",
    `Example: <code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;p&gt;</code>hello<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;/p&gt;</code> is a paragraph.`,

    " ",
    "📦 <span class='text-gray-100'>An <span class='text-purple-300 font-semibold'>element</span> = opening tag + content + closing tag.</span>",
    `Like: <code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;h1&gt;</code>Welcome<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;/h1&gt;</code>`,

    " ",
    "🔍 <span class='text-gray-100'>Attributes give extra info to elements.</span>",
    "For example, in an image tag:",
    `<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;img</code> <span class='text-blue-400'>src="cat.png" alt="A cute cat"</span> <code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">/&gt;</code>`,
    `💬 <span class='text-blue-400'>src</span> tells where the image lives.`,
    `💬 <span class='text-blue-400'>alt</span> is shown if the image breaks.`,

    " ",
    "<span class='text-green-400 font-medium'>👉 You use <span class='underline'>tags</span> to structure your page, and <span class='underline'>attributes</span> to describe the content.</span>",

    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🧠 What Are HTML Attributes?</div>",

    "🤔 You’ve seen tags like <code class='text-yellow-400'>&lt;p&gt;</code>, <code class='text-yellow-400'>&lt;a&gt;</code>, <code class='text-yellow-400'>&lt;img&gt;</code>.",
    "But sometimes tags need *extra details*. That’s what attributes provide.",
    "🧷 Think of attributes as sticky notes you attach to elements.",
    "They define things like:",
    "  • What link to open",
    "  • Where an image is",
    "  • What kind of input is allowed",
    "  • Or what styles should apply",

    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🧪 How Do Attributes Look?</div>",

    `📌 They live inside the opening tag, like:`,
    `<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;tag</code> <span class="text-blue-400">attribute="value"</span><code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&gt;</code>Content<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;/tag&gt;</code>`,
    "✍️ It’s like giving the tag a mission.",

    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>📌 Real Examples</div>",

    `<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;a</code> <span class="text-blue-400">href="https://codenest.com"</span><code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&gt;</code>Visit CodeNest<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;/a&gt;</code>`,
    `💬 <span class='text-blue-400'>href</span> tells where the link goes.`,

    `<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;img</code> <span class="text-blue-400">src="cat.jpg" alt="A sleepy cat"</span> <code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">/&gt;</code>`,
    "  • <span class='text-blue-400'>src</span> = image location",
    "  • <span class='text-blue-400'>alt</span> = backup text (also helps screen readers)",

    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🏷️ Common HTML Attributes</div>",
    `<span class="text-zinc-300 font-mono">| Attribute     | What It Does                                 |</span>`,
    `<span class="text-zinc-300 font-mono">| ------------- | -------------------------------------------- |</span>`,
    `<span class="text-blue-200 font-mono">| href          | Destination URL for a link                   |</span>`,
    `<span class="text-blue-200 font-mono">| src           | Location of an image or media file           |</span>`,
    `<span class="text-blue-200 font-mono">| alt           | Image description (accessibility)            |</span>`,
    `<span class="text-blue-200 font-mono">| id            | Unique identifier for one element            |</span>`,
    `<span class="text-blue-200 font-mono">| class         | Class name(s) for styling elements           |</span>`,
    `<span class="text-blue-200 font-mono">| type          | Type of input or button                      |</span>`,
    `<span class="text-blue-200 font-mono">| value         | Default or current input value               |</span>`,
    `<span class="text-blue-200 font-mono">| placeholder   | Hint text inside input fields                |</span>`,
    `<span class="text-blue-200 font-mono">| name          | Input field identifier for forms             |</span>`,
    `<span class="text-blue-200 font-mono">| required      | Makes the field mandatory                    |</span>`,
    `<span class="text-blue-200 font-mono">| disabled      | Disables element (can’t interact)            |</span>`,
    `<span class="text-blue-200 font-mono">| checked       | Marks checkbox/radio as selected             |</span>`,

    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🧬 id vs class</div>",

    "🔹 <span class='text-blue-400 font-semibold'>id</span> = unique name for one element.",
    "  • Used in JS, anchors, linking sections.",
    `<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;h2 id="about-me"&gt;</code>About Me<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;/h2&gt;</code>`,
    "➡️ Only one element should have a specific id.",

    "🔹 <span class='text-blue-400 font-semibold'>class</span> = group styling or logic for many elements.",
    `<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;p class="highlight"&gt;</code>This text will be styled!<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;/p&gt;</code>`,
    "➡️ Reusable across multiple tags.",

    " ",
    "🔥 <span class='text-green-400 font-bold'>Real-Life Analogy:</span>",
    "🆔 id = roll number (unique student)",
    "🏷️ class = class name (many students)",

    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🔁 Can You Use Multiple Attributes?</div>",

    "Absolutely! Stack 'em like pizza toppings 🍕",
    `<code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">&lt;input</code> <span class="text-blue-400">type="text" placeholder="Enter your name" required</span> <code class="text-yellow-400 bg-[#2f2f47] px-1 py-0.5 rounded">/&gt;</code>`,
    "This input:",
    "  • Accepts text",
    "  • Shows hint",
    "  • Can’t be empty",

    " ",
    "<div class='border-b border-red-400/30 pb-1 mb-3 text-red-400 text-lg font-bold'>🧠 TL;DR</div>",
    "📌 <span class='text-red-400'>Attributes give extra info to elements.</span>",
    "📌 <span class='text-red-400'>Always written inside the opening tag.</span>",
    "📌 <span class='text-red-400'>Some are universal, others are tag-specific.</span>",
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Text Styling</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>text</code> in the terminal to continue.</div>",

    " "
];

export const textElements = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🏷️ Headings & Paragraphs — Shouting vs. Talking</div>",
    "<span class='text-lime-400 font-semibold'>🧠 What’s a Heading?</span>",
    "<span class='text-gray-100'>A heading is like a title. You use it to shout: <i>“This section is important!”</i></span>",
    "<span class='text-gray-100'>There are 6 levels of headings — from loud to soft:</span>",
    "<span class='text-teal-300'>&lt;h1&gt;</span> is the biggest, <span class='text-teal-300'>&lt;h6&gt;</span> is the smallest.",
    " ",
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;h1&gt;I’m the boss heading&lt;/h1&gt;</code>`,
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;h2&gt;Still important&lt;/h2&gt;</code>`,
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;h3&gt;Kind of okay&lt;/h3&gt;</code>`,
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;h4&gt;Meh&lt;/h4&gt;</code>`,
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;h5&gt;Almost a whisper&lt;/h5&gt;</code>`,
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;h6&gt;Can you hear me?&lt;/h6&gt;</code>`,
    " ",
    "<span class='text-lime-400'>⚠️ Use only <span class='text-yellow-400'>&lt;h1&gt;</span> once per page — it’s like the main title.</span>",
    "<span class='text-gray-300'>The rest (<span class='text-yellow-400'>&lt;h2&gt;</span> to <span class='text-yellow-400'>&lt;h6&gt;</span>) are subtitles or section headings.</span>",
    " ",
    "<span class='text-lime-400 font-semibold'>🧠 What’s a Paragraph?</span>",
    "<span class='text-gray-100'>A paragraph is just normal flowing text. You wrap it with <span class='text-blue-300'>&lt;p&gt;</span> tags:</span>",
    `<code class='text-blue-300 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;p&gt;This is a paragraph. You can write anything inside it. Even emotional rants.&lt;/p&gt;</code>`,
    " ",
    "<span class='text-gray-400'>Browsers automatically give paragraphs some space. So no need to smash Enter 50 times like you’re in a Word doc 😅</span>",
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>📋 Lists — Bullet Points = Clarity</div>",
    "<span class='text-gray-100'>You’ve seen lists everywhere — to-dos, groceries, dreams. In HTML, there are 2 types:</span>",
    " ",
    "<span class='text-lime-400 font-semibold'>✅ Unordered List (<code class='text-yellow-400'>&lt;ul&gt;</code>)</span>",
    "<span class='text-gray-100'>Used when order doesn’t matter, like:</span>",
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;ul&gt;</code>`,
    `<code class='text-blue-300 bg-[#2f2f47] px-4 py-0.5 rounded block w-fit'>&lt;li&gt;Milk&lt;/li&gt;</code>`,
    `<code class='text-blue-300 bg-[#2f2f47] px-4 py-0.5 rounded block w-fit'>&lt;li&gt;Bread&lt;/li&gt;</code>`,
    `<code class='text-blue-300 bg-[#2f2f47] px-4 py-0.5 rounded block w-fit'>&lt;li&gt;Choco Pie&lt;/li&gt;</code>`,
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;/ul&gt;</code>`,
    "<span class='text-gray-300 mt-2 mb-1'>👀 You’ll get this:</span>",
    "  • Milk",
    "  • Bread",
    "  • Choco Pie",
    " ",
    "<span class='text-lime-400 font-semibold'>🔢 Ordered List (<code class='text-yellow-400'>&lt;ol&gt;</code>)</span>",
    "<span class='text-gray-100'>Used when order <span class='italic'>(actually)</span> matters, like:</span>",
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;ol&gt;</code>`,
    `<code class='text-blue-300 bg-[#2f2f47] px-4 py-0.5 rounded block w-fit'>&lt;li&gt;Wake up&lt;/li&gt;</code>`,
    `<code class='text-blue-300 bg-[#2f2f47] px-4 py-0.5 rounded block w-fit'>&lt;li&gt;Code&lt;/li&gt;</code>`,
    `<code class='text-blue-300 bg-[#2f2f47] px-4 py-0.5 rounded block w-fit'>&lt;li&gt;Sleep&lt;/li&gt;</code>`,
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;/ol&gt;</code>`,
    "<span class='text-gray-300 mt-2 mb-1'>👀 Output looks like:</span>",
    "  1. Wake up",
    "  2. Code",
    "  3. Sleep",
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Links in HTML</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>link</code> in the terminal to continue.</div>",

    " ",
];

export const links = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🔗 Links — Connect Your Web</div>",
    "<span class='text-gray-100'>Want to move from one page to another? That’s what <span class='text-yellow-400'>&lt;a&gt;</span> is for:</span>",
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;a href="https://google.com"&gt;Go to Google&lt;/a&gt;</code>`,
    "<span class='text-blue-300'>href</span> = where to go 🧭",
    "<span class='text-gray-300'>The text inside the tag is what users click.</span>",
    " ",
    "<span class='text-green-400 font-semibold'>💡 Pro Tip:</span> Always add <span class='text-blue-300'>target=\"_blank\"</span> to open links in a new tab.",
    `<code class='text-yellow-400 bg-[#2f2f47] px-2 py-0.5 rounded block w-fit'>&lt;a href="https://youtube.com" target="_blank"&gt;Open YouTube&lt;/a&gt;</code>`,
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Layout & Structure</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>layout</code> in the terminal to continue.</div>",

    " "
];

export const layout = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🧱 Layout Tags — Giving Your Page a Skeleton</div>",
    "<span class='text-gray-100'>Until now, you’ve written headings, paragraphs, links, and images. Cool. But without structure, it all just stacks up — like a pizza with all toppings in one bite 🥴</span>",
    "<span class='text-green-400'>Layout tags organize your content — they give it bones.</span>",
    " ",
    "<div class='text-pink-400 font-semibold mt-4 mb-1'>🧊 The Div — The Box That Can Hold Anything</div>",
    "<span class='text-yellow-400 font-semibold'>🧠 What is &lt;div&gt;?</span>",
    "<span class='text-gray-100'>It’s a plain, invisible block. Great for grouping elements and applying layout with CSS.</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;div&gt;<br />  &lt;h2&gt;This is a section&lt;/h2&gt;<br />  &lt;p&gt;Some content goes here...&lt;/p&gt;<br />&lt;/div&gt;</code>`,
    "<span class='text-gray-300'>Think of it like 📦: <i>“Hey browser, group these things together. I’ll style them as one block.”</i></span>",
    " ",
    "<div class='text-pink-400 font-semibold mt-4 mb-1'>✂️ The Span — The Inline Wrapper</div>",
    "<span class='text-yellow-400 font-semibold'>🧠 What is &lt;span&gt;?</span>",
    "<span class='text-gray-100'>Unlike &lt;div&gt;, &lt;span&gt; stays inside the line. Perfect for styling part of a sentence.</span>",
    `<code class='bg-[#2f2f47] text-blue-300 px-2 py-0.5 rounded block w-fit'>&lt;p&gt;This is &lt;span style="color: red;"&gt;important&lt;/span&gt; text.&lt;/p&gt;</code>`,
    " ",
    "<div class='text-pink-400 font-semibold mt-4 mb-1'>📌 Semantic Tags — Wrappers with Meaning</div>",
    "<span class='text-gray-100'>Instead of just throwing divs around, semantic tags tell browsers (and screen readers) what a section actually means.</span>",
    "<span class='text-green-400'>They add meaning like: “Hey! This is the header”</span>",
    " ",
    "<div class='grid grid-cols-1 gap-4'>",
    "<div><span class='text-yellow-400 font-semibold'>&lt;header&gt;</span><br /><span class='text-gray-300'>Top section (logo, title, nav)</span></div>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;header&gt;<br />  &lt;h1&gt;CodeNest&lt;/h1&gt;<br />&lt;/header&gt;</code>`,
    "<div><span class='text-yellow-400 font-semibold'>&lt;nav&gt;</span><br /><span class='text-gray-300'>Navigation menus</span></div>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;nav&gt;<br />  &lt;a href='/'&gt;Home&lt;/a&gt;<br />  &lt;a href='/topics'&gt;Topics&lt;/a&gt;<br />&lt;/nav&gt;</code>`,
    "<div><span class='text-yellow-400 font-semibold'>&lt;main&gt;</span><br /><span class='text-gray-300'>Main content (only one per page)</span></div>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;main&gt;<br />  &lt;h2&gt;Welcome to CodeNest&lt;/h2&gt;<br />  &lt;p&gt;Main content here.&lt;/p&gt;<br />&lt;/main&gt;</code>`,
    "<div><span class='text-yellow-400 font-semibold'>&lt;section&gt;</span><br /><span class='text-gray-300'>A standalone part of the page (About, Reviews, etc.)</span></div>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;section&gt;<br />  &lt;h2&gt;Features&lt;/h2&gt;<br />  &lt;p&gt;CodeNest helps you learn in a chill way.&lt;/p&gt;<br />&lt;/section&gt;</code>`,
    "<div><span class='text-yellow-400 font-semibold'>&lt;article&gt;</span><br /><span class='text-gray-300'>Used for blogs or forum posts</span></div>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;article&gt;<br />  &lt;h3&gt;How I mastered HTML&lt;/h3&gt;<br />  &lt;p&gt;Step 1: Coffee. Step 2: CodeNest. Step 3: Profit.&lt;/p&gt;<br />&lt;/article&gt;</code>`,
    "<div><span class='text-yellow-400 font-semibold'>&lt;aside&gt;</span><br /><span class='text-gray-300'>For sidebars, related content, ads</span></div>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;aside&gt;<br />  &lt;h4&gt;More Topics&lt;/h4&gt;<br />  &lt;ul&gt;<br />    &lt;li&gt;CSS Basics&lt;/li&gt;<br />    &lt;li&gt;JavaScript 101&lt;/li&gt;<br />  &lt;/ul&gt;<br />&lt;/aside&gt;</code>`,
    "<div><span class='text-yellow-400 font-semibold'>&lt;footer&gt;</span><br /><span class='text-gray-300'>Bottom section (contacts, copyright)</span></div>",
    `<code class='bg-[#2f2f47] text-yellow-400 px-2 py-0.5 rounded block w-fit'>&lt;footer&gt;<br />  &lt;p&gt;© 2025 CodeNest. All rights reserved.&lt;/p&gt;<br />&lt;/footer&gt;</code>`,
    "</div>",
    " ",
    "<div class='text-pink-400 font-semibold mt-6 mb-2'>📋 TL;DR — When to Use What?</div>",
    `<div class="overflow-auto w-full max-w-[480px] text-zinc-200 text-sm bg-[#1c1c2e] border border-zinc-700/40 rounded-md p-3">
  <pre>
| Tag        | Use It For...                |
|------------|------------------------------|
| &lt;div&gt;      | Generic box/layout wrapper   |
| &lt;span&gt;     | Inline styling in text       |
| &lt;header&gt;   | Top of your page             |
| &lt;nav&gt;      | Navigation links             |
| &lt;main&gt;     | Main body content            |
| &lt;section&gt;  | Dividing parts inside main   |
| &lt;article&gt;  | Standalone content           |
| &lt;aside&gt;    | Side things like ads/related |
| &lt;footer&gt;   | Bottom stuff                 |
</pre>
</div>`,
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Forms</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>forms</code> in the terminal to continue.</div>",

    " "
];

export const forms = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🧾 Forms & Inputs — Making Your Page Listen to People</div>",
    "<span class='text-gray-100'>So far, your page has just talked at users. Now it’s their turn to talk back — to type their name, give feedback, or confess their favorite pizza topping 🍕</span>",
    "<span class='text-green-400'>Enter: <code class='text-yellow-400'>&lt;form&gt;</code> — your page’s way to collect user data.</span>",
    " ",
    "<span class='text-lime-400 font-semibold'>🧠 What’s a Form?</span>",
    "<span class='text-gray-100'>A <code class='text-yellow-400'>&lt;form&gt;</code> is a wrapper for inputs, labels, textareas — anything a user interacts with.</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 rounded block w-fit'>
&lt;form&gt;  &lt;!-- input fields go here --&gt;&lt;/form&gt;
</code>`,
    "<span class='text-gray-300'>Submit it to a server or handle it with JavaScript. Your choice.</span>",
    " ",
    "<span class='text-lime-400 font-semibold'>🧩 Input Types – The Real MVPs</span>",
    "<span class='text-gray-100'>Here’s a breakdown of the most used <code class='text-blue-300'>&lt;input type=\"...\"&gt;</code> options:</span>",
    `<div class="overflow-auto w-full max-w-[480px] text-zinc-200 text-sm bg-[#1c1c2e] border border-zinc-700/40 rounded-md p-3">
<pre>
| Type      | What It Does                             |
|-----------|------------------------------------------|
| text      | Single-line input (e.g., name)           |
| email     | Email format (auto-validates)            |
| password  | Hidden characters                        |
| number    | Only allows numbers                      |
| checkbox  | Yes/no options                           |
| radio     | Choose one from a group                  |
| date      | Date picker popup                        |
| file      | Upload files                             |
| submit    | Submit the form                          |
| reset     | Reset all fields                         |
</pre>
</div>`,
    " ",
    "<span class='text-lime-400 font-semibold'>📋 Example – Simple Form</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 block rounded  w-fit text-sm'>
&lt;form&gt;
  &nbsp;&nbsp;&lt;label for='name'&gt;Name:&lt;/label&gt;
  &nbsp;&nbsp;&lt;input type='text' id='name' /&gt;
  &nbsp;&nbsp;&lt;label for='email'&gt;Email:&lt;/label&gt;
  &nbsp;&nbsp;&lt;input type='email' id='email' /&gt;
  &nbsp;&nbsp;&lt;label for='message'&gt;Message:&lt;/label&gt;
  &nbsp;&nbsp;&lt;textarea id='message' rows='4' cols='30'&gt;&lt;/textarea&gt;
  &nbsp;&nbsp;&lt;button type='submit'&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code>`,
    " ",
    "<span class='text-lime-400 font-semibold'>🔍 Labels — Why They Matter</span>",
    "<span class='text-gray-100'>Use <code class='text-yellow-400'>&lt;label&gt;</code> for accessibility and better UX.</span>",
    `<code class='bg-[#2f2f47] text-yellow-400  rounded block w-fit'>
&lt;label for='username'&gt;Username:&lt;/label&gt;&lt;input id='username' type='text' /&gt;
</code>`,
    "<span class='text-gray-300'>Clicking the label will focus the input. Also helps screen readers 💻🗣️</span>",
    " ",
    "<span class='text-lime-400 font-semibold'>🎯 Radio vs Checkbox</span>",
    "<span class='text-yellow-400 font-semibold'>☑️ Checkbox — pick multiple</span>",
    `<code class='bg-[#2f2f47] text-blue-300  rounded block w-fit'>
&lt;label&gt;&lt;input type='checkbox' /&gt; HTML&lt;/label&gt;
&lt;label&gt;&lt;input type='checkbox' /&gt; CSS&lt;/label&gt;
&lt;label&gt;&lt;input type='checkbox' /&gt; JS&lt;/label&gt;
</code>`,
    " ",
    "<span class='text-yellow-400 font-semibold'>🔘 Radio — pick one only</span>",
    `<code class='bg-[#2f2f47] text-blue-300  rounded block w-fit'>
&lt;label&gt;&lt;input type='radio' name='lang' /&gt; HTML&lt;/label&gt;
&lt;label&gt;&lt;input type='radio' name='lang' /&gt; CSS&lt;/label&gt;
&lt;label&gt;&lt;input type='radio' name='lang' /&gt; JS&lt;/label&gt;
</code>`,
    "<span class='text-gray-300'>All radios in a group must share the same <code class='text-blue-300'>name</code>.</span>",
    " ",
    "<span class='text-lime-400 font-semibold'>🗳️ Dropdown – Select & Option</span>",
    `<code class='bg-[#2f2f47] text-yellow-400  rounded block w-fit'>
&lt;label for='favLang'&gt;Favorite Language:&lt;/label&gt;
    &lt;select id='favLang'&gt;
        &nbsp;&nbsp;&lt;option&gt;HTML&lt;/option&gt;
        &nbsp;&nbsp;&lt;option&gt;CSS&lt;/option&gt;
        &nbsp;&nbsp;&lt;option&gt;JavaScript&lt;/option&gt;
    &lt;/select&gt;
</code>`,
    " ",
    "<span class='text-lime-400 font-semibold'>📤 Submitting the Form</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 block rounded w-fit'>
&lt;form action='/submit' method='POST'&gt;
  &nbsp;&nbsp;&lt;!-- inputs here --&gt;
  &nbsp;&nbsp;&lt;button type='submit'&gt;Send&lt;/button&gt;
&lt;/form&gt;
</code>`,
    "<span class='text-gray-300'>• <span class='text-blue-300'>action</span> = Where data goes</br>• <span class='text-blue-300'>method</span> = POST or GET</span>",
    "<span class='text-gray-400'>Often handled via JavaScript in modern frontend setups.</span>",
    " ",
    "<div class='text-pink-400 font-semibold'>✅ Summary — Form Building Checklist</div>",
    `<p class='text-gray-100 '>
    ✔ Wrap everything in <code class='text-yellow-400'>&lt;form&gt;</code>
    ✔ Use <code class='text-yellow-400'>&lt;label&gt;</code> for accessibility
    ✔ Pick the right <code class='text-blue-300'>&lt;input type=''&gt;</code>
    ✔ Include a <code class='text-yellow-400'>&lt;button type='submit'&gt;</code>
    ✔ Link <code class='text-blue-300'>for</code> and <code class='text-blue-300'>id</code> between label & input
  </p>`,
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Tables</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>table</code> in the terminal to continue.</div>",

    " ",
];

export const tables = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>📊 Tables — Show Data Like a Pro (No More Excel 😎)</div>",
    "<span class='text-gray-100'>Tables = grid of rows and columns. Perfect for mark sheets, price lists, scoreboards, or any structured data.</span>",
    "<div class='mt-2 text-lime-400 font-semibold'>🧠 The Basic Structure</div>",
    "<span class='text-gray-100'>Here’s a clean HTML table example:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2  rounded block w-fit'>
&lt;table&gt;
&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Age&lt;/th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;City&lt;/th&gt;
&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;abcde&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;21&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Kanpur&lt;/td&gt;
&nbsp;&nbsp;&lt;/tr&gt;
&lt;/table&gt;
</code>`,
    " ",
    "<div class='text-pink-400 font-semibold mt-3'>📖 Tag Breakdown</div>",
    `<div class="overflow-auto w-full max-w-[480px] text-zinc-200 text-sm bg-[#1c1c2e] border border-zinc-700/40 rounded-md p-3">
<pre>
| Tag       | Meaning                                   |
|-----------|-------------------------------------------|
| &lt;table&gt;   | Starts the table                          |
| &lt;tr&gt;      | Table Row                                 |
| &lt;th&gt;      | Table Header (bold + centered by default) |
| &lt;td&gt;      | Table Data (regular cell)                 |
</pre>
</div>`,
    "<span class='text-lime-400 mt-3'>🖼️ Visual Result:</span>",
    `<pre class='text-sm text-gray-300'>
| Name   | Age | City   |
|--------|-----|--------|
| abcde  | 21  | Kanpur |
| qwerty | 22  | Delhi  |
</pre>`,
    "<span class='text-gray-400'>Every <code class='text-yellow-400'>&lt;tr&gt;</code> is a row, <code class='text-yellow-400'>&lt;th&gt;</code> is a heading, <code class='text-yellow-400'>&lt;td&gt;</code> is a cell.</span>",
    " ",
    "<div class='text-lime-400 font-semibold'>⚙️ Adding Borders</div>",
    "<span class='text-gray-100'>By default, tables look boring. Add border magic:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2 rounded block w-fit'>
&lt;table border='1'&gt;
&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Role&lt;/th&gt;
&nbsp;&nbsp;&lt;/tr&gt;
&nbsp;&nbsp;&lt;tr&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;abcde&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Frontend Dev&lt;/td&gt;
&nbsp;&nbsp;&lt;/tr&gt;
&lt;/table&gt;
</code>`,
    "<span class='text-gray-400'>Or better yet, use CSS 👇</span>",
    `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2  rounded block w-fit'>
&lt;style&gt;
&nbsp;&nbsp;table { border-collapse: collapse; width: 100%; }
&nbsp;&nbsp;th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
&nbsp;&nbsp;th { background-color: #f5f5f5; }
&lt;/style&gt;
</code>`,
    " ",
    "<div class='text-lime-400 font-semibold'>🧬 Extra Tags You Might Use</div>",
    `<div class="overflow-auto w-full max-w-[480px] text-zinc-200 text-sm bg-[#1c1c2e] border border-zinc-700/40 rounded-md p-3">
<pre>
| Tag       | Use                                   |
|-----------|---------------------------------------|
| &lt;thead&gt;   | Grouping header rows                  |
| &lt;tbody&gt;   | Grouping body rows                    |
| &lt;tfoot&gt;   | Grouping footer rows (like totals)    |
| colspan   | Merge cells across columns            |
| rowspan   | Merge cells across rows               |
</pre>
</div>`,

    "<div class='text-pink-400 font-semibold mt-3'>✨ Example: Colspan</div>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2  rounded block w-fit'>
&lt;tr&gt;
&nbsp;&nbsp;&lt;td colspan='2'&gt;Total: ₹1000&lt;/td&gt;
&lt;/tr&gt;
</code>`,
    "<span class='text-gray-300'>This cell takes 2 columns’ space.</span>",
    " ",
    "<div class='text-red-400 font-semibold'>🚨 When NOT to Use Tables</div>",
    "<span class='text-gray-100'>Tables are for data, not layouts. Use CSS Grid or Flexbox for positioning.</span>",
    "<span class='text-gray-400 italic'>Back in the day, full websites were built with tables... dark times 😬</span>",
    " ",
    "<div class='text-pink-400 font-semibold mt-4 mb-2'>✅ Quick Recap</div>",
    `✔ Use <code class='text-yellow-400'>&lt;table&gt;</code> for tabular data
✔ <code class='text-yellow-400'>&lt;tr&gt;</code> = Table row
✔ <code class='text-yellow-400'>&lt;th&gt;</code> = Heading cell
✔ <code class='text-yellow-400'>&lt;td&gt;</code> = Regular data cell
✔ Use <code class='text-blue-300'>colspan / rowspan</code> to merge
✔ Style with CSS, not just <code>border=1</code>
  </ul>`,
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Multimedia in HTML</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>multi media</code> in the terminal to continue.</div>",
    " ",
];

export const media = [
    " ",
    "<div class='border-b border-purple-400/30 pb-1 mb-3 text-purple-300 text-lg font-bold'>🎞️ Multimedia in HTML – Time to Add Life to Your Page</div>",
    "<span class='text-gray-100'>Text-only pages? Meh. Add videos, audio, and images to make it pop 🔥</span>",
    " ",
    "<div class='text-lime-400 font-semibold mt-2'>🧠 Images – Quick Refresher</div>",
    "<span class='text-gray-100'>Revisiting the classic:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm rounded block w-fit'>&lt;img src="cutecat.jpg" alt="sleepy cat" width="300" /&gt;</code>`,
    `<code>src</code> = image file path
<code>alt</code> = accessibility text
code>width/height</code> = controls image size`,
    "<span class='text-gray-400'>✅ Supports: JPG, PNG, SVG, GIF, WebP</span>",
    " ",
    "<div class='text-lime-400 font-semibold mt-4'>📽️ Embedding Videos – Let’s Get Cinematic</div>",
    "<span class='text-gray-100'>Use the <code class='text-yellow-400'>&lt;video&gt;</code> tag:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2 py-1 rounded block w-fit'>&lt;video width="400" controls&gt;
&nbsp;&nbsp;&lt;source src="video.mp4" type="video/mp4" /&gt;
&nbsp;&nbsp;Your browser does not support the video tag.
&lt;/video&gt;
</code>`,
    " ",
    "<span class='text-pink-400 font-semibold'>Useful Attributes:</span>",
    `<code>controls</code> – show playback buttons
<code>autoplay</code> – starts playing automatically (needs <code>muted</code> too)
<code>loop</code> – repeat forever
<code>poster</code> – thumbnail before play`,
    "<span class='text-gray-100'>Example:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2 py-1 rounded block w-fit'>&lt;video width="400" controls poster="thumbnail.jpg" autoplay muted loop&gt;
&nbsp;&nbsp;&lt;source src="dance.mp4" type="video/mp4" /&gt;
&lt;/video&gt;</code>`,
    " ",
    "<div class='text-lime-400 font-semibold mt-4'>🔊 Embedding Audio – Play That Tune 🎧</div>",
    "<span class='text-gray-100'>Use the <code class='text-yellow-400'>&lt;audio&gt;</code> tag:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2 py-1 rounded block w-fit'>&lt;audio controls&gt;
&nbsp;&nbsp;&lt;source src="bgmusic.mp3" type="audio/mpeg" /&gt;
&nbsp;&nbsp;Your browser does not support the audio element.
&lt;/audio&gt;</code>`,
    "<span class='text-gray-400'>Same attributes as <code>&lt;video&gt;</code>: autoplay, loop, muted...</span>",
    " ",
    "<div class='text-lime-400 font-semibold mt-4'>🌐 Embedding YouTube Videos</div>",
    "<span class='text-gray-100'>Use an <code class='text-yellow-400'>&lt;iframe&gt;</code> to embed videos from YouTube:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2 py-1 rounded block w-fit'>&lt;iframe width="560" height="315"
&nbsp;&nbsp;src="https://www.youtube.com/embed/VIDEO_ID"
&nbsp;&nbsp;title="YouTube video" frameborder="0" allowfullscreen&gt;
&lt;/iframe&gt;</code>`,
    "<span class='text-gray-400'>Copy this from YouTube → Share → Embed</span>",
    "<span class='text-gray-300'>Example: <code>https://www.youtube.com/watch?v=abc123</code> → VIDEO_ID = <code>abc123</code></span>",
    " ",
    "<div class='text-lime-400 font-semibold mt-4'>🧠 When to Use What?</div>",
    `<div class="overflow-auto w-full max-w-[480px] text-zinc-200 text-sm bg-[#1c1c2e] border border-zinc-700/40 rounded-md p-3">
<pre>| Media              | Use...     |
|--------------------|------------|
| Image              | &lt;img&gt;      |
| Self-hosted Video  | &lt;video&gt;    |
| Self-hosted Audio  | &lt;audio&gt;    |
| YouTube/Other site | &lt;iframe&gt;   | 
</pre>
</div>`,

    " ",
    "<div class='text-red-400 font-semibold mt-4'>⚠️ Pro Tips</div>",
    `🚫 Don’t autoplay sound — users hate it
✅ Always add fallback text like “Your browser doesn’t support…”
🎞️ Use <code>.webm</code> for optimized videos
📦 Compress media files to reduce load times`,
    " ",
    "<div class='text-pink-400 font-semibold mt-4'>✅ Recap Time</div>",
    `<code>&lt;video&gt;</code> – embed local videos
<code>&lt;audio&gt;</code> – embed music/sound
<code>&lt;iframe&gt;</code> – embed from YouTube or other sites
Add <code>controls</code>, optionally <code>autoplay muted loop</code>`,
    "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>HTML Best Practices</span></div>",
    "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>best practices</code> in the terminal to continue.</div>",
    " ",
];

export const best = [
    " ",
    "<div class='border-b border-green-400/40 pb-1 mb-3 text-green-300 text-lg font-bold'>✅ HTML Best Practices – Writing Clean, Professional Code from Day 1</div>",
    "<span class='text-gray-100'>You’ve learned the tags — now let’s write them like a pro. Because messy code is like pineapple on pizza 🍍... controversial and hard to digest 😬</span>",
    " ",
    "<div class='text-yellow-300 font-semibold mt-4'>🧼 1. Always Use Proper Structure</div>",
    "<span class='text-gray-100'>Start with the basic skeleton:</span>",
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2 py-1 rounded block w-fit'>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&nbsp;&nbsp;&lt;head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;My First Page&lt;/title&gt;
&nbsp;&nbsp;&lt;/head&gt;
&nbsp;&nbsp;&lt;body&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- All visible stuff goes here --&gt;
&nbsp;&nbsp;&lt;/body&gt;
&lt;/html&gt;
</code>`,
    "<span class='text-gray-400'>✅ Helps browsers understand your page correctly</span>",
    " ",
    "<div class='text-yellow-300 font-semibold mt-4'>📛 2. Use Meaningful Tags</div>",
    "<span class='text-gray-100'>Don’t write this:</span>",
    `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>&lt;div&gt;Header&lt;/div&gt;
&lt;div&gt;Main content&lt;/div&gt;
&lt;div&gt;Footer&lt;/div&gt;
</code>`,
    "<span class='text-gray-100'>Instead, do this:</span>",
    `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>&lt;header&gt;Header&lt;/header&gt;
&lt;main&gt;Main content&lt;/main&gt;
&lt;footer&gt;Footer&lt;/footer&gt;
</code>`,
    "<span class='text-gray-400'>🧠 Helps with SEO, accessibility, and readability</span>",
    " ",
    "<div class='text-yellow-300 font-semibold mt-4'>🏷️ 3. Use Alt Text in Images</div>",
    "<span class='text-gray-100'>Bad:</span>",
    `<code class='bg-[#2f2f47] text-red-400 text-sm px-2 py-1 rounded block w-fit'>&lt;img src=\"cat.jpg\" /&gt;</code>`,
    "<span class='text-gray-100'>Better:</span>",
    `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>&lt;img src=\"cat.jpg\" alt=\"A sleepy orange cat\" /&gt;</code>`,
    `Accessible for screen readers
Fallback if image doesn’t load`,
    " ",
    "<div class='text-yellow-300 font-semibold mt-4'>🔤 4. Write Clear and Descriptive Code</div>",
    `✅ Indent properly (tabs or spaces – be consistent)
✅ Use meaningful IDs/classes
✅ Comment sections`,
    `<code class='bg-[#2f2f47] text-yellow-400 text-sm px-2 py-1 rounded block w-fit'>&lt;!-- Navigation bar starts here --&gt;
&lt;nav&gt;...&lt;/nav&gt;</code>`,
    " ",
    "<div class='text-yellow-300 font-semibold mt-4'>🔁 5. Reuse and Organize</div>",
    `Split code into logical sections
Make components reusable (header, footer)
Use external CSS/JS later for cleaner files`,
    " ",
    "<div class='text-yellow-300 font-semibold mt-4'>⚙️ 6. Validate Your Code</div>",
    "<span class='text-gray-100'>Run your code through:</span>",
    "<a class='text-blue-400 underline' href='https://validator.w3.org/' target='_blank'>https://validator.w3.org/</a>",
    `✅ Catch unclosed tags
✅ Fix nesting issues
✅ Clean typos in attributes`,
    " ",
    "<div class='text-pink-400 font-semibold mt-6'>🧠 Final Recap – What You’ve Learned</div>",
    `✅ The true purpose of HTML — structure & meaning
✅ Headings, paragraphs, links, images
✅ Lists (ordered & unordered)
✅ Layout tags: <code>div</code>, <code>span</code>, semantic tags
✅ Forms – make your site interactive
✅ Tables – for structured data
✅ Multimedia – video, audio, YouTube
✅ Best practices – how to write like a developer from Day 1`,
    " ",
    "<div class='text-green-400 font-semibold mt-6'>🐣 From Beginner to Builder</div>",
    "<span class='text-gray-100'>You’re not just learning tags. You’re crafting web pages with real structure and logic.</span>",
    "<span class='text-gray-300 italic'>Your site won’t just function — it’ll feel <span class='text-purple-300 font-bold'>designed</span>.</span>",
    "<span class='text-pink-300 font-semibold'>Go build something awesome — you’re officially HTML-ready 💫</span>",
    "<div class='text-green-400 text-sm italic mt-4'>🎉 You’ve reached the end of the HTML module!</div>",
    "<div class='text-gray-400 text-sm italic'>Ready to dive into CSS? Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>css</code> to begin styling like a pro! 🎨</div>",

    " ",
];