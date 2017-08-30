(function() {
    function RoomCtrl(Room) {
        this.allRooms = Room.getAll();
    }
            
    angular
        .module('slick')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();