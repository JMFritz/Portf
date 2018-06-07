import React from 'react';

class ExampleWork extends React.Component {
  render() {
    return(
      <section className="sectionTWO section--alignCentered section--description">

        { this.props.work.map( (example, idx) => {
            return (
              <ExampleWorkBubble example={example} key={idx}/>
            )
          })
        }
      </section>
    )
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (
      <div className="projectWrapper">
        <div className="project">
          <img alt={ example.image.desc }
            className="projectImage"
            src={ example.image.src }/>
          <h1 className="project-title">{ example.title }</h1>
        </div>
      </div>
    )
  }
}

export default ExampleWork;
export { ExampleWorkBubble };
