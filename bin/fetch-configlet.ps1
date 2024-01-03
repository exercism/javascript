# This file is a copy of the
# https://github.com/exercism/configlet/blob/main/scripts/fetch-configlet.ps1 file.
# Please submit bugfixes/improvements to the above file to ensure that all tracks
# benefit from the changes.

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"

$requestOpts = @{
    Headers           = If ($env:GITHUB_TOKEN) { @{ Authorization = "Bearer ${env:GITHUB_TOKEN}" } } Else { @{ } }
    MaximumRetryCount = 3
    RetryIntervalSec  = 1
}

Function Get-DownloadUrl {
    $arch = If ([Environment]::Is64BitOperatingSystem) { "x86-64" } Else { "i386" }
    $latestUrl = "https://api.github.com/repos/exercism/configlet/releases/latest"
    Invoke-RestMethod -Uri $latestUrl -PreserveAuthorizationOnRedirect @requestOpts `
    | Select-Object -ExpandProperty assets `
    | Where-Object { $_.name -match "^configlet_.+_windows_${arch}.zip$" } `
    | Select-Object -ExpandProperty browser_download_url -First 1
}

$outputDirectory = "bin"
if (!(Test-Path -Path $outputDirectory)) {
    Write-Output "Error: no ./bin directory found. This script should be ran from a repo root."
    exit 1
}

Write-Output "Fetching configlet..."
$downloadUrl = Get-DownloadUrl
$outputFileName = "configlet.zip"
$outputPath = Join-Path -Path $outputDirectory -ChildPath $outputFileName
Invoke-WebRequest -Uri $downloadUrl -OutFile $outputPath @requestOpts

$configletPath = Join-Path -Path $outputDirectory -ChildPath "configlet.exe"
if (Test-Path -Path $configletPath) { Remove-Item -Path $configletPath }
[System.IO.Compression.ZipFile]::ExtractToDirectory($outputPath, $outputDirectory)
Remove-Item -Path $outputPath

$configletVersion = (Select-String -Pattern "/releases/download/(.+?)/" -InputObject $downloadUrl -AllMatches).Matches.Groups[1].Value
Write-Output "Downloaded configlet ${configletVersion} to ${configletPath}"
