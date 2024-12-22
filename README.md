# IP Address Class & Range Finder

This web application allows users to input an IPv4 address and find out its class, range, default subnet mask, network ID, host ID, and the number of hosts in that class. The application works based on the IP address class system and provides relevant information for classes A, B, C, D, and E.

## Features

- **IP Address Class**: Determines the class (A, B, C, D, or E) of the given IP address.
- **IP Address Range**: Displays the valid IP address range for the class.
- **Default Subnet Mask**: Shows the default subnet mask for the class.
- **Network ID & Host ID**: Displays the network and host portions of the IP address.
- **Number of Hosts**: Calculates the number of usable hosts in the network for classes A, B, and C.

## IP Address Classes

- **Class A**: 
  - Range: `0.0.0.0 - 127.255.255.255`
  - Default Mask: `255.0.0.0`
  - Network ID: `x.0.0.0`
  - Host ID: `0.x.x.x`
  - Usable Hosts: 16,777,214

- **Class B**:
  - Range: `128.0.0.0 - 191.255.255.255`
  - Default Mask: `255.255.0.0`
  - Network ID: `x.x.0.0`
  - Host ID: `0.0.x.x`
  - Usable Hosts: 65,534

- **Class C**:
  - Range: `192.0.0.0 - 223.255.255.255`
  - Default Mask: `255.255.255.0`
  - Network ID: `x.x.x.0`
  - Host ID: `0.0.0.x`
  - Usable Hosts: 254

- **Class D** (Multicast):
  - Range: `224.0.0.0 - 239.255.255.255`
  - Default Mask: `N/A`
  - Network ID: `N/A`
  - Host ID: `N/A`
  - Usable Hosts: `N/A`

- **Class E** (Experimental):
  - Range: `240.0.0.0 - 255.255.255.255`
  - Default Mask: `N/A`
  - Network ID: `N/A`
  - Host ID: `N/A`
  - Usable Hosts: `N/A`

## How It Works

1. The user inputs an IPv4 address in the provided input field.
2. Upon clicking the "Find Class & Range" button, the app validates the input and checks if it’s a valid IPv4 address.
3. Based on the first octet of the IP address, the app determines the class and displays relevant information including:
   - IP Address Class (A, B, C, D, or E)
   - Range
   - Default Subnet Mask
   - Network ID
   - Host ID
   - Number of Usable Hosts
