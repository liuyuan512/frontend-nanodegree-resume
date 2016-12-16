/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {

		"name":"Aaron Liu",
		"role":"Web Developer",
		"welcomeMessage":"Never give up",
		"biopic":"images/me.jpg",
		"contacts":{
			"mobile":"13161360262",
			"email":"liuyuan512@gmail.com",
			"github":"https://github.com/liuyuan512",
			"twitter":"https://twitter.com/liuyuan512",
			"location":"Beijing"
		},
		"skills":["webDevelopment","design","PS"],
    "display":function () {

      var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
      $("#header").prepend(formattedRole);

      var formattedName = HTMLheaderName.replace("%data%",bio.name);
      $("#header").prepend(formattedName);

      var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
      $("#topContacts").prepend(formattedMobile);

      var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
      $("#topContacts").append(formattedEmail);

      var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
      $("#topContacts").append(formattedTwitter);

      var formattedGitHub = HTMLgithub .replace("%data%",bio.contacts.github);
      $("#topContacts").append(formattedGitHub);

      var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
      $("#topContacts").append(formattedLocation);

      var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
      $("#header").append(formattedPic);

      var formattedWeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
      $("#header").append(formattedWeMsg);

      if(bio.skills.length > 0){

       $("#header").append(HTMLskillsStart);

       var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
       $("#skills").append(formattedSkill);

       formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
       $("#skills").append(formattedSkill);

       formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
       $("#skills").append(formattedSkill);

     }


    }
};




var work = {
      "jobs":[
        {
          "employer":"GIT",
          "title":"employee",
          "location":"Wangjing",
          "dates":"2016.07.11 - 2016.09.1",
          "description":"Find new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacher"
        },
        {
          "employer":"StuQ",
          "title":"employee",
          "location":"Luowa",
          "dates":"2016.09.11 - now",
          "description":"Just do something unimportantJust do something unimportantJust do something unimportantJust do something unimportantJust do something unimportantJust do something unimportantJust do something unimportant"
        }
      ],

      "display":function() {

        for (var job in work.jobs){

          $("#workExperience").append(HTMLworkStart);

          var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
          var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;

          $(".work-entry:last").append(formattedEmployerTitle);

          var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
          $(".work-entry:last").append(formattedDates);

          var formattedLocation = HTMLworkDates.replace("%data%",work.jobs[job].location);
          $(".work-entry:last").append(formattedLocation);

          var formattedDescription = HTMLworkDates.replace("%data%",work.jobs[job].description);
          $(".work-entry:last").append(formattedDescription);
        }
      }
};



var projects = {
    "projects":[{
		  "title":"Study on Human Eye Sensitivity",
		  "dates":"2014.10.01",
		  "description":"It was a study about the Sensitivity of Human Eye when they watch TV. I can't find the image, so I take an eminem photo instead",
		  "images":[ "https://i0.wp.com/www.morningledger.com/wp-content/uploads/2016/10/Cu-qga4XYAA_xQ0.jpg?resize=600%2C400",
		  "http://pic.pimg.tw/eminemrelapse/a39c58451abd5c12e819acd8b119e3c2.jpg"]
    },
    {
      "title":"Human Body Fall Detect based on Kinect",
		  "dates":"2015.09.01",
		  "description":"Using Kinect to detect human falling in room. I can't find the image, so I take a Taylor-Swift photo instead",
		  "images":[ "http://secretsofagoodgirl.com/wp-content/uploads/2016/08/Taylor-Swift-2.jpg",
		  "http://todateen.uol.com.br/tt/wp-content/uploads/2015/07/taylor-swifit-presa-andaime-durante-show..jpg"]
    }],

     "display" :function (){

      for (var project in projects.projects){

        $("#projects").append(HTMLprojectStart);

        var fotmattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(fotmattedTitle);

        var fotmattedDates = HTMLprojectTitle.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(fotmattedDates);

        var fotmattedDescreption = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(fotmattedDescreption);

                if (projects.projects[project].images.length > 0){
                    for ( var image in projects.projects[project].images){
                    var fotmattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                    $(".project-entry:last").append(fotmattedImage);
                  }
                }
      }
    }


  //
  //   projects.projects.forEach(function(i){
  //   $("#projects").append(HTMLprojectStart);
  //
  //   var fotmattedTitle = HTMLprojectTitle.replace("%data%",i.title);
  //   $(".project-entry:last").append(fotmattedTitle);
  //
  //   var fotmattedDates = HTMLprojectTitle.replace("%data%",i.dates);
  //   $(".project-entry:last").append(fotmattedDates);
  //
  //   var fotmattedDescreption = HTMLprojectDescription.replace("%data%",i.description);
  //   $(".project-entry:last").append(fotmattedDescreption);
  //
  //           if (projects.projects[project].images.length > 0){
  //               for ( var image in projects.projects[project].images){
  //               var fotmattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
  //               $(".project-entry:last").append(fotmattedImage);
  //             }
  //           }
  //   });
  // }

};


var education = {
  "schools": [{
	  "name":"Communication University of China",
	  "location":"Beijing",
    "degree":"master's degree",
	  "degreeDates":"2016.07.01",
	  "url":"http://www.cuc.edu.cn/",
	  "majors":"Electricity and Communiation Engineering"
	},
	{
	  "name":"Yantai University",
	  "location":"Yantai",
    "degree":"bachelor degree",
	  "degreeDates":"2014.07.01",
	  "url":"http://www.ytu.edu.cn/",
	  "majors":"Communiation Engineering"
	}
  ],
	"onlineCourses":[
	{
	   "title":"Front-End Web Developer Nanodegree",
	   "school":"Udacity",
	   "dates":"2016.10.01",
	   "url":"https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575462/lessons/2962818615239847/concepts/29594685550923"
	},
	{
	   "title":"Deep Learning",
	   "school":"StuQ",
	   "dates":"2016.12.01",
	   "url":"fhttp://www.stuq.org/course/detail/1100"
	}
  ],
  "display":function(){

    for (var school in education.schools){

    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].degreeDates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchooLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedSchooLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    $(".education-entry:last").append(formattedSchoolMajor);

    }

    for (var onlineCourse in education.onlineCourses){

      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLonlineStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
      $(".education-entry:last").append(formattedOnlineTitle);

      var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
      $(".education-entry:last").append(formattedSchool);

      var formattedDates = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedOnlineURL);


    }

  }
};




  bio.display();

  work.display();

  projects.display();

  education.display();

$("#mapDiv").append(googleMap);
