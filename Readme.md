Big Data Cybersecurity Dashboard
A comprehensive, interactive cybersecurity dashboard that visualizes security incidents with real-time data analysis and alerting capabilities.

🚀 Features
Core Functionality
Interactive Dashboard: Single-page web application with real-time incident visualization
Data Generation: Automated script to generate realistic cybersecurity incident data
Rich Visualizations: Line charts for temporal analysis and pie charts for severity distribution
Smart Filtering: Filter incidents by severity level and event type
Critical Alerts: Pop-up notifications for critical security incidents
Responsive Design: Works seamlessly on desktop and mobile devices
Dashboard Components
Statistics Overview: Total incidents and critical incident counts
Time-Series Chart: 24-hour incident timeline grouped by hour
Severity Distribution: Pie chart showing incident severity breakdown
Recent Incidents Table: Top 20 most recent incidents with color-coded severity
Interactive Filters: Real-time filtering by severity and event type
Critical Alerts: Auto-popup notifications for critical incidents
📁 File Structure
cybersecurity-dashboard/
├── generate_data.js       # Node.js script to generate sample data
├── incidents.json         # Generated cybersecurity incidents dataset
├── dashboard.html         # Main dashboard web application
└── README.md             # This documentation file
🛠️ Setup & Installation
Prerequisites
Node.js (for data generation script)
Modern web browser (Chrome, Firefox, Safari, Edge)
Local web server (optional, for CORS compliance)
Quick Start
Generate Sample Data
bash
   # Run the data generator
   node generate_data.js
This creates incidents.json with 100 sample cybersecurity incidents.

Launch Dashboard
Option A (Simple): Double-click dashboard.html
Option B (Recommended): Use a local web server
bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
Navigate to http://localhost:8000/dashboard.html
View Dashboard
The dashboard will automatically load incidents.json
Critical incident alerts will appear in the top-right corner
Use filters to analyze specific incident types or severities
📊 Data Schema
Each incident in incidents.json contains:

json
{
  "id": "uuid-string",                    // Unique identifier
  "timestamp": "2025-09-21T14:32:15.742Z", // ISO 8601 timestamp
  "source": "firewall",                   // Source: firewall, antivirus, cloud_audit
  "severity": "critical",                 // Severity: low, medium, high, critical
  "event_type": "suspicious_connection",  // Event type (5 types available)
  "src_ip": "192.168.1.45",              // Source IPv4 address
  "dst_ip": "10.0.0.23",                 // Destination IPv4 address
  "user": "unknown",                      // User involved (8 predefined users)
  "host": "host-012.example.com",         // Target host (host-001 to host-050)
  "threat_score": 85,                     // Threat level (1-100)
  "description": "Simulated event for demo" // Event description
}
Event Types
failed_login: Authentication failures
malware_detected: Malicious software detection
suspicious_connection: Unusual network activity
privileged_action: Administrative actions
file_change: File system modifications
Severity Levels
Critical: Immediate attention required (red)
High: High priority incidents (orange)
Medium: Moderate priority (yellow)
Low: Informational events (green)
🎨 Dashboard Features
Visual Components
Modern Glass-morphism Design: Sleek, professional appearance
Color-coded Severity: Instant visual severity identification
Responsive Layout: Adapts to different screen sizes
Interactive Charts: Hover tooltips with detailed information
Real-time Filtering: Dynamic data updates without page refresh
Chart Details
Time Series Chart: Shows incident distribution over 24 hours
Smooth line chart with area fill
Hourly grouping for trend analysis
Interactive hover tooltips
Severity Pie Chart: Visual breakdown of incident severities
Color-coded segments
Percentage and count tooltips
Alert System
Critical Incident Popup: Automatic alerts for critical events
Auto-dismiss: Alerts disappear after 5 seconds
Click-to-dismiss: Manual dismissal available
Staggered Display: Multiple alerts appear sequentially
🔧 Customization
Modifying Data Generation
Edit generate_data.js to customize:

Number of incidents (INCIDENT_COUNT)
Available sources, severities, event types
User names and host ranges
Time range for incident generation
Dashboard Styling
Modify CSS variables in dashboard.html:

Color schemes
Chart dimensions
Layout breakpoints
Animation timings
Adding New Features
The modular JavaScript structure allows easy extension:

Additional chart types
New filter categories
Enhanced alert mechanisms
Export functionality
🛡️ Security Considerations
Local Data Only: No external data transmission
Static Files: No server-side processing required
CORS Compliance: Works with local web servers
Client-side Processing: All data analysis in browser
📱 Browser Compatibility
Chrome: Full support
Firefox: Full support
Safari: Full support
Edge: Full support
Mobile browsers: Responsive design optimized
🚀 Performance
Fast Loading: Optimized for 100+ incident records
Efficient Rendering: Chart.js for hardware acceleration
Memory Efficient: Client-side data processing
Smooth Animations: CSS transitions and transforms
🔍 Troubleshooting
Common Issues
Dashboard shows "Loading..." forever
Ensure incidents.json is in the same directory
Check browser console for CORS errors
Use a local web server instead of file:// protocol
Charts not displaying
Verify Chart.js CDN is accessible
Check network connection for CDN resources
Inspect browser console for JavaScript errors
No data generation
Ensure Node.js is installed
Run node --version to verify installation
Check file permissions in the directory
Alerts not appearing
Verify there are critical incidents in the data
Check if browser is blocking popups
Look for JavaScript errors in console
Debug Mode
Open browser developer tools (F12) and check:

Console for error messages
Network tab for failed resource loads
Elements tab for DOM structure
🤝 Contributing
Feel free to enhance this dashboard:

Add new visualization types
Implement additional filtering options
Create export functionality
Improve mobile responsiveness
Add more realistic threat intelligence data
📄 License
This project is provided as-is for educational and demonstration purposes. Modify and distribute as needed for your cybersecurity monitoring requirements.

