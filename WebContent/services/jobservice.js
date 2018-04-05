app.factory('JobService',function($http) {
	var jobService={}
 
	jobService.addJob=function(job) {
		return $http.post("http://localhost:8181/Middlewareprj2/addjob",job)
	}
	
	jobService.getAllJobs=function() {
		return $http.get("http://localhost:8181/Middlewareprj2/alljobs");
	}
	
	jobService.getJob=function(id) {
		return $http.get("http://localhost:8181/Middlewareprj2/getjob/"+id)
	}		
		return jobService;

})