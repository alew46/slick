(function() {
    function ModalOpenCtrl($uibModal, $log, $document) {
        
        var $ctrl = this;
        
        $ctrl.animationsEnabled = true;
        
         $ctrl.open = function (size, roomToAdd) {
            
            var modalInstance = $uibModal.open({
              animation: $ctrl.animationsEnabled,
              templateUrl: '/templates/modal.html',
              controller: 'ModalInstanceCtrl',
              controllerAs: '$ctrl',
              size: size,
              resolve: {
                roomToAdd: function () {
                  return $ctrl.roomToAdd;
                }
              }
            });

            modalInstance.result.then(function (roomToAdd) {
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
          };


    }
            
    angular
        .module('slick')
        .controller('ModalOpenCtrl', [ModalOpenCtrl]);
})();