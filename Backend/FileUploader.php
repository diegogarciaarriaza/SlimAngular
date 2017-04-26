<?php

class FileUploader {

	private $temp_file;

	public function __construct() {
		$this->temp_file = array();
	}

	public function upload($file, $directory, $allowed_types) {
		$this->temp_file = array(
			"name"		=> $_FILES["$file"]["name"][0],
			"tempname" 	=> $_FILES["$file"]["tmp_name"][0],
			"fullname" 	=> $name . "-" . time(),
			"type"		=> $_FILES["$file"]["type"][0],
			"size"		=> $_FILES["$file"]["size"][0],
			"error"		=> $_FILES["$file"]["error"][0]
		);

		if (is_array($allowed_types) && in_array($this->temp_file["type"], $allowed_types)) {

			if(!is_dir($directory)){
				$dir = mkdir($directory, 0777, true);
			}
							
			if(move_uploaded_file($this->temp_file["tempname"], $directory . "/" . $this->info_file["fullname"])){
				$response = array("status" => 'succes', 
									"message" => 'File uploaded succesfully!');
			}
			else{
				$response = array("status" => 'error', 
									"message" => 'File does not uploaded!');
			}
		
		} else {
			$response = array("status" => 'error', 
								"message" => 'Type not allowed!');
		}

		return $response;
	}

	public function getStatus() {
		return $this->temp_file;
	}

}

?>