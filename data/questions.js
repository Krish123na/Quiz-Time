const questions = [
  {
    question: "Which array method creates a new array with elements that pass a test?",
    options: ["map()", "reduce()", "filter()", "forEach()"],
    answer: 2
  },
  {
    question: "What is the purpose of the sandbox attribute in an <iframe>?",
    options: ["To enable full-screen view", "To isolate and restrict iframe behavior", "To cache the iframe content", "To style the iframe"],
    answer: 1
  },
  {
    question: "What happens if multiple elements share the same id in an HTML document?",
    options: ["Browser merges them", "It's valid and works fine", "It's invalid; behavior is unpredictable", "All elements get the same style"],
    answer: 2
  },
  {
    question: "Which CSS pseudo-class selects an element that is the first child of its parent?",
    options: [":first", ":first-child", ":nth-child(0)", ":first-of-type"],
    answer: 1
  },
  {
    question: "In the box model, which property is not affected by the box-sizing: border-box; declaration?",
    options: ["width", "border", "padding", "margin "],
    answer: 3
  },
  {
    question: "Which CSS property will make an element not participate in the document flow?",
    options: ["visibility: hidden;", "display: none;", "opacity: 0;", "z-index: -1;"],
    answer: 1
  },
  {
    question: "What will the z-index property affect when two elements overlap?",
    options: ["Only inline elements", "The background color", "Stacking order in the 3D context", "Margin collapsing "],
    answer: 2
  },
  {
    question: "What will typeof NaN return?",
    options: ['"number"', '"NaN"', '"undefined"', '"object"'],
    answer: 0
  },
  {
    question: "What is the result of [] + [] in JavaScript?",
    options: ["0", "undefined", '""', "[]"],
    answer: 2
  },
  {
    question: "What is the default method for a <form> element if no method attribute is specified?",
    options: ["post", "put", "get", "delete "],
    answer: 2
  },
  {
    question: "Which HTML tag supports both block-level and inline content inside it?",
    options: ["<span>", "<div>", "<a>", "<section>"],
    answer: 2
  },
  {
    question: "Which CSS function is used to make a responsive font size?",
    options: ["font-scale()", "calc()", "clamp()", "scale()"],
    answer: 2
  },
  {
    question: "What does the JavaScript expression [] == ![] evaluate to?",
    options: ["true", "false", "Syntax error", "NaN"],
    answer: 0
  },
  {
    question: "Which HTML element provides native support for client-side validation without JavaScript?",
    options: ["<script>", "<validate>", "<input required>", '<form type="validate">'],
    answer: 2
  },
  {
    question: "What will happen if z-index is applied to a static positioned element?",
    options: ["Nothing", "It floats above all elements", "It hides behind the page", "It triggers re-render"],
    answer: 0
  },
  {
    question: "What is the difference between call() and apply() in JavaScript?",
    options: ["apply() accepts arguments as an array", "call() is faster", "apply() only works with arrow functions", "No difference at all"],
    answer: 0
  },
  {
    question: "Which property determines whether an element can be the target of mouse events?",
    options: ["z-index", "pointer-events", "user-select", "event-capture"],
    answer: 1
  },
  {
    question: "Which CSS technique is best for maintaining aspect ratio of a responsive video?",
    options: ["max-height: 100%", "padding-top with % trick", "position: absolute", "width: auto"],
    answer: 1
  },
  {
     question: "Which method is used to deep clone an object (excluding non-JSON-safe data)?",
    options: ["Object.assign()", "structuredClone()", "Object.create()", "JSON.toClone()"],
    answer: 1 
  },
  {
    question: 'What does the "this" keyword refer to in JavaScript inside a regular function?',
    options: ["The function itself", "The global object (in non-strict mode)", "The nearest object", "The DOM element "],
    answer: 1
  },
  {
    question: " Which of the following is NOT a valid CSS position value?",
    options: ["relative", "fixed", "sticky", "center "],
    answer: 3
  },
  {
    question: "Which HTML tag is used to define a table header?",
    options: ["<td>", "<tr>", "<thead>", "<th>"],
    answer: 3
  },
  {
    question: "Which HTTP status code means “Not Found”?",
    options: ["200", "200", "404", "500"],
    answer: 2
  },
  {
    question: "Which of the following is used to stop event bubbling in JavaScript?",
    options: ["preventDefault()", "stopPropagation()", "stopImmediatePropagation()", "cancelBubble()"],
    answer: 1
  },
  {
    question: "What does the === operator do in JavaScript?",
    options: ["Compares value only", "Compares value and type", "Assigns value", "Compares memory reference"],
    answer: 1
  },
];
