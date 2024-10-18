# Mosquito Eggs Count Analyzer

## Overview
The Mosquito Eggs Count Analyzer is a software tool designed to automate the counting of mosquito eggs from images using **OpenCV**. Developed to aid wet lab teams, the analyzer provides a faster and more efficient method to count mosquito eggs, eliminating the need for manual counting. This project is particularly useful for experiments like oviposition assays, where accurate egg counts are crucial.

## Features
- **Automated Egg Counting**: Uses image processing techniques to identify and count eggs in photos.
- **Accuracy Analysis**: Compares software-generated counts with manually counted results for performance evaluation.
- **Region of Interest (ROI) Selection**: Allows users to select a specific area for analysis to improve counting accuracy.
- **User-Friendly Interface**: Load images, select ROI, and process for results.
- **Improved OpenCV Functions**: Enhanced image processing for better precision, especially in shadowed areas.

## Analyzing Process
The software employs a series of OpenCV image processing steps to analyze the images and count mosquito eggs:
1. **Gray Image**: Converts the image to grayscale.
2. **Threshold Image**: Assigns pixel values to create a binary image.
3. **Dilated Image**: Applies dilation to enhance features.
4. **Overlay Image**: Highlights the detected eggs in the original image.

## Accuracy Comparison
We conducted a comparative analysis to validate the egg counts from the software against manual counting. Below is an example of the results for a beetroot attractant assay:

| Type of Substrate | Software Count | Manual Count | Accuracy (%) |
|-------------------|----------------|--------------|--------------|
| Beetroot          | 343            | 625          | 54.88%       |
| ddH2O             | 100            | 99           | 98.99%       |
| Hay               | 53             | 58           | 91.38%       |
| Beetroot          | 554            | 614          | 90.23%       |
| ddH2O             | 45             | 41           | 90.24%       |
| Hay               | 90             | 114          | 78.95%       |
| Beetroot          | 392            | 371          | 94.34%       |
| **Average Accuracy (%)** | | | **85.57%** |

## Results
The egg-count analyzer has shown significant accuracy, with a p-value of less than 0.0001, indicating a statistically significant difference between the accuracy and error rates. This analysis supports the reliability of the software, making it a valuable tool for research and public health applications.

## Benefits
The Mosquito Eggs Count Analyzer offers several advantages:
- **Improves Experiment Efficiency**: Automates egg counting, saving time and reducing human error.
- **Supports Public Health Efforts**: Assists in analyzing egg counts for mosquito trap success rates and identifying hotspots for intervention.
- **Facilitates Research**: Helps researchers understand mosquito oviposition behavior, aiding future public health strategies.

## Limitations
While the software is effective, certain limitations should be considered:
- **Sensitivity to Shadows**: Darker spots in images can cause the software to overestimate egg counts.
- **Image Cropping**: Improperly framed images may exclude some eggs, affecting accuracy.

## Future Improvements
We continue to refine the software for better accuracy:
- **Enhanced ROI Selection**: Allows users to focus on specific areas of the image.
- **Improved Image Processing**: Better handling of shadows and contrast in the photos.

## Getting Started
To use the Mosquito Eggs Count Analyzer, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mosquito-eggs-count-analyzer.git
## Acknowledgments
This project was inspired by and built upon concepts from the [MECVision GitHub repository](https://github.com/abtassociates/mecvision) by Abt Associates, which provided valuable insights into automated image analysis methods.

## References
- **MECVision GitHub Repository**: Abt Associates. Available at: [https://github.com/abtassociates/mecvision](https://github.com/abtassociates/mecvision)
