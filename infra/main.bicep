targetScope = 'subscription'

param rgLocation string
param appName string
param rgName string
param repositoryUrl string
param repositoryToken string
param tags object = {}

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}


module swa 'staticSites.bicep' = {
  name: 'deploy-swa-${appName}'
  params: {
    appSettings: {

    }
    buildProperties: {
      skipGithubActionWorkflowGeneration: true
    }
    location: rgLocation
    repositoryBranch: 'main'
    repositoryUrl: repositoryUrl
    repositoryToken: repositoryToken
    sku: {
      name: 'Standard'
      tier: 'Standard'
    }
    stagingEnvironmentPolicy: 'Enabled'
    staticSiteName: 'swa-${appName}'
    tags: tags
  }
}

// module webAppModule './webApp.bicep' = {
//   name: 'webAppModuleDeployment'
//   scope: resourceGroup
//   params: {
//     location: rgLocation
//     webAppName: appName
//   }
// }



output rgName string = resourceGroup.name

output siteName string = swa.outputs.siteName
output siteDefaultHostname string = swa.outputs.defaultHostName

// output uniqueServerFarmsNameFromModule string = webAppModule.outputs.uniqueServerFarmsNameOutput
// output webAppName string = webAppModule.outputs.webAppName
// output webAppHostName string = webAppModule.outputs.webAppHostName

