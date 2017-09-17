(function() {
    function ModalInstanceCtrl(Room, $uibModalInstance, $cookies) {
        
        
        this.ok = function() {
            $uibModalInstance.close();
            Room.add(this.roomName);
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        this.setUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            console.log("Username is now " + this.username);
            $uibModalInstance.close();
        };
    

    }
            
    angular
        .module('slick')
        .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance','$cookies', ModalInstanceCtrl]);
})();