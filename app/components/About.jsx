var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a timer web built with React</p>
            <p>Here are some of the Tools I used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/" target="_blank">React</a> - The javascript framework.
                </li>
                <li>
                    <a href="http://foundation.zurb.com/" target="_blank">Foundation</a> - The front-end framework.
                </li>
                <li>
                    <a href="https://karma-runner.github.io/1.0/index.html" target="_blank">Karma</a> - The test tool.
                </li>
                <li>
                    <a href="https://mochajs.org/" target="_blank">Mocha</a> - The test framework.
                </li>
                <li>
                    <a href="http://sass-lang.com/" target="_blank">Sass</a> - The CSS framework.
                </li>
            </ul>
        </div>
  );
}

module.exports = About;
