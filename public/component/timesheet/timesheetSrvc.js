angular.module('fullstack').service('timesheetSrvc', function($http) {
    
    var self = this;
    var baseUrl = '/api/timesheet?id=77&week=2017-10-08';
    
    self.getTimesheet = function () {
        return $http({
            method: 'GET',
            url: baseUrl 
        }).then(function (response) {
            console.log(response.data)
            return response.data;
        });
    };
    
    // self.readOne = function (id) {
    //     return $http({
    //         method: 'GET',
    //         url: baseUrl + '/?id=' + id
    //     }).then(function (response) {
    //         return response.data;
    //     });
    // };
    
    // self.create = function (data) {
    //     console.log(data)
    //     return $http({
    //         method: 'POST',
    //         url: baseUrl,
    //         data: data,
    //         params: {
    //             returnObject: true
    //         }
    //     }).then(function (response) {
    //         return response.data;
    //     });
    // };
    
    // self.update = function (id, data) {
    //     return $http({
    //         method: 'PUT',
    //         url: baseUrl + '?id=' + id,
    //         data: data
    //     }).then(function (response) {
    //         return response.data;
    //     });
    // };
    
    // self.delete = function (id) {
    //     return $http({
    //         method: 'DELETE',
    //         url: baseUrl + '/?id=' + id
    //     });
    // };
    
    // self.getStatus = function (id) {
    //     return $http({
    //         method: 'GET',
    //         url: '/api/userstatus'
    //     });
    // };
    
    
    
    
    })
    
    