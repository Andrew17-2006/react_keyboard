import React from 'react';

interface Appstate {
  lastKey: string;
}
export class App extends React.Component<{}, Appstate> {
  state: Appstate = {
    lastKey: 'Enter',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is [{this.state.lastKey}]
        </p>
      </div>
    );
  }
}
