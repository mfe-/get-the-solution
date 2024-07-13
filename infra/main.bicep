targetScope = 'subscription'

param rgLocation string
param rgName string = 'get-the-solution'
param serverFarmsName string = 'AppServiceplan'
var uniqueServerFarmsName = '${serverFarmsName}-${uniqueString(serverFarmsName)}'

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}


resource serverFarms 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: uniqueServerFarmsName
  scope: resourceGroup
  location: 'West Europe'
  sku: {
    name: 'Y1'
    tier: 'Dynamic'
    size: 'Y1'
    family: 'Y'
    capacity: 0
  }
  kind: 'functionapp'
  properties: {
    perSiteScaling: false
    elasticScaleEnabled: false
    maximumElasticWorkerCount: 1
    isSpot: false
    reserved: false
    isXenon: false
    hyperV: false
    targetWorkerCount: 0
    targetWorkerSizeId: 0
    zoneRedundant: false
  }
  dependsOn: [
    resourceGroup
  ]
}
