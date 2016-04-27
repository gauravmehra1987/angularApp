'use strict';

describe('Controller: ExerciseCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var ExerciseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExerciseCtrl = $controller('ExerciseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExerciseCtrl.awesomeThings.length).toBe(3);
  });
});
