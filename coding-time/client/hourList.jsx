HourList = React.createClass({
     // render the item component in a separate function
     renderHours: function() {   
       // Iterate over this.props.data using the map function. Return the loop
       this.props.data.map(function(item)){
         // Return the HourItem component, pass hour and key to it. 
         return <HourItem item={item}/>
       }
     },

     //render the HourList JSX
     render: function() {
       // Return the JSX inside of brackets  
       return (
        <div className="panel panel-default col-sm-4">
          <div className="panel-heading">
              History
          </div>
          <div className="panel-body">
            <ul>
              {renderHours()}
            </ul>
          </div>
        </div>
       );
     }