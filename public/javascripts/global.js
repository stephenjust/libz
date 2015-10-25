var wordList = [
    'adjective',
    'noun',
    'proper noun'
];

var textLines = [
    'Foo test {0} bar {1}',
    'bat {2}.'
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
