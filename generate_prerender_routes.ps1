          # see .github/workflows/build_release.yml
          $jsonFilePath = "./src/assets/database/blog.json"
          $blogEntries = Get-Content -Path $jsonFilePath -Encoding UTF8 | ConvertFrom-Json
          $blogEntries | ForEach-Object { Write-Output ("/blog/" + $_.Title) } | Out-File -FilePath "./prerender-routes.txt" -Encoding UTF8 -Force
          
          $distinctRegards = $blogEntries | ForEach-Object { $_.Regards } | Select-Object -Unique
          $distinctRegards = $distinctRegards | ForEach-Object { "/category/" + $_ }
          $distinctRegards | ForEach-Object { Add-Content -Path "./prerender-routes.txt" -Value $_ }

          # Define the path to the sitemap.xml file
          $sitemapPath = "./src/sitemap.xml"

          # Load the XML content from the file
          [xml]$xmlContent = Get-Content -Path $sitemapPath

          # Function to create a <url> element
          function New-UrlElement {
              param (
                  [xml]$xmlDoc,
                  [string]$loc,
                  [string]$lastmod,
                  [string]$priority
              )

              # Create a new <url> element
              $newUrl = $xmlDoc.CreateElement("url")

              # Create and append the <loc> element
              $locElement = $xmlDoc.CreateElement("loc")
              $locElement.InnerText = $loc
              $newUrl.AppendChild($locElement) | Out-Null

              # Create and append the <lastmod> element
              $lastmodElement = $xmlDoc.CreateElement("lastmod")
              $lastmodElement.InnerText = $lastmod
              $newUrl.AppendChild($lastmodElement) | Out-Null

              # Create and append the <priority> element
              $priorityElement = $xmlDoc.CreateElement("priority")
              $priorityElement.InnerText = $priority
              $newUrl.AppendChild($priorityElement) | Out-Null

              return $newUrl
          }

          $jsonFilePath = "./src/assets/database/blog.json"
          $blogEntries = Get-Content -Path $jsonFilePath -Encoding UTF8 | ConvertFrom-Json

          $blogEntries | ForEach-Object { 
              # Create a new <url> element using the function
              $newUrlElement = New-UrlElement -xmlDoc $xmlContent -loc "https://www.get-the-solution.net/blog/$($_.Title)" -lastmod $_.Release -priority "0.80"
              # Append the new <url> element to the <urlset> element
              $xmlContent.urlset.AppendChild($newUrlElement) | Out-Null
          } 

          # Save the updated XML content back to the file
          $xmlContent.Save($sitemapPath)

          Get-Content $sitemapPath