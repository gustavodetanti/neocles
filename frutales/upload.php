<?php
header('Content-Type: application/json');
// 
$prefix='plant';
if(isset($_REQUEST['prefix'])){
    $prefix=$_REQUEST['prefix'];

}
$dir="fotos/";
if(isset($_REQUEST['folder'])){
    $dir=$_REQUEST['folder'];

}



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

    $targetDir = $dir;
    if (!is_dir($targetDir) && !mkdir($targetDir, 0755, true)) {
        throw new Exception('Failed to create upload directory');
    }

    // Generate unique filename
    $extension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $fileName = $prefix."_".uniqid() . '.' . strtolower($extension);
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
    $imageInfo = getimagesize($_FILES['image']['tmp_name']);
    if (!$imageInfo) {
        throw new Exception('Uploaded file is not a valid image');
    }

    // Check if resizing is needed (width > 1024px)
    $maxWidth = 1024;
    list($originalWidth, $originalHeight) = $imageInfo;

    if ($originalWidth > $maxWidth) {
        // Calculate new height while maintaining aspect ratio
        $newWidth = $maxWidth;
        $newHeight = (int) ($originalHeight * ($maxWidth / $originalWidth));

        // Create image resource based on file type
        switch (strtolower($extension)) {
            case 'jpg':
            case 'jpeg':
                $sourceImage = imagecreatefromjpeg($_FILES['image']['tmp_name']);
                break;
            case 'png':
                $sourceImage = imagecreatefrompng($_FILES['image']['tmp_name']);
                break;
            case 'gif':
                $sourceImage = imagecreatefromgif($_FILES['image']['tmp_name']);
                break;
            case 'webp':
                $sourceImage = imagecreatefromwebp($_FILES['image']['tmp_name']);
                break;
            default:
                throw new Exception('Unsupported image type for resizing');
        }

        // Create new image
        $resizedImage = imagecreatetruecolor($newWidth, $newHeight);

        // Preserve transparency for PNG and GIF
        if ($extension === 'png' || $extension === 'gif') {
            imagecolortransparent($resizedImage, imagecolorallocatealpha($resizedImage, 0, 0, 0, 127));
            imagealphablending($resizedImage, false);
            imagesavealpha($resizedImage, true);
        }

        // Resize the image
        imagecopyresampled($resizedImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);

        // Save the resized image
        switch (strtolower($extension)) {
            case 'jpg':
            case 'jpeg':
                imagejpeg($resizedImage, $targetFile, 90);
                break;
            case 'png':
                imagepng($resizedImage, $targetFile, 9);
                break;
            case 'gif':
                imagegif($resizedImage, $targetFile);
                break;
            case 'webp':
                imagewebp($resizedImage, $targetFile, 90);
                break;
        }

        // Free memory
        imagedestroy($sourceImage);
        imagedestroy($resizedImage);
    } else {
        // No resizing needed, just move the file
        if (!move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
            throw new Exception('Failed to move uploaded file');
        }
    }

    // Return success
    echo json_encode([
        'success' => true,
        'filePath' => $targetFile,
        'fileName' => $fileName,
        'resized' => ($originalWidth > $maxWidth)
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>