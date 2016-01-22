Hours = new Meteor.Collection("Hours");

Meteor.methods({
     
     insertHour: function(inHours, inDate) {
       inHours = parseInt(inHours, 10)
       check(inHours, Number)
       check(inDate, Date)
       return Hours.insert({hours: inHours, date: inDate});
     },
     removeHour: function(removeId) {    
       check(removeId, String)
       return Hours.remove(removeId);
     }
});