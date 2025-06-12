
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Database, Search } from "lucide-react";
import { useState } from "react";

const securityScenarios = [
  {
    id: 'payroll-financial',
    title: 'Payroll & Financial Data Protection',
    description: 'Salary statements, financial records, and payroll data monitoring',
    framework: 'Custom Policy',
    severity: 'critical',
    rules: [
      'Salary statement file detection (.xlsx, .xls)',
      'Payroll data pattern matching',
      'Financial email content analysis',
      'Cross-department salary data sharing prevention',
      'External email recipient validation for financial data'
    ],
    status: 'active',
    detections: 23,
    triggerKeywords: ['salary', 'stipend', 'payroll', 'compensation', 'financial statement']
  },
  {
    id: 'email-dlp',
    title: 'Email Data Loss Prevention',
    description: 'Exchange email monitoring and attachment scanning',
    framework: 'Email Security',
    severity: 'high',
    rules: [
      'Outlook email attachment scanning',
      'Exchange client monitoring',
      'Multiple recipient validation',
      'External domain email alerts',
      'Email subject line analysis for sensitive keywords'
    ],
    status: 'active',
    detections: 156,
    triggerKeywords: ['confidential', 'internal', 'private', 'restricted']
  },
  {
    id: 'file-transfer',
    title: 'File Transfer Monitoring',
    description: 'All file extension monitoring and data transfer tracking',
    framework: 'Data Transfer Policy',
    severity: 'medium',
    rules: [
      'Binary file classification',
      'Excel/spreadsheet content inspection',
      'File size threshold monitoring (>30KB)',
      'Source and destination tracking',
      'Process-based file access logging'
    ],
    status: 'active',
    detections: 89,
    triggerKeywords: ['.xlsx', '.xls', '.pdf', '.doc', '.ppt']
  },
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
    detections: 12,
    triggerKeywords: ['card', 'payment', 'PAN', 'cardholder']
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
    detections: 45,
    triggerKeywords: ['personal data', 'GDPR', 'consent', 'privacy']
  },
  {
    id: 'industrial-data',
    title: 'Industrial & Manufacturing Data',
    description: 'Protection of industrial processes and manufacturing data',
    framework: 'Industrial Security',
    severity: 'high',
    rules: [
      'Training and stipend record protection',
      'Industrial process documentation',
      'Manufacturing data classification',
      'Plant-specific information monitoring',
      'Vendor and supplier data protection'
    ],
    status: 'active',
    detections: 34,
    triggerKeywords: ['industrial', 'plant', 'manufacturing', 'trainees', 'production']
  },
  {
    id: 'endpoint-monitoring',
    title: 'Endpoint Data Protection',
    description: 'Corporate desktop and endpoint monitoring',
    framework: 'Endpoint Security',
    severity: 'medium',
    rules: [
      'Corporate domain endpoint tracking',
      'Desktop application monitoring',
      'Process execution logging',
      'IP address-based access control',
      'User activity correlation'
    ],
    status: 'active',
    detections: 67,
    triggerKeywords: ['endpoint', 'desktop', 'corporate', 'domain']
  },
  {
    id: 'data-classification',
    title: 'Data Classification & Labeling',
    description: 'Automatic data classification based on content and context',
    framework: 'Data Classification',
    severity: 'medium',
    rules: [
      'Binary file type classification',
      'Content-based sensitivity scoring',
      'Source location risk assessment',
      'Recipient domain validation',
      'File size and format analysis'
    ],
    status: 'monitoring',
    detections: 198,
    triggerKeywords: ['classification', 'sensitivity', 'binary', 'format']
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

                <div className="space-y-1">
                  <div className="text-sm font-medium">Trigger Keywords:</div>
                  <div className="flex flex-wrap gap-1">
                    {scenario.triggerKeywords.slice(0, 3).map((keyword, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                    {scenario.triggerKeywords.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{scenario.triggerKeywords.length - 3}
                      </Badge>
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
              
              <div className="space-y-3">
                <div className="text-sm font-medium">Trigger Keywords:</div>
                <div className="flex flex-wrap gap-2">
                  {securityScenarios.find(s => s.id === selectedScenario)?.triggerKeywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              
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
