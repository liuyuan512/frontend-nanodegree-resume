/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 This is empty on purpose! Your code to build the resume will go here.
  */
var bio = {

    "name": "Aaron Liu",
    "role": "Web Developer",
    "welcomeMessage": "Never give up",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "13161360262",
        "email": "liuyuan512@gmail.com",
        "github": "https://github.com/liuyuan512",
        "twitter": "https://twitter.com/liuyuan512",
        "location": "Beijing"
    },
    "skills": ["webDevelopment", "design", "PS"],
    "display": function() {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").prepend(formattedMobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);

        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedGitHub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);

        var formattedWeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWeMsg);


        if (bio.skills.length > 0) {

            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(val) {

                var formattedSkill = HTMLskills.replace("%data%", val);
                $("#skills").append(formattedSkill);

            });
        }
    }
};




var work = {
    "jobs": [{
        "employer": "GIT",
        "title": "employee",
        "location": "Wangjing",
        "dates": "2016.07.11 - 2016.09.1",
        "description": "Find new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacherFind new teacher"
    }, {
        "employer": "StuQ",
        "title": "employee",
        "location": "Luowa",
        "dates": "2016.09.11 - now",
        "description": "Just do something unimportantJust do something unimportantJust do something unimportantJust do something unimportantJust do something unimportantJust do something unimportantJust do something unimportant"
    }],

    "display": function() {

        work.jobs.forEach(function(val) {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", val.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", val.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", val.dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkDates.replace("%data%", val.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDates.replace("%data%", val.description);
            $(".work-entry:last").append(formattedDescription);

        });

    }
};



var projects = {
    "projects": [{
        "title": "Study on Human Eye Sensitivity",
        "dates": "2014.10.01",
        "description": "It was a study about the Sensitivity of Human Eye when they watch TV. I can't find the image, so I take an eminem photo instead",
        "images": ["https://i0.wp.com/www.morningledger.com/wp-content/uploads/2016/10/Cu-qga4XYAA_xQ0.jpg?resize=600%2C400",
            "http://pic.pimg.tw/eminemrelapse/a39c58451abd5c12e819acd8b119e3c2.jpg"
        ]
    }, {
        "title": "Human Body Fall Detect based on Kinect",
        "dates": "2015.09.01",
        "description": "Using Kinect to detect human falling in room. I can't find the image, so I take a Taylor-Swift photo instead",
        "images": ["http://secretsofagoodgirl.com/wp-content/uploads/2016/08/Taylor-Swift-2.jpg",
            "http://todateen.uol.com.br/tt/wp-content/uploads/2015/07/taylor-swifit-presa-andaime-durante-show..jpg"
        ]
    }],

    "display": function() {

        projects.projects.forEach(function(val) {

            $("#projects").append(HTMLprojectStart);

            var fotmattedTitle = HTMLprojectTitle.replace("%data%", val.title);
            $(".project-entry:last").append(fotmattedTitle);

            var fotmattedDates = HTMLprojectTitle.replace("%data%", val.dates);
            $(".project-entry:last").append(fotmattedDates);

            var fotmattedDescreption = HTMLprojectDescription.replace("%data%", val.description);
            $(".project-entry:last").append(fotmattedDescreption);

            if (val.images.length > 0) {

                val.images.forEach(function(v) {
                    var fotmattedImage = HTMLprojectImage.replace("%data%", v);
                    $(".project-entry:last").append(fotmattedImage);

                });

            }

        });
    }
};



var education = {
    "schools": [{
        "name": "Communication University of China",
        "location": "Beijing",
        "degree": "master's degree",
        "dates": "2016.07.01",
        "url": "http://www.cuc.edu.cn/",
        "majors": ["Electricity and Communiation Engineering", "Objective-C", "Swift"]
    }, {
        "name": "Yantai University",
        "location": "Yantai",
        "degree": "bachelor degree",
        "dates": "2014.07.01",
        "url": "http://www.ytu.edu.cn/",
        "majors": ["Communiation Engineering", "CSS", "JavaScript", "python"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016.10.01",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575462/lessons/2962818615239847/concepts/29594685550923"
    }, {
        "title": "Deep Learning",
        "school": "StuQ",
        "dates": "2016.12.01",
        "url": "fhttp://www.stuq.org/course/detail/1100"
    }],
    "display": function() {

        education.schools.forEach(function(val) {

            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", val.name);
            var formattedSchoolURL = formattedSchoolName.replace("#", val.url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", val.degree);
            $(".education-entry:last").append(formattedSchoolURL + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", val.dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchooLocation = HTMLschoolLocation.replace("%data%", val.location);
            $(".education-entry:last").append(formattedSchooLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", val.majors);
            $(".education-entry:last").append(formattedSchoolMajor);


        });

        education.onlineCourses.forEach(function(val) {

            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLonlineStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", val.title);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedSchool = HTMLonlineSchool.replace("%data%", val.school);
            $(".education-entry:last").append(formattedSchool);

            var formattedDates = HTMLonlineTitle.replace("%data%", val.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", val.url);
            $(".education-entry:last").append(formattedOnlineURL);


        });

    }
};




bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);
