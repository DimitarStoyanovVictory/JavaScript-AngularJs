videoApp.factory('videoData', function videoData() {
	var videos = [
		{
			title: 'Course introduction',
			pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
			length: '3:32',
			category: 'IT',
			subscribers: 3,
			date: new Date(2015, 4, 15),
			hasSubtitles: false,
			comments: [
				{
					username: 'Pesho Peshev',
					content: 'Congratulations Nakov',
					date: new Date(2014, 12, 15, 2, 12, 11),
					likes: 3,
					websiteUrl: 'http://pesho.com/'
					}
				]
		},
		{
			title: 'Controllers and markup',
			pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
			length: '1:15',
			category: 'Angular',
			subscribers: 5,
			date: new Date(2015, 4, 17),
			hasSubtitles: true,
			comments: [
				{
					username: 'Gogo Goshev',
					content: 'Good video!',
					date: new Date(2015, 4, 17, 12, 30, 45),
					likes: 7,
					websiteUrl: 'http://gogo.com/'
					}
				]
		},
		{
			title: 'Directives and routing',
			pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
			length: '2:15',
			category: 'Angular',
			subscribers: 15,
			date: new Date(2015, 4, 11),
			hasSubtitles: true,
			comments: [
				{
					username: 'Tosho Toshev',
					content: 'Bad video!',
					date: new Date(2015, 4, 19, 18, 30, 0),
					likes: 1,
					websiteUrl: 'http://tosho.com/'
					}
				]
		}
	];

	function addVideo(videoData) {
		videos.push(videoData)
	}

	function getCategories() {
		var categories = [];

		videos.forEach(function (video) {
			if (categories.indexOf(video.category) < 0) {
				categories.push(video.category);
			}
		});
		categories.sort();
		return categories;
	}

	return {
		videos: videos,
		addVideo: addVideo,
		categories: getCategories
	}
})