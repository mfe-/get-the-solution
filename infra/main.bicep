targetScope = 'subscription'

param rgLocation string
param appName string
param rgName string

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}

module resourceGroupModule './resourceGroupModule.bicep' = {
  name: 'resourceGroupModuleDeployment'
  scope: resourceGroup
  params: {
    rgLocation: rgLocation
    appName: appName
    rgName: rgName
  }
}
