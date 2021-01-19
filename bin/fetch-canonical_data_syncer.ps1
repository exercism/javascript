Function DownloadUrl ([string] $FileName, $Headers) {
    $finalReleaseUrl = "https://api.github.com/repos/exercism/canonical-data-syncer/releases/33439231" # v0.17.0
    $json = Invoke-RestMethod -Headers $Headers -Uri $finalReleaseUrl
    $json.assets | Where-Object { $_.browser_download_url -match $FileName } | Select-Object -ExpandProperty browser_download_url
}

Function Headers {
    If ($GITHUB_TOKEN) { @{ Authorization = "Bearer ${GITHUB_TOKEN}" } } Else { @{ } }
}

Function Arch {
    If ([Environment]::Is64BitOperatingSystem) { "64bit" } Else { "32bit" }
}

$arch = Arch
$headers = Headers
$fileName = "canonical_data_syncer-windows-$arch.zip"
$outputDirectory = "bin"
$outputFile = Join-Path -Path $outputDirectory -ChildPath $fileName
$zipUrl = DownloadUrl -FileName $fileName -Headers $headers

Invoke-WebRequest -Headers $headers -Uri $zipUrl -OutFile $outputFile
Expand-Archive $outputFile -DestinationPath $outputDirectory -Force
Remove-Item -Path $outputFile