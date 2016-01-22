   App = React.createClass({
     // Add the ReactMeteorData mixin - we need to connect our data to our view
     mixins: [ReactMeteorData],

     // Get data from the database and store it in the hours variable 
     getMeteorData: function() {
       // Get all data from the Hours collection
       return {
         hours: Hours.find()
       }
     }, 

     // Use React's render function and write some JSX (which uses regular HTML) 
     // to support our 2 column structure and a div for each component we will have
     render: function() {
       // Return the JSX inside of brackets  
       return (
         <h1>Coding Time</h1>
       );
     }
   });