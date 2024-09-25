document.getElementById('findButton').addEventListener('click', function() {
    const ipInput = document.getElementById('ipInput').value;
    const resultDiv = document.getElementById('result');
    const ipParts = ipInput.split('.');
    console.log(ipParts[0]);
    console.log(ipParts[1]);
    console.log(ipParts[2]);
    console.log(ipParts[3]);

    if (ipParts.length !== 4 || ipParts.some(part => isNaN(part) || part < 0 || part > 255)) {
        resultDiv.innerHTML = "Please enter a valid IP address.";
        return;
    }

    const firstOctet = parseInt(ipParts[0]);
    let ipClass, range, defaultMask, networkID, hostID, numberOfHosts;

    if (firstOctet >= 0 && firstOctet <= 127) {
        ipClass = 'A';
        range = '0.0.0.0 - 127.255.255.255';
        defaultMask = '255.0.0.0';
        networkID = `${ipParts[0]}.0.0.0`;
        hostID = `0.${ipParts[1]}.${ipParts[2]}.${ipParts[3]}`;
        numberOfHosts = Math.pow(2, 24) - 2; // 24 bits for hosts
    } else if (firstOctet >= 128 && firstOctet <= 191) {
        ipClass = 'B';
        range = '128.0.0.0 - 191.255.255.255';
        defaultMask = '255.255.0.0';
        networkID = `${ipParts[0]}.${ipParts[1]}.0.0`;
        hostID = `0.0.${ipParts[2]}.${ipParts[3]}`;
        numberOfHosts = Math.pow(2, 16) - 2; // 16 bits for hosts
    } else if (firstOctet >= 192 && firstOctet <= 223) {
        ipClass = 'C';
        range = '192.0.0.0 - 223.255.255.255';
        defaultMask = '255.255.255.0';
        networkID = `${ipParts[0]}.${ipParts[1]}.${ipParts[2]}.0`;
        hostID = `0.0.0.${ipParts[3]}`;
        numberOfHosts = Math.pow(2, 8) - 2; // 8 bits for hosts
    } else if (firstOctet >= 224 && firstOctet <= 239) {
        ipClass = 'D';
        range = '224.0.0.0 - 239.255.255.255 (Multicast)';
        defaultMask = 'N/A';
        networkID = 'N/A';
        hostID = 'N/A';
        numberOfHosts = 'N/A';
    } else {
        ipClass = 'E';
        range = '240.0.0.0 - 255.255.255.255 (Experimental)';
        defaultMask = 'N/A';
        networkID = 'N/A';
        hostID = 'N/A';
        numberOfHosts = 'N/A';
    }

    resultDiv.innerHTML = `
        <strong>Class:</strong> ${ipClass}<br>
        <strong>Range:</strong> ${range}<br>
        <strong>Default Mask:</strong> ${defaultMask}<br>
        <strong>Network ID:</strong> ${networkID}<br>
        <strong>Host ID:</strong> ${hostID}<br>
        <strong>Number of Hosts:</strong> ${numberOfHosts}`;
});
