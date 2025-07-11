import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Shield, Database, Search } from "lucide-react";
import { dlpService } from "@/services/dlpService";
import { serverConfig } from "@/config/server";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ThreatData {
  threat: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  occurrences: number;
  lastSeen: string;
  source: string;
  action: string;
}

interface PolicyViolation {
  policy: string;
  violations: number;
  trend: string;
  department: string;
  status: string;
}

export const LogAnalytics = () => {
  const [topThreats, setTopThreats] = useState<ThreatData[]>([]);
  const [policyViolations, setPolicyViolations] = useState<PolicyViolation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (serverConfig.useMockData) {
          // Use mock data if configured
          setTopThreats([
            {
              threat: 'Credit Card Data Exposure',
              severity: 'critical',
              occurrences: 45,
              lastSeen: '2 minutes ago',
              source: 'Email Gateway',
              action: 'Blocked'
            },
            {
              threat: 'SSN Pattern Detection',
              severity: 'high',
              occurrences: 32,
              lastSeen: '5 minutes ago',
              source: 'File Server',
              action: 'Quarantined'
            },
            {
              threat: 'Healthcare Data (PHI)',
              severity: 'critical',
              occurrences: 28,
              lastSeen: '8 minutes ago',
              source: 'Database Export',
              action: 'Blocked'
            },
            {
              threat: 'Financial Records',
              severity: 'high',
              occurrences: 23,
              lastSeen: '12 minutes ago',
              source: 'Web Upload',
              action: 'Encrypted'
            },
            {
              threat: 'Intellectual Property',
              severity: 'medium',
              occurrences: 19,
              lastSeen: '15 minutes ago',
              source: 'Cloud Storage',
              action: 'Monitored'
            }
          ]);

          setPolicyViolations([
            {
              policy: 'PCI-DSS Card Data Protection',
              violations: 67,
              trend: '+15%',
              department: 'Finance',
              status: 'Under Review'
            },
            {
              policy: 'GDPR Personal Data Transfer',
              violations: 43,
              trend: '-8%',
              department: 'Marketing',
              status: 'Resolved'
            },
            {
              policy: 'HIPAA Healthcare Privacy',
              violations: 31,
              trend: '+22%',
              department: 'Medical',
              status: 'Critical'
            },
            {
              policy: 'SOX Financial Controls',
              violations: 18,
              trend: '-5%',
              department: 'Accounting',
              status: 'Monitoring'
            }
          ]);
        } else {
          // Fetch real analytics data from server
          const [threatsResponse, violationsResponse] = await Promise.all([
            fetch(`${serverConfig.apiBaseUrl}/analytics/threats`),
            fetch(`${serverConfig.apiBaseUrl}/analytics/policy-violations`)
          ]);

          if (threatsResponse.ok && violationsResponse.ok) {
            const threatsData = await threatsResponse.json();
            const violationsData = await violationsResponse.json();
            
            setTopThreats(threatsData.threats || []);
            setPolicyViolations(violationsData.violations || []);
          } else {
            throw new Error('Failed to fetch analytics data');
          }
        }
      } catch (err) {
        console.error('Failed to fetch analytics data:', err);
        setError('Failed to load analytics data - using fallback data');
        // Keep existing mock data as fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critical': return 'destructive';
      case 'Under Review': return 'default';
      case 'Monitoring': return 'secondary';
      case 'Resolved': return 'outline';
      default: return 'secondary';
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-center">
              <Database className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Loading analytics data...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <Shield className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Top Threats Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Top Security Threats
          </CardTitle>
          <CardDescription>
            Most frequently detected data loss prevention incidents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Threat Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Occurrences</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topThreats.map((threat, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{threat.threat}</TableCell>
                  <TableCell>
                    <Badge variant={getSeverityColor(threat.severity)}>
                      {threat.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>{threat.occurrences}</TableCell>
                  <TableCell className="text-muted-foreground">{threat.lastSeen}</TableCell>
                  <TableCell>{threat.source}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{threat.action}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Policy Violations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Policy Violations Analysis
          </CardTitle>
          <CardDescription>
            Compliance violations by department and regulation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy</TableHead>
                <TableHead>Violations</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policyViolations.map((violation, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{violation.policy}</TableCell>
                  <TableCell>{violation.violations}</TableCell>
                  <TableCell>
                    <span className={violation.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}>
                      {violation.trend}
                    </span>
                  </TableCell>
                  <TableCell>{violation.department}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(violation.status)}>
                      {violation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Search className="h-3 w-3 mr-1" />
                      Investigate
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Analytics Actions</CardTitle>
          <CardDescription>
            Generate reports and export data for compliance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">
              <Database className="h-4 w-4 mr-2" />
              Export Security Report
            </Button>
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Generate Compliance Summary
            </Button>
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Advanced Analytics
            </Button>
            <Button variant="outline">
              Schedule Automated Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
