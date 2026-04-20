"use client";

import { useState } from "react";
import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import { ServerManagementTable } from "@/components/server-management-table";
import { Component as Footer } from "@/components/footer-taped-design";
import type { Server } from "@/components/server-management-table";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const events = [
  { id: "1", name: "Cybersecurity Workshop", date: "May 10, 2026", type: "Workshop", capacity: 30 },
  { id: "2", name: "CTF Competition", date: "June 5, 2026", type: "CTF", capacity: 50 },
  { id: "3", name: "Network Security Seminar", date: "June 20, 2026", type: "Seminar", capacity: 100 },
];

const participantsByEvent: Record<string, Server[]> = {
  "1": [
    { id: "1", number: "01", serviceName: "Abebe Kebede", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "de", ip: "abebe@haramaya.edu.et", dueDate: "Apr 20, 2026", cpuPercentage: 90, status: "active" },
    { id: "2", number: "02", serviceName: "Tigist Haile", osType: "windows", serviceLocation: "Software Engineering", countryCode: "us", ip: "tigist@haramaya.edu.et", dueDate: "Apr 21, 2026", cpuPercentage: 75, status: "active" },
    { id: "3", number: "03", serviceName: "Dawit Tesfaye", osType: "ubuntu", serviceLocation: "Information Systems", countryCode: "fr", ip: "dawit@haramaya.edu.et", dueDate: "Apr 22, 2026", cpuPercentage: 60, status: "paused" },
    { id: "4", number: "04", serviceName: "Meron Alemu", osType: "windows", serviceLocation: "Computer Science", countryCode: "us", ip: "meron@haramaya.edu.et", dueDate: "Apr 23, 2026", cpuPercentage: 85, status: "active" },
    { id: "5", number: "05", serviceName: "Yonas Girma", osType: "ubuntu", serviceLocation: "Cybersecurity", countryCode: "de", ip: "yonas@haramaya.edu.et", dueDate: "Apr 24, 2026", cpuPercentage: 40, status: "inactive" },
    { id: "6", number: "06", serviceName: "Selam Bekele", osType: "windows", serviceLocation: "Computer Science", countryCode: "fr", ip: "selam@haramaya.edu.et", dueDate: "Apr 25, 2026", cpuPercentage: 70, status: "active" },
    { id: "7", number: "07", serviceName: "Biruk Tadesse", osType: "ubuntu", serviceLocation: "Software Engineering", countryCode: "de", ip: "biruk@haramaya.edu.et", dueDate: "Apr 26, 2026", cpuPercentage: 55, status: "paused" },
  ],
  "2": [
    { id: "1", number: "01", serviceName: "Hana Mulugeta", osType: "windows", serviceLocation: "Cybersecurity", countryCode: "us", ip: "hana@haramaya.edu.et", dueDate: "May 01, 2026", cpuPercentage: 95, status: "active" },
    { id: "2", number: "02", serviceName: "Samuel Worku", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "de", ip: "samuel@haramaya.edu.et", dueDate: "May 02, 2026", cpuPercentage: 80, status: "active" },
    { id: "3", number: "03", serviceName: "Liya Getachew", osType: "windows", serviceLocation: "Information Systems", countryCode: "fr", ip: "liya@haramaya.edu.et", dueDate: "May 03, 2026", cpuPercentage: 65, status: "active" },
    { id: "4", number: "04", serviceName: "Natnael Desta", osType: "ubuntu", serviceLocation: "Software Engineering", countryCode: "us", ip: "natnael@haramaya.edu.et", dueDate: "May 04, 2026", cpuPercentage: 50, status: "paused" },
    { id: "5", number: "05", serviceName: "Marcus Lee", osType: "windows", serviceLocation: "Cybersecurity", countryCode: "de", ip: "marcus@haramaya.edu.et", dueDate: "May 05, 2026", cpuPercentage: 30, status: "inactive" },
    { id: "6", number: "06", serviceName: "Emily Chen", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "fr", ip: "emily@haramaya.edu.et", dueDate: "May 06, 2026", cpuPercentage: 88, status: "active" },
    { id: "7", number: "07", serviceName: "James Wilson", osType: "windows", serviceLocation: "Information Systems", countryCode: "us", ip: "james@haramaya.edu.et", dueDate: "May 07, 2026", cpuPercentage: 72, status: "active" },
  ],
  "3": [
    { id: "1", number: "01", serviceName: "Sara Johnson", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "de", ip: "sara@haramaya.edu.et", dueDate: "Jun 01, 2026", cpuPercentage: 85, status: "active" },
    { id: "2", number: "02", serviceName: "Abebe Kebede", osType: "windows", serviceLocation: "Cybersecurity", countryCode: "us", ip: "abebe@haramaya.edu.et", dueDate: "Jun 02, 2026", cpuPercentage: 70, status: "active" },
    { id: "3", number: "03", serviceName: "Tigist Haile", osType: "ubuntu", serviceLocation: "Software Engineering", countryCode: "fr", ip: "tigist@haramaya.edu.et", dueDate: "Jun 03, 2026", cpuPercentage: 45, status: "paused" },
    { id: "4", number: "04", serviceName: "Dawit Tesfaye", osType: "windows", serviceLocation: "Information Systems", countryCode: "de", ip: "dawit@haramaya.edu.et", dueDate: "Jun 04, 2026", cpuPercentage: 90, status: "active" },
    { id: "5", number: "05", serviceName: "Meron Alemu", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "us", ip: "meron@haramaya.edu.et", dueDate: "Jun 05, 2026", cpuPercentage: 25, status: "inactive" },
    { id: "6", number: "06", serviceName: "Yonas Girma", osType: "windows", serviceLocation: "Cybersecurity", countryCode: "fr", ip: "yonas@haramaya.edu.et", dueDate: "Jun 06, 2026", cpuPercentage: 78, status: "active" },
    { id: "7", number: "07", serviceName: "Selam Bekele", osType: "ubuntu", serviceLocation: "Software Engineering", countryCode: "de", ip: "selam@haramaya.edu.et", dueDate: "Jun 07, 2026", cpuPercentage: 62, status: "active" },
  ],
};

export default function ManageParticipantsPage() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const selectedEvent = events.find(e => e.id === selectedEventId);
  const participants = selectedEventId ? participantsByEvent[selectedEventId] || [] : [];

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="Event Management" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Manage Participants</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>
            Oversee participant registrations for each event
          </p>
        </div>

        {/* Event Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {events.map(event => (
            <div key={event.id} onClick={() => setSelectedEventId(event.id)}
              className="p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: selectedEventId === event.id ? '#C9C73C' : '#2E3338',
                border: selectedEventId === event.id ? '1px solid #C9C73C' : '1px solid rgba(246,248,250,0.08)',
              }}>
              <h3 className="font-semibold mb-1" style={{ fontSize: '16px', color: selectedEventId === event.id ? '#111111' : '#F6F8FA' }}>
                {event.name}
              </h3>
              <p style={{ fontSize: '13px', color: selectedEventId === event.id ? 'rgba(17,17,17,0.7)' : 'rgba(246,248,250,0.5)' }}>
                {event.date} • {event.type}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span style={{ fontSize: '13px', color: selectedEventId === event.id ? '#111111' : '#C9C73C' }}>
                  {participantsByEvent[event.id]?.length || 0} / {event.capacity} registered
                </span>
                <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: selectedEventId === event.id ? 'rgba(17,17,17,0.2)' : 'rgba(246,248,250,0.1)' }}>
                  <div className="h-full rounded-full" style={{
                    width: `${((participantsByEvent[event.id]?.length || 0) / event.capacity) * 100}%`,
                    backgroundColor: selectedEventId === event.id ? '#111111' : '#C9C73C'
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Participants Table */}
        {selectedEvent ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-light" style={{ fontSize: '24px', color: '#F6F8FA' }}>
                {selectedEvent.name} — Participants
              </h2>
              <span style={{ fontSize: '14px', color: 'rgba(246,248,250,0.5)' }}>
                {participants.filter(p => p.status === 'active').length} Approved • {participants.filter(p => p.status === 'paused').length} Pending • {participants.filter(p => p.status === 'inactive').length} Rejected
              </span>
            </div>
            <ServerManagementTable
              title={`${selectedEvent.name} Participants`}
              servers={participants}
            />
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl" style={{ backgroundColor: '#2E3338', border: '1px solid rgba(246,248,250,0.08)' }}>
            <p style={{ fontSize: '18px', color: 'rgba(246,248,250,0.4)' }}>Select an event above to view its participants</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
