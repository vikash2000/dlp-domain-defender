
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, File, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as XLSX from 'xlsx';

interface FileUploadProps {
  onFilesProcessed: (logs: any[]) => void;
}

export const FileUpload = ({ onFilesProcessed }: FileUploadProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => 
      file.name.endsWith('.csv') || file.name.endsWith('.xlsx')
    );
    
    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid files detected",
        description: "Only CSV and Excel files are supported",
        variant: "destructive"
      });
    }
    
    setSelectedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const parseCSV = (text: string): any[] => {
    const lines = text.split('\n');
    const headers = lines[0].split('\t');
    const logs = [];

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split('\t');
        const log: any = {};
        
        headers.forEach((header, index) => {
          log[header.trim()] = values[index]?.trim() || '';
        });
        
        // Add required fields for our system
        log.id = `log-${Date.now()}-${i}`;
        log.timestamp = new Date();
        log.suspicious = '';
        log.fileName = 'uploaded-file';
        
        logs.push(log);
      }
    }
    
    return logs;
  };

  const parseExcel = (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          
          if (jsonData.length === 0) {
            resolve([]);
            return;
          }
          
          const headers = jsonData[0] as string[];
          const logs = [];
          
          for (let i = 1; i < jsonData.length; i++) {
            const row = jsonData[i] as any[];
            if (row.some(cell => cell !== undefined && cell !== '')) {
              const log: any = {};
              
              headers.forEach((header, index) => {
                log[header] = row[index] || '';
              });
              
              // Add required fields for our system
              log.id = `log-${Date.now()}-${i}`;
              log.timestamp = new Date();
              log.suspicious = '';
              log.fileName = file.name;
              
              logs.push(log);
            }
          }
          
          resolve(logs);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsArrayBuffer(file);
    });
  };

  const processFiles = async () => {
    if (selectedFiles.length === 0) return;
    
    setIsProcessing(true);
    try {
      const allLogs: any[] = [];
      
      for (const file of selectedFiles) {
        console.log(`Processing file: ${file.name}`);
        
        if (file.name.endsWith('.csv')) {
          const text = await file.text();
          const logs = parseCSV(text);
          allLogs.push(...logs);
        } else if (file.name.endsWith('.xlsx')) {
          const logs = await parseExcel(file);
          allLogs.push(...logs);
        }
      }
      
      console.log("Processed logs from files:", allLogs);
      onFilesProcessed(allLogs);
      
      toast({
        title: "Files processed successfully",
        description: `Processed ${allLogs.length} log entries from ${selectedFiles.length} files`
      });
      
      // Clear files after processing
      setSelectedFiles([]);
    } catch (error) {
      console.error("File processing error:", error);
      toast({
        title: "Processing failed",
        description: "Error processing files. Please check file format.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Log File Upload
        </CardTitle>
        <CardDescription>
          Upload CSV or Excel files for DLP analysis. Expected format: tab-separated with columns like Date\Time, User Name, Endpoint, etc.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="file"
          multiple
          accept=".csv,.xlsx"
          onChange={handleFileSelect}
          className="cursor-pointer"
        />
        
        {selectedFiles.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium">Selected Files:</div>
            <div className="space-y-1">
              {selectedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4" />
                    <span className="text-sm">{file.name}</span>
                    <Badge variant="outline">{(file.size / 1024).toFixed(1)} KB</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Button 
          onClick={processFiles}
          disabled={selectedFiles.length === 0 || isProcessing}
          className="w-full"
        >
          {isProcessing ? "Processing..." : `Process ${selectedFiles.length} Files`}
        </Button>
        
        <div className="text-xs text-muted-foreground">
          <p>Supported formats: CSV (tab-separated), Excel (.xlsx)</p>
          <p>Expected columns: Date\Time, User Name, Endpoint, Domain, IP address, Rule Name, Template, Source, Destination, etc.</p>
        </div>
      </CardContent>
    </Card>
  );
};
