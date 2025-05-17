function Download(url, cb) {
    console.log("Starting download from:", url);
    setTimeout(() => {
        let data = "Some data";
        console.log("Download finished!");
        cb(data);
    }, 1500); 
}
function WriteFile(data, cb) {
    console.log("Writing data to file...");
    setTimeout(() => {
        let filename = "file.txt";
        console.log("File written as", filename);
        cb(filename);
    }, 1000);
}
function Upload(filename, destUrl, cb) {
    console.log("Uploading", filename, "to", destUrl);
    setTimeout(() => {
        console.log("Upload done!");
        cb();
    }, 1200);
}
Download("http:/ex.com", function(data) {
    WriteFile(data, function(filename) {
        Upload(filename, "http:/upload.com", function() {
            console.log("All done with callbacks!\n");
        });
    });
});
