

angular.module('starter.controllers', ['ngSanitize','ngTwitter','firebase'])

//*************************************//



  .controller("recordController", function($scope, $cordovaMedia,$ionicLoading) {
    var src = "/storage/sdcard1/audio.mp3";
    //var src = "/storage/emulated/0/audio.mp3";
    var media = $cordovaMedia.newMedia(src);

    $scope.playAudio = function() {
      console.log("inside record controller");

      //var src = "myrecording.mp3";
      /*var mediaRec = new Media(src,success callback
        function() {
          console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
          console.log("recordAudio():Audio Error: "+ err.code);
        });*/

      // Record audio
      media.play();
    }
    $scope.pauseAudio = function() {
      media.pause();
    }
    $scope.stopAudio = function() {
      media.stop();
    }


 /*   $scope.startPlay = function() {
      if (media == null) {
        media = $cordovaMedia.newMedia(src, null, null, mediaStatusCallback);
      }
      media.play();
    }

    $scope.stopPlay = function() {
      media.stop();
    }

    $scope.startRecord = function() {
      media.startRecord();
    }
    $scope.pausePlay = function() {
      media.pause();
    }*/
  })

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
                    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

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
                url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
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
  $scope.data = {};
  $scope.pageClass = 'fbGo';
  $scope.fbGo = function() {
    console.log("fb page !");
    $state.go('fb');
  }
  $scope.pageClass = 'events';
  $scope.events = function() {
    console.log("inside events page");
    $state.go('event');
  }
  $scope.pageClass = 'share';
  $scope.share = function() {
    console.log("inside share page");
    $state.go('share');
  }
    $scope.pageClass = 'profile';
    $scope.profile = function() {
        console.log("inside profile page");
        $state.go('profile');
    }
     $scope.pageClass = 'twitterAuth';
    $scope.twitterAuth = function() {
        console.log("inside twitter auth page");
        $state.go('twitterFeed');
    }
  $scope.pageClass = 'camera';
  $scope.camera = function() {
    console.log("inside camera page");
    $state.go('firebase');
  }

  $scope.pageClass = 'fbAuth';
  $scope.fbAuth = function() {
    console.log("inside fb user page");
    $state.go('fb');
  }
  $scope.pageClass = 'twitterUser';
  $scope.twitterUser = function() {
    console.log("inside twitter user page");
    $state.go('twitterUserData');
  }
  $scope.pageClass = 'record';
  $scope.record = function() {
    console.log("inside record lectures");
    $state.go('record');
  }

  $scope.pageClass = 'file';
  $scope.file = function() {
    console.log("inside list page");
    $state.go('file');
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
      $state.go('createEvent');

    }
    $scope.list = function() {
      console.log("inside list");
      $state.go('listEvents');

    }

    $scope.pageClass = 'logout';
    $scope.logout = function() {
      console.log("logged out!");
      $state.go('login');
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

    $scope.pageClass = 'backToEvent';
    $scope.backToEvent = function() {
      console.log("back to events page");
      $state.go('event');
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
      var location = localStorage.getItem("location");
      var eventDescription = localStorage.getItem("eventDescription");
      var startDate = localStorage.getItem("startDate");
      var endDate = localStorage.getItem("endDate");
      console.log("event1");
      $cordovaCalendar.createEvent({
        title: eventName,
        location: location,
        notes: eventDescription,
        startDate: startDate,
        endDate: endDate
      }).then(function(result) {
        console.log("Event created successfully");
        alert("event created");
        //$state.go('listEvents');
      }, function(err) {
        console.error("There was an error: " + err);
      });
    }


    $scope.pageClass = 'createNewEvent';
    $scope.createNewEvent = function(eventName, location, eventDescription, startDate, endDate) {
      // $state.go('home');
      console.log("inside create event function");
      $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Events?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
        data: JSON.stringify({
          eventName: eventName,
          location: location,
          eventDescription: eventDescription,
          startDate: startDate,
          endDate: endDate
        }),
        contentType: "application/json"
      }).success(function() {
        $scope.eventName = "";
        $scope.location = "";
        $scope.eventDescription = "";
        $scope.startDate = "";
        $scope.endDate = "";
        $scope.access(eventName);
        console.log("access");
        alert("Event created successfully ");
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
        url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Events?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

        contentType: "application/json"
      }).success(function(response) {
        var list = response;
        for (i = 0; i < list.length; i++) {
          if ((list[i].eventName == eventName)) {
            localStorage.setItem("eventName", list[i].eventName);
            localStorage.setItem("location", list[i].location);
            localStorage.setItem("eventDescription", list[i].eventDescription);
            localStorage.setItem("startDate", list[i].startDate);
            localStorage.setItem("endDate", list[i].endDate);
            localStorage.setItem("user_id", list[i]._id.$oid);
            //alert("Login success");
            //location.href="home.html";
            $scope.createEvent();
            console.log("inside if loop");
            // $state.go('home');
          } else {
            //alert("Incorrect username/password");
            console.log("inside else loop");
            //document.getElementById('x').innerHTML="<P>Invalid Creditials! Please try again....</p>";
          }
        }
      })

    }


    $scope.shareEvent=function(){
      var eventName = localStorage.getItem("eventName");
      var eventDescription = localStorage.getItem("eventDescription");
      var location = localStorage.getItem("location");
      console.log("insdie share event function!");
      console.log("hi");
      window.plugins.socialsharing.shareViaTwitter("EventName:"+eventName+"  "+"Description:"+eventDescription+" "+"Location:"+location);
    }


  })
  //end of create new event controller

  //begin of list controller//
  .controller('listCtrl', function($scope, $state, $cordovaCalendar, $http, $window, $httpParamSerializerJQLike) {
    $scope.pageClass = 'logout';
    $scope.logout = function() {
      console.log("logged out!");
      $state.go('login');
    }

    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('home');
    }

    $scope.pageClass = 'listEvent';
    $scope.listEvent = function() {
      console.log("inside listEvent function");
      // inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Events?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

        contentType: "application/json"
      }).success(function(response) {
        console.log("inside  function");
        var list = response;
        $scope.myHTML = "";
        for (i = 0; i < list.length; i++) {

          localStorage.setItem("eventname", list[i].eventName);
          localStorage.setItem("userid", list[i]._id.$oid);
          var eventname = localStorage.getItem("eventname");
          var userid = localStorage.getItem("userid");
          //alert("Login success");
          console.log(eventname);
          console.log(userid);
          // $scope.myHTML =myHTML+eventname;
          $scope.myHTML += eventname + " " + "<br>";

        }
      })
    }

  })

  //end of list controller


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
                url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

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
                url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
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

  //begin of forgot controller
  .controller('forgotCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {

    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('login');
    }
    var list="";

    $scope.submitAnswer = function(username) {
      var usrename1=username;
      //console.log("inside login function");
      //inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

        contentType: "application/json"
      }).success(function(response) {
     list=response;
      })
      for (i = 0; i < list.length; i++) {
        if ((usrename1== list[i].username )) {

          localStorage.setItem("username", list[i].username);
          localStorage.setItem("password", list[i].password);
          localStorage.setItem("id_user", list[i]._id.$oid);
          localStorage.setItem("email", list[i].email);
          localStorage.setItem("question", list[i].question);
          localStorage.setItem("answer", list[i].answer);
          //alert("Login success");
          //location.href="home.html";
          // alert(id_user);
          alert(username);
          $state.go('security');
          //console.log("inside if loop");
          //alert(_id.$oid);
        }
        else {
          //alert("No such username");
          console.log("inside else loop");
          //document.getElementById('x').innerHTML = "<P>Invalid Creditials! Please try again....</p>";
          $state.go('login');
        }
      }
    }

  })
  //end of forgot controller

  //begin of reset controller
  .controller("resetCtrl", function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('login');
    }
    $scope.pageClass = 'reset';
    $scope.reset = function(password,cpassword) {

      if(password==cpassword){
        //inside.putMethod();
        var id = localStorage.getItem("id_user");
        var  username=localStorage.getItem("username");
        //var password=password;
        var email=localStorage.getItem("email");
        var  question=localStorage.getItem("question");
        var  answer=localStorage.getItem("answer");
        //console.log("inside update function");
        $http({
          method: 'PUT',
          url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
          data: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
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
          alert("update successful");
          console.log("navigating to home page from update page");
          $state.go('login');
        })
      }
      else{
        console.log("inside reset else");
        document.getElementById('x').innerHTML = "<P>Password do not match! Please try again....</p>";
        $state.go('reset');
      }

    }

  })
  //end of reset controller


  //begin of security controller
  .controller('securityCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {

    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page !");
      $state.go('login');
    }
//alert("hi");
    //var securityQuestion="";
    var id = localStorage.getItem("id_user");
    $http({
      method: 'GET',
      url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

      contentType: "application/json"
    }).success(function(response) {
      //securityQuestion= response.question;
      //alert(response.question);
      $scope.mySecurityQuestion = JSON.stringify(response.question);
    });

    $scope.pageClass = 'securityAnswer';
    $scope.securityAnswer = function(answer) {
      console.log("inside security answer function");
      //inside.getMethod();
      $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

        contentType: "application/json"
      }).success(function(response) {
        var list = response;
        if ((list.answer == answer)){
          console.log("inside if loop");
          alert("success");
          $state.go('reset');
        } else {
          //alert("Incorrect username/password");
          console.log("inside else loop");
          alert("Incorrect details....");
          $state.go('security');
          //document.getElementById('x').innerHTML = "<P>Password do not match! Please try again....</p>";
        }

      })
    }
  })
  //end of security controller

//begin of my controller
.controller('twitterFeedCtrl', function($scope, $state,$cordovaOauth,$ionicPlatform,$twitterApi,$http,$window, $httpParamSerializerJQLike) {

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

     //var twitterKey = 'STORAGE.TWITTER.KEY';
  var clientId = 'FrNiS8CXRJ4VafvktnRAuhrJz';
  var clientSecret = 'Lm80ic9HQdkhfSIu94eL3wP5OAWYP1G9rJjDLNvO05rg5rmsRZ';
  //var myToken = '';
 console.log("inside twitter");
  $scope.tweet = {};

  var myToken='';
  var id = localStorage.getItem("id_user");
  $http({
    method: 'GET',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

    contentType: "application/json"
  }).success(function(response) {
    myToken= response.twitterAccessToken;
    console.log(myToken);
    //alert(response.twitterAccessToken);

  });
      $ionicPlatform.ready(function() {
    //myToken = JSON.parse(window.localStorage.getItem(twitterKey));
    if (myToken === '' || myToken === null) {
      $cordovaOauth.twitter(clientId, clientSecret).then(function (succ) {
       // alert(succ);
        myToken = succ;
        var  username=localStorage.getItem("username");
        var password=localStorage.getItem("password");
        var email=localStorage.getItem("email");
        $scope.storeAccessToken(username,password,email,myToken);
        console.log("inside twitter 1");
       // window.localStorage.setItem(twitterKey, JSON.stringify(succ));
        $twitterApi.configure(clientId, clientSecret, myToken);
        $scope.showHomeTimeline();

      }, function(error) {
        console.log(error);
      });
    } else {
      $twitterApi.configure(clientId, clientSecret, myToken);
      $scope.showHomeTimeline();
    }
  });

  $scope.pageClass = 'storeAccessToken';
  $scope.storeAccessToken = function(username,password,email,myToken) {
    //inside.putMethod();
    var id = localStorage.getItem("id_user");
    //console.log("inside update function");
    $http({
      method: 'PUT',
      url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
      data: JSON.stringify({
        username: username,
        password: password,
        email: email,
        "twitterAccessToken":myToken
      }),

      contentType: "application/json"


    }).success(function() {
      $scope.username = "";
      $scope.password = "";
      $scope.email = "";
      $scope.twitterAccessToken = "";
      alert("update successful");
      console.log("navigating to home page from update page");
      //$state.go('home');
    })
  };

  // Load your home timeline
  $scope.showHomeTimeline = function() {
   // $twitterApi.getUserDetails();
    $twitterApi.getHomeTimeline().then(function(data) {
      $scope.home_timeline = data;
    });
  };
  // Post a tweet
  $scope.submitTweet = function() {
    $twitterApi.postStatusUpdate($scope.tweet.message).then(function(result) {
      $scope.showHomeTimeline();
    });
  };

  // Pull-to-refresh
  $scope.doRefresh = function() {
    $scope.showHomeTimeline();
    $scope.$broadcast('scroll.refreshComplete');
  };

  // Display the correct date from Twitter response
  $scope.correctTimestring = function(string) {
    return new Date(Date.parse(string));
  };
})
////begin of twitter controller
.controller('twitterUserDataCtrl', function($scope, $state,$cordovaOauth,$ionicPlatform,$twitterApi,$http,$window, $httpParamSerializerJQLike) {

  $scope.pageClass = 'home';
  $scope.home = function () {
    console.log("home page !");
    $state.go('home');
  }

  $scope.pageClass = 'logout';
  $scope.logout = function () {
    console.log("logged out!");
    $state.go('login');
  }

  var myToken='';
  var id = localStorage.getItem("id_user");
  $http({
    method: 'GET',
    url: 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project/' + id + '?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

    contentType: "application/json"
  }).success(function(response) {
    myToken= response.twitterAccessToken;
    //alert(response.twitterAccessToken);

  });
// Get user details
  $scope.showUserDetails = function () {

    //var twitterKey = 'STORAGE.TWITTER.KEY';
    var clientId = 'FrNiS8CXRJ4VafvktnRAuhrJz';
    var clientSecret = 'Lm80ic9HQdkhfSIu94eL3wP5OAWYP1G9rJjDLNvO05rg5rmsRZ';
    //var myToken = JSON.parse(window.localStorage.getItem(twitterKey));


    $twitterApi.configure(clientId, clientSecret, myToken);
  // alert("hbbbbh");
    $twitterApi.getUserTimeline().then(function (data) {
      //alert(data[0].id);
      $scope.user_details = data;

    });
  };
})
//end of twitter controller


  .controller("FirebaseController", function($scope, $state,$firebase, $firebaseAuth) {
    $scope.pageClass = 'home';
    $scope.home = function () {
      console.log("home page !");
      $state.go('home');
    }

    $scope.pageClass = 'logout';
    $scope.logout = function () {
      console.log("logged out!");
      $state.go('login');
    }

    var fb = new Firebase("https://student-corner-55948.firebaseio.com/");
    var fbAuth = $firebaseAuth(fb);

    $scope.login = function(username, password) {
      fbAuth.$authWithPassword({
        email: username,
        password: password
      }).then(function(authData) {
        $state.go("secure");
      }).catch(function(error) {
        console.error("ERROR: " + error);
      });
    }

    $scope.register = function(username, password) {
      fbAuth.$createUser({email: username, password: password}).then(function(userData) {
        return fbAuth.$authWithPassword({
          email: username,
          password: password
        });
      }).then(function(authData) {
        $state.go("secure");
      }).catch(function(error) {
        console.error("ERROR: " + error);
      });
    }

  })

//secure controller

.controller("SecureController", function($scope,$state,$firebase,$ionicHistory, $firebaseArray, $cordovaCamera) {

  $ionicHistory.clearHistory();  //for clearing user login history

  $scope.images = [];

  var fbAuth = fb.getAuth();
  if(fbAuth) {
    var userReference = fb.child("users/" + fbAuth.uid);   //capture the user reference in data structure ,it navigates to specific user page in freebase
    var syncArray = $firebaseArray(userReference.child("images"));  //binding specific node in firebase to an array object in angularjs
    $scope.images = syncArray;
  } else {
    $state.go("firebase");  //directs to firebase page
  }

  $scope.upload = function() {
    var options = {
      quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false
    };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      syncArray.$add({image: imageData}).then(function() {
        alert("Image has been uploaded");
      });
    }, function(error) {
      console.error(error);
    });
  }

})
//end of secure controller
// *****share controller
  .controller('shareCtrl',function($scope, $state) {

    // $scope.data = {};
var myMessage="Hello friends";
    $scope.pageClass = 'logout';
    $scope.logout = function() {
      console.log("logged out!");
      $state.go('login');
    }
    $scope.pageClass = 'home';
    $scope.home = function() {
      console.log("home page!");
      $state.go('home');
    }
    $scope.whatsappShare=function(){
      console.log("insdie whatsapp fun!");
      window.plugins.socialsharing.shareViaWhatsApp('StudentCorner:', null /* img */, " hi" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
    }
    $scope.twitterShare=function(){
      console.log("insdie twitter fun!");
      console.log(myMessage);
      window.plugins.socialsharing.shareViaTwitter("Message:"+myMessage);
    }
    $scope.facebookShare=function(){
      console.log("insdie fb fun!");
      window.plugins.socialsharing.shareViaFacebook("Message:"+myMessage);
      //window.plugins.socialsharing.shareViaFacebook('StudentCorner:', null /* img */, 'https://play.google.com/store/apps/details?id=609841255825076', null, function(errormsg){alert("Error: Cannot Share")});
    }
    $scope.OtherShare=function(){
      console.log("insdie othershare fun!");
      window.plugins.socialsharing.share('Hello:', null, null, 'Student Corner connects studetns to the college');
    }

  })

//end of  of share controller

  //*************************************//
//begin of record controller

//end of record controller
  //*************************************//

;
