
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Database, Search } from "lucide-react";
import { useState } from "react";

const securityScenarios = [
  {
    id: 'pci-dss',
    title: 'PCI DSS Compliance',
    description: 'Payment Card Industry Data Security Standard monitoring',
    framework: 'PCI DSS',
    severity: 'critical',
    rules: [
      'Credit card number detection (PAN)',
      'Cardholder data encryption validation',
      'Access control monitoring',
      'Network segmentation compliance'
    ],
    status: 'active',
    detections: 23
  },
  {
    id: 'gdpr',
    title: 'GDPR Data Protection',
    description: 'European General Data Protection Regulation compliance',
    framework: 'GDPR',
    severity: 'high',
    rules: [
      'Personal data identification',
      'Cross-border data transfer monitoring',
      'Consent validation tracking',
      'Data retention policy enforcement'
    ],
    status: 'active',
    detections: 45
  },
  {
    id: 'hipaa',
    title: 'HIPAA Healthcare Data',
    description: 'Health Insurance Portability and Accountability Act',
    framework: 'HIPAA',
    severity: 'critical',
    rules: [
      'Protected Health Information (PHI) detection',
      'Medical record access monitoring',
      'Healthcare provider authentication',
      'Audit trail compliance'
    ],
    status: 'active',
    detections: 12
  },
  {
    id: 'nist',
    title: 'NIST Cybersecurity Framework',
    description: 'National Institute of Standards and Technology guidelines',
    framework: 'NIST CSF',
    severity: 'medium',
    rules: [
      'Asset identification and classification',
      'Threat intelligence correlation',
      'Incident response procedures',
      'Recovery planning validation'
    ],
    status: 'active',
    detections: 67
  },
  {
    id: 'sox',
    title: 'SOX Financial Controls',
    description: 'Sarbanes-Oxley Act financial data protection',
    framework: 'SOX',
    severity: 'high',
    rules: [
      'Financial data classification',
      'Executive access monitoring',
      'Audit trail integrity',
      'Internal control validation'
    ],
    status: 'active',
    detections: 8
  },
  {
    id: 'iso27001',
    title: 'ISO 27001 ISMS',
    description: 'Information Security Management System standard',
    framework: 'ISO 27001',
    severity: 'medium',
    rules: [
      'Risk assessment automation',
      'Security control monitoring',
      'Incident management workflow',
      'Continuous improvement tracking'
    ],
    status: 'monitoring',
    detections: 34
  }
];

export const SecurityScenarios = () => {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

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
      case 'active': return 'default';
      case 'monitoring': return 'secondary';
      case 'disabled': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {securityScenarios.map((scenario) => (
          <Card 
            key={scenario.id} 
            className={`cursor-pointer transition-colors ${
              selectedScenario === scenario.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedScenario(scenario.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <CardTitle className="text-lg">{scenario.title}</CardTitle>
                </div>
                <Badge variant={getSeverityColor(scenario.severity)}>
                  {scenario.severity}
                </Badge>
              </div>
              <CardDescription className="text-sm">
                {scenario.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{scenario.framework}</Badge>
                  <Badge variant={getStatusColor(scenario.status)}>
                    {scenario.status}
                  </Badge>
                </div>
                
                <div className="text-sm">
                  <div className="font-medium text-primary">
                    {scenario.detections} detections today
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Active Rules:</div>
                  <div className="text-xs text-muted-foreground">
                    {scenario.rules.slice(0, 2).map((rule, index) => (
                      <div key={index}>• {rule}</div>
                    ))}
                    {scenario.rules.length > 2 && (
                      <div>+ {scenario.rules.length - 2} more...</div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedScenario && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Scenario Details: {securityScenarios.find(s => s.id === selectedScenario)?.title}
            </CardTitle>
            <CardDescription>
              Detailed configuration and monitoring rules for this security scenario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityScenarios.find(s => s.id === selectedScenario)?.rules.map((rule, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{rule}</span>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
              ))}
              
              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm">Configure Rules</Button>
                <Button variant="outline" size="sm">View Logs</Button>
                <Button variant="outline" size="sm">Export Report</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
