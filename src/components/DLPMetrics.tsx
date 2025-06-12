
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const threatData = [
  { name: 'Credit Cards', value: 45, incidents: 23 },
  { name: 'SSN', value: 32, incidents: 18 },
  { name: 'Email', value: 28, incidents: 34 },
  { name: 'Medical', value: 15, incidents: 12 },
  { name: 'Financial', value: 25, incidents: 8 },
];

const trendData = [
  { time: '00:00', blocked: 12, allowed: 45, alerts: 3 },
  { time: '04:00', blocked: 8, allowed: 38, alerts: 1 },
  { time: '08:00', blocked: 25, allowed: 67, alerts: 8 },
  { time: '12:00', blocked: 34, allowed: 89, alerts: 12 },
  { time: '16:00', blocked: 28, allowed: 76, alerts: 7 },
  { time: '20:00', blocked: 19, allowed: 52, alerts: 4 },
];

const riskDistribution = [
  { name: 'Critical', value: 15, color: '#ef4444' },
  { name: 'High', value: 28, color: '#f97316' },
  { name: 'Medium', value: 42, color: '#eab308' },
  { name: 'Low', value: 35, color: '#22c55e' },
];

const chartConfig = {
  blocked: { label: "Blocked", color: "#ef4444" },
  allowed: { label: "Allowed", color: "#22c55e" },
  alerts: { label: "Alerts", color: "#f97316" },
};

interface DLPMetricsProps {
  data?: any;
}

export const DLPMetrics = ({ data }: DLPMetricsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Threat Detection Types */}
      <Card>
        <CardHeader>
          <CardTitle>Data Type Detection</CardTitle>
          <CardDescription>
            Sensitive data categories identified in the last 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={threatData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Risk Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Level Distribution</CardTitle>
          <CardDescription>
            Current risk assessment across all monitored systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Activity Trends */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>24-Hour Activity Trends</CardTitle>
          <CardDescription>
            DLP events, blocks, and alerts over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="blocked" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="Blocked Events"
                />
                <Line 
                  type="monotone" 
                  dataKey="allowed" 
                  stroke="#22c55e" 
                  strokeWidth={2}
                  name="Allowed Events"
                />
                <Line 
                  type="monotone" 
                  dataKey="alerts" 
                  stroke="#f97316" 
                  strokeWidth={2}
                  name="Security Alerts"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
