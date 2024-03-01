const fs = require('fs');

//Function to read JSON 
function readJSONFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading JSON file: ${error.message}`);
        return null;
    }
}

//Function to read a text file
function readTextFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading text file: ${error.message}`);
        return null;
    }
}

//Function to write JSON
function writeJSONFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log('JSON file written successfully');
    } catch (error) {
        cconsole.error(`Error writing JSON file: ${error.message}`);
    }
}

//Function to write text file
function writeTextFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, data);
        console.log('Text file written successfully.');
    } catch (error) {
        console.error(`Error writing text file: ${error.message}`);
    }
}

//Function to update JSON config file
function updateJSONFile(filePath, key, value) {
    try {
        const data = readJSONFile(filePath);
        if(data) {
            data[key] = value;
            writeJSONFile(filePath, data);
        }
    } catch (error) {
        console.error(`Error updating JSON file: ${error.message}`);
    }
}

//Function to reset JSON config file to origin
function resetJSONFile(filePath, originalData) {
    try {
        writeJSONFile(filePath, originalData);
    } catch (error) {
        console.error(`Error resetting JSON configuration file: ${error.message}`);
    }
}

module.exports = {
    readJSONFile,
    readTextFile,
    writeJSONFile,
    writeTextFile,
    updateJSONFile,
    resetJSONFile
};