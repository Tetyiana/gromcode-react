// should render following html

// <h1 class="title">Todo List</h1>
const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
)
ReactDOM.render(greetingElem, rootElement)