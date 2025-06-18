-- CreateTable
CREATE TABLE "ApexOneLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventType" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "sourceIP" TEXT NOT NULL,
    "destinationIP" TEXT,
    "domainName" TEXT,
    "filePath" TEXT,
    "fileName" TEXT,
    "fileHash" TEXT,
    "action" TEXT NOT NULL,
    "details" TEXT,
    "status" TEXT NOT NULL,
    "assignedTo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "domainId" INTEGER,
    "userId" INTEGER,
    CONSTRAINT "ApexOneLog_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "WhitelistedDomain" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ApexOneLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WhitelistedDomain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "domain" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'external',
    "isWildcard" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "addedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "expiresAt" DATETIME,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "riskLevel" TEXT NOT NULL DEFAULT 'LOW',
    "dataClass" TEXT NOT NULL DEFAULT 'PUBLIC',
    "encryptionKey" TEXT,
    "lastVerified" DATETIME,
    "verifiedBy" TEXT
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" TEXT NOT NULL,
    "domainName" TEXT NOT NULL,
    "performedBy" TEXT,
    "details" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "domainId" INTEGER NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "sessionId" TEXT,
    "riskLevel" TEXT,
    "userId" INTEGER,
    CONSTRAINT "AuditLog_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "WhitelistedDomain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DomainCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "riskLevel" TEXT NOT NULL DEFAULT 'LOW',
    "dataClass" TEXT NOT NULL DEFAULT 'PUBLIC'
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "mfaEnabled" BOOLEAN NOT NULL DEFAULT false,
    "lastLogin" DATETIME
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" DATETIME NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Compliance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "requirements" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AccessLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "domainId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "details" TEXT,
    CONSTRAINT "AccessLog_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "WhitelistedDomain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AccessLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DomainReputation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "domainId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "lastChecked" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "threats" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DomainReputation_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "WhitelistedDomain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ComplianceToWhitelistedDomain" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ComplianceToWhitelistedDomain_A_fkey" FOREIGN KEY ("A") REFERENCES "Compliance" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComplianceToWhitelistedDomain_B_fkey" FOREIGN KEY ("B") REFERENCES "WhitelistedDomain" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ComplianceToDomainCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ComplianceToDomainCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Compliance" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComplianceToDomainCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "DomainCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "WhitelistedDomain_domain_key" ON "WhitelistedDomain"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "DomainCategory_name_key" ON "DomainCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Compliance_name_key" ON "Compliance"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DomainReputation_domainId_key" ON "DomainReputation"("domainId");

-- CreateIndex
CREATE UNIQUE INDEX "_ComplianceToWhitelistedDomain_AB_unique" ON "_ComplianceToWhitelistedDomain"("A", "B");

-- CreateIndex
CREATE INDEX "_ComplianceToWhitelistedDomain_B_index" ON "_ComplianceToWhitelistedDomain"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ComplianceToDomainCategory_AB_unique" ON "_ComplianceToDomainCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ComplianceToDomainCategory_B_index" ON "_ComplianceToDomainCategory"("B");
