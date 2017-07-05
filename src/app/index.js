var React=require('react');
var ReactDom = require('react-dom');

//create component
var TodoComponent=React.createClass({
    render:function () {
        return(
            <div>
            <h1>Hellooooo1234</h1>
            <p>This is shriti</p>
            <p>{this.props.msg}</p>
            <p><strong>Cheese Name:</strong>{this.props.myCheese.Name}</p>
            <p><strong>Cheese Price:</strong>{this.props.myCheese.Price}</p>
            </div>
        );
    }
});

var myCheese={"Name":"Vanilla Flavor", "Price":"125"};

//put component in html page
ReactDom.render(<TodoComponent myCheese={myCheese}/>, document.getElementById('todo-wrapper'));
