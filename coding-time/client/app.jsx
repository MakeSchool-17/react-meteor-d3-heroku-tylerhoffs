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
        <div className="container-fluid">
         <h1 className="page-header text-center" >C<i className="fa fa-clock-o fa-spin"></i>ding Time</h1>
         <HourForm/>
         <HourList data={this.data.hours}/>  
        </div>
       );
     }
   });