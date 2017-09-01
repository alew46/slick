(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        
        
        this.ok = function () {
            $uibModalInstance.close('the room name');
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    

    }
            
    angular
        .module('slick')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();