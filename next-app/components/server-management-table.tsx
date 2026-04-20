"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { X, UserCheck, UserX, Shield, Search, ChevronLeft, ChevronRight } from "lucide-react";

export interface Server {
  id: string;
  number: string;
  serviceName: string;
  osType: "windows" | "linux" | "ubuntu";
  serviceLocation: string;
  countryCode: "de" | "us" | "fr" | "jp";
  ip: string;
  dueDate: string;
  cpuPercentage: number;
  status: "active" | "paused" | "inactive";
}

interface ServerManagementTableProps {
  title?: string;
  servers?: Server[];
  onStatusChange?: (serverId: string, newStatus: Server["status"]) => void;
  className?: string;
}

const defaultServers: Server[] = [
  { id: "1", number: "01", serviceName: "Abebe Kebede", osType: "ubuntu", serviceLocation: "Computer Science", countryCode: "de", ip: "abebe@haramaya.edu.et", dueDate: "Apr 15, 2026", cpuPercentage: 80, status: "active" },
  { id: "2", number: "02", serviceName: "Tigist Haile", osType: "windows", serviceLocation: "Software Engineering", countryCode: "us", ip: "tigist@haramaya.edu.et", dueDate: "Apr 16, 2026", cpuPercentage: 60, status: "paused" },
  { id: "3", number: "03", serviceName: "Dawit Tesfaye", osType: "ubuntu", serviceLocation: "Information Systems", countryCode: "fr", ip: "dawit@haramaya.edu.et", dueDate: "Apr 17, 2026", cpuPercentage: 40, status: "inactive" },
];

export function ServerManagementTable({
  title = "Member Management",
  servers: initialServers = defaultServers,
  onStatusChange,
  className = ""
}: ServerManagementTableProps = {}) {
  const [servers, setServers] = useState<Server[]>(initialServers);
  const [hoveredServer, setHoveredServer] = useState<string | null>(null);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();

  // Filtered servers based on search
  const filteredServers = useMemo(() => {
    if (!searchQuery.trim()) return servers;
    const q = searchQuery.toLowerCase();
    return servers.filter(s =>
      s.serviceName.toLowerCase().includes(q) ||
      s.serviceLocation.toLowerCase().includes(q) ||
      s.ip.toLowerCase().includes(q) ||
      s.status.toLowerCase().includes(q)
    );
  }, [servers, searchQuery]);

  // Paginated servers
  const totalPages = Math.ceil(filteredServers.length / ITEMS_PER_PAGE);
  const paginatedServers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredServers.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredServers, currentPage]);

  // Reset to page 1 on search
  useEffect(() => { setCurrentPage(1); }, [searchQuery]);

  const handleStatusChange = (serverId: string, newStatus: Server["status"]) => {
    if (onStatusChange) onStatusChange(serverId, newStatus);
    setServers(prev => prev.map(server =>
      server.id === serverId ? { ...server, status: newStatus } : server
    ));
  };

  useEffect(() => {
    if (selectedServer) {
      const updatedServer = servers.find(s => s.id === selectedServer.id);
      if (updatedServer) setSelectedServer(updatedServer);
    }
  }, [servers, selectedServer]);

  // Member avatar with initials
  const getMemberAvatar = (name: string) => {
    const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();
    const colors = ["from-blue-500 to-blue-600", "from-purple-500 to-purple-600", "from-green-500 to-green-600", "from-orange-500 to-orange-600", "from-pink-500 to-pink-600"];
    const colorIndex = name.charCodeAt(0) % colors.length;
    return (
      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center border border-border/30`}>
        <span className="text-white text-xs font-bold">{initials}</span>
      </div>
    );
  };

  // Department badge
  const getDeptBadge = (dept: string) => {
    const deptColors: Record<string, string> = {
      "Computer Science": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "Software Engineering": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Information Systems": "bg-green-500/10 text-green-400 border-green-500/30",
      "Cybersecurity": "bg-red-500/10 text-red-400 border-red-500/30",
      "Admin": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
      "Moderator": "bg-orange-500/10 text-orange-400 border-orange-500/30",
      "Member": "bg-gray-500/10 text-gray-400 border-gray-500/30",
    };
    const colorClass = deptColors[dept] || "bg-gray-500/10 text-gray-400 border-gray-500/30";
    return (
      <div className={`px-2 py-1 rounded-lg border text-xs font-medium ${colorClass}`}>
        {dept}
      </div>
    );
  };

  const getEngagementBars = (percentage: number, status: Server["status"]) => {
    const filledBars = Math.round((percentage / 100) * 10);
    const getBarColor = (index: number) => {
      if (index >= filledBars) return "bg-muted/40 border border-border/30";
      switch (status) {
        case "active": return "bg-green-500/70";
        case "paused": return "bg-yellow-500/50";
        case "inactive": return "bg-muted-foreground/30";
        default: return "bg-foreground/60";
      }
    };
    return (
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className={`w-1.5 h-5 rounded-full transition-all duration-500 ${getBarColor(index)}`} />
          ))}
        </div>
        <span className="text-sm font-mono text-foreground font-medium min-w-[3rem]">{percentage}%</span>
      </div>
    );
  };

  const getStatusBadge = (status: Server["status"]) => {
    switch (status) {
      case "active": return (
        <div className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
          <span className="text-green-400 text-sm font-medium">Approved</span>
        </div>
      );
      case "paused": return (
        <div className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
          <span className="text-yellow-400 text-sm font-medium">Pending</span>
        </div>
      );
      case "inactive": return (
        <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
          <span className="text-red-400 text-sm font-medium">Rejected</span>
        </div>
      );
    }
  };

  const getStatusGradient = (status: Server["status"]) => {
    switch (status) {
      case "active": return "from-green-500/10 to-transparent";
      case "paused": return "from-yellow-500/10 to-transparent";
      case "inactive": return "from-red-500/10 to-transparent";
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto p-6 ${className}`}>
      <div className="relative border border-border/30 rounded-2xl p-6 bg-card">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <h1 className="text-xl font-medium text-foreground">{title}</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              {servers.filter(s => s.status === "active").length} Approved • {servers.filter(s => s.status === "paused").length} Pending • {servers.filter(s => s.status === "inactive").length} Rejected
            </div>
          </div>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-border transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <motion.div className="space-y-2"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          initial="hidden" animate="visible"
        >
          {/* Headers */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <div className="col-span-1">No</div>
            <div className="col-span-2">Member Name</div>
            <div className="col-span-2">Department</div>
            <div className="col-span-2">Email</div>
            <div className="col-span-2">Joined Date</div>
            <div className="col-span-2">Engagement</div>
            <div className="col-span-1">Status</div>
          </div>

          {paginatedServers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No members found matching "{searchQuery}"
            </div>
          ) : paginatedServers.map((server) => (
            <motion.div key={server.id}
              variants={{
                hidden: { opacity: 0, x: -25, scale: 0.95, filter: "blur(4px)" },
                visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 400, damping: 28, mass: 0.6 } },
              }}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredServer(server.id)}
              onMouseLeave={() => setHoveredServer(null)}
              onClick={() => setSelectedServer(server)}
            >
              <motion.div className="relative bg-muted/50 border border-border/50 rounded-xl p-4 overflow-hidden"
                whileHover={{ y: -1, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              >
                <div className={`absolute inset-0 bg-gradient-to-l ${getStatusGradient(server.status)} pointer-events-none`}
                  style={{ backgroundSize: "30% 100%", backgroundPosition: "right", backgroundRepeat: "no-repeat" }}
                />
                <div className="relative grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1">
                    <span className="text-2xl font-bold text-muted-foreground">{server.number}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-3">
                    {getMemberAvatar(server.serviceName)}
                    <span className="text-foreground font-medium">{server.serviceName}</span>
                  </div>
                  <div className="col-span-2">{getDeptBadge(server.serviceLocation)}</div>
                  <div className="col-span-2">
                    <span className="text-foreground font-mono text-sm">{server.ip}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-foreground">{server.dueDate}</span>
                  </div>
                  <div className="col-span-2">{getEngagementBars(server.cpuPercentage, server.status)}</div>
                  <div className="col-span-1">{getStatusBadge(server.status)}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredServers.length)} of {filteredServers.length} members
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-foreground text-background'
                      : 'border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Member Detail Overlay */}
        <AnimatePresence>
          {selectedServer && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-background/60 backdrop-blur-sm flex flex-col rounded-2xl z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-muted/50 to-transparent p-4 border-b border-border/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-muted-foreground">{selectedServer.number}</div>
                  {getMemberAvatar(selectedServer.serviceName)}
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{selectedServer.serviceName}</h3>
                    <span className="text-sm text-muted-foreground">{selectedServer.serviceLocation}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <motion.button
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg text-sm transition-colors"
                    onClick={() => handleStatusChange(selectedServer.id, "active")}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  >
                    <UserCheck className="w-3 h-3" /> Approve
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm transition-colors"
                    onClick={() => handleStatusChange(selectedServer.id, "inactive")}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  >
                    <UserX className="w-3 h-3" /> Reject
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-lg text-sm transition-colors"
                    onClick={() => handleStatusChange(selectedServer.id, "paused")}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  >
                    <Shield className="w-3 h-3" /> Pending
                  </motion.button>

                  <motion.button
                    className="w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center border border-border/50 ml-2"
                    onClick={() => setSelectedServer(null)}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-muted/40 rounded-lg p-3 border border-border/30">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                    <div className="text-sm font-mono font-medium mt-1">{selectedServer.ip}</div>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-3 border border-border/30">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Joined Date</label>
                    <div className="text-sm font-medium mt-1">{selectedServer.dueDate}</div>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-3 border border-border/30">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</label>
                    <div className="mt-1">{getStatusBadge(selectedServer.status)}</div>
                  </div>
                </div>

                <div className="bg-muted/40 rounded-lg p-3 border border-border/30">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Engagement Level</label>
                  {getEngagementBars(selectedServer.cpuPercentage, selectedServer.status)}
                </div>

                <div className="bg-muted/40 rounded-lg p-3 border border-border/30">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Recent Activity</label>
                  <div className="font-mono text-xs space-y-1 max-h-24 overflow-y-auto">
                    <div className="text-green-400">[09:30:00] Attended CTF Workshop</div>
                    <div className="text-blue-400">[08:15:00] Submitted CTF Challenge</div>
                    <div className="text-yellow-400">[07:41:00] Engagement: {selectedServer.cpuPercentage}%</div>
                    <div className="text-muted-foreground">[06:40:00] Logged in from {selectedServer.ip}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
