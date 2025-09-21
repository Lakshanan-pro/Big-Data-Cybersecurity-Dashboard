// Data Generator Script for Cybersecurity Incidents
// Run with: node generate_data.js

const fs = require('fs');
const crypto = require('crypto');

// Configuration
const INCIDENT_COUNT = 100;
const SOURCES = ['firewall', 'antivirus', 'cloud_audit'];
const SEVERITIES = ['low', 'medium', 'high', 'critical'];
const EVENT_TYPES = ['failed_login', 'malware_detected', 'suspicious_connection', 'privileged_action', 'file_change'];
const USERS = ['alice', 'bob', 'carol', 'dave', 'eve', 'system', 'svc-backup', 'unknown'];

// Helper functions
function generateUUID() {
    return crypto.randomUUID();
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomIP() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

function randomHost() {
    const hostNum = String(Math.floor(Math.random() * 50) + 1).padStart(3, '0');
    return `host-${hostNum}.example.com`;
}

function randomTimestamp() {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const randomTime = twentyFourHoursAgo.getTime() + Math.random() * (now.getTime() - twentyFourHoursAgo.getTime());
    return new Date(randomTime).toISOString();
}

function randomThreatScore() {
    return Math.floor(Math.random() * 100) + 1;
}

function generateIncident() {
    return {
        id: generateUUID(),
        timestamp: randomTimestamp(),
        source: randomChoice(SOURCES),
        severity: randomChoice(SEVERITIES),
        event_type: randomChoice(EVENT_TYPES),
        src_ip: randomIP(),
        dst_ip: randomIP(),
        user: randomChoice(USERS),
        host: randomHost(),
        threat_score: randomThreatScore(),
        description: "Simulated event for demo"
    };
}

// Generate incidents
console.log(`Generating ${INCIDENT_COUNT} cybersecurity incidents...`);
const incidents = [];

for (let i = 0; i < INCIDENT_COUNT; i++) {
    incidents.push(generateIncident());
}

// Sort by timestamp (most recent first)
incidents.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

// Write to JSON file
const jsonData = JSON.stringify(incidents, null, 2);
fs.writeFileSync('incidents.json', jsonData);

console.log('✅ incidents.json generated successfully!');
console.log(`📊 Generated ${incidents.length} incidents`);
console.log(`🔴 Critical incidents: ${incidents.filter(i => i.severity === 'critical').length}`);
console.log(`🟡 High severity incidents: ${incidents.filter(i => i.severity === 'high').length}`);
console.log(`🟢 Medium severity incidents: ${incidents.filter(i => i.severity === 'medium').length}`);
console.log(`⚪ Low severity incidents: ${incidents.filter(i => i.severity === 'low').length}`);