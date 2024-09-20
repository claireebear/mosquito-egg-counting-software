let imgElement = document.getElementById('imageInput');
let uploadedImage = document.getElementById('uploadedImage');
let canvas = document.getElementById('canvasOutput');
let ctx = canvas.getContext('2d');
let cropper, imgResized;

// Load the image and initialize Cropper.js for ROI selection
imgElement.addEventListener('change', (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    
    reader.onload = function(event) {
        uploadedImage.src = event.target.result;
        uploadedImage.onload = function() {
            // Initialize Cropper.js after the image is loaded
            if (cropper) {
                cropper.destroy();
            }
            cropper = new Cropper(uploadedImage, {
                viewMode: 1,
                aspectRatio: 3462 / 788, // Lock the aspect ratio if needed
                ready() {
                    document.getElementById('selectRoiButton').disabled = false;
                }
            });
        };
    };
    reader.readAsDataURL(file);
});

// Handle ROI selection and process the image
document.getElementById('selectRoiButton').addEventListener('click', function() {
    let croppedCanvas = cropper.getCroppedCanvas({
        width: 3462,
        height: 788
    });

    // Display the cropped image on the canvas
    canvas.width = croppedCanvas.width;
    canvas.height = croppedCanvas.height;
    ctx.drawImage(croppedCanvas, 0, 0);

    // Enable the process button after ROI is selected
    document.getElementById('processButton').disabled = false;
});

// Processing button logic (image processing with OpenCV.js)
document.getElementById('processButton').addEventListener('click', function() {
    let src = cv.imread(canvas);
    let gray = new cv.Mat();
    let binary = new cv.Mat();
    let dilate = new cv.Mat();

    // Convert to grayscale
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

    // Apply binary threshold
    cv.threshold(gray, binary, 116, 255, cv.THRESH_BINARY);

    // Dilate the image
    let M = cv.Mat.ones(3, 3, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    cv.dilate(binary, dilate, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

    // Detect contours (eggs)
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    cv.findContours(dilate, contours, hierarchy, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE);

    // Egg analysis parameters
    let minEggRadius = 1; // minimum egg radius
    let maxEggRadius = 8; // maximum egg radius
    let minEggArea = Math.PI * Math.pow(minEggRadius, 2);
    let maxEggArea = Math.PI * Math.pow(maxEggRadius, 2);
    let totalEggArea = 0;
    let eggCount = 0;

    let clustersCount = 0;
    let clustersArea = 0;

    // Loop through the contours to calculate egg details
    for (let i = 0; i < contours.size(); i++) {
        let contour = contours.get(i);
        let area = cv.contourArea(contour);

        if (area >= minEggArea && area <= maxEggArea) {
            // Count this as a single egg
            totalEggArea += area;
            eggCount++;
        } else if (area > maxEggArea) {
            // Consider this as a cluster
            clustersArea += area;
            clustersCount++;
        }
    }

    // Calculate average egg area and radius
    let avgEggArea = eggCount > 0 ? totalEggArea / eggCount : 0;
    let avgEggRadius = Math.sqrt(avgEggArea / Math.PI);

    // Calculate average cluster area
    let avgClusterArea = clustersCount > 0 ? clustersArea / clustersCount : 0;

    // Display result on canvas
    cv.imshow('canvasOutput', src);

    // Display the number of eggs and detailed analysis results
    document.getElementById('eggCountResult').innerText = `Total Eggs Detected: ${eggCount}`;
    document.getElementById('eggRadiusResult').innerText = `Average Egg Radius: ${avgEggRadius.toFixed(2)} px`;
    document.getElementById('eggAreaResult').innerText = `Average Egg Area: ${avgEggArea.toFixed(2)} px²`;
    document.getElementById('clusterCountResult').innerText = `Number of Clusters: ${clustersCount}`;
    document.getElementById('clusterAreaResult').innerText = `Average Cluster Area: ${avgClusterArea.toFixed(2)} px²`;

    // Clean up memory
    src.delete();
    gray.delete();
    binary.delete();
    dilate.delete();
    M.delete();
    contours.delete();
    hierarchy.delete();
});

// OpenCV.js Initialization
function onOpenCvReady() {
    document.getElementById('processButton').disabled = true;
    document.getElementById('selectRoiButton').disabled = true;
}
