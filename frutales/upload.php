<?php
header('Content-Type: application/json');


if(isset($_REQUEST['filetodel'])){
$ftd=$_REQUEST['filetodel'];


if (unlink($ftd)) {
    echo json_encode([
        'success' => true,
        'deleted' => $ftd
    ]);
} else {
    echo json_encode([
        'success' => false,
        'no_deleted' => $ftd
    ]);
}


 

    exit();
}


try {
    // Validate request
    if (!isset($_FILES['image'])) {
        throw new Exception('No file uploaded');
    }

    $targetDir = "fotos/";
    if (!is_dir($targetDir) && !mkdir($targetDir, 0755, true)) {
        throw new Exception('Failed to create upload directory');
    }

    // Generate unique filename
    $extension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $fileName = uniqid() . '.' . strtolower($extension);
    $targetFile = $targetDir . $fileName;

    // Validate image
    $allowedTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    if (!in_array(strtolower($extension), $allowedTypes)) {
        throw new Exception('Invalid file type. Only JPG, PNG, GIF, and WEBP are allowed.');
    }

    // Check file size (5MB max)
    if ($_FILES['image']['size'] > 5000000) {
        throw new Exception('File size exceeds 5MB limit');
    }

    // Verify image content
    if (!getimagesize($_FILES['image']['tmp_name'])) {
        throw new Exception('Uploaded file is not a valid image');
    }

    // Move uploaded file
    if (!move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        throw new Exception('Failed to move uploaded file');
    }

    // Return success
    echo json_encode([
        'success' => true,
        'filePath' => $targetFile,
        'fileName' => $fileName
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>