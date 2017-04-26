<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

//very bad practice but enouth for local development
$db = new mysqli("localhost", "webapp", "webapp", "webapp");	

$app->get("/hotels", function() use($db, $app) {
	// sleep(3);
	$query = $db->query("SELECT * FROM hotels ORDER BY id DESC;");
	$hotels = array(); 
	while ($hotel = $query->fetch_assoc()) {
		$hotels[] = $hotel;
	}
	
	$result = array("status" => "success",
		"data" => $hotels);

	echo json_encode($result);
});

$app->get("/hotel/:id", function($id) use($db, $app) {
	$query = $db->query("SELECT * FROM hotels WHERE id = $id;");
	$hotel = $query->fetch_assoc();

	if ($query->num_rows > 0) {
		$result = array("status" => "success",
			"data" => $hotel);
	} else {
		$result = array(
			"status" => "error",
			"message" => "Hotel does not exist");
	}

	echo json_encode($result);
});

$app->get("/random-hotel", function() use($db, $app) {
	$query = $db->query("SELECT * FROM hotels ORDER BY RAND() LIMIT 1;");
	$hotel = $query->fetch_assoc();

	if ($query->num_rows == 1) {
		$result = array("status" => "success",
			"data" => $hotel);
	} else {
		$result = array(
			"status" => "error",
			"message" => "Hotel does not exits");
	}

	echo json_encode($result);
});


$app->post("/hotels", function() use($db, $app) {

	$json = $app->request->post("json");
	$data = json_decode($json, true);

    $query = "INSERT INTO hotels VALUES(NULL,"
        . "'{$data["name"]}',"
        . "'{$data["address"]}',"
        . "'{$data["description"]}',"
        . "'{$data["image"]}', "
        . "'{$data["price"]}'"
        . ")";

	$insert = $db->query($query);

	if ($insert) {
		$result = array("status" => "success",
						"message" => "Hotel created succesfully!!");
	} else {
		$result = array("status" => "error", 
						"message" => "Hotel does not created!!!");
	}

	echo json_encode($result);
});

$app->post("/update-hotel/:id", function($id) use($db, $app) {
	header("Access-Control-Allow-Origin: *");
	
	$json = $app->request->post("json");
	$data = json_decode($json, true);

	$query = "UPDATE hotels SET "
			. "name = '{$data["name"]}', "
			. "address = '{$data["address"]}', "
			. "description = '{$data["description"]}', "
			. "price = '{$data["price"]}', "
			. "image = '{$data["image"]}' "
			. " WHERE id={$id}";
	$update = $db->query($query);

	if ($update) {
		$result = array("status" => "success", 
						"message" => "Hotel updated succesfully!!!");
	} else {
		$result = array("status" => "error", 
						"message" => "Hotel does not updated!!!");
	}

	echo json_encode($result);
});

$app->get("/delete-hotel/:id", function($id) use($db, $app) {
	$query = "DELETE FROM hotels WHERE id = {$id}";
	$delete = $db->query($query);

	if ($delete) {
		$result = array("status" => "success", 
						"message" => "Hotel deleted succesfully!!!");
	} else {
		$result = array("status" => "error", 
						"message" => "Hotel does not deleted!!!");
	}

	echo json_encode($result);
});


$app->post("/upload-file", function() use($db, $app) {
	
	$result = array("status" => "error", 
					"message" => "Undefined error on upload");

	if (isset($_FILES["uploads"])) {
		$FileUploader = new FileUploader();

		$result = $FileUploader->upload("uploads", "uploads", array("image/jpeg", "image/png", "image/gif"));
		$status = $FileUploader->getStatus();
	}
	
	echo json_encode($result);
});

$app->run();

