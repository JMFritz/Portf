import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Serverless Portfolio",
    'href': "https://example.com",
    'desc': "For my first project utilizing Amazon Web Services and with the help of A Cloud Guru’s course content, I made this simple, serverless portfolio to showcase the projects and certifications I’ve been working on.  I wanted to learn more about developing a serverless architecture, and all the moving parts that go into one.  I enjoyed working with AWS services like Lambda, S3, and API Gateway because of how easy they were to configure, as well as the peace of mind they offer when it comes to automatically scaling to a project’s needs.  I used resources and libraries familiar to me like NPM, WebPack, and ReactJS, and also took advantage of new tools like the Python SDK available for AWS.  My goal is to continue adding functionality and styling as time goes on, but overall, I’m proud of the work I put into this portfolio and learning how to use AWS services.  I’m looking forward to experiencing all the benefits of working in the cloud, and will be posting all future projects here.  Stay tuned!",
    'summary': "Requiring many small parts working together, this completely serverless portfolio project gave me an opportunity to work with a wide variety of AWS services.",
    'tools': ["Amazon Web Services", "ReactJS", "NPM", "Webpack"],
    'image': {
      'desc': "",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Previous Project",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'summary': "Requiring many small parts working together, a completely serverless portfolio project gave me an opportunity to work with a wide variety of AWS tools.",
    'tools': ["Amazon Web Services", "ReactJS"],
    'image': {
      'desc': "",
      'src': "images/example3.png",
      'comment': ""
    }
  },
  {
    'title': "Old Ass Project",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'summary': "Requiring many small parts working together, a completely serverless portfolio project gave me an opportunity to work with a wide variety of AWS tools.",
    'tools': ["Amazon Web Services", "ReactJS"],
    'image': {
      'desc': "",
      'src': "images/example1.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
