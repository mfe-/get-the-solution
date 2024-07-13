targetScope = 'subscription'

param rgLocation string
param appName string
param rgName string

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}

module webAppModule './webApp.bicep' = {
  name: 'webAppModuleDeployment'
  scope: resourceGroup
  params: {
    location: rgLocation
    webAppName: appName
  }
}
output rgName string = resourceGroup.name
output uniqueServerFarmsNameFromModule string = webAppModule.outputs.uniqueServerFarmsNameOutput
output webAppName string = webAppModule.outputs.webAppName
output webAppHostName string = webAppModule.outputs.webAppHostName

