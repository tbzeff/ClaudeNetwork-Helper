// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  DATA â€” Ports & Protocols
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const PORT_DATA = [
  { name: "FTP (Data)",    port: "20",      transport: "TCP" },
  { name: "FTP (Control)", port: "21",      transport: "TCP" },
  { name: "SFTP",          port: "22",      transport: "TCP" },
  { name: "SSH",           port: "22",      transport: "TCP" },
  { name: "Telnet",        port: "23",      transport: "TCP" },
  { name: "SMTP",          port: "25",      transport: "TCP" },
  { name: "DNS",           port: "53",      transport: "TCP/UDP" },
  { name: "DHCP",          port: "67/68",   transport: "UDP" },
  { name: "TFTP",          port: "69",      transport: "UDP" },
  { name: "HTTP",          port: "80",      transport: "TCP" },
  { name: "NTP",           port: "123",     transport: "UDP" },
  { name: "SNMP",          port: "161/162", transport: "UDP" },
  { name: "LDAP",          port: "389",     transport: "TCP/UDP" },
  { name: "HTTPS",         port: "443",     transport: "TCP" },
  { name: "SMB",           port: "445",     transport: "TCP" },
  { name: "Syslog",        port: "514",     transport: "UDP" },
  { name: "SMTPS",         port: "587",     transport: "TCP" },
  { name: "LDAPS",         port: "636",     transport: "TCP" },
  { name: "SQL Server",    port: "1433",    transport: "TCP" },
  { name: "RDP",           port: "3389",    transport: "TCP" },
  { name: "SIP",           port: "5060/5061", transport: "TCP/UDP" },
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  DATA â€” Cable Standards
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const CABLE_QUESTIONS = [
  { text: "What is the maximum speed of <strong>Cat5</strong>?",                            answer: "100 Mbps",          choices: ["10 Mbps","100 Mbps","1 Gbps","10 Gbps"],                        meta: "Twisted Pair Standards" },
  { text: "What is the maximum speed of <strong>Cat5e</strong>?",                           answer: "1 Gbps",            choices: ["100 Mbps","1 Gbps","10 Gbps","40 Gbps"],                        meta: "Twisted Pair Standards" },
  { text: "What is the max distance for <strong>Cat5e</strong> at full speed?",             answer: "100 meters",        choices: ["55 m","100 meters","150 m","200 m"],                             meta: "Twisted Pair Standards" },
  { text: "What is the maximum speed of <strong>Cat6</strong> at 100m?",                    answer: "1 Gbps",            choices: ["100 Mbps","1 Gbps","10 Gbps","40 Gbps"],                        meta: "Twisted Pair Standards" },
  { text: "What is the maximum speed of <strong>Cat6</strong> at 55m?",                     answer: "10 Gbps",           choices: ["1 Gbps","10 Gbps","25 Gbps","40 Gbps"],                         meta: "Twisted Pair Standards" },
  { text: "What is the maximum speed of <strong>Cat6a</strong>?",                           answer: "10 Gbps",           choices: ["1 Gbps","10 Gbps","25 Gbps","100 Gbps"],                        meta: "Twisted Pair Standards" },
  { text: "What is the max distance for <strong>Cat6a</strong> at 10 Gbps?",                answer: "100 meters",        choices: ["55 m","100 meters","150 m","200 m"],                             meta: "Twisted Pair Standards" },
  { text: "What is the maximum speed of <strong>Cat7</strong>?",                            answer: "10 Gbps",           choices: ["1 Gbps","10 Gbps","25 Gbps","40 Gbps"],                         meta: "Twisted Pair Standards" },
  { text: "Which fiber connector supports <strong>multiple fibers in a single ferrule</strong>, used in high-density data center trunk cables?", answer: "MPO", choices: ["LC","SC","MPO","ST"], meta: "Connectors" },
  { text: "What connector do Cat5â€“Cat6a Ethernet cables use?",                              answer: "RJ-45",             choices: ["RJ-11","RJ-45","LC","SC"],                                      meta: "Connectors" },
  { text: "What connector does a telephone line typically use?",                             answer: "RJ-11",             choices: ["RJ-11","RJ-45","BNC","F-type"],                                 meta: "Connectors" },
  { text: "Which fiber type has a <strong>9-micron core</strong> and is designed for long-distance transmission spanning multiple kilometers?", answer: "Single-mode", choices: ["Multi-mode","Single-mode","Cat6a","Coaxial"], meta: "Fiber Optic" },
  { text: "Which fiber type has a <strong>larger core (50 or 62.5 microns)</strong> and is optimized for shorter distances within a building or campus?", answer: "Multi-mode", choices: ["Single-mode","Multi-mode","DAC/Twinax","Coaxial"], meta: "Fiber Optic" },
  { text: "What is the core diameter of <strong>single-mode fiber</strong>?",               answer: "9 microns",         choices: ["9 microns","50 microns","62.5 microns","100 microns"],            meta: "Fiber Optic" },
  { text: "What is the core diameter of <strong>OM3/OM4 multi-mode fiber</strong>?",        answer: "50 microns",        choices: ["9 microns","50 microns","62.5 microns","125 microns"],            meta: "Fiber Optic" },
  { text: "Which fiber connector uses a <strong>push-pull latch</strong> and dominates data centers?", answer: "LC",    choices: ["LC","SC","ST","FC"],                                             meta: "Fiber Connectors" },
  { text: "Which fiber connector is the square <strong>'click-in' subscriber</strong> type?", answer: "SC",             choices: ["LC","SC","ST","FC"],                                             meta: "Fiber Connectors" },
  { text: "Which fiber connector uses a <strong>push-and-twist half-turn lock</strong>, common in older LAN installations?", answer: "ST", choices: ["LC","SC","ST","BNC"], meta: "Fiber Connectors" },
  { text: "What cable is used for <strong>CATV / broadband to the home</strong>?",          answer: "RG-6 Coaxial",      choices: ["RG-6 Coaxial","Cat5e","Single-mode fiber","RG-58 Coaxial"],      meta: "Coaxial" },
  { text: "What does the <strong>'T'</strong> stand for in 1000BASE-T?",                    answer: "Twisted pair",      choices: ["Twisted pair","Token ring","Terminator","Thinnet"],               meta: "Ethernet Naming" },
  { text: "What medium does <strong>1000BASE-SX</strong> use?",                             answer: "Multi-mode fiber",  choices: ["Single-mode fiber","Multi-mode fiber","Coaxial","Twisted pair"], meta: "Ethernet Standards" },
  { text: "What medium does <strong>1000BASE-LX</strong> use?",                             answer: "Single-mode fiber", choices: ["Multi-mode fiber","Single-mode fiber","Coaxial","Twisted pair"], meta: "Ethernet Standards" },
  { text: "What cable is used for <strong>DAC (direct attach copper)</strong> between switches?", answer: "Twinaxial (Twinax)", choices: ["Cat6a","Twinaxial (Twinax)","RG-6","Single-mode fiber"], meta: "Data Center" },
  { text: "In <strong>T568B</strong> wiring, what color wire is on <strong>pin 1</strong>?", answer: "Orange/white",      choices: ["Green/white","Orange/white","Blue/white","Orange"],              meta: "Wiring Standards" },
  { text: "A crossover cable uses T568A on one end and ___ on the other?",                  answer: "T568B",             choices: ["T568A","T568B","T568C","T568D"],                                 meta: "Wiring Standards" },
  { text: "Which wiring standard is most common in commercial installations?",              answer: "T568B",             choices: ["T568A","T568B","T568C","EIA-232"],                               meta: "Wiring Standards" },
  { text: "What is the max distance for <strong>10GBASE-T</strong> over Cat6a?",            answer: "100 meters",        choices: ["55 m","100 meters","150 m","500 m"],                             meta: "Ethernet Standards" },
  { text: "Which cable is <strong>recommended</strong> for high-power PoE++ (802.3bt) deployments to minimize heat buildup?", answer: "Cat6a", choices: ["Cat5","Cat5e","Cat6","Cat6a"], meta: "PoE" },
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  DATA â€” Classful IP Addressing
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const CLASSFUL_QUESTIONS = [
  // â”€â”€ Class identification by first octet â”€â”€
  { text: "An IP address starting with <strong>10.</strong> belongs to which class?",                          answer: "Class A",   choices: ["Class A","Class B","Class C","Class D"],              meta: "Class Identification" },
  { text: "An IP address starting with <strong>172.20.</strong> belongs to which class?",                      answer: "Class B",   choices: ["Class A","Class B","Class C","Class D"],              meta: "Class Identification" },
  { text: "An IP address starting with <strong>192.168.</strong> belongs to which class?",                     answer: "Class C",   choices: ["Class A","Class B","Class C","Class D"],              meta: "Class Identification" },
  { text: "An IP address starting with <strong>224.</strong> belongs to which class?",                         answer: "Class D",   choices: ["Class B","Class C","Class D","Class E"],              meta: "Class Identification" },
  { text: "An IP address starting with <strong>240.</strong> belongs to which class?",                         answer: "Class E",   choices: ["Class B","Class C","Class D","Class E"],              meta: "Class Identification" },
  { text: "Which class covers first-octet values <strong>1â€“126</strong>?",                                     answer: "Class A",   choices: ["Class A","Class B","Class C","Class D"],              meta: "Class Ranges" },
  { text: "Which class covers first-octet values <strong>128â€“191</strong>?",                                   answer: "Class B",   choices: ["Class A","Class B","Class C","Class D"],              meta: "Class Ranges" },
  { text: "Which class covers first-octet values <strong>192â€“223</strong>?",                                   answer: "Class C",   choices: ["Class A","Class B","Class C","Class D"],              meta: "Class Ranges" },
  { text: "Which class covers first-octet values <strong>224â€“239</strong>?",                                   answer: "Class D",   choices: ["Class B","Class C","Class D","Class E"],              meta: "Class Ranges" },
  { text: "Which class covers first-octet values <strong>240â€“255</strong>?",                                   answer: "Class E",   choices: ["Class B","Class C","Class D","Class E"],              meta: "Class Ranges" },

  // â”€â”€ Leading bits â”€â”€
  { text: "What is the leading bit pattern of a <strong>Class A</strong> address?",                            answer: "0",         choices: ["0","10","110","1110"],                                meta: "Leading Bits" },
  { text: "What is the leading bit pattern of a <strong>Class B</strong> address?",                            answer: "10",        choices: ["0","10","110","1110"],                                meta: "Leading Bits" },
  { text: "What is the leading bit pattern of a <strong>Class C</strong> address?",                            answer: "110",       choices: ["0","10","110","1110"],                                meta: "Leading Bits" },
  { text: "What is the leading bit pattern of a <strong>Class D</strong> address?",                            answer: "1110",      choices: ["10","110","1110","1111"],                             meta: "Leading Bits" },
  { text: "What is the leading bit pattern of a <strong>Class E</strong> address?",                            answer: "1111",      choices: ["10","110","1110","1111"],                             meta: "Leading Bits" },

  // â”€â”€ Default subnet masks â”€â”€
  { text: "What is the default subnet mask for a <strong>Class A</strong> address?",                           answer: "255.0.0.0",       choices: ["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.128"], meta: "Default Masks" },
  { text: "What is the default subnet mask for a <strong>Class B</strong> address?",                           answer: "255.255.0.0",     choices: ["255.0.0.0","255.255.0.0","255.255.255.0","255.128.0.0"],    meta: "Default Masks" },
  { text: "What is the default subnet mask for a <strong>Class C</strong> address?",                           answer: "255.255.255.0",   choices: ["255.0.0.0","255.255.0.0","255.255.255.0","255.255.128.0"],  meta: "Default Masks" },
  { text: "What CIDR prefix corresponds to a <strong>Class A</strong> default mask?",                          answer: "/8",        choices: ["/8","/16","/24","/32"],                              meta: "Default Masks" },
  { text: "What CIDR prefix corresponds to a <strong>Class B</strong> default mask?",                          answer: "/16",       choices: ["/8","/16","/24","/32"],                              meta: "Default Masks" },
  { text: "What CIDR prefix corresponds to a <strong>Class C</strong> default mask?",                          answer: "/24",       choices: ["/8","/16","/24","/32"],                              meta: "Default Masks" },

  // â”€â”€ Private address ranges â”€â”€
  { text: "What is the private address range for <strong>Class A</strong>?",                                   answer: "10.0.0.0 â€“ 10.255.255.255",      choices: ["10.0.0.0 â€“ 10.255.255.255","172.16.0.0 â€“ 172.31.255.255","192.168.0.0 â€“ 192.168.255.255","100.64.0.0 â€“ 100.127.255.255"], meta: "Private Ranges (RFC 1918)" },
  { text: "What is the private address range for <strong>Class B</strong>?",                                   answer: "172.16.0.0 â€“ 172.31.255.255",    choices: ["10.0.0.0 â€“ 10.255.255.255","172.16.0.0 â€“ 172.31.255.255","192.168.0.0 â€“ 192.168.255.255","169.254.0.0 â€“ 169.254.255.255"], meta: "Private Ranges (RFC 1918)" },
  { text: "What is the private address range for <strong>Class C</strong>?",                                   answer: "192.168.0.0 â€“ 192.168.255.255",  choices: ["10.0.0.0 â€“ 10.255.255.255","172.16.0.0 â€“ 172.31.255.255","192.168.0.0 â€“ 192.168.255.255","192.0.2.0 â€“ 192.0.2.255"], meta: "Private Ranges (RFC 1918)" },
  { text: "How many networks are in the <strong>Class B private range</strong> (172.16â€“172.31)?",              answer: "16",        choices: ["8","16","32","64"],                                   meta: "Private Ranges (RFC 1918)" },

  // â”€â”€ Hosts & networks per class â”€â”€
  { text: "How many usable host addresses does a default <strong>Class C</strong> network provide?",           answer: "254",       choices: ["254","256","510","65534"],                            meta: "Host Counts" },
  { text: "How many usable host addresses does a default <strong>Class B</strong> network provide?",           answer: "65,534",    choices: ["254","1,022","65,534","16,777,214"],                  meta: "Host Counts" },
  { text: "How many usable host addresses does a default <strong>Class A</strong> network provide?",           answer: "16,777,214",choices: ["65,534","1,048,574","16,777,214","2,097,150"],        meta: "Host Counts" },
  { text: "How many Class A networks exist (excluding reserved)?",                                             answer: "126",       choices: ["126","127","128","254"],                              meta: "Network Counts" },

  // â”€â”€ Special & reserved ranges â”€â”€
  { text: "What address range is reserved for <strong>loopback</strong> (localhost)?",                         answer: "127.0.0.0/8",      choices: ["127.0.0.0/8","0.0.0.0/8","169.254.0.0/16","255.0.0.0/8"],   meta: "Special Addresses" },
  { text: "Why is <strong>127.x.x.x</strong> skipped when counting Class A networks?",                        answer: "Reserved for loopback", choices: ["Reserved for loopback","Reserved for multicast","Reserved for broadcast","Reserved for APIPA"], meta: "Special Addresses" },
  { text: "What range does <strong>APIPA</strong> use when DHCP is unavailable?",                              answer: "169.254.0.0/16",   choices: ["127.0.0.0/8","169.254.0.0/16","192.0.2.0/24","100.64.0.0/10"], meta: "Special Addresses" },
  { text: "What is the purpose of <strong>Class D</strong> addresses?",                                        answer: "Multicast",        choices: ["Multicast","Broadcast","Loopback","Experimental"],           meta: "Special Addresses" },
  { text: "What is the purpose of <strong>Class E</strong> addresses?",                                        answer: "Experimental/Reserved", choices: ["Multicast","Broadcast","Loopback","Experimental/Reserved"], meta: "Special Addresses" },
  { text: "Which multicast address is used for <strong>all hosts on the local subnet</strong>?",               answer: "224.0.0.1",        choices: ["224.0.0.1","224.0.0.2","224.0.0.5","239.255.255.255"],       meta: "Multicast Addresses" },
  { text: "Which multicast address is used for <strong>all routers on the local subnet</strong>?",             answer: "224.0.0.2",        choices: ["224.0.0.1","224.0.0.2","224.0.0.5","224.0.0.9"],             meta: "Multicast Addresses" },
  { text: "Which multicast address do <strong>OSPF routers</strong> use?",                                     answer: "224.0.0.5",        choices: ["224.0.0.1","224.0.0.2","224.0.0.5","224.0.0.9"],             meta: "Multicast Addresses" },
  { text: "Which multicast address do <strong>RIP routers</strong> use?",                                      answer: "224.0.0.9",        choices: ["224.0.0.2","224.0.0.5","224.0.0.9","224.0.0.13"],            meta: "Multicast Addresses" },
  { text: "What is the limited broadcast address (reaches only the local subnet)?",                            answer: "255.255.255.255",  choices: ["255.255.255.255","255.0.0.0","0.0.0.0","224.0.0.1"],         meta: "Special Addresses" },
  { text: "What does the address <strong>0.0.0.0</strong> represent in networking?",                           answer: "Unspecified / default route", choices: ["Unspecified / default route","Loopback","Broadcast","APIPA"], meta: "Special Addresses" },
  { text: "Which RFC defines the private (non-routable) IPv4 address ranges?",                                 answer: "RFC 1918",  choices: ["RFC 791","RFC 1918","RFC 2460","RFC 4291"],            meta: "Private Ranges (RFC 1918)" },
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  DATA â€” Cloud Concepts (1.3)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const CLOUD_QUESTIONS = [
  // â”€â”€ Service Models â”€â”€
  { text: "What does <strong>SaaS</strong> stand for?",                                                                    answer: "Software as a Service",        choices: ["Software as a Service","Storage as a Service","Security as a Service","Scalability as a Service"],           meta: "Service Models â€” 1.3" },
  { text: "What does <strong>IaaS</strong> stand for?",                                                                    answer: "Infrastructure as a Service",  choices: ["Infrastructure as a Service","Integration as a Service","Internet as a Service","Identity as a Service"],    meta: "Service Models â€” 1.3" },
  { text: "What does <strong>PaaS</strong> stand for?",                                                                    answer: "Platform as a Service",        choices: ["Platform as a Service","Privacy as a Service","Proxy as a Service","Protocol as a Service"],               meta: "Service Models â€” 1.3" },
  { text: "Which cloud service model gives the customer the <strong>most control</strong> over the underlying infrastructure?", answer: "IaaS",                      choices: ["SaaS","IaaS","PaaS","NFV"],                                                                               meta: "Service Models â€” 1.3" },
  { text: "Which cloud service model gives the customer the <strong>least control</strong> â€” the vendor manages everything including the application?", answer: "SaaS", choices: ["SaaS","IaaS","PaaS","Direct Connect"],                                                                 meta: "Service Models â€” 1.3" },
  { text: "In which service model does the customer manage only their <strong>application code and data</strong>, while the provider manages the runtime, OS, and infrastructure?", answer: "PaaS", choices: ["SaaS","IaaS","PaaS","VPC"],                                            meta: "Service Models â€” 1.3" },
  { text: "Microsoft 365 and Gmail are examples of which cloud service model?",                                            answer: "SaaS",                         choices: ["SaaS","IaaS","PaaS","Hybrid"],                                                                            meta: "Service Models â€” 1.3" },
  { text: "Virtual machines and raw compute instances (e.g., AWS EC2) are examples of which service model?",               answer: "IaaS",                         choices: ["SaaS","IaaS","PaaS","Public cloud"],                                                                      meta: "Service Models â€” 1.3" },
  { text: "A managed application hosting environment like Heroku or AWS Elastic Beanstalk is an example of which service model?", answer: "PaaS",                   choices: ["SaaS","IaaS","PaaS","Multitenancy"],                                                                      meta: "Service Models â€” 1.3" },

  // â”€â”€ Deployment Models â”€â”€
  { text: "Which cloud deployment model is hosted by a third-party provider and accessible to anyone over the internet?",  answer: "Public cloud",                 choices: ["Public cloud","Private cloud","Hybrid cloud","Community cloud"],                                            meta: "Deployment Models â€” 1.3" },
  { text: "Which cloud deployment model is operated exclusively for a <strong>single organization</strong>?",              answer: "Private cloud",                choices: ["Public cloud","Private cloud","Hybrid cloud","Dedicated cloud"],                                           meta: "Deployment Models â€” 1.3" },
  { text: "Which cloud deployment model <strong>combines on-premises or private infrastructure with public cloud</strong> resources?", answer: "Hybrid cloud",      choices: ["Public cloud","Private cloud","Hybrid cloud","Multi-cloud"],                                              meta: "Deployment Models â€” 1.3" },
  { text: "An organization keeps sensitive data on-premises but runs less critical workloads on AWS. Which deployment model is this?", answer: "Hybrid cloud",       choices: ["Public cloud","Private cloud","Hybrid cloud","Community cloud"],                                          meta: "Deployment Models â€” 1.3" },

  // â”€â”€ Cloud Connectivity â”€â”€
  { text: "Which cloud connectivity option uses an <strong>encrypted tunnel over the public internet</strong> to reach cloud resources?", answer: "VPN",             choices: ["VPN","Direct Connect","Internet gateway","NAT gateway"],                                                  meta: "Cloud Connectivity â€” 1.3" },
  { text: "Which cloud connectivity option provides a <strong>dedicated private connection</strong> that bypasses the public internet?", answer: "Direct Connect",    choices: ["VPN","Direct Connect","Internet gateway","NAT gateway"],                                                  meta: "Cloud Connectivity â€” 1.3" },
  { text: "Compared to VPN, Direct Connect provides what advantages?",                                                     answer: "Lower latency and more consistent throughput", choices: ["Lower latency and more consistent throughput","Stronger encryption","Lower cost","Easier setup"],  meta: "Cloud Connectivity â€” 1.3" },

  // â”€â”€ Cloud Gateways â”€â”€
  { text: "What is the purpose of an <strong>Internet gateway</strong> in a cloud VPC?",                                   answer: "Allows bidirectional traffic between the VPC and the public internet", choices: ["Allows bidirectional traffic between the VPC and the public internet","Allows only outbound traffic from private subnets","Provides DNS resolution within the VPC","Connects two VPCs together"], meta: "Cloud Gateways â€” 1.3" },
  { text: "What is the purpose of a <strong>NAT gateway</strong> in a cloud VPC?",                                         answer: "Allows private subnet instances to initiate outbound internet connections without being directly reachable from the internet", choices: ["Allows private subnet instances to initiate outbound internet connections without being directly reachable from the internet","Allows inbound connections from the internet to private subnets","Connects the VPC to on-premises networks","Provides load balancing across subnets"], meta: "Cloud Gateways â€” 1.3" },
  { text: "A private subnet's instances need to download updates from the internet but must not be directly reachable from it. Which gateway is used?", answer: "NAT gateway", choices: ["Internet gateway","NAT gateway","Direct Connect","VPN gateway"],                              meta: "Cloud Gateways â€” 1.3" },
  { text: "A public subnet needs to host a web server reachable from the internet. Which gateway enables this?",            answer: "Internet gateway",             choices: ["Internet gateway","NAT gateway","Direct Connect","VPN gateway"],                                           meta: "Cloud Gateways â€” 1.3" },

  // â”€â”€ VPC & Network Security â”€â”€
  { text: "What does <strong>VPC</strong> stand for?",                                                                     answer: "Virtual Private Cloud",        choices: ["Virtual Private Cloud","Virtual Protocol Controller","Verified Public Connection","Virtual Packet Core"], meta: "VPC & Security â€” 1.3" },
  { text: "What does a <strong>VPC</strong> provide?",                                                                     answer: "A logically isolated section of a cloud provider's network dedicated to one customer", choices: ["A logically isolated section of a cloud provider's network dedicated to one customer","A physical server rack reserved for one customer","A VPN tunnel to the cloud provider","A dedicated internet connection"], meta: "VPC & Security â€” 1.3" },
  { text: "<strong>Network security groups</strong> in cloud environments act as what?",                                   answer: "Stateful firewalls controlling inbound and outbound traffic to individual resources", choices: ["Stateful firewalls controlling inbound and outbound traffic to individual resources","Stateless packet filters applied at the subnet level","Physical network switches","Load balancers"], meta: "VPC & Security â€” 1.3" },
  { text: "<strong>Network security lists</strong> differ from security groups in that they are:",                          answer: "Stateless and applied at the subnet level",    choices: ["Stateless and applied at the subnet level","Stateful and applied to individual resources","Applied only to outbound traffic","Applied only to inbound traffic"],                       meta: "VPC & Security â€” 1.3" },
  { text: "Which operates at the <strong>subnet level</strong> and is stateless: a network security group or a network security list?", answer: "Network security list", choices: ["Network security group","Network security list","Both are stateless","Both are stateful"], meta: "VPC & Security â€” 1.3" },

  // â”€â”€ NFV â”€â”€
  { text: "What does <strong>NFV</strong> stand for?",                                                                     answer: "Network Functions Virtualization", choices: ["Network Functions Virtualization","Network Firewall Virtualization","Node Failover Validation","Network Fabric Vendor"],  meta: "NFV â€” 1.3" },
  { text: "What does <strong>NFV</strong> do?",                                                                            answer: "Replaces dedicated network hardware appliances with software running on standard servers", choices: ["Replaces dedicated network hardware appliances with software running on standard servers","Creates encrypted tunnels between network devices","Manages IP address allocation in a cloud environment","Provides physical redundancy for network links"], meta: "NFV â€” 1.3" },
  { text: "Which of these is an example of NFV in practice?",                                                              answer: "Running a virtual firewall on a standard x86 server instead of a dedicated firewall appliance", choices: ["Running a virtual firewall on a standard x86 server instead of a dedicated firewall appliance","Connecting two data centers with a fiber link","Using a managed switch instead of a hub","Deploying a Wi-Fi controller"], meta: "NFV â€” 1.3" },

  // â”€â”€ Scalability, Elasticity, Multitenancy â”€â”€
  { text: "In cloud computing, what does <strong>scalability</strong> refer to?",                                          answer: "The ability to increase or decrease capacity to handle changing demand", choices: ["The ability to increase or decrease capacity to handle changing demand","Automatically adjusting resources in real time based on load","Multiple customers sharing the same physical infrastructure","The uptime guarantee in a service-level agreement"], meta: "Cloud Characteristics â€” 1.3" },
  { text: "In cloud computing, what does <strong>elasticity</strong> refer to?",                                           answer: "The automatic, dynamic provisioning and de-provisioning of resources based on real-time demand", choices: ["The automatic, dynamic provisioning and de-provisioning of resources based on real-time demand","The maximum capacity a cloud environment can reach","The ability to manually add servers when needed","Physical redundancy across data centers"], meta: "Cloud Characteristics â€” 1.3" },
  { text: "What is the key difference between <strong>scalability</strong> and <strong>elasticity</strong>?",              answer: "Scalability is the capacity to grow; elasticity is the automated, real-time adjustment", choices: ["Scalability is the capacity to grow; elasticity is the automated, real-time adjustment","Elasticity refers to vertical scaling; scalability to horizontal","They are synonymous","Scalability applies to storage only; elasticity to compute"], meta: "Cloud Characteristics â€” 1.3" },
  { text: "What does <strong>multitenancy</strong> mean in cloud computing?",                                              answer: "Multiple customers share the same physical infrastructure while remaining logically isolated", choices: ["Multiple customers share the same physical infrastructure while remaining logically isolated","Each customer receives dedicated physical hardware","A single application serves multiple regions simultaneously","Multiple administrators manage a single cloud account"], meta: "Cloud Characteristics â€” 1.3" },
  { text: "A cloud provider runs workloads for hundreds of customers on the same physical servers, keeping each customer's data isolated. This is an example of:", answer: "Multitenancy", choices: ["Multitenancy","Elasticity","Direct Connect","NFV"],                                                                                                                          meta: "Cloud Characteristics â€” 1.3" },
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  DATA â€” Networking Fundamentals (1.1, 1.2, 1.6)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const FUNDAMENTALS_QUESTIONS = [
  // â”€â”€ OSI Layer Names â”€â”€
  { text: "What is <strong>OSI Layer 1</strong>?",                                                    answer: "Physical",        choices: ["Physical","Data Link","Network","Transport"],             meta: "OSI Model â€” 1.1" },
  { text: "What is <strong>OSI Layer 2</strong>?",                                                    answer: "Data Link",       choices: ["Physical","Data Link","Network","Session"],               meta: "OSI Model â€” 1.1" },
  { text: "What is <strong>OSI Layer 3</strong>?",                                                    answer: "Network",         choices: ["Data Link","Network","Transport","Session"],              meta: "OSI Model â€” 1.1" },
  { text: "What is <strong>OSI Layer 4</strong>?",                                                    answer: "Transport",       choices: ["Network","Transport","Session","Presentation"],          meta: "OSI Model â€” 1.1" },
  { text: "What is <strong>OSI Layer 5</strong>?",                                                    answer: "Session",         choices: ["Transport","Session","Presentation","Application"],      meta: "OSI Model â€” 1.1" },
  { text: "What is <strong>OSI Layer 6</strong>?",                                                    answer: "Presentation",    choices: ["Session","Presentation","Application","Network"],        meta: "OSI Model â€” 1.1" },
  { text: "What is <strong>OSI Layer 7</strong>?",                                                    answer: "Application",     choices: ["Session","Presentation","Application","Transport"],      meta: "OSI Model â€” 1.1" },
  { text: "The <strong>Presentation</strong> layer is which OSI layer number?",                        answer: "Layer 6",         choices: ["Layer 4","Layer 5","Layer 6","Layer 7"],                 meta: "OSI Model â€” 1.1" },
  { text: "The <strong>Session</strong> layer is which OSI layer number?",                             answer: "Layer 5",         choices: ["Layer 3","Layer 4","Layer 5","Layer 6"],                 meta: "OSI Model â€” 1.1" },
  { text: "The <strong>Data Link</strong> layer is which OSI layer number?",                           answer: "Layer 2",         choices: ["Layer 1","Layer 2","Layer 3","Layer 4"],                 meta: "OSI Model â€” 1.1" },

  // â”€â”€ OSI PDUs â”€â”€
  { text: "What is the PDU name at OSI <strong>Layer 1 (Physical)</strong>?",                          answer: "Bits",            choices: ["Bits","Frames","Packets","Segments"],                   meta: "OSI PDUs â€” 1.1" },
  { text: "What is the PDU name at OSI <strong>Layer 2 (Data Link)</strong>?",                         answer: "Frames",          choices: ["Bits","Frames","Packets","Segments"],                   meta: "OSI PDUs â€” 1.1" },
  { text: "What is the PDU name at OSI <strong>Layer 3 (Network)</strong>?",                           answer: "Packets",         choices: ["Frames","Packets","Segments","Bits"],                   meta: "OSI PDUs â€” 1.1" },
  { text: "What is the PDU name at OSI <strong>Layer 4 (Transport)</strong>?",                         answer: "Segments",        choices: ["Packets","Segments","Frames","Datagrams"],              meta: "OSI PDUs â€” 1.1" },

  // â”€â”€ OSI Layer Functions â”€â”€
  { text: "Which OSI layer handles <strong>logical addressing (IP) and routing</strong>?",             answer: "Layer 3 â€” Network",       choices: ["Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session"],         meta: "OSI Functions â€” 1.1" },
  { text: "Which OSI layer handles <strong>end-to-end reliable delivery, flow control, and error recovery</strong>?", answer: "Layer 4 â€” Transport", choices: ["Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session","Layer 6 â€” Presentation"], meta: "OSI Functions â€” 1.1" },
  { text: "Which OSI layer handles <strong>data encryption, compression, and format translation</strong>?", answer: "Layer 6 â€” Presentation", choices: ["Layer 5 â€” Session","Layer 6 â€” Presentation","Layer 7 â€” Application","Layer 4 â€” Transport"], meta: "OSI Functions â€” 1.1" },
  { text: "Which OSI layer is responsible for <strong>establishing, maintaining, and terminating sessions</strong>?", answer: "Layer 5 â€” Session", choices: ["Layer 4 â€” Transport","Layer 5 â€” Session","Layer 6 â€” Presentation","Layer 7 â€” Application"], meta: "OSI Functions â€” 1.1" },
  { text: "Which OSI layer handles <strong>physical transmission of raw bits</strong> over a medium?",   answer: "Layer 1 â€” Physical",      choices: ["Layer 1 â€” Physical","Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport"],       meta: "OSI Functions â€” 1.1" },
  { text: "Which OSI layer handles <strong>MAC addressing and local frame delivery</strong>?",           answer: "Layer 2 â€” Data Link",     choices: ["Layer 1 â€” Physical","Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport"],       meta: "OSI Functions â€” 1.1" },
  { text: "Which OSI layer does a user's web browser or email client interact with directly?",           answer: "Layer 7 â€” Application",   choices: ["Layer 5 â€” Session","Layer 6 â€” Presentation","Layer 7 â€” Application","Layer 4 â€” Transport"], meta: "OSI Functions â€” 1.1" },

  // â”€â”€ Protocols at OSI Layers â”€â”€
  { text: "At which OSI layer does <strong>IP</strong> operate?",                                       answer: "Layer 3 â€” Network",       choices: ["Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session"],         meta: "OSI Protocols â€” 1.1" },
  { text: "At which OSI layer does <strong>TCP</strong> operate?",                                      answer: "Layer 4 â€” Transport",     choices: ["Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session","Layer 6 â€” Presentation"],     meta: "OSI Protocols â€” 1.1" },
  { text: "At which OSI layer does <strong>UDP</strong> operate?",                                      answer: "Layer 4 â€” Transport",     choices: ["Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session","Layer 2 â€” Data Link"],        meta: "OSI Protocols â€” 1.1" },
  { text: "At which OSI layer do <strong>HTTP, FTP, and SMTP</strong> operate?",                        answer: "Layer 7 â€” Application",   choices: ["Layer 5 â€” Session","Layer 6 â€” Presentation","Layer 7 â€” Application","Layer 4 â€” Transport"], meta: "OSI Protocols â€” 1.1" },
  { text: "At which OSI layer does <strong>SSL/TLS</strong> operate?",                                  answer: "Layer 5 â€” Session",       choices: ["Layer 4 â€” Transport","Layer 5 â€” Session","Layer 6 â€” Presentation","Layer 7 â€” Application"], meta: "OSI Protocols â€” 1.1" },
  { text: "At which OSI layer does <strong>Ethernet / MAC addressing</strong> operate?",                answer: "Layer 2 â€” Data Link",     choices: ["Layer 1 â€” Physical","Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport"],       meta: "OSI Protocols â€” 1.1" },
  { text: "According to CompTIA, at which OSI layer does <strong>ARP</strong> operate?",               answer: "Layer 2 â€” Data Link",     choices: ["Layer 1 â€” Physical","Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport"],       meta: "OSI Protocols â€” 1.1" },
  { text: "At which OSI layer does <strong>ICMP</strong> operate?",                                     answer: "Layer 3 â€” Network",       choices: ["Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session"],         meta: "OSI Protocols â€” 1.1" },

  // â”€â”€ Devices at OSI Layers â”€â”€
  { text: "At which OSI layer does a <strong>hub</strong> operate?",                                    answer: "Layer 1 â€” Physical",   choices: ["Layer 1 â€” Physical","Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport"],    meta: "OSI Devices â€” 1.1/1.2" },
  { text: "At which OSI layer does a <strong>switch</strong> operate?",                                 answer: "Layer 2 â€” Data Link",  choices: ["Layer 1 â€” Physical","Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport"],    meta: "OSI Devices â€” 1.1/1.2" },
  { text: "At which OSI layer does a <strong>router</strong> operate?",                                 answer: "Layer 3 â€” Network",    choices: ["Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session"],      meta: "OSI Devices â€” 1.1/1.2" },
  { text: "A <strong>wireless access point</strong> operates primarily at which OSI layer?",             answer: "Layer 2 â€” Data Link",  choices: ["Layer 1 â€” Physical","Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 7 â€” Application"], meta: "OSI Devices â€” 1.1/1.2" },
  { text: "A <strong>stateful firewall</strong> that tracks TCP/UDP ports and connection state operates at which OSI layer?", answer: "Layer 4 â€” Transport", choices: ["Layer 2 â€” Data Link","Layer 3 â€” Network","Layer 4 â€” Transport","Layer 7 â€” Application"], meta: "OSI Devices â€” 1.1/1.2" },
  { text: "A <strong>next-generation firewall (NGFW)</strong> doing deep packet inspection operates at which OSI layer?", answer: "Layer 7 â€” Application", choices: ["Layer 3 â€” Network","Layer 4 â€” Transport","Layer 5 â€” Session","Layer 7 â€” Application"], meta: "OSI Devices â€” 1.1/1.2" },

  // â”€â”€ Network Device Functions â”€â”€
  { text: "What address type does a <strong>switch</strong> use to make forwarding decisions?",          answer: "MAC address",    choices: ["IP address","MAC address","Port number","VLAN ID"],                                           meta: "Network Devices â€” 1.2" },
  { text: "What address type does a <strong>router</strong> use to make forwarding decisions?",          answer: "IP address",     choices: ["MAC address","IP address","Port number","DNS name"],                                          meta: "Network Devices â€” 1.2" },
  { text: "Which device connects separate networks and forwards traffic between them?",                  answer: "Router",         choices: ["Switch","Router","Hub","Bridge"],                                                             meta: "Network Devices â€” 1.2" },
  { text: "Which device forwards frames within a LAN based on MAC address tables?",                     answer: "Switch",         choices: ["Router","Switch","Firewall","Load balancer"],                                                 meta: "Network Devices â€” 1.2" },
  { text: "What is the key difference between an <strong>IDS</strong> and an <strong>IPS</strong>?",    answer: "IDS detects and alerts; IPS detects and blocks", choices: ["IDS detects and alerts; IPS detects and blocks","IPS detects and alerts; IDS detects and blocks","IDS blocks; IPS only logs","They are the same device with different names"], meta: "Network Devices â€” 1.2" },
  { text: "Which device distributes incoming network traffic across multiple backend servers?",           answer: "Load balancer",  choices: ["Proxy","Load balancer","IDS","NAT gateway"],                                                 meta: "Network Devices â€” 1.2" },
  { text: "Which device sits between clients and servers, forwarding requests on behalf of clients?",    answer: "Proxy",          choices: ["Firewall","Load balancer","Proxy","Router"],                                                 meta: "Network Devices â€” 1.2" },
  { text: "What does <strong>NAS</strong> provide?",                                                    answer: "File-level storage over a network",    choices: ["File-level storage over a network","Block-level storage over a dedicated network","Wireless access to storage","Cloud-based backup"], meta: "Network Devices â€” 1.2" },
  { text: "What does <strong>SAN</strong> provide?",                                                    answer: "Block-level storage over a dedicated network", choices: ["File-level storage over a network","Block-level storage over a dedicated network","Direct-attached storage","Object storage"], meta: "Network Devices â€” 1.2" },
  { text: "What is the role of a <strong>wireless controller</strong>?",                                 answer: "Centrally manages multiple access points", choices: ["Provides wireless signal directly to clients","Centrally manages multiple access points","Acts as a DHCP server for wireless clients","Encrypts wireless traffic"], meta: "Network Devices â€” 1.2" },
  { text: "What does a <strong>CDN</strong> primarily do?",                                              answer: "Caches and delivers content from servers geographically close to users", choices: ["Caches and delivers content from servers geographically close to users","Filters malicious web traffic","Assigns IP addresses dynamically","Manages VPN tunnels"], meta: "Network Devices â€” 1.2" },
  { text: "What does <strong>QoS</strong> do?",                                                          answer: "Prioritizes certain types of traffic to ensure performance", choices: ["Encrypts all network traffic","Prioritizes certain types of traffic to ensure performance","Assigns IP addresses to devices","Blocks unauthorized access"], meta: "Network Devices â€” 1.2" },
  { text: "What does <strong>TTL</strong> (Time to Live) prevent?",                                      answer: "Packets looping indefinitely through the network", choices: ["Unauthorized access","Duplicate IP addresses","Packets looping indefinitely through the network","DNS cache poisoning"], meta: "Network Devices â€” 1.2" },
  { text: "A <strong>VPN</strong> primarily provides what?",                                             answer: "An encrypted tunnel over a public network", choices: ["Faster internet speeds","An encrypted tunnel over a public network","Automatic IP address assignment","Content caching near end users"], meta: "Network Devices â€” 1.2" },

  // â”€â”€ Topologies â”€â”€
  { text: "In a <strong>star topology</strong>, all devices connect to what central point?",             answer: "A central switch or hub", choices: ["Each other directly","A central switch or hub","A spine switch","Two redundant core routers"], meta: "Topologies â€” 1.6" },
  { text: "Which topology provides the most redundancy by connecting every node to every other node?",   answer: "Mesh",    choices: ["Star","Point to point","Mesh","Hybrid"],                                                                 meta: "Topologies â€” 1.6" },
  { text: "Which data center topology connects every leaf switch to every spine switch?",                answer: "Spine and leaf", choices: ["Star","Three-tier hierarchical","Spine and leaf","Collapsed core"],                      meta: "Topologies â€” 1.6" },
  { text: "In a <strong>spine-and-leaf</strong> architecture, do leaf switches connect directly to each other?", answer: "No â€” leaf switches only connect to spine switches", choices: ["Yes, for redundancy","No â€” leaf switches only connect to spine switches","Only via VXLAN tunnels","Only if in the same rack"], meta: "Topologies â€” 1.6" },
  { text: "Which topology consists of a direct connection between exactly two endpoints?",               answer: "Point to point", choices: ["Mesh","Star","Point to point","Hybrid"],                                                   meta: "Topologies â€” 1.6" },
  { text: "In the three-tier hierarchical model, which layer connects <strong>end-user devices</strong>?", answer: "Access",       choices: ["Core","Distribution","Access","Collapsed core"],                                          meta: "Topologies â€” 1.6" },
  { text: "In the three-tier hierarchical model, which layer provides <strong>high-speed backbone switching</strong>?", answer: "Core", choices: ["Core","Distribution","Access","Spine"],                                             meta: "Topologies â€” 1.6" },
  { text: "In the three-tier hierarchical model, which layer handles <strong>routing, filtering, and policy</strong> between access and core?", answer: "Distribution", choices: ["Core","Distribution","Access","Leaf"],              meta: "Topologies â€” 1.6" },
  { text: "What is a <strong>collapsed core</strong> design?",                                           answer: "Combines the core and distribution layers into a single layer", choices: ["Combines the core and distribution layers into a single layer","A redundant dual-core design","A core switch with backup power","A single flat network with no hierarchy"], meta: "Topologies â€” 1.6" },
  { text: "Which traffic flow describes communication <strong>between servers inside a data center</strong>?", answer: "East-west", choices: ["North-south","East-west","Spine-to-leaf","Hub-and-spoke"],                               meta: "Topologies â€” 1.6" },
  { text: "Which traffic flow describes traffic <strong>entering or leaving a data center</strong> (client â†” server)?", answer: "North-south", choices: ["North-south","East-west","Access-to-core","Leaf-to-spine"],                  meta: "Topologies â€” 1.6" },
  { text: "Which topology mixes characteristics of two or more other topology types?",                   answer: "Hybrid", choices: ["Mesh","Star","Spine and leaf","Hybrid"],                                                          meta: "Topologies â€” 1.6" },
  { text: "<strong>Hub-and-spoke</strong> is another name for which topology?",                          answer: "Star",   choices: ["Mesh","Star","Point to point","Hybrid"],                                                                 meta: "Topologies â€” 1.6" },
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  DATA â€” Routing Technologies (2.1)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const ROUTING_QUESTIONS = [
  // â”€â”€ Static vs Dynamic â”€â”€
  { text: "Which routing type requires an administrator to manually enter every route into the routing table?",                       answer: "Static routing",   choices: ["Static routing","OSPF","BGP","EIGRP"],                                                                              meta: "Static vs Dynamic â€” 2.1" },
  { text: "Which routing type uses protocols to automatically discover and update routes?",                                          answer: "Dynamic routing",  choices: ["Static routing","Dynamic routing","Default routing","Policy routing"],                                               meta: "Static vs Dynamic â€” 2.1" },
  { text: "A network with one exit point to the internet commonly uses a _____ route pointing all unknown traffic to the ISP.",      answer: "Default (static)", choices: ["Default (static)","OSPF","BGP","EIGRP"],                                                                             meta: "Static vs Dynamic â€” 2.1" },
  { text: "What is the main advantage of static routing over dynamic routing?",                                                      answer: "Predictable, no routing protocol overhead", choices: ["Predictable, no routing protocol overhead","Automatically adapts to topology changes","Scales to thousands of routers","Uses lowest administrative distance"], meta: "Static vs Dynamic â€” 2.1" },

  // â”€â”€ Dynamic Routing Protocols â”€â”€
  { text: "What does <strong>BGP</strong> stand for?",                                                                               answer: "Border Gateway Protocol",   choices: ["Border Gateway Protocol","Basic Gateway Protocol","Backbone Group Protocol","Border Group Peer"],            meta: "Dynamic Routing â€” 2.1" },
  { text: "Which routing protocol is used to exchange routes <strong>between autonomous systems</strong> on the internet?",          answer: "BGP",  choices: ["OSPF","EIGRP","BGP","RIP"],                                                                                                        meta: "Dynamic Routing â€” 2.1" },
  { text: "What does <strong>OSPF</strong> stand for?",                                                                              answer: "Open Shortest Path First",  choices: ["Open Shortest Path First","Optimized Static Path Forwarding","Open Spanning Path First","Outbound Shortest Path First"], meta: "Dynamic Routing â€” 2.1" },
  { text: "OSPF uses which algorithm to calculate the best path?",                                                                   answer: "Dijkstra's shortest path first (SPF)", choices: ["Dijkstra's shortest path first (SPF)","Bellman-Ford","Distance vector","Path vector"],                           meta: "Dynamic Routing â€” 2.1" },
  { text: "OSPF is classified as which type of routing protocol?",                                                                   answer: "Link-state",  choices: ["Distance-vector","Link-state","Path-vector","Hybrid"],                                                                      meta: "Dynamic Routing â€” 2.1" },
  { text: "What does <strong>EIGRP</strong> stand for?",                                                                             answer: "Enhanced Interior Gateway Routing Protocol", choices: ["Enhanced Interior Gateway Routing Protocol","External Interior Gateway Routing Protocol","Exterior Internet Gateway Routing Protocol","Enhanced Internal Gateway Relay Protocol"], meta: "Dynamic Routing â€” 2.1" },
  { text: "EIGRP is classified as which type of routing protocol?",                                                                  answer: "Advanced distance-vector", choices: ["Link-state","Distance-vector","Advanced distance-vector","Path-vector"],                             meta: "Dynamic Routing â€” 2.1" },
  { text: "Which routing protocol is vendor-proprietary and developed by Cisco?",                                                    answer: "EIGRP", choices: ["OSPF","BGP","EIGRP","RIP"],                                                                                                        meta: "Dynamic Routing â€” 2.1" },
  { text: "Which routing protocol is an open standard used <strong>within</strong> an autonomous system?",                           answer: "OSPF",  choices: ["BGP","EIGRP","OSPF","RIP"],                                                                                                        meta: "Dynamic Routing â€” 2.1" },
  { text: "BGP is classified as which type of routing protocol?",                                                                    answer: "Path-vector", choices: ["Link-state","Distance-vector","Advanced distance-vector","Path-vector"],                                                    meta: "Dynamic Routing â€” 2.1" },

  // â”€â”€ Route Selection â”€â”€
  { text: "When a router has multiple routes to the same destination from different protocols, what value determines which route is preferred?", answer: "Administrative distance (AD)", choices: ["Administrative distance (AD)","Metric","TTL","Prefix length"],                                      meta: "Route Selection â€” 2.1" },
  { text: "What does a <strong>lower administrative distance</strong> indicate?",                                                     answer: "More trustworthy/preferred route source", choices: ["More trustworthy/preferred route source","Higher-cost path","Longer subnet prefix","Faster convergence"], meta: "Route Selection â€” 2.1" },
  { text: "What is the administrative distance for a <strong>directly connected</strong> route?",                                    answer: "0",   choices: ["0","1","5","20"],                                                                                                                  meta: "Route Selection â€” 2.1" },
  { text: "What is the administrative distance for a <strong>static route</strong>?",                                                answer: "1",   choices: ["0","1","5","110"],                                                                                                                 meta: "Route Selection â€” 2.1" },
  { text: "What is the administrative distance for <strong>OSPF</strong>?",                                                          answer: "110", choices: ["20","90","110","120"],                                                                                                              meta: "Route Selection â€” 2.1" },
  { text: "What is the administrative distance for <strong>EIGRP (internal)</strong>?",                                              answer: "90",  choices: ["20","90","110","120"],                                                                                                              meta: "Route Selection â€” 2.1" },
  { text: "What is the administrative distance for <strong>BGP (eBGP)</strong>?",                                                    answer: "20",  choices: ["1","20","90","200"],                                                                                                               meta: "Route Selection â€” 2.1" },
  { text: "When two routes from the same routing protocol have the same administrative distance, what is used to choose the best path?",                            answer: "Metric", choices: ["TTL","Metric","Prefix length","VLAN ID"],                                                                                          meta: "Route Selection â€” 2.1" },
  { text: "When a router has routes to <strong>192.168.1.0/24</strong> and <strong>192.168.1.128/25</strong>, which is preferred for a packet destined to 192.168.1.200?", answer: "192.168.1.128/25 â€” longest prefix match", choices: ["192.168.1.0/24 â€” shortest prefix match","192.168.1.128/25 â€” longest prefix match","The route with lower AD","The route with lower metric"], meta: "Route Selection â€” 2.1" },
  { text: "The rule that a more specific route (longer prefix) is always preferred is called:",                                      answer: "Longest prefix match", choices: ["Longest prefix match","Lowest administrative distance","Best metric","Default route preference"],                      meta: "Route Selection â€” 2.1" },
  { text: "OSPF uses <strong>cost</strong> as its metric. Cost is calculated based on:",                                             answer: "Interface bandwidth", choices: ["Interface bandwidth","Hop count","Delay and bandwidth combined","MTU size"],                                          meta: "Route Selection â€” 2.1" },
  { text: "EIGRP uses a composite metric that, by default, considers:",                                                              answer: "Bandwidth and delay", choices: ["Bandwidth and delay","Hop count only","Cost (bandwidth)","Delay and reliability"],                                   meta: "Route Selection â€” 2.1" },

  // â”€â”€ NAT / PAT â”€â”€
  { text: "What does <strong>NAT</strong> stand for?",                                                                               answer: "Network Address Translation", choices: ["Network Address Translation","Network Access Table","Node Address Topology","Network Allocation Table"], meta: "NAT/PAT â€” 2.1" },
  { text: "What does <strong>PAT</strong> stand for?",                                                                               answer: "Port Address Translation",    choices: ["Port Address Translation","Protocol Address Table","Public Access Translation","Packet Address Transposition"], meta: "NAT/PAT â€” 2.1" },
  { text: "PAT is also commonly known as:",                                                                                          answer: "NAT overload",  choices: ["NAT overload","Dynamic NAT","Static NAT","Dual NAT"],                                                                     meta: "NAT/PAT â€” 2.1" },
  { text: "Static NAT maps:",                                                                                                        answer: "One private IP to one fixed public IP", choices: ["One private IP to one fixed public IP","Many private IPs to one public IP using ports","Many private IPs to a pool of public IPs","Public IPs to private IPs randomly"], meta: "NAT/PAT â€” 2.1" },
  { text: "PAT allows many private hosts to share a single public IP address by differentiating connections using:",                 answer: "Source port numbers", choices: ["Source port numbers","MAC addresses","VLAN tags","TTL values"],                                                      meta: "NAT/PAT â€” 2.1" },
  { text: "Which NAT type is used when a server inside a private network must be reachable from the internet with a fixed public IP?", answer: "Static NAT", choices: ["Static NAT","Dynamic NAT","PAT (NAT overload)","Double NAT"],                                                           meta: "NAT/PAT â€” 2.1" },
  { text: "A home router sharing one ISP-assigned IP address among multiple devices is using:",                                      answer: "PAT (NAT overload)", choices: ["Static NAT","Dynamic NAT","PAT (NAT overload)","Proxy ARP"],                                                          meta: "NAT/PAT â€” 2.1" },

  // â”€â”€ FHRP / VIP â”€â”€
  { text: "What does <strong>FHRP</strong> stand for?",                                                                              answer: "First Hop Redundancy Protocol", choices: ["First Hop Redundancy Protocol","Failover Host Routing Protocol","Fast Hop Relay Protocol","Forwarding Host Redundancy Protocol"], meta: "FHRP â€” 2.1" },
  { text: "What problem does FHRP solve?",                                                                                           answer: "Provides a redundant default gateway so hosts continue routing if one gateway fails", choices: ["Provides a redundant default gateway so hosts continue routing if one gateway fails","Balances load across multiple ISP links","Prevents routing loops in dynamic protocols","Assigns IP addresses automatically"], meta: "FHRP â€” 2.1" },
  { text: "In an FHRP setup, hosts point their default gateway to a:",                                                               answer: "Virtual IP (VIP) shared by multiple routers", choices: ["Virtual IP (VIP) shared by multiple routers","The primary router's real IP","The secondary router's real IP","A floating static route"], meta: "FHRP â€” 2.1" },
  { text: "What does <strong>HSRP</strong> stand for?",                                                                              answer: "Hot Standby Router Protocol", choices: ["Hot Standby Router Protocol","High-Speed Routing Protocol","Hop Standby Redundancy Protocol","Hybrid Static Routing Protocol"], meta: "FHRP â€” 2.1" },
  { text: "HSRP is a Cisco-proprietary FHRP. The open-standard equivalent is:",                                                      answer: "VRRP (Virtual Router Redundancy Protocol)", choices: ["VRRP (Virtual Router Redundancy Protocol)","OSPF","STP","EIGRP"],                              meta: "FHRP â€” 2.1" },
  { text: "In HSRP, how many routers are actively forwarding traffic at one time?",                                                  answer: "One (the active router)", choices: ["One (the active router)","Two (both active and standby)","All routers equally","Depends on metric"],            meta: "FHRP â€” 2.1" },

  // â”€â”€ Subinterfaces â”€â”€
  { text: "A subinterface allows a single physical router interface to:",                                                             answer: "Carry traffic for multiple VLANs using 802.1Q tags", choices: ["Carry traffic for multiple VLANs using 802.1Q tags","Connect to two separate ISPs simultaneously","Perform NAT on multiple public IPs","Act as a wireless access point"], meta: "Subinterfaces â€” 2.1" },
  { text: "The router-on-a-stick design uses subinterfaces to route between VLANs over a single <strong>trunk</strong> link. Each subinterface is assigned:", answer: "An IP address and a VLAN encapsulation (802.1Q)", choices: ["An IP address and a VLAN encapsulation (802.1Q)","A separate MAC address per VLAN","A unique physical port per VLAN","A static NAT entry"], meta: "Subinterfaces â€” 2.1" },
];

const SWITCHING_QUESTIONS = [
  // -- VLANs --
  { text: "What does <strong>VLAN</strong> stand for?", answer: "Virtual Local Area Network", choices: ["Virtual Local Area Network","Variable Link Access Network","Virtual Layer Access Node","Verified LAN"], meta: "VLANs - 2.2" },
  { text: "What is the primary purpose of a VLAN?", answer: "Segment broadcast domains on a single switch", choices: ["Segment broadcast domains on a single switch","Encrypt traffic between hosts","Increase port speed","Replace the need for routers"], meta: "VLANs - 2.2" },
  { text: "What is the default VLAN on most managed switches?", answer: "VLAN 1", choices: ["VLAN 1","VLAN 10","VLAN 100","VLAN 4094"], meta: "VLANs - 2.2" },
  { text: "Traffic from devices in different VLANs can only be routed by:", answer: "A Layer 3 device (router or Layer 3 switch)", choices: ["A Layer 3 device (router or Layer 3 switch)","A standard Layer 2 switch","A hub","A wireless access point"], meta: "VLANs - 2.2" },
  { text: "A <strong>VLAN database</strong> on a switch stores:", answer: "VLAN IDs and names configured on the switch", choices: ["VLAN IDs and names configured on the switch","MAC address table entries","IP routing table","ARP cache"], meta: "VLANs - 2.2" },
  { text: "What is a <strong>Switched Virtual Interface (SVI)</strong>?", answer: "A virtual Layer 3 interface on a switch representing a VLAN", choices: ["A virtual Layer 3 interface on a switch representing a VLAN","A physical uplink port","A wireless virtual AP","A tunneled VPN interface"], meta: "VLANs - 2.2" },
  { text: "An SVI is used on a Layer 3 switch to:", answer: "Route between VLANs without an external router", choices: ["Route between VLANs without an external router","Increase VLAN IDs beyond 4094","Disable spanning tree per VLAN","Mirror traffic to a monitoring port"], meta: "VLANs - 2.2" },
  // -- Trunk & Access Ports --
  { text: "A switch port configured as an <strong>access port</strong> belongs to:", answer: "Exactly one VLAN", choices: ["Exactly one VLAN","All VLANs simultaneously","Two VLANs at most","No VLAN"], meta: "Trunk and Access - 2.2" },
  { text: "A switch port configured as a <strong>trunk port</strong> carries:", answer: "Traffic for multiple VLANs using 802.1Q tags", choices: ["Traffic for multiple VLANs using 802.1Q tags","Traffic for one VLAN only","Only management traffic","Only voice traffic"], meta: "Trunk and Access - 2.2" },
  { text: "Which IEEE standard defines VLAN tagging on trunk links?", answer: "802.1Q", choices: ["802.1Q","802.1X","802.3af","802.11ac"], meta: "Trunk and Access - 2.2" },
  { text: "How does 802.1Q tagging work?", answer: "Inserts a 4-byte tag into the Ethernet frame to identify the VLAN", choices: ["Inserts a 4-byte tag into the Ethernet frame to identify the VLAN","Encrypts the frame payload","Adds a new IP header","Appends a trailer with the VLAN ID"], meta: "Trunk and Access - 2.2" },
  { text: "Which VLAN traffic crosses a trunk link <strong>without a tag</strong>?", answer: "The native VLAN", choices: ["The native VLAN","The management VLAN","VLAN 1 only","The voice VLAN"], meta: "Trunk and Access - 2.2" },
  { text: "What security risk arises if the native VLAN on two connected trunk ports does <strong>not</strong> match?", answer: "VLAN hopping - frames may cross VLAN boundaries unintentionally", choices: ["VLAN hopping - frames may cross VLAN boundaries unintentionally","Spanning tree loop","Port channel imbalance","Duplex mismatch"], meta: "Trunk and Access - 2.2" },
  // -- Native VLAN & Voice VLAN --
  { text: "Best practice is to change the native VLAN from VLAN 1 to an <strong>unused VLAN</strong> in order to:", answer: "Prevent VLAN hopping attacks", choices: ["Prevent VLAN hopping attacks","Increase trunk bandwidth","Enable 802.1X authentication","Support jumbo frames"], meta: "Native VLAN - 2.2" },
  { text: "A <strong>Voice VLAN</strong> (auxiliary VLAN) is used to:", answer: "Separate VoIP traffic from data traffic on the same port", choices: ["Separate VoIP traffic from data traffic on the same port","Carry only management traffic","Block non-voice frames","Replace the native VLAN"], meta: "Voice VLAN - 2.2" },
  { text: "A switch port serving both a PC and an IP phone is typically configured with:", answer: "An access VLAN for data and a voice VLAN", choices: ["An access VLAN for data and a voice VLAN","Two trunk ports","A single native VLAN","802.1X only"], meta: "Voice VLAN - 2.2" },
  // -- Link Aggregation --
  { text: "What is <strong>link aggregation</strong> (port channeling / bonding)?", answer: "Combining multiple physical links into one logical higher-bandwidth link", choices: ["Combining multiple physical links into one logical higher-bandwidth link","Splitting one link into multiple VLANs","Encrypting traffic across uplinks","Spanning-tree port fast mode"], meta: "Link Aggregation - 2.2" },
  { text: "Which IEEE standard defines link aggregation / LACP?", answer: "802.3ad (802.1AX)", choices: ["802.3ad (802.1AX)","802.1Q","802.3af","802.11n"], meta: "Link Aggregation - 2.2" },
  { text: "What does <strong>LACP</strong> stand for?", answer: "Link Aggregation Control Protocol", choices: ["Link Aggregation Control Protocol","Layer Access Control Protocol","Link Assignment and Configuration Protocol","LAN Aggregation Control Peer"], meta: "Link Aggregation - 2.2" },
  { text: "Link aggregation provides which two key benefits?", answer: "Increased bandwidth and redundancy", choices: ["Increased bandwidth and redundancy","Encryption and compression","VLAN isolation and NAT","QoS prioritization and routing"], meta: "Link Aggregation - 2.2" },
  // -- Speed & Duplex --
  { text: "A <strong>duplex mismatch</strong> on a switch port typically causes:", answer: "Late collisions and poor throughput", choices: ["Late collisions and poor throughput","Spanning tree loop","VLAN hopping","SFP transceiver failure"], meta: "Speed and Duplex - 2.2" },
  { text: "If a switch port is set to <strong>full duplex</strong> but the connected device auto-negotiates to <strong>half duplex</strong>, the result is:", answer: "A duplex mismatch causing collisions and degraded performance", choices: ["A duplex mismatch causing collisions and degraded performance","Automatic correction with no impact","A trunk link","Spanning tree blocking"], meta: "Speed and Duplex - 2.2" },
  { text: "Which mode allows a switch port to send <strong>and</strong> receive simultaneously?", answer: "Full duplex", choices: ["Full duplex","Half duplex","Auto","LACP"], meta: "Speed and Duplex - 2.2" },
  // -- Spanning Tree Protocol --
  { text: "What problem does <strong>Spanning Tree Protocol (STP)</strong> solve?", answer: "Layer 2 switching loops that cause broadcast storms", choices: ["Layer 2 switching loops that cause broadcast storms","IP routing loops","VLAN hopping","Duplicate IP addresses"], meta: "Spanning Tree - 2.2" },
  { text: "Which IEEE standard defines the original Spanning Tree Protocol?", answer: "802.1D", choices: ["802.1D","802.1Q","802.1W","802.1S"], meta: "Spanning Tree - 2.2" },
  { text: "Which STP variant is an IEEE standard that converges faster than 802.1D?", answer: "RSTP (802.1W)", choices: ["RSTP (802.1W)","PVST+","MSTP (802.1S)","VTP"], meta: "Spanning Tree - 2.2" },
  { text: "In STP, the switch with the <strong>lowest Bridge ID</strong> (priority + MAC) is elected as the:", answer: "Root bridge", choices: ["Root bridge","Designated port","Backup bridge","Edge port"], meta: "Spanning Tree - 2.2" },
  { text: "STP places a port into <strong>blocking state</strong> to:", answer: "Break loops by preventing frames from forwarding on that port", choices: ["Break loops by preventing frames from forwarding on that port","Increase bandwidth","Disable the VLAN","Enable LACP negotiation"], meta: "Spanning Tree - 2.2" },
  { text: "Which STP port role forwards traffic and is on the path toward the root bridge?", answer: "Root port", choices: ["Root port","Designated port","Blocked/Alternate port","Edge port"], meta: "Spanning Tree - 2.2" },
  { text: "PortFast should only be enabled on ports connected to:", answer: "End devices (hosts), not other switches", choices: ["End devices (hosts), not other switches","Uplinks to core switches","All trunk ports","Only fiber uplinks"], meta: "Spanning Tree - 2.2" },
  { text: "A <strong>BPDU Guard</strong> feature shuts down a PortFast-enabled port if it receives a BPDU, protecting against:", answer: "Unauthorized switches being connected to access ports", choices: ["Unauthorized switches being connected to access ports","Duplex mismatches","MAC flooding","VLAN hopping"], meta: "Spanning Tree - 2.2" },
  // -- MTU / Jumbo Frames --
  { text: "What is the standard Ethernet MTU (Maximum Transmission Unit)?", answer: "1500 bytes", choices: ["1500 bytes","1518 bytes","9000 bytes","576 bytes"], meta: "MTU / Jumbo Frames - 2.2" },
  { text: "A <strong>jumbo frame</strong> has an MTU of approximately:", answer: "9000 bytes", choices: ["1500 bytes","4500 bytes","9000 bytes","64000 bytes"], meta: "MTU / Jumbo Frames - 2.2" },
  { text: "Jumbo frames are commonly used in:", answer: "Storage networks (iSCSI/NFS) and data center high-throughput links", choices: ["Storage networks (iSCSI/NFS) and data center high-throughput links","Wireless 802.11 networks","WAN links to the ISP","Token ring environments"], meta: "MTU / Jumbo Frames - 2.2" },
  { text: "What happens if a device sends a jumbo frame to a switch port that does <strong>not</strong> support jumbo frames?", answer: "The frame is dropped (too large)", choices: ["The frame is dropped (too large)","The frame is fragmented automatically","The VLAN ID is stripped","Spanning tree blocks the port"], meta: "MTU / Jumbo Frames - 2.2" },
  { text: "When a switch port speed is set to <strong>auto</strong>, the port uses which mechanism to agree on speed with the connected device?", answer: "Auto-negotiation", choices: ["Auto-negotiation","LACP","BPDU exchange","CDP"], meta: "Speed and Duplex - 2.2" },
  { text: "Which STP port role is elected on each network segment to <strong>forward traffic away from the root</strong> toward end devices?", answer: "Designated port", choices: ["Root port","Designated port","Blocked/Alternate port","Edge port"], meta: "Spanning Tree - 2.2" },
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  SUBNETTING MATH
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function ipToInt(ip) {
  return ip.split('.').reduce((acc, o) => ((acc << 8) + parseInt(o)) >>> 0, 0);
}
function intToIp(n) {
  return [24, 16, 8, 0].map(s => (n >>> s) & 255).join('.');
}
function prefixToMask(p) {
  return p === 0 ? 0 : ((0xFFFFFFFF << (32 - p)) >>> 0);
}

const SUBNET_QTYPES = ["mask", "network", "broadcast", "hosts", "first", "last", "cidr_from_mask"];

function generateSubnetQ() {
  if (Math.random() < 0.3) return generateVLSMQ();
  const prefix    = randInt(16, 30);
  const mask      = prefixToMask(prefix);
  const hostBits  = 32 - prefix;
  const maskStr   = intToIp(mask);

  const kind = randInt(0, 2);
  let ip;
  if (kind === 0)      ip = `10.${randInt(0,255)}.${randInt(0,255)}.${randInt(1,254)}`;
  else if (kind === 1) ip = `172.${randInt(16,31)}.${randInt(0,255)}.${randInt(1,254)}`;
  else                 ip = `192.168.${randInt(0,255)}.${randInt(1,254)}`;

  const ipInt    = ipToInt(ip);
  const netInt   = (ipInt & mask) >>> 0;
  const bcastInt = (netInt | (~mask >>> 0)) >>> 0;
  const hosts    = Math.pow(2, hostBits) - 2;

  const type = SUBNET_QTYPES[randInt(0, SUBNET_QTYPES.length - 1)];

  const defs = {
    mask:          { text: `Given <strong>${ip}/${prefix}</strong>, what is the <strong>subnet mask</strong>?`,           answer: maskStr,               hint: "Format: X.X.X.X",  meta: `/${prefix} â€” ${hostBits} host bits` },
    network:       { text: `Given <strong>${ip}/${prefix}</strong>, what is the <strong>network address</strong>?`,       answer: intToIp(netInt),       hint: "Format: X.X.X.X",  meta: `Mask: ${maskStr}` },
    broadcast:     { text: `Given <strong>${ip}/${prefix}</strong>, what is the <strong>broadcast address</strong>?`,     answer: intToIp(bcastInt),     hint: "Format: X.X.X.X",  meta: `Mask: ${maskStr}` },
    hosts:         { text: `How many <strong>usable hosts</strong> does a <strong>/${prefix}</strong> subnet support?`,   answer: String(hosts),         hint: "Enter a number",   meta: `Formula: 2^(32-${prefix}) âˆ’ 2` },
    first:         { text: `Given <strong>${ip}/${prefix}</strong>, what is the <strong>first usable host</strong>?`,     answer: intToIp(netInt + 1),   hint: "Format: X.X.X.X",  meta: `Network: ${intToIp(netInt)}` },
    last:          { text: `Given <strong>${ip}/${prefix}</strong>, what is the <strong>last usable host</strong>?`,      answer: intToIp(bcastInt - 1), hint: "Format: X.X.X.X",  meta: `Broadcast: ${intToIp(bcastInt)}` },
    cidr_from_mask:{ text: `What CIDR prefix length matches the subnet mask <strong>${maskStr}</strong>?`,                answer: `/${prefix}`,          hint: "Format: /XX",      meta: "Count the 1-bits" },
  };

  return defs[type];
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  VLSM
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function vlsmPrefixForHosts(n) {
  for (let p = 30; p >= 1; p--) {
    if (Math.pow(2, 32 - p) - 2 >= n) return p;
  }
  return 1;
}

const VLSM_HOST_COUNTS = [2, 5, 12, 25, 28, 30, 50, 60, 100, 110, 200, 250];

function generateVLSMQ() {
  const vlsmType = ['vlsm_prefix', 'vlsm_mask', 'vlsm_next'][randInt(0, 2)];
  const n        = VLSM_HOST_COUNTS[randInt(0, VLSM_HOST_COUNTS.length - 1)];
  const prefix   = vlsmPrefixForHosts(n);
  const maskStr  = intToIp(prefixToMask(prefix));
  const usable   = Math.pow(2, 32 - prefix) - 2;

  if (vlsmType === 'vlsm_prefix') {
    return {
      text:   `A subnet must support <strong>${n} hosts</strong>. What is the minimum prefix length?`,
      answer: `/${prefix}`,
      hint:   'Format: /XX',
      meta:   `VLSM Sizing â€” 1.7 | This prefix provides ${usable} usable hosts`,
    };
  }

  if (vlsmType === 'vlsm_mask') {
    return {
      text:   `A subnet must support <strong>${n} hosts</strong>. What subnet mask should be used?`,
      answer: maskStr,
      hint:   'Format: X.X.X.X',
      meta:   `VLSM Sizing â€” 1.7 | /${prefix} provides ${usable} usable hosts`,
    };
  }

  // vlsm_next: allocate first subnet from a /24 parent, ask for the second subnet's address
  const kind = randInt(0, 2);
  let parentBase;
  if (kind === 0)      parentBase = `10.${randInt(0,255)}.${randInt(0,255)}.0`;
  else if (kind === 1) parentBase = `172.${randInt(16,31)}.${randInt(0,255)}.0`;
  else                 parentBase = `192.168.${randInt(0,255)}.0`;

  const firstPrefix = randInt(25, 29); // /25â€“/29 always fits inside a /24
  const firstSize   = Math.pow(2, 32 - firstPrefix);
  const secondNet   = (ipToInt(parentBase) + firstSize) >>> 0;

  return {
    text:   `Network <strong>${parentBase}/24</strong> is subnetted using VLSM. The first <strong>/${firstPrefix}</strong> subnet is allocated starting at the network address. What is the network address of the <strong>next available subnet</strong>?`,
    answer: intToIp(secondNet),
    hint:   'Format: X.X.X.X',
    meta:   `VLSM Allocation â€” 1.7 | First subnet size: ${firstSize} addresses (${firstSize - 2} usable)`,
  };
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  UTILITIES
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function randInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateScore(sec, sc) {
  const total = sc.c + sc.w;
  document.getElementById(`${sec}-correct`).textContent = sc.c;
  document.getElementById(`${sec}-wrong`).textContent   = sc.w;
  document.getElementById(`${sec}-pct`).textContent     = total ? Math.round(sc.c / total * 100) + '%' : 'â€”';
}

function renderDots(id, hist) {
  const el = document.getElementById(id);
  el.innerHTML = '';
  hist.forEach(h => {
    const d = document.createElement('div');
    d.className = 'dot ' + (h ? 'correct' : 'wrong');
    el.appendChild(d);
  });
  const cur = document.createElement('div');
  cur.className = 'dot current';
  el.appendChild(cur);
}

function renderMC(prefix, q, checkFn) {
  document.getElementById(`${prefix}-meta`).textContent    = q.meta || '';
  document.getElementById(`${prefix}-question`).innerHTML  = q.text;
  const el = document.getElementById(`${prefix}-choices`);
  el.innerHTML = '';
  shuffle(q.choices).forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = c;
    btn.onclick = () => checkFn(c, q.answer);
    el.appendChild(btn);
  });
  document.getElementById(`${prefix}-feedback`).style.display = 'none';
  document.getElementById(`${prefix}-next`).style.display     = 'none';
}

function resolveMC(prefix, chosen, correct, score, hist) {
  document.querySelectorAll(`#${prefix}-choices .choice-btn`).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add('correct');
    if (btn.textContent === chosen && chosen !== correct) btn.classList.add('wrong');
  });
  const ok = chosen === correct;
  const fb = document.getElementById(`${prefix}-feedback`);
  fb.className   = 'feedback ' + (ok ? 'correct' : 'wrong');
  fb.textContent = ok ? '✔ Correct!' : `✘ Answer: ${correct}`;
  fb.style.display = 'block';
  if (ok) score.c++; else score.w++;
  hist.push(ok);
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  QUESTION BUILDER â€” Ports
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function buildPortQuestions() {
  const allPorts = PORT_DATA.map(p => p.port);
  const allNames = PORT_DATA.map(p => p.name);

  // Ports shared by more than one protocol (e.g. 22 = SSH + SFTP) produce
  // ambiguous "What protocol uses port X?" questions, so skip that type for them.
  const portCount = {};
  allPorts.forEach(p => portCount[p] = (portCount[p] || 0) + 1);
  const sharedPorts = new Set(Object.keys(portCount).filter(p => portCount[p] > 1));

  const qs = [];

  PORT_DATA.forEach(entry => {
    const wp = shuffle(allPorts.filter(p => p !== entry.port)).slice(0, 3);
    qs.push({
      text: `What port does <strong>${entry.name}</strong> use?`,
      answer: entry.port,
      choices: shuffle([entry.port, ...wp]),
      meta: `Transport: ${entry.transport}`,
    });

    if (!sharedPorts.has(entry.port)) {
      const wn = shuffle(allNames.filter(n => n !== entry.name)).slice(0, 3);
      qs.push({
        text: `What protocol uses port <strong>${entry.port}</strong>?`,
        answer: entry.name,
        choices: shuffle([entry.name, ...wn]),
        meta: `Transport: ${entry.transport}`,
      });
    }

    const transOpts = ["TCP", "UDP", "TCP/UDP", "ICMP"].filter(t => t !== entry.transport);
    qs.push({
      text: `Does <strong>${entry.name}</strong> (port ${entry.port}) use TCP, UDP, or both?`,
      answer: entry.transport,
      choices: shuffle([entry.transport, ...transOpts.slice(0, 3)]),
      meta: `Port: ${entry.port}`,
    });
  });

  return shuffle(qs);
}

// ══════════════════════════════════════════════════════
//  DATA — Wireless (2.3)
// ══════════════════════════════════════════════════════

const WIRELESS_QUESTIONS = [
  // Frequencies
  { text: "Which Wi-Fi frequency band offers the <strong>most non-overlapping channels</strong> and is used by 802.11ac/Wi-Fi 5?", answer: "5 GHz", choices: ["2.4 GHz","5 GHz","6 GHz","900 MHz"], meta: "Frequencies — 2.3" },
  { text: "Which Wi-Fi frequency band has the <strong>longest range</strong> but the <strong>fewest non-overlapping channels</strong>?", answer: "2.4 GHz", choices: ["2.4 GHz","5 GHz","6 GHz","60 GHz"], meta: "Frequencies — 2.3" },
  { text: "Which frequency band was introduced with <strong>Wi-Fi 6E</strong> to provide additional spectrum?", answer: "6 GHz", choices: ["2.4 GHz","5 GHz","6 GHz","900 MHz"], meta: "Frequencies — 2.3" },
  { text: "How many non-overlapping 20 MHz channels exist in the <strong>2.4 GHz</strong> band (US)?", answer: "3", choices: ["1","3","11","23"], meta: "Channels — 2.3" },
  { text: "Which channels are the <strong>three non-overlapping</strong> 20 MHz channels in the 2.4 GHz band?", answer: "1, 6, 11", choices: ["1, 5, 10","1, 6, 11","2, 6, 10","1, 7, 13"], meta: "Channels — 2.3" },
  { text: "What does <strong>802.11h</strong> add to wireless networks operating in the 5 GHz band?", answer: "Dynamic Frequency Selection (DFS) and Transmit Power Control (TPC) to avoid radar interference", choices: ["Dynamic Frequency Selection (DFS) and Transmit Power Control (TPC) to avoid radar interference","WPA3 encryption","Band steering between 2.4 and 5 GHz","MU-MIMO support"], meta: "Channels — 2.3" },
  { text: "What is <strong>band steering</strong>?", answer: "Automatically directing capable clients from 2.4 GHz to 5 GHz to reduce congestion", choices: ["Automatically directing capable clients from 2.4 GHz to 5 GHz to reduce congestion","Bonding two frequency bands for double throughput","Blocking clients on the 2.4 GHz band entirely","Changing channel width from 20 MHz to 40 MHz"], meta: "Frequencies — 2.3" },
  { text: "Increasing channel width from 20 MHz to 40 MHz in the 2.4 GHz band has what drawback?", answer: "It eliminates all non-overlapping channels, causing interference", choices: ["It eliminates all non-overlapping channels, causing interference","It reduces maximum throughput","It is not supported by 802.11n","It requires WPA3"], meta: "Channels — 2.3" },

  // 802.11 Standards
  { text: "Which 802.11 standard introduced <strong>MU-MIMO and operates only on 5 GHz</strong> (Wi-Fi 5)?", answer: "802.11ac", choices: ["802.11n","802.11ac","802.11ax","802.11g"], meta: "802.11 Standards — 2.3" },
  { text: "Which 802.11 standard is known as <strong>Wi-Fi 6/6E</strong> and introduces OFDMA?", answer: "802.11ax", choices: ["802.11ac","802.11ax","802.11n","802.11ad"], meta: "802.11 Standards — 2.3" },
  { text: "Which 802.11 standard operates on <strong>both 2.4 GHz and 5 GHz</strong> (Wi-Fi 4)?", answer: "802.11n", choices: ["802.11a","802.11g","802.11n","802.11ac"], meta: "802.11 Standards — 2.3" },
  { text: "Which 802.11 standard operates only on <strong>2.4 GHz</strong> at up to 54 Mbps?", answer: "802.11g", choices: ["802.11a","802.11b","802.11g","802.11n"], meta: "802.11 Standards — 2.3" },
  { text: "Which 802.11 standard operates only on <strong>5 GHz</strong> at up to 54 Mbps?", answer: "802.11a", choices: ["802.11a","802.11b","802.11g","802.11n"], meta: "802.11 Standards — 2.3" },

  // SSID / BSSID / ESSID
  { text: "What does <strong>SSID</strong> stand for?", answer: "Service Set Identifier", choices: ["Service Set Identifier","Secure Signal Interface Device","Subnet Service ID","System Signal Identifier"], meta: "Identifiers — 2.3" },
  { text: "What is a <strong>BSSID</strong>?", answer: "The MAC address of the access point radio", choices: ["The MAC address of the access point radio","The broadcast SSID name","The basic subnet ID","A secondary SSID for guest networks"], meta: "Identifiers — 2.3" },
  { text: "What is an <strong>ESSID</strong>?", answer: "The SSID shared across multiple APs forming a single extended wireless network", choices: ["The SSID shared across multiple APs forming a single extended wireless network","An encrypted SSID","A hidden SSID","A unique SSID per access point"], meta: "Identifiers — 2.3" },
  { text: "When multiple APs broadcast the <strong>same SSID</strong> to form one seamless network, that SSID is called the:", answer: "ESSID", choices: ["BSSID","ESSID","BSS","IBSS"], meta: "Identifiers — 2.3" },

  // Network Types
  { text: "Which wireless network type <strong>requires no access point</strong> and has devices communicating directly?", answer: "Ad hoc (IBSS)", choices: ["Infrastructure","Ad hoc (IBSS)","Mesh","Point to point"], meta: "Network Types — 2.3" },
  { text: "Which wireless network type uses <strong>access points connected to a wired distribution system</strong>?", answer: "Infrastructure (BSS)", choices: ["Ad hoc (IBSS)","Infrastructure (BSS)","Mesh","Point to point"], meta: "Network Types — 2.3" },
  { text: "In a <strong>wireless mesh</strong> network, how do APs communicate with each other?", answer: "Via backhaul links between APs (wired or wireless)", choices: ["Via backhaul links between APs (wired or wireless)","Only through client devices","Via a single centralized controller with no direct AP-to-AP links","Only through a wired distribution system"], meta: "Network Types — 2.3" },
  { text: "A <strong>point-to-point</strong> wireless link is most commonly used for:", answer: "Bridging two buildings or locations", choices: ["Bridging two buildings or locations","Connecting many clients to one AP","Creating a guest VLAN","Band steering between floors"], meta: "Network Types — 2.3" },

  // Encryption
  { text: "Which wireless encryption standard replaced WPA and uses <strong>AES-CCMP</strong>?", answer: "WPA2", choices: ["WEP","WPA","WPA2","WPA3"], meta: "Encryption — 2.3" },
  { text: "Which wireless encryption standard introduced <strong>SAE (Simultaneous Authentication of Equals)</strong>?", answer: "WPA3", choices: ["WEP","WPA","WPA2","WPA3"], meta: "Encryption — 2.3" },
  { text: "What is the main security improvement of <strong>WPA3-Personal</strong> over WPA2-Personal?", answer: "Forward secrecy via SAE, protecting past sessions even if the password is later compromised", choices: ["Forward secrecy via SAE, protecting past sessions even if the password is later compromised","AES-256 instead of AES-128","Elimination of the pre-shared key entirely","Mandatory certificate-based authentication"], meta: "Encryption — 2.3" },
  { text: "Which deprecated wireless security protocol used <strong>RC4</strong> and is trivially cracked?", answer: "WEP", choices: ["WEP","WPA","WPA2","WPA3"], meta: "Encryption — 2.3" },

  // Authentication
  { text: "Which wireless authentication mode uses a <strong>single shared password</strong> for all clients?", answer: "PSK (Pre-Shared Key)", choices: ["PSK (Pre-Shared Key)","Enterprise (802.1X)","RADIUS","TACACS+"], meta: "Authentication — 2.3" },
  { text: "Which wireless authentication mode uses <strong>802.1X with a RADIUS server</strong> for per-user credentials?", answer: "Enterprise (802.1X)", choices: ["PSK (Pre-Shared Key)","Enterprise (802.1X)","WPA2-Personal","SAE"], meta: "Authentication — 2.3" },
  { text: "A company wants each employee to authenticate to Wi-Fi with their <strong>individual domain credentials</strong>. Which mode should be configured?", answer: "WPA2/WPA3 Enterprise (802.1X)", choices: ["WPA2/WPA3 Enterprise (802.1X)","WPA2-Personal PSK","WEP Open","WPA3-SAE"], meta: "Authentication — 2.3" },

  // Guest Networks / Captive Portals
  { text: "What is a <strong>captive portal</strong>?", answer: "A web page users must interact with before gaining full network access", choices: ["A web page users must interact with before gaining full network access","A firewall blocking guest traffic","A VLAN reserved for IoT devices","A separate SSID with WPA3 encryption"], meta: "Guest Networks — 2.3" },
  { text: "Guest networks are typically isolated from corporate resources using:", answer: "A separate VLAN or SSID with firewall rules", choices: ["A separate VLAN or SSID with firewall rules","MAC filtering only","WEP encryption","Disabling DHCP"], meta: "Guest Networks — 2.3" },

  // Antennas
  { text: "Which antenna type radiates signal <strong>equally in all horizontal directions</strong>?", answer: "Omnidirectional", choices: ["Omnidirectional","Directional","Yagi","Parabolic"], meta: "Antennas — 2.3" },
  { text: "Which antenna type focuses signal in <strong>one specific direction</strong>, maximizing range in that direction?", answer: "Directional", choices: ["Omnidirectional","Directional","Dipole","Patch"], meta: "Antennas — 2.3" },
  { text: "A <strong>Yagi</strong> antenna is best suited for:", answer: "Point-to-point links requiring focused gain in one direction", choices: ["Point-to-point links requiring focused gain in one direction","General indoor coverage","Providing 360° coverage in a large office","Cellular tower backhaul"], meta: "Antennas — 2.3" },
  { text: "An omnidirectional antenna is most appropriate for:", answer: "Providing 360° horizontal coverage in an open office", choices: ["Providing 360° horizontal coverage in an open office","Bridging two buildings","Focusing signal down a long corridor","Point-to-point outdoor links"], meta: "Antennas — 2.3" },

  // Autonomous vs. Lightweight AP
  { text: "Which AP type manages its own configuration <strong>independently</strong> without a controller?", answer: "Autonomous AP", choices: ["Autonomous AP","Lightweight AP","Controller-based AP","Cloud-managed AP"], meta: "AP Types — 2.3" },
  { text: "Which AP type forwards traffic and config decisions to a <strong>Wireless LAN Controller (WLC)</strong>?", answer: "Lightweight AP", choices: ["Autonomous AP","Lightweight AP","Fat AP","Standalone AP"], meta: "AP Types — 2.3" },
  { text: "What protocol do lightweight APs use to communicate with a WLC?", answer: "CAPWAP (Control and Provisioning of Wireless Access Points)", choices: ["CAPWAP (Control and Provisioning of Wireless Access Points)","LWAPP only","SNMP","Telnet"], meta: "AP Types — 2.3" },
  { text: "A large enterprise wants <strong>centralized management</strong> of 200 APs with roaming support. Which AP deployment is preferred?", answer: "Lightweight APs with a Wireless LAN Controller", choices: ["Lightweight APs with a Wireless LAN Controller","Autonomous APs on each floor","Ad hoc mesh with no controller","Fat APs with individual configs"], meta: "AP Types — 2.3" },
];
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// ======================================================
//  DATA -- Physical Installations (2.4)
// ======================================================

const PHYSICAL_QUESTIONS = [
  // IDF / MDF
  { text: "What does <strong>MDF</strong> stand for in structured cabling?", answer: "Main Distribution Frame", choices: ["Main Distribution Frame","Media Distribution Facility","Managed Data Facility","Main Data Feed"], meta: "IDF/MDF — 2.4" },
  { text: "What does <strong>IDF</strong> stand for in structured cabling?", answer: "Intermediate Distribution Frame", choices: ["Intermediate Distribution Frame","Internal Data Facility","Interconnect Distribution Frame","Internet Data Feed"], meta: "IDF/MDF — 2.4" },
  { text: "Which distribution frame is the <strong>central point</strong> that connects to the service provider and all IDFs?", answer: "MDF", choices: ["MDF","IDF","POP","DMZ"], meta: "IDF/MDF — 2.4" },
  { text: "An IDF typically connects <strong>floor-level wiring</strong> back to which location?", answer: "MDF", choices: ["MDF","ISP","PBX","DMZ"], meta: "IDF/MDF — 2.4" },

  // Rack size
  { text: "One rack unit (1U) equals how many inches of vertical space?", answer: "1.75 inches", choices: ["1 inch","1.75 inches","2 inches","2.5 inches"], meta: "Rack Size — 2.4" },
  { text: "A standard full-size data center rack is typically how many rack units tall?", answer: "42U", choices: ["24U","36U","42U","52U"], meta: "Rack Size — 2.4" },
  { text: "A 2U server occupies how many inches of vertical rack space?", answer: "3.5 inches", choices: ["1.75 inches","2.5 inches","3.5 inches","4 inches"], meta: "Rack Size — 2.4" },

  // Port-side exhaust/intake
  { text: "In a hot-aisle/cold-aisle data center layout, equipment should draw cool air from the cold aisle through which side?", answer: "Intake (front)", choices: ["Intake (front)","Exhaust (rear)","Top vent","Side panel"], meta: "Port-side Exhaust/Intake — 2.4" },
  { text: "Which airflow strategy places server exhausts facing each other to isolate hot air?", answer: "Hot-aisle containment", choices: ["Cold-aisle containment","Hot-aisle containment","Blanking panel isolation","Plenum cooling"], meta: "Port-side Exhaust/Intake — 2.4" },
  { text: "Blanking panels in a rack are used to:", answer: "Prevent hot exhaust air from recirculating to the intake", choices: ["Prevent hot exhaust air from recirculating to the intake","Add extra mounting space","Provide grounding","Increase power capacity"], meta: "Port-side Exhaust/Intake — 2.4" },
  { text: "A switch labeled <strong>'port-side exhaust'</strong> means airflow:", answer: "Enters from the non-port side and exits through the port side", choices: ["Enters from the non-port side and exits through the port side","Enters from the port side and exits the rear","Ports face the cold aisle and draw cool air","The device has no active cooling"], meta: "Port-side Exhaust/Intake — 2.4" },

  // Patch panels
  { text: "A <strong>patch panel</strong> in a structured cabling system primarily serves to:", answer: "Terminate horizontal cable runs and provide flexible port connections", choices: ["Terminate horizontal cable runs and provide flexible port connections","Amplify network signals","Convert fiber to copper","Provide PoE power"], meta: "Patch Panels — 2.4" },
  { text: "Which type of patch panel accepts pre-terminated modules (e.g., keystone jacks) that can be individually replaced?", answer: "Modular patch panel", choices: ["Fixed patch panel","Modular patch panel","Fiber distribution panel","Swing-arm panel"], meta: "Patch Panels — 2.4" },
  { text: "A <strong>fiber distribution panel</strong> (also called a fiber patch panel) is used to:", answer: "Terminate and manage fiber optic cable connections", choices: ["Terminate and manage fiber optic cable connections","Connect copper Ethernet runs","Power IP phones","Store spare SFP transceivers"], meta: "Fiber Distribution Panel — 2.4" },

  // Lockable
  { text: "Why are MDF/IDF rooms and racks typically kept <strong>locked</strong>?", answer: "To prevent unauthorized physical access to network infrastructure", choices: ["To prevent unauthorized physical access to network infrastructure","To maintain humidity control","To reduce cable clutter","To comply with PoE standards"], meta: "Lockable — 2.4" },
  { text: "Which physical security measure specifically restricts access to network equipment enclosures?", answer: "Lockable rack cabinet", choices: ["Lockable rack cabinet","VLAN segmentation","ACL rules","Firewall zones"], meta: "Lockable — 2.4" },

  // UPS
  { text: "What does <strong>UPS</strong> stand for in the context of power infrastructure?", answer: "Uninterruptible Power Supply", choices: ["Uninterruptible Power Supply","Universal Power Switch","Unified Power System","Unregulated Power Source"], meta: "Power — UPS — 2.4" },
  { text: "A UPS primarily protects network equipment from:", answer: "Power outages and voltage fluctuations", choices: ["Power outages and voltage fluctuations","Excessive heat","Electromagnetic interference","Cable crosstalk"], meta: "Power — UPS — 2.4" },
  { text: "Which type of UPS continuously converts AC to DC and back, providing the cleanest power with zero switchover time?", answer: "Online (double-conversion) UPS", choices: ["Online (double-conversion) UPS","Standby (offline) UPS","Line-interactive UPS","Ferroresonant UPS"], meta: "Power — UPS — 2.4" },

  // PDU
  { text: "What does <strong>PDU</strong> stand for in a data center power context?", answer: "Power Distribution Unit", choices: ["Power Distribution Unit","Protocol Data Unit","Primary Distribution Utility","Patch Delivery Unit"], meta: "Power — PDU — 2.4" },
  { text: "A <strong>managed PDU</strong> differs from a basic power strip because it:", answer: "Allows remote monitoring and individual outlet control", choices: ["Allows remote monitoring and individual outlet control","Provides UPS battery backup","Converts 3-phase to single-phase power","Increases amperage to equipment"], meta: "Power — PDU — 2.4" },
  { text: "What is the purpose of monitoring <strong>power load</strong> in a rack?", answer: "To avoid exceeding the circuit breaker capacity and causing outages", choices: ["To avoid exceeding the circuit breaker capacity and causing outages","To reduce cable length","To improve Wi-Fi signal","To set VLAN priorities"], meta: "Power — Load — 2.4" },

  // Voltage
  { text: "Standard single-phase electrical power in the United States is typically:", answer: "120V AC", choices: ["120V AC","240V AC","48V DC","12V DC"], meta: "Power — Voltage — 2.4" },
  { text: "High-density data center equipment often uses <strong>208V or 240V</strong> power because:", answer: "Higher voltage reduces current draw and heat for the same wattage", choices: ["Higher voltage reduces current draw and heat for the same wattage","It is cheaper than 120V","It requires smaller breakers","It is the only voltage UPS units accept"], meta: "Power — Voltage — 2.4" },

  // Environmental - humidity
  { text: "What is the recommended <strong>relative humidity range</strong> in a data center to prevent static buildup and condensation?", answer: "40%–60%", choices: ["10%–20%","40%–60%","70%–80%","Above 90%"], meta: "Environmental — Humidity — 2.4" },
  { text: "Low humidity in a data center primarily increases the risk of:", answer: "Electrostatic discharge (ESD) damaging equipment", choices: ["Electrostatic discharge (ESD) damaging equipment","Condensation on circuit boards","Overheating CPUs","Cable corrosion"], meta: "Environmental — Humidity — 2.4" },
  { text: "High humidity in a data center primarily increases the risk of:", answer: "Condensation causing short circuits", choices: ["Condensation causing short circuits","Static electricity","Fire","Higher power bills"], meta: "Environmental — Humidity — 2.4" },

  // Environmental - temperature
  { text: "ASHRAE recommends a data center inlet temperature range of approximately:", answer: "64.4°F–80.6°F (18°C–27°C)", choices: ["32°F–50°F (0°C–10°C)","64.4°F–80.6°F (18°C–27°C)","85°F–95°F (29°C–35°C)","Above 100°F (38°C)"], meta: "Environmental — Temperature — 2.4" },
  { text: "What device is used to monitor temperature and humidity within server racks or data center rooms?", answer: "Environmental sensor / HVAC monitor", choices: ["Environmental sensor / HVAC monitor","KVM switch","Protocol analyzer","PoE injector"], meta: "Environmental — Temperature — 2.4" },

  // Environmental - fire suppression
  { text: "Which fire suppression system is <strong>safe for use around electronic equipment</strong> because it does not leave residue?", answer: "Clean agent (gaseous) suppression", choices: ["Clean agent (gaseous) suppression","Wet-pipe sprinkler","Foam suppression","Dry chemical suppression"], meta: "Environmental — Fire Suppression — 2.4" },
  { text: "Why are traditional water-based sprinkler systems <strong>problematic</strong> in data centers?", answer: "Water can cause electrical short circuits and hardware damage", choices: ["Water can cause electrical short circuits and hardware damage","They require high pressure","They cost more than clean agents","They activate too slowly"], meta: "Environmental — Fire Suppression — 2.4" },
  { text: "Which clean-agent suppression system works by <strong>interrupting the chemical chain reaction</strong> of fire?", answer: "FM-200 (HFC-227ea)", choices: ["FM-200 (HFC-227ea)","CO2 system","Wet-pipe sprinkler","Dry chemical"], meta: "Environmental — Fire Suppression — 2.4" },
];

// ======================================================
//  DATA -- Organizational Processes & Procedures (3.1)
// ======================================================

const ORGPROC_QUESTIONS = [
  // Documentation - diagrams
  { text: "Which type of network diagram shows the <strong>actual physical placement</strong> of cabling, devices, and racks?", answer: "Physical network diagram", choices: ["Physical network diagram","Logical network diagram","Rack diagram","Wireless heat map"], meta: "Documentation — 3.1" },
  { text: "Which type of network diagram shows <strong>IP addressing, VLANs, and data flow</strong> rather than physical placement?", answer: "Logical network diagram", choices: ["Physical network diagram","Logical network diagram","Cable map","Asset inventory"], meta: "Documentation — 3.1" },
  { text: "A <strong>rack diagram</strong> is used to document:", answer: "The physical layout of equipment within a server rack", choices: ["The physical layout of equipment within a server rack","IP subnet assignments","VLAN trunking configuration","Wireless signal strength"], meta: "Documentation — 3.1" },
  { text: "A <strong>cable map</strong> is primarily used to:", answer: "Trace which cable connects which two endpoints", choices: ["Trace which cable connects which two endpoints","Track software license keys","Record SLA terms","Document firewall rules"], meta: "Documentation — 3.1" },
  { text: "Which document set typically includes <strong>Layer 1, Layer 2, and Layer 3</strong> network diagrams to show physical media, VLANs/switching, and routing/IP addressing respectively?", answer: "Layer 1/2/3 network diagrams", choices: ["Layer 1/2/3 network diagrams","Asset inventory","Baseline configuration","SLA documentation"], meta: "Documentation — 3.1" },

  // Documentation - asset inventory
  { text: "An <strong>asset inventory</strong> typically tracks all of the following EXCEPT:", answer: "Real-time traffic flow statistics", choices: ["Hardware specifications","Software and licensing details","Warranty information","Real-time traffic flow statistics"], meta: "Asset Inventory — 3.1" },
  { text: "Tracking the <strong>warranty expiration date</strong> of a switch belongs in which type of documentation?", answer: "Asset inventory", choices: ["Asset inventory","Wireless heat map","Baseline configuration","Change request log"], meta: "Asset Inventory — 3.1" },

  // Documentation - IPAM
  { text: "What does <strong>IPAM</strong> stand for?", answer: "IP Address Management", choices: ["IP Address Management","Internal Protocol Access Method","IP Allocation Monitor","Internet Provider Address Mapping"], meta: "IPAM — 3.1" },
  { text: "What is the primary purpose of an <strong>IPAM</strong> solution?", answer: "To track and manage IP address allocation, subnets, and DNS/DHCP integration", choices: ["To track and manage IP address allocation, subnets, and DNS/DHCP integration","To monitor CPU and memory usage on servers","To enforce firewall ACLs","To back up router configurations"], meta: "IPAM — 3.1" },

  // Documentation - SLA
  { text: "What does <strong>SLA</strong> stand for?", answer: "Service Level Agreement", choices: ["Service Level Agreement","System Level Access","Service Location Address","Standard License Agreement"], meta: "SLA — 3.1" },
  { text: "An SLA with an ISP most commonly defines guarantees for:", answer: "Uptime, response time, and performance metrics", choices: ["Uptime, response time, and performance metrics","Physical rack dimensions","VLAN numbering schemes","Wireless channel assignments"], meta: "SLA — 3.1" },

  // Documentation - wireless heat maps
  { text: "What is the purpose of a <strong>wireless heat map</strong>?", answer: "To visualize Wi-Fi signal strength and coverage throughout a physical space", choices: ["To visualize Wi-Fi signal strength and coverage throughout a physical space","To document switch port assignments","To track AP firmware versions","To show VLAN-to-SSID mappings"], meta: "Wireless Heat Maps — 3.1" },
  { text: "A wireless site survey used to generate a heat map helps identify:", answer: "Dead zones and areas of channel interference before AP placement", choices: ["Dead zones and areas of channel interference before AP placement","Switch port security violations","DHCP scope exhaustion","Routing table inconsistencies"], meta: "Wireless Heat Maps — 3.1" },

  // Life-cycle management
  { text: "What does <strong>EOL</strong> mean for a network device?", answer: "End-of-Life — the vendor no longer manufactures or sells the product", choices: ["End-of-Life — the vendor no longer manufactures or sells the product","End-of-Lease — the rental contract has expired","End-of-Logging — log retention has stopped","Equipment Operating Limit reached"], meta: "Life-cycle Management — 3.1" },
  { text: "What does <strong>EOS</strong> mean for a network device?", answer: "End-of-Support — the vendor no longer provides updates, patches, or technical support", choices: ["End-of-Support — the vendor no longer provides updates, patches, or technical support","End-of-Service — the device has been physically removed","End-of-Subscription — licensing has lapsed","End-of-Session — a user's connection has timed out"], meta: "Life-cycle Management — 3.1" },
  { text: "Applying a <strong>patch</strong> to network equipment is part of which life-cycle process?", answer: "Software management", choices: ["Software management","Decommissioning","Change management","Asset inventory"], meta: "Life-cycle Management — 3.1" },
  { text: "A device that has reached <strong>EOL but is still supported</strong> by the vendor with security patches is best described as:", answer: "End-of-Life but not yet End-of-Support", choices: ["End-of-Life but not yet End-of-Support","Fully decommissioned","Out of the asset inventory","No longer requiring documentation"], meta: "Life-cycle Management — 3.1" },
  { text: "Which life-cycle process involves <strong>securely removing data and properly disposing of or repurposing</strong> retired equipment?", answer: "Decommissioning", choices: ["Decommissioning","Change management","Baseline configuration","Patch management"], meta: "Life-cycle Management — 3.1" },
  { text: "Updating a switch's <strong>firmware</strong> to fix a known vulnerability falls under which category?", answer: "Software management", choices: ["Software management","Change request only","Asset inventory","Decommissioning"], meta: "Life-cycle Management — 3.1" },

  // Change management
  { text: "What is the primary purpose of a <strong>change management</strong> process?", answer: "To formally request, review, approve, and track modifications to the network", choices: ["To formally request, review, approve, and track modifications to the network","To inventory hardware assets","To monitor real-time bandwidth usage","To generate wireless heat maps"], meta: "Change Management — 3.1" },
  { text: "Before implementing a network change, an administrator should submit a:", answer: "Change request", choices: ["Change request","Baseline configuration","Asset tag","SLA renewal"], meta: "Change Management — 3.1" },
  { text: "Why is a documented <strong>change management</strong> process important even for seemingly minor configuration changes?", answer: "It provides accountability, a rollback plan, and a record of what changed and why", choices: ["It provides accountability, a rollback plan, and a record of what changed and why","It is required only for hardware purchases","It replaces the need for backups","It eliminates the need for testing"], meta: "Change Management — 3.1" },

  // Config management
  { text: "What is a <strong>production configuration</strong>?", answer: "The configuration currently running and active on a live device", choices: ["The configuration currently running and active on a live device","A saved copy of a config stored offsite for recovery","The vendor's factory default settings","The approved standard a device's config is compared against"], meta: "Configuration Management — 3.1" },
  { text: "What is a <strong>baseline configuration</strong>?", answer: "A documented, known-good configuration used as a reference point for comparison", choices: ["A documented, known-good configuration used as a reference point for comparison","The factory default settings of a device","The most recent configuration backup","A configuration template for new VLANs"], meta: "Configuration Management — 3.1" },
  { text: "What is the difference between a <strong>baseline (golden) configuration</strong> and a <strong>backup configuration</strong>?", answer: "The baseline is the approved standard to compare against; a backup is a saved copy of the current running config", choices: ["The baseline is the approved standard to compare against; a backup is a saved copy of the current running config","They are the same thing","A baseline is stored offsite, a backup is stored locally","A backup is only used during decommissioning"], meta: "Configuration Management — 3.1" },
  { text: "Comparing a device's current configuration against its <strong>baseline/golden config</strong> primarily helps detect:", answer: "Unauthorized or unintended configuration drift", choices: ["Unauthorized or unintended configuration drift","Hardware failures","Wireless interference","Cable attenuation"], meta: "Configuration Management — 3.1" },
  { text: "Storing a <strong>production configuration backup</strong> off the device itself is important because it:", answer: "Allows quick recovery if the device fails or its config is corrupted", choices: ["Allows quick recovery if the device fails or its config is corrupted","Increases the device's CPU performance","Is required for IPAM integration","Removes the need for change requests"], meta: "Configuration Management — 3.1" },
];

// ======================================================
//  DATA -- Network Monitoring Technologies (3.2)
// ======================================================

const MONITORING_QUESTIONS = [
  // SNMP
  { text: "What does <strong>SNMP</strong> stand for?", answer: "Simple Network Management Protocol", choices: ["Simple Network Management Protocol","Secure Network Monitoring Protocol","Simple Node Messaging Protocol","Standard Network Management Path"], meta: "SNMP — 3.2" },
  { text: "In SNMP, what is a <strong>MIB</strong>?", answer: "A Management Information Base — a hierarchical database defining the manageable objects on a device", choices: ["A Management Information Base — a hierarchical database defining the manageable objects on a device","A backup of the device's running configuration","The encrypted tunnel used by SNMPv3","A log file of all SNMP GET requests"], meta: "SNMP — 3.2" },
  { text: "What is an SNMP <strong>trap</strong>?", answer: "An unsolicited message sent from a managed device to the manager when a significant event occurs", choices: ["An unsolicited message sent from a managed device to the manager when a significant event occurs","A scheduled poll sent from the manager to a device","A password used to authenticate SNMP requests","A rule that blocks unauthorized SNMP access"], meta: "SNMP — 3.2" },
  { text: "How does an SNMP <strong>trap</strong> differ from the manager actively polling a device with a GET request?", answer: "A trap is pushed by the device immediately when an event occurs, rather than waiting for the manager to ask", choices: ["A trap is pushed by the device immediately when an event occurs, rather than waiting for the manager to ask","A trap is encrypted while GET requests are not","A trap only works with SNMPv1","A trap requires a community string but GET does not"], meta: "SNMP — 3.2" },
  { text: "In SNMPv1 and SNMPv2c, what mechanism is used (in plaintext) to control read/write access to a device?", answer: "Community strings", choices: ["Community strings","MIB tokens","OID keys","Trap filters"], meta: "SNMP — 3.2" },
  { text: "Which SNMP version was the first to add <strong>authentication and encryption</strong> for messages between manager and agent?", answer: "SNMPv3", choices: ["SNMPv1","SNMPv2c","SNMPv3","Syslog"], meta: "SNMP — 3.2" },
  { text: "Why is <strong>SNMPv2c</strong> considered less secure than SNMPv3 for production networks?", answer: "It relies on plaintext community strings with no built-in encryption", choices: ["It relies on plaintext community strings with no built-in encryption","It cannot generate traps","It only supports UDP port 514","It cannot poll more than one OID at a time"], meta: "SNMP — 3.2" },
  { text: "A monitoring server receives an unsolicited alert the instant a switch interface goes down, instead of waiting for its next scheduled poll. Which SNMP feature produced this alert?", answer: "An SNMP trap", choices: ["An SNMP trap","A GET request","A community string","A MIB walk"], meta: "Scenario — 3.2" },

  // Flow data
  { text: "What does <strong>flow data</strong> (e.g., NetFlow, sFlow, IPFIX) capture about network traffic?", answer: "Summarized metadata such as source/destination IP, ports, and byte/packet counts — not the full payload", choices: ["Summarized metadata such as source/destination IP, ports, and byte/packet counts — not the full payload","The complete payload of every packet","Only SNMP trap messages","CPU and memory statistics from routers"], meta: "Flow Data — 3.2" },
  { text: "Which monitoring method is best suited to quickly identifying the <strong>top bandwidth-consuming hosts</strong> on a network without capturing full packet contents?", answer: "Flow data", choices: ["Flow data","Packet capture","SNMP trap","Syslog"], meta: "Flow Data — 3.2" },
  { text: "A network administrator wants a lightweight, ongoing view of which internal hosts talk to which external destinations and how much traffic each conversation generates, without the storage overhead of full packet capture. Which technology fits this need?", answer: "Flow data (e.g., NetFlow/sFlow/IPFIX)", choices: ["Flow data (e.g., NetFlow/sFlow/IPFIX)","Full packet capture","SNMP community strings","Configuration baselining"], meta: "Scenario — 3.2" },

  // Packet capture
  { text: "How does <strong>packet capture</strong> differ from flow data monitoring?", answer: "Packet capture records the full contents of packets, including payload, rather than just summarized metadata", choices: ["Packet capture records the full contents of packets, including payload, rather than just summarized metadata","Packet capture only works over UDP","Packet capture cannot be used for troubleshooting","Packet capture is a synonym for flow data"], meta: "Packet Capture — 3.2" },
  { text: "Which tool is commonly used to perform a <strong>packet capture</strong> for deep protocol-level analysis?", answer: "Wireshark (or tcpdump)", choices: ["Wireshark (or tcpdump)", "A SIEM dashboard", "An IPAM console", "A MIB browser"], meta: "Packet Capture — 3.2" },

  // Port mirroring
  { text: "What does <strong>port mirroring</strong> do on a switch?", answer: "Copies traffic from one or more source ports to a designated monitoring port for capture and analysis", choices: ["Copies traffic from one or more source ports to a designated monitoring port for capture and analysis","Duplicates a VLAN across two switches","Balances traffic load across redundant uplinks","Blocks traffic on unused ports"], meta: "Port Mirroring — 3.2" },
  { text: "What is <strong>SPAN</strong> (as used on Cisco switches)?", answer: "Cisco's implementation of port mirroring, used to send a copy of traffic to a monitoring device", choices: ["Cisco's implementation of port mirroring, used to send a copy of traffic to a monitoring device","A spanning-tree loop prevention protocol","A method of aggregating multiple physical links","A wireless roaming protocol"], meta: "Port Mirroring — 3.2" },
  { text: "A security analyst needs to run a packet capture tool to inspect full traffic traversing a switch, but cannot install an agent on every connected host. Which switch feature should be configured to feed that traffic to the analyst's capture device?", answer: "Port mirroring (SPAN)", choices: ["Port mirroring (SPAN)","SNMP trap forwarding","Syslog forwarding","IPAM synchronization"], meta: "Scenario — 3.2" },

  // Baseline metrics / anomaly alerting
  { text: "What is a network <strong>baseline metric</strong>?", answer: "A recorded measurement of normal performance (e.g., bandwidth, CPU, latency) used as a point of comparison", choices: ["A recorded measurement of normal performance (e.g., bandwidth, CPU, latency) used as a point of comparison","The factory-default settings of a monitoring tool","A backup copy of a device configuration","The minimum acceptable SLA uptime percentage"], meta: "Baseline & Anomaly Alerting — 3.2" },
  { text: "What is <strong>anomaly-based alerting</strong> in network monitoring?", answer: "Generating alerts when current metrics deviate significantly from an established baseline", choices: ["Generating alerts when current metrics deviate significantly from an established baseline","Alerting only on SNMP trap messages","Alerting whenever a device configuration changes","Alerting based on a fixed, hardcoded threshold that never adapts"], meta: "Baseline & Anomaly Alerting — 3.2" },
  { text: "Recording a device's normal bandwidth and CPU utilization over time, then alerting only when usage deviates well outside that established range, describes which combination of concepts?", answer: "Baseline metrics with anomaly-based alerting", choices: ["Baseline metrics with anomaly-based alerting","Port mirroring","SNMP community strings","Ad hoc network discovery"], meta: "Baseline & Anomaly Alerting — 3.2" },

  // Log aggregation
  { text: "What is the role of <strong>Syslog</strong> in network monitoring?", answer: "A standard protocol/format used to forward log messages from devices to a central logging server", choices: ["A standard protocol/format used to forward log messages from devices to a central logging server","A protocol for polling device status", "A method for capturing full packet payloads", "A tool for mapping IP address allocation"], meta: "Log Aggregation — 3.2" },
  { text: "What does <strong>SIEM</strong> stand for, and what is its purpose?", answer: "Security Information and Event Management — aggregates and correlates log data from multiple sources to detect and alert on security events", choices: ["Security Information and Event Management — aggregates and correlates log data from multiple sources to detect and alert on security events","Simple Internet Event Monitor — tracks uptime of internet-facing services","Secure Interface Endpoint Manager — manages VPN endpoints","Server Inventory and Equipment Mapping — tracks hardware assets"], meta: "Log Aggregation — 3.2" },
  { text: "How do Syslog and a SIEM typically work together?", answer: "Syslog transports log messages to a central collector, and the SIEM ingests, correlates, and analyzes those logs for meaningful alerts", choices: ["Syslog transports log messages to a central collector, and the SIEM ingests, correlates, and analyzes those logs for meaningful alerts","They perform the same function and are never used together","SIEM replaces the need for any logging protocol","Syslog encrypts SIEM traffic"], meta: "Log Aggregation — 3.2" },
  { text: "Which two technologies work together to centrally collect and correlate log data from firewalls, servers, and switches in order to detect coordinated security incidents?", answer: "Syslog (for collection) and a SIEM (for correlation and analysis)", choices: ["Syslog (for collection) and a SIEM (for correlation and analysis)","SNMP traps and IPAM","Flow data and port mirroring alone","A baseline configuration and change management log"], meta: "Log Aggregation — 3.2" },

  // API integration
  { text: "Why do modern network monitoring platforms commonly rely on <strong>API integration</strong> with cloud providers and SaaS platforms?", answer: "To pull performance and status data from services that don't expose SNMP, such as cloud infrastructure and hosted applications", choices: ["To pull performance and status data from services that don't expose SNMP, such as cloud infrastructure and hosted applications","To replace the need for any authentication","To physically connect to remote devices","To generate wireless heat maps"], meta: "API Integration — 3.2" },
  { text: "A company's monitoring platform needs visibility into a third-party SaaS application's uptime and performance, but the vendor does not support SNMP polling. What should the monitoring platform use instead?", answer: "API integration with the vendor's service", choices: ["API integration with the vendor's service","A configured SNMP trap", "Port mirroring on the vendor's switch", "A wireless heat map"], meta: "API Integration — 3.2" },

  // Network discovery
  { text: "What is the purpose of a <strong>network discovery</strong> tool in a monitoring solution?", answer: "To automatically identify devices connected to the network and add them to inventory/monitoring", choices: ["To automatically identify devices connected to the network and add them to inventory/monitoring","To capture full packet payloads","To generate SLA reports","To manage IP address leases"], meta: "Network Discovery — 3.2" },
  { text: "What is the difference between <strong>ad hoc</strong> and <strong>scheduled</strong> network discovery?", answer: "Ad hoc discovery is run manually on demand, while scheduled discovery runs automatically at set intervals", choices: ["Ad hoc discovery is run manually on demand, while scheduled discovery runs automatically at set intervals","Ad hoc discovery only finds wireless devices; scheduled only finds wired devices","Scheduled discovery requires SNMPv3; ad hoc does not","There is no functional difference"], meta: "Network Discovery — 3.2" },
  { text: "A monitoring platform automatically scans for newly connected devices every night at 2 AM without any manual intervention. Which type of network discovery is this?", answer: "Scheduled network discovery", choices: ["Scheduled network discovery","Ad hoc network discovery","Anomaly-based discovery","Flow-based discovery"], meta: "Network Discovery — 3.2" },

  // Traffic analysis
  { text: "What is the goal of <strong>traffic analysis</strong> in network monitoring?", answer: "To examine collected traffic data (e.g., flow or packet data) to identify usage patterns, top talkers, and protocol distribution", choices: ["To examine collected traffic data (e.g., flow or packet data) to identify usage patterns, top talkers, and protocol distribution","To assign static IP addresses","To back up device configurations","To physically trace cable runs"], meta: "Traffic Analysis — 3.2" },
  { text: "A monitoring solution reports that video streaming protocols now make up an unusually high share of egress traffic compared to last month. This finding is a product of which monitoring activity?", answer: "Traffic analysis", choices: ["Traffic analysis","Configuration monitoring","Network discovery","API integration"], meta: "Traffic Analysis — 3.2" },

  // Performance / availability / config monitoring solutions
  { text: "What does <strong>performance monitoring</strong> track over time?", answer: "Metrics such as latency, throughput, jitter, and error rates", choices: ["Metrics such as latency, throughput, jitter, and error rates","Which devices are physically racked where","Software license expiration dates","Wireless heat map coverage"], meta: "Monitoring Solutions — 3.2" },
  { text: "What does <strong>availability monitoring</strong> primarily measure?", answer: "Whether a device or service is up and reachable, often via periodic ICMP polling", choices: ["Whether a device or service is up and reachable, often via periodic ICMP polling","The bandwidth consumed by top talkers","The encryption strength of SNMP messages","The physical temperature of a data center"], meta: "Monitoring Solutions — 3.2" },
  { text: "What does <strong>configuration monitoring</strong> detect?", answer: "Unauthorized or unexpected changes to a device's configuration compared to its known-good state", choices: ["Unauthorized or unexpected changes to a device's configuration compared to its known-good state","CPU temperature spikes","Wireless signal degradation","DHCP scope exhaustion"], meta: "Monitoring Solutions — 3.2" },
  { text: "A monitoring platform automatically alerts an administrator whenever a router's running configuration changes without a corresponding change request. Which monitoring solution is responsible for detecting this?", answer: "Configuration monitoring", choices: ["Configuration monitoring","Availability monitoring","Traffic analysis","API integration"], meta: "Scenario — 3.2" },
];

const DR_QUESTIONS = [
  // DR metrics — RPO
  { text: "What does <strong>RPO (Recovery Point Objective)</strong> define?", answer: "The maximum acceptable amount of data loss, measured as a point in time before the incident", choices: ["The maximum acceptable amount of data loss, measured as a point in time before the incident","The maximum acceptable time to restore a service after an outage","The average time it takes to repair a failed component","The average time a system runs before it fails"], meta: "DR Metrics — 3.3" },
  { text: "An organization sets an RPO of <strong>4 hours</strong>. What does this mean in practice?", answer: "The business can tolerate losing up to 4 hours of data, so backups/replication must occur at least every 4 hours", choices: ["The business can tolerate losing up to 4 hours of data, so backups/replication must occur at least every 4 hours","Services must be fully restored within 4 hours of an outage","A failed device must be repaired within 4 hours","Failures should occur no more than once every 4 hours"], meta: "DR Metrics — 3.3" },
  { text: "Which DR metric most directly drives how <strong>frequently</strong> you must back up or replicate data?", answer: "RPO (Recovery Point Objective)", choices: ["RPO (Recovery Point Objective)","RTO (Recovery Time Objective)","MTTR (Mean Time To Repair)","MTBF (Mean Time Between Failures)"], meta: "DR Metrics — 3.3" },

  // DR metrics — RTO
  { text: "What does <strong>RTO (Recovery Time Objective)</strong> define?", answer: "The maximum acceptable amount of time a service can be down before it must be restored", choices: ["The maximum acceptable amount of time a service can be down before it must be restored","The maximum acceptable amount of data loss measured in time","The average time between two consecutive system failures","The average time required to repair a failed component"], meta: "DR Metrics — 3.3" },
  { text: "A company requires that its email service be back online within <strong>2 hours</strong> of any outage. Which DR metric does this describe?", answer: "RTO (Recovery Time Objective)", choices: ["RTO (Recovery Time Objective)","RPO (Recovery Point Objective)","MTBF (Mean Time Between Failures)","MTTR (Mean Time To Repair)"], meta: "DR Metrics — 3.3" },
  { text: "What is the key difference between <strong>RTO and RPO</strong>?", answer: "RTO is how quickly service must be restored; RPO is how much data loss (measured in time) is acceptable", choices: ["RTO is how quickly service must be restored; RPO is how much data loss (measured in time) is acceptable","RTO measures data loss; RPO measures restoration time","They are two names for the same metric","RTO applies only to hardware; RPO applies only to software"], meta: "DR Metrics — 3.3" },

  // DR metrics — MTTR
  { text: "What does <strong>MTTR (Mean Time To Repair)</strong> measure?", answer: "The average time required to repair a failed component or system and return it to service", choices: ["The average time required to repair a failed component or system and return it to service","The average time a system operates before failing","The acceptable amount of data loss in a disaster","The point in time to which data must be recoverable"], meta: "DR Metrics — 3.3" },
  { text: "A lower <strong>MTTR</strong> value indicates what about an organization's operations?", answer: "Failures are being resolved and systems restored more quickly", choices: ["Failures are being resolved and systems restored more quickly","Systems fail more often","Backups are taken more frequently","Data loss during a disaster is greater"], meta: "DR Metrics — 3.3" },

  // DR metrics — MTBF
  { text: "What does <strong>MTBF (Mean Time Between Failures)</strong> measure?", answer: "The average time a repairable system operates between failures — a measure of reliability", choices: ["The average time a repairable system operates between failures — a measure of reliability","The average time needed to repair a failed device","The maximum tolerable downtime for a service","The frequency at which backups must be taken"], meta: "DR Metrics — 3.3" },
  { text: "A higher <strong>MTBF</strong> value indicates what about a device?", answer: "It is more reliable, running longer on average before a failure occurs", choices: ["It is more reliable, running longer on average before a failure occurs","It is repaired more slowly after a failure","It loses more data during an outage","It must be backed up more often"], meta: "DR Metrics — 3.3" },
  { text: "Which two DR metrics describe hardware reliability and repair speed, rather than acceptable downtime or data loss?", answer: "MTBF (reliability) and MTTR (repair speed)", choices: ["MTBF (reliability) and MTTR (repair speed)","RTO and RPO","RPO and MTBF","RTO and MTTR"], meta: "DR Metrics — 3.3" },

  // DR sites — cold
  { text: "What characterizes a <strong>cold site</strong>?", answer: "A facility with space, power, and cooling but no configured equipment or current data — the cheapest option with the longest recovery time", choices: ["A facility with space, power, and cooling but no configured equipment or current data — the cheapest option with the longest recovery time","A fully equipped site with real-time data replication ready to take over instantly","A partially equipped site with some hardware and periodically updated data","A mobile trailer that can be driven to any location"], meta: "DR Sites — 3.3" },
  { text: "Which DR site type has the <strong>lowest cost</strong> but the <strong>longest recovery time</strong>?", answer: "Cold site", choices: ["Cold site","Warm site","Hot site","Active-active site"], meta: "DR Sites — 3.3" },

  // DR sites — warm
  { text: "What characterizes a <strong>warm site</strong>?", answer: "A partially equipped facility with some hardware and connectivity in place and periodically updated data, requiring some setup before takeover", choices: ["A partially equipped facility with some hardware and connectivity in place and periodically updated data, requiring some setup before takeover","An empty facility with only power and cooling","A fully mirrored facility ready to take over in seconds","A backup stored offsite on tape"], meta: "DR Sites — 3.3" },
  { text: "A DR site has servers and network gear installed and receives data updates once a day, but still needs configuration and the latest data restored before it can run production. Which site type is this?", answer: "Warm site", choices: ["Warm site","Cold site","Hot site","Screened subnet"], meta: "DR Sites — 3.3" },

  // DR sites — hot
  { text: "What characterizes a <strong>hot site</strong>?", answer: "A fully equipped, continuously updated duplicate of production that can take over operations almost immediately — the most expensive option", choices: ["A fully equipped, continuously updated duplicate of production that can take over operations almost immediately — the most expensive option","A facility with only power and cooling and no equipment","A partially equipped site with daily data updates","An offsite tape backup vault"], meta: "DR Sites — 3.3" },
  { text: "Which DR site type offers the <strong>fastest recovery</strong> but at the <strong>highest cost</strong>?", answer: "Hot site", choices: ["Hot site","Warm site","Cold site","Tabletop site"], meta: "DR Sites — 3.3" },
  { text: "An organization with a very short RTO needs a DR facility that mirrors production in near-real time and can fail over almost instantly. Which site type meets this requirement?", answer: "Hot site", choices: ["Hot site","Warm site","Cold site","Passive site"], meta: "Scenario — 3.3" },

  // High availability — active-active
  { text: "In an <strong>active-active</strong> high-availability configuration, how are the nodes used?", answer: "All nodes are online and handling traffic simultaneously, sharing the load", choices: ["All nodes are online and handling traffic simultaneously, sharing the load","One node handles all traffic while the other waits idle as a standby","Nodes alternate, running one hour on and one hour off","Only one node ever runs; the second is powered off until needed"], meta: "High Availability — 3.3" },
  { text: "What is a key advantage of an <strong>active-active</strong> setup over active-passive?", answer: "It uses all nodes for load sharing, increasing total capacity during normal operation", choices: ["It uses all nodes for load sharing, increasing total capacity during normal operation","It requires no load balancing","It is always cheaper because it uses fewer devices","It never requires data synchronization between nodes"], meta: "High Availability — 3.3" },

  // High availability — active-passive
  { text: "In an <strong>active-passive</strong> high-availability configuration, how are the nodes used?", answer: "One node actively handles traffic while a standby node remains idle, taking over only if the active node fails", choices: ["One node actively handles traffic while a standby node remains idle, taking over only if the active node fails","Both nodes handle traffic at the same time","Traffic is split evenly across all nodes at all times","All nodes are powered off until a disaster occurs"], meta: "High Availability — 3.3" },
  { text: "A pair of firewalls is configured so that one processes all traffic while the second sits on standby and takes over only if the first fails. Which HA model is this?", answer: "Active-passive", choices: ["Active-passive","Active-active","Cold site","Round-robin"], meta: "Scenario — 3.3" },

  // Testing — tabletop
  { text: "What is a <strong>tabletop exercise</strong> in disaster recovery testing?", answer: "A discussion-based walkthrough where the team talks through the DR plan step by step, without touching production systems", choices: ["A discussion-based walkthrough where the team talks through the DR plan step by step, without touching production systems","A live failover of production systems to the DR site","An automated script that verifies backups nightly","A penetration test of the DR facility"], meta: "DR Testing — 3.3" },
  { text: "Why might an organization choose a <strong>tabletop exercise</strong> to test its DR plan?", answer: "It validates the plan and team readiness through discussion without the risk or cost of disrupting live systems", choices: ["It validates the plan and team readiness through discussion without the risk or cost of disrupting live systems","It is the only way to confirm hardware actually fails over","It permanently replaces the need for real failover testing","It encrypts the DR documentation"], meta: "DR Testing — 3.3" },

  // Testing — validation
  { text: "What is the purpose of a <strong>validation test</strong> in DR?", answer: "To actively verify that recovery procedures, systems, and data restores actually work as intended", choices: ["To actively verify that recovery procedures, systems, and data restores actually work as intended","To discuss the DR plan verbally without using any systems","To calculate the RPO and RTO values","To document the asset inventory"], meta: "DR Testing — 3.3" },
  { text: "How does a <strong>validation test</strong> differ from a tabletop exercise?", answer: "A validation test actually exercises recovery systems/procedures, while a tabletop exercise is a discussion-only walkthrough", choices: ["A validation test actually exercises recovery systems/procedures, while a tabletop exercise is a discussion-only walkthrough","A validation test is discussion-only, while a tabletop involves live systems","They are identical in scope and method","A validation test only measures MTBF"], meta: "DR Testing — 3.3" },
];

// ======================================================
//  DATA -- IPv4 and IPv6 Network Services (3.4)
// ======================================================

const SERVICES_QUESTIONS = [
  // DHCP — core components
  { text: "What is a DHCP <strong>scope</strong>?", answer: "The range of IP addresses a DHCP server is configured to lease to clients on a subnet", choices: ["The range of IP addresses a DHCP server is configured to lease to clients on a subnet","A single IP permanently tied to one device","The length of time a client keeps its address","The gateway address handed out to clients"], meta: "DHCP — 3.4" },
  { text: "What is a DHCP <strong>reservation</strong>?", answer: "A mapping that always assigns the same IP address to a specific device based on its MAC address", choices: ["A mapping that always assigns the same IP address to a specific device based on its MAC address","A block of addresses the server is told never to hand out","The total pool of addresses available for lease","A backup copy of the DHCP database"], meta: "DHCP — 3.4" },
  { text: "What is a DHCP <strong>exclusion</strong>?", answer: "One or more addresses inside a scope that the DHCP server is prevented from leasing", choices: ["One or more addresses inside a scope that the DHCP server is prevented from leasing","An address permanently bound to a MAC address","A client that is denied any lease","The default gateway option"], meta: "DHCP — 3.4" },
  { text: "What does the DHCP <strong>lease time</strong> control?", answer: "How long a client may keep an assigned IP address before it must renew", choices: ["How long a client may keep an assigned IP address before it must renew","The total number of addresses in the scope","Which DNS server the client uses","How often the server backs up its database"], meta: "DHCP — 3.4" },
  { text: "Which of the following is delivered to clients as a DHCP <strong>option</strong>?", answer: "Default gateway, DNS servers, domain name, and NTP server", choices: ["Default gateway, DNS servers, domain name, and NTP server","The client's MAC address","The switch port the client is on","The cable category in use"], meta: "DHCP — 3.4" },
  { text: "What is the purpose of a DHCP <strong>relay agent (IP helper)</strong>?", answer: "It forwards DHCP broadcast messages from clients to a DHCP server on a different subnet", choices: ["It forwards DHCP broadcast messages from clients to a DHCP server on a different subnet","It encrypts DHCP traffic between client and server","It blocks rogue DHCP servers on the LAN","It assigns IPv6 addresses without a server"], meta: "DHCP — 3.4" },
  { text: "Why is a DHCP relay / IP helper needed when the DHCP server is on another subnet?", answer: "Routers do not forward broadcasts by default, so the relay converts the client's broadcast into a unicast to the remote server", choices: ["Routers do not forward broadcasts by default, so the relay converts the client's broadcast into a unicast to the remote server","DHCP only works over TCP, which routers block","Clients cannot generate broadcasts","The server can only lease addresses to its own MAC"], meta: "DHCP — 3.4" },

  // SLAAC
  { text: "What does <strong>SLAAC</strong> stand for?", answer: "Stateless Address Autoconfiguration", choices: ["Stateless Address Autoconfiguration","Static Local Address Assignment Control","Secure LAN Address Allocation Configuration","Stateful Layer Address Configuration"], meta: "SLAAC — 3.4" },
  { text: "How does <strong>SLAAC</strong> let an IPv6 host obtain an address?", answer: "The host builds its own address using the prefix advertised by a router in a Router Advertisement (RA)", choices: ["The host builds its own address using the prefix advertised by a router in a Router Advertisement (RA)","A DHCP server assigns and tracks each address","The address is manually typed by an administrator","The host copies the address of its default gateway"], meta: "SLAAC — 3.4" },
  { text: "Why is SLAAC described as <strong>stateless</strong>?", answer: "No server keeps a record of which host has which address — hosts self-assign from the advertised prefix", choices: ["No server keeps a record of which host has which address — hosts self-assign from the advertised prefix","It never assigns a gateway","It works only on IPv4 networks","It requires a lease renewal every hour"], meta: "SLAAC — 3.4" },

  // DNS — record types
  { text: "Which DNS record maps a hostname to an <strong>IPv4</strong> address?", answer: "A record", choices: ["A record","AAAA record","CNAME record","PTR record"], meta: "DNS Records — 3.4" },
  { text: "Which DNS record maps a hostname to an <strong>IPv6</strong> address?", answer: "AAAA record", choices: ["AAAA record","A record","MX record","NS record"], meta: "DNS Records — 3.4" },
  { text: "Which DNS record creates an <strong>alias</strong> pointing one name to another name?", answer: "CNAME record", choices: ["CNAME record","A record","PTR record","TXT record"], meta: "DNS Records — 3.4" },
  { text: "Which DNS record identifies the <strong>mail servers</strong> for a domain?", answer: "MX record", choices: ["MX record","NS record","CNAME record","AAAA record"], meta: "DNS Records — 3.4" },
  { text: "Which DNS record holds arbitrary text and is commonly used for <strong>SPF, DKIM, and domain verification</strong>?", answer: "TXT record", choices: ["TXT record","MX record","PTR record","A record"], meta: "DNS Records — 3.4" },
  { text: "Which DNS record identifies the <strong>authoritative name servers</strong> for a zone?", answer: "NS record", choices: ["NS record","MX record","CNAME record","AAAA record"], meta: "DNS Records — 3.4" },
  { text: "Which DNS record maps an <strong>IP address back to a hostname</strong> (reverse lookup)?", answer: "PTR record", choices: ["PTR record","A record","CNAME record","TXT record"], meta: "DNS Records — 3.4" },

  // DNS — zones
  { text: "What does a DNS <strong>forward lookup zone</strong> resolve?", answer: "A hostname to its IP address", choices: ["A hostname to its IP address","An IP address to its hostname","A MAC address to an IP","A domain to its mail server only"], meta: "DNS Zones — 3.4" },
  { text: "What does a DNS <strong>reverse lookup zone</strong> resolve, and which record type does it use?", answer: "An IP address to a hostname, using PTR records", choices: ["An IP address to a hostname, using PTR records","A hostname to an IP address, using A records","A domain to its name servers, using NS records","A name to an alias, using CNAME records"], meta: "DNS Zones — 3.4" },
  { text: "What is the difference between a <strong>primary</strong> and a <strong>secondary</strong> DNS zone?", answer: "The primary holds the authoritative read/write copy; the secondary holds a read-only copy obtained by zone transfer", choices: ["The primary holds the authoritative read/write copy; the secondary holds a read-only copy obtained by zone transfer","The primary is read-only and the secondary is writable","The primary handles IPv4 and the secondary handles IPv6","They are identical but on different ports"], meta: "DNS Zones — 3.4" },

  // DNS — authoritative / recursive
  { text: "What is an <strong>authoritative</strong> DNS answer?", answer: "A response that comes directly from a name server responsible for (hosting) that zone", choices: ["A response that comes directly from a name server responsible for (hosting) that zone","A response served from a resolver's cache","Any response that arrives over DoH","A response from the client's hosts file"], meta: "DNS Resolution — 3.4" },
  { text: "What makes a DNS answer <strong>non-authoritative</strong>?", answer: "It is returned from a resolver's cache rather than directly from the zone's own name server", choices: ["It is returned from a resolver's cache rather than directly from the zone's own name server","It fails DNSSEC validation","It uses a PTR record","It is always incorrect"], meta: "DNS Resolution — 3.4" },
  { text: "What is a <strong>recursive</strong> DNS query?", answer: "A query where the resolver does the full work of chasing referrals until it returns a final answer to the client", choices: ["A query where the resolver does the full work of chasing referrals until it returns a final answer to the client","A query the client sends directly to each root and TLD server itself","A query that only ever hits the local cache","A query restricted to reverse lookups"], meta: "DNS Resolution — 3.4" },
  { text: "What is the role of the local <strong>hosts file</strong> in name resolution?", answer: "It provides static hostname-to-IP mappings that the OS typically checks before querying DNS", choices: ["It provides static hostname-to-IP mappings that the OS typically checks before querying DNS","It stores the DNS server's zone records","It caches DNSSEC signatures","It lists blocked domains for the firewall"], meta: "DNS Resolution — 3.4" },

  // DNS — security / transport
  { text: "What does <strong>DNSSEC</strong> add to DNS?", answer: "Digital signatures that authenticate DNS records and protect against spoofing and cache poisoning", choices: ["Digital signatures that authenticate DNS records and protect against spoofing and cache poisoning","Encryption of all DNS queries in transit","Load balancing across name servers","Automatic failover to a secondary zone"], meta: "DNS Security — 3.4" },
  { text: "Does <strong>DNSSEC</strong> encrypt DNS traffic?", answer: "No — it provides authentication and integrity, not confidentiality; the data is still sent in the clear", choices: ["No — it provides authentication and integrity, not confidentiality; the data is still sent in the clear","Yes — it encrypts every query with TLS","Yes — it encrypts only responses","No — it neither signs nor secures anything"], meta: "DNS Security — 3.4" },
  { text: "What is <strong>DoH (DNS over HTTPS)</strong>?", answer: "DNS queries sent inside encrypted HTTPS, typically over port 443, to preserve privacy", choices: ["DNS queries sent inside encrypted HTTPS, typically over port 443, to preserve privacy","DNS queries signed with DNSSEC keys","DNS resolution done entirely from the hosts file","A protocol that maps IPv6 to IPv4"], meta: "DNS Security — 3.4" },
  { text: "What is <strong>DoT (DNS over TLS)</strong>, and which port does it use?", answer: "DNS queries encrypted with TLS, using port 853", choices: ["DNS queries encrypted with TLS, using port 853","DNS queries encrypted inside HTTPS on port 443","Plaintext DNS on port 53","DNS signed with DNSSEC on port 53"], meta: "DNS Security — 3.4" },
  { text: "What is the main difference between <strong>DoH</strong> and <strong>DoT</strong>?", answer: "DoH tunnels DNS inside HTTPS (port 443, blending with web traffic); DoT uses a dedicated TLS port (853)", choices: ["DoH tunnels DNS inside HTTPS (port 443, blending with web traffic); DoT uses a dedicated TLS port (853)","DoH authenticates records while DoT encrypts them","DoT uses port 443 and DoH uses port 853","DoH is unencrypted while DoT is encrypted"], meta: "DNS Security — 3.4" },

  // Time protocols
  { text: "What is the purpose of <strong>NTP (Network Time Protocol)</strong>, and what port/transport does it use?", answer: "It synchronizes clocks across devices, using UDP port 123", choices: ["It synchronizes clocks across devices, using UDP port 123","It resolves hostnames, using UDP port 53","It leases IP addresses, using UDP ports 67/68","It encrypts time data, using TCP port 853"], meta: "Time Protocols — 3.4" },
  { text: "What advantage does <strong>PTP (Precision Time Protocol)</strong> have over NTP?", answer: "It achieves far greater accuracy — sub-microsecond — often using hardware timestamping", choices: ["It achieves far greater accuracy — sub-microsecond — often using hardware timestamping","It works without any network connection","It also assigns IP addresses","It encrypts DNS lookups"], meta: "Time Protocols — 3.4" },
  { text: "What does <strong>NTS (Network Time Security)</strong> add to time synchronization?", answer: "Authentication and integrity for NTP, protecting time data from tampering and spoofing", choices: ["Authentication and integrity for NTP, protecting time data from tampering and spoofing","Sub-nanosecond hardware timestamping","The ability to run NTP over IPv6 only","Automatic DHCP option delivery"], meta: "Time Protocols — 3.4" },

  // Scenario questions
  { text: "Clients on a remote subnet get an APIPA (169.254.x.x) address and cannot reach the DHCP server, which sits on a different subnet across a router. What should be configured on the router?", answer: "A DHCP relay agent (IP helper) pointing to the DHCP server", choices: ["A DHCP relay agent (IP helper) pointing to the DHCP server","A DHCP exclusion for the APIPA range","A shorter lease time on the scope","A reverse lookup zone for the subnet"], meta: "Scenario — 3.4" },
  { text: "A network printer keeps getting a different IP from DHCP, breaking a hardcoded print queue. You want it to always receive the same address while still being managed by DHCP. What should you configure?", answer: "A DHCP reservation tying the printer's MAC to a fixed IP", choices: ["A DHCP reservation tying the printer's MAC to a fixed IP","A DHCP exclusion covering the whole scope","A CNAME record for the printer","A shorter DHCP lease time"], meta: "Scenario — 3.4" },
  { text: "Users can reach a website by IP but not by name, and you confirm the public DNS record is correct. One workstation still fails even after DNS is fixed, resolving the name to an old IP. What is the most likely cause on that workstation?", answer: "A stale static entry in the local hosts file, which is checked before DNS", choices: ["A stale static entry in the local hosts file, which is checked before DNS","A missing MX record","An expired DHCP lease","A disabled reverse lookup zone"], meta: "Scenario — 3.4" },
  { text: "A security team wants to prevent DNS cache poisoning by ensuring resolvers can verify that DNS responses are genuine and unaltered. Which technology should be deployed?", answer: "DNSSEC", choices: ["DNSSEC","DoH","SLAAC","NTS"], meta: "Scenario — 3.4" },
  { text: "Email sent from a company's domain is being marked as spam. To publish sender-authentication data (SPF/DKIM) for the domain, which DNS record type is used?", answer: "TXT record", choices: ["TXT record","MX record","PTR record","AAAA record"], meta: "Scenario — 3.4" },
];

// ======================================================
//  DATA -- Network Access and Management Methods (3.5)
// ======================================================

const ACCESS_QUESTIONS = [
  // VPN — site-to-site
  { text: "What is a <strong>site-to-site VPN</strong>?", answer: "A permanent encrypted tunnel between two networks (e.g., two office routers/firewalls) that connects entire sites without per-device client software", choices: ["A permanent encrypted tunnel between two networks (e.g., two office routers/firewalls) that connects entire sites without per-device client software","A tunnel a single remote user builds from their laptop to the corporate network","A web page that proxies traffic without any tunnel","A tunnel used only for DNS traffic"], meta: "VPN — 3.5" },
  { text: "In a <strong>site-to-site VPN</strong>, where are the tunnel endpoints typically located?", answer: "On the gateway devices (routers or firewalls) at each site, so end hosts need no VPN software", choices: ["On the gateway devices (routers or firewalls) at each site, so end hosts need no VPN software","On every individual client computer at both sites","On the ISP's core routers only","On a public DNS server"], meta: "VPN — 3.5" },
  { text: "A company wants to permanently link its headquarters and branch office networks over the internet so all hosts can communicate transparently. Which VPN type fits best?", answer: "Site-to-site VPN", choices: ["Site-to-site VPN","Client-to-site VPN","Clientless VPN","Split-tunnel client VPN"], meta: "Scenario — 3.5" },

  // VPN — client-to-site
  { text: "What is a <strong>client-to-site VPN</strong> (remote-access VPN)?", answer: "A VPN where an individual device runs client software to build an encrypted tunnel into the corporate network", choices: ["A VPN where an individual device runs client software to build an encrypted tunnel into the corporate network","A permanent tunnel between two office gateways","A tunnel that connects two data centers","An unencrypted proxy connection"], meta: "VPN — 3.5" },
  { text: "A traveling employee needs to securely reach internal file servers from a hotel using their laptop. Which VPN type is this?", answer: "Client-to-site (remote-access) VPN", choices: ["Client-to-site (remote-access) VPN","Site-to-site VPN","In-band management","Console connection"], meta: "Scenario — 3.5" },

  // VPN — clientless
  { text: "What is a <strong>clientless VPN</strong>?", answer: "A remote-access VPN reached through a web browser over HTTPS (TLS), requiring no dedicated VPN client software", choices: ["A remote-access VPN reached through a web browser over HTTPS (TLS), requiring no dedicated VPN client software","A site-to-site tunnel between two firewalls","A VPN that requires a hardware token instead of software","A VPN that only carries voice traffic"], meta: "VPN — 3.5" },
  { text: "Which protocol typically secures a <strong>clientless VPN</strong> session in the browser (the technology behind a legacy \"SSL VPN\")?", answer: "TLS (the modern successor to SSL), used over HTTPS", choices: ["TLS (the modern successor to SSL), used over HTTPS","IPSec ESP in transport mode","Telnet","Plain HTTP"], meta: "VPN — 3.5" },

  // VPN — split vs full tunnel
  { text: "In a <strong>split-tunnel</strong> VPN configuration, how is client traffic routed?", answer: "Only traffic destined for the corporate network goes through the tunnel; other traffic (e.g., general internet) goes directly out the local connection", choices: ["Only traffic destined for the corporate network goes through the tunnel; other traffic (e.g., general internet) goes directly out the local connection","All traffic from the client is forced through the corporate tunnel","No traffic is encrypted","Traffic is duplicated and sent both ways"], meta: "VPN Tunneling — 3.5" },
  { text: "In a <strong>full-tunnel</strong> VPN configuration, how is client traffic routed?", answer: "All of the client's traffic — including internet-bound traffic — is sent through the VPN tunnel to the corporate network", choices: ["All of the client's traffic — including internet-bound traffic — is sent through the VPN tunnel to the corporate network","Only corporate-bound traffic uses the tunnel","Only DNS queries use the tunnel","No traffic uses the tunnel"], meta: "VPN Tunneling — 3.5" },
  { text: "What is a security advantage of <strong>full tunnel</strong> over split tunnel?", answer: "All client traffic can be inspected and filtered by corporate security controls, since nothing bypasses the tunnel", choices: ["All client traffic can be inspected and filtered by corporate security controls, since nothing bypasses the tunnel","It uses less bandwidth on the corporate link","It requires no encryption","It eliminates the need for authentication"], meta: "VPN Tunneling — 3.5" },
  { text: "What is a common advantage of <strong>split tunnel</strong> over full tunnel?", answer: "It reduces load on the corporate internet link and can improve performance, since only corporate traffic traverses the tunnel", choices: ["It reduces load on the corporate internet link and can improve performance, since only corporate traffic traverses the tunnel","It forces all traffic through corporate inspection","It makes the connection unencrypted","It removes the need for a VPN gateway"], meta: "VPN Tunneling — 3.5" },
  { text: "A security team requires that remote users' web browsing be filtered by the corporate proxy even while on VPN. Which tunneling mode enforces this?", answer: "Full tunnel", choices: ["Full tunnel","Split tunnel","Clientless mode","Out-of-band mode"], meta: "Scenario — 3.5" },

  // Connection methods — SSH
  { text: "What does <strong>SSH</strong> provide for device management, and on which port?", answer: "An encrypted command-line (CLI) session to a remote device, over TCP port 22", choices: ["An encrypted command-line (CLI) session to a remote device, over TCP port 22","An unencrypted CLI session over TCP port 23","A graphical desktop over TCP port 3389","A web management page over TCP port 443"], meta: "Connection Methods — 3.5" },
  { text: "Why is <strong>SSH</strong> preferred over Telnet for remote management?", answer: "SSH encrypts the entire session, whereas Telnet sends credentials and commands in plaintext", choices: ["SSH encrypts the entire session, whereas Telnet sends credentials and commands in plaintext","SSH is faster because it skips authentication","Telnet uses certificates and SSH does not","SSH works only on the local console"], meta: "Connection Methods — 3.5" },

  // Connection methods — console
  { text: "What is a <strong>console</strong> connection to a network device?", answer: "A direct physical connection (e.g., via a console/rollover cable to a serial or USB console port) used for local management", choices: ["A direct physical connection (e.g., via a console/rollover cable to a serial or USB console port) used for local management","An encrypted CLI session over the network","A browser-based management dashboard","A REST API call to the device"], meta: "Connection Methods — 3.5" },
  { text: "When is a <strong>console</strong> connection especially useful?", answer: "For initial configuration or when the device has no network reachability (e.g., no IP set or the network is down)", choices: ["For initial configuration or when the device has no network reachability (e.g., no IP set or the network is down)","Only when managing thousands of devices remotely","Only for encrypting internet traffic","Only for browsing the web"], meta: "Connection Methods — 3.5" },

  // Connection methods — GUI
  { text: "What is a <strong>GUI</strong> connection method for device management?", answer: "A graphical interface, typically a web-based dashboard, used to configure and monitor a device through menus and forms", choices: ["A graphical interface, typically a web-based dashboard, used to configure and monitor a device through menus and forms","A text-only command-line session","A direct serial cable connection","An automated script-driven interface"], meta: "Connection Methods — 3.5" },

  // Connection methods — API
  { text: "What is an <strong>API</strong> connection method used for in network management?", answer: "Programmatic management, letting scripts and automation tools configure or query devices (often via REST) without manual interaction", choices: ["Programmatic management, letting scripts and automation tools configure or query devices (often via REST) without manual interaction","A graphical web dashboard for manual clicks","A physical serial console session","An encrypted interactive CLI for typing commands by hand"], meta: "Connection Methods — 3.5" },
  { text: "Which connection method is best suited for <strong>automating</strong> repetitive configuration across many devices?", answer: "API", choices: ["API","Console","GUI","Telnet"], meta: "Connection Methods — 3.5" },

  // Jump box / host
  { text: "What is a <strong>jump box (jump host)</strong>?", answer: "A hardened intermediary server that administrators connect to first, then use it as a controlled pivot to reach and manage devices in a secured network segment", choices: ["A hardened intermediary server that administrators connect to first, then use it as a controlled pivot to reach and manage devices in a secured network segment","A backup server that stores device configurations","A load balancer that distributes management traffic","A DHCP server dedicated to admins"], meta: "Jump Box — 3.5" },
  { text: "What is the main security benefit of a <strong>jump box</strong>?", answer: "It centralizes and controls administrative access, providing a single audited, hardened entry point into a protected segment", choices: ["It centralizes and controls administrative access, providing a single audited, hardened entry point into a protected segment","It encrypts all internet browsing for end users","It eliminates the need for authentication","It replaces the need for firewalls entirely"], meta: "Jump Box — 3.5" },

  // In-band vs out-of-band management
  { text: "What is <strong>in-band management</strong>?", answer: "Managing a device over the same network path that carries production/user data traffic", choices: ["Managing a device over the same network path that carries production/user data traffic","Managing a device over a separate, dedicated management network or channel","Managing a device only through a physical console cable","Managing a device via a cloud API only"], meta: "In-band vs Out-of-band — 3.5" },
  { text: "What is <strong>out-of-band management</strong>?", answer: "Managing a device through a separate, dedicated channel or network that is independent of the production data path", choices: ["Managing a device through a separate, dedicated channel or network that is independent of the production data path","Managing a device over the same links as user data","Managing a device only from within a VPN tunnel","Managing a device exclusively through a web GUI"], meta: "In-band vs Out-of-band — 3.5" },
  { text: "Why is <strong>out-of-band management</strong> valuable during a network outage?", answer: "It provides a management path that still works even when the production network is down or congested", choices: ["It provides a management path that still works even when the production network is down or congested","It is always cheaper than in-band management","It removes the need for any authentication","It speeds up production data traffic"], meta: "In-band vs Out-of-band — 3.5" },
  { text: "An administrator connects to a remote switch through a dedicated management port on a separate network so they can still reach it if the primary links fail. Which method is this?", answer: "Out-of-band management", choices: ["Out-of-band management","In-band management","Split-tunnel VPN","Clientless VPN"], meta: "Scenario — 3.5" },
  { text: "Which management approach remains usable even when the <strong>production network is down or saturated</strong>?", answer: "Out-of-band management, because it uses a separate path independent of production traffic", choices: ["Out-of-band management, because it uses a separate path independent of production traffic","In-band management, because it shares the production data path","Clientless VPN, because it runs in a browser","Split-tunnel VPN, because only some traffic is tunneled"], meta: "In-band vs Out-of-band — 3.5" },
  { text: "An administrator SSHes into a <strong>console/terminal server</strong> that has serial connections to each device's console port, letting them manage gear over a path separate from production. This combines SSH with which management method?", answer: "Out-of-band management", choices: ["Out-of-band management","In-band management","Full-tunnel VPN","Clientless VPN"], meta: "Scenario — 3.5" },
];

// ======================================================
//  DATA -- Basic Network Security Concepts (4.1)
// ======================================================

const SECURITY_QUESTIONS = [
  // ── CIA triad ──
  { text: "In the <strong>CIA triad</strong>, what does <strong>Confidentiality</strong> ensure?", answer: "That information is accessible only to authorized parties", choices: ["That information is accessible only to authorized parties","That information is not altered by unauthorized parties","That information and systems are available when needed","That every action can be traced to a user"], meta: "CIA Triad — 4.1" },
  { text: "In the <strong>CIA triad</strong>, what does <strong>Integrity</strong> ensure?", answer: "That data is not modified or corrupted by unauthorized parties", choices: ["That data is not modified or corrupted by unauthorized parties","That data is kept secret from unauthorized parties","That data is available on demand","That users cannot deny their actions"], meta: "CIA Triad — 4.1" },
  { text: "In the <strong>CIA triad</strong>, what does <strong>Availability</strong> ensure?", answer: "That systems and data are accessible to authorized users when needed", choices: ["That systems and data are accessible to authorized users when needed","That data cannot be read by unauthorized parties","That data cannot be altered undetected","That all traffic is encrypted"], meta: "CIA Triad — 4.1" },
  { text: "Encrypting a database of customer records so only authorized staff can read it primarily protects which part of the <strong>CIA triad</strong>?", answer: "Confidentiality", choices: ["Confidentiality","Integrity","Availability","Accounting"], meta: "CIA Triad — 4.1" },
  { text: "Using a cryptographic <strong>hash</strong> to detect whether a downloaded file was tampered with primarily protects which part of the CIA triad?", answer: "Integrity", choices: ["Integrity","Confidentiality","Availability","Authentication"], meta: "CIA Triad — 4.1" },
  { text: "Deploying redundant servers and backups so a service stays online during a failure primarily protects which part of the CIA triad?", answer: "Availability", choices: ["Availability","Confidentiality","Integrity","Non-repudiation"], meta: "CIA Triad — 4.1" },

  // ── Risk-related terms ──
  { text: "What is a <strong>vulnerability</strong>?", answer: "A weakness or flaw in a system that could be exploited", choices: ["A weakness or flaw in a system that could be exploited","A person or event that could cause harm","The act of taking advantage of a weakness","The probability and impact of a loss"], meta: "Risk Terms — 4.1" },
  { text: "What is a <strong>threat</strong>?", answer: "A potential danger or actor that could exploit a vulnerability and cause harm", choices: ["A potential danger or actor that could exploit a vulnerability and cause harm","A weakness in a system's design or configuration","The likelihood and impact of a negative event","A control that reduces exposure"], meta: "Risk Terms — 4.1" },
  { text: "What is an <strong>exploit</strong>?", answer: "The method, code, or technique used to take advantage of a vulnerability", choices: ["The method, code, or technique used to take advantage of a vulnerability","A weakness in a system","The potential for loss or damage","A person who attacks a system"], meta: "Risk Terms — 4.1" },
  { text: "What is <strong>risk</strong> in security terms?", answer: "The likelihood that a threat will exploit a vulnerability, combined with the resulting impact", choices: ["The likelihood that a threat will exploit a vulnerability, combined with the resulting impact","A flaw in software or hardware","A piece of code that attacks a weakness","A malicious insider"], meta: "Risk Terms — 4.1" },

  // ── Logical security: encryption ──
  { text: "What does encrypting <strong>data in transit</strong> protect against?", answer: "Interception or eavesdropping of data as it moves across a network", choices: ["Interception or eavesdropping of data as it moves across a network","Theft of a powered-off hard drive","Deletion of files at rest","Physical access to a server room"], meta: "Encryption — 4.1" },
  { text: "Which technology is commonly used to encrypt <strong>data in transit</strong> for web traffic?", answer: "TLS (HTTPS)", choices: ["TLS (HTTPS)","BitLocker","AES-encrypted backup tapes","A hashing algorithm"], meta: "Encryption — 4.1" },
  { text: "What does encrypting <strong>data at rest</strong> protect?", answer: "Stored data on disks, databases, or media if the storage is lost or stolen", choices: ["Stored data on disks, databases, or media if the storage is lost or stolen","Packets travelling across the internet","Data only while it is displayed on screen","Traffic inside a VPN tunnel"], meta: "Encryption — 4.1" },
  { text: "Full-disk encryption on a laptop is an example of protecting data in which state?", answer: "Data at rest", choices: ["Data at rest","Data in transit","Data in use","Data in the cloud"], meta: "Encryption — 4.1" },

  // ── PKI / certificates ──
  { text: "What is <strong>PKI (Public Key Infrastructure)</strong>?", answer: "A framework of certificate authorities, keys, and policies for issuing and managing digital certificates", choices: ["A framework of certificate authorities, keys, and policies for issuing and managing digital certificates","A protocol for assigning IP addresses","A method of load balancing across servers","A type of symmetric encryption cipher"], meta: "PKI / Certificates — 4.1" },
  { text: "What does a <strong>digital certificate</strong> bind together?", answer: "A public key to the verified identity of its owner", choices: ["A public key to the verified identity of its owner","A username to a password","A MAC address to an IP address","A VLAN to a switch port"], meta: "PKI / Certificates — 4.1" },
  { text: "What is the role of a <strong>Certificate Authority (CA)</strong> in PKI?", answer: "A trusted entity that issues and digitally signs certificates, vouching for the holder's identity", choices: ["A trusted entity that issues and digitally signs certificates, vouching for the holder's identity","A server that stores encrypted backups","A device that filters malicious URLs","A protocol that distributes DHCP leases"], meta: "PKI / Certificates — 4.1" },
  { text: "What is a <strong>self-signed certificate</strong>?", answer: "A certificate signed by its own creator rather than by a trusted third-party certificate authority", choices: ["A certificate signed by its own creator rather than by a trusted third-party certificate authority","A certificate issued by a public root CA like DigiCert","A certificate that never expires","A certificate that contains only a private key"], meta: "PKI / Certificates — 4.1" },
  { text: "Why do web browsers typically warn users about a <strong>self-signed certificate</strong>?", answer: "Because it is not signed by a trusted CA, so the server's identity cannot be independently verified", choices: ["Because it is not signed by a trusted CA, so the server's identity cannot be independently verified","Because it uses weaker encryption than CA-issued certificates","Because it cannot encrypt traffic at all","Because it always contains an expired date"], meta: "PKI / Certificates — 4.1" },
  { text: "When is a <strong>self-signed certificate</strong> generally an acceptable choice?", answer: "For internal, testing, or lab systems where an external trust chain isn't required", choices: ["For internal, testing, or lab systems where an external trust chain isn't required","For a public e-commerce website processing payments","For any internet-facing service accessed by the general public","Whenever a CA-issued certificate is available but slower to obtain"], meta: "PKI / Certificates — 4.1" },

  // ── IAM: authentication factors / MFA ──
  { text: "What is <strong>multifactor authentication (MFA)</strong>?", answer: "Requiring two or more independent factors from different categories (something you know, have, or are)", choices: ["Requiring two or more independent factors from different categories (something you know, have, or are)","Requiring two different passwords","Logging in once to access many systems","Encrypting credentials in transit"], meta: "IAM — 4.1" },
  { text: "A login that requires a password <em>and</em> a code from a hardware token is combining which two authentication factors?", answer: "Something you know and something you have", choices: ["Something you know and something you have","Something you know and something you know","Something you are and somewhere you are","Something you have and something you have"], meta: "IAM — 4.1" },
  { text: "A fingerprint scan is an example of which authentication factor?", answer: "Something you are (inherence/biometric)", choices: ["Something you are (inherence/biometric)","Something you know","Something you have","Somewhere you are"], meta: "IAM — 4.1" },

  // ── IAM: SSO ──
  { text: "What is <strong>single sign-on (SSO)</strong>?", answer: "Authenticating once to gain access to multiple independent systems without logging in again", choices: ["Authenticating once to gain access to multiple independent systems without logging in again","Requiring multiple factors to log in","Signing every packet with a certificate","Using one password that is the same everywhere"], meta: "IAM — 4.1" },

  // ── IAM: RADIUS / TACACS+ / LDAP / SAML ──
  { text: "What is <strong>RADIUS</strong> primarily used for?", answer: "Centralized AAA (authentication, authorization, and accounting) for network access", choices: ["Centralized AAA (authentication, authorization, and accounting) for network access","Encrypting files stored on disk","Resolving hostnames to IP addresses","Distributing IP addresses to clients"], meta: "IAM — 4.1" },
  { text: "Which AAA protocol is Cisco-developed, uses <strong>TCP port 49</strong>, separates authentication/authorization/accounting, and encrypts the entire packet payload?", answer: "TACACS+", choices: ["TACACS+","RADIUS","LDAP","SAML"], meta: "IAM — 4.1" },
  { text: "A key difference between <strong>TACACS+</strong> and <strong>RADIUS</strong> is that:", answer: "TACACS+ encrypts the full payload and separates AAA functions, while RADIUS encrypts only the password and combines authentication with authorization", choices: ["TACACS+ encrypts the full payload and separates AAA functions, while RADIUS encrypts only the password and combines authentication with authorization","RADIUS uses TCP while TACACS+ uses UDP exclusively","RADIUS is Cisco-proprietary and TACACS+ is an open standard","TACACS+ cannot perform accounting"], meta: "IAM — 4.1" },
  { text: "What is <strong>LDAP</strong> used for?", answer: "Querying and modifying a directory service of users, groups, and resources", choices: ["Querying and modifying a directory service of users, groups, and resources","Encrypting web traffic","Assigning VLAN tags","Tunneling remote-access VPNs"], meta: "IAM — 4.1" },
  { text: "What is <strong>SAML</strong> commonly used for?", answer: "Exchanging XML-based authentication/authorization assertions for federated single sign-on between web applications", choices: ["Exchanging XML-based authentication/authorization assertions for federated single sign-on between web applications","Encrypting data at rest on a database","Assigning IP addresses to hosts","Detecting intrusions on a network"], meta: "IAM — 4.1" },

  // ── IAM: time-based auth ──
  { text: "What is <strong>time-based authentication</strong>?", answer: "Restricting or granting access based on time conditions, such as permitted login hours or a time-limited one-time code", choices: ["Restricting or granting access based on time conditions, such as permitted login hours or a time-limited one-time code","Requiring a fingerprint at login","Encrypting credentials with a timestamp only","Allowing access only from a specific IP address"], meta: "IAM — 4.1" },

  // ── Authorization: least privilege / RBAC ──
  { text: "What does the principle of <strong>least privilege</strong> state?", answer: "Users and processes should be granted only the minimum access needed to perform their tasks", choices: ["Users and processes should be granted only the minimum access needed to perform their tasks","Every user should have administrator rights for convenience","Access should be granted based on network location","All users get the same baseline permissions"], meta: "Authorization — 4.1" },
  { text: "What is <strong>role-based access control (RBAC)</strong>?", answer: "Granting permissions based on a user's assigned role or job function rather than to each individual", choices: ["Granting permissions based on a user's assigned role or job function rather than to each individual","Granting access based on the time of day","Assigning permissions randomly to reduce predictability","Allowing users to set their own permissions"], meta: "Authorization — 4.1" },

  // ── Geofencing ──
  { text: "What is <strong>geofencing</strong> in a security context?", answer: "Using a device's geographic location to allow or restrict access within a defined virtual boundary", choices: ["Using a device's geographic location to allow or restrict access within a defined virtual boundary","Encrypting traffic based on region","Physically fencing off a data center","Assigning IP addresses by country"], meta: "IAM — 4.1" },

  // ── Physical security ──
  { text: "How do <strong>security cameras (CCTV)</strong> contribute to physical security?", answer: "They deter intruders and provide monitoring and a recorded record of physical activity", choices: ["They deter intruders and provide monitoring and a recorded record of physical activity","They encrypt data leaving the building","They authenticate users to the network","They filter malicious network traffic"], meta: "Physical Security — 4.1" },
  { text: "Which control is a <strong>physical security</strong> measure for protecting network equipment?", answer: "Door and cabinet locks restricting access to equipment", choices: ["Door and cabinet locks restricting access to equipment","An access control list on a router","Full-disk encryption","A firewall rule"], meta: "Physical Security — 4.1" },

  // ── Deception: honeypot / honeynet ──
  { text: "What is a <strong>honeypot</strong>?", answer: "A decoy system designed to attract attackers and study their behavior away from real assets", choices: ["A decoy system designed to attract attackers and study their behavior away from real assets","A hardened server that stores encryption keys","A backup site used during disasters","A firewall that blocks all inbound traffic"], meta: "Deception — 4.1" },
  { text: "What is a <strong>honeynet</strong>?", answer: "A network of multiple honeypots that simulates a realistic environment to lure and observe attackers", choices: ["A network of multiple honeypots that simulates a realistic environment to lure and observe attackers","A VLAN reserved for guest users","A mesh of wireless access points","An encrypted tunnel between two sites"], meta: "Deception — 4.1" },

  // ── Compliance: data locality / PCI DSS / GDPR ──
  { text: "What does <strong>data locality</strong> (data residency) refer to in compliance?", answer: "Requirements that data be stored and processed within a specific geographic or jurisdictional boundary", choices: ["Requirements that data be stored and processed within a specific geographic or jurisdictional boundary","Storing data as close to the user as possible for speed","Keeping all data on a single local server","Caching frequently used data locally"], meta: "Compliance — 4.1" },
  { text: "What does <strong>PCI DSS</strong> regulate?", answer: "The secure handling, processing, and storage of payment card (credit/debit) data", choices: ["The secure handling, processing, and storage of payment card (credit/debit) data","The privacy of EU residents' personal data","The protection of healthcare records","Government classified information"], meta: "Compliance — 4.1" },
  { text: "What is the primary focus of the <strong>GDPR</strong>?", answer: "Protecting the personal data and privacy rights of individuals in the European Union", choices: ["Protecting the personal data and privacy rights of individuals in the European Union","Securing credit card transactions worldwide","Regulating US healthcare data","Setting encryption standards for the military"], meta: "Compliance — 4.1" },

  // ── Segmentation: IoT/IIoT, SCADA/ICS/OT, Guest, BYOD ──
  { text: "Why is <strong>network segmentation</strong> a recommended security practice?", answer: "It isolates systems into separate zones, limiting the spread of an attack and reducing the attack surface", choices: ["It isolates systems into separate zones, limiting the spread of an attack and reducing the attack surface","It increases overall bandwidth on the LAN","It removes the need for firewalls","It encrypts all internal traffic automatically"], meta: "Segmentation — 4.1" },
  { text: "Why are <strong>IoT/IIoT</strong> devices commonly placed on a <strong>segmented</strong> network?", answer: "They are often less secure and infrequently patched, so isolating them limits the risk to critical systems", choices: ["They are often less secure and infrequently patched, so isolating them limits the risk to critical systems","They require more bandwidth than other devices","They cannot use IP addresses","They must share a VLAN with servers"], meta: "Segmentation — 4.1" },
  { text: "What are <strong>SCADA/ICS/OT</strong> systems, and why are they segmented?", answer: "Operational-technology/industrial control systems that manage physical processes; they are isolated because compromise can affect safety and they are hard to patch", choices: ["Operational-technology/industrial control systems that manage physical processes; they are isolated because compromise can affect safety and they are hard to patch","Cloud storage services segmented for billing","Guest wireless portals for visitors","Backup appliances kept on a separate VLAN for speed"], meta: "Segmentation — 4.1" },
  { text: "Why should a <strong>guest network</strong> be segmented from the internal corporate network?", answer: "To keep untrusted visitor devices from reaching internal systems and data", choices: ["To keep untrusted visitor devices from reaching internal systems and data","To give guests faster internet than employees","To avoid assigning guests IP addresses","To force all guest traffic through a VPN"], meta: "Segmentation — 4.1" },
  { text: "In the context of segmentation, what does <strong>BYOD</strong> refer to?", answer: "Bring Your Own Device — personal devices that are often segmented onto a separate network due to lower trust", choices: ["Bring Your Own Device — personal devices that are often segmented onto a separate network due to lower trust","Build Your Own Domain — a private DNS zone","Backup Your Own Data — a user backup policy","Bring Your Own Data — a data-migration process"], meta: "Segmentation — 4.1" },
];

// ======================================================
//  DATA -- Attack Types (4.2)
// ======================================================

const ATTACK_QUESTIONS = [
  // ── DoS / DDoS ──
  { text: "What is a <strong>denial-of-service (DoS)</strong> attack?", answer: "An attack that floods or overwhelms a system or service so it becomes unavailable to legitimate users", choices: ["An attack that floods or overwhelms a system or service so it becomes unavailable to legitimate users","An attack that secretly reads data as it crosses the network","An attack that alters a device's ARP cache","An attack that tricks a user into revealing credentials"], meta: "DoS/DDoS — 4.2" },
  { text: "How does a <strong>distributed denial-of-service (DDoS)</strong> attack differ from a standard DoS attack?", answer: "The attack traffic originates from many compromised hosts (a botnet) at once rather than a single source", choices: ["The attack traffic originates from many compromised hosts (a botnet) at once rather than a single source","It targets only wireless networks","It encrypts the victim's files for ransom","It only works against DNS servers"], meta: "DoS/DDoS — 4.2" },
  { text: "What is the primary <strong>impact</strong> of a successful DoS/DDoS attack on a network?", answer: "Loss of availability — legitimate users cannot reach the targeted service", choices: ["Loss of availability — legitimate users cannot reach the targeted service","Silent theft of confidential data","Permanent modification of stored records","Unauthorized privilege escalation"], meta: "DoS/DDoS — 4.2" },
  { text: "A network of malware-infected computers remotely controlled to launch a DDoS is called a:", answer: "Botnet", choices: ["Botnet","Honeynet","Screened subnet","Broadcast domain"], meta: "DoS/DDoS — 4.2" },

  // ── VLAN hopping ──
  { text: "What is a <strong>VLAN hopping</strong> attack?", answer: "An attack that lets a device send or receive traffic on a VLAN it should not have access to", choices: ["An attack that lets a device send or receive traffic on a VLAN it should not have access to","An attack that exhausts a DHCP scope","An attack that floods a switch's MAC address table","An attack that forges ARP replies"], meta: "VLAN Hopping — 4.2" },
  { text: "Which two techniques are commonly used to perform <strong>VLAN hopping</strong>?", answer: "Switch spoofing (negotiating a trunk) and double tagging (nested 802.1Q tags)", choices: ["Switch spoofing (negotiating a trunk) and double tagging (nested 802.1Q tags)","MAC flooding and ARP poisoning","DNS spoofing and DHCP starvation","Phishing and tailgating"], meta: "VLAN Hopping — 4.2" },
  { text: "In a <strong>double-tagging</strong> VLAN hopping attack, the attacker relies on the switch stripping which tag first?", answer: "The outer tag matching the native VLAN, leaving the inner tag to reach the target VLAN", choices: ["The outer tag matching the native VLAN, leaving the inner tag to reach the target VLAN","The inner tag, discarding the frame entirely","Both tags simultaneously","Neither tag, forwarding the frame unchanged"], meta: "VLAN Hopping — 4.2" },
  { text: "What is the <strong>impact</strong> of a successful VLAN hopping attack?", answer: "It bypasses network segmentation, letting the attacker reach hosts and data on a VLAN they were meant to be isolated from", choices: ["It bypasses network segmentation, letting the attacker reach hosts and data on a VLAN they were meant to be isolated from","It permanently erases the switch's configuration","It disables Power over Ethernet on all ports","It encrypts traffic between two trunk ports"], meta: "VLAN Hopping — 4.2" },

  // ── MAC flooding ──
  { text: "What is a <strong>MAC flooding</strong> attack?", answer: "Overwhelming a switch's MAC address table with bogus addresses so it fails open and floods frames out all ports", choices: ["Overwhelming a switch's MAC address table with bogus addresses so it fails open and floods frames out all ports","Sending forged ARP replies to poison the ARP cache","Exhausting a DHCP server's address pool","Redirecting DNS lookups to a malicious server"], meta: "MAC Flooding — 4.2" },
  { text: "What is the attacker's goal in a <strong>MAC flooding</strong> attack?", answer: "To force the switch to broadcast frames out all ports so the attacker can capture traffic meant for others", choices: ["To force the switch to broadcast frames out all ports so the attacker can capture traffic meant for others","To crash the switch's power supply","To assign the attacker a trusted VLAN","To spoof the default gateway's IP address"], meta: "MAC Flooding — 4.2" },
  { text: "When a switch's CAM table is overflowed by MAC flooding, it begins behaving like which device?", answer: "A hub, flooding all frames out every port", choices: ["A hub, flooding all frames out every port","A router, dropping all broadcast traffic","A firewall, blocking unknown MACs","A load balancer, distributing frames evenly"], meta: "MAC Flooding — 4.2" },
  { text: "What is the <strong>impact</strong> of a MAC flooding attack on network confidentiality?", answer: "Frames intended for specific hosts are flooded out all ports, letting the attacker sniff traffic that should have stayed private", choices: ["Frames intended for specific hosts are flooded out all ports, letting the attacker sniff traffic that should have stayed private","All VLAN tags are stripped from every frame","The switch reassigns every port to the native VLAN","Routing tables are silently overwritten"], meta: "MAC Flooding — 4.2" },

  // ── ARP poisoning / spoofing ──
  { text: "What is <strong>ARP poisoning (ARP spoofing)</strong>?", answer: "Sending forged ARP messages to associate the attacker's MAC with another host's IP, redirecting traffic", choices: ["Sending forged ARP messages to associate the attacker's MAC with another host's IP, redirecting traffic","Flooding a switch's MAC table with random addresses","Overwhelming a server with traffic from many hosts","Impersonating a legitimate wireless access point"], meta: "ARP Poisoning — 4.2" },
  { text: "ARP poisoning most commonly enables which follow-on attack?", answer: "An on-path (man-in-the-middle) attack that intercepts traffic between two hosts", choices: ["An on-path (man-in-the-middle) attack that intercepts traffic between two hosts","A DHCP scope exhaustion","A double-tagged VLAN hop","A brute-force password attack"], meta: "ARP Poisoning — 4.2" },
  { text: "Why is <strong>ARP</strong> vulnerable to spoofing?", answer: "ARP has no authentication, so hosts accept unsolicited ARP replies and update their cache", choices: ["ARP has no authentication, so hosts accept unsolicited ARP replies and update their cache","ARP encrypts replies with a weak cipher","ARP relies on DNS for name resolution","ARP only works across routed subnets"], meta: "ARP Poisoning — 4.2" },

  // ── DNS poisoning / spoofing ──
  { text: "What is <strong>DNS poisoning (DNS spoofing)</strong>?", answer: "Corrupting DNS data so a hostname resolves to an attacker-controlled IP address", choices: ["Corrupting DNS data so a hostname resolves to an attacker-controlled IP address","Flooding a DNS server so it stops responding","Encrypting DNS queries to hide them","Registering many similar domain names"], meta: "DNS Poisoning — 4.2" },
  { text: "What is the typical <strong>impact</strong> of a successful DNS spoofing attack on users?", answer: "Users are silently redirected to malicious sites even when typing the correct domain name", choices: ["Users are silently redirected to malicious sites even when typing the correct domain name","Users lose all internet connectivity immediately","Users' files are encrypted for ransom","Users' switch ports are disabled"], meta: "DNS Poisoning — 4.2" },
  { text: "Which technology best defends against DNS cache poisoning by authenticating DNS records?", answer: "DNSSEC", choices: ["DNSSEC","MAC filtering","802.1X","Port security"], meta: "DNS Poisoning — 4.2" },

  // ── Rogue DHCP / Rogue AP ──
  { text: "What is a <strong>rogue DHCP server</strong> attack?", answer: "An unauthorized DHCP server that hands out incorrect IP settings, often pointing clients to a malicious gateway or DNS", choices: ["An unauthorized DHCP server that hands out incorrect IP settings, often pointing clients to a malicious gateway or DNS","A DHCP server that runs out of available addresses","A switch feature that blocks DHCP traffic","A DNS server that caches poisoned records"], meta: "Rogue DHCP/AP — 4.2" },
  { text: "Which switch security feature is designed to stop <strong>rogue DHCP servers</strong>?", answer: "DHCP snooping, which permits DHCP offers only from trusted ports", choices: ["DHCP snooping, which permits DHCP offers only from trusted ports","MAC flooding protection","Spanning tree BPDU guard","DNS over HTTPS"], meta: "Rogue DHCP/AP — 4.2" },
  { text: "What is the <strong>impact</strong> on clients that accept a lease from a rogue DHCP server?", answer: "They receive attacker-controlled gateway/DNS settings, enabling traffic interception or redirection, and may lose connectivity", choices: ["They receive attacker-controlled gateway/DNS settings, enabling traffic interception or redirection, and may lose connectivity","They are automatically moved to a more secure VLAN","Their traffic is transparently encrypted end-to-end","Their switch ports are hardened against future attacks"], meta: "Rogue DHCP/AP — 4.2" },
  { text: "What is a <strong>rogue access point</strong>?", answer: "An unauthorized wireless AP connected to the network, creating an unsecured entry point", choices: ["An unauthorized wireless AP connected to the network, creating an unsecured entry point","A properly configured guest AP with a captive portal","An AP that has failed and stopped broadcasting","A controller-managed lightweight AP"], meta: "Rogue DHCP/AP — 4.2" },

  // ── Evil twin ──
  { text: "What is an <strong>evil twin</strong> attack?", answer: "A malicious access point that mimics a legitimate SSID to trick users into connecting to it", choices: ["A malicious access point that mimics a legitimate SSID to trick users into connecting to it","A duplicate DHCP server on the same subnet","Two switches with the same MAC address","A cloned MAC address on a wired port"], meta: "Evil Twin — 4.2" },
  { text: "How does an <strong>evil twin</strong> differ from a generic rogue AP?", answer: "An evil twin specifically impersonates a trusted SSID to lure users, often to capture credentials or intercept traffic", choices: ["An evil twin specifically impersonates a trusted SSID to lure users, often to capture credentials or intercept traffic","An evil twin is always authorized by IT","An evil twin only affects wired networks","An evil twin cannot intercept any traffic"], meta: "Evil Twin — 4.2" },
  { text: "What is the <strong>impact</strong> when a user connects to an evil twin AP?", answer: "Their wireless traffic passes through the attacker, who can capture credentials and sensitive data or serve malicious content", choices: ["Their wireless traffic passes through the attacker, who can capture credentials and sensitive data or serve malicious content","Their device is automatically patched against vulnerabilities","Their connection speed is doubled","Their traffic is routed through a trusted corporate proxy"], meta: "Evil Twin — 4.2" },

  // ── On-path attack ──
  { text: "What is an <strong>on-path attack</strong> (formerly man-in-the-middle)?", answer: "An attacker secretly positions themselves between two communicating parties to intercept or alter traffic", choices: ["An attacker secretly positions themselves between two communicating parties to intercept or alter traffic","An attacker floods a target with traffic to take it offline","An attacker guesses passwords repeatedly","An attacker physically follows an employee through a door"], meta: "On-Path — 4.2" },
  { text: "Which of these techniques can be used to set up an <strong>on-path attack</strong>?", answer: "ARP poisoning to redirect a victim's traffic through the attacker", choices: ["ARP poisoning to redirect a victim's traffic through the attacker","MAC flooding to disable the switch permanently","A tabletop exercise","DHCP reservation"], meta: "On-Path — 4.2" },
  { text: "What is the <strong>impact</strong> of a successful on-path attack?", answer: "The attacker can eavesdrop on, capture, or modify data exchanged between the two parties, breaking confidentiality and integrity", choices: ["The attacker can eavesdrop on, capture, or modify data exchanged between the two parties, breaking confidentiality and integrity","The targeted service becomes permanently unavailable","The switch's MAC table is wiped clean","All affected hosts lose their IP addresses"], meta: "On-Path — 4.2" },

  // ── Social engineering: phishing ──
  { text: "What is <strong>phishing</strong>?", answer: "Sending fraudulent messages that appear legitimate to trick users into revealing credentials or clicking malicious links", choices: ["Sending fraudulent messages that appear legitimate to trick users into revealing credentials or clicking malicious links","Intercepting traffic between two hosts","Flooding a switch's MAC table","Impersonating a wireless access point"], meta: "Social Engineering — 4.2" },
  { text: "Phishing, dumpster diving, shoulder surfing, and tailgating are all examples of what category of attack?", answer: "Social engineering — manipulating people rather than exploiting technical flaws", choices: ["Social engineering — manipulating people rather than exploiting technical flaws","Denial-of-service attacks","Layer 2 switching attacks","Cryptographic attacks"], meta: "Social Engineering — 4.2" },

  // ── Social engineering: dumpster diving ──
  { text: "What is <strong>dumpster diving</strong> as a social-engineering technique?", answer: "Searching through discarded trash to find sensitive information such as documents, notes, or hardware", choices: ["Searching through discarded trash to find sensitive information such as documents, notes, or hardware","Watching someone type their password over their shoulder","Following an employee through a secured door","Sending a fraudulent email to harvest credentials"], meta: "Social Engineering — 4.2" },

  // ── Social engineering: shoulder surfing ──
  { text: "What is <strong>shoulder surfing</strong>?", answer: "Observing a person's screen or keyboard from nearby to steal passwords or other sensitive data", choices: ["Observing a person's screen or keyboard from nearby to steal passwords or other sensitive data","Digging through trash for discarded documents","Impersonating IT staff over the phone","Redirecting DNS queries to a fake site"], meta: "Social Engineering — 4.2" },

  // ── Social engineering: tailgating ──
  { text: "What is <strong>tailgating</strong> in physical security?", answer: "Following an authorized person through a secured door to gain entry without valid credentials", choices: ["Following an authorized person through a secured door to gain entry without valid credentials","Flooding a network with excessive traffic","Reading data over an attacker's shoulder","Sending mass fraudulent emails"], meta: "Social Engineering — 4.2" },

  // ── Malware ──
  { text: "What is <strong>malware</strong>?", answer: "Malicious software designed to damage, disrupt, or gain unauthorized access to a system", choices: ["Malicious software designed to damage, disrupt, or gain unauthorized access to a system","A misconfigured but legitimate application","A hardware failure in a network device","An outdated but harmless driver"], meta: "Malware — 4.2" },
  { text: "Which of the following is a common <strong>type of malware</strong>?", answer: "Ransomware, which encrypts a victim's files and demands payment for the key", choices: ["Ransomware, which encrypts a victim's files and demands payment for the key","A screened subnet placed between two firewalls","An 802.1X authentication server","A DHCP reservation for a printer"], meta: "Malware — 4.2" },
  { text: "A piece of malware that disguises itself as legitimate software to trick a user into installing it is a:", answer: "Trojan (Trojan horse)", choices: ["Trojan (Trojan horse)","Worm","Rootkit","Logic bomb"], meta: "Malware — 4.2" },
  { text: "Which malware type <strong>self-replicates and spreads across a network without user interaction</strong>?", answer: "Worm", choices: ["Worm","Virus","Trojan","Spyware"], meta: "Malware — 4.2" },
];

// ======================================================
//  DATA -- Security Features, Defense Techniques, Solutions (4.3)
// ======================================================

const DEFENSE_QUESTIONS = [
  // ── Device hardening ──
  { text: "What is <strong>device hardening</strong>?", answer: "Reducing a device's attack surface by disabling unnecessary features and applying secure configurations", choices: ["Reducing a device's attack surface by disabling unnecessary features and applying secure configurations","Physically bolting a device into a locked rack","Encrypting all traffic leaving the device","Installing redundant power supplies for uptime"], meta: "Device Hardening — 4.3" },
  { text: "Why should you <strong>disable unused ports and services</strong> on a network device?", answer: "Every open port or running service is a potential entry point, so disabling them reduces the attack surface", choices: ["Every open port or running service is a potential entry point, so disabling them reduces the attack surface","It increases the device's total throughput","It is required to enable jumbo frames","It automatically encrypts management traffic"], meta: "Device Hardening — 4.3" },
  { text: "Which of the following is a fundamental <strong>device hardening</strong> step for any new switch or router?", answer: "Change the default administrator password", choices: ["Change the default administrator password","Leave the default password so IT can recover it easily","Enable every available service by default","Disable logging to save storage"], meta: "Device Hardening — 4.3" },
  { text: "Why is it critical to <strong>change default passwords</strong> on network devices?", answer: "Default credentials are publicly documented and are among the first things attackers try", choices: ["Default credentials are publicly documented and are among the first things attackers try","Default passwords slow down the CPU","Default passwords cannot be typed remotely","Changing them enables Power over Ethernet"], meta: "Device Hardening — 4.3" },
  { text: "Disabling an unused physical switch port helps prevent which of the following?", answer: "An unauthorized user plugging into an open jack and gaining network access", choices: ["An unauthorized user plugging into an open jack and gaining network access","A broadcast storm on the trunk uplink","A duplicate IP address on the subnet","A spanning tree root bridge election"], meta: "Device Hardening — 4.3" },

  // ── NAC: general ──
  { text: "What is the purpose of <strong>Network Access Control (NAC)</strong>?", answer: "To authenticate and evaluate devices before granting them access to the network", choices: ["To authenticate and evaluate devices before granting them access to the network","To balance traffic load across multiple servers","To compress data before it crosses the WAN","To assign IP addresses from a DHCP scope"], meta: "NAC — 4.3" },

  // ── NAC: port security ──
  { text: "What does switch <strong>port security</strong> do?", answer: "Restricts which and how many MAC addresses are allowed to send traffic on a switch port", choices: ["Restricts which and how many MAC addresses are allowed to send traffic on a switch port","Encrypts all frames leaving the port","Assigns the port to the correct VLAN automatically","Increases the port's speed and duplex"], meta: "NAC — 4.3" },
  { text: "Which attack is <strong>port security</strong> most directly designed to mitigate?", answer: "MAC flooding (CAM table overflow) by limiting the number of MAC addresses per port", choices: ["MAC flooding (CAM table overflow) by limiting the number of MAC addresses per port","DNS cache poisoning","A phishing campaign","A distributed denial-of-service flood"], meta: "NAC — 4.3" },
  { text: "A <strong>sticky MAC</strong> address in port security refers to:", answer: "A dynamically learned MAC that the switch saves so only that device is permitted on the port", choices: ["A dynamically learned MAC that the switch saves so only that device is permitted on the port","A MAC address that changes every few seconds","A broadcast MAC used for flooding","A MAC reserved for the default gateway"], meta: "NAC — 4.3" },
  { text: "When a port-security violation occurs, a port in the default <strong>shutdown</strong> violation mode will:", answer: "Enter an error-disabled state and stop forwarding traffic", choices: ["Enter an error-disabled state and stop forwarding traffic","Silently allow the traffic but log it","Automatically move the device to a guest VLAN","Reboot the entire switch"], meta: "NAC — 4.3" },

  // ── NAC: 802.1X ──
  { text: "What is <strong>802.1X</strong>?", answer: "A port-based network access control standard that authenticates devices before allowing them onto the network", choices: ["A port-based network access control standard that authenticates devices before allowing them onto the network","A wireless encryption cipher","A routing protocol for large networks","A cabling standard for 10 Gbps Ethernet"], meta: "NAC — 4.3" },
  { text: "In an <strong>802.1X</strong> deployment, the device requesting access (e.g., a laptop) is called the:", answer: "Supplicant", choices: ["Supplicant","Authenticator","Authentication server","Certificate authority"], meta: "NAC — 4.3" },
  { text: "In <strong>802.1X</strong>, which component is the switch or wireless AP that controls port access?", answer: "The authenticator", choices: ["The authenticator","The supplicant","The RADIUS server","The domain controller"], meta: "NAC — 4.3" },
  { text: "Which server role most commonly acts as the <strong>authentication server</strong> in an 802.1X design?", answer: "A RADIUS server", choices: ["A RADIUS server","A DHCP server","A DNS resolver","An NTP server"], meta: "NAC — 4.3" },

  // ── NAC: MAC filtering ──
  { text: "What is <strong>MAC filtering</strong>?", answer: "Permitting or denying network access based on a device's hardware (MAC) address", choices: ["Permitting or denying network access based on a device's hardware (MAC) address","Filtering packets based on destination TCP port","Blocking websites by URL category","Encrypting frames based on their MAC address"], meta: "NAC — 4.3" },
  { text: "Why is <strong>MAC filtering</strong> considered a weak stand-alone security control?", answer: "MAC addresses can be easily spoofed, so an attacker can copy an allowed MAC to bypass it", choices: ["MAC addresses can be easily spoofed, so an attacker can copy an allowed MAC to bypass it","MAC addresses change every time a device reboots","It requires a certificate authority to function","It only works on fiber connections"], meta: "NAC — 4.3" },

  // ── Key management ──
  { text: "What is <strong>key management</strong> in network security?", answer: "The processes for generating, distributing, storing, rotating, and revoking cryptographic keys", choices: ["The processes for generating, distributing, storing, rotating, and revoking cryptographic keys","The practice of assigning static IP addresses to servers","A method of labeling patch panel ports","The scheduling of firmware upgrades"], meta: "Key Management — 4.3" },
  { text: "Why is proper <strong>key rotation</strong> an important part of key management?", answer: "Periodically replacing keys limits how much data is exposed if a key is ever compromised", choices: ["Periodically replacing keys limits how much data is exposed if a key is ever compromised","It increases the length of every packet","It removes the need for firewalls","It speeds up DNS resolution"], meta: "Key Management — 4.3" },
  { text: "Under sound key management, what should happen to a cryptographic key that is suspected of being <strong>compromised</strong>?", answer: "It should be revoked immediately and replaced with a new key", choices: ["It should be revoked immediately and replaced with a new key","It should be shortened to make it harder to guess","It should be emailed to all users for transparency","It should be reused with a different algorithm"], meta: "Key Management — 4.3" },
  { text: "Following key management best practices, how should <strong>private keys</strong> be stored?", answer: "Protected in a secure store such as a hardware security module (HSM) or encrypted keystore, never in plaintext", choices: ["Protected in a secure store such as a hardware security module (HSM) or encrypted keystore, never in plaintext","In a shared spreadsheet so the team can access them","Hard-coded in the application's source code","Printed and posted in the server room"], meta: "Key Management — 4.3" },

  // ── Security rules: ACL ──
  { text: "What is an <strong>access control list (ACL)</strong> on a router or firewall?", answer: "An ordered set of permit/deny rules that filter traffic based on criteria such as IP address, port, or protocol", choices: ["An ordered set of permit/deny rules that filter traffic based on criteria such as IP address, port, or protocol","A list of MAC addresses learned by a switch","A directory of usernames and passwords","A table mapping hostnames to IP addresses"], meta: "Security Rules — 4.3" },
  { text: "Most ACLs end with an implicit rule that does what to any traffic not explicitly permitted?", answer: "Denies it (implicit deny at the end of the list)", choices: ["Denies it (implicit deny at the end of the list)","Permits it by default","Logs it and forwards it","Encrypts it automatically"], meta: "Security Rules — 4.3" },
  { text: "Because ACLs are processed <strong>top-down</strong>, why does rule order matter?", answer: "The first matching rule is applied, so a broad rule placed too early can override more specific rules below it", choices: ["The first matching rule is applied, so a broad rule placed too early can override more specific rules below it","Rules are processed randomly each time","Only the last rule in the list is ever evaluated","Order has no effect on how ACLs are applied"], meta: "Security Rules — 4.3" },

  // ── Security rules: URL filtering ──
  { text: "What does <strong>URL filtering</strong> do?", answer: "Allows or blocks access to specific websites based on their URL or web address", choices: ["Allows or blocks access to specific websites based on their URL or web address","Filters traffic based on the source MAC address","Encrypts DNS queries between client and resolver","Assigns VLANs based on the destination URL"], meta: "Security Rules — 4.3" },

  // ── Security rules: content filtering ──
  { text: "What does <strong>content filtering</strong> do?", answer: "Blocks or allows traffic based on the content or category of the material, such as adult, gambling, or malware sites", choices: ["Blocks or allows traffic based on the content or category of the material, such as adult, gambling, or malware sites","Compresses web pages to save bandwidth","Balances requests across web servers","Caches frequently visited pages locally"], meta: "Security Rules — 4.3" },
  { text: "How does <strong>content filtering</strong> generally differ from URL filtering?", answer: "Content filtering blocks by category or the actual content/keywords, while URL filtering blocks specific web addresses", choices: ["Content filtering blocks by category or the actual content/keywords, while URL filtering blocks specific web addresses","Content filtering only works on encrypted traffic","URL filtering inspects packet payloads while content filtering does not","They are two names for the exact same feature"], meta: "Security Rules — 4.3" },

  // ── Zones: trusted vs. untrusted ──
  { text: "In firewall design, what is a <strong>trusted zone</strong>?", answer: "The internal network segment that is under organizational control and considered relatively secure", choices: ["The internal network segment that is under organizational control and considered relatively secure","The public internet outside the firewall","A network reserved only for guest Wi-Fi","Any segment that has no firewall protection"], meta: "Security Zones — 4.3" },
  { text: "What is an <strong>untrusted zone</strong>?", answer: "A network such as the public internet that is outside organizational control and treated as hostile", choices: ["A network such as the public internet that is outside organizational control and treated as hostile","The internal LAN behind the firewall","A VLAN dedicated to management traffic","A directly connected loopback interface"], meta: "Security Zones — 4.3" },

  // ── Zones: screened subnet ──
  { text: "What is a <strong>screened subnet</strong> (formerly called a DMZ)?", answer: "A buffer network between the trusted internal LAN and the untrusted internet that hosts public-facing services", choices: ["A buffer network between the trusted internal LAN and the untrusted internet that hosts public-facing services","A VLAN that carries only voice traffic","A subnet reserved for out-of-band management","An encrypted tunnel between two branch offices"], meta: "Security Zones — 4.3" },
  { text: "Which type of server is a good candidate to place in a <strong>screened subnet</strong>?", answer: "A public-facing web or email server that must be reachable from the internet", choices: ["A public-facing web or email server that must be reachable from the internet","The internal Active Directory domain controller","A workstation used by an accountant","The core distribution switch"], meta: "Security Zones — 4.3" },
  { text: "What is the main security benefit of placing public servers in a <strong>screened subnet</strong>?", answer: "If a public server is compromised, the attacker is still isolated from the trusted internal network", choices: ["If a public server is compromised, the attacker is still isolated from the trusted internal network","It doubles the internet bandwidth available to those servers","It removes the need to patch those servers","It allows those servers to skip authentication"], meta: "Security Zones — 4.3" },
];

// ── Troubleshooting Methodology (5.1) ──
const TROUBLESHOOT_QUESTIONS = [
  // ── Overall order of the seven steps ──
  { text: "What is the <strong>first step</strong> of the CompTIA network troubleshooting methodology?", answer: "Identify the problem", choices: ["Identify the problem","Establish a theory of probable cause","Test the theory to determine the cause","Document findings, actions, and outcomes"], meta: "Methodology Order — 5.1" },
  { text: "What is the <strong>last step</strong> of the troubleshooting methodology?", answer: "Document findings, actions, outcomes, and lessons learned", choices: ["Document findings, actions, outcomes, and lessons learned","Verify full system functionality","Implement the solution or escalate","Establish a plan of action"], meta: "Methodology Order — 5.1" },
  { text: "Immediately after you <strong>identify the problem</strong>, what is the next step?", answer: "Establish a theory of probable cause", choices: ["Establish a theory of probable cause","Test the theory to determine the cause","Establish a plan of action","Verify full system functionality"], meta: "Methodology Order — 5.1" },
  { text: "After you <strong>establish a theory of probable cause</strong>, what should you do next?", answer: "Test the theory to determine the cause", choices: ["Test the theory to determine the cause","Establish a plan of action to resolve the problem","Implement the solution","Document the outcome"], meta: "Methodology Order — 5.1" },
  { text: "Once a theory has been <strong>confirmed by testing</strong>, what is the next step?", answer: "Establish a plan of action to resolve the problem and identify potential effects", choices: ["Establish a plan of action to resolve the problem and identify potential effects","Implement the solution immediately without a plan","Document lessons learned","Re-question the users about symptoms"], meta: "Methodology Order — 5.1" },
  { text: "After you <strong>establish a plan of action</strong>, what comes next?", answer: "Implement the solution or escalate as necessary", choices: ["Implement the solution or escalate as necessary","Verify full system functionality","Establish a new theory of probable cause","Document findings and outcomes"], meta: "Methodology Order — 5.1" },
  { text: "After you <strong>implement the solution</strong>, what is the next step before documenting?", answer: "Verify full system functionality and, if applicable, implement preventive measures", choices: ["Verify full system functionality and, if applicable, implement preventive measures","Establish a theory of probable cause","Duplicate the problem","Question the obvious"], meta: "Methodology Order — 5.1" },
  { text: "Which sequence correctly orders the <strong>first three</strong> troubleshooting steps?", answer: "Identify the problem → Establish a theory of probable cause → Test the theory", choices: ["Identify the problem → Establish a theory of probable cause → Test the theory","Establish a theory → Identify the problem → Test the theory","Identify the problem → Test the theory → Establish a theory","Test the theory → Identify the problem → Establish a plan of action"], meta: "Methodology Order — 5.1" },

  // ── Step 1: Identify the problem ──
  { text: "During <strong>Identify the problem</strong>, why should you question users?", answer: "Users can describe symptoms and what they were doing when the issue occurred, providing information you might otherwise miss", choices: ["Users can describe symptoms and what they were doing when the issue occurred, providing information you might otherwise miss","A user's account of the problem confirms the root cause, so the theory needs no further testing","User sign-off is required before any troubleshooting step may begin","Users are responsible for documenting the findings and outcomes of the incident"], meta: "Identify the Problem — 5.1" },
  { text: "As part of identifying the problem, asking <strong>“has anything changed recently?”</strong> helps you to:", answer: "Determine if a recent change (patch, config edit, new device) triggered the issue", choices: ["Determine if a recent change (patch, config edit, new device) triggered the issue","Skip directly to documenting the outcome","Establish a plan of action before knowing the cause","Verify full system functionality"], meta: "Identify the Problem — 5.1" },
  { text: "Within Step 1, what does it mean to <strong>duplicate the problem</strong>?", answer: "Reproduce the issue yourself to confirm the symptoms and observe the conditions that trigger it", choices: ["Reproduce the issue yourself to confirm the symptoms and observe the conditions that trigger it","Make a backup copy of the affected device's configuration","Create a second identical problem on another device","Copy the user's account so you can log in as them"], meta: "Identify the Problem — 5.1" },
  { text: "When several issues are reported at once, the methodology says you should:", answer: "Approach multiple problems individually", choices: ["Approach multiple problems individually","Ignore all but the loudest complaint","Assume they all share one root cause and fix only that","Escalate every problem immediately"], meta: "Identify the Problem — 5.1" },
  { text: "Which activity belongs to <strong>Step 1, Identify the problem</strong>?", answer: "Gathering information and identifying symptoms", choices: ["Gathering information and identifying symptoms","Choosing between a top-down or bottom-up OSI approach","Implementing the fix on the production device","Writing up lessons learned"], meta: "Identify the Problem — 5.1" },

  // ── Step 2: Establish a theory of probable cause ──
  { text: "In <strong>Establish a theory of probable cause</strong>, what does “question the obvious” mean?", answer: "Check simple, common causes first — like an unplugged cable or a disabled interface — before assuming a complex cause", choices: ["Check simple, common causes first — like an unplugged cable or a disabled interface — before assuming a complex cause","Ask the user obvious questions to make them feel involved","Always assume the most complicated cause is correct","Skip testing because the cause is obvious"], meta: "Theory of Cause — 5.1" },
  { text: "Which two troubleshooting <strong>approaches</strong> are called out for forming a theory of probable cause?", answer: "Top-to-bottom/bottom-to-top the OSI model, and divide and conquer", choices: ["Top-to-bottom/bottom-to-top the OSI model, and divide and conquer","Trial and error, and reboot everything","First-in-first-out, and round robin","Active-active, and active-passive"], meta: "Theory of Cause — 5.1" },
  { text: "A technician starts at Layer 1 (cabling) and works upward through the OSI model. Which approach is this?", answer: "Bottom-to-top OSI approach", choices: ["Bottom-to-top OSI approach","Top-to-bottom OSI approach","Divide and conquer","Question the users"], meta: "Theory of Cause — 5.1" },
  { text: "A technician begins at Layer 7 (the application) and works downward through the OSI model. Which approach is this?", answer: "Top-to-bottom OSI approach", choices: ["Top-to-bottom OSI approach","Bottom-to-top OSI approach","Divide and conquer","Duplicating the problem"], meta: "Theory of Cause — 5.1" },
  { text: "What describes the <strong>divide and conquer</strong> approach to forming a theory?", answer: "Start at a middle OSI layer and, based on the result, move up or down to isolate the fault", choices: ["Start at a middle OSI layer and, based on the result, move up or down to isolate the fault","Always start at Layer 1 and test every layer in order","Replace every component until the problem disappears","Split the work among multiple technicians"], meta: "Theory of Cause — 5.1" },

  // ── Step 3: Test the theory ──
  { text: "During <strong>Test the theory to determine the cause</strong>, if the theory is <em>confirmed</em>, what do you do?", answer: "Determine the next steps to resolve the problem", choices: ["Determine the next steps to resolve the problem","Immediately document lessons learned and close the ticket","Assume the network is fully functional again","Reboot every device on the network"], meta: "Test the Theory — 5.1" },
  { text: "During <strong>Test the theory</strong>, if the theory is <em>not confirmed</em>, what should you do?", answer: "Establish a new theory or escalate to someone with more expertise", choices: ["Establish a new theory or escalate to someone with more expertise","Implement the fix anyway and hope it works","Skip ahead and document the outcome","Verify full system functionality"], meta: "Test the Theory — 5.1" },
  { text: "What is the purpose of the <strong>test the theory</strong> step?", answer: "To confirm or rule out the suspected cause before committing to a fix", choices: ["To confirm or rule out the suspected cause before committing to a fix","To permanently resolve the problem","To gather the initial symptoms from users","To write the final incident report"], meta: "Test the Theory — 5.1" },

  // ── Step 4: Establish a plan of action ──
  { text: "In addition to resolving the problem, what must you do when you <strong>establish a plan of action</strong>?", answer: "Identify the potential effects the fix may have", choices: ["Identify the potential effects the fix may have","Guarantee zero downtime is possible","Delete the incident ticket","Skip user notification"], meta: "Plan of Action — 5.1" },
  { text: "Why is identifying <strong>potential effects</strong> part of the plan of action?", answer: "A fix can have side effects or require downtime, so you plan for them before implementing", choices: ["A fix can have side effects or require downtime, so you plan for them before implementing","It is only required for wireless problems","Effects can be ignored once the theory is confirmed","It replaces the need to test the theory"], meta: "Plan of Action — 5.1" },

  // ── Step 5: Implement the solution or escalate ──
  { text: "In the <strong>Implement the solution or escalate</strong> step, when should you escalate?", answer: "When the fix is beyond your authority, expertise, or access to resolve", choices: ["When the fix is beyond your authority, expertise, or access to resolve","Only after the problem has fully resolved itself","Before you have identified any symptoms","Whenever documentation would be tedious"], meta: "Implement or Escalate — 5.1" },
  { text: "Which action best fits the <strong>Implement the solution</strong> step?", answer: "Apply the planned fix to resolve the problem", choices: ["Apply the planned fix to resolve the problem","Form an initial theory of probable cause","Interview users about the symptoms","Reproduce the problem to confirm it"], meta: "Implement or Escalate — 5.1" },

  // ── Step 6: Verify full system functionality ──
  { text: "What should you confirm when you <strong>verify full system functionality</strong>?", answer: "That the original problem is resolved and no new problems were introduced", choices: ["That the original problem is resolved and no new problems were introduced","That the ticket number is spelled correctly","That the user has changed their password","That the OSI model was followed top-down"], meta: "Verify Functionality — 5.1" },
  { text: "The verification step also says to, <em>if applicable</em>, do what?", answer: "Implement preventive measures so the problem does not recur", choices: ["Implement preventive measures so the problem does not recur","Escalate the ticket to a manager","Establish a new theory of probable cause","Re-duplicate the original problem"], meta: "Verify Functionality — 5.1" },

  // ── Step 7: Document findings, actions, outcomes ──
  { text: "What should the final <strong>documentation</strong> step capture?", answer: "Findings, actions, outcomes, and lessons learned", choices: ["Findings, actions, outcomes, and lessons learned","Only the ticket's open and close timestamps","Just the name of the technician","Only the make and model of the failed device"], meta: "Documentation — 5.1" },
  { text: "Why are <strong>lessons learned</strong> valuable in the documentation step?", answer: "They help resolve similar issues faster in the future and can inform preventive measures", choices: ["They help resolve similar issues faster in the future and can inform preventive measures","They are required to reopen the ticket","They replace the need to verify functionality","They are only used for billing the customer"], meta: "Documentation — 5.1" },
  { text: "Although documentation is listed as the final step, when should documenting actually take place?", answer: "Throughout the troubleshooting process, not only once the problem is resolved", choices: ["Throughout the troubleshooting process, not only once the problem is resolved","Only after the ticket has been closed and archived","Only when the problem has to be escalated to another team","Only if the original theory of probable cause turned out to be wrong"], meta: "Documentation — 5.1" },
];

// ── Cabling & Physical Interface Issues (5.2) ──
const CABLING_QUESTIONS = [
  // ── Incorrect cable type: single-mode vs. multimode ──
  { text: "A 10 km fiber run between two buildings keeps failing to link. The installer used <strong>multimode</strong> fiber and transceivers. What is the most likely problem?", answer: "Multimode is only rated for short distances; a single-mode run is needed for 10 km", choices: ["Multimode is only rated for short distances; a single-mode run is needed for 10 km","Multimode fiber cannot carry data at all","The fiber needs to be terminated with RJ-45","Single-mode would be even worse over that distance"], meta: "Incorrect Cable Type — 5.2" },
  { text: "A campus run is single-mode fiber end to end, but a technician patches it into the switch with <strong>multimode patch cords</strong>. What is the likely result?", answer: "A media mismatch at the patch — the core sizes differ, causing high loss and an unreliable or down link", choices: ["A media mismatch at the patch — the core sizes differ, causing high loss and an unreliable or down link","Nothing; patch cords do not need to match the run","The link runs at half speed but is otherwise stable","The multimode cords upgrade the run to a longer distance"], meta: "Incorrect Cable Type — 5.2" },

  // ── Incorrect cable type: category (Cat5/6/7/8) ──
  { text: "A user reports their new connection only runs at <strong>100 Mbps</strong> instead of 1 Gbps. The patch cable is labeled <strong>Cat5</strong>. What is the most likely cause?", answer: "Cat5 tops out at 100 Mbps; a Cat5e or higher cable is required for 1 Gbps", choices: ["Cat5 tops out at 100 Mbps; a Cat5e or higher cable is required for 1 Gbps","Cat5 does not support Ethernet at all","The switch port is bad","Cat5 only works with fiber transceivers"], meta: "Incorrect Cable Type — 5.2" },
  { text: "You need to run <strong>10GBASE-T at 100 m</strong>. Which cable category should you use to avoid speed/distance problems?", answer: "Cat6a", choices: ["Cat6a","Cat5","Cat5e","Cat3"], meta: "Incorrect Cable Type — 5.2" },
  { text: "An installer specifies <strong>Cat7</strong> for a new run and is surprised the cable does not natively terminate to standard <strong>RJ-45</strong> jacks. Why?", answer: "Cat7 is an ISO/IEC standard specifying GG45/TERA connectors, and it was never ratified by TIA for RJ-45 structured cabling", choices: ["Cat7 is an ISO/IEC standard specifying GG45/TERA connectors, and it was never ratified by TIA for RJ-45 structured cabling","Cat7 is fiber-optic and cannot use copper connectors","Cat7 only supports 100 Mbps, so RJ-45 is unnecessary","Cat7 requires an SFP transceiver at each end"], meta: "Incorrect Cable Type — 5.2" },
  { text: "A run needs a fully shielded copper cable rated to <strong>600 MHz</strong> for 10 Gbps. Which category matches that specification?", answer: "Cat7 (S/FTP, 600 MHz)", choices: ["Cat7 (S/FTP, 600 MHz)","Cat5e (100 MHz)","Cat6 (250 MHz)","Cat3 (16 MHz)"], meta: "Incorrect Cable Type — 5.2" },
  { text: "A short 10 Gbps or higher run in a data center between adjacent racks is failing on a <strong>Cat5e</strong> cable. Which cabling is designed for 25/40 Gbps at short distances?", answer: "Cat8", choices: ["Cat8","Cat5","Cat3","Coaxial"], meta: "Incorrect Cable Type — 5.2" },

  // ── Incorrect cable type: STP vs. UTP ──
  { text: "A copper run passes close to fluorescent lights and motors and shows errors. The cable is <strong>UTP</strong>. What cable change best mitigates the interference?", answer: "Replace it with STP (shielded twisted pair)", choices: ["Replace it with STP (shielded twisted pair)","Replace it with a longer UTP cable","Replace it with a thinner UTP cable","Remove the twists from the pairs"], meta: "Incorrect Cable Type — 5.2" },
  { text: "For <strong>STP (shielded twisted pair)</strong> to properly drain interference, what must be done?", answer: "The shield must be properly bonded/grounded at the terminations", choices: ["The shield must be properly bonded/grounded at the terminations","The shield must be left ungrounded to float","The cable must be run at maximum length","The twists must be untwisted at the ends"], meta: "Incorrect Cable Type — 5.2" },

  // ── Signal degradation: attenuation ──
  { text: "A Cat6 run measured at <strong>140 meters</strong> has an intermittent, weak connection. Which form of signal degradation is the cause?", answer: "Attenuation — signal loss increases with distance beyond the 100 m limit", choices: ["Attenuation — signal loss increases with distance beyond the 100 m limit","Crosstalk from an adjacent pair","A transposed TX/RX pair","A PoE power budget problem"], meta: "Signal Degradation — 5.2" },
  { text: "What is <strong>attenuation</strong>?", answer: "The loss of signal strength as it travels over the length of the cable", choices: ["The loss of signal strength as it travels over the length of the cable","The bleeding of a signal from one pair into another","External electromagnetic noise coupling into the cable","Reversing the transmit and receive pairs"], meta: "Signal Degradation — 5.2" },

  // ── Signal degradation: crosstalk ──
  { text: "A cable tester reports high <strong>NEXT (near-end crosstalk)</strong> on a newly terminated jack. What does this indicate?", answer: "Signal from one wire pair is bleeding into an adjacent pair, often from untwisting pairs too far at the termination", choices: ["Signal from one wire pair is bleeding into an adjacent pair, often from untwisting pairs too far at the termination","The cable is simply too long","The transceiver wavelength is wrong","The port has been error-disabled"], meta: "Signal Degradation — 5.2" },
  { text: "Which practice during termination most helps <strong>reduce crosstalk</strong>?", answer: "Keep the wire pairs twisted as close to the termination point as possible", choices: ["Keep the wire pairs twisted as close to the termination point as possible","Untwist the pairs several inches back for a neat look","Use a longer cable","Remove the cable jacket entirely at the connector"], meta: "Signal Degradation — 5.2" },

  // ── Signal degradation: interference / EMI ──
  { text: "Copper cabling running parallel to power lines is picking up <strong>EMI</strong> and causing errors. Which cabling change most reliably eliminates the interference?", answer: "Switch to fiber-optic cable, which is immune to EMI", choices: ["Switch to fiber-optic cable, which is immune to EMI","Switch to a lower cable category","Increase the cable length","Use a straight-through instead of crossover cable"], meta: "Signal Degradation — 5.2" },

  // ── Improper termination ──
  { text: "A freshly crimped RJ-45 cable fails a wire-map test showing an <strong>open</strong> on one pair. What is the most likely cause?", answer: "Improper termination — a conductor is not making contact in the connector", choices: ["Improper termination — a conductor is not making contact in the connector","The switch is out of PoE budget","The VLAN is misconfigured","Attenuation from excessive distance"], meta: "Improper Termination — 5.2" },
  { text: "A wire-map tester shows that on one pair, the conductor on <strong>pin 1</strong> lands on <strong>pin 2</strong> at the far end and vice versa. What kind of fault is this?", answer: "A reversed pair — an improper termination where the two wires of a single pair are swapped at one end", choices: ["A reversed pair — an improper termination where the two wires of a single pair are swapped at one end","A PoE standard mismatch","A giant-frame problem","An error-disabled port"], meta: "Improper Termination — 5.2" },
  { text: "A cable <strong>passes</strong> a wire-map test (every pin is correct end to end) but fails certification with <strong>excessive NEXT</strong>. Which termination fault does this indicate?", answer: "A split pair — the conductors are correct pin-to-pin but drawn from two different twisted pairs, so the wire map looks fine", choices: ["A split pair — the conductors are correct pin-to-pin but drawn from two different twisted pairs, so the wire map looks fine","A reversed pair, which a wire map always flags","An open circuit on one conductor","A short between two conductors"], meta: "Improper Termination — 5.2" },

  // ── TX/RX transposed ──
  { text: "A fiber link stays <strong>down</strong>. Swapping the two fiber strands at one connector brings it up. What was the original problem?", answer: "TX and RX were transposed — transmit was connected to transmit instead of to the far-end receive", choices: ["TX and RX were transposed — transmit was connected to transmit instead of to the far-end receive","Attenuation over distance","A CRC error storm","The port was administratively shut down"], meta: "TX/RX Transposed — 5.2" },
  { text: "On modern copper switch ports, which feature automatically corrects a <strong>transposed TX/RX</strong> (straight-through vs. crossover) so the link still comes up?", answer: "Auto-MDIX", choices: ["Auto-MDIX","Auto-negotiation of PoE","Spanning Tree Protocol","802.1Q trunking"], meta: "TX/RX Transposed — 5.2" },

  // ── Interface counters: CRC errors ──
  { text: "An interface is incrementing <strong>CRC errors</strong>. What does a rising CRC counter most commonly indicate?", answer: "Frames are arriving corrupted — usually from a bad cable, EMI, or a duplex mismatch", choices: ["Frames are arriving corrupted — usually from a bad cable, EMI, or a duplex mismatch","The port has too much free buffer space","The VLAN database is empty","The cable is too short"], meta: "Interface Counters — 5.2" },
  { text: "A CRC error occurs when the received frame's <strong>frame check sequence</strong> does not match. What should you inspect first?", answer: "The physical cabling and connectors, and check for a duplex mismatch", choices: ["The physical cabling and connectors, and check for a duplex mismatch","The DHCP scope size","The routing table's default route","The NTP server address"], meta: "Interface Counters — 5.2" },

  // ── Interface counters: runts ──
  { text: "An interface is logging <strong>runts</strong>. What is a runt?", answer: "A frame smaller than the minimum 64-byte Ethernet frame size", choices: ["A frame smaller than the minimum 64-byte Ethernet frame size","A frame larger than the maximum allowed size","A frame with a valid checksum but wrong VLAN","A frame dropped because the buffer was full"], meta: "Interface Counters — 5.2" },
  { text: "Runt frames are frequently the symptom of which physical-layer condition?", answer: "A duplex mismatch or collisions on the segment", choices: ["A duplex mismatch or collisions on the segment","A PoE power budget that is too large","An oversized jumbo-frame configuration","A single-mode/multimode mismatch"], meta: "Interface Counters — 5.2" },

  // ── Interface counters: giants ──
  { text: "An interface is logging <strong>giants</strong>. What is a giant?", answer: "A frame larger than the maximum Ethernet frame size (over 1518 bytes without jumbo frames)", choices: ["A frame larger than the maximum Ethernet frame size (over 1518 bytes without jumbo frames)","A frame smaller than 64 bytes","A frame with the transmit and receive pairs swapped","A frame that failed the CRC only"], meta: "Interface Counters — 5.2" },
  { text: "Giants are appearing on a link between two switches. Besides a faulty NIC, what configuration issue commonly causes giant frames?", answer: "An MTU / jumbo-frame mismatch between the two ends", choices: ["An MTU / jumbo-frame mismatch between the two ends","A PoE standard mismatch","An error-disabled port","A crossover cable where a straight-through is needed"], meta: "Interface Counters — 5.2" },

  // ── Interface counters: drops ──
  { text: "An interface shows increasing output <strong>drops</strong> during peak hours but no CRC errors. What is the most likely cause?", answer: "Congestion — the interface buffer/queue is full and packets are discarded", choices: ["Congestion — the interface buffer/queue is full and packets are discarded","A miswired cable","A transposed TX/RX pair","A single-mode/multimode mismatch"], meta: "Interface Counters — 5.2" },

  // ── Port states: administratively down ──
  { text: "A <strong>show interface</strong> reports the port as <em>administratively down</em>. What does this mean?", answer: "The interface was manually disabled with a shutdown command and must be re-enabled", choices: ["The interface was manually disabled with a shutdown command and must be re-enabled","The cable is unplugged","The port failed a CRC self-test","The PoE budget was exceeded"], meta: "Port States — 5.2" },

  // ── Port states: error disabled ──
  { text: "A switch port drops into the <strong>err-disabled (error disabled)</strong> state. What most commonly triggers this?", answer: "A protection feature such as a port-security violation or BPDU guard shut the port down", choices: ["A protection feature such as a port-security violation or BPDU guard shut the port down","The port ran out of IP addresses","The cable exceeded 90 meters","A CNAME record was missing"], meta: "Port States — 5.2" },
  { text: "How do you typically recover an <strong>error-disabled</strong> port after fixing the underlying cause?", answer: "Bounce the port (shutdown then no shutdown) or enable errdisable recovery", choices: ["Bounce the port (shutdown then no shutdown) or enable errdisable recovery","Replace the entire switch","Change the cable to a lower category","Reboot the DHCP server"], meta: "Port States — 5.2" },

  // ── Port states: suspended ──
  { text: "A port bundled in an EtherChannel/link aggregation shows the <strong>suspended</strong> state. What does this usually indicate?", answer: "The port's parameters do not match the other bundle members (mismatched speed, duplex, VLAN, or channel mode)", choices: ["The port's parameters do not match the other bundle members (mismatched speed, duplex, VLAN, or channel mode)","The port has been manually shut down","The cable is a runt","The transceiver wavelength is too high"], meta: "Port States — 5.2" },

  // ── Hardware: PoE power budget ──
  { text: "New PoE cameras stop powering on after several are added, though the network links are fine. What is the most likely cause?", answer: "The switch's PoE power budget has been exceeded", choices: ["The switch's PoE power budget has been exceeded","The cameras need single-mode fiber","The VLAN database is full","The cable is a Cat8"], meta: "PoE Issues — 5.2" },
  { text: "A device needs <strong>60 W</strong> of PoE, but the switch port only supplies <strong>802.3af (15.4 W)</strong>. What is the problem?", answer: "An incorrect/insufficient PoE standard — the port must support 802.3bt (PoE++)", choices: ["An incorrect/insufficient PoE standard — the port must support 802.3bt (PoE++)","The cable is transposed","The port is error-disabled","A CRC mismatch"], meta: "PoE Issues — 5.2" },
  { text: "Which PoE standard supplies the most power for high-draw devices like PTZ cameras and access points?", answer: "802.3bt (PoE++)", choices: ["802.3bt (PoE++)","802.3af (PoE)","802.3at (PoE+)","802.3ab"], meta: "PoE Issues — 5.2" },

  // ── Hardware: transceiver mismatch ──
  { text: "A fiber link between two switches will not come up. One end has a <strong>1000BASE-SX</strong> SFP and the other a <strong>1000BASE-LX</strong> SFP. What is wrong?", answer: "A transceiver mismatch — both ends must use matching optics/wavelength and fiber type", choices: ["A transceiver mismatch — both ends must use matching optics/wavelength and fiber type","The cable is a runt","The port budget is exceeded","The VLAN is suspended"], meta: "Transceiver Issues — 5.2" },
  { text: "An SFP is physically seated and the link is up, but the interface logs errors. Optical <strong>receive signal strength</strong> reads very low (e.g., far below the transceiver's minimum dBm). What should you check?", answer: "Dirty or damaged fiber connectors, excessive cable length/loss, or a failing transceiver", choices: ["Dirty or damaged fiber connectors, excessive cable length/loss, or a failing transceiver","The DHCP lease time","The default gateway address","The spanning-tree root bridge"], meta: "Transceiver Issues — 5.2" },
  { text: "Optical power is measured in <strong>dBm</strong>. A received signal that is too weak (low RX power) on a fiber link is best described as which problem category?", answer: "Signal strength / transceiver issue", choices: ["Signal strength / transceiver issue","Improper termination of a copper jack","A runt-frame problem","An administratively-down port"], meta: "Transceiver Issues — 5.2" },
];

// ── Network Service Issues (5.3) ──
const SVCISSUE_QUESTIONS = [
  // ── STP: loops ──
  { text: "A technician patches two switch ports on the same VLAN together. Immediately the network floods with traffic, CPU spikes, and MAC addresses flap between ports. What has happened?", answer: "A Layer 2 switching loop, which STP is designed to prevent", choices: ["A Layer 2 switching loop, which STP is designed to prevent","A routing loop between two routers","DHCP pool exhaustion","A duplicate IP address conflict"], meta: "Spanning Tree — 5.3" },
  { text: "What is the primary purpose of <strong>Spanning Tree Protocol (STP)</strong>?", answer: "To prevent Layer 2 loops by blocking redundant paths while keeping a loop-free topology", choices: ["To prevent Layer 2 loops by blocking redundant paths while keeping a loop-free topology","To route packets between different subnets","To assign IP addresses to hosts","To encrypt traffic between switches"], meta: "Spanning Tree — 5.3" },
  { text: "A broadcast storm is caused by a switching loop. Which condition allows the loop to form when STP is disabled or has failed?", answer: "Redundant Layer 2 links with no port in a blocking state", choices: ["Redundant Layer 2 links with no port in a blocking state","An incorrect default gateway on the hosts","A subnet mask that is too small","An exhausted DHCP scope"], meta: "Spanning Tree — 5.3" },

  // ── STP: root bridge selection ──
  { text: "How does STP elect the <strong>root bridge</strong>?", answer: "The switch with the lowest bridge ID (priority first, then lowest MAC address) becomes root", choices: ["The switch with the lowest bridge ID (priority first, then lowest MAC address) becomes root","The switch with the highest IP address becomes root","The switch with the most ports becomes root","The first switch powered on becomes root"], meta: "Spanning Tree — 5.3" },
  { text: "What is the <strong>default bridge priority</strong> on most switches?", answer: "32768", choices: ["32768","0","1","65535"], meta: "Spanning Tree — 5.3" },
  { text: "A newly added access switch unexpectedly became the STP root bridge, creating suboptimal paths. All switches use the default priority. Why did the new switch win?", answer: "With equal priorities, the switch with the lowest MAC address wins the root election", choices: ["With equal priorities, the switch with the lowest MAC address wins the root election","New switches always become root by design","It had the fastest uplink port","It had the most VLANs configured"], meta: "Spanning Tree — 5.3" },
  { text: "How do you ensure a specific core switch reliably remains the STP <strong>root bridge</strong>?", answer: "Manually configure it with the lowest bridge priority", choices: ["Manually configure it with the lowest bridge priority","Give it the highest bridge priority value","Disable STP on all other switches","Assign it the highest MAC address"], meta: "Spanning Tree — 5.3" },

  // ── STP: port roles ──
  { text: "On a non-root switch, which STP port role is the single port with the <strong>lowest-cost path to the root bridge</strong>?", answer: "Root port", choices: ["Root port","Designated port","Blocking port","Alternate port"], meta: "Spanning Tree — 5.3" },
  { text: "Which STP port role is elected as the forwarding port for a given network segment (one per segment)?", answer: "Designated port", choices: ["Designated port","Root port","Alternate/blocking port","Backup native port"], meta: "Spanning Tree — 5.3" },
  { text: "A redundant link's port is not forwarding user frames but is still listening for BPDUs to prevent a loop. What is this port's role/state?", answer: "A blocking (alternate) port", choices: ["A blocking (alternate) port","A designated forwarding port","The root port","An error-disabled port"], meta: "Spanning Tree — 5.3" },

  // ── STP: port states ──
  { text: "What is the correct order of classic <strong>802.1D STP port states</strong> as a port comes up?", answer: "Blocking → Listening → Learning → Forwarding", choices: ["Blocking → Listening → Learning → Forwarding","Listening → Blocking → Forwarding → Learning","Forwarding → Learning → Listening → Blocking","Learning → Listening → Blocking → Forwarding"], meta: "Spanning Tree — 5.3" },
  { text: "In classic 802.1D STP, why does a newly connected port take roughly <strong>30 seconds</strong> before it forwards traffic?", answer: "It spends ~15 s in listening and ~15 s in learning before forwarding", choices: ["It spends ~15 s in listening and ~15 s in learning before forwarding","It waits for a DHCP lease","It negotiates PoE power","It runs a CRC self-test"], meta: "Spanning Tree — 5.3" },
  { text: "Users on an access port complain of a delay before their PC gets network access after link-up. Which feature lets an edge port skip listening/learning and forward immediately?", answer: "PortFast", choices: ["PortFast","BPDU guard","Root guard","Auto-MDIX"], meta: "Spanning Tree — 5.3" },
  { text: "Compared with classic 802.1D STP, what is the main advantage of <strong>Rapid STP (802.1w / RSTP)</strong>?", answer: "Much faster convergence after a topology change", choices: ["Much faster convergence after a topology change","It encrypts BPDUs","It eliminates the need for a root bridge","It assigns VLANs automatically"], meta: "Spanning Tree — 5.3" },

  // ── Incorrect VLAN assignment ──
  { text: "A user's PC is moved to a new switch port. The link is up and the cable tests good, but the user can no longer reach their department's resources. What is the most likely cause?", answer: "The new access port is assigned to the wrong VLAN", choices: ["The new access port is assigned to the wrong VLAN","The cable is a runt","The switch ran out of PoE budget","The root bridge changed"], meta: "VLAN Assignment — 5.3" },
  { text: "Two hosts configured with addresses in the same IP subnet, plugged into the same switch, cannot communicate. What incorrect configuration would cause this at Layer 2?", answer: "They are assigned to different VLANs", choices: ["They are assigned to different VLANs","They have the same subnet mask","They both use the same default gateway","They are on the same VLAN"], meta: "VLAN Assignment — 5.3" },
  { text: "Devices in VLAN 30 cannot reach VLAN 30 devices on a neighboring switch, though VLAN 10 works across the same trunk. What is the most likely cause?", answer: "VLAN 30 is not permitted on the trunk's allowed-VLAN list", choices: ["VLAN 30 is not permitted on the trunk's allowed-VLAN list","VLAN 30 has an exhausted DHCP scope","The trunk cable is too long","VLAN 10 is blocking VLAN 30"], meta: "VLAN Assignment — 5.3" },
  { text: "A <strong>native VLAN mismatch</strong> between the two ends of an 802.1Q trunk most commonly results in what?", answer: "Traffic from the untagged/native VLAN crossing into the wrong VLAN, plus STP inconsistency warnings", choices: ["Traffic from the untagged/native VLAN crossing into the wrong VLAN, plus STP inconsistency warnings","Faster convergence of the trunk","Automatic VLAN pruning","A PoE power fault"], meta: "VLAN Assignment — 5.3" },

  // ── ACLs ──
  { text: "After a technician edits a router's ACL, an entire subnet suddenly loses access to a file server. What is the most likely cause?", answer: "A misconfigured ACL entry is denying the traffic", choices: ["A misconfigured ACL entry is denying the traffic","The DHCP scope is exhausted","The subnet mask is wrong","The STP root bridge moved"], meta: "ACLs — 5.3" },
  { text: "What implicit rule exists at the end of every ACL?", answer: "An implicit 'deny all' — anything not explicitly permitted is dropped", choices: ["An implicit 'deny all' — anything not explicitly permitted is dropped","An implicit 'permit all'","An implicit 'log all'","Nothing; unmatched traffic is passed"], meta: "ACLs — 5.3" },
  { text: "Traffic that a specific 'permit' line should allow is still being dropped, even though that permit line exists in the ACL. What is the most likely reason?", answer: "A broader deny (or permit) statement earlier in the list matched first — ACLs are processed top-down", choices: ["A broader deny (or permit) statement earlier in the list matched first — ACLs are processed top-down","ACLs are processed bottom-up","The permit line is case-sensitive","ACLs ignore the first matching entry"], meta: "ACLs — 5.3" },
  { text: "Why does the <strong>order of entries</strong> matter in an ACL?", answer: "The first matching entry is applied and processing stops, so a misordered rule can override later ones", choices: ["The first matching entry is applied and processing stops, so a misordered rule can override later ones","The last matching entry always wins","All entries are evaluated and the strictest applies","Order only matters for IPv6 ACLs"], meta: "ACLs — 5.3" },
  { text: "An ACL is evaluated in this order: <strong>(1) deny 192.168.10.0/24 any</strong>, <strong>(2) permit host 192.168.10.50 any</strong>, <strong>(3) permit any any</strong>. Can host <strong>192.168.10.50</strong> send traffic through?", answer: "No — line 1 matches it first and denies it, so line 2 is never evaluated", choices: ["No — line 1 matches it first and denies it, so line 2 is never evaluated","Yes — line 2 explicitly permits that host","Yes — line 3 permits all remaining traffic","No — the implicit deny at the end of the ACL blocks it"], meta: "ACLs — 5.3" },

  // ── Route selection: routing table ──
  { text: "A router's routing table has two routes to the same destination: 10.1.1.0/24 and 10.1.0.0/16. Which does it use for a packet to 10.1.1.5?", answer: "10.1.1.0/24 — the most specific (longest-prefix) match wins", choices: ["10.1.1.0/24 — the most specific (longest-prefix) match wins","10.1.0.0/16 — the shorter prefix wins","Neither; the packet is dropped","It load-balances across both equally"], meta: "Route Selection — 5.3" },
  { text: "Two routes to the same network have the <strong>same prefix length</strong> but were learned by different routing protocols. Which value breaks the tie?", answer: "Administrative distance — the route with the lower AD is installed", choices: ["Administrative distance — the route with the lower AD is installed","The metric of the higher-AD protocol","The router with the higher IP","The oldest route in the table"], meta: "Route Selection — 5.3" },
  { text: "Two routes to the same network have the same prefix length and were learned by the <strong>same protocol</strong>. What decides which is used?", answer: "The lower metric is preferred", choices: ["The lower metric is preferred","The higher administrative distance","The higher metric is preferred","The route learned first"], meta: "Route Selection — 5.3" },
  { text: "In route selection, what is the correct order of criteria a router uses to choose the best path?", answer: "Longest prefix match, then administrative distance, then metric", choices: ["Longest prefix match, then administrative distance, then metric","Metric, then prefix length, then AD","Administrative distance, then metric, then prefix length","Prefix length, then metric, then AD"], meta: "Route Selection — 5.3" },
  { text: "A routing table entry reads <strong>O 10.2.0.0/16 [110/65] via 10.1.1.1</strong>. What do <strong>110</strong> and <strong>65</strong> represent?", answer: "110 is the administrative distance and 65 is the metric", choices: ["110 is the administrative distance and 65 is the metric","110 is the metric and 65 is the administrative distance","110 is the prefix length and 65 is the hop count","110 is the destination port and 65 is the VLAN ID"], meta: "Route Selection — 5.3" },
  { text: "In a routing table, what distinguishes an entry with route code <strong>C</strong> from one with route code <strong>S</strong>?", answer: "C is a directly connected network learned from an active interface; S is a manually configured static route", choices: ["C is a directly connected network learned from an active interface; S is a manually configured static route","C is a static route; S is a directly connected network","C is a cached route; S is a suspended route","Both are routes learned dynamically from a routing protocol"], meta: "Route Selection — 5.3" },
  { text: "In the routing table entry <strong>S 192.168.50.0/24 [1/0] via 10.0.0.2</strong>, what is <strong>10.0.0.2</strong>?", answer: "The next-hop address the router forwards matching packets to", choices: ["The next-hop address the router forwards matching packets to","The destination host being reached","The router's own loopback address","The subnet mask of the destination network"], meta: "Route Selection — 5.3" },

  // ── Route selection: default routes ──
  { text: "What network/prefix represents the <strong>default route</strong> (gateway of last resort)?", answer: "0.0.0.0/0", choices: ["0.0.0.0/0","255.255.255.255/32","127.0.0.1/8","169.254.0.0/16"], meta: "Route Selection — 5.3" },
  { text: "Hosts can reach internal subnets but nothing on the Internet. 'show ip route' reveals no gateway of last resort. What is the most likely cause?", answer: "A missing or incorrect default route on the router", choices: ["A missing or incorrect default route on the router","A duplicate IP address on the router","An STP loop","An exhausted DHCP scope"], meta: "Route Selection — 5.3" },
  { text: "A packet's destination network has no matching entry in the routing table and there is no default route. What does the router do?", answer: "Drops the packet (no route to destination)", choices: ["Drops the packet (no route to destination)","Broadcasts it to every interface","Sends it to 127.0.0.1","Queues it until a route appears"], meta: "Route Selection — 5.3" },

  // ── Address pool exhaustion ──
  { text: "New devices on a subnet cannot obtain IP addresses while existing devices work fine. The DHCP server shows the scope is fully leased. What is the problem?", answer: "DHCP address pool (scope) exhaustion", choices: ["DHCP address pool (scope) exhaustion","An incorrect subnet mask on the server","An STP loop on the segment","An ACL blocking DNS"], meta: "Addressing Issues — 5.3" },
  { text: "Which action best resolves <strong>DHCP scope exhaustion</strong> on a busy guest network?", answer: "Enlarge the scope or shorten the lease time so addresses free up faster", choices: ["Enlarge the scope or shorten the lease time so addresses free up faster","Lengthen the lease time to hours or days","Disable DHCP and use APIPA","Add more DNS servers"], meta: "Addressing Issues — 5.3" },
  { text: "A client that failed to obtain a lease self-assigns a <strong>169.254.x.x</strong> address. What does this indicate?", answer: "The client could not reach a DHCP server (APIPA fallback)", choices: ["The client could not reach a DHCP server (APIPA fallback)","The client has a duplicate static IP","The default gateway is wrong","The subnet mask is too large"], meta: "Addressing Issues — 5.3" },

  // ── Incorrect default gateway ──
  { text: "A workstation can ping other hosts on its own subnet but cannot reach any other subnet or the Internet. What is the most likely misconfiguration?", answer: "An incorrect or missing default gateway", choices: ["An incorrect or missing default gateway","A duplicate MAC address","An STP blocking port","A wrong DNS server only"], meta: "Addressing Issues — 5.3" },
  { text: "What is the specific role of the <strong>default gateway</strong> on a host?", answer: "It is the router the host sends traffic to when the destination is on a different subnet", choices: ["It is the router the host sends traffic to when the destination is on a different subnet","It is the DNS server used for name resolution","It is the DHCP server that leases addresses","It is the loopback address of the host"], meta: "Addressing Issues — 5.3" },

  // ── Incorrect / duplicate IP ──
  { text: "Two hosts on the LAN intermittently lose connectivity and the OS reports an 'IP address conflict.' What is the cause?", answer: "A duplicate IP address — two devices are configured with the same address", choices: ["A duplicate IP address — two devices are configured with the same address","An exhausted DHCP scope","A native VLAN mismatch","An incorrect default route"], meta: "Addressing Issues — 5.3" },
  { text: "Which practice best prevents a statically assigned server from <strong>duplicating</strong> an address that DHCP might hand out?", answer: "Exclude the static addresses from the DHCP scope (or use a DHCP reservation)", choices: ["Exclude the static addresses from the DHCP scope (or use a DHCP reservation)","Shorten the DHCP lease time to one minute","Assign the server an APIPA address","Disable the default gateway on the server"], meta: "Addressing Issues — 5.3" },

  // ── Incorrect subnet mask ──
  { text: "A host is given the wrong <strong>subnet mask</strong>. It can reach some hosts but not others on what should be the same network. Why?", answer: "The wrong mask makes the host miscalculate which addresses are local vs. remote, so some traffic is sent to the wrong place", choices: ["The wrong mask makes the host miscalculate which addresses are local vs. remote, so some traffic is sent to the wrong place","The mask has no effect on reachability","A wrong mask only affects DNS","The mask changes the host's MAC address"], meta: "Addressing Issues — 5.3" },
  { text: "A host with mask 255.255.255.0 (/24) needs to reach a device in 10.0.5.0/24 but the true network is /16. Because of the too-small mask, how does the host treat that device?", answer: "As remote, so it forwards the traffic to the default gateway instead of ARPing locally", choices: ["As remote, so it forwards the traffic to the default gateway instead of ARPing locally","As local, sending an ARP that always succeeds","As a duplicate IP conflict","As an unroutable APIPA address"], meta: "Addressing Issues — 5.3" },
];

// ── Performance Issues (5.4) ──
const PERF_QUESTIONS = [
  // ── Congestion / contention ──
  { text: "During peak hours, a WAN link that is fine at other times becomes slow for everyone, with rising latency and dropped packets. Utilization sits near 100%. What is this?", answer: "Network congestion — offered traffic exceeds the link's capacity", choices: ["Network congestion — offered traffic exceeds the link's capacity","A duplicate IP address","A native VLAN mismatch","An STP loop"], meta: "Congestion / Contention — 5.4" },
  { text: "Which technology best mitigates congestion by prioritizing delay-sensitive traffic (like VoIP) over bulk traffic on a saturated link?", answer: "Quality of Service (QoS)", choices: ["Quality of Service (QoS)","Spanning Tree Protocol","APIPA","MAC filtering"], meta: "Congestion / Contention — 5.4" },
  { text: "On a legacy half-duplex Ethernet segment, throughput drops as more hosts transmit and collisions climb. This competition for a shared medium is best called what?", answer: "Contention", choices: ["Contention","Attenuation","Jitter","Crosstalk"], meta: "Congestion / Contention — 5.4" },
  { text: "A half-duplex link shows rising collisions and late collisions as load increases. What kind of problem does this indicate?", answer: "Media contention on the shared collision domain", choices: ["Media contention on the shared collision domain","A routing loop","DHCP scope exhaustion","An incorrect subnet mask"], meta: "Congestion / Contention — 5.4" },

  // ── Bottlenecking ──
  { text: "Two sites each have gigabit LANs but are joined by a 100 Mbps link. End-to-end transfers never exceed ~100 Mbps. What is this single slowest point called?", answer: "A bottleneck", choices: ["A bottleneck","Jitter","A broadcast storm","A duplicate IP"], meta: "Bottlenecking — 5.4" },
  { text: "What is the defining characteristic of a network bottleneck?", answer: "The slowest component or link limits the overall throughput of the whole path", choices: ["The slowest component or link limits the overall throughput of the whole path","Every device transmits at its maximum rate","Traffic is evenly balanced across all links","Latency is eliminated end to end"], meta: "Bottlenecking — 5.4" },
  { text: "A server's NIC is negotiated at 100 Mbps while everything else is 1 Gbps, and it is the slowest hop for its traffic. Fixing the mismatch removes what?", answer: "The bottleneck limiting that server's throughput", choices: ["The bottleneck limiting that server's throughput","The default gateway","The STP root bridge","The DHCP scope"], meta: "Bottlenecking — 5.4" },

  // ── Bandwidth / throughput ──
  { text: "What is the difference between bandwidth and throughput?", answer: "Bandwidth is the maximum theoretical capacity of a link; throughput is the actual data rate achieved", choices: ["Bandwidth is the maximum theoretical capacity of a link; throughput is the actual data rate achieved","They are identical terms","Throughput is always higher than bandwidth","Bandwidth is measured in milliseconds"], meta: "Bandwidth / Throughput — 5.4" },
  { text: "A '1 Gbps' link only delivers ~600 Mbps in a file-transfer test. Which term describes that measured 600 Mbps?", answer: "Throughput (actual achieved rate)", choices: ["Throughput (actual achieved rate)","Bandwidth (theoretical maximum)","Latency","Jitter"], meta: "Bandwidth / Throughput — 5.4" },
  { text: "Users report an application is 'slow' but ping times are normal and there is no packet loss. A speed test shows throughput far below the link's rated bandwidth. What is the most likely category of issue?", answer: "Insufficient bandwidth/throughput for the demand (or a bottleneck along the path)", choices: ["Insufficient bandwidth/throughput for the demand (or a bottleneck along the path)","High jitter","A duplicate IP address","An STP loop"], meta: "Bandwidth / Throughput — 5.4" },

  // ── Latency ──
  { text: "What does network latency measure?", answer: "The time delay for data to travel from source to destination", choices: ["The time delay for data to travel from source to destination","The maximum capacity of a link","The percentage of packets dropped","The variation between packet arrival times"], meta: "Latency — 5.4" },
  { text: "Which tool and value are commonly used to observe round-trip latency to a host?", answer: "ping — the round-trip time (RTT) in milliseconds", choices: ["ping — the round-trip time (RTT) in milliseconds","ipconfig — the subnet mask","arp — the MAC address","nslookup — the A record"], meta: "Latency — 5.4" },
  { text: "A video call feels laggy: there is a noticeable delay before the other person reacts, though audio quality itself is clear. Which performance issue best fits?", answer: "High latency (delay)", choices: ["High latency (delay)","Packet loss","Duplicate IP addressing","MAC flooding"], meta: "Latency — 5.4" },
  { text: "Which factor typically adds the most fixed latency to a long-distance WAN link?", answer: "Propagation delay over distance (plus queuing/serialization along the path)", choices: ["Propagation delay over distance (plus queuing/serialization along the path)","The color of the fiber jacket","The switch's hostname length","The number of VLANs defined"], meta: "Latency — 5.4" },

  // ── Packet loss ──
  { text: "A continuous ping to a stable server shows '4% packet loss' and some requests time out. What performance issue is this?", answer: "Packet loss — some packets fail to reach the destination", choices: ["Packet loss — some packets fail to reach the destination","High bandwidth","Low latency","A DHCP reservation"], meta: "Packet Loss — 5.4" },
  { text: "How does TCP typically respond to packet loss, and what is the user-visible effect?", answer: "It retransmits lost segments, which reduces effective throughput and slows the transfer", choices: ["It retransmits lost segments, which reduces effective throughput and slows the transfer","It ignores the loss with no effect","It switches to UDP automatically","It doubles the link bandwidth"], meta: "Packet Loss — 5.4" },
  { text: "Which of these is a common cause of packet loss on a network path?", answer: "Congestion causing buffers to overflow, or a faulty/errored interface", choices: ["Congestion causing buffers to overflow, or a faulty/errored interface","A correctly sized DHCP scope","A matching native VLAN on both ends","A lower administrative distance"], meta: "Packet Loss — 5.4" },
  { text: "Why is packet loss especially harmful to real-time voice and video, unlike a bulk file download?", answer: "Real-time media cannot wait for retransmissions, so lost packets cause audible/visible gaps", choices: ["Real-time media cannot wait for retransmissions, so lost packets cause audible/visible gaps","Voice traffic never uses packets","File downloads are unaffected by loss but voice is faster","Retransmission makes real-time media clearer"], meta: "Packet Loss — 5.4" },

  // ── Jitter ──
  { text: "What is jitter?", answer: "Variation in the delay between arriving packets", choices: ["Variation in the delay between arriving packets","The total capacity of a link","The number of dropped packets","The round-trip time of a single ping"], meta: "Jitter — 5.4" },
  { text: "On a VoIP call, audio breaks up and sounds choppy even though average latency and packet loss are low. Which issue is the most likely culprit?", answer: "Jitter — inconsistent packet arrival times", choices: ["Jitter — inconsistent packet arrival times","Insufficient bandwidth","A duplicate IP address","An ACL misconfiguration"], meta: "Jitter — 5.4" },
  { text: "Which mechanism on a receiving VoIP device is designed to smooth out jitter?", answer: "A jitter buffer that briefly holds packets to play them back at an even rate", choices: ["A jitter buffer that briefly holds packets to play them back at an even rate","A larger subnet mask","A shorter DHCP lease","Disabling QoS"], meta: "Jitter — 5.4" },

  // ── Wireless: channel overlap interference ──
  { text: "In the crowded 2.4 GHz band, which three channels are non-overlapping and should be used to avoid adjacent-channel interference (in North America)?", answer: "Channels 1, 6, and 11", choices: ["Channels 1, 6, and 11","Channels 1, 2, and 3","Channels 2, 5, and 8","All channels overlap equally"], meta: "Wireless: Channel Overlap — 5.4" },
  { text: "Two nearby APs are on 2.4 GHz — one set to channel 3, the other to channel 5. Users see slow, unreliable Wi-Fi. What is the problem?", answer: "Overlapping (adjacent-channel) interference between the APs", choices: ["Overlapping (adjacent-channel) interference between the APs","A duplicate IP address","An STP loop","DHCP scope exhaustion"], meta: "Wireless: Channel Overlap — 5.4" },
  { text: "Several APs on the SAME 2.4 GHz channel in range of each other must take turns transmitting, reducing throughput. What is this called?", answer: "Co-channel interference (contention)", choices: ["Co-channel interference (contention)","Attenuation","Jitter","Crosstalk"], meta: "Wireless: Channel Overlap — 5.4" },
  { text: "Wi-Fi in a break room degrades badly every time the microwave oven runs, and a spectrum scan shows noise across the band with no other APs nearby. What is the cause?", answer: "Non-802.11 RF interference from a device sharing the 2.4 GHz band", choices: ["Non-802.11 RF interference from a device sharing the 2.4 GHz band","Co-channel interference from a neighboring AP","An exhausted DHCP scope","A roaming misconfiguration"], meta: "Wireless: Interference — 5.4" },

  // ── Wireless: signal degradation / loss ──
  { text: "As a laptop moves farther from the AP and through several walls, its signal strength (RSSI) weakens and the data rate drops. What is this loss of signal over distance/obstacles called?", answer: "Attenuation (signal degradation)", choices: ["Attenuation (signal degradation)","Jitter","A broadcast storm","A duplicate IP"], meta: "Wireless: Signal Degradation — 5.4" },
  { text: "A metric like RSSI (or SNR) is used to gauge wireless signal quality. A very low RSSI at the client indicates what?", answer: "A weak/degraded signal, likely from distance, obstructions, or interference", choices: ["A weak/degraded signal, likely from distance, obstructions, or interference","An exhausted DHCP scope","A misconfigured ACL","Excessive bandwidth"], meta: "Wireless: Signal Degradation — 5.4" },
  { text: "Which of these commonly degrades a Wi-Fi signal between the AP and client?", answer: "Physical obstructions (walls, metal) and RF interference from other devices", choices: ["Physical obstructions (walls, metal) and RF interference from other devices","A correct subnet mask","A lower administrative distance","A matching native VLAN"], meta: "Wireless: Signal Degradation — 5.4" },

  // ── Wireless: insufficient coverage ──
  { text: "Users in a far corner of the warehouse have no Wi-Fi, while the rest of the building is fine. This 'dead zone' is a symptom of what?", answer: "Insufficient wireless coverage", choices: ["Insufficient wireless coverage","A routing loop","DHCP exhaustion","A duplicate IP"], meta: "Wireless: Coverage — 5.4" },
  { text: "What is the best remedy for a Wi-Fi coverage gap (dead zone) in part of a building?", answer: "Add or reposition access points (and adjust transmit power) to extend coverage", choices: ["Add or reposition access points (and adjust transmit power) to extend coverage","Shorten the DHCP lease time","Disable the SSID","Lower the AP's channel width to 20 MHz only"], meta: "Wireless: Coverage — 5.4" },
  { text: "Which tool is most useful for identifying wireless coverage gaps and interference so APs can be placed correctly?", answer: "A Wi-Fi analyzer / wireless survey (heat map)", choices: ["A Wi-Fi analyzer / wireless survey (heat map)","A cable tester","A toner probe","A visual fault locator"], meta: "Wireless: Coverage — 5.4" },

  // ── Wireless: client disassociation ──
  { text: "Wireless clients repeatedly drop off the network and must reconnect, even while stationary. This is best described as what?", answer: "Client disassociation from the AP", choices: ["Client disassociation from the AP","A duplicate IP conflict","An STP topology change","A default gateway error"], meta: "Wireless: Disassociation — 5.4" },
  { text: "Which of these can cause frequent wireless client disassociations?", answer: "Weak signal at the cell edge, RF interference, or an overloaded AP", choices: ["Weak signal at the cell edge, RF interference, or an overloaded AP","A correctly sized DHCP scope","A lower administrative distance","A matching MTU"], meta: "Wireless: Disassociation — 5.4" },

  // ── Wireless: roaming misconfiguration ──
  { text: "A user walks across the building on a VoIP-over-Wi-Fi call. Their device stays locked to the first, now-distant AP instead of moving to a closer one, so the call degrades. What describes this?", answer: "A roaming problem — a 'sticky client' failing to hand off to a nearer AP", choices: ["A roaming problem — a 'sticky client' failing to hand off to a nearer AP","A duplicate IP address","DHCP scope exhaustion","An STP loop"], meta: "Wireless: Roaming — 5.4" },
  { text: "For seamless roaming, multiple APs in the same wireless network should share which setting so clients move between them without re-authenticating to a different network?", answer: "The same SSID (and security settings), with APs on non-overlapping channels", choices: ["The same SSID (and security settings), with APs on non-overlapping channels","A different SSID per AP","The same static IP on every client","Overlapping channels on every AP"], meta: "Wireless: Roaming — 5.4" },
  { text: "Roaming is configured too aggressively, so clients keep jumping between APs and briefly lose connectivity each time. What is this behavior called?", answer: "Roaming misconfiguration causing excessive handoffs (flapping between APs)", choices: ["Roaming misconfiguration causing excessive handoffs (flapping between APs)","A broadcast storm","Attenuation","A native VLAN mismatch"], meta: "Wireless: Roaming — 5.4" },
];

// ── Tools & Protocols (5.5) ──
const TOOLS_QUESTIONS = [
  // ── Software: protocol analyzer ──
  { text: "You need to inspect the actual contents and headers of traffic to diagnose why a TLS handshake is failing. Which software tool is designed to capture and decode packets at every layer?", answer: "A protocol analyzer (e.g., Wireshark)", choices: ["A protocol analyzer (e.g., Wireshark)","ping","nslookup","A speed tester"], meta: "Protocol Analyzer — 5.5" },
  { text: "What does a protocol analyzer primarily let you do?", answer: "Capture, decode, and inspect network packets frame by frame", choices: ["Capture, decode, and inspect network packets frame by frame","Assign IP addresses via DHCP","Trace a copper cable through a wall","Measure PoE power budget"], meta: "Protocol Analyzer — 5.5" },

  // ── Software: ping ──
  { text: "Which tool sends ICMP echo requests to test basic reachability and round-trip time to a host?", answer: "ping", choices: ["ping","dig","netstat","arp"], meta: "ping — 5.5" },
  { text: "A user cannot reach a server. You want the quickest test of whether the host is reachable across the network and how long replies take. Which command is best?", answer: "ping (ICMP echo, reports RTT)", choices: ["ping (ICMP echo, reports RTT)","nslookup","tracert","ipconfig"], meta: "ping — 5.5" },
  { text: "A ping to a host returns 'Request timed out' but ping to the default gateway succeeds. What has this most directly confirmed?", answer: "Local connectivity to the gateway works, but the remote host is unreachable or not responding", choices: ["Local connectivity to the gateway works, but the remote host is unreachable or not responding","DNS resolution has failed","The NIC driver is corrupt","The switch has an STP loop"], meta: "ping — 5.5" },

  // ── Software: traceroute / tracert ──
  { text: "Which tool shows each router (hop) along the path to a destination and the latency to each, helping locate where traffic slows or stops?", answer: "traceroute / tracert", choices: ["traceroute / tracert","arp","netstat","a cable tester"], meta: "traceroute / tracert — 5.5" },
  { text: "Traceroute works by sending packets with incrementing values in which IP field so each successive router replies with a Time Exceeded message?", answer: "The TTL (Time To Live) field", choices: ["The TTL (Time To Live) field","The source port field","The DSCP/QoS field","The fragment offset field"], meta: "traceroute / tracert — 5.5" },
  { text: "On Windows, which command traces the Layer 3 path to a destination?", answer: "tracert", choices: ["tracert","traceroute","dig","ss"], meta: "traceroute / tracert — 5.5" },

  // ── Software: nslookup ──
  { text: "Users report a website is down, but you suspect DNS. Which tool queries a DNS server to resolve a name to an IP and is built into both Windows and Linux?", answer: "nslookup", choices: ["nslookup","dig","arp","toner probe"], meta: "nslookup — 5.5" },
  { text: "You want to confirm which DNS server answered a query and what record it returned for a hostname. Which basic tool is appropriate?", answer: "nslookup", choices: ["nslookup","ping","tracert","ipconfig"], meta: "nslookup — 5.5" },

  // ── Software: tcpdump ──
  { text: "On a Linux server with no GUI, which command-line tool captures packets on an interface for later analysis?", answer: "tcpdump", choices: ["tcpdump","ipconfig","nslookup","tracert"], meta: "tcpdump — 5.5" },
  { text: "What is tcpdump best described as?", answer: "A command-line packet capture / protocol analyzer for Unix-like systems", choices: ["A command-line packet capture / protocol analyzer for Unix-like systems","A DNS record editor","A fiber break locator","A PoE power meter"], meta: "tcpdump — 5.5" },

  // ── Software: dig ──
  { text: "On Linux you need detailed DNS query output, including the authority and answer sections, to troubleshoot a resolution problem. Which tool is preferred?", answer: "dig", choices: ["dig","arp","netstat","tcpdump"], meta: "dig — 5.5" },
  { text: "Which statement best distinguishes dig from nslookup?", answer: "dig gives more detailed, scriptable DNS output and is common on Unix/Linux systems", choices: ["dig gives more detailed, scriptable DNS output and is common on Unix/Linux systems","dig captures packets while nslookup edits routes","dig only works on Windows","dig measures link throughput"], meta: "dig — 5.5" },

  // ── Software: netstat ──
  { text: "You suspect a host has an unexpected service listening or too many open connections. Which command displays active connections and listening ports?", answer: "netstat", choices: ["netstat","nslookup","tracert","dig"], meta: "netstat — 5.5" },
  { text: "What information does netstat primarily provide?", answer: "Active network connections, listening ports, and protocol statistics on the local host", choices: ["Active network connections, listening ports, and protocol statistics on the local host","The path of routers to a remote host","The signal strength of nearby Wi-Fi","The MAC-to-port table of a switch"], meta: "netstat — 5.5" },

  // ── Software: ip / ifconfig / ipconfig ──
  { text: "On a Windows PC, which command displays the interface's IP address, subnet mask, and default gateway?", answer: "ipconfig", choices: ["ipconfig","ifconfig","dig","netstat"], meta: "ip / ifconfig / ipconfig — 5.5" },
  { text: "On a modern Linux host, which command is the current tool for viewing and configuring interface addresses (replacing the older ifconfig)?", answer: "ip (e.g., ip address)", choices: ["ip (e.g., ip address)","ipconfig","tracert","nslookup"], meta: "ip / ifconfig / ipconfig — 5.5" },
  { text: "A Windows user reports an address of 169.254.x.x. Which command did you most likely run to see that APIPA address, and what does it indicate?", answer: "ipconfig — the client failed to get an address from DHCP", choices: ["ipconfig — the client failed to get an address from DHCP","dig — DNS resolution failed","arp — a duplicate MAC was found","netstat — a port is blocked"], meta: "ip / ifconfig / ipconfig — 5.5" },

  // ── Software: arp ──
  { text: "You need to see the local mapping of IP addresses to MAC addresses your host has learned, to investigate a suspected duplicate IP or ARP poisoning. Which command shows this cache?", answer: "arp (e.g., arp -a)", choices: ["arp (e.g., arp -a)","netstat","nslookup","tracert"], meta: "arp — 5.5" },
  { text: "The arp command displays which type of information?", answer: "The IP-address-to-MAC-address resolution table (ARP cache)", choices: ["The IP-address-to-MAC-address resolution table (ARP cache)","The list of DNS records for a domain","The routers along a path","Open TCP listening sockets"], meta: "arp — 5.5" },

  // ── Software: Nmap ──
  { text: "You want to discover live hosts on a subnet and enumerate which TCP/UDP ports and services are open. Which tool is designed for this?", answer: "Nmap", choices: ["Nmap","ping","dig","a toner probe"], meta: "Nmap — 5.5" },
  { text: "Nmap is best categorized as which kind of tool?", answer: "A network / port scanner used for host discovery and service enumeration", choices: ["A network / port scanner used for host discovery and service enumeration","A DNS resolver","A cable continuity tester","A packet decoder for a single flow"], meta: "Nmap — 5.5" },

  // ── Software: LLDP / CDP ──
  { text: "You need to identify which switch and port a device is connected to without physically tracing the cable. Which protocols let neighboring devices advertise their identity and port?", answer: "LLDP and CDP", choices: ["LLDP and CDP","ICMP and ARP","DNS and DHCP","SFTP and TFTP"], meta: "LLDP / CDP — 5.5" },
  { text: "Which statement correctly distinguishes LLDP from CDP?", answer: "LLDP is the vendor-neutral (IEEE 802.1AB) standard; CDP is Cisco proprietary", choices: ["LLDP is the vendor-neutral (IEEE 802.1AB) standard; CDP is Cisco proprietary","CDP is the open standard; LLDP is Cisco-only","Both are Cisco proprietary","Both operate at Layer 3 to route packets"], meta: "LLDP / CDP — 5.5" },

  // ── Software: speed tester ──
  { text: "A user complains their connection is 'slow.' Which tool measures actual upload/download throughput to compare against the provisioned bandwidth?", answer: "A speed tester", choices: ["A speed tester","nslookup","arp","a visual fault locator"], meta: "Speed Tester — 5.5" },
  { text: "A speed tester reports 180 Mbps download on a circuit provisioned for 500 Mbps. What has the tool established?", answer: "Measured throughput is well below the provisioned bandwidth, pointing to congestion or a bottleneck to investigate", choices: ["Measured throughput is well below the provisioned bandwidth, pointing to congestion or a bottleneck to investigate","The circuit's provisioned bandwidth has been physically increased","DNS resolution is failing","The cable is terminated incorrectly"], meta: "Speed Tester — 5.5" },

  // ── Hardware: toner / toner probe ──
  { text: "In a wiring closet full of unlabeled cables, which hardware tool pair lets you place a tone on one end and audibly find the matching cable at the other end?", answer: "A toner (tone generator) and probe", choices: ["A toner (tone generator) and probe","A cable tester","A Wi-Fi analyzer","A protocol analyzer"], meta: "Toner Probe — 5.5" },
  { text: "What is the primary purpose of a toner probe (tone generator and probe)?", answer: "To locate and trace / identify a specific cable among many", choices: ["To locate and trace / identify a specific cable among many","To verify a cable's pinout and continuity","To decode captured packets","To measure signal-to-noise ratio on Wi-Fi"], meta: "Toner Probe — 5.5" },

  // ── Hardware: cable tester ──
  { text: "A newly terminated Ethernet run does not work. Which hardware tool verifies continuity and the correct pin-to-pin wiremap (detecting opens, shorts, and miswires)?", answer: "A cable tester", choices: ["A cable tester","A toner probe","A speed tester","nslookup"], meta: "Cable Tester — 5.5" },
  { text: "A cable tester reports pins 3 and 6 are open on a patch cable. What does this most likely indicate?", answer: "An improper termination / wiring fault on those conductors", choices: ["An improper termination / wiring fault on those conductors","A DNS misconfiguration","An exhausted DHCP scope","An STP root bridge change"], meta: "Cable Tester — 5.5" },

  // ── Hardware: taps ──
  { text: "You must capture all traffic on a link for analysis without introducing a device that could drop frames, and without relying on a switch feature. Which hardware provides a passive copy of the traffic?", answer: "A network tap", choices: ["A network tap","A toner probe","A visual fault locator","A cable tester"], meta: "Taps — 5.5" },
  { text: "What is an advantage of a network tap over a switch's port mirror (SPAN) for capture?", answer: "A tap passively copies all traffic and does not drop frames under load the way an oversubscribed SPAN port can", choices: ["A tap passively copies all traffic and does not drop frames under load the way an oversubscribed SPAN port can","A tap assigns IP addresses to clients","A tap resolves DNS names faster","A tap boosts PoE power to the link"], meta: "Taps — 5.5" },

  // ── Hardware: Wi-Fi analyzer ──
  { text: "Users report unreliable wireless in one area. Which tool shows channel usage, signal strength, and interference so you can pick better channels or AP placement?", answer: "A Wi-Fi analyzer", choices: ["A Wi-Fi analyzer","A cable tester","A toner probe","netstat"], meta: "Wi-Fi Analyzer — 5.5" },
  { text: "A Wi-Fi analyzer shows five nearby APs all broadcasting on 2.4 GHz channel 6. What does this output identify?", answer: "Co-channel interference — the APs must contend for airtime on the same channel", choices: ["Co-channel interference — the APs must contend for airtime on the same channel","A duplicate IP address on the wireless subnet","An exhausted PoE power budget","A fiber break between the APs"], meta: "Wi-Fi Analyzer — 5.5" },

  // ── Hardware: visual fault locator ──
  { text: "You suspect a break or a tight bend in a fiber run. Which tool injects visible (usually red) laser light so the fault glows at the break?", answer: "A visual fault locator (VFL)", choices: ["A visual fault locator (VFL)","A toner probe","A cable tester","A Wi-Fi analyzer"], meta: "Visual Fault Locator — 5.5" },
  { text: "A visual fault locator is used on which type of media?", answer: "Fiber-optic cable", choices: ["Fiber-optic cable","Copper twisted pair","Coaxial cable","Wireless RF links"], meta: "Visual Fault Locator — 5.5" },

  // ── Device commands: show mac-address-table ──
  { text: "On a switch, which command reveals which MAC addresses are learned on which physical ports (useful for locating an end device)?", answer: "show mac-address-table", choices: ["show mac-address-table","show ip route","show vlan","show power"], meta: "show mac-address-table — 5.5" },

  // ── Device commands: show route ──
  { text: "A router is not forwarding traffic to a remote subnet. Which command displays the routing table and installed routes/next hops?", answer: "show route (show ip route)", choices: ["show route (show ip route)","show mac-address-table","show interface","show arp"], meta: "show route — 5.5" },
  { text: "'show route' on a router lists no entry matching a destination network, and no default route is present. What happens to packets destined for that network?", answer: "They are dropped as unreachable, because no matching route exists", choices: ["They are dropped as unreachable, because no matching route exists","They are flooded out every interface","They are queued until a route appears","They are sent to the DNS server for resolution"], meta: "show route — 5.5" },

  // ── Device commands: show interface ──
  { text: "You suspect a link has errors. Which command shows an interface's status, speed/duplex, and counters like CRC errors and drops?", answer: "show interface", choices: ["show interface","show vlan","show config","show route"], meta: "show interface — 5.5" },
  { text: "'show interface' reports rising CRC errors on a port. Which class of problem does that most point to?", answer: "A physical / cabling or duplex issue on that link", choices: ["A physical / cabling or duplex issue on that link","An expired DHCP lease","A DNS record error","A missing default route"], meta: "show interface — 5.5" },

  // ── Device commands: show config ──
  { text: "You need to verify the currently active settings on a switch to confirm a recent change took effect. Which command displays the running configuration?", answer: "show config (show running-config)", choices: ["show config (show running-config)","show mac-address-table","show power","show arp"], meta: "show config — 5.5" },

  // ── Device commands: show arp ──
  { text: "On a router or switch, which command displays the device's own IP-to-MAC resolution table?", answer: "show arp", choices: ["show arp","show vlan","show route","show interface"], meta: "show arp — 5.5" },

  // ── Device commands: show vlan ──
  { text: "An access port's device is on the wrong network. Which command lists VLANs and which ports are assigned to each?", answer: "show vlan", choices: ["show vlan","show power","show route","show config"], meta: "show vlan — 5.5" },

  // ── Device commands: show power ──
  { text: "A PoE access point won't power on and you suspect the switch's power budget is exhausted. Which command displays PoE power usage and availability?", answer: "show power", choices: ["show power","show vlan","show arp","show interface"], meta: "show power — 5.5" },
];

//  STATE
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// ── ACRONYMS — N10-009 acronym appendix ──
// Each entry corresponds to an acronym on the CompTIA Network+ N10-009
// objectives acronym list. { acr, full }. Plausible wrong expansions used as
// distractors live in ACRONYM_DECOYS below, keyed by acr.
const ACRONYM_DATA = [
  { acr: "A", full: "Address" },
  { acr: "AAA", full: "Authentication, Authorization, and Accounting" },
  { acr: "ACL", full: "Access Control List" },
  { acr: "AH", full: "Authentication Header" },
  { acr: "AP", full: "Access Point" },
  { acr: "API", full: "Application Programming Interface" },
  { acr: "APIPA", full: "Automatic Private Internet Protocol Addressing" },
  { acr: "ARP", full: "Address Resolution Protocol" },
  { acr: "AUP", full: "Acceptable Use Policy" },
  { acr: "BGP", full: "Border Gateway Protocol" },
  { acr: "BNC", full: "Bayonet Neill–Concelman" },
  { acr: "BSSID", full: "Basic Service Set Identifier" },
  { acr: "BYOD", full: "Bring Your Own Device" },
  { acr: "CAM", full: "Content Addressable Memory" },
  { acr: "CDN", full: "Content Delivery Network" },
  { acr: "CDP", full: "Cisco Discovery Protocol" },
  { acr: "CIA", full: "Confidentiality, Integrity, and Availability" },
  { acr: "CIDR", full: "Classless Inter-Domain Routing" },
  { acr: "CLI", full: "Command-line Interface" },
  { acr: "CNAME", full: "Canonical Name" },
  { acr: "CPU", full: "Central Processing Unit" },
  { acr: "CRC", full: "Cyclic Redundancy Check" },
  { acr: "DAC", full: "Direct Attach Copper" },
  { acr: "DAS", full: "Direct Attached Storage" },
  { acr: "DCI", full: "Data Center Interconnect" },
  { acr: "DDoS", full: "Distributed Denial-of-service" },
  { acr: "DHCP", full: "Dynamic Host Configuration Protocol" },
  { acr: "DLP", full: "Data Loss Prevention" },
  { acr: "DNS", full: "Domain Name System" },
  { acr: "DNSSEC", full: "Domain Name System Security Extensions" },
  { acr: "DoH", full: "DNS over Hypertext Transfer Protocol Secure" },
  { acr: "DoS", full: "Denial-of-service" },
  { acr: "DoT", full: "DNS over Transport Layer Security" },
  { acr: "DR", full: "Disaster Recovery" },
  { acr: "EAP", full: "Extensible Authentication Protocol" },
  { acr: "EAPoL", full: "Extensible Authentication Protocol over LAN" },
  { acr: "EIGRP", full: "Enhanced Interior Gateway Routing Protocol" },
  { acr: "EOL", full: "End-of-life" },
  { acr: "EOS", full: "End-of-support" },
  { acr: "ESP", full: "Encapsulating Security Payload" },
  { acr: "ESSID", full: "Extended Service Set Identifier" },
  { acr: "EULA", full: "End User License Agreement" },
  { acr: "FC", full: "Fibre Channel" },
  { acr: "FHRP", full: "First Hop Redundancy Protocol" },
  { acr: "FTP", full: "File Transfer Protocol" },
  { acr: "GDPR", full: "General Data Protection Regulation" },
  { acr: "GRE", full: "Generic Routing Encapsulation" },
  { acr: "GUI", full: "Graphical User Interface" },
  { acr: "HTTP", full: "Hypertext Transfer Protocol" },
  { acr: "HTTPS", full: "Hypertext Transfer Protocol Secure" },
  { acr: "IaaS", full: "Infrastructure as a Service" },
  { acr: "IaC", full: "Infrastructure as Code" },
  { acr: "IAM", full: "Identity and Access Management" },
  { acr: "ICMP", full: "Internet Control Message Protocol" },
  { acr: "ICS", full: "Industrial Control System" },
  { acr: "IDF", full: "Intermediate Distribution Frame" },
  { acr: "IDS", full: "Intrusion Detection System" },
  { acr: "IIoT", full: "Industrial Internet of Things" },
  { acr: "IKE", full: "Internet Key Exchange" },
  { acr: "IoT", full: "Internet of Things" },
  { acr: "IP", full: "Internet Protocol" },
  { acr: "IPAM", full: "Internet Protocol Address Management" },
  { acr: "IPS", full: "Intrusion Prevention System" },
  { acr: "IPSec", full: "Internet Protocol Security" },
  { acr: "IS-IS", full: "Intermediate System to Intermediate System" },
  { acr: "LACP", full: "Link Aggregation Control Protocol" },
  { acr: "LAN", full: "Local Area Network" },
  { acr: "LC", full: "Local Connector" },
  { acr: "LDAP", full: "Lightweight Directory Access Protocol" },
  { acr: "LDAPS", full: "Lightweight Directory Access Protocol over SSL" },
  { acr: "LLDP", full: "Link Layer Discovery Protocol" },
  { acr: "MAC", full: "Media Access Control" },
  { acr: "MDF", full: "Main Distribution Frame" },
  { acr: "MDIX", full: "Medium Dependent Interface Crossover" },
  { acr: "MFA", full: "Multifactor Authentication" },
  { acr: "MIB", full: "Management Information Base" },
  { acr: "MOU", full: "Memorandum of Understanding" },
  { acr: "MPO", full: "Multifiber Push On" },
  { acr: "MTBF", full: "Mean Time Between Failure" },
  { acr: "MTTR", full: "Mean Time To Repair" },
  { acr: "MTU", full: "Maximum Transmission Unit" },
  { acr: "MX", full: "Mail Exchange" },
  { acr: "NAC", full: "Network Access Control" },
  { acr: "NAS", full: "Network-attached Storage" },
  { acr: "NAT", full: "Network Address Translation" },
  { acr: "NDA", full: "Non-Disclosure Agreement" },
  { acr: "NFV", full: "Network Functions Virtualization" },
  { acr: "NIC", full: "Network Interface Cards" },
  { acr: "NS", full: "Name Server" },
  { acr: "NTP", full: "Network Time Protocol" },
  { acr: "NTS", full: "Network Time Security" },
  { acr: "OS", full: "Operating System" },
  { acr: "OSI", full: "Open Systems Interconnection" },
  { acr: "OSPF", full: "Open Shortest Path First" },
  { acr: "OT", full: "Operational Technology" },
  { acr: "PaaS", full: "Platform as a Service" },
  { acr: "PAT", full: "Port Address Translation" },
  { acr: "PCI DSS", full: "Payment Card Industry Data Security Standards" },
  { acr: "PDU", full: "Power Distribution Unit" },
  { acr: "PKI", full: "Public Key Infrastructure" },
  { acr: "PoE", full: "Power over Ethernet" },
  { acr: "PSK", full: "Pre-shared Key" },
  { acr: "PTP", full: "Precision Time Protocol" },
  { acr: "PTR", full: "Pointer" },
  { acr: "QoS", full: "Quality of Service" },
  { acr: "QSFP", full: "Quad Small Form-factor Pluggable" },
  { acr: "RADIUS", full: "Remote Authentication Dial-in User Service" },
  { acr: "RBAC", full: "Role-Based Access Control" },
  { acr: "RDP", full: "Remote Desktop Protocol" },
  { acr: "RFC", full: "Request for Comments" },
  { acr: "RFID", full: "Radio Frequency Identification" },
  { acr: "RIP", full: "Routing Information Protocol" },
  { acr: "RJ", full: "Registered Jack" },
  { acr: "RPO", full: "Recovery Point Objective" },
  { acr: "RSTP", full: "Rapid Spanning Tree Protocol" },
  { acr: "RTO", full: "Recovery Time Objective" },
  { acr: "RX", full: "Receive" },
  { acr: "SaaS", full: "Software as a Service" },
  { acr: "SAML", full: "Security Assertion Markup Language" },
  { acr: "SAN", full: "Storage Area Network" },
  { acr: "SASE", full: "Secure Access Service Edge" },
  { acr: "SC", full: "Subscriber Connector" },
  { acr: "SCADA", full: "Supervisory Control and Data Acquisition" },
  { acr: "SDN", full: "Software-defined Network" },
  { acr: "SD-WAN", full: "Software-defined Wide Area Network" },
  { acr: "SFP", full: "Small Form-factor Pluggable" },
  { acr: "SFTP", full: "Secure File Transfer Protocol" },
  { acr: "SIEM", full: "Security Information and Event Management" },
  { acr: "SIP", full: "Session Initiation Protocol" },
  { acr: "SLA", full: "Service-level Agreement" },
  { acr: "SLAAC", full: "Stateless Address Autoconfiguration" },
  { acr: "SMB", full: "Server Message Block" },
  { acr: "SMTP", full: "Simple Mail Transfer Protocol" },
  { acr: "SMTPS", full: "Simple Mail Transfer Protocol Secure" },
  { acr: "SNMP", full: "Simple Network Management Protocol" },
  { acr: "SOA", full: "Start of Authority" },
  { acr: "SOW", full: "Statement of Work" },
  { acr: "SQL", full: "Structured Query Language" },
  { acr: "SSE", full: "Security Service Edge" },
  { acr: "SSH", full: "Secure Shell" },
  { acr: "SSID", full: "Service Set Identifier" },
  { acr: "SSL", full: "Secure Socket Layer" },
  { acr: "SSO", full: "Single Sign-on" },
  { acr: "ST", full: "Straight Tip" },
  { acr: "STP", full: "Shielded Twisted Pair" },
  { acr: "SVI", full: "Switch Virtual Interface" },
  { acr: "TACACS+", full: "Terminal Access Controller Access Control System Plus" },
  { acr: "TCP", full: "Transmission Control Protocol" },
  { acr: "TFTP", full: "Trivial File Transfer Protocol" },
  { acr: "TLS", full: "Transport Layer Security" },
  { acr: "TTL", full: "Time to Live" },
  { acr: "TX", full: "Transmit" },
  { acr: "TXT", full: "Text" },
  { acr: "UDP", full: "User Datagram Protocol" },
  { acr: "UPS", full: "Uninterruptible Power Supply" },
  { acr: "URL", full: "Uniform Resource Locator" },
  { acr: "USB", full: "Universal Serial Bus" },
  { acr: "UTM", full: "Unified Threat Management" },
  { acr: "UTP", full: "Unshielded Twisted Pair" },
  { acr: "VIP", full: "Virtual IP" },
  { acr: "VLAN", full: "Virtual Local Area Network" },
  { acr: "VLSM", full: "Variable Length Subnet Mask" },
  { acr: "VM", full: "Virtual Machine" },
  { acr: "VoIP", full: "Voice over IP" },
  { acr: "VPC", full: "Virtual Private Cloud" },
  { acr: "VPN", full: "Virtual Private Network" },
  { acr: "VRRP", full: "Virtual Router Redundancy Protocol" },
  { acr: "VXLAN", full: "Virtual Extensible LAN" },
  { acr: "WAN", full: "Wide Area Network" },
  { acr: "WLAN", full: "Wireless Local Area Network" },
  { acr: "WPA", full: "Wi-Fi Protected Access" },
  { acr: "WPS", full: "Wi-Fi Protected Setup" },
  { acr: "ZTA", full: "Zero Trust Architecture" },
];

// Plausible WRONG expansions per acronym, used as distractors for the
// "acronym → meaning" questions so the incorrect options fit the same letters.
const ACRONYM_DECOYS = {
  "A": ["Alias", "Authority", "Anycast"],
  "AAA": ["Access, Authentication, and Auditing", "Authorization, Auditing, and Accounting", "Authentication, Access, and Allocation"],
  "ACL": ["Access Configuration Layer", "Address Control List", "Application Control List"],
  "AH": ["Address Handshake", "Authorization Header", "Access Handler"],
  "AP": ["Access Protocol", "Application Port", "Access Path"],
  "API": ["Application Protocol Interface", "Automated Programming Integration", "Application Process Interface"],
  "APIPA": ["Automatic Public Internet Protocol Assignment", "Assigned Private Internet Protocol Address", "Automatic Peer Internet Protocol Allocation"],
  "ARP": ["Address Routing Protocol", "Automatic Resolution Protocol", "Address Request Protocol"],
  "AUP": ["Authorized User Policy", "Access Usage Protocol", "Acceptable Usage Provision"],
  "BGP": ["Balanced Gateway Protocol", "Boundary Gateway Path", "Backbone Gateway Protocol"],
  "BNC": ["British Naval Connector", "Bayonet Network Connector", "Baseband Node Connector"],
  "BSSID": ["Broadcast Service Set Identifier", "Base Station Set Identifier", "Basic Signal Set Identifier"],
  "BYOD": ["Bring Your Own Data", "Buy Your Own Device", "Build Your Own Domain"],
  "CAM": ["Content Access Memory", "Cache Addressable Memory", "Central Addressable Memory"],
  "CDN": ["Content Distribution Node", "Cloud Data Network", "Central Delivery Network"],
  "CDP": ["Cisco Datagram Protocol", "Common Discovery Protocol", "Cisco Directory Protocol"],
  "CIA": ["Confidentiality, Integrity, and Authentication", "Control, Integrity, and Availability", "Confidentiality, Identity, and Availability"],
  "CIDR": ["Classful Inter-Domain Routing", "Classless Internal Domain Routing", "Classless Inter-Domain Router"],
  "CLI": ["Central Logic Interface", "Command-level Interface", "Console Line Interpreter"],
  "CNAME": ["Common Name", "Cached Name", "Central Name Alias"],
  "CPU": ["Core Processing Unit", "Central Program Unit", "Computer Processing Unit"],
  "CRC": ["Cyclic Redundancy Code", "Checksum Redundancy Check", "Cyclic Recovery Check"],
  "DAC": ["Direct Access Cable", "Data Attach Connector", "Direct Attached Coax"],
  "DAS": ["Direct Access Storage", "Distributed Attached Storage", "Dedicated Attached Storage"],
  "DCI": ["Data Center Interface", "Distributed Center Interconnect", "Data Channel Interconnect"],
  "DDoS": ["Dynamic Denial-of-service", "Distributed Disruption-of-service", "Direct Denial-of-service"],
  "DHCP": ["Dynamic Host Control Protocol", "Distributed Host Configuration Protocol", "Dynamic Hostname Configuration Protocol"],
  "DLP": ["Data Leak Protection", "Data Level Protection", "Digital Loss Prevention"],
  "DNS": ["Domain Name Service", "Dynamic Name System", "Domain Naming Server"],
  "DNSSEC": ["Domain Name Service Security Extensions", "Domain Name System Secure Encryption", "Domain Name System Security Enforcement"],
  "DoH": ["DNS over Hypertext Transfer Protocol", "Domain over Hypertext Transfer Protocol Secure", "Data over Hypertext Transfer Protocol Secure"],
  "DoS": ["Disruption-of-service", "Denial-of-session", "Downgrade-of-service"],
  "DoT": ["DNS over Transport Layer Session", "Domain over Transport Layer Security", "Data over Transport Layer Security"],
  "DR": ["Data Recovery", "Disaster Response", "Disk Recovery"],
  "EAP": ["Encrypted Authentication Protocol", "Extended Access Protocol", "Extensible Access Protocol"],
  "EAPoL": ["Extensible Authentication Protocol over LDAP", "Encrypted Authentication Protocol over LAN", "Extended Authentication Protocol over LAN"],
  "EIGRP": ["Extended Interior Gateway Routing Protocol", "Enhanced Interior Gateway Redundancy Protocol", "Enhanced Internal Gateway Routing Protocol"],
  "EOL": ["End-of-license", "End-of-lease", "Extent-of-life"],
  "EOS": ["End-of-service", "End-of-sale", "End-of-system"],
  "ESP": ["Encrypted Security Payload", "Encapsulating Secure Protocol", "Endpoint Security Payload"],
  "ESSID": ["Enhanced Service Set Identifier", "Extended Signal Set Identifier", "Extended Station Set Identifier"],
  "EULA": ["End User License Arrangement", "Enterprise User License Agreement", "End User Licensing Authorization"],
  "FC": ["Fibre Connector", "Fabric Channel", "Fiber Coupler"],
  "FHRP": ["First Hop Routing Protocol", "Fast Hop Redundancy Protocol", "Failover Hop Redundancy Protocol"],
  "FTP": ["File Transport Protocol", "Fast Transfer Protocol", "File Transmission Protocol"],
  "GDPR": ["Global Data Privacy Regulation", "General Data Privacy Rules", "General Data Protection Rights"],
  "GRE": ["Generic Routing Encryption", "General Routing Encapsulation", "Generic Route Extension"],
  "GUI": ["Graphical Utility Interface", "General User Interface", "Graphic User Integration"],
  "HTTP": ["Hypertext Transport Protocol", "Hypertext Transmission Protocol", "High-Throughput Transfer Protocol"],
  "HTTPS": ["Hypertext Transport Protocol Secure", "Hypertext Transfer Protocol Standard", "Hypertext Transfer Protocol Signed"],
  "IaaS": ["Internet as a Service", "Integration as a Service", "Infrastructure and Storage Service"],
  "IaC": ["Infrastructure and Configuration", "Integration as Code", "Infrastructure Access Control"],
  "IAM": ["Identity and Authentication Management", "Identity Access Management", "Integrated Access Management"],
  "ICMP": ["Internet Connection Management Protocol", "Internet Control Messaging Protocol", "Internal Control Message Protocol"],
  "ICS": ["Integrated Control System", "Industrial Computing System", "Internal Control Server"],
  "IDF": ["Internal Distribution Frame", "Intermediate Data Frame", "Interconnect Distribution Facility"],
  "IDS": ["Intrusion Defense System", "Internal Detection System", "Intrusion Deterrence System"],
  "IIoT": ["Integrated Internet of Things", "Internal Internet of Things", "Industrial Interconnect of Things"],
  "IKE": ["Internet Key Encryption", "Internal Key Exchange", "Integrated Key Exchange"],
  "IoT": ["Interconnection of Things", "Internet of Technology", "Integration of Things"],
  "IP": ["Internet Packet", "Internetwork Protocol", "Interface Protocol"],
  "IPAM": ["Internet Protocol Allocation Manager", "Internet Protocol Access Management", "Internet Protocol Assignment Management"],
  "IPS": ["Intrusion Protection System", "Internal Prevention System", "Intrusion Policy System"],
  "IPSec": ["Internet Packet Security", "Internet Protocol Secure", "Internetwork Protocol Security"],
  "IS-IS": ["Interior System to Interior System", "Intermediate System to Interior System", "Internal System to Internal System"],
  "LACP": ["Link Access Control Protocol", "Link Aggregation Configuration Protocol", "Logical Aggregation Control Protocol"],
  "LAN": ["Logical Area Network", "Link Access Node", "Local Access Network"],
  "LC": ["Large Connector", "Latch Connector", "Line Coupler"],
  "LDAP": ["Lightweight Directory Authentication Protocol", "Local Directory Access Protocol", "Lightweight Data Access Protocol"],
  "LDAPS": ["Lightweight Directory Access Protocol Secure", "Local Directory Access Protocol over SSL", "Lightweight Directory Authentication Protocol over SSL"],
  "LLDP": ["Logical Link Discovery Protocol", "Link Layer Distribution Protocol", "Link Local Discovery Protocol"],
  "MAC": ["Medium Access Controller", "Media Access Code", "Machine Access Control"],
  "MDF": ["Master Distribution Frame", "Main Data Frame", "Managed Distribution Facility"],
  "MDIX": ["Medium Dependent Interface Crossconnect", "Media Dependent Interface Crossover", "Medium Direct Interface Crossover"],
  "MFA": ["Multiple Factor Authorization", "Multifactor Authorization", "Managed Factor Authentication"],
  "MIB": ["Managed Information Base", "Management Interface Base", "Monitoring Information Base"],
  "MOU": ["Memorandum of Use", "Method of Understanding", "Measure of Understanding"],
  "MPO": ["Multipath Optics", "Multifiber Pull Off", "Multiple Port Optics"],
  "MTBF": ["Maximum Time Between Failures", "Mean Time Before Failure", "Mean Time Between Faults"],
  "MTTR": ["Maximum Time To Repair", "Mean Time To Reboot", "Measured Time To Repair"],
  "MTU": ["Maximum Transfer Unit", "Minimum Transmission Unit", "Maximum Transmission Utilization"],
  "MX": ["Message Exchange", "Mail Extension", "Managed Exchange"],
  "NAC": ["Network Authentication Control", "Network Access Configuration", "Node Access Control"],
  "NAS": ["Network Access Server", "Network Address Storage", "Networked Application Server"],
  "NAT": ["Network Address Table", "Network Access Translation", "Node Address Translation"],
  "NDA": ["Network Disclosure Agreement", "Non-Distribution Agreement", "Non-Disclosure Arrangement"],
  "NFV": ["Network Feature Virtualization", "Networked Firewall Virtualization", "Network Flow Virtualization"],
  "NIC": ["Network Interface Connector", "Network Internal Cards", "Node Interface Cards"],
  "NS": ["Network Server", "Name Service", "Namespace Server"],
  "NTP": ["Network Timing Protocol", "Network Transport Protocol", "Node Time Protocol"],
  "NTS": ["Network Time Service", "Network Transport Security", "Network Timing Sync"],
  "OS": ["Operational System", "Open System", "Operating Software"],
  "OSI": ["Open Standard Interconnection", "Open Systems Interface", "Operating System Interconnection"],
  "OSPF": ["Open Shortest Path Finder", "Optimal Shortest Path First", "Open System Path First"],
  "OT": ["Operations Technology", "Optimized Technology", "Operational Telemetry"],
  "PaaS": ["Product as a Service", "Provisioning as a Service", "Platform and Application Service"],
  "PAT": ["Port Address Table", "Packet Address Translation", "Protocol Address Translation"],
  "PCI DSS": ["Payment Card Industry Digital Security Standards", "Personal Card Industry Data Security Standards", "Payment Card Industry Data Safety Standards"],
  "PDU": ["Power Delivery Unit", "Protocol Data Unit", "Power Distribution Utility"],
  "PKI": ["Private Key Infrastructure", "Public Key Interchange", "Public Key Identification"],
  "PoE": ["Power on Ethernet", "Power over Electronics", "Port over Ethernet"],
  "PSK": ["Public Shared Key", "Private Session Key", "Pre-shared Keyword"],
  "PTP": ["Point-to-Point Protocol", "Precise Timing Protocol", "Precision Transfer Protocol"],
  "PTR": ["Protocol Trace", "Path Trace Record", "Port Translation Record"],
  "QoS": ["Quantity of Service", "Queue of Service", "Quality of Session"],
  "QSFP": ["Quad Small Form Pluggable", "Quick Small Form-factor Pluggable", "Quad Standard Form-factor Pluggable"],
  "RADIUS": ["Remote Access Dial-in User Service", "Remote Authentication Dial-in User Server", "Remote Authentication and Identity User Service"],
  "RBAC": ["Rule-Based Access Control", "Role-Based Authentication Control", "Resource-Based Access Control"],
  "RDP": ["Remote Data Protocol", "Remote Desktop Provider", "Rapid Desktop Protocol"],
  "RFC": ["Request for Change", "Requirements for Compliance", "Request for Configuration"],
  "RFID": ["Radio Frequency Identifier", "Radio Field Identification", "Remote Frequency Identification"],
  "RIP": ["Router Information Protocol", "Routing Interface Protocol", "Route Information Path"],
  "RJ": ["Registered Junction", "Rated Jack", "Ribbon Jack"],
  "RPO": ["Recovery Priority Objective", "Restore Point Objective", "Recovery Process Objective"],
  "RSTP": ["Rapid Spanning Tree Path", "Reliable Spanning Tree Protocol", "Rapid Switching Tree Protocol"],
  "RTO": ["Recovery Time Optimization", "Restore Time Objective", "Response Time Objective"],
  "RX": ["Receiver", "Reception", "Response"],
  "SaaS": ["System as a Service", "Storage as a Service", "Security as a Service"],
  "SAML": ["Secure Assertion Markup Language", "Security Authentication Markup Language", "Standard Assertion Markup Language"],
  "SAN": ["Storage Access Network", "System Area Network", "Secure Area Network"],
  "SASE": ["Secure Access Service Endpoint", "Secured Application Service Edge", "Secure Access Security Edge"],
  "SC": ["Screw Connector", "Straight Connector", "Square Connector"],
  "SCADA": ["System Control and Data Acquisition", "Supervisory Control and Data Analysis", "Supervisory Computer and Data Acquisition"],
  "SDN": ["Service-defined Network", "Software-driven Networking", "Software Distribution Node"],
  "SD-WAN": ["Software-defined Wireless Area Network", "Software-distributed Wide Area Network", "Software-defined Web Access Network"],
  "SFP": ["Small Form Pluggable", "Standard Form-factor Pluggable", "Small Footprint Pluggable"],
  "SFTP": ["Secure File Transport Protocol", "Simple File Transfer Protocol", "Safe File Transfer Protocol"],
  "SIEM": ["Security Incident and Event Management", "System Information and Event Management", "Security Information and Event Monitoring"],
  "SIP": ["Session Internet Protocol", "Secure Initiation Protocol", "Session Initialization Protocol"],
  "SLA": ["Service-level Arrangement", "System-level Agreement", "Service-level Assurance"],
  "SLAAC": ["Stateful Address Autoconfiguration", "Static Address Autoconfiguration", "Stateless Address Allocation Control"],
  "SMB": ["Server Messaging Bus", "System Message Block", "Session Message Block"],
  "SMTP": ["Simple Mail Transport Protocol", "Standard Mail Transfer Protocol", "Secure Mail Transfer Protocol"],
  "SMTPS": ["Simple Mail Transfer Protocol Standard", "Secure Mail Transfer Protocol Secure", "Simple Mail Transport Protocol Secure"],
  "SNMP": ["Simple Network Monitoring Protocol", "Standard Network Management Protocol", "Simple Node Management Protocol"],
  "SOA": ["Source of Authority", "Start of Address", "State of Authority"],
  "SOW": ["Scope of Work", "Summary of Work", "Standard of Work"],
  "SQL": ["Standard Query Language", "Structured Question Language", "Sequential Query Language"],
  "SSE": ["Secure Service Edge", "Security Service Endpoint", "Secure Software Edge"],
  "SSH": ["Secure Socket Handler", "Secure Session Host", "System Shell"],
  "SSID": ["Secure Set Identifier", "Signal Set Identifier", "Station Set Identifier"],
  "SSL": ["Secure Socket Link", "Secure Session Layer", "System Socket Layer"],
  "SSO": ["Secure Sign-on", "Single Sign-off", "System Sign-on"],
  "ST": ["Straight Terminal", "Standard Tip", "Square Tip"],
  "STP": ["Shielded Twisted Path", "Structured Twisted Pair", "Single Twisted Pair"],
  "SVI": ["Switched Virtual Interface", "Switch Virtual Instance", "System Virtual Interface"],
  "TACACS+": ["Terminal Access Control Access Control System Plus", "Terminal Access Controller Access Configuration System Plus", "Trusted Access Controller Access Control System Plus"],
  "TCP": ["Transfer Control Protocol", "Transmission Connection Protocol", "Transport Control Protocol"],
  "TFTP": ["Trivial File Transport Protocol", "Text File Transfer Protocol", "Temporary File Transfer Protocol"],
  "TLS": ["Transport Level Security", "Transmission Layer Security", "Transport Layer Session"],
  "TTL": ["Time to Load", "Total Time Live", "Time to Leave"],
  "TX": ["Transfer", "Transmitter", "Transaction"],
  "TXT": ["Transmit Text", "Text Exchange", "Text Transfer"],
  "UDP": ["User Data Protocol", "Universal Datagram Protocol", "User Datagram Packet"],
  "UPS": ["Universal Power Supply", "Unified Power Supply", "Uninterruptible Power System"],
  "URL": ["Universal Resource Locator", "Uniform Resource Link", "Unified Resource Locator"],
  "USB": ["Universal System Bus", "Universal Serial Board", "Unified Serial Bus"],
  "UTM": ["Universal Threat Management", "Unified Traffic Management", "Unified Threat Mitigation"],
  "UTP": ["Untwisted Pair", "Unshielded Terminated Pair", "Universal Twisted Pair"],
  "VIP": ["Virtual Interface Point", "Virtual IP Protocol", "Variable IP"],
  "VLAN": ["Virtual Link Area Network", "Virtualized Local Access Network", "Variable Local Area Network"],
  "VLSM": ["Variable Length Subnet Method", "Variable Length Subnetwork Mask", "Variable Logic Subnet Mask"],
  "VM": ["Virtual Memory", "Virtual Module", "Virtualization Manager"],
  "VoIP": ["Video over IP", "Voice on IP", "Voice over IPv6"],
  "VPC": ["Virtual Public Cloud", "Virtual Private Connection", "Virtual Private Container"],
  "VPN": ["Virtual Public Network", "Virtual Personal Network", "Verified Private Network"],
  "VRRP": ["Virtual Router Routing Protocol", "Virtual Redundancy Routing Protocol", "Virtual Router Redundancy Path"],
  "VXLAN": ["Virtual Extended LAN", "Virtual Exchange LAN", "Virtual Extreme LAN"],
  "WAN": ["Wireless Area Network", "Wide Access Network", "Wired Area Network"],
  "WLAN": ["Wired Local Area Network", "Wireless Link Area Network", "Wide Local Area Network"],
  "WPA": ["Wireless Protected Access", "Wi-Fi Private Access", "Wi-Fi Protected Authentication"],
  "WPS": ["Wi-Fi Protected Security", "Wireless Protected Setup", "Wi-Fi Provisioning Setup"],
  "ZTA": ["Zero Trust Access", "Zero Trust Authentication", "Zoned Trust Architecture"],
};

// Fraction of acronyms that also get a (harder-to-guess) reverse question.
// Reverse (meaning → acronym) is easier, so it is kept less frequent.
const ACRONYM_REVERSE_FRACTION = 0.3;

function buildAcronymQuestions() {
  const allFulls = ACRONYM_DATA.map(a => a.full);
  const allAcrs  = ACRONYM_DATA.map(a => a.acr);

  // Forward: acronym → meaning, with plausible same-acronym decoys.
  const forward = ACRONYM_DATA.map(entry => {
    const decoys = (ACRONYM_DECOYS[entry.acr] ||
      shuffle(allFulls.filter(f => f !== entry.full)).slice(0, 3)).slice(0, 3);
    return {
      text: `What does <strong>${entry.acr}</strong> stand for?`,
      answer: entry.full,
      choices: [entry.full, ...decoys],
      meta: "Acronym → Meaning",
    };
  });

  // Reverse: meaning → acronym, for a sampled (less frequent) subset.
  const reverseCount = Math.round(ACRONYM_DATA.length * ACRONYM_REVERSE_FRACTION);
  const reverse = shuffle([...ACRONYM_DATA]).slice(0, reverseCount).map(entry => {
    const distractors = shuffle(allAcrs.filter(a => a !== entry.acr)).slice(0, 3);
    return {
      text: `Which acronym stands for <strong>"${entry.full}"</strong>?`,
      answer: entry.acr,
      choices: [entry.acr, ...distractors],
      meta: "Meaning → Acronym",
    };
  });

  return shuffle([...forward, ...reverse]);
}

let portQs = [], portIdx = 0, portScore = { c: 0, w: 0 }, portHist = [];
let cableQs = [], cableIdx = 0, cableScore = { c: 0, w: 0 }, cableHist = [];
let classfulQs = [], classfulIdx = 0, classfulScore = { c: 0, w: 0 }, classfulHist = [];
let cloudQs = [], cloudIdx = 0, cloudScore = { c: 0, w: 0 }, cloudHist = [];
let fundamentalQs = [], fundamentalIdx = 0, fundamentalScore = { c: 0, w: 0 }, fundamentalHist = [];
let subnetQ = null, subnetScore = { c: 0, w: 0 };
let routingQs = [], routingIdx = 0, routingScore = { c: 0, w: 0 }, routingHist = [];
let switchingQs = [], switchingIdx = 0, switchingScore = { c: 0, w: 0 }, switchingHist = [];
let wirelessQs = [], wirelessIdx = 0, wirelessScore = { c: 0, w: 0 }, wirelessHist = [];
let physicalQs = [], physicalIdx = 0, physicalScore = { c: 0, w: 0 }, physicalHist = [];
let orgprocQs = [], orgprocIdx = 0, orgprocScore = { c: 0, w: 0 }, orgprocHist = [];
let monitoringQs = [], monitoringIdx = 0, monitoringScore = { c: 0, w: 0 }, monitoringHist = [];
let drQs = [], drIdx = 0, drScore = { c: 0, w: 0 }, drHist = [];
let servicesQs = [], servicesIdx = 0, servicesScore = { c: 0, w: 0 }, servicesHist = [];
let accessQs = [], accessIdx = 0, accessScore = { c: 0, w: 0 }, accessHist = [];
let securityQs = [], securityIdx = 0, securityScore = { c: 0, w: 0 }, securityHist = [];
let attackQs = [], attackIdx = 0, attackScore = { c: 0, w: 0 }, attackHist = [];
let defenseQs = [], defenseIdx = 0, defenseScore = { c: 0, w: 0 }, defenseHist = [];
let troubleshootQs = [], troubleshootIdx = 0, troubleshootScore = { c: 0, w: 0 }, troubleshootHist = [];
let cablingQs = [], cablingIdx = 0, cablingScore = { c: 0, w: 0 }, cablingHist = [];
let svcIssueQs = [], svcIssueIdx = 0, svcIssueScore = { c: 0, w: 0 }, svcIssueHist = [];
let perfQs = [], perfIdx = 0, perfScore = { c: 0, w: 0 }, perfHist = [];
let toolsQs = [], toolsIdx = 0, toolsScore = { c: 0, w: 0 }, toolsHist = [];
let acronymQs = [], acronymIdx = 0, acronymScore = { c: 0, w: 0 }, acronymHist = [];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  PORTS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function renderPortQ() {
  renderMC('ports', portQs[portIdx], checkPortQ);
  renderDots('ports-dots', portHist);
}

function checkPortQ(chosen, correct) {
  resolveMC('ports', chosen, correct, portScore, portHist);
  updateScore('ports', portScore);
  renderDots('ports-dots', portHist);
  document.getElementById('ports-next').style.display = 'inline-block';
}

function nextPortQ() {
  portIdx++;
  if (portIdx >= portQs.length) { portQs = buildPortQuestions(); portIdx = 0; }
  renderPortQ();
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  CABLES
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function renderCableQ() {
  renderMC('cables', cableQs[cableIdx], checkCableQ);
  renderDots('cables-dots', cableHist);
}

function checkCableQ(chosen, correct) {
  resolveMC('cables', chosen, correct, cableScore, cableHist);
  updateScore('cables', cableScore);
  renderDots('cables-dots', cableHist);
  document.getElementById('cables-next').style.display = 'inline-block';
}

function nextCableQ() {
  cableIdx++;
  if (cableIdx >= cableQs.length) { cableQs = shuffle([...CABLE_QUESTIONS]); cableIdx = 0; }
  renderCableQ();
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  CLOUD CONCEPTS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function renderCloudQ() {
  renderMC('cloud', cloudQs[cloudIdx], checkCloudQ);
  renderDots('cloud-dots', cloudHist);
}

function checkCloudQ(chosen, correct) {
  resolveMC('cloud', chosen, correct, cloudScore, cloudHist);
  updateScore('cloud', cloudScore);
  renderDots('cloud-dots', cloudHist);
  document.getElementById('cloud-next').style.display = 'inline-block';
}

function nextCloudQ() {
  cloudIdx++;
  if (cloudIdx >= cloudQs.length) { cloudQs = shuffle([...CLOUD_QUESTIONS]); cloudIdx = 0; }
  renderCloudQ();
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  NETWORKING FUNDAMENTALS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function renderFundamentalQ() {
  renderMC('fundamental', fundamentalQs[fundamentalIdx], checkFundamentalQ);
  renderDots('fundamental-dots', fundamentalHist);
}

function checkFundamentalQ(chosen, correct) {
  resolveMC('fundamental', chosen, correct, fundamentalScore, fundamentalHist);
  updateScore('fundamental', fundamentalScore);
  renderDots('fundamental-dots', fundamentalHist);
  document.getElementById('fundamental-next').style.display = 'inline-block';
}

function nextFundamentalQ() {
  fundamentalIdx++;
  if (fundamentalIdx >= fundamentalQs.length) { fundamentalQs = shuffle([...FUNDAMENTALS_QUESTIONS]); fundamentalIdx = 0; }
  renderFundamentalQ();
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  CLASSFUL IP
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function renderClassfulQ() {
  renderMC('classful', classfulQs[classfulIdx], checkClassfulQ);
  renderDots('classful-dots', classfulHist);
}

function checkClassfulQ(chosen, correct) {
  resolveMC('classful', chosen, correct, classfulScore, classfulHist);
  updateScore('classful', classfulScore);
  renderDots('classful-dots', classfulHist);
  document.getElementById('classful-next').style.display = 'inline-block';
}

function nextClassfulQ() {
  classfulIdx++;
  if (classfulIdx >= classfulQs.length) { classfulQs = shuffle([...CLASSFUL_QUESTIONS]); classfulIdx = 0; }
  renderClassfulQ();
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  SUBNETTING
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function renderSubnetQ() {
  subnetQ = generateSubnetQ();
  document.getElementById('subnet-meta').textContent    = subnetQ.meta || '';
  document.getElementById('subnet-question').innerHTML  = subnetQ.text;
  document.getElementById('subnet-hint').textContent    = subnetQ.hint;
  const inp = document.getElementById('subnet-answer');
  inp.value    = '';
  inp.className = '';
  inp.disabled  = false;
  document.getElementById('subnet-feedback').style.display = 'none';
  document.getElementById('subnet-next').style.display     = 'none';
  inp.focus();
}

function checkSubnetQ() {
  const inp = document.getElementById('subnet-answer');
  if (inp.disabled) return;
  const normalize = s => s.trim().replace(/^\//, '').toLowerCase();
  const ok = normalize(inp.value) === normalize(subnetQ.answer);
  inp.className = ok ? 'correct' : 'wrong';
  inp.disabled  = true;
  const fb = document.getElementById('subnet-feedback');
  fb.className   = 'feedback ' + (ok ? 'correct' : 'wrong');
  fb.textContent = ok ? '✔ Correct!' : `✘ Answer: ${subnetQ.answer}`;
  fb.style.display = 'block';
  if (ok) subnetScore.c++; else subnetScore.w++;
  updateScore('subnet', subnetScore);
  document.getElementById('subnet-next').style.display = 'inline-block';
}

function nextSubnetQ() { renderSubnetQ(); }

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  ROUTING
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

function renderRoutingQ() {
  renderMC('routing', routingQs[routingIdx], checkRoutingQ);
  renderDots('routing-dots', routingHist);
}

function checkRoutingQ(chosen, correct) {
  resolveMC('routing', chosen, correct, routingScore, routingHist);
  updateScore('routing', routingScore);
  renderDots('routing-dots', routingHist);
  document.getElementById('routing-next').style.display = 'inline-block';
}

function nextRoutingQ() {
  routingIdx++;
  if (routingIdx >= routingQs.length) { routingQs = shuffle([...ROUTING_QUESTIONS]); routingIdx = 0; }
  renderRoutingQ();
}

// Switching / VLANs

function renderSwitchingQ() {
  renderMC('switching', switchingQs[switchingIdx], checkSwitchingQ);
  renderDots('switching-dots', switchingHist);
}

function checkSwitchingQ(chosen, correct) {
  resolveMC('switching', chosen, correct, switchingScore, switchingHist);
  updateScore('switching', switchingScore);
  renderDots('switching-dots', switchingHist);
  document.getElementById('switching-next').style.display = 'inline-block';
}

function nextSwitchingQ() {
  switchingIdx++;
  if (switchingIdx >= switchingQs.length) { switchingQs = shuffle([...SWITCHING_QUESTIONS]); switchingIdx = 0; }
  renderSwitchingQ();
}

// Wireless (2.3)

function renderWirelessQ() {
  renderMC('wireless', wirelessQs[wirelessIdx], checkWirelessQ);
  renderDots('wireless-dots', wirelessHist);
}

function checkWirelessQ(chosen, correct) {
  resolveMC('wireless', chosen, correct, wirelessScore, wirelessHist);
  updateScore('wireless', wirelessScore);
  renderDots('wireless-dots', wirelessHist);
  document.getElementById('wireless-next').style.display = 'inline-block';
}

function nextWirelessQ() {
  wirelessIdx++;
  if (wirelessIdx >= wirelessQs.length) { wirelessQs = shuffle([...WIRELESS_QUESTIONS]); wirelessIdx = 0; }
  renderWirelessQ();
}

// Physical Installations (2.4)

function renderPhysicalQ() {
  renderMC('physical', physicalQs[physicalIdx], checkPhysicalQ);
  renderDots('physical-dots', physicalHist);
}

function checkPhysicalQ(chosen, correct) {
  resolveMC('physical', chosen, correct, physicalScore, physicalHist);
  updateScore('physical', physicalScore);
  renderDots('physical-dots', physicalHist);
  document.getElementById('physical-next').style.display = 'inline-block';
}

function nextPhysicalQ() {
  physicalIdx++;
  if (physicalIdx >= physicalQs.length) { physicalQs = shuffle([...PHYSICAL_QUESTIONS]); physicalIdx = 0; }
  renderPhysicalQ();
}

// Organizational Processes & Procedures (3.1)

function renderOrgProcQ() {
  renderMC('orgproc', orgprocQs[orgprocIdx], checkOrgProcQ);
  renderDots('orgproc-dots', orgprocHist);
}

function checkOrgProcQ(chosen, correct) {
  resolveMC('orgproc', chosen, correct, orgprocScore, orgprocHist);
  updateScore('orgproc', orgprocScore);
  renderDots('orgproc-dots', orgprocHist);
  document.getElementById('orgproc-next').style.display = 'inline-block';
}

function nextOrgProcQ() {
  orgprocIdx++;
  if (orgprocIdx >= orgprocQs.length) { orgprocQs = shuffle([...ORGPROC_QUESTIONS]); orgprocIdx = 0; }
  renderOrgProcQ();
}

// Network Monitoring Technologies (3.2)

function renderMonitoringQ() {
  renderMC('monitoring', monitoringQs[monitoringIdx], checkMonitoringQ);
  renderDots('monitoring-dots', monitoringHist);
}

function checkMonitoringQ(chosen, correct) {
  resolveMC('monitoring', chosen, correct, monitoringScore, monitoringHist);
  updateScore('monitoring', monitoringScore);
  renderDots('monitoring-dots', monitoringHist);
  document.getElementById('monitoring-next').style.display = 'inline-block';
}

function nextMonitoringQ() {
  monitoringIdx++;
  if (monitoringIdx >= monitoringQs.length) { monitoringQs = shuffle([...MONITORING_QUESTIONS]); monitoringIdx = 0; }
  renderMonitoringQ();
}

// Disaster Recovery Concepts (3.3)

function renderDrQ() {
  renderMC('dr', drQs[drIdx], checkDrQ);
  renderDots('dr-dots', drHist);
}

function checkDrQ(chosen, correct) {
  resolveMC('dr', chosen, correct, drScore, drHist);
  updateScore('dr', drScore);
  renderDots('dr-dots', drHist);
  document.getElementById('dr-next').style.display = 'inline-block';
}

function nextDrQ() {
  drIdx++;
  if (drIdx >= drQs.length) { drQs = shuffle([...DR_QUESTIONS]); drIdx = 0; }
  renderDrQ();
}

// IPv4 and IPv6 Network Services (3.4)

function renderServicesQ() {
  renderMC('services', servicesQs[servicesIdx], checkServicesQ);
  renderDots('services-dots', servicesHist);
}

function checkServicesQ(chosen, correct) {
  resolveMC('services', chosen, correct, servicesScore, servicesHist);
  updateScore('services', servicesScore);
  renderDots('services-dots', servicesHist);
  document.getElementById('services-next').style.display = 'inline-block';
}

function nextServicesQ() {
  servicesIdx++;
  if (servicesIdx >= servicesQs.length) { servicesQs = shuffle([...SERVICES_QUESTIONS]); servicesIdx = 0; }
  renderServicesQ();
}

// Network Access and Management Methods (3.5)

function renderAccessQ() {
  renderMC('access', accessQs[accessIdx], checkAccessQ);
  renderDots('access-dots', accessHist);
}

function checkAccessQ(chosen, correct) {
  resolveMC('access', chosen, correct, accessScore, accessHist);
  updateScore('access', accessScore);
  renderDots('access-dots', accessHist);
  document.getElementById('access-next').style.display = 'inline-block';
}

function nextAccessQ() {
  accessIdx++;
  if (accessIdx >= accessQs.length) { accessQs = shuffle([...ACCESS_QUESTIONS]); accessIdx = 0; }
  renderAccessQ();
}

// Basic Network Security Concepts (4.1)

function renderSecurityQ() {
  renderMC('security', securityQs[securityIdx], checkSecurityQ);
  renderDots('security-dots', securityHist);
}

function checkSecurityQ(chosen, correct) {
  resolveMC('security', chosen, correct, securityScore, securityHist);
  updateScore('security', securityScore);
  renderDots('security-dots', securityHist);
  document.getElementById('security-next').style.display = 'inline-block';
}

function nextSecurityQ() {
  securityIdx++;
  if (securityIdx >= securityQs.length) { securityQs = shuffle([...SECURITY_QUESTIONS]); securityIdx = 0; }
  renderSecurityQ();
}

// Attack Types (4.2)

function renderAttackQ() {
  renderMC('attacks', attackQs[attackIdx], checkAttackQ);
  renderDots('attacks-dots', attackHist);
}

function checkAttackQ(chosen, correct) {
  resolveMC('attacks', chosen, correct, attackScore, attackHist);
  updateScore('attacks', attackScore);
  renderDots('attacks-dots', attackHist);
  document.getElementById('attacks-next').style.display = 'inline-block';
}

function nextAttackQ() {
  attackIdx++;
  if (attackIdx >= attackQs.length) { attackQs = shuffle([...ATTACK_QUESTIONS]); attackIdx = 0; }
  renderAttackQ();
}

// Security Features, Defense Techniques, Solutions (4.3)

function renderDefenseQ() {
  renderMC('defenses', defenseQs[defenseIdx], checkDefenseQ);
  renderDots('defenses-dots', defenseHist);
}

function checkDefenseQ(chosen, correct) {
  resolveMC('defenses', chosen, correct, defenseScore, defenseHist);
  updateScore('defenses', defenseScore);
  renderDots('defenses-dots', defenseHist);
  document.getElementById('defenses-next').style.display = 'inline-block';
}

function nextDefenseQ() {
  defenseIdx++;
  if (defenseIdx >= defenseQs.length) { defenseQs = shuffle([...DEFENSE_QUESTIONS]); defenseIdx = 0; }
  renderDefenseQ();
}

// Troubleshooting Methodology (5.1)

function renderTroubleshootQ() {
  renderMC('troubleshoot', troubleshootQs[troubleshootIdx], checkTroubleshootQ);
  renderDots('troubleshoot-dots', troubleshootHist);
}

function checkTroubleshootQ(chosen, correct) {
  resolveMC('troubleshoot', chosen, correct, troubleshootScore, troubleshootHist);
  updateScore('troubleshoot', troubleshootScore);
  renderDots('troubleshoot-dots', troubleshootHist);
  document.getElementById('troubleshoot-next').style.display = 'inline-block';
}

function nextTroubleshootQ() {
  troubleshootIdx++;
  if (troubleshootIdx >= troubleshootQs.length) { troubleshootQs = shuffle([...TROUBLESHOOT_QUESTIONS]); troubleshootIdx = 0; }
  renderTroubleshootQ();
}

// Cabling & Physical Interface Issues (5.2)

function renderCablingQ() {
  renderMC('cabling', cablingQs[cablingIdx], checkCablingQ);
  renderDots('cabling-dots', cablingHist);
}

function checkCablingQ(chosen, correct) {
  resolveMC('cabling', chosen, correct, cablingScore, cablingHist);
  updateScore('cabling', cablingScore);
  renderDots('cabling-dots', cablingHist);
  document.getElementById('cabling-next').style.display = 'inline-block';
}

function nextCablingQ() {
  cablingIdx++;
  if (cablingIdx >= cablingQs.length) { cablingQs = shuffle([...CABLING_QUESTIONS]); cablingIdx = 0; }
  renderCablingQ();
}

// Network Service Issues (5.3)

function renderSvcIssueQ() {
  renderMC('svcissues', svcIssueQs[svcIssueIdx], checkSvcIssueQ);
  renderDots('svcissues-dots', svcIssueHist);
}

function checkSvcIssueQ(chosen, correct) {
  resolveMC('svcissues', chosen, correct, svcIssueScore, svcIssueHist);
  updateScore('svcissues', svcIssueScore);
  renderDots('svcissues-dots', svcIssueHist);
  document.getElementById('svcissues-next').style.display = 'inline-block';
}

function nextSvcIssueQ() {
  svcIssueIdx++;
  if (svcIssueIdx >= svcIssueQs.length) { svcIssueQs = shuffle([...SVCISSUE_QUESTIONS]); svcIssueIdx = 0; }
  renderSvcIssueQ();
}

// Performance Issues (5.4)

function renderPerfQ() {
  renderMC('perf', perfQs[perfIdx], checkPerfQ);
  renderDots('perf-dots', perfHist);
}

function checkPerfQ(chosen, correct) {
  resolveMC('perf', chosen, correct, perfScore, perfHist);
  updateScore('perf', perfScore);
  renderDots('perf-dots', perfHist);
  document.getElementById('perf-next').style.display = 'inline-block';
}

function nextPerfQ() {
  perfIdx++;
  if (perfIdx >= perfQs.length) { perfQs = shuffle([...PERF_QUESTIONS]); perfIdx = 0; }
  renderPerfQ();
}

// Tools & Protocols (5.5)

function renderToolsQ() {
  renderMC('tools', toolsQs[toolsIdx], checkToolsQ);
  renderDots('tools-dots', toolsHist);
}

function checkToolsQ(chosen, correct) {
  resolveMC('tools', chosen, correct, toolsScore, toolsHist);
  updateScore('tools', toolsScore);
  renderDots('tools-dots', toolsHist);
  document.getElementById('tools-next').style.display = 'inline-block';
}

function nextToolsQ() {
  toolsIdx++;
  if (toolsIdx >= toolsQs.length) { toolsQs = shuffle([...TOOLS_QUESTIONS]); toolsIdx = 0; }
  renderToolsQ();
}

// Acronyms (N10-009 acronym appendix)

function renderAcronymQ() {
  renderMC('acronym', acronymQs[acronymIdx], checkAcronymQ);
  renderDots('acronym-dots', acronymHist);
}

function checkAcronymQ(chosen, correct) {
  resolveMC('acronym', chosen, correct, acronymScore, acronymHist);
  updateScore('acronym', acronymScore);
  renderDots('acronym-dots', acronymHist);
  document.getElementById('acronym-next').style.display = 'inline-block';
}

function nextAcronymQ() {
  acronymIdx++;
  if (acronymIdx >= acronymQs.length) { acronymQs = buildAcronymQuestions(); acronymIdx = 0; }
  renderAcronymQ();
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  NAV
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const DOMAIN_SECTIONS = {
  domain1: ['ports', 'cables', 'classful', 'fundamental', 'cloud', 'subnetting'],
  domain2: ['routing', 'switching', 'wireless', 'physical'],
  domain3: ['orgproc', 'monitoring', 'dr', 'services', 'access'],
  domain4: ['security', 'attacks', 'defenses'],
  domain5: ['troubleshoot', 'cabling', 'svcissues', 'perf', 'tools'],
};

let activeDomain = 'domain1';

function toggleDomainDropdown(domainId) {
  const menu = document.getElementById(`${domainId}-tabs`);
  const isOpen = menu.classList.contains('open');
  // Close all dropdowns
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  if (!isOpen) {
    // On mobile the nav scrolls horizontally and clips its children, so the
    // menu is position:fixed there — pin it just below the nav bar.
    const navBottom = document.getElementById('domain-nav').getBoundingClientRect().bottom;
    menu.style.setProperty('--menu-top', navBottom + 'px');
    menu.classList.add('open');
  }
}

function selectSection(name, domainId) {
  activeDomain = domainId;
  // Mark the domain button active
  document.querySelectorAll('.domain-dropdown > button').forEach(b => b.classList.remove('active'));
  document.querySelector(`#dd-${domainId} > button`).classList.add('active');
  // Close dropdown
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  showSection(name);
}

// Standalone top-level section (sibling of the domain dropdowns, e.g. Acronyms)
function selectStandalone(name) {
  activeDomain = null;
  document.querySelectorAll('.domain-dropdown > button').forEach(b => b.classList.remove('active'));
  document.querySelector(`#dd-${name} > button`).classList.add('active');
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(name).classList.add('active');
}

function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  const tabs = document.querySelectorAll(`#${activeDomain}-tabs .sec-btn`);
  DOMAIN_SECTIONS[activeDomain].forEach((s, i) => {
    if (tabs[i]) tabs[i].classList.toggle('active', s === name);
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.domain-dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  }
});

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  INIT
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

document.addEventListener('DOMContentLoaded', () => {
  portQs        = buildPortQuestions();
  cableQs       = shuffle([...CABLE_QUESTIONS]);
  classfulQs    = shuffle([...CLASSFUL_QUESTIONS]);
  fundamentalQs = shuffle([...FUNDAMENTALS_QUESTIONS]);
  cloudQs       = shuffle([...CLOUD_QUESTIONS]);
  routingQs     = shuffle([...ROUTING_QUESTIONS]);
  switchingQs   = shuffle([...SWITCHING_QUESTIONS]);
  wirelessQs    = shuffle([...WIRELESS_QUESTIONS]);
  physicalQs   = shuffle([...PHYSICAL_QUESTIONS]);
  orgprocQs    = shuffle([...ORGPROC_QUESTIONS]);
  monitoringQs = shuffle([...MONITORING_QUESTIONS]);
  drQs         = shuffle([...DR_QUESTIONS]);
  servicesQs   = shuffle([...SERVICES_QUESTIONS]);
  accessQs     = shuffle([...ACCESS_QUESTIONS]);
  securityQs   = shuffle([...SECURITY_QUESTIONS]);
  attackQs     = shuffle([...ATTACK_QUESTIONS]);
  defenseQs    = shuffle([...DEFENSE_QUESTIONS]);
  troubleshootQs = shuffle([...TROUBLESHOOT_QUESTIONS]);
  cablingQs    = shuffle([...CABLING_QUESTIONS]);
  svcIssueQs   = shuffle([...SVCISSUE_QUESTIONS]);
  perfQs       = shuffle([...PERF_QUESTIONS]);
  toolsQs      = shuffle([...TOOLS_QUESTIONS]);
  acronymQs    = buildAcronymQuestions();
  renderPortQ();
  renderCableQ();
  renderClassfulQ();
  renderFundamentalQ();
  renderCloudQ();
  renderSubnetQ();
  renderRoutingQ();
  renderSwitchingQ();
  renderWirelessQ();
  renderPhysicalQ();
  renderOrgProcQ();
  renderMonitoringQ();
  renderDrQ();
  renderServicesQ();
  renderAccessQ();
  renderSecurityQ();
  renderAttackQ();
  renderDefenseQ();
  renderTroubleshootQ();
  renderCablingQ();
  renderSvcIssueQ();
  renderPerfQ();
  renderToolsQ();
  renderAcronymQ();

  document.getElementById('subnet-answer').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (!document.getElementById('subnet-answer').disabled) checkSubnetQ();
    else nextSubnetQ();
  });
});


