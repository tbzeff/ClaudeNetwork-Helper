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
  q.choices.forEach(c => {
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
  fb.textContent = ok ? 'âœ“ Correct!' : `âœ— Answer: ${correct}`;
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

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  STATE
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

let portQs = [], portIdx = 0, portScore = { c: 0, w: 0 }, portHist = [];
let cableQs = [], cableIdx = 0, cableScore = { c: 0, w: 0 }, cableHist = [];
let classfulQs = [], classfulIdx = 0, classfulScore = { c: 0, w: 0 }, classfulHist = [];
let cloudQs = [], cloudIdx = 0, cloudScore = { c: 0, w: 0 }, cloudHist = [];
let fundamentalQs = [], fundamentalIdx = 0, fundamentalScore = { c: 0, w: 0 }, fundamentalHist = [];
let subnetQ = null, subnetScore = { c: 0, w: 0 };
let routingQs = [], routingIdx = 0, routingScore = { c: 0, w: 0 }, routingHist = [];

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
  fb.textContent = ok ? 'âœ“ Correct!' : `âœ— Answer: ${subnetQ.answer}`;
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

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  NAV
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const DOMAIN_SECTIONS = {
  domain1: ['ports', 'cables', 'classful', 'fundamental', 'cloud', 'subnetting'],
  domain2: ['routing'],
};

let activeDomain = 'domain1';

function toggleDomainDropdown(domainId) {
  const menu = document.getElementById(`${domainId}-tabs`);
  const isOpen = menu.classList.contains('open');
  // Close all dropdowns
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  if (!isOpen) menu.classList.add('open');
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
  renderPortQ();
  renderCableQ();
  renderClassfulQ();
  renderFundamentalQ();
  renderCloudQ();
  renderSubnetQ();
  renderRoutingQ();

  document.getElementById('subnet-answer').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (!document.getElementById('subnet-answer').disabled) checkSubnetQ();
    else nextSubnetQ();
  });
});


