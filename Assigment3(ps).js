function DownloadP(url) {
    return new Promise((resolve,reject) => {
        console.log("Downloading from", url);
        setTimeout(() => {
            let data="Some downloaded data";
            console.log("Download finished!");
            resolve(data);
        }, 1500);
    });
}
function WriteFileP(data) {
    return new Promise((resolve,reject) => {
        console.log("Writing data to file.");
        setTimeout(() => {
            let filename = "file.txt";
            console.log("File written as", filename);
            resolve(filename);
        }, 1000);
    });
}
function UploadP(filename, destUrl) {
    return new Promise((resolve,reject) => {
        console.log("Uploading", filename, "to", destUrl);
        setTimeout(() => {
            console.log("Upload done!");
            resolve();
        }, 1200);
    });
}
DownloadP("http:/example.com")
    .then(data => WriteFileP(data))
    .then(filename => UploadP(filename, "http:/upload.com"))
    .then(() => {
        console.log("All done with Promises!");
    });
