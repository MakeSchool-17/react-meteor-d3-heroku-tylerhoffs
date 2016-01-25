   HourItem = React.createClass({

     // Write an event handler for the onClick event, called handleClick.
     handleClick: function() {
       // Store id in a variable. Access it from this.props.
       var id = this.props.item.id;

       // Use the Meteor method "call". Pass 'removeHour' as the first parameter, id as the second, 
       // a function alerting any errors as third parameter
       Meteor.call('removeHour', id, function (error, result) {
        if (error) {
          // handle error
        } else {
          // examine result
        }
       });
     },

     // Obligatory render method
     render: function() {
       // Get the date from this.props.hour.date and format it to 'DD/MM/YYYY' using Moment. Store it in a variable.
       var date = moment.(this.props.item.date).format(DD MM YYY)
       // Determine if the end of the sentence should say hour or hours based on this.props.hour.hours. Store it in a variable.
        if(this.props.item.hours > 1){
          setEnd = "hour"
        }
        else{
          setEnd = "hours"
        }

       // Return a list item with an onClick handler. Let the item say "On DD/MM/YYYY coded ? hour/hours."
       // Variables have to be accessed within curly brackets => {date}
       return (
         <li onClick="handleClick">On {date} coded {this.props.item.hours} {sentEnd}</li>
       );
     }
   });