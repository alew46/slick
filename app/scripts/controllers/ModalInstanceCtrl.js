(function() {
    function ModalInstanceCtrl(Room, $uibModalInstance) {
        
        
        this.ok = function () {
            $uibModalInstance.close();
            Room.add(this.roomName);
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    

    }
            
    angular
        .module('slick')
        .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', ModalInstanceCtrl]);
})();