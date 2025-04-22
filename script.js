document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "netCodes ADB Bypass.apk"; // <-- Substitua aqui pelo caminho correto
    link.download = "netCodes ADB Bypass.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  