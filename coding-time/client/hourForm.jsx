 HourForm = React.createClass({

  handleSubmit: function(e) {
       e.preventDefault();

       // Access the input fields using React.findDOMNode and store them in a variable

       var hours = React.findDOMNode(this.refs.hours).value
       var date = React.findDOMNode(this.refs.date).value

       // Use Meteor's call function 
       // Pass the insertHour function as first parameter
       // Pass the hours value as the second parameter
       // Pass the date value as the third parameter - Use Moments toDate function to pass it as an ISO date
       // Pass an anonymous callback as the fourth parameter that alerts if something goes wrong
       date = moments(date).toDate()
       Meteor.call('insertHour', hours, date, function (error, result) {
        if (error) {
          // handle error
        } else {
          // examine result
        }
       });


       // Reset the input values to empty strings
       React.findDOMNode(this.refs.hours).value = ""
       React.findDOMNode(this.refs.date).value = ""

     },

     render: function() {
       // Return the JSX inside of brackets  
       return (
        <form onSubmit={this.handleSubmit}>
         <input type="text" ref="hours"></input>
         <input type="text" ref="date"></input>
         <button type="submit">
          Submit
        </button>
        </form>
       );
     }


   });