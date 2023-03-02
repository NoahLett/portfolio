import React from 'react';
import TechListItem from './TechListItem';
import './TechList.css';

const TechList = () => {
  return (
    <div>
      <h1 className='stack-title'>My Current Stack</h1>
      <div className='card-container'>
        <TechListItem
        image='images/JavaScript.png'
        title='JavaScript'
        description='A programming language used to create interactive web pages and web applications'
        />
        <TechListItem
        image='images/React.png'
        title='React'
        description='A popular JavaScript library used for building user interfaces and front-end web applications'
      />
        <TechListItem
        image='images/Node.jpg'
        title='Node.js'
        description='A server-side JavaScript runtime environment that allows developers to build scalable, high-performance web applications'
      />
        <TechListItem
        image='images/Express.png'
        title='Express'
        description='A popular web application framework for Node.js that simplifies the process of building web applications and APIs'
      />
        <TechListItem
        image='images/Postgresql.png'
        title='PostgreSQL'
        description='An open-source relational database management system that is known for its reliability, scalability, and extensibility'
      />
        <TechListItem
        image='images/pgweb.png'
        title='PGWeb'
        description='A web-based administration tool for PostgreSQL databases'
      />
        <TechListItem
        image='images/CSS3.png'
        title='CSS3'
        description='The latest version of Cascading Style Sheets, a language used for styling web pages and user interfaces'
      />
        <TechListItem
        image='images/HTML5.png'
        title='HTML5'
        description='The latest version of Hypertext Markup Language, a markup language used to create the structure and content of web pages and web applications'
      />
        <TechListItem
        image='images/Bootstrap.png'
        title='Bootstrap'
        description='A popular open-source framework that provides developers with pre-built HTML, CSS, and JavaScript components to create responsive and mobile-first websites and web applications'
      />
        <TechListItem
        image='images/AWS.jpg'
        title='Amazon Web Services'
        description='A cloud computing platform that provides a variety of services such as computing, storage, and databases'
      />
        <TechListItem
          image='images/github.png'
          title='GitHub'
          description='A web-based platform for version control and collaboration that is widely used for open-source software development'
        />
        <TechListItem
          image='images/npm.png'
          title='NPM'
          description='A package manager for Node.js that allows developers to easily install and manage dependencies for their project'
        />
        <TechListItem
          image='images/Figma.jpg'
          title='Figma'
          description='A web-based design tool used by designers to create and collaborate on user interfaces, prototypes, and graphics'
        />
        <TechListItem
          image='images/slack.jpg'
          title='Slack'
          description='A popular communication platform for teams that provides features such as instant messaging, file sharing, and video conferencing'
        />
        <TechListItem
          image='images/dokku.png'
          title='Dokku'
          description='A platform that provides developers with a simple and easy-to-use way to deploy and manage their applications on their own servers'
        />
        <TechListItem
          image='images/Webpack.png'
          title='Webpack'
          description='A module bundler for JavaScript applications that allows developers to bundle and optimize their code and assets for deployment'
        />
        <TechListItem
          image='images/Babel.jpg'
          title='Babel'
          description='A JavaScript compiler that allows developers to write code using the latest syntax features and then transpile it into a version of JavaScript that is compatible with older browsers'
        />
        <TechListItem
          image='images/Docker.png'
          title='Docker'
          description='A containerization platform that allows developers to package and deploy applications with all their dependencies into lightweight, portable containers'
        />
        <TechListItem
          image='images/Emailjs.png'
          title='EmailJS'
          description='A platform that provides an API for sending emails directly from client-side JavaScript code'
        />
        <TechListItem
          image='images/jwt.png'
          title='JSON Web Tokens'
          description='A standard for representing claims securely between parties as a JSON object'
        />
      </div>
    </div>
  );
};

export default TechList;
