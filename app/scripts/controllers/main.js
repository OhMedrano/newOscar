'use strict';

/**
 * @ngdoc function
 * @name newoscarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newoscarApp
 */
angular.module('newoscarApp')
  .controller('MainCtrl', function ($scope) {
    	
    	$scope.skills = [{'name':'HTML','level':90},
    					 {'name':'CSS','level':70},
    					 {'name':'Javascript','level':70},
    					 {'name':'AngularJS','level':60},
    					 {'name':'Adobe Creative Suite','level':60},
    					 {'name':'Ruby','level':40}

    				];


    	$scope.workHist = [

  				{'name':'Freelance IT',
  					'position':'Technician',
  				 'location':'New York',
  				  'startDate':'August 1, 2014',
  				  'endDate':'NA',	
  				  'present':true,
  				 'respon':[
  				 	'Building custom desktops',
  				 	'Hardware/Software installation',
  				 	'General Troubleshooting'
  				 	


  				 ]},
  				 {'name':'Konditori',
  				 	'position':'Barista',
  				 'location':'New York',
  				  'startDate':'October 14, 2013',
  				  'endDate':'NA',	
  				  'present':true,
  				 'respon':[
  				 	'Keyholder for multiple stores',
  				 	'Direct customer engagment',
  				 	'Knowledge of products',
  				 	'Makes a pretty good latte'


  				 ]},
  				 {'name':'CitiGroup',
  				 'position':'Intern System Adminstrator',
  				 'location':'New York',
  				  'startDate':'March 2014',
  				  'endDate':'June 2014',	
  				  'present':false,
  				 'respon':[
  				 	'Troubleshoot on trade floor',
  				 	'General Maintenance',
  				 	'Virus Removal',
  				 	'Building and Deploying'


  				 ]}

  				 ];



  		$scope.projects = [
   				{'name':'Guitar Tools','web':'http://guitar.thebigoh.net',
   				'framework':'AngularJS','img':'images/screen/GuitarScreen.png','descs':['A couple of web apps I made to help guitarists, beginner and experts, unlock the secrets of the fretboard',
   																						'One web app is a virtual fretboard which a guitarist can custom tune to any tuning they choose and select a scale or chord in relative to that tuning',
   																						'The other web app is a mapping of all the possible harmonic sweet spots, something that Eddie Van Halen would be very mad about.'],
   				'done':true},
   				{'name':'Not a PokeDex','web':'http://notpokeDex.thebigoh.net',
   				 'framework':'AngularJS','img':'images/screen/PokeScreen.png','descs':['...Yeah, I made a pokeDex.','Tried to make it look like it came from one of the games, currently does not display the most recent generation of pokemon','I wanted to manipulate big data with tons of relations, except without staring at lots of numbers and random names. The images are not owned by me.'],
   				 'done':false},
   				{'name':'Mock travel website','web':'http://elsy2.thebigoh.net',
   				'framework':'AngularJS','img':'images/screen/ElsyScreen.png','descs':['Guilt tripped into making a site for my mom.','Not responsive at the moment','Made with a NodeJS backend to handle management of project']},

   			
   			{'name':'AtaByte Hosting','web':'http://jared2.theBigOh.net','framework':'AngularJS','img':'images/screen/kondiScreen.png','descs':['Doing a layout for my friend\'s webhosting company','Fully responsive in different displays.','Made in AngularJS which made it a breeze',],'done':true}
   		];

   		$scope.salesLinks = [
   				{'type':'Email','link':'mailTo:oscar@thebigoh.net','img':'../images/mail.png','text':'Oscar@TheBigOh.Net'},
   				{'type':'LinkedIn','link':'http://linkedin.com/in/oscarmedrano','img':'../images/linkedin.png','text':'Oscar Medrano'},
   				{'type':'Github','link':'https://github.com/ohmedrano','img':'../images/gitLit.png','text':'OhMedrano'}

   		];

   		$scope.pro = $scope.projects[0];
   		$scope.projectSwap = 0; 
   		$scope.changeSwap = function(){
   			$scope.projectSwap = this.$index;
   			$scope.pro = $scope.projects[this.$index];

   		}



  });
