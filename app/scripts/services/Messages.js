(function() {
    function Messages($firebaseArray, Room) {
        var Messages = {};
        
        var ref  = firebase.database().ref().child("messages");
        
        var messages = $firebaseArray(ref);
        
        Messages.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };
        
        Messages.send = function(newMessage) {
            console.log("test inside send");
            messages.$add(newMessage);
        };
                
        return Messages;
    }
    
    angular
        .module('slick')
        .factory('Messages', ['$firebaseArray', 'Room', Messages]);
    
})();