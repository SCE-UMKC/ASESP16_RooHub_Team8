

angular.module('starter.controllers',['ngResource'])

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
      $scope.client=username;

     $scope.user1=username;
      $scope.pass1=password;
      console.log($scope.user1);
      console.log($scope.pass1);


      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//userdata?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

        contentType: "application/json"
      }).success(function(response) {
        var list = response;
        var count=0;
        for (i = 0; i < list.length; i++) {


          if (list[i].username == username && list[i].password == password) {
            localStorage.setItem("username", list[i].username);
            localStorage.setItem("password", list[i].password);
            localStorage.setItem("id_user", list[i]._id.$oid);
            localStorage.setItem("email", list[i].email);
            //alert("Login success");
            console.log("inside if loop");
            $state.go('home');

          }
          else {
           //alert("Incorrect username/password");
              count++;

            }
           }
        if(count==list.length){
          document.getElementById('x').innerHTML = "Invalid Creditials! Please try again....";

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

.controller('HomeCtrl', function($scope, $state,$http, $resource) {
  $scope.pageClass = 'logout';
  $scope.logout = function () {
    console.log("logged out!");
    $state.go('login');
  }
  $scope.pageClass = 'profile';
  $scope.profile = function () {
    console.log("inside profile page");
    $state.go('profile');
  }



  $scope.pageClass = 'BoardRoom';
  $scope.BoardRoom = function() {
    console.log("inside board room");
    $state.go('boardroom');
  }

  $scope.pageClass = 'task';
  $scope.task = function() {
    console.log("inside task tracker");
    $state.go('taskTracker');
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

//begin of Board Room Controller
  .controller('BoardRoomCtrl', function($scope, $state) {

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

    $scope.pageClass = 'ASE';
    $scope.ASE = function() {
      console.log("inside ASE board room");
      $state.go('ASE');
    }

    $scope.pageClass = 'PB';
    $scope.PB = function() {
      console.log("inside PB board room");
      $state.go('PB');
    }

    $scope.pageClass = 'NA1';
    $scope.NA1 = function() {
      console.log("inside NA1 board room");
      $state.go('NA1');
    }



  })
//end of board room controller

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
      $scope.pageClass = 'prf';
      $scope.prf = function() {
        console.log("profilepage");
        $state.go('profile');
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

//begin of ase posts controller

  .controller('AseCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
    // $scope.data = {};
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('home');
    }

    $scope.pageClass = 'br';
    $scope.br = function() {
      console.log("board room page!");
      $state.go('boardroom');
    }

    $scope.pageClass = 'logout';
    $scope.logout = function() {
      console.log("logged out!");
      $state.go('login');
    }
    $scope.pageClass = 'asepost';
    $scope.asepost = function(aseposting) {
      // $state.go('home');
      inside.postMethod();
      //console.log("inside ase post function");
      $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//ase_posts?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',
        data: JSON.stringify({
          aseposting: aseposting,
          username:localStorage.username

        }),
        contentType: "application/json"
      }).success(function() {
        $scope.aseposting = "";
        $scope.access(aseposting);
        alert("Posted successfully ");
        alert("Posted successfully ");
        $state.go('ASE');
        //$scope.msg ="posted successfully";
        //$window.location.href="index.html";
      })
    }


    $scope.pageClass = 'listPosts';
    $scope.listPosts = function() {
      console.log("inside listPosts function");
      // inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//ase_posts?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

        contentType: "application/json"
      }).success(function(response) {
        console.log("inside  function");
        var list = response;
        $scope.myHTML = "";
        for (i = list.length-1; i > -1; i--) {

          localStorage.setItem("post", list[i].aseposting);
          localStorage.setItem("username1", list[i].username);
          var post = localStorage.getItem("post");
          var userid = localStorage.getItem("username1");
          //alert("Login success");
          console.log(post);
          console.log(userid);
          // $scope.myHTML =myHTML+eventname;
          $scope.myHTML +=userid+" : " +post + " " + "<br><br>";

        }
      })
    }

  })
//end of ase posts controller

  //begin of pb posts controller

  .controller('PbCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
    // $scope.data = {};
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('home');
    }

    $scope.pageClass = 'br';
    $scope.br = function() {
      console.log("board room page!");
      $state.go('boardroom');
    }

    $scope.pageClass = 'logout';
    $scope.logout = function() {
      console.log("logged out!");
      $state.go('login');
    }
    $scope.pageClass = 'pbpost';
    $scope.pbpost = function(pbposting) {
      // $state.go('home');
      inside.postMethod();
      //console.log("inside ase post function");
      $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//pb_posts?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',
        data: JSON.stringify({
          pbposting: pbposting,
          username:localStorage.username

        }),
        contentType: "application/json"
      }).success(function() {
        $scope.pbposting = "";
        $scope.access(pbposting);

        alert("Posted successfully ");
        $state.go('PB');
        //$scope.msg ="posted successfully";
        //$window.location.href="index.html";
      })
    }


    $scope.pageClass = 'listPostsPB';
    $scope.listPostsPB = function() {
      console.log("inside listPosts function");
      // inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//pb_posts?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

        contentType: "application/json"
      }).success(function(response) {
        console.log("inside  function");
        var list = response;
        $scope.myHTML = "";
        for (i = list.length-1; i > -1; i--) {

          localStorage.setItem("post", list[i].pbposting);
          localStorage.setItem("username1", list[i].username);
          var post = localStorage.getItem("post");
          var userid = localStorage.getItem("username1");
          //alert("Login success");
          console.log(post);
          console.log(userid);
          // $scope.myHTML =myHTML+eventname;
          $scope.myHTML +=userid+" : " +post + " " + "<br><br>";

        }
      })
    }
  })

//end of pb posts controller

  //begin of na1 posts controller
  .controller('Na1Ctrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
    // $scope.data = {};
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('home');
    }

    $scope.pageClass = 'br';
    $scope.br = function() {
      console.log("board room page!");
      $state.go('boardroom');
    }

    $scope.pageClass = 'logout';
    $scope.logout = function() {
      console.log("logged out!");
      $state.go('login');
    }
    $scope.pageClass = 'na1post';
    $scope.na1post = function(na1posting) {
      // $state.go('home');
      inside.postMethod();
      //console.log("inside ase post function");
      $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//na1_posts?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',
        data: JSON.stringify({
          na1posting: na1posting,
          username:localStorage.username

        }),
        contentType: "application/json"
      }).success(function() {
        $scope.na1posting = "";
        $scope.access(na1posting);


        alert("Posted successfully ");
        $state.go('NA1');
        //$scope.msg ="posted successfully";
        //$window.location.href="index.html";
      })
    }


    $scope.pageClass = 'listPostsNA1';
    $scope.listPostsNA1 = function() {
      console.log("inside listPosts function");
      // inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//na1_posts?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

        contentType: "application/json"
      }).success(function(response) {
        console.log("inside  function");
        var list = response;
        $scope.myHTML = "";
        for (i = list.length-1; i > -1; i--) {

          localStorage.setItem("post", list[i].na1posting);
          localStorage.setItem("username1", list[i].username);
          var post = localStorage.getItem("post");
          var userid = localStorage.getItem("username1");
          //alert("Login success");
          console.log(post);
          console.log(userid);
          // $scope.myHTML =myHTML+eventname;
          $scope.myHTML +=userid+" : " +post + " " + "<br><br>";

        }
      })
    }
  })


  //end of na1 posts controller
  //beginning of event controller

  .controller('EventCtrl', function($scope, $state, $cordovaCalendar, $http, $window, $httpParamSerializerJQLike) {

    $scope.data = {};
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('home');
    }
    $scope.create = function() {
      console.log("inside event");
      $state.go('newTask');

    }

    $scope.pageClass = 'logout';
    $scope.logout = function() {
      console.log("logged out!");
      $state.go('login');
    }

    $scope.pageClass = 'listEvent';
    $scope.listEvent = function() {
      console.log("inside listEvent function");
      // inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//tasks?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

        contentType: "application/json"
      }).success(function(response) {
        console.log("inside  function");
        var list = response;
        $scope.myHTML = "";
        var storageFactory = new StorageFactory();
        var localstorage = storageFactory.createStorage({});
        $scope.mainuser = localstorage.username;

        for (i = list.length-1; i > -1; i--) {

          if(($scope.mainuser==list[i].username)||(list[i].publicset=="Yes")){
            console.log($scope.mainuser);

          localStorage.setItem("eventname", list[i].eventName);
          localStorage.setItem("eventdescription", list[i].eventDescription);
          localStorage.setItem("userid", list[i].username);
          var eventname = localStorage.getItem("eventname");
          var eventdescription = localStorage.getItem("eventdescription");
          var userid = localStorage.getItem("userid");
          //alert("Login success");
          console.log(eventname);
          console.log(userid);
          // $scope.myHTML =myHTML+eventname;
          $scope.myHTML +=userid+" : " + eventname +" - "+ eventdescription + " " + "<br><br>";

          }
        }
      })
    }

  })

//end of event controller

  //begin of create new event cotroller
  .controller('CreateEventCtrl', function($scope, $state, $cordovaCalendar, $http, $window, $httpParamSerializerJQLike) {
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

    $scope.pageClass = 'tt';
    $scope.tt = function() {
      console.log("task tracker!");
      $state.go('taskTracker');
    }


    $scope.createCalendar = function() {
      console.log("inside calendar");
      $cordovaCalendar.createCalendar({
        calendarName: 'Cordova Calendar',
        calendarColor: '#FF0000'
      }).then(function(result) {
        alert("calendar created");
        // success
      }, function(err) {
        // error
      });
    }

    $scope.createEvent = function() {
      console.log("inside create");
      var eventName = localStorage.getItem("eventName");
      var eventDescription = localStorage.getItem("eventDescription");
      var startDate = localStorage.getItem("startDate");
      var endDate = localStorage.getItem("endDate");
      var publicset = localStorage.getItem("publicset");
      console.log("event1");
      $cordovaCalendar.createEvent({
        username:localStorage.username,
        title: eventName,
        notes: eventDescription,
        startDate: startDate,
        endDate: endDate,
        publicset: publicset
      }).then(function(result) {
        console.log("Task created successfully");
        //$state.go('listEvents');
      });
    }


    $scope.pageClass = 'createNewEvent';
    $scope.createNewEvent = function(eventName, eventDescription, startDate, endDate, publicset) {
      // $state.go('home');
      console.log("inside create event function");
      $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//tasks?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',
        data: JSON.stringify({
          username:localStorage.username,
          eventName: eventName,
          eventDescription: eventDescription,
          startDate: startDate,
          endDate: endDate,
          publicset: publicset
        }),
        contentType: "application/json"
      }).success(function() {
        $scope.eventName = "";
        $scope.eventDescription = "";
        $scope.startDate = "";
        $scope.endDate = "";
        $scope.publicset="";
        $scope.access(eventName);
        console.log("access");
        alert("Task created successfully ");
        $state.go('taskTracker');
        //$state.go('tests');
        //$scope.msg ="User created successfully";
        //$window.location.href="index.html";
      })
    }

    $scope.pageClass = 'access';
    $scope.access = function(eventName) {
      //console.log("inside login function");
      //inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/roohub/collections//tasks?apiKey=Aqw5Vn6oE_tifGJTahI6Ou1ybtNh5MBf',

        contentType: "application/json"
      }).success(function(response) {
        var list = response;
        for (i = 0; i < list.length; i++) {
          if ((list[i].eventName == eventName)) {
            localStorage.setItem("eventName", list[i].eventName);
            localStorage.setItem("eventDescription", list[i].eventDescription);
            localStorage.setItem("startDate", list[i].startDate);
            localStorage.setItem("endDate", list[i].endDate);
            localStorage.setItem("publicset", list[i].publicset);
            localStorage.setItem("user_id", list[i].username);
            //alert("Login success");
            //location.href="home.html";
            $scope.createEvent();
            console.log("inside if loop");
            // $state.go('home');
          }
        }
      })

    }

  })
  //end of create new event controller


