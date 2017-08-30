(function() {
    function Room($firebaseArray) {
        var Room = {}
        var ref  = firebase.database().ref().child("rooms"); 
        
        Room.getAll = function () {
            return $firebaseArray(ref);
        };
        
        return Room;
    }
    
    angular
        .module('slick')
        .factory('Room', ['$firebaseArray', Room]);
    
})();