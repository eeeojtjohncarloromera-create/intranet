const fs = require('fs');
const path = require('path');

// Configuration
const imagesFolder = path.join(__dirname, 'activity-images');
const htmlFile = path.join(__dirname, 'index.html');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];

// Get all image files from the activity-images folder
function getImageFiles() {
    try {
        const files = fs.readdirSync(imagesFolder);
        return files
            .filter(file => {
                const ext = path.extname(file).toLowerCase();
                return imageExtensions.includes(ext);
            })
            .map(file => `activity-images/${file}`)
            .sort();
    } catch (error) {
        console.error('Error reading activity-images folder:', error.message);
        return [];
    }
}

// Update the sliderImages array in the HTML file
function updateSliderImages(imagePaths) {
    try {
        let htmlContent = fs.readFileSync(htmlFile, 'utf8');
        
        // Create the new array string
        const newArrayContent = imagePaths
            .map(path => `            '${path}'`)
            .join(',\n');
        
        // Pattern to match the sliderImages array
        const arrayPattern = /const sliderImages = \[[\s\S]*?\];/;
        
        // Replace the array
        const newArray = `const sliderImages = [\n${newArrayContent}\n        ];`;
        
        htmlContent = htmlContent.replace(arrayPattern, newArray);
        
        // Write back to file
        fs.writeFileSync(htmlFile, htmlContent, 'utf8');
        
        console.log(`✅ Successfully updated sliderImages with ${imagePaths.length} images:`);
        imagePaths.forEach(path => console.log(`   - ${path}`));
        
    } catch (error) {
        console.error('Error updating HTML file:', error.message);
    }
}

// Main execution
console.log('🔍 Scanning activity-images folder...');
const imageFiles = getImageFiles();

if (imageFiles.length === 0) {
    console.log('⚠️  No image files found in the activity-images folder.');
} else {
    console.log(`📁 Found ${imageFiles.length} image(s)`);
    updateSliderImages(imageFiles);
}
