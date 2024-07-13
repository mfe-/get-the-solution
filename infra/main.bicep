targetScope = 'subscription'

param rgLocation string
param appName string
param rgName string

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}

module webAppModule './webApp.bicep' = {
  name: 'resourceGroupModuleDeployment'
  scope: resourceGroup
  params: {
    location: rgLocation
    webAppName: appName
    publishingUserName: '$get-the-solution'
  }
}
output uniqueServerFarmsNameFromModule string = webAppModule.outputs.uniqueServerFarmsNameOutput
output webAppName string = webAppModule.outputs.webAppName
