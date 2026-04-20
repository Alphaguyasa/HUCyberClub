"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface MonthlyRow {
  month: string;
  events: number;
  participants: number;
  resources: number;
}

interface InlineAnalyticsTableProps {
  data?: MonthlyRow[];
  columns?: [string, string, string, string];
}

const defaultData: MonthlyRow[] = [
  { month: "Jan", events: 2, participants: 45, resources: 120 },
  { month: "Feb", events: 3, participants: 67, resources: 145 },
  { month: "Mar", events: 1, participants: 30, resources: 98 },
  { month: "Apr", events: 4, participants: 112, resources: 203 },
  { month: "May", events: 3, participants: 89, resources: 178 },
  { month: "Jun", events: 5, participants: 134, resources: 256 },
];

const defaultColumns: [string, string, string, string] = ["Month", "Events", "Participants", "Resources Accessed"];

export default function InlineAnalyticsTable({ data = defaultData, columns = defaultColumns }: InlineAnalyticsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl p-6" style={{ backgroundColor: '#2E3338' }}>
      <Table className="min-w-[500px]">
        <TableHeader>
          <TableRow style={{ borderBottom: '1px solid rgba(246,248,250,0.1)' }}>
            {columns.map(h => (
              <TableHead key={h} className="font-medium" style={{ color: 'rgba(246,248,250,0.5)', fontSize: '12px' }}>{h}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i} style={{ borderBottom: '1px solid rgba(246,248,250,0.05)' }}>
              <TableCell className="font-medium" style={{ color: '#F6F8FA' }}>{row.month}</TableCell>
              <TableCell style={{ color: '#C9C73C' }}>{row.events}</TableCell>
              <TableCell style={{ color: '#C9C73C' }}>{row.participants}</TableCell>
              <TableCell style={{ color: '#C9C73C' }}>{row.resources}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow style={{ borderTop: '1px solid rgba(246,248,250,0.1)', backgroundColor: 'transparent' }}>
            <TableCell style={{ color: 'rgba(246,248,250,0.5)', fontSize: '12px' }}>Total</TableCell>
            <TableCell style={{ color: '#C9C73C' }}>{data.reduce((a, r) => a + r.events, 0)}</TableCell>
            <TableCell style={{ color: '#C9C73C' }}>{data.reduce((a, r) => a + r.participants, 0)}</TableCell>
            <TableCell style={{ color: '#C9C73C' }}>{data.reduce((a, r) => a + r.resources, 0)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
