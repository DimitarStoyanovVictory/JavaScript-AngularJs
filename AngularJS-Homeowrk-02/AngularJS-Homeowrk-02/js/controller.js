app.controller('MoviesController', ['$scope', function ($scope) {

    $scope.movie = {};
    $scope.addMovie = {};
	$scope.comments = {};
    $scope.movieCount = 0;
	$scope.htmlSnippet = '';

	$scope.clicked = function clicked() {

	    $scope.movieCount += 1;
		$scope.addMovie.title = $scope.movie.title;
		$scope.addMovie.picture = $scope.movie.picture;
		$scope.addMovie.length = $scope.movie.length;
		$scope.addMovie.category = $scope.movie.category;
		$scope.addMovie.subscribersCount = $scope.movie.subscribersCount;
		$scope.addMovie.date = $scope.movie.date;
		$scope.addMovie.subtitles = $scope.movie.subtitles;
	    $scope.addMovie.comments = $scope.comments;

	    var movie = '<table>' +
						 '<tr>' +
							'<td colspan="2">' + 'Movie: ' + $scope.movieCount + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Title</td>' +
							'<td>' + $scope.addMovie.title + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>PictureUrl</td>' +
							'<td>' + $scope.addMovie.picture + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Length</td>' +
							'<td>' + $scope.addMovie.length + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Category</td>' +
							'<td>' + $scope.addMovie.category + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Subscribers</td>' +
							'<td>' + $scope.addMovie.subscribersCount + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Date</td>' +
							'<td>' + $scope.addMovie.date + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>HaveSubtitles</td>' +
							'<td>' + $scope.addMovie.subtitles + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td colspan="2">Comments</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Username</td>' +
							'<td>' + $scope.addMovie.comments.username + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Content</td>' +
							'<td>' + $scope.addMovie.comments.content + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Date</td>' +
							'<td>' + $scope.addMovie.comments.date + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>Like</td>' +
							'<td>' + $scope.addMovie.comments.likes + '</td>' +
						'</tr>' +
						'<tr>' +
							'<td>WebsiteUrl</td>' +
							'<td>' + $scope.addMovie.comments.websiteUrl + '</td>' +
						'</tr>' + '<br />' +
					'</table>';

	    $scope.htmlSnippet += movie;
	}
}]);