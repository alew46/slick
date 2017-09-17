(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    
      if (!currentUser || currentUser === '') {
      
        $uibModal.open({
            templateUrl: '/templates/setUser.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal'
        });
        
    }
  }

  angular
    .module('slick')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();