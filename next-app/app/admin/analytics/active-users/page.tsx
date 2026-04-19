"use client";

import { Spectral } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar";
import { Component as Footer } from "@/components/footer-taped-design";
import { ServerManagementTable } from "@/components/server-management-table";
import type { Server } from "@/components/server-management-table";
import StatsSection from "@/components/stats-defautlt";
import { ActivityChartCard } from "@/components/activity-chart-card";

const spectral = Spectral({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

const activeUsers: Server[] = [
  { id: "1", number: "01", serviceName: "Abebe Kebede", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "de", ip: "abebe@haramaya.edu.et", dueDate: "Today 09:30", cpuPercentage: 95, status: "active" },
  { id: "2", number: "02", serviceName: "Tigist Haile", osType: "windows", serviceLocation: "Software Engineering", countryCode: "us", ip: "tigist@haramaya.edu.et", dueDate: "Today 08:15", cpuPercentage: 88, status: "active" },
  { id: "3", number: "03", serviceName: "Dawit Tesfaye", osType: "ubuntu", serviceLocation: "Cybersecurity", countryCode: "fr", ip: "dawit@haramaya.edu.et", dueDate: "Today 07:45", cpuPercentage: 72, status: "active" },
  { id: "4", number: "04", serviceName: "Meron Alemu", osType: "windows", serviceLocation: "Computer Science", countryCode: "us", ip: "meron@haramaya.edu.et", dueDate: "Yesterday", cpuPercentage: 60, status: "paused" },
  { id: "5", number: "05", serviceName: "Yonas Girma", osType: "ubuntu", serviceLocation: "Information Systems", countryCode: "de", ip: "yonas@haramaya.edu.et", dueDate: "Yesterday", cpuPercentage: 45, status: "paused" },
  { id: "6", number: "06", serviceName: "Selam Bekele", osType: "windows", serviceLocation: "Computer Science", countryCode: "fr", ip: "selam@haramaya.edu.et", dueDate: "2 days ago", cpuPercentage: 20, status: "inactive" },
  { id: "7", number: "07", serviceName: "Biruk Tadesse", osType: "ubuntu", serviceLocation: "Software Engineering", countryCode: "de", ip: "biruk@haramaya.edu.et", dueDate: "Today 11:00", cpuPercentage: 91, status: "active" },
  { id: "8", number: "08", serviceName: "Hana Mulugeta", osType: "windows", serviceLocation: "Cybersecurity", countryCode: "us", ip: "hana@haramaya.edu.et", dueDate: "Today 10:30", cpuPercentage: 83, status: "active" },
  { id: "9", number: "09", serviceName: "Samuel Worku", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "fr", ip: "samuel@haramaya.edu.et", dueDate: "3 days ago", cpuPercentage: 15, status: "inactive" },
  { id: "10", number: "10", serviceName: "Liya Getachew", osType: "windows", serviceLocation: "Information Systems", countryCode: "de", ip: "liya@haramaya.edu.et", dueDate: "Today 09:00", cpuPercentage: 78, status: "active" },
];

const weeklyActivityData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 80 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 72 },
  { day: "Sat", value: 88 },
  { day: "Sun", value: 42 },
];

const activeUserStats = [
  { value: "128", label: "Total Members", color: "#C9C73C" },
  { value: "42", label: "Active Today", color: "#C9C73C" },
  { value: "89", label: "Active This Week", color: "#C9C73C" },
  { value: "15", label: "Inactive (30d)", color: "#C9C73C" },
];

export default function ActiveUsersPage() {
  return (
    <div className={`min-h-screen ${spectral.className}`} style={{ backgroundColor: '#25292E' }}>
      <AdminNavbar activeItem="Analytics" transparent={false} />

      <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="font-light mb-2" style={{ fontSize: '36px', color: '#F6F8FA' }}>Active Users</h1>
          <p className="font-light" style={{ fontSize: '18px', color: 'rgba(246,248,250,0.6)' }}>
            View statistics on active users within the platform
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10">
          <StatsSection stats={activeUserStats} />
        </div>

        {/* Activity Chart */}
        <div className="mb-10 rounded-2xl overflow-hidden" style={{ backgroundColor: '#2E3338' }}>
          <ActivityChartCard
            title="Weekly Activity"
            totalValue="89 active"
            data={weeklyActivityData}
            className="w-full max-w-full bg-transparent border-none shadow-none"
          />
        </div>

        {/* Users Table */}
        <ServerManagementTable title="User Activity" servers={activeUsers} />
      </div>

      <Footer />
    </div>
  );
}
