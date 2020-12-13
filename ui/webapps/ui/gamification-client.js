var SERVER_URL = "http://localhost:8000/api";

function updateLeaderBoard() {
    $.ajax({
        url: SERVER_URL + "/leaders"
    }).then(function(data) {


        $('#leaderboard-body').empty();
        data.forEach(function(row) {

	
	/*
	retrieveUsername(row.userId).then(function(result) {
						
						 $('#leaderboard-body').append('<tr><td>' + result.alias + '</td>' +
                				'<td>' + row.totalScore + '</td>');	
						
											
						}, function(err) {
							console.log(err); 						
					});
	*/	
             $('#leaderboard-body').append('<tr><td>' + row.userId + '</td>' +
                				'<td>' + row.totalScore + '</td>');	
						
        });
    });
}

function updateStats(userId) {

    $.ajax({
        url: SERVER_URL + "/stats?userId=" + userId,
        success: function(data) {
            $('#stats-div').show();
            $('#stats-user-id').empty().append(userId);
            $('#stats-score').empty().append(data.score);
            $('#stats-badges').append(data.badges.join());
        },
        error: function(data) {
            $('#stats-div').show();
            $('#stats-user-id').empty().append(userId);
            $('#stats-score').empty().append(0);
            $('#stats-badges').empty();
        }
    });
}

/*
async function retrieveUsername(userId) {

		let response = await fetch(SERVER_URL + "/users/" + userId);
		let user = await response.json();
		return user;
}
*/


$(document).ready(function() {

    updateLeaderBoard();

    $("#refresh-leaderboard").click(function( event ) {
        updateLeaderBoard();
    });

});
