(function() {
    function RoomCtrl(Room) {
        this.allRooms = angular.copy(Room.all)
    }
            
    angular
        .module('slick')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();