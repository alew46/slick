(function() {
    function Room($firebaseArray) {
        var Room = {}
        var ref  = firebase.database().ref().child("rooms"); 
        
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        
        return Room;
    }
    
    angular
        .module('slick')
        .factory('Room', ['$firebaseArray', Room]);
    
})();