var trainData = new Firebase("https://week-7-train.firebaseio.com/");

$('#submitbtn').on('click', function(){
	var trainName = $('#trainNameInput').val().trim();
	var destination = $('#destinationInput').val().trim();
	var start = moment($('#timeInput').val().trim(), "HH:mm").format("");
	var frequency = $('#frequencyInput').val().trim();

	var newTrain = {
		name: trainName,
		destination: destination,
		start: start,
		frequency: frequency,
	}

	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.start);
	console.log(newTrain.frequency);


	 trainData.push(newTrain);

	 alert("Train successfully added!");

	$("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#startInput").val("");
    $("#frequencyInput").val("");

    return false;
});

