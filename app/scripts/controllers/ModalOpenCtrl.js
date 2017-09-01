(function() {
    function ModalOpenCtrl($uibModal) {
        
        var $ctrl = this;
        
        
         $ctrl.open = function () {
            
            var modalInstance = $uibModal.open({
              templateUrl: '/templates/modal.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: 'modal'
            });

            modalInstance.result.then(function (roomToAdd) {
                console.log("Room to add", roomToAdd);
            }, function(){});
          };


    }
            
    angular
        .module('slick')
        .controller('ModalOpenCtrl', ['$uibModal', ModalOpenCtrl]);
})();