(function() {
    function Room($firebaseArray) {
        var Room = {}
        var ref  = firebase.database().ref().child("rooms");
        
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        
        Room.add = function(room) {
            Room.all.$add(room);
        }
        
        Room.getAll = function () {
            return $firebaseArray(ref);
        };
        
        
        return Room;
        
        
    }
    
    angular
        .module('slick')
        .factory('Room', ['$firebaseArray', Room]);
    
})();