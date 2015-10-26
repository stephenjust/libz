var wordList = [
    'adjective',
    'month',
    'engineering discipline',
    'verb -ing',
    'competitive event',
    'adj describing quantity',
    'adj',
    'verb',
    'noun',
    'verb',
    'pl noun',
    'verb -ing',
    'pl noun',
    'adj',
    'noun',
    'noun',
    'verb',
    'event',
    'noun',
    'time of day',
    'noun, relation',
    'noun',
    'place',
    'adj',
    'type of -ism'
];

var textLines = [
    'On a {0} {1} night, several {2} students noticed that they',
    'were {3} behind the other discipline groups in the {4}.',
    'To make up some ground, {5} {6} students attempted to',
    '{7} a {8} and {9} {10}. The students nearly succeded',
    ' by {11} {12}. However, just as they were',
    'about to finish, they were approached by a {13} {14}.',
    'Due to their {15}, they found it very difficult to {16}',
    'the situation. After the {17}, they were sent away with a {18}.',
    'The following {19}, the students explained to their',
    '{20} their near-{21} experience. Because',
    '{22} is a {23} space, the students could talk about',
    'their serious lapse of {24}.'
];

var fieldList = [];

$(document).ready(function() {
    buildLibzForm();
});

function buildLibzForm()
{
    var tableContents = $('#formGrid > table > tbody');
    $('#response').hide();
    for (var i = 0; i < wordList.length; i++) {
	tableContents.append('<tr><td>'+wordList[i]+'</td><td><input type="text" id="word-'+i+'" /></td></tr>');
	fieldList[i] = $('#word-'+i);
    }
    tableContents.append('<tr><td><input type="button" value="Submit" onClick="submitLibzForm();"/></td><td></td></tr>');
}

function submitLibzForm()
{
    var complete = 1;
    for (var i = 0; i < wordList.length; i++) {
	if ($('#word-'+i).val().length == 0) {
	    complete = 0;
	}
    }
    if (complete == 0) {
	alert('You must complete all of the fields!');
	return;
    }
    $('#form').hide(500);
    var str = '';
    for (var i = 0; i < textLines.length; i++) {
	str = str.concat(textLines[i]+'<br />');
    }
    for (var i = 0; i < wordList.length; i++) {
	str = str.replace('{'+i+'}', '<b>'+$('#word-'+i).val()+'</b>');
    }
    $('#response').append('<p>'+str+'</p><p>Your email: <input type="text" id="email" /> <input type="button" value="Send" onClick="sendLibzResponses();" /></p>').show(500);
}

function sendLibzResponses()
{
    var submitUrl = '/responses';
    var responses = [];
    for (var i = 0; i < wordList.length; i++) {
	responses[i] = $('#word-'+i).val();
    }
    var submission = {
	'email' : $('#email').val(),
	'responses' : responses
    };
    $.post(submitUrl, submission, function(d,s,x) {
	location.reload();
    });
}
