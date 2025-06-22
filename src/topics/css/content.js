export const intro = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-1'>🌈 What is CSS?</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<span class='text-gray-100'>CSS = <span class='text-green-300 font-semibold'>Cascading Style Sheets</span> — the glow-up your HTML needs ✨</span>",
  "<span class='text-gray-300'>HTML = skeleton 🦴, CSS = outfit 💃, vibe 🎧, and attitude 😎</span>",
  "<div class='bg-[#2f2f47] text-sm text-green-400 px-2 py-1 rounded mt-3 w-fit'>&lt;p&gt;Hello world!&lt;/p&gt;</div>",
  "<div class='mt-1 italic text-gray-400'>Output: <span class='text-white'>Hello world!</span></div>",
  "<div class='bg-[#2f2f47] text-sm text-pink-400 px-2 py-1 rounded w-fit'>&lt;p style=\"color: hotpink; font-size: 24px;\"&gt;Hello world!&lt;/p&gt;</div>",
  "<div class='mt-1 italic text-gray-400'>Output: <span style='color: hotpink; font-size: 24px;'>Hello world!</span></div>",
  "<span class='text-green-300 font-medium'>Boom — now she’s glowing 💅</span>",
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🧾 CSS Syntax — Looks Fancy, But It's Simple</div>",
  "<span class='text-gray-100'>Basic pattern:</span>",
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>selector {
  property: value;
}
</code>`,
  "<ul class='list-disc list-inside text-gray-300 mt-2 space-y-1'>" +
  "<li><b>Selector</b> → Who? (e.g., <code>p</code>, <code>.card</code>, <code>header</code>)</li>" +
  "<li><b>Property</b> → What are you changing?</li>" +
  "<li><b>Value</b> → What are you changing it to?</li>" +
  "</ul>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit mt-2'>h1 {
  color: royalblue;
  font-family: "Poppins", sans-serif;
  text-align: center;
}
</code>`,
  "<div class='mt-1 italic text-gray-400'>Output: <h1 style='color: royalblue; font-family: Poppins, sans-serif; text-align: center;'>Hello I'm h1</h1></div>",
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🎯 3 Ways to Add CSS</div>",
  "<div class='text-pink-400 mt-2'>1. Inline (quick & dirty)</div>",
  "<div class='bg-[#2f2f47] text-sm text-pink-300 px-2 py-1 rounded w-fit'>&lt;p style=\"color: red;\"&gt;I'm spicy red!&lt;/p&gt;</div>",
  "<div class='mt-1 italic text-gray-400'>Output: <span style='color: red;'>I'm spicy red!</span></div>",
  "<span class='text-gray-400'>⚠️ Good for testing. Bad for big projects.</span>",
  "<div class='text-pink-400 mt-3'>2. Internal (inside <code>&lt;style&gt;</code>)</div>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>&lt;head&gt;
  &lt;style&gt;
    body {
      background-color: #f9f9f9;
    }
  &lt;/style&gt;
&lt;/head&gt;
</code>`,
  "<span class='text-gray-400'>Great for small projects!</span>",
  "<div class='text-pink-400 mt-3'>3. External (the pro way)</div>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>&lt;link rel=\"stylesheet\" href=\"styles.css\" /&gt;</code>`,
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>body {
  background-color: #ffffff;
  color: #333;
}
</code>`,
  "<div class='mt-1 italic text-gray-400'>Output: <div style='background-color: #ffffff; color: #333;'>This is body text</div></div>",
  "<span class='text-green-300'>✅ Best for organized, large-scale codebases.</span>",
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🍭 CSS Properties You’ll Love</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 mt-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr>
        <th class='py-1 px-2 border border-gray-700'>Property</th>
        <th class='py-1 px-2 border border-gray-700'>What It Does</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'><code>color</code></td><td class='py-1 px-2 border border-gray-700'>Text color</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>background</code></td><td class='py-1 px-2 border border-gray-700'>Background color/image</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>font-size</code></td><td class='py-1 px-2 border border-gray-700'>Text size</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>font-family</code></td><td class='py-1 px-2 border border-gray-700'>Font style</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>margin</code></td><td class='py-1 px-2 border border-gray-700'>Space outside element</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>padding</code></td><td class='py-1 px-2 border border-gray-700'>Space inside element</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>border</code></td><td class='py-1 px-2 border border-gray-700'>Adds border around element</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>width / height</code></td><td class='py-1 px-2 border border-gray-700'>Set dimensions</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>text-align</code></td><td class='py-1 px-2 border border-gray-700'>Aligns text</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>display</code></td><td class='py-1 px-2 border border-gray-700'>Layout mode (inline, flex, etc.)</td></tr>
    </tbody>
  </table>`,
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🧃 Button Example with CSS</div>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>&lt;button class="cool-btn"&gt;Click Me&lt;/button&gt;</code>`,
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>.cool-btn {
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}
.cool-btn:hover {
  transform: scale(1.05);
}
</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div><button style='background-color: #6c5ce7; color: white; border: none; padding: 12px 20px; font-size: 16px; border-radius: 8px; cursor: pointer;'>Click Me</button>",
  "<span class='text-green-300'>👀 Now that button's got <b>vibes</b>.</span>",
  " ",
  "<div class='text-green-400 font-semibold mt-6'>🧠 TL;DR</div>",
  `• <code>CSS</code> = Style engine for your HTML
• 3 ways to use: <b>inline</b>, <b>internal</b>, <b>external</b>
• Use <code>selector { property: value; }</code>
• Style common things: <code>color</code>, <code>font</code>, <code>margin</code>, <code>padding</code>, <code>display</code>`,
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>The CSS Box Model</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>box model</code> in the terminal to continue.</div>",

  " ",
];

export const boxModel = [
  "<div class='text-pink-300 text-lg font-bold mb-1'>🧱 The CSS Box Model – The Backbone of Every Element</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<p class='text-gray-200'>If your layout keeps breaking or spacing feels weird, this is your golden ticket 🎫</p>",
  "<p class='text-gray-300 italic'>Understand this and those rogue divs will fear you 😤</p>",
  "<div class='text-yellow-300 font-semibold mt-4'>🎁 Every Element is a Box</div>",
  "<p class='text-gray-100'>Each HTML element is like an onion 🧅 with these layers:</p>",
  `<pre class='bg-[#2f2f47] text-gray-200 text-sm p-3 rounded mt-2'>
|-----------------------------|
|         margin              |
|  |---------------------|    |
|  |      border         |    |
|  |  |-------------|    |    |
|  |  |  padding    |    |    |
|  |  |  content    |    |    |
|  |  |-------------|    |    |
|  |---------------------|    |
|-----------------------------|
</pre>`,
  "<div class='text-green-300 font-semibold mt-4'>🧠 Layer Breakdown</div>",
  "<span class='text-pink-400 font-medium'>1. Content</span>",
  "<p class='text-gray-200'>Your actual text or image. E.g.:</p>",
  "<code class='bg-[#2f2f47] text-sm text-blue-300 px-2 py-1 rounded block w-fit'>&lt;p&gt;Hello World&lt;/p&gt;</code>",
  "<div class='mt-1 italic text-gray-400'>Output: <p>Hello World</p></div>",
  "<span class='text-pink-400 font-medium'>2. Padding</span>",
  "<p class='text-gray-200'>Space <i>inside</i> the box, between content and border:</p>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>p {
  padding: 20px;
}</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div><p style='background:#2f2f47; padding: 20px; color:white;'>This paragraph has 20px padding</p>",
  "<span class='text-pink-400 font-medium'>3. Border</span>",
  "<p class='text-gray-200'>Visible outline of the element. Can be styled:</p>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>p {
  border: 2px solid black;
}</code>`,
  "<ul class='text-gray-300 list-disc list-inside mt-2 space-y-1'>" +
  "<li><code>dotted</code></li>" +
  "<li><code>dashed</code></li>" +
  "<li><code>solid</code></li>" +
  "<li><code>none</code></li>" +
  "<li><code>double</code> (fancy!)</li>" +
  "</ul>",
  "<div class='mt-1 italic text-gray-400'>Output:</div><p style='border: 2px solid black; padding: 10px;'>With a border</p>",
  "<span class='text-pink-400 font-medium'>4. Margin</span>",
  "<p class='text-gray-200'>Space <i>outside</i> the element. Creates gap from others.</p>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>p {
  margin: 30px;
}
</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div><p style='margin: 30px; background: #2f2f47; padding: 10px; color: white;'>With margin around</p>",
  "<div class='text-yellow-300 font-semibold mt-4'>🧪 Real-Life Example</div>",
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>.card {
  padding: 20px;
  border: 2px solid #333;
  margin: 40px;
}</code>`,
  "<p class='text-gray-100'>This adds:</p>",
  "<ul class='text-gray-300 list-disc list-inside space-y-1'>" +
  "<li>🧃 20px padding inside</li>" +
  "<li>🔳 2px solid border</li>" +
  "<li>🚀 40px margin outside</li>" +
  "</ul>",
  "<div class='mt-1 italic text-gray-400'>Output:</div><div style='padding:20px; border:2px solid #333; margin:40px; background:#2f2f47; color:white;'>I’m a .card with padding, border, and margin</div>",
  "<div class='text-yellow-300 font-semibold mt-4'>🛠️ Debugging Hack</div>",
  "<p class='text-gray-200'>Lost in layout? Add this to see real box boundaries:</p>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>* {
  outline: 1px solid red;
}</code>`,
  "<p class='text-gray-400 italic'>Lifesaver 🔥</p>",
  "<div class='text-yellow-300 font-semibold mt-4'>💡 Bonus: `box-sizing`</div>",
  "<p class='text-gray-200'>Want consistent sizing? Always write this:</p>",
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>* {
  box-sizing: border-box;
}</code>`,
  "<p class='text-green-300'>✅ Includes padding & border inside total width/height.<br/>Saves your sanity.</p>",
  "<div class='text-green-400 font-semibold mt-4'>🔚 TL;DR</div>",
  "<ul class='text-gray-300 list-disc list-inside space-y-1'>" +
  "<li>Every element = box</li>" +
  "<li><b>Content → Padding → Border → Margin</b></li>" +
  "<li><code>padding</code> = inside spacing</li>" +
  "<li><code>margin</code> = outside spacing</li>" +
  "<li><code>box-sizing: border-box</code> = less pain</li>" +
  "</ul>",
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>id vs class</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>id vs class</code> in the terminal to continue.</div>",

  " "
];

export const idVsClass = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-1'>🎯 <code class='text-yellow-400'>id</code> vs <code class='text-yellow-400'>class</code> in CSS — The Targeting Game</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<span class='text-gray-100'>You’ve seen them in HTML. Now let's style like a <span class='text-green-300 font-semibold'>sniper</span>, not a shotgun 😎</span>",
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🔹 <code class='text-yellow-400'>id</code> — The One and Only</div>",
  "<span class='text-gray-100'>Think of <code class='text-yellow-400'>id</code> like an Aadhaar number — unique and non-repeatable.</span>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit mt-1'>&lt;h1 id="main-heading"&gt;Welcome to CodeNest&lt;/h1&gt;</code>`,
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>#main-heading {
  color: #e84393;
  font-size: 32px;
}</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div><h1 style='color:#e84393; font-size:32px;'>Welcome to CodeNest</h1>",
  "<span class='text-green-300'>✅ Use <code>id</code> for targeting one-of-a-kind elements.</span>",
  "<span class='text-red-300'>⚠️ Don't overuse — it has higher specificity and can mess with overrides later.</span>",
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🔸 <code class='text-yellow-400'>class</code> — The Squad Leader</div>",
  "<span class='text-gray-100'>Think of <code class='text-yellow-400'>class</code> like a school uniform — one style, many elements.</span>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit mt-1'>&lt;p class="tagline"&gt;Learn. Build. Repeat.&lt;/p&gt;<br />
&lt;p class="tagline"&gt;Simple lessons for complex minds.&lt;/p&gt;</code>`,
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>.tagline {
  font-style: italic;
  color: #636e72;
}</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<p class='italic text-[#636e72]'>Learn. Build. Repeat.</p>" +
  "<p class='italic text-[#636e72]'>Simple lessons for complex minds.</p>",
  "<span class='text-green-300'>✅ Perfect for shared styles — buttons, cards, navbars.</span>",
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>📊 Quick Comparison</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 mt-1'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr>
        <th class='py-1 px-2 border border-gray-700'>Feature</th>
        <th class='py-1 px-2 border border-gray-700'><code class='text-yellow-400'>id</code></th>
        <th class='py-1 px-2 border border-gray-700'><code class='text-yellow-400'>class</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class='py-1 px-2 border border-gray-700'>Uniqueness</td>
        <td class='py-1 px-2 border border-gray-700'>One per element</td>
        <td class='py-1 px-2 border border-gray-700'>Many elements can share</td>
      </tr>
      <tr>
        <td class='py-1 px-2 border border-gray-700'>Selector</td>
        <td class='py-1 px-2 border border-gray-700'><code>#id-name</code></td>
        <td class='py-1 px-2 border border-gray-700'><code>.class-name</code></td>
      </tr>
      <tr>
        <td class='py-1 px-2 border border-gray-700'>Use Case</td>
        <td class='py-1 px-2 border border-gray-700'>Unique component</td>
        <td class='py-1 px-2 border border-gray-700'>Reusable styles</td>
      </tr>
      <tr>
        <td class='py-1 px-2 border border-gray-700'>Priority</td>
        <td class='py-1 px-2 border border-gray-700'>Higher specificity</td>
        <td class='py-1 px-2 border border-gray-700'>Lower specificity</td>
      </tr>
    </tbody>
  </table>`,
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>💣 Can You Mix Them?</div>",
  "<span class='text-gray-100'>Yes — and it’s powerful!</span>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>&lt;div id="intro" class="card highlight"&gt;<br />
&nbsp;&nbsp;Hello, world!<br />
&lt;/div&gt;</code>`,
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>#intro {
  font-size: 20px;
}<br />
.card {
  padding: 16px;
}<br />
.highlight {
  background-color: #ffeaa8;
  color: "black";
}</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div style='font-size:20px; padding:16px; background-color:#ffeaa8; color:#000000;'>Hello, world!</div>",
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🧠 Selector Syntax Recap</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr>
        <th class='py-1 px-2 border border-gray-700'>Selector</th>
        <th class='py-1 px-2 border border-gray-700'>Targets</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'><code>#idName</code></td><td class='py-1 px-2 border border-gray-700'>One specific element</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>.className</code></td><td class='py-1 px-2 border border-gray-700'>All with that class</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>tagname</code></td><td class='py-1 px-2 border border-gray-700'>All of that tag</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>div.className</code></td><td class='py-1 px-2 border border-gray-700'>Only divs with that class</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>div p</code></td><td class='py-1 px-2 border border-gray-700'>All p inside divs</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>.btn:hover</code></td><td class='py-1 px-2 border border-gray-700'>Hover effect on .btn</td></tr>
    </tbody>
  </table>`,
  " ",
  "<div class='text-yellow-300 font-semibold mt-4'>🔥 Real-Life Example</div>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>
&lt;button class="btn btn-primary"&gt;Submit&lt;/button&gt;
</code>`,
  `<code class='bg-[#2f2f47] text-pink-400 text-sm px-2 py-1 rounded block w-fit'>
.btn {
  padding: 12px 20px;
  border-radius: 8px;
}<br />
.btn-primary {
  background-color: #0984e3;
  color: white;
}
</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<button style='padding:12px 20px; border-radius:8px; background-color:#0984e3; color:white;'>Submit</button>",
  "<span class='text-green-300'>🎯 <code>.btn</code> = shared style</span><br />" +
  "<span class='text-green-300'>🎯 <code>.btn-primary</code> = extra flair</span>",
  " ",
  "<div class='text-green-400 font-semibold mt-6'>🧠 TL;DR</div>",
  "<ul class='text-gray-300 list-disc list-inside space-y-1'>" +
  "<li><code>id</code> = One special element</li>" +
  "<li><code>class</code> = Reusable styles</li>" +
  "<li>✅ Always prefer <code>class</code> for styling</li>" +
  "<li>💪 Combine selectors for powerful, flexible styles</li>" +
  "</ul>",
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Display Property</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>display</code> in the terminal to continue.</div>",
  " ",
];

export const display = [
  "<div class='text-pink-300 text-lg font-bold mb-1'>🧱 What is <code class='text-yellow-300'>display</code> in CSS?</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<p class='text-gray-200'>Every HTML element has a <code class='text-yellow-300'>display</code> type.</p>",
  "<p class='text-gray-300'>It defines how it behaves — inline, block, invisible, or layout wizard 🧙‍♂️</p>",
  "<div class='text-yellow-300 font-semibold mt-4'>🥇 Default Display Types</div>",
  "<p class='text-pink-400 font-medium mt-2'>1. <code>block</code></p>",
  "<ul class='text-gray-300 list-disc list-inside space-y-1'>" +
  "<li>Takes full width</li>" +
  "<li>Starts on a new line</li>" +
  "<li>Examples: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code></li>" +
  "</ul>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit mt-2'>&lt;p&gt;Hello&lt;/p&gt;
&lt;p&gt;World&lt;/p&gt;
</code>
<span class='text-green-300'>👆 They’ll stack top to bottom.</span>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-white'><p>Hello</p><p>World</p></div>",
  "<p class='text-pink-400 font-medium mt-4'>2. <code>inline</code></p>",
  "<ul class='text-gray-300 list-disc list-inside space-y-1'>" +
  "<li>Takes only as much width as needed</li>" +
  "<li>Can sit beside others</li>" +
  "<li>Examples: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code></li>" +
  "</ul>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit mt-2'>&lt;span&gt;Hello&lt;/span&gt; &lt;span&gt;World&lt;/span&gt;
</code>
<span class='text-green-300'>👆 Side-by-side layout.</span>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-white'><span>Hello</span> <span>World</span></div>",
  "<div class='text-yellow-300 font-semibold mt-4'>🥈 Modified Display Types</div>",
  "<p class='text-pink-400 font-medium mt-2'>3. <code>inline-block</code></p>",
  "<p class='text-gray-200'>Like inline but supports width, height, padding.</p>",
  "<p class='text-gray-300'>Best for <b>buttons</b>, <b>badges</b>, etc.</p>",
  "<p class='text-pink-400 font-medium mt-4'>4. <code>none</code></p>",
  "<p class='text-gray-200'>Hides the element completely — like magic 🎩</p>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>&lt;p class="bye"&gt;You can't see me&lt;/p&gt;
&lt;style&gt;
  .bye {
    display: none;
  }
&lt;/style&gt;
</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-white'><p style='display: none;'>You can't see me</p></div>",
  "<div class='text-yellow-300 font-semibold mt-4'>🌟 Flex — The Real MVP</div>",
  "<p class='text-gray-200'>Display: flex = layout freedom</p>",
  "<p class='text-gray-300'>Children line up like a team:</p>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>&lt;div class="container"&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;Two&lt;/div&gt;
  &lt;div&gt;Three&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
  .container {
    display: flex;
  }
&lt;/style&gt;</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-white flex gap-2'><div>One</div><div>Two</div><div>Three</div></div>",
  "<p class='text-green-300'>👆 Items now align horizontally.</p>",
  "<p class='text-pink-400 font-medium mt-3'>Bonus Flex Powers</p>",
  `<code class='bg-[#2f2f47] text-green-400 text-sm px-2 py-1 rounded block w-fit'>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-white grid grid-cols-3 gap-5'><div class='bg-pink-400 p-2'>1</div><div class='bg-pink-400 p-2'>2</div><div class='bg-pink-400 p-2'>3</div></div>",
  "<div class='text-yellow-300 font-semibold mt-4'>🧊 Grid — The Big Bro of Flex</div>",
  "<p class='text-gray-200'>Full control of rows + columns</p>",
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
</code>
<p class='text-green-300'>You just made 3 equal-width columns ✨</p>
<p class='text-gray-300'>Bonus: <code>grid-auto-rows: 100px;</code> adds auto row height</p>`,
  "<div class='text-green-400 font-semibold mt-4'>🧠 TL;DR — Display Types</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 mt-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr>
        <th class='py-1 px-2 border border-gray-700'>Type</th>
        <th class='py-1 px-2 border border-gray-700'>What It Does</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'><code>block</code></td><td class='py-1 px-2 border border-gray-700'>Full-width, new line</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>inline</code></td><td class='py-1 px-2 border border-gray-700'>Inline flow, can't set width/height</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>inline-block</code></td><td class='py-1 px-2 border border-gray-700'>Inline with block features</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>none</code></td><td class='py-1 px-2 border border-gray-700'>Hides element</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>flex</code></td><td class='py-1 px-2 border border-gray-700'>One-dimensional layout</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>grid</code></td><td class='py-1 px-2 border border-gray-700'>Two-dimensional layout</td></tr>
    </tbody>
  </table>`,
  "<div class='text-green-400 font-semibold mt-4'>👑 Summary</div>",
  "<ul class='text-gray-300 list-disc list-inside space-y-1'>" +
  "<li><code>block</code> and <code>inline</code> = default types</li>" +
  "<li><code>flex</code> = easy horizontal/vertical layout</li>" +
  "<li><code>grid</code> = rows + columns (great for layout)</li>" +
  "<li><code>none</code> = invisibility cloak 🧙‍♂️</li>" +
  "</ul>",
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Colors, Themes & Fonts</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>colors, themes, and fonts</code> in the terminal to continue.</div>",
  " ",
];

export const colorsFonts = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-1'>🎨 1. Colors — The Vibe Makers</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<p class='text-gray-200'>Colors give emotion to your website.</p>",
  "<p class='text-gray-300'>Let’s spice up that boring black-and-white look 🌶️</p>",
  "<div class='text-yellow-300 font-semibold mt-3'>🔹 Basic Color Names</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>color: red;
background-color: black;
</code>
<p class='text-gray-400 italic mt-1'>But we’re cooler than that 😎</p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-red-500 bg-black px-2 py-1 w-fit'>Red on Black</div>",
  "<div class='text-yellow-300 font-semibold mt-3'>🔸 HEX Codes</div>",
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>color: #e74c3c;        /* Red */
background: #2c3e50;   /* Dark Blue Gray */
</code>
<p class='text-gray-300'>HEX = <code>RRGGBB</code> from <code>00</code> (dark) to <code>FF</code> (bright)</p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-[#e74c3c] bg-[#2c3e50] px-2 py-1 w-fit'>HEX Colors Applied</div>",
  "<div class='text-yellow-300 font-semibold mt-3'>🔸 RGB & RGBA</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>color: rgb(255, 255, 255);   /* white */
color: rgba(0, 0, 0, 0.7);   /* 70% black */</code>
<p class='text-gray-300'><code>rgba</code> adds transparency — a = alpha</p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-white bg-black/70 px-2 py-1 w-fit'>White on 70% Black</div>",
  "<div class='text-yellow-300 font-semibold mt-3'>🔸 HSL & HSLA (for nerds)</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>color: hsl(0, 100%, 50%);        /* red */
color: hsla(210, 50%, 40%, 0.9);
</code>
<p class='text-gray-300'>Control hue, saturation, and lightness separately 💡</p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='text-[hsl(0,100%,50%)] bg-[hsla(210,50%,40%,0.9)] px-2 py-1 w-fit'>Red on Blueish</div>",
  "<div class='text-pink-300 text-lg font-bold mb-2 mt-4'>🖋️ 2. Fonts — The Personality of Your Text</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<div class='text-yellow-300 font-semibold'>🔹 Font Family</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>font-family: 'Poppins', sans-serif;
</code>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<p class='text-white font-[Poppins] text-lg'>This is Poppins Font</p>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 mt-2'>
  <thead class='bg-[#353547] text-gray-200'>
    <tr><th class='px-2 py-1 border border-gray-700'>Category</th><th class='px-2 py-1 border border-gray-700'>Examples</th></tr>
  </thead>
  <tbody>
    <tr><td class='px-2 py-1 border border-gray-700'>Serif</td><td class='px-2 py-1 border border-gray-700'>Times New Roman, Georgia</td></tr>
    <tr><td class='px-2 py-1 border border-gray-700'>Sans-serif</td><td class='px-2 py-1 border border-gray-700'>Arial, Poppins, Roboto</td></tr>
    <tr><td class='px-2 py-1 border border-gray-700'>Monospace</td><td class='px-2 py-1 border border-gray-700'>Courier New, Consolas</td></tr>
    <tr><td class='px-2 py-1 border border-gray-700'>Cursive</td><td class='px-2 py-1 border border-gray-700'>Comic Sans (nooo), Pacifico</td></tr>
  </tbody>
</table>`,
  "<p class='text-gray-300 mt-2'>🧠 Use <a href='https://fonts.google.com/' target='_blank' class='text-blue-400 underline'>Google Fonts</a> for fresh fonts.</p>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>&lt;link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /&gt;
</code>`,
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>body {
  font-family: 'Roboto', sans-serif;
}
</code>`,
  "<div class='text-yellow-300 font-semibold mt-3'>🔸 Font Size & Weight</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>font-size: 18px;       /* or try 1.2rem */
font-weight: 700;      /* bold */
</code>
<p class='text-gray-300'>Use 100–900 scale or keywords like <code>normal</code>, <code>bold</code></p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<p class='text-white text-[18px] font-bold'>Bold & 18px</p>",
  "<div class='text-yellow-300 font-semibold mt-3'>🔸 Line Height & Letter Spacing</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>line-height: 1.6;         /* readability */
letter-spacing: 1px;      /* more breathing room */
</code>
<p class='text-green-300'>Perfect for headings & hero sections 💫</p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<p class='text-white leading-[1.6] tracking-wider'>Spaced letters & smooth lines</p>",
  "<div class='text-pink-300 text-lg font-bold mt-4'>🎨 3. Themes — Dark, Light & Beyond</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<p class='text-gray-200'>Want your site to match your mood? Go dark, light, or neon 🚀</p>",
  "<div class='text-yellow-300 font-semibold mt-3'>💡 Light vs Dark Mode</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>&lt;body class="light"&gt;
  &lt;h1&gt;Hello abcd&lt;/h1&gt;
&lt;/body&gt;
</code>`,
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>body.light {
  background-color: #ffffff;
  color: #222;
}
body.dark {
  background-color: #1e1e1e;
  color: #f1f1f1;
}
</code>`,
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
</code>
<p class='text-gray-300'>🎯 Just add a button — boom, theme toggles 🎉</p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div class='bg-[#2f2f47] text-[#222] px-4 py-2 w-fit dark:bg-[#1e1e1e] dark:text-[#f1f1f1]'>Theme Preview</div>",
  "<div class='text-yellow-300 font-semibold mt-3'>🌈 Bonus: CSS Variables for Theme Magic</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>:root {
  --bg: #ffffff;
  --text: #222222;
}
body {
  background-color: var(--bg);
  color: var(--text);
}
body.dark {
  --bg: #000000;
  --text: #eeeeee;
}
</code>
<p class='text-gray-300'>No rewrites — just switch variables 🔄</p>`,
  "<div class='mt-1 italic text-gray-400'>Output:</div>" +
  "<div style='--bg: #ffffff; --text: #222222' class='px-4 py-2 w-fit' style='background-color: var(--bg); color: var(--text);'>Variable Based Theme</div>",
  "<div class='text-green-400 font-semibold mt-4'>💡 TL;DR Recap</div>",
  "<ul class='text-gray-300 list-disc list-inside space-y-1'>" +
  "<li>🎨 Use <code>HEX</code>, <code>RGB</code>, <code>HSL</code> to play with color</li>" +
  "<li>🖋️ Load modern fonts via Google Fonts</li>" +
  "<li>🎚️ Adjust font size, spacing, and weight for perfect look</li>" +
  "<li>🌗 Make light/dark themes using <code>class</code> or <code>CSS variables</code></li>" +
  "</ul>",
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>CSS Element Control Squad</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>element control squad</code> in the terminal to continue.</div>",

  " ",
];

export const elementControlSquad = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-1'>👉 Position + Margin vs Padding + Borders & Shadows</div>",
  "<div class='text-gray-200 mb-2'>Let’s call it: <span class='text-yellow-300'>'CSS Element Control Squad'</span> 🧱✨</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<div class='text-yellow-300 font-semibold mt-2'>1️⃣ `position` – Where the heck should this element sit?</div>",
  "<p class='text-gray-300'>By default, every element is <code>static</code> — just go with the HTML flow. But if you want to move things like a boss 💪:</p>",
  "<div class='text-pink-400 font-medium mt-2'>🔸 `relative`</div>",
  "<ul class='list-disc list-inside text-gray-300 space-y-1'>" +
  "<li>Moves the element relative to itself</li>" +
  "<li>Doesn’t affect surrounding elements</li>" +
  "<li><code>top: 20px</code> → moves down | <code>left: 10px</code> → moves right</li>" +
  "<li>✅ Still occupies original space</li>" +
  "</ul>",
  "<div class='text-pink-400 font-medium mt-2'>🔸 `absolute`</div>",
  "<ul class='list-disc list-inside text-gray-300 space-y-1'>" +
  "<li>Relative to the nearest <code>positioned</code> parent</li>" +
  "<li>Pulled out of normal flow</li>" +
  "<li>Perfect for corner placement inside a <code>relative</code> container</li>" +
  "</ul>",
  "<div class='text-pink-400 font-medium mt-2'>🔸 `fixed`</div>",
  "<ul class='list-disc list-inside text-gray-300 space-y-1'>" +
  "<li>Sticks to the screen, even while scrolling</li>" +
  "<li>Great for navbars, floating buttons</li>" +
  "</ul>",
  "<div class='text-pink-400 font-medium mt-2'>🔸 `sticky`</div>",
  "<ul class='list-disc list-inside text-gray-300 space-y-1'>" +
  "<li>Normal until you scroll to a point, then sticks</li>" +
  "<li>Used for sticky headers</li>" +
  "</ul>",
  "<div class='text-yellow-300 font-semibold mt-3'>2️⃣ Margin vs Padding – Know the difference once and for all</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr>
        <th class='py-1 px-2 border border-gray-700'>Property</th>
        <th class='py-1 px-2 border border-gray-700'>What it controls</th>
        <th class='py-1 px-2 border border-gray-700'>Visual</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'><code>padding</code></td><td class='py-1 px-2 border border-gray-700'>Space inside the element (between content & border)</td><td class='py-1 px-2 border border-gray-700'>🧸</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>margin</code></td><td class='py-1 px-2 border border-gray-700'>Space outside the element (between it and others)</td><td class='py-1 px-2 border border-gray-700'>🧱🧱</td></tr>
    </tbody>
  </table>`,
  "<p class='text-gray-300'><code>padding: 10px;</code> | <code>margin: 20px;</code></p>",
  "<p class='text-green-300 mt-1'>👉 Padding = breathing space inside</p>",
  "<p class='text-pink-300'>👉 Margin = pushing other boxes away</p>",
  "<p class='text-gray-400 italic'>Visual: [ margin [ border [ padding [ content ] ] ] margin ]</p>",
  "<div class='text-yellow-300 font-semibold mt-3'>3️⃣ Borders, Radius & Shadow — Give your box some swag 💅</div>",
  "<div class='text-pink-400 font-medium mt-2'>🔸 `border`</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>border: 2px solid #333;</code>
<p class='text-gray-300'>Control:</p>`,
  "<ul class='list-disc list-inside text-gray-300 space-y-1'>" +
  "<li>Width</li>" +
  "<li>Style: <code>solid</code>, <code>dashed</code>, <code>dotted</code></li>" +
  "<li>Color</li>" +
  "</ul>",
  "<div class='text-pink-400 font-medium mt-2'>🔸 `border-radius` — Soft corners 🍥</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>border-radius: 8px;</code>
<p class='text-gray-300'>Make a circle:</p>
<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>width: 100px;
height: 100px;
border-radius: 50%;
</code>`,
  "<div class='text-pink-400 font-medium mt-2'>🔸 `box-shadow` — Make elements pop 🎯</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);</code>
<p class='text-gray-300'>Syntax: <code>box-shadow: X-offset Y-offset blur color;</code></p>`,
  "<div class='text-green-400 font-semibold mt-4'>✅ Summary</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr><th class='py-1 px-2 border border-gray-700'>Feature</th><th class='py-1 px-2 border border-gray-700'>Use For</th></tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'><code>position</code></td><td class='py-1 px-2 border border-gray-700'>Move or fix elements on screen</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>margin</code></td><td class='py-1 px-2 border border-gray-700'>Space outside element</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>padding</code></td><td class='py-1 px-2 border border-gray-700'>Space inside element</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>border</code></td><td class='py-1 px-2 border border-gray-700'>Outline the box</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>border-radius</code></td><td class='py-1 px-2 border border-gray-700'>Soften corners</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>box-shadow</code></td><td class='py-1 px-2 border border-gray-700'>Add depth, make it pop</td></tr>
    </tbody>
  </table>`,
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Text Styling</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>text styling</code> in the terminal to continue.</div>",
  " ",
];

export const textStyling = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-2'>🖋️ 1️⃣ Text Styling — Because plain text is boring</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<div class='text-yellow-300 font-semibold'>🔸 `text-align`</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>text-align: left;     /* default */
text-align: center;
text-align: right;
</code>
<p class='text-gray-300 mt-1'>Great for:</p>
• Centering headings<br/>
• Aligning paragraphs<br/>
• Making things look neat</p>

<div class='bg-[#1e1e2f] text-gray-100 p-2 rounded mt-1'><p class='text-left'>Left aligned</p>
<p class='text-center'>Center aligned</p>
<p class='text-right'>Right aligned</p>
</div>`,
  " ",
  "<div class='text-yellow-300 font-semibold'>🔸 `line-height`</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>line-height: 1.2;</code>
<p class='text-gray-300'>Helpful for longer paragraphs so readers don’t feel like they’re drowning 🫠</p>
<div class='bg-[#1e1e2f] text-gray-300 p-3 rounded leading-[1.2] mt-2'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.<br/>Curabitur sit amet elit sed nulla tempus fermentum.
</div>`,
  " ",
  "<div class='text-yellow-300 font-semibold'>🔸 `letter-spacing`</div>",
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>letter-spacing: 1px;</code>
<p class='text-gray-300'>Use with uppercase headings to make them look dramatic 🧢</p>
<div class='bg-[#1e1e2f] text-gray-100 p-3 rounded tracking-wider uppercase mt-2'>spaced letters look bold</div>`,
  " ",
  "<div class='text-yellow-300 font-semibold'>🔸 `text-transform`</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>text-transform: uppercase;   /* ALL CAPS */
text-transform: lowercase;   /* all lowercase */
text-transform: capitalize;  /* First Letter Of Every Word */</code>
<p class='text-gray-300'>One CSS line = total attitude shift 💅</p>
<div class='bg-[#1e1e2f] text-gray-100 p-3 rounded mt-2'><p class='uppercase'>uppercase</p>
<p class='lowercase'>LOWERCASE</p>
<p class='capitalize'>capitalized sentence</p>
</div>`,
  " ",
  "<div class='text-yellow-300 font-semibold'>🔸 `text-decoration`</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>text-decoration: none;         /* removes underline */
text-decoration: underline;    /* adds underline */
text-decoration: line-through; /* strike-through */</code>
<div class='bg-[#1e1e2f] text-gray-100 p-3 rounded mt-2'><p class='no-underline'>No Underline (Default)</p>
<p class='underline'>Underlined</p>
<p class='line-through'>Strikethrough</p>
</div>`,
  " ",
  "<div class='text-pink-300 font-semibold'>🧠 Pro Combo</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}</code>
<p class='text-green-300 mt-1'>👑 Royal heading unlocked!</p>
<div class='bg-[#1e1e2f] text-gray-100 p-3 rounded mt-2'><h1 class='text-center uppercase tracking-widest font-bold'>This is Royal</h1></div>`,
  " ",
  "<div class='text-pink-300 text-lg font-bold mt-4'>🖱️ 2️⃣ Hover & Active — Add life to your UI</div>",
  "<div class='text-yellow-300 font-semibold'>🔸 `:hover`</div>",
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>button:hover {
  background-color: #333;
  color: #fff;
  cursor: pointer;
}</code>
<p class='text-gray-300'>✨ Great for:</p>
• Buttons
• Links
• Cards

<div class='bg-[#1e1e2f] text-gray-100 p-3 rounded mt-2'><button class='px-4 py-2 bg-pink-400 hover:bg-[#333] hover:text-white rounded transition'>Hover Me</button></div>`,
  " ",
  "<div class='text-yellow-300 font-semibold'>🔸 `:active`</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>button:active {
  transform: scale(0.97);
}</code>
<p class='text-gray-300'>Gives that clicky feeling 🔘</p>
<div class='bg-[#1e1e2f] text-gray-100 p-3 rounded mt-2'><button class='px-4 py-2 bg-blue-400 active:scale-95 transition rounded'>Click Me</button></div>`,
  " ",
  "<div class='text-yellow-300 font-semibold'>🧠 Bonus: Smooth it out</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>button {
  transition: all 0.2s ease;
}</code>
<p class='text-gray-300'>Hover/active effects now glide like butter 🧈</p>`,
  " ",
  "<div class='text-green-400 font-semibold mt-4'>✅ Summary</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr><th class='py-1 px-2 border border-gray-700'>Property</th><th class='py-1 px-2 border border-gray-700'>Use For</th></tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'><code>text-align</code></td><td class='py-1 px-2 border border-gray-700'>Aligning text</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>line-height</code></td><td class='py-1 px-2 border border-gray-700'>Space between lines</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>letter-spacing</code></td><td class='py-1 px-2 border border-gray-700'>Space between letters</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>text-transform</code></td><td class='py-1 px-2 border border-gray-700'>Capitalization styles</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>text-decoration</code></td><td class='py-1 px-2 border border-gray-700'>Underlines, strike-throughs</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>:hover</code></td><td class='py-1 px-2 border border-gray-700'>Styling on mouse-over</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>:active</code></td><td class='py-1 px-2 border border-gray-700'>Styling on click</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>transition</code></td><td class='py-1 px-2 border border-gray-700'>Smooth animations</td></tr>
    </tbody>
  </table>`,
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>Flexbox</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>flexbox</code> in the terminal to continue.</div>",

  " ",
];

export const flexbox = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-2'>🧱 Flexbox – Your CSS Superpower for Layouts</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<p class='text-gray-300'>Flexbox is a layout model that makes it easy to align items, space them out, and build responsive layouts — without losing your mind 😵‍💫</p>",

  "<div class='text-yellow-300 font-semibold'>🧩 Step 1: Make a container flexible</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>.container {
  display: flex;
}</code>
<p class='text-gray-300'>Boom — now all direct children inside <code>.container</code> become flex items.</p>
<div class='flex gap-2 mt-2'>
  <div class='bg-pink-500 px-3 py-1 rounded'>Item 1</div>
  <div class='bg-yellow-500 px-3 py-1 rounded'>Item 2</div>
  <div class='bg-green-500 px-3 py-1 rounded'>Item 3</div>
</div>
`,

  "<div class='text-pink-300 font-bold text-base mt-2'>🔸 Main Flex Properties (for container)</div>",

  "<div class='text-yellow-300 font-semibold mt-2'>1️⃣ `flex-direction`</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>flex-direction: row;       /* default – side by side */
flex-direction: column;    /* stacked vertically */
</code>
<p class='text-gray-300'>📐 Helps build horizontal menus, vertical lists, etc.</p>
<div class='flex flex-col gap-2 mt-2'>
  <div class='bg-pink-500 px-3 py-1 rounded'>Item A</div>
  <div class='bg-yellow-500 px-3 py-1 rounded'>Item B</div>
  <div class='bg-green-500 px-3 py-1 rounded'>Item C</div>
</div>
`,
  "<div class='text-yellow-300 font-semibold'>2️⃣ `justify-content`</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>justify-content: space-between;
</code>
<p class='text-gray-300'>🎯 Think: “Where should my items go on the X-axis?”</p>
<div class='flex justify-between bg-[#2f2f47] p-2 rounded mt-2'>
  <div class='bg-pink-500 px-3 py-1 rounded'>Left</div>
  <div class='bg-yellow-500 px-3 py-1 rounded'>Middle</div>
  <div class='bg-green-500 px-3 py-1 rounded'>Right</div>
</div>
`,

  "<div class='text-yellow-300 font-semibold'>3️⃣ `align-items`</div>",
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>align-items: flex-end;
</code>
<p class='text-gray-300'>🎯 Think: “How should they behave on the Y-axis?”</p>
<div class='flex items-end h-24 gap-2 bg-[#2f2f47] p-2 mt-2 rounded'>
  <div class='bg-pink-500 px-3 py-1 rounded self-start'>Top</div>
  <div class='bg-yellow-500 px-3 py-4 rounded'>Middle</div>
  <div class='bg-green-500 px-3 py-8 rounded'>Bottom</div>
</div>
`,
  "<div class='text-yellow-300 font-semibold'>4️⃣ `gap`</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>gap: 1rem;</code>
<p class='text-gray-300'>🚫 No more using margin on every item — just add <code>gap</code>.</p>
<div class='flex gap-4 mt-2'>
  <div class='bg-pink-500 px-3 py-1 rounded'>1</div>
  <div class='bg-yellow-500 px-3 py-1 rounded'>2</div>
  <div class='bg-green-500 px-3 py-1 rounded'>3</div>
</div>
`,
  "<div class='text-pink-300 font-bold text-base mt-2'>🧸 Flex Item Properties (for children)</div>",
  "<div class='text-yellow-300 font-semibold'>1️⃣ `flex-grow`</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>.item {
  flex-grow: 1;
}
</code>
<p class='text-gray-300'>📈 If all items have <code>flex-grow: 1</code>, they divide the space equally.</p>
<div class='flex gap-2 mt-2'>
  <div class='bg-pink-500 px-3 py-1 rounded flex-grow'>Grow 1</div>
  <div class='bg-yellow-500 px-3 py-1 rounded flex-grow'>Grow 2</div>
</div>
`,

  "<div class='text-yellow-300 font-semibold'>2️⃣ `flex-shrink`</div>",
  `<code class='bg-[#2f2f47] text-blue-300 text-sm px-2 py-1 rounded block w-fit'>.item {
  flex-shrink: 1;
}</code>
<p class='text-gray-300'>📉 Controls how much an item shrinks if space is tight.</p>
<p class='text-gray-400 italic'>Harder to show visually — best tested in dev tools with resizing.</p>
`,
  "<div class='text-yellow-300 font-semibold'>3️⃣ `flex-basis`</div>",
  `<code class='bg-[#2f2f47] text-pink-300 text-sm px-2 py-1 rounded block w-fit'>.item {
  flex-basis: 200px;
}</code>
<p class='text-gray-300'>📐 Defines the starting size before it flexes.</p>
<div class='flex gap-2 mt-2'>
  <div class='bg-pink-500 px-3 py-1 rounded basis-1/4'>Basis 25%</div>
  <div class='bg-yellow-500 px-3 py-1 rounded basis-1/2'>Basis 50%</div>
</div>
`,
  "<div class='text-yellow-300 font-semibold'>4️⃣ `align-self`</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>.item {
  align-self: center;
}</code>
<p class='text-gray-300'>🎯 Overrides the <code>align-items</code> value for just one item.</p>
<div class='flex items-start h-24 bg-[#2f2f47] p-2 gap-2 mt-2 rounded'>
  <div class='bg-pink-500 px-3 py-1 rounded'>Top</div>
  <div class='bg-yellow-500 px-3 py-1 rounded self-center'>Center</div>
  <div class='bg-green-500 px-3 py-1 rounded'>Top</div>
</div>
`,
  "<div class='text-green-300 font-semibold'>🧠 Real-world Example</div>",
  `<pre class='bg-[#2f2f47] text-blue-200 text-sm p-3 rounded overflow-x-auto'>
&lt;div class="navbar"&gt;
  &lt;div&gt;Logo&lt;/div&gt;
  &lt;div&gt;Links&lt;/div&gt;
  &lt;div&gt;Button&lt;/div&gt;
&lt;/div&gt;

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</pre>
<div class='flex justify-between items-center bg-[#2f2f47] p-2 mt-2 rounded'>
  <div class='bg-pink-500 px-3 py-1 rounded'>Logo</div>
  <div class='bg-yellow-500 px-3 py-1 rounded'>Links</div>
  <div class='bg-green-500 px-3 py-1 rounded'>Button</div>
</div>
<p class='text-gray-300'>📸 Result: Logo left, Links center, Button right — all aligned neatly.</p>
`,
  "<div class='text-green-400 font-semibold mt-4'>✅ Summary</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr><th class='py-1 px-2 border border-gray-700'>Property</th><th class='py-1 px-2 border border-gray-700'>Use For</th></tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'><code>display: flex</code></td><td class='py-1 px-2 border border-gray-700'>Makes a container flexible</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>flex-direction</code></td><td class='py-1 px-2 border border-gray-700'>Row vs Column layout</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>justify-content</code></td><td class='py-1 px-2 border border-gray-700'>Align on main axis (X or Y)</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>align-items</code></td><td class='py-1 px-2 border border-gray-700'>Align on cross axis (Y or X)</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>gap</code></td><td class='py-1 px-2 border border-gray-700'>Space between items</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>flex-grow</code></td><td class='py-1 px-2 border border-gray-700'>Items grow proportionally</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>flex-shrink</code></td><td class='py-1 px-2 border border-gray-700'>Items shrink when needed</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>flex-basis</code></td><td class='py-1 px-2 border border-gray-700'>Base size of an item</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'><code>align-self</code></td><td class='py-1 px-2 border border-gray-700'>Individual alignment override</td></tr>
    </tbody>
  </table>`,
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>CSS Units</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>units</code> in the terminal to continue.</div>",
  " ",
];

export const units = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-2'>🎯 Units in CSS — Measuring Like a Frontend Architect 📏</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<p class='text-gray-300'>Different units = different superpowers. Let’s break it down:</p>",
  "<div class='text-yellow-300 font-semibold'>🔹 Absolute Units</div>",
  "<p class='text-gray-300'>These stay fixed. They don’t adapt to screen size.</p>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr><th class='py-1 px-2 border border-gray-700'>Unit</th><th class='py-1 px-2 border border-gray-700'>Description</th><th class='py-1 px-2 border border-gray-700'>Example</th></tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'>px</td><td class='py-1 px-2 border border-gray-700'>Pixels (most common)</td><td class='py-1 px-2 border border-gray-700'>font-size: 16px;</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>pt</td><td class='py-1 px-2 border border-gray-700'>Points (used in print)</td><td class='py-1 px-2 border border-gray-700'>font-size: 12pt;</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>cm, mm, in</td><td class='py-1 px-2 border border-gray-700'>Physical units (printers)</td><td class='py-1 px-2 border border-gray-700'>–</td></tr>
    </tbody>
  </table><p class='text-green-300'>✅ Use when you want fixed precision regardless of device.</p>
  `,
  `<div class='bg-[#2f2f47] p-4 rounded my-3 text-white'>
    <p style='font-size: 16px;'>This text is 16px (using px)</p>
    <p style='font-size: 12pt;'>This text is 12pt (used in print)</p>
  </div>
  `,
  "<div class='text-yellow-300 font-semibold'>🔹 Relative Units</div>",
  "<p class='text-gray-300'>These scale with the parent, root, or screen size. Perfect for responsive design.</p>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr><th class='py-1 px-2 border border-gray-700'>Unit</th><th class='py-1 px-2 border border-gray-700'>Based On</th><th class='py-1 px-2 border border-gray-700'>Example</th></tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'>%</td><td class='py-1 px-2 border border-gray-700'>Parent size</td><td class='py-1 px-2 border border-gray-700'>width: 50%;</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>em</td><td class='py-1 px-2 border border-gray-700'>Parent font-size</td><td class='py-1 px-2 border border-gray-700'>1em = parent size</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>rem</td><td class='py-1 px-2 border border-gray-700'>Root font-size (16px)</td><td class='py-1 px-2 border border-gray-700'>1rem = 16px</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>vw</td><td class='py-1 px-2 border border-gray-700'>1% of viewport width</td><td class='py-1 px-2 border border-gray-700'>width: 50vw;</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>vh</td><td class='py-1 px-2 border border-gray-700'>1% of viewport height</td><td class='py-1 px-2 border border-gray-700'>height: 100vh;</td></tr>
    </tbody>
  </table><p class='text-green-300'>✅ Use for screens that resize or when working with fluid layouts.</p>
  `,
  `<div class='bg-[#2f2f47] p-4 rounded my-3 text-white w-full'>
    <div style='font-size: 1rem;'>Font size 1rem (16px default)</div>
    <div style='width: 50%; background: #000;'>Width: 50%</div>
    <div style='width: 50vw; background: #000;'>Width: 50vw</div>
  </div>
  `,
  "<div class='text-blue-400 font-semibold'>🧠 Real Talk</div>",
  "<ul class='list-disc list-inside text-gray-300 space-y-1'>" +
  "<li><code class='text-pink-300'>px</code> → Good for shadows, borders, fine-tuned spacing</li>" +
  "<li><code class='text-pink-300'>rem</code> → Ideal for font sizes (scales nicely)</li>" +
  "<li><code class='text-pink-300'>%</code>, <code class='text-pink-300'>vw</code>, <code class='text-pink-300'>vh</code> → Perfect for layout and responsiveness</li>" +
  "</ul>",
  " ",
  "<div class='text-yellow-300 font-semibold'>📱 Responsive Design — Enter `@media` Queries</div>",
  "<p class='text-gray-300'>Media queries help your layout adjust for mobile, tablet, or desktop.</p>",
  "<div class='text-pink-300 font-semibold'>🔸 What is a Media Query?</div>",
  `<code class='bg-[#2f2f47] text-green-300 text-sm px-2 py-1 rounded block w-fit'>@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
</code>
<p class='text-gray-300'>👆 Means: “When the screen is 768px or smaller, stack navbar items vertically.”</p>
`,
  `<div class='bg-[#2f2f47] p-4 rounded my-3 text-black'>
    <div class='flex justify-between items-center gap-2'>
      <div class='bg-gray-300 p-2 rounded'>Logo</div>
      <div class='bg-gray-400 p-2 rounded'>Links</div>
      <div class='bg-gray-500 p-2 rounded'>Button</div>
    </div>
    <p class='text-xs mt-2 text-white'>(Try resizing the screen to simulate the effect)</p>
  </div>
  `,
  "<div class='text-pink-300 font-semibold'>🔸 Common Breakpoints</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr><th class='py-1 px-2 border border-gray-700'>Device</th><th class='py-1 px-2 border border-gray-700'>Width</th></tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'>Mobile</td><td class='py-1 px-2 border border-gray-700'>max-width: 480px</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>Tablet</td><td class='py-1 px-2 border border-gray-700'>max-width: 768px</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>Laptop/Desktop</td><td class='py-1 px-2 border border-gray-700'>min-width: 1024px</td></tr>
    </tbody>
  </table>
  `,
  "<div class='text-pink-300 font-semibold'>🔸 Example Use-Case</div>",
  `<pre class='bg-[#2f2f47] text-blue-200 text-sm p-3 rounded overflow-x-auto'>.card {
  width: 400px;
}

@media (max-width: 600px) {
  .card {
    width: 90%;
  }
}
</pre>
<p class='text-gray-300'>💡 On small screens, the card shrinks to fit better instead of overflowing!</p>
`,
  `<div class='bg-[#2f2f47] text-white p-3 rounded w-[400px] max-w-full'>
    <div class='bg-black p-3 text-center'>Card (400px, but responsive below 600px)</div>
  </div>
  `,
  "<div class='text-green-300 font-semibold'>🧠 Tips</div>",
  "<ul class='list-disc list-inside text-gray-300 space-y-1'>" +
  "<li>Use <code class='text-pink-300'>flex</code> + <code class='text-pink-300'>media queries</code> together for smooth UIs</li>" +
  "<li>Check mobile, tablet, and desktop views</li>" +
  "<li>Test quickly using browser dev tools</li>" +
  "</ul>",
  "<div class='text-green-400 font-semibold'>✅ Summary</div>",
  `<table class='w-full text-sm text-left border border-gray-700 text-gray-100 my-2'>
    <thead class='bg-[#353547] text-gray-200'>
      <tr><th class='py-1 px-2 border border-gray-700'>Concept</th><th class='py-1 px-2 border border-gray-700'>Use For</th></tr>
    </thead>
    <tbody>
      <tr><td class='py-1 px-2 border border-gray-700'>px</td><td class='py-1 px-2 border border-gray-700'>Fixed size (pixels)</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>em, rem</td><td class='py-1 px-2 border border-gray-700'>Scaling font sizes</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>%</td><td class='py-1 px-2 border border-gray-700'>Relative to parent</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>vw, vh</td><td class='py-1 px-2 border border-gray-700'>Responsive to viewport</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>@media</td><td class='py-1 px-2 border border-gray-700'>Responsive breakpoints</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>max-width</td><td class='py-1 px-2 border border-gray-700'>Style for smaller screens</td></tr>
      <tr><td class='py-1 px-2 border border-gray-700'>min-width</td><td class='py-1 px-2 border border-gray-700'>Style for larger screens</td></tr>
    </tbody>
  </table><p class='text-gray-300'>That’s how your designs adapt like a chameleon 🦎📱💻🖥️</p>`,
  "<div class='text-blue-400 italic text-sm mt-4'>🔁 Next up: <span class='font-semibold text-yellow-300'>CSS Best Practices</span></div>",
  "<div class='text-gray-400 text-sm italic'>👉 Type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>best practices</code> in the terminal to continue.</div>",
  " ",
];

export const best = [
  " ",
  "<div class='text-pink-300 text-lg font-bold mb-2'>🎯 CSS Best Practices — Write it Clean, Make it Shine ✨</div>",
  "<div class='border-b border-pink-400/40 mb-4'></div>",
  "<div class='text-yellow-300 font-semibold'>✅ 1️⃣ Use Meaningful Class Names</div>",
  "<p class='text-gray-300'>Don’t be that <code>.a1</code>, <code>.redBox</code>, or <code>.thingy</code>. Use names that explain the <span class='text-green-300'>role</span>, not how they look.</p>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>&lt;!-- ❌ Bad --&gt;&lt;div class="blue-text"&gt;&lt;/div&gt;
&lt;!-- ✅ Good --&gt;&lt;div class="alert-message"&gt;&lt;/div&gt;
</pre>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 2️⃣ Keep It DRY (Don't Repeat Yourself)</div>",
  "<p class='text-gray-300'>Avoid repeating the same styles. Reuse with class abstraction.</p>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>/* ❌ Redundant */
.card1 {
  padding: 20px;
  border-radius: 8px;
}
.card2 {
  padding: 20px;
  border-radius: 8px;
}

/* ✅ Reusable */
.card {
  padding: 20px;
  border-radius: 8px;
}
</pre>
<p class='text-green-300'>💡 Tip: Use Tailwind or BEM when your project scales.</p>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 3️⃣ Use a Consistent Unit System</div>",
  "<p class='text-gray-300'>Mixing <code>px</code>, <code>%</code>, <code>em</code>, <code>rem</code> = chaos.</p>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>⛔ Don’t do:
font-size: 16px;
padding: 2rem;
margin: 10%;

✅ Do:
font-size: 1rem;
padding: 1.25rem;
margin: 1rem;
</pre>
<p class='text-green-300'>Stick to 1–2 unit types for consistency (like <code>rem</code> for fonts, <code>%</code> or <code>px</code> for layout).</p>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 4️⃣ Always Reset or Normalize Styles</div>",
  "<p class='text-gray-300'>Browsers have wild default styles. Reset it like a pro:</p>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</pre>
<p class='text-green-300'>Or use Normalize.css or Tailwind’s preflight.</p>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 5️⃣ Don’t Over-Nest in CSS</div>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>/* ❌ Too much */
body .container .box .text .highlight .hovered-text {}

/* ✅ Clean */
.highlight {
  color: yellow;
}
</pre>
<p class='text-gray-300'>Keep it shallow, simple, and maintainable 🔍</p>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 6️⃣ Comment Wisely ✍️</div>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>/* ===== Header Styling ===== */
.header { ... }

/* Fix for iOS Safari bug */
.some-class {
  -webkit-overflow-scrolling: touch;
}
</pre>
<p class='text-gray-300'>Don't comment obvious stuff. Use them to explain hacks or structure.</p>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 7️⃣ Mobile First, Always</div>",
  "<p class='text-gray-300'>Start for small screens and scale up — phones are the default now 📱</p>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
</pre>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 8️⃣ Don’t Inline Everything</div>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>&lt;!-- ❌ --&gt;
&lt;div&gt; style="color: red;"&gt;&lt;/div&gt;

&lt;!-- ✅ --&gt;
&lt;div&gt; class="error-message"&gt;&lt;/div&gt;
</pre>
<p class='text-gray-300'>Inline is okay for quick tests, but avoid it in real projects.</p>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 9️⃣ Keep Files Organized 🗂️</div>",
  "<p class='text-gray-300'>Split styles by purpose and scale as needed:</p>",
  `<pre class='bg-[#2f2f47] text-sm text-gray-100 p-2 rounded overflow-x-auto'>/styles
  ├── base.css
  ├── layout.css
  ├── components.css
  └── responsive.css
</pre>
<p class='text-green-300'>Tailwind/SCSS makes this even cleaner with layers and nesting.</p>
`,
  "<div class='text-yellow-300 font-semibold'>✅ 🔟 Test. On. Devices.</div>",
  "<p class='text-gray-300'>Looks great on desktop? Test again on phones & tablets.</p>",
  "<p class='text-green-300'>Use dev tools → responsive mode 📱 💻 🖥️</p>",
  " ",
  "<div class='text-pink-300 font-bold text-base'>👑 Final Blessings from My’s Castle</div>",
  "<p class='text-gray-300'>Don’t chase perfect UI, chase <span class='text-green-300'>consistent flow</span>.<br/>Write CSS like future-you will thank you.<br/>CSS isn’t just about looks — it’s the soul of your interface 💅</p>",
  "<div class='text-green-400 text-sm italic mt-4'>🎉 CSS module done and dusted!</div>",
  "<div class='text-gray-400 text-sm italic'>Wanna level up more? Go play around with your styles, or type <code class='bg-[#2f2f47] text-green-300 px-1 py-0.5 rounded'>open compiler</code> to test it live 💡</div>",
  " ",
];