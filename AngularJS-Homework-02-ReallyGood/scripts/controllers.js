videoApp.controller('VideoListController',
    function VideoListController($scope, videoData) {
        $scope.videos = videoData.videos;
        $scope.categories = videoData.categories();
    });

videoApp.controller('AddVideoController',
    function AddVideoController($scope, $location, videoData) {
        $scope.addVideo = function(video, addVideoForm) {

            if (addVideoForm.$valid) {
                videoData.addVideo(video);
                $location.path('/');
            }
        };

        $scope.cancelSave = function () {
            $location.path('/');
        }

    });