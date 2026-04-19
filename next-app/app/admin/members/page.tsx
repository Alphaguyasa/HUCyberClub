"use client";

import { useState } from "react";
import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import { ServerManagementTable } from "@/components/server-management-table";
import { Component as Footer } from "@/components/footer-taped-design";
import type { Server } from "@/components/server-management-table";

const spectral = Spectral({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const tabs = [
  { id: "registration", label: "Registration Approval" },
  { id: "roles", label: "Role Assignment" },
  { id: "activity", label: "Activity Tracking" },
];

const registrationMembers: Server[] = [
  { id: "1", number: "01", serviceName: "Abebe Kebede", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "de", ip: "abebe@haramaya.edu.et", dueDate: "Apr 15, 2026", cpuPercentage: 80, status: "active" },
  { id: "2", number: "02", serviceName: "Tigist Haile", osType: "windows", serviceLocation: "Software Engineering", countryCode: "us", ip: "tigist@haramaya.edu.et", dueDate: "Apr 16, 2026", cpuPercentage: 60, status: "paused" },
  { id: "3", number: "03", serviceName: "Dawit Tesfaye", osType: "ubuntu", serviceLocation: "Information Systems", countryCode: "fr", ip: "dawit@haramaya.edu.et", dueDate: "Apr 17, 2026", cpuPercentage: 40, status: "inactive" },
  { id: "4", number: "04", serviceName: "Meron Alemu", osType: "windows", serviceLocation: "Computer Science", countryCode: "us", ip: "meron@haramaya.edu.et", dueDate: "Apr 18, 2026", cpuPercentage: 90, status: "active" },
  { id: "5", number: "05", serviceName: "Yonas Girma", osType: "ubuntu", serviceLocation: "Cybersecurity", countryCode: "de", ip: "yonas@haramaya.edu.et", dueDate: "Apr 19, 2026", cpuPercentage: 70, status: "paused" },
  { id: "6", number: "06", serviceName: "Selam Bekele", osType: "windows", serviceLocation: "Computer Science", countryCode: "fr", ip: "selam@haramaya.edu.et", dueDate: "Apr 20, 2026", cpuPercentage: 55, status: "paused" },
  { id: "7", number: "07", serviceName: "Biruk Tadesse", osType: "ubuntu", serviceLocation: "Software Engineering", countryCode: "de", ip: "biruk@haramaya.edu.et", dueDate: "Apr 21, 2026", cpuPercentage: 85, status: "active" },
  { id: "8", number: "08", serviceName: "Hana Mulugeta", osType: "windows", serviceLocation: "Cybersecurity", countryCode: "us", ip: "hana@haramaya.edu.et", dueDate: "Apr 22, 2026", cpuPercentage: 30, status: "inactive" },
  { id: "9", number: "09", serviceName: "Samuel Worku", osType: "ubuntu", serviceLocation: "Information Systems", countryCode: "fr", ip: "samuel@haramaya.edu.et", dueDate: "Apr 23, 2026", cpuPercentage: 65, status: "paused" },
  { id: "10", number: "10", serviceName: "Liya Getachew", osType: "windows", serviceLocation: "Computer Science", countryCode: "de", ip: "liya@haramaya.edu.et", dueDate: "Apr 24, 2026", cpuPercentage: 75, status: "active" },
];

const roleMembers: Server[] = [
  { id: "1", number: "01", serviceName: "Selam Bekele", osType: "windows", serviceLocation: "Admin", countryCode: "us", ip: "selam@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 95, status: "active" },
  { id: "2", number: "02", serviceName: "Biruk Tadesse", osType: "ubuntu", serviceLocation: "Moderator", countryCode: "de", ip: "biruk@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 75, status: "active" },
  { id: "3", number: "03", serviceName: "Hana Mulugeta", osType: "windows", serviceLocation: "Member", countryCode: "fr", ip: "hana@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 50, status: "paused" },
  { id: "4", number: "04", serviceName: "Samuel Worku", osType: "ubuntu", serviceLocation: "Member", countryCode: "us", ip: "samuel@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 30, status: "inactive" },
  { id: "5", number: "05", serviceName: "Liya Getachew", osType: "windows", serviceLocation: "Moderator", countryCode: "de", ip: "liya@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 85, status: "active" },
  { id: "6", number: "06", serviceName: "Natnael Desta", osType: "ubuntu", serviceLocation: "Member", countryCode: "fr", ip: "natnael@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 60, status: "active" },
  { id: "7", number: "07", serviceName: "Abebe Kebede", osType: "windows", serviceLocation: "Admin", countryCode: "us", ip: "abebe@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 90, status: "active" },
  { id: "8", number: "08", serviceName: "Tigist Haile", osType: "ubuntu", serviceLocation: "Member", countryCode: "de", ip: "tigist@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 45, status: "paused" },
  { id: "9", number: "09", serviceName: "Dawit Tesfaye", osType: "windows", serviceLocation: "Moderator", countryCode: "fr", ip: "dawit@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 70, status: "active" },
  { id: "10", number: "10", serviceName: "Meron Alemu", osType: "ubuntu", serviceLocation: "Member", countryCode: "us", ip: "meron@haramaya.edu.et", dueDate: "Jan 01, 2026", cpuPercentage: 55, status: "inactive" },
];

const activityMembers: Server[] = [
  { id: "1", number: "01", serviceName: "Natnael Desta", osType: "ubuntu", serviceLocation: "Haramaya", countryCode: "de", ip: "natnael@haramaya.edu.et", dueDate: "Today 09:30", cpuPercentage: 90, status: "active" },
  { id: "2", number: "02", serviceName: "Sara Johnson", osType: "windows", serviceLocation: "Haramaya", countryCode: "us", ip: "sara@haramaya.edu.et", dueDate: "Today 08:15", cpuPercentage: 65, status: "active" },
  { id: "3", number: "03", serviceName: "James Wilson", osType: "ubuntu", serviceLocation: "Dire Dawa", countryCode: "fr", ip: "james@haramaya.edu.et", dueDate: "Yesterday", cpuPercentage: 40, status: "paused" },
  { id: "4", number: "04", serviceName: "Emily Chen", osType: "windows", serviceLocation: "Haramaya", countryCode: "us", ip: "emily@haramaya.edu.et", dueDate: "2 days ago", cpuPercentage: 20, status: "inactive" },
  { id: "5", number: "05", serviceName: "Marcus Lee", osType: "ubuntu", serviceLocation: "Addis Ababa", countryCode: "de", ip: "marcus@haramaya.edu.et", dueDate: "Today 11:00", cpuPercentage: 80, status: "active" },
  { id: "6", number: "06", serviceName: "Dawit Tesfaye", osType: "windows", serviceLocation: "Haramaya", countryCode: "fr", ip: "dawit@haramaya.edu.et", dueDate: "Today 10:00", cpuPercentage: 70, status: "active" },
  { id: "7", number: "07", serviceName: "Meron Alemu", osType: "ubuntu", serviceLocation: "Dire Dawa", countryCode: "us", ip: "meron@haramaya.edu.et", dueDate: "3 days ago", cpuPercentage: 35, status: "inactive" },
  { id: "8", number: "08", serviceName: "Yonas Girma", osType: "windows", serviceLocation: "Haramaya", countryCode: "de", ip: "yonas@haramaya.edu.et", dueDate: "Today 07:45", cpuPercentage: 88, status: "active" },
  { id: "9", number: "09", serviceName: "Selam Bekele", osType: "ubuntu", serviceLocation: "Addis Ababa", countryCode: "fr", ip: "selam@haramaya.edu.et", dueDate: "Today 06:30", cpuPercentage: 92, status: "active" },
  { id: "10", number: "10", serviceName: "Biruk Tadesse", osType: "windows", serviceLocation: "Haramaya", countryCode: "us", ip: "biruk@haramaya.edu.et", dueDate: "4 days ago", cpuPercentage: 15, status: "inactive" },
];

const tableData: Record<string, { title: string; servers: Server[] }> = {
  registration: { title: "Pending Registrations", servers: registrationMembers },
  roles: { title: "Role Assignment", servers: roleMembers },
  activity: { title: "Member Activity", servers: activityMembers },
};

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState("registration");

  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="User Management" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>
            Member Management
          </h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>
            Manage registrations, roles, and activity tracking
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-2 font-medium transition-all"
              style={{
                backgroundColor: activeTab === tab.id ? '#C9C73C' : 'rgba(246,248,250,0.1)',
                color: activeTab === tab.id ? '#111111' : '#F6F8FA',
                borderRadius: '9999px',
                fontSize: '15px',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ServerManagementTable
          title={tableData[activeTab].title}
          servers={tableData[activeTab].servers}
        />
      </div>

      <Footer />
    </div>
  );
}
