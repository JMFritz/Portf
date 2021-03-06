import React from 'react';

class ExampleWorkModal extends React.Component {

  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"main-modal background--modal " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            { example.title }
          </h2>
          <a className="color--skyBlue modal__link"
             href={ example.href } target="_blank">
            View Source
          </a>
          <a className="color--skyBlue modal__link"
             href={ example.url } target="_blank">
            Open App
          </a>
          <p className="modal__description">
            { example.desc }
          </p>
        </div>
      </div>
    )
  };
};

export default ExampleWorkModal;
