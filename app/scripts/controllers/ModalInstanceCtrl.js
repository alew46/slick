(function() {
    function ModalInstanceCtrl($uibModalInstance, roomToAdd) {
        
        
        this.roomToAdd = roomToAdd
        
        
    

    }
            
    angular
        .module('slick')
        .controller('ModalInstanceCtrl', [ModalInstanceCtrl]);
})();