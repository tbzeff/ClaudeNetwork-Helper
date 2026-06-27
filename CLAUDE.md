# Network+ Study Helper — Project Context

## Purpose
A browser-based (single HTML + CSS + JS) study tool for the CompTIA Network+ N10-009 exam.
No build step, no server — open `networkplus.html` directly in a browser.

## File Structure
```
networkplus.html   — section markup and nav only; no inline styles or scripts
networkplus.css    — all visual styles
networkplus.js     — all data arrays, question builders, state, and logic
```

### Pattern for adding a new topic section
1. Add a `const TOPIC_QUESTIONS = [...]` data array in `networkplus.js`
2. Add state variables: `let topicQs, topicIdx, topicScore, topicHist`
3. Add `renderTopicQ`, `checkTopicQ`, `nextTopicQ` functions (follow the existing MC pattern)
4. Add `'topic'` to the `SECTIONS` array
5. Add init calls in `DOMContentLoaded`
6. Add the section HTML block in `networkplus.html` (copy an existing section, swap IDs)
7. Add a nav `<button>` in `networkplus.html`

For free-text answer sections (like Subnetting), follow the `subnet-*` pattern instead.

## Exam: N10-009
- **Max questions:** 90 | **Time:** 90 min | **Types:** Multiple choice + performance-based
- **Passing score:** 720/900

---

## Domain Weights & Objectives

### Domain 1 — Networking Concepts (23%)

**1.1** OSI model layers
- L1 Physical, L2 Data Link, L3 Network, L4 Transport, L5 Session, L6 Presentation, L7 Application

**1.2** Networking appliances, applications, functions
- Appliances: Router, Switch, Firewall, IDS/IPS, Load balancer, Proxy, NAS, SAN, Wireless AP/Controller
- Applications: CDN
- Functions: VPN, QoS, TTL

**1.3** Cloud concepts and connectivity
- NFV, VPC, Network security groups/lists, Cloud gateways (Internet gateway, NAT gateway)
- Connectivity: VPN, Direct Connect
- Deployment: Public, Private, Hybrid
- Service models: SaaS, IaaS, PaaS
- Scalability, Elasticity, Multitenancy

**1.4** Ports, protocols, services, traffic types ✅ IMPLEMENTED
- See PORT_DATA in networkplus.js — must match this list exactly:
  - FTP 20/21, SFTP 22, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, TFTP 69,
    HTTP 80, NTP 123, SNMP 161/162, LDAP 389, HTTPS 443, SMB 445, Syslog 514,
    SMTPS 587, LDAPS 636, SQL Server 1433, RDP 3389, SIP 5060/5061
- IP types: ICMP, TCP, UDP, GRE, IPSec (AH, ESP, IKE)
- Traffic types: Unicast, Multicast, Anycast, Broadcast

**1.5** Transmission media and transceivers ✅ IMPLEMENTED (Cable Standards section)
- Wireless: 802.11 standards, Cellular, Satellite
- Wired: 802.3 standards, Single-mode vs. multimode fiber, DAC/Twinaxial, Coaxial, Plenum vs. non-plenum
- Transceivers: SFP, QSFP; Ethernet, Fibre Channel
- Connectors: SC, LC, ST, MPO, RJ11, RJ45, F-type, BNC

**1.6** Network topologies, architectures, types
- Mesh, Hybrid, Star/hub-and-spoke, Spine and leaf, Point to point
- Three-tier hierarchical: Core, Distribution, Access; Collapsed core
- Traffic flows: North-south, East-west

**1.7** IPv4 network addressing ✅ IMPLEMENTED (Classful IP + Subnetting sections)
- Public vs. private; APIPA; RFC1918; Loopback/localhost
- Subnetting: VLSM, CIDR
- Classes: A, B, C, D, E

**1.8** Evolving use cases
- SDN/SD-WAN (application aware, zero-touch provisioning, transport agnostic, central policy)
- VXLAN (DCI, Layer 2 encapsulation)
- Zero Trust Architecture (ZTA): policy-based auth, authorization, least privilege
- SASE/SSE
- Infrastructure as Code (IaC): automation (playbooks, config drift, upgrades, dynamic inventories), source control (version control, central repo, conflict ID, branching)
- IPv6: address exhaustion mitigation, tunneling, dual stack, NAT64

---

### Domain 2 — Network Implementation (20%)

**2.1** Routing technologies
- Static routing; Dynamic routing: BGP, EIGRP, OSPF
- Route selection: administrative distance, prefix length, metric
- Address translation: NAT, PAT
- FHRP, Virtual IP (VIP), Subinterfaces

**2.2** Switching technologies and features
- VLAN: VLAN database, SVI
- Interface config: Native VLAN, Voice VLAN, 802.1Q tagging, link aggregation, speed, duplex
- Spanning tree, MTU/Jumbo frames

**2.3** Wireless devices and technologies
- Channels: width, non-overlapping, 802.11h regulatory
- Frequencies: 2.4 GHz, 5 GHz, 6 GHz, band steering
- SSID, BSSID, ESSID
- Network types: Mesh, Ad hoc, Point to point, Infrastructure
- Encryption: WPA2, WPA3
- Guest networks / captive portals
- Authentication: PSK vs. Enterprise
- Antennas: omnidirectional vs. directional
- Autonomous vs. lightweight AP

**2.4** Physical installations
- IDF/MDF, rack size, port-side exhaust/intake, patch panels, fiber distribution panel, lockable
- Power: UPS, PDU, power load, voltage
- Environmental: humidity, fire suppression, temperature

---

### Domain 3 — Network Operations (19%)

**3.1** Organizational processes and procedures
- Documentation: physical/logical diagrams, rack diagrams, cable maps, Layer 1/2/3 network diagrams, asset inventory (hardware/software/licensing/warranty), IPAM, SLA, wireless heat maps
- Life-cycle: EOL, EOS, software management (patches, OS, firmware), decommissioning
- Change management: request/tracking
- Config management: production, backup, baseline/golden config

**3.2** Network monitoring technologies
- Methods: SNMP (traps, MIB, v2c/v3, community strings, auth), flow data, packet capture, baseline metrics/anomaly alerting, log aggregation (Syslog, SIEM), API integration, port mirroring
- Solutions: network discovery (ad hoc/scheduled), traffic analysis, performance/availability/config monitoring

**3.3** Disaster recovery concepts
- DR metrics: RPO, RTO, MTTR, MTBF
- DR sites: cold, warm, hot
- High availability: active-active, active-passive
- Testing: tabletop exercises, validation tests

**3.4** IPv4 and IPv6 network services
- DHCP: reservations, scope, lease time, options, relay/IP helper, exclusions
- SLAAC
- DNS: DNSSEC, DoH, DoT; record types (A, AAAA, CNAME, MX, TXT, NS, PTR); zone types (forward/reverse); authoritative vs. non-authoritative; primary vs. secondary; recursive; hosts file
- Time protocols: NTP, PTP, NTS

**3.5** Network access and management methods
- VPN: site-to-site, client-to-site (clientless, split tunnel vs. full tunnel)
- Connection methods: SSH, GUI, API, console
- Jump box/host
- In-band vs. out-of-band management

---

### Domain 4 — Network Security (14%)

**4.1** Basic network security concepts
- Logical security: encryption (data in transit/at rest), PKI/certificates
- IAM: MFA, SSO, RADIUS, LDAP, SAML, TACACS+, time-based auth; authorization: least privilege, RBAC; geofencing
- Physical security: cameras, locks
- Deception: honeypot, honeynet
- CIA triad; risk, vulnerability, exploit, threat
- Compliance: data locality, PCI DSS, GDPR
- Segmentation: IoT/IIoT, SCADA/ICS/OT, Guest, BYOD

**4.2** Attack types
- DoS/DDoS, VLAN hopping, MAC flooding, ARP poisoning/spoofing, DNS poisoning/spoofing
- Rogue DHCP/AP, evil twin, on-path attack
- Social engineering: phishing, dumpster diving, shoulder surfing, tailgating
- Malware

**4.3** Security features, defense techniques, solutions
- Device hardening: disable unused ports/services, change default passwords
- NAC: port security, 802.1X, MAC filtering
- Key management
- Security rules: ACL, URL filtering, content filtering
- Zones: trusted vs. untrusted, screened subnet

---

### Domain 5 — Network Troubleshooting (24%)

**5.1** Troubleshooting methodology
1. Identify the problem (gather info, question users, identify symptoms, check changes, duplicate, isolate)
2. Establish theory of probable cause (question obvious; OSI top-down/bottom-up or divide & conquer)
3. Test the theory
4. Establish plan of action
5. Implement or escalate
6. Verify full functionality + preventive measures
7. Document findings/actions/outcomes/lessons learned

**5.2** Cabling and physical interface issues
- Cable issues: incorrect type (SM/MM, Cat5/6/7/8, STP/UTP), signal degradation (crosstalk, interference, attenuation), improper termination, TX/RX transposed
- Interface issues: CRC, runts, giants, drops; port states (error disabled, admin down, suspended)
- Hardware: PoE (power budget exceeded, incorrect standard), transceiver mismatch/signal strength

**5.3** Network service issues
- STP: loops, root bridge selection, port roles/states
- Incorrect VLAN assignment, ACLs
- Route selection: routing table, default routes
- Address pool exhaustion, incorrect default gateway, incorrect/duplicate IP, incorrect subnet mask

**5.4** Performance issues
- Congestion/contention, bottlenecking, bandwidth/throughput, latency, packet loss, jitter
- Wireless: channel overlap interference, signal degradation/loss, insufficient coverage, client disassociation, roaming misconfiguration

**5.5** Tools and protocols
- Software: protocol analyzer, ping, traceroute/tracert, nslookup, tcpdump, dig, netstat, ip/ifconfig/ipconfig, arp, Nmap, LLDP/CDP, speed tester
- Hardware: toner, cable tester, taps, Wi-Fi analyzer, visual fault locator
- Device commands: show mac-address-table, show route, show interface, show config, show arp, show vlan, show power

---

## Current Implementation Status

**Status key:** ✅ Done (verified) | 🟡 Unverified (implemented, not yet audited) | ⬜ Not yet (unimplemented)

| Section (tab)     | Domain / Objective | Status      |
|-------------------|--------------------|-------------|
| Ports & Protocols | 1.4                | ✅ Done     |
| Cable Standards   | 1.5                | ✅ Done     |
| Classful IP       | 1.7                | ✅ Done     |
| Subnetting + VLSM | 1.7                | ✅ Done     |
| Net Fundamentals  | 1.1 + 1.2 + 1.6    | ✅ Done     |
| — OSI Model       | 1.1                | ✅ Done     |
| — Network Devices | 1.2                | ✅ Done     |
| — Topologies      | 1.6                | ✅ Done     |
| Cloud Concepts    | 1.3                | ✅ Done     |
| Routing           | 2.1                | ✅ Done     |
| Switching/VLANs   | 2.2                | ⬜ Not yet  |
| Wireless          | 2.3                | ⬜ Not yet  |
| DNS Record Types  | 3.4                | ⬜ Not yet  |
| DR Concepts       | 3.3                | ⬜ Not yet  |
| Security Concepts | 4.1                | ⬜ Not yet  |
| Attack Types      | 4.2                | ⬜ Not yet  |
| Troubleshooting   | 5.1–5.5            | ⬜ Not yet  |

## Key Constraints
- Question content must align strictly with the N10-009 objectives — no topics outside this document
- PORT_DATA in networkplus.js must match objective 1.4's table exactly (user has already edited it to match)
- The app runs entirely offline from the filesystem — no CDN links, no fetch calls
