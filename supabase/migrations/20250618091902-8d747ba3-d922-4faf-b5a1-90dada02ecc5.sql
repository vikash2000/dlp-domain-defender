
-- Create whitelist domains table
CREATE TABLE public.whitelist_domains (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  domain TEXT NOT NULL UNIQUE,
  category TEXT DEFAULT 'external',
  is_wildcard BOOLEAN DEFAULT false,
  notes TEXT,
  added_by TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true,
  risk_level TEXT DEFAULT 'LOW',
  data_class TEXT DEFAULT 'PUBLIC'
);

-- Create audit logs table for tracking changes
CREATE TABLE public.whitelist_audit_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  domain_id UUID REFERENCES public.whitelist_domains(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  domain_name TEXT NOT NULL,
  performed_by TEXT,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security (making tables publicly accessible for now)
ALTER TABLE public.whitelist_domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.whitelist_audit_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (you can restrict these later if needed)
CREATE POLICY "Allow all operations on whitelist_domains" 
  ON public.whitelist_domains 
  FOR ALL 
  USING (true) 
  WITH CHECK (true);

CREATE POLICY "Allow all operations on whitelist_audit_logs" 
  ON public.whitelist_audit_logs 
  FOR ALL 
  USING (true) 
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_whitelist_domains_domain ON public.whitelist_domains(domain);
CREATE INDEX idx_whitelist_domains_active ON public.whitelist_domains(is_active);
CREATE INDEX idx_whitelist_domains_category ON public.whitelist_domains(category);
CREATE INDEX idx_audit_logs_domain_id ON public.whitelist_audit_logs(domain_id);
CREATE INDEX idx_audit_logs_created_at ON public.whitelist_audit_logs(created_at);
