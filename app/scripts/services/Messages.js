(function() {
    function Messages($firebaseArray) {
        var Messages = {}
        var ref  = firebase.database().ref().child("messages");
        
        var messages = $firebaseArray(ref);
        
        Messages.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };
                
        return Messages;
    }
    
    angular
        .module('slick')
        .factory('Messages', ['$firebaseArray', Messages]);
    
})();