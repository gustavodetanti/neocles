<?php
header('Content-Type: application/json');

// Configuration
$config = [
    'upload_dir' => 'fotos1/',
    'data_file' => 'plants1.json',
    'allowed_types' => ['jpg', 'jpeg', 'png', 'gif', 'webp']
];

// Create upload directory if it doesn't exist
if (!file_exists($config['upload_dir'])) {
    mkdir($config['upload_dir'], 0755, true);
}

// Get the action
$action = $_POST['action'] ?? '';

try {
    switch ($action) {
        case 'load_data':
            if (file_exists($config['data_file'])) {
                $data = json_decode(file_get_contents($config['data_file']), true);
                echo json_encode([
                    'success' => true,
                    'data' => $data
                ]);
            } else {
                echo json_encode([
                    'success' => true,
                    'data' => [
                        'name' => 'invernadero',
                        'bg' => 'bg.jpg',
                        'plants' => []
                    ]
                ]);
            }
            break;

        case 'save_data':
            $data = json_decode($_POST['data'] ?? '', true);
            if ($data === null) {
                throw new Exception('Invalid data format');
            }
 
            file_put_contents($config['data_file'], json_encode($data, JSON_PRETTY_PRINT));
            echo json_encode(['success' => true]);
            break;

        case 'upload_photo':
            if (!isset($_FILES['photo'])) {
                throw new Exception('No file uploaded');
            }

            $file = $_FILES['photo'];
            $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

            if (!in_array($ext, $config['allowed_types'])) {
                throw new Exception('Invalid file type');
            }

            $filename = uniqid() . '_.'.$ext;// . basename($file['name']);
            $targetPath = $config['upload_dir'] . $filename;

            if (move_uploaded_file($file['tmp_name'], $targetPath)) {
                echo json_encode([
                    'success' => true,
                    'filePath' => $targetPath
                ]);
            } else {
                throw new Exception('Failed to move uploaded file');
            }
            break;

        case 'delete_photo':
            $data = json_decode($_POST['data'] ?? '', true);
            $photoPath = $data['photoPath'] ?? '';

            // Security check - only allow deleting files from upload directory
            if (strpos(realpath($photoPath), realpath($config['upload_dir'])) !== 0) {
                throw new Exception('Invalid file path');
            }

            if (file_exists($photoPath)) {
                if (unlink($photoPath)) {
                    echo json_encode(['success' => true]);
                } else {
                    throw new Exception('Could not delete file');
                }
            } else {
                echo json_encode(['success' => true, 'message' => 'File not found']);
            }
            break;

        default:
            throw new Exception('Invalid action');
    }
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>