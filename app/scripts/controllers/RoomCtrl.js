(function() {
    function RoomCtrl(Room, Messages) {
        this.allRooms = Room.getAll();
        
        this.setActiveRoom = function(room) {
            this.activeRoom = room;
            this.activeRoom.name = room.$value;
            console.log("Active room is now " + this.activeRoom.name);
            // we need to pull in messages by room id
            this.messages = Messages.getByRoomId(room.$id);
        };
        
    }
            
    angular
        .module('slick')
        .controller('RoomCtrl', ['Room', 'Messages', RoomCtrl]);
})();