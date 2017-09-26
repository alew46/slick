(function() {
    function RoomCtrl(Room, Messages, $cookies) {
        this.allRooms = Room.getAll();
        
        this.setActiveRoom = function(room) {
            this.activeRoom = room;
            this.activeRoom.name = room.$id;
            console.log("Active room is now " + this.activeRoom.name);
            // we need to pull in messages by room id
            this.messages = Messages.getByRoomId(room.$id);
        };
        
        this.newMessageText = '';
        
        this.sendMessage = function () {
            Messages.send({
                content: this.newMessageText,
                roomId: this.activeRoom.name,
                username: $cookies.get('blocChatCurrentUser')
            });
            
            this.newMessageText = '';
        };
        
        this.checkKey = function (event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.sendMessage();
            }
        };
        
    }
            
    angular
        .module('slick')
        .controller('RoomCtrl', ['Room', 'Messages', '$cookies', RoomCtrl]);
})();