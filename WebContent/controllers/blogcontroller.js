app.controller('BlogPostController',function($scope,$location,$rootScope,BlogService) {
	$scope.addBlog=function(blog) {
		BlogService.addBlog(blog).then(
				function(response) {
					alert('Blogpost added successfully and waiting for approval');
					$location.path('/home')
				},
				function(response) {
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
	if($rootScope.loggedInUser.role=='ADMIN') {
		BlogService.getBlogsWaitingForApproval()
		.then(
				function(response) {
					$scope.blogsWaitingForApproval=response.data
				},function(response) {
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
	BlogService.getBlogsApproved().then(function(response) {
		$scope.blogsApproved=response.data
	},function(response) {
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
	})
})