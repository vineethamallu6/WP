var qarray = {
	"questions" : [{
	"question" : " Cinderella carriage turns into a potato?",
	"option" : [
	{
	text : "False",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	text : "True",
	isCorrect : false,
	feedback : "Incorrect"
    },
	],
	"hint" : "It actually turns into pumpkin.",
},
{
	"question" : "A jellyfish is 95% water?",
	"option" : [
	{
	text : "True",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	text : "False",
	isCorrect : false,
	feedback : "Incorrect"
    },
	],
	"hint" : "It contains large amount of water.",
},
{
	"question" : "Bacon was part of the first meal eaten on the Moon.?",
	"option" : [
	{
	text : "False",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "True",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"hint" : "the first meal to be eaten on the Moon, consisted of bacon squares, peaches, sugar cookie cubes, pineapple grapefruit drink and coffee"
},
{
	"question" : "An ostrich eye is bigger than its brain?",
	"option" : [
	{
	text : "false",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "True",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"hint" : "Ostrich is the largest bird in the world having the largest eyes in the whole animal kingdom that are even bigger than its brain." 

}
]
}
var i = 0
var j = 0
window.onload = function display() {
	document.getElementById('question 1').innerHTML = qarray.questions[i].question
	document.getElementById('hint 1').innerHTML = qarray.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + qarray.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + qarray.questions[i].option[j+1].text + '<br>'
	document.getElementById('question 2').innerHTML = qarray.questions[i+1].question
	document.getElementById('hint 2').innerHTML = qarray.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + qarray.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + qarray.questions[i+1].option[j+1].text + '<br>'
    hideButton('Prev')
};
function radioclicked(i,j) {
	if (qarray.questions[i].option[j].isCorrect) {
		prompt=''
		prompt += '<div class="alert alert-success alert-dismissible">'
		prompt += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		prompt += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+qarray.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = prompt
	} else {
		prompt =''
		prompt += '<div class="alert alert-warning alert-dismissible">'
		prompt += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		prompt += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+qarray.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = prompt
	}
}
function radioclicked1(i,j) {
    if (qarray.questions[i].option[j].isCorrect) {
		prompt=''
		prompt += '<div class="alert alert-success alert-dismissible">'
		prompt += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		prompt += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+qarray.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = prompt
	} else {
		prompt=''
		prompt += '<div class="alert alert-warning alert-dismissible">'
		prompt += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		prompt += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+qarray.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = prompt
	}	
}
function prev() {
	i=i-2;
	if (i < 0) {
		i = 0;
		hidebutton('Prev')
		return;
	}
	showButton('Prev')
	showButton('Next')
	document.getElementById('question 1').innerHTML = qarray.questions[i].question
	document.getElementById('hint 1').innerHTML = qarray.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + qarray.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + qarray.questions[i].option[j+1].text + '<br>'
	document.getElementById('question 2').innerHTML = qarray.questions[i+1].question
	document.getElementById('hint 2').innerHTML = qarray.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + qarray.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + qarray.questions[i+1].option[j+1].text + '<br>'
    if (i == 0) hideButton('Prev')
}
function next() {
	i=i+2
	if (i > qarray.questions.length - 1) {
		i = qarray.questions.length - 1
		hideButton('Next')
		return;
	}
	showButton('Next')
	showButton('Prev')
	document.getElementById('question 1').innerHTML = qarray.questions[i].question
	document.getElementById('hint 1').innerHTML = qarray.questions[i].hint
	document.getElementById('radio 1').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + qarray.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + qarray.questions[i].option[j+1].text + '<br>'
	document.getElementById('question 2').innerHTML = qarray.questions[i+1].question
	document.getElementById('hint 2').innerHTML = qarray.questions[i+1].hint
	document.getElementById('radio 2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + qarray.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + qarray.questions[i+1].option[j+1].text + '<br>'
	if (i == qarray.questions.length - 2) hideButton('Next')
}
function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden'
}
function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible'
}
function reset() {
	location.reload()
}