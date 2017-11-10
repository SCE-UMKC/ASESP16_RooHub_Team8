

angular.module('starter.controllers', ['ngSanitize'])

//*************************************//





.controller('LoginCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {

        // $scope.data = {};
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
        $scope.pageClass = 'login';
        $scope.login = function(username, password) {
            //console.log("inside login function");
            inside.getMethod();
            $http({
                    method: 'GET',
                    url: 'https://api.mongolab.com/api/1/databases/roohub/collections//userdata?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

                    contentType: "application/json"
                }).success(function(response) {
                    var list = response;
                    for (i = 0; i < list.length; i++) {
                        if ((list[i].username == username) && (list[i].password == password)) {
                            localStorage.setItem("username", list[i].username);
                          localStorage.setItem("password", list[i].password);
                            localStorage.setItem("id_user", list[i]._id.$oid);
                          localStorage.setItem("email", list[i].email);
                            //alert("Login success");
                            //location.href="home.html";
                            console.log("inside if loop");
                            $state.go('home');
                        } else {
                            //alert("Incorrect username/password");
                            console.log("inside else loop");
                            document.getElementById('x').innerHTML = "<P>Invalid Creditials! Please try again....</p>";
                        }
                    }
                })
        }
    })
    //*************************************//
    //end of login controller

//begin of register controller
.controller('RegisterCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
        // $scope.data = {};
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
  $scope.pageClass = 'logout';
  $scope.logout = function() {
    console.log("logged out!");
    $state.go('login');
  }
        $scope.pageClass = 'register';
        $scope.register = function(username, password, email,question,answer) {
            // $state.go('home');
            inside.postMethod();
            //console.log("inside register function");
            $http({
                method: 'POST',
                url: 'https://api.mongolab.com/api/1/databases/roohub/collections//userdata?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',
                data: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                  question:question,
                  answer:answer

                }),
                contentType: "application/json"
            }).success(function() {
                $scope.username = "";
                $scope.password = "";
                $scope.email = "";
              $scope.question = "";
              $scope.answer = "";
                alert("User created successfully ");
                $state.go('login');
                //$scope.msg ="User created successfully";
                //$window.location.href="index.html";
            })
        }
    })
    //end of register controller

//beginning of home controller
.controller('HomeCtrl', function($scope, $state) {
  $scope.pageClass = 'logout';
  $scope.logout = function() {
    console.log("logged out!");
    $state.go('login');
  }
    $scope.pageClass = 'profile';
    $scope.profile = function() {
        console.log("inside profile page");
        $state.go('profile');
    }


  $scope.pageClass = 'emptyBoardRoom';
  $scope.emptyBoardRoom = function() {
    console.log("inside board room");
    $state.go('empty');
  }


    var storageFactory = new StorageFactory();
    var localstorage = storageFactory.createStorage({});
    $scope.username1 = localstorage.username;
    var adminName = Admin.getInstance();
    //console.log(user.fullName()); // true
    $scope.firstname = adminName.firstName;
    $scope.lastname = adminName.lastName;

})

//end of home controller
//begin of profile controller
.controller('ProfileCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
        $scope.data = {};
        $scope.pageclass = 'delete';
        $scope.delete = function() {
            var id = localStorage.getItem("id_user");
            inside.deleteMethod();
            //console.log("inside delete");
            $http({
                method: 'DELETE',
                url: 'https://api.mongolab.com/api/1/databases/roohub/collections//userdata/' + id + '?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

                contentType: "application/json"
            }).success(function() {
                alert("Delete success!");
                $state.go('login');
            })
        }
        $scope.pageclass = 'update';
        $scope.update = function() {
            console.log("inside update function");
            $state.go('update')
        }
         $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }

    })
    //end of profile controller

    //begin of update controller
    .controller("UpdateCtrl", function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
   $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
        $scope.pageClass = 'update';
        $scope.update = function(username, password, email) {
            inside.putMethod();
            var id = localStorage.getItem("id_user");
            //console.log("inside update function");
            $http({
                method: 'PUT',
                url: 'https://api.mongolab.com/api/1/databases/roohub/collections//userdata/' + id + '?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',
                data: JSON.stringify({
                    "username": username,
                    "password": password,
                    "email": email
                }),

                contentType: "application/json"


            }).success(function() {
                $scope.username = "";
                $scope.password = "";
                $scope.email = "";
                alert("update successful");
                console.log("navigating to home page from update page");
                $state.go('home');
            })
        }
         $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }
    })
    //end of update controller

