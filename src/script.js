document.addEventListener("DOMContentLoaded", async () => {
  const containerUrl = "https://<yourstorage>.blob.core.windows.net/videos?restype=container&comp=list";
  const videoBase = "https://<yourstorage>.blob.core.windows.net/videos/";

  try {
    const response = await fetch(containerUrl);
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const blobs = xmlDoc.getElementsByTagName("Blob");
    const grid = document.getElementById("video-grid");

    for (let blob of blobs) {
      const name = blob.getElementsByTagName("Name")[0].textContent;
      const videoUrl = videoBase + name;

      const card = document.createElement("div");
      card.className = "video-card";

      const video = document.createElement("video");
      video.src = videoUrl;
      video.controls = false;
      video.muted = true;
      video.loop = true;

      // Play on hover (like Netflix)
      card.addEventListener("mouseenter", () => video.play());
      card.addEventListener("mouseleave", () => video.pause());

      card.appendChild(video);
      grid.appendChild(card);
    }
  } catch (err) {
    console.error("Failed to load videos:", err);
  }
});
