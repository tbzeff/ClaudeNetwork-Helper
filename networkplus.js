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

//  STATE
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

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

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  NAV
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const DOMAIN_SECTIONS = {
  domain1: ['ports', 'cables', 'classful', 'fundamental', 'cloud', 'subnetting'],
  domain2: ['routing', 'switching', 'wireless', 'physical'],
  domain3: ['orgproc'],
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
  switchingQs   = shuffle([...SWITCHING_QUESTIONS]);
  wirelessQs    = shuffle([...WIRELESS_QUESTIONS]);
  physicalQs   = shuffle([...PHYSICAL_QUESTIONS]);
  orgprocQs    = shuffle([...ORGPROC_QUESTIONS]);
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

  document.getElementById('subnet-answer').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    if (!document.getElementById('subnet-answer').disabled) checkSubnetQ();
    else nextSubnetQ();
  });
});


