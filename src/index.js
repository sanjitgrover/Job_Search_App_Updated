import React, { Component } from "react";
import ReactDOM from "react-dom";

import jobs from "./data/Jobs";
import JobItem from "./components/JobListElement/SimpleJobElement";
import JobCreationForm from "./JobCreationForm/JobCreationForm";

import "./styles.css";

const divStyle = {
  visibility: "hidden"
};

class App extends Component {
  state = { enableJobForm: true };

  toggleDisplay = () => {
    let formVisibility = this.state.enableJobForm;
    this.setState({ enableJobForm: !formVisibility });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleDisplay}>Job Form</button>
        <div
          style={{
            visibility: this.state.enableJobForm ? "visible" : "hidden"
          }}
        >
          <JobCreationForm />
        </div>
        {jobs.map(job => (
          <JobItem key={job.id} {...job} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
