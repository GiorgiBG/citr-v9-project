const Pizza = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('p', {}, props.description),
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: 'The test name',
      description: 'Test description',
    }),
    React.createElement(Pizza, {
      name: 'The test 2',
      description: 'Test description 2',
    }),
    React.createElement(Pizza, {
      name: 'The test name 3',
      description: 'Test description 3',
    }),
  ])
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
