import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "CloudFormation Bin",
    'href': "https://github.com/JMFritz/CloudFormation-template-app",
    'url': "https://environments.junmarcel.info",
    'desc': "While working on my portfolio, I came across the Serverless Framework, a tool to help develop and deploy functions into the cloud.  I had previously worked with the AWS CLI and main Console, and was very excited to see how the Serverless Framework could help out in deploying my functions.  While working through the serverless-stack.com tutorial, I decided to dedicate this app to storing the CloudFormation templates, diagrams, and descriptions I've recently worked with.  The Serverless Framework for the backend was easy to implement in my project which allowed for more time developing the front end of the app with React.  Along with revisiting the main concepts of the ReactJS library, I was also introduced to User and Identity Pools and their effectiveness in the cloud through AWS Cognito.",
    'summary': "My introduction to the convenience of the Serverless Framework, and a straightforward template storage web application.",
    'tools': ["Serverless Framework", "Amazon Web Services", "ReactJS","Lambda", "API Gateway", "Cognito", "Cloudfront"],
    'image': {
      'desc': "",
      'src': "images/example3.png",
      'comment': ""
    }
  },
  {
    'title': "Serverless Portfolio",
    'href': "https://github.com/JMFritz/Serverless-Portfolio-Jun",
    'url': "https://portfolio.junmarcel.info",
    'desc': "For my first project utilizing Amazon Web Services and with the help of A Cloud Guru’s course content, I made this simple, serverless portfolio to showcase the projects and certifications I’ve been working on.  I wanted to learn more about developing a serverless architecture, and all the moving parts that go into one.  I enjoyed working with AWS services like Lambda, S3, and API Gateway because of how easy they were to configure, as well as the peace of mind they offer when it comes to automatically scaling to a project’s needs.  I used resources and libraries familiar to me like NPM, WebPack, and ReactJS, and also took advantage of new tools like the Python SDK available for AWS.  My goal is to continue adding functionality and styling as time goes on, but overall, I’m proud of the work I put into this portfolio and learning how to use AWS services.  I’m looking forward to experiencing all the benefits of working in the cloud, and will be posting all future projects here.  Stay tuned!",
    'summary': "Requiring many small parts working together, this completely serverless portfolio project gave me an opportunity to work with a wide variety of AWS services.",
    'tools': ["Amazon Web Services", "ReactJS", "NPM", "Webpack"],
    'image': {
      'desc': "",
      'src': "images/example2.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
