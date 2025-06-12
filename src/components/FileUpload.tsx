
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Upload, File, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  const processFiles = async () => {
    if (selectedFiles.length === 0) return;
    
    setIsProcessing(true);
    try {
      // Simulate file processing - in real implementation, you'd parse CSV/Excel here
      const mockLogs = selectedFiles.flatMap((file, fileIndex) => 
        Array.from({ length: 10 }, (_, i) => ({
          id: `${fileIndex}-${i}`,
          fileName: file.name,
          timestamp: new Date(),
          // Add mock data that matches your log structure
          user: 'hrdcommon',
          endpoint: 'CO-D-361',
          domain: 'Corporate\\Desktop\\Dlp&dc block\\',
          ipAddress: '10.10.12.3',
          action: 'Logged',
          suspicious: Math.random() > 0.7 ? 'Single external recipient' : ''
        }))
      );
      
      onFilesProcessed(mockLogs);
      toast({
        title: "Files processed successfully",
        description: `Processed ${selectedFiles.length} files`
      });
    } catch (error) {
      toast({
        title: "Processing failed",
        description: "Error processing files",
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
          Upload CSV or Excel files for DLP analysis
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
      </CardContent>
    </Card>
  );
};
