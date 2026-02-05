function resizeImage() {
  const file = document.getElementById("imageInput").files[0];
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;

  if (!file) {
    alert("Please select an image");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.getElementById("canvas");
      canvas.width = width || img.width;
      canvas.height = height || img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      document.getElementById("download").href = canvas.toDataURL();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
