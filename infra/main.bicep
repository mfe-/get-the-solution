targetScope = 'subscription'

param rgLocation string
param appName string
param rgName string
param repositoryUrl string
param repositoryToken string

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}


module swa 'staticSites.bicep' = {
  scope: resourceGroup
  name: 'deploy-swa-${appName}'
  params: {
    buildProperties: {
      skipGithubActionWorkflowGeneration: true
    }
    location: rgLocation
    repositoryBranch: 'main'
    repositoryUrl: repositoryUrl
    repositoryToken: repositoryToken
    staticSiteName: 'swa-${appName}'
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
output repositoryUrl string = repositoryUrl
output appName string = appName

output siteName string = swa.outputs.siteName
output siteDefaultHostname string = swa.outputs.defaultHostName
output deployment_token string = swa.outputs.deployment_token

// output uniqueServerFarmsNameFromModule string = webAppModule.outputs.uniqueServerFarmsNameOutput
// output webAppName string = webAppModule.outputs.webAppName
// output webAppHostName string = webAppModule.outputs.webAppHostName

