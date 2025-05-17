async function asyncF() {
    try {
        console.log("Starting proces.");
        const data = await DownloadP("http:/example.com");
        const filename = await WriteFileP(data);
        await UploadP(filename, "http:/upload.com");
        console.log("All done with async/await!\n");
    } catch (err) {
        console.log("Something went wrong:", err);
    }
}

asyncF();
