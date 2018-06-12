import React from 'react';
import ExampleWorkModal from './example-work-modal';

class ExampleWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedExample': this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }
  render() {
    return(
      <span id="projects">
      <h1 className="title-size">Projects</h1>
        <section className="sectionTWO section--alignCentered section--description">
          { this.props.work.map( (example, idx) => {
              return (
                <ExampleWorkBubble example={example} key={idx} openModal={this.openModal}/>
              )
            })
          }
        </section>

        <ExampleWorkModal example={this.state.selectedExample} open={this.state.modalOpen} closeModal={this.closeModal}/>
      </span>
    )
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;
    let tools = this.props.example.tools;
    return (
        <span>
          <div className="project">
            <div className="projectInfo">
                <h1 className="projectTitle" onClick={ (evt) => this.props.openModal(evt, example) }>{ example.title }</h1>
                <p className="projectDesc">{ example.summary }</p>
                <div className="toolSection">
                { tools.map((tool) => {
                  return(
                    <p className="tool">{ tool }</p>
                  )
                })
              }
              </div>
            </div>
            <img alt={ example.image.desc }
            className="projectImage"
            src={ example.image.src }/>
          </div>
          <hr className="style"/>
        </span>
    )
  }
}

export default ExampleWork;
export { ExampleWorkBubble };
