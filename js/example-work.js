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
      <span>
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
    return (
        <span>
          <div className="project">
            <img alt={ example.image.desc }
              className="projectImage"
              src={ example.image.src } onClick={ (evt) => this.props.openModal(evt, example) }/>
            <h1 className="projectTitle">{ example.title }</h1>
            <p className="projectDesc">Lorem sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <hr className="style"/>
        </span>
    )
  }
}

export default ExampleWork;
export { ExampleWorkBubble };
