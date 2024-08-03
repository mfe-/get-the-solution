@description('Resource location.')
param location string

@description('The SKU for the static site. https://docs.microsoft.com/en-us/azure/templates/microsoft.web/staticsites?tabs=bicep#skudescription')
param sku object = {
  name: 'Free'
  tier: 'Free'
}

@description('Lock the config file for this static web app. https://docs.microsoft.com/en-us/azure/templates/microsoft.web/staticsites?tabs=bicep#staticsite')
param allowConfigFileUpdates bool = true

@description('URL for the repository of the static site.')
param repositoryUrl string

@description('A user\'s github repository token. This is used to setup the Github Actions workflow file and API secrets.')
param repositoryToken string

@description('The target branch in the repository. eg. main')
param repositoryBranch string

@description('The name of the static site resource. eg stapp-swa-sso')
param staticSiteName string

// @secure()
// @description('Configuration for the static site.')
// param appSettings object = {}

@description('Build properties for the static site.')
param buildProperties object = {}

@allowed([
  'Disabled'
  'Enabled'
])
@description('State indicating whether staging environments are allowed or not allowed for a static web app.')
param stagingEnvironmentPolicy string = 'Enabled'



// resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = { // https://docs.microsoft.com/en-us/azure/templates/microsoft.web/staticsites?tabs=bicep
//   name: staticSiteName
//   location: location
//   sku: sku
//   properties: {
//     allowConfigFileUpdates: allowConfigFileUpdates
//     repositoryUrl: repositoryUrl
//     repositoryToken: repositoryToken
//     branch: repositoryBranch
//     // buildProperties: empty(buildProperties) ? null : buildProperties
//     stagingEnvironmentPolicy: stagingEnvironmentPolicy
//     enterpriseGradeCdnStatus: 'Disabled'
//   }
// }

resource staticSite 'Microsoft.Web/staticSites@2022-09-01' = {
  name: staticSiteName
  location: location
  properties: {
    // repositoryUrl: repositoryUrl
    // repositoryToken: repositoryToken
    // branch: repositoryBranch
  }
  sku: {
      name: 'Free'
  }
}


// resource staticSiteAppsettings 'Microsoft.Web/staticSites/config@2021-02-01' = {
//   parent: staticSite
//   name: 'appsettings'
//   kind: 'config'
//   properties: appSettings
// }

resource staticwebApplicationDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  name: 'www.get-the-solution.net'
  parent: staticSite
}

output defaultHostName string = staticSite.properties.defaultHostname // eg epic-shark-0db05de03.azurestaticapps.net
output siteName string = staticSite.name
output siteResourceId string = staticSite.id
output deployment_token string = staticSite.listSecrets().properties.apiKey
