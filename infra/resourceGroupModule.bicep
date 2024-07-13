param location string
param webAppName string
param serverFarmsName string = 'AppServiceplan'

var uniqueServerFarmsName = '${serverFarmsName}-${webAppName}-${uniqueString(serverFarmsName)}'

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: uniqueServerFarmsName
  location: location
  sku: {
    name: 'B1'
    tier: 'Basic'
    size: 'B1'
    family: 'B'
    capacity: 1
  }
  kind: 'linux'
  properties: {
    perSiteScaling: false
    elasticScaleEnabled: false
    maximumElasticWorkerCount: 1
    isSpot: false
    // freeOfferExpirationTime: '2023-12-19T10:50:00'
    reserved: true
    isXenon: false
    hyperV: false
    targetWorkerCount: 0
    targetWorkerSizeId: 0
    zoneRedundant: false
  }
}

// resource webApp 'Microsoft.Web/sites@2021-02-01' = {
//   name: webAppName
//   location: location
//   properties: {
//     // Define your web app properties here
//   }
// }

// resource webAppSourceControl 'Microsoft.Web/sites/sourcecontrols@2021-02-01' = if(contains(repoUrl,'http')){
//   name: 'web'
//   parent: webApp
//   properties: {
//     repoUrl: repoUrl
//     branch: 'main'
//     isManualIntegration: true
//   }
// }

output uniqueServerFarmsNameOutput string = uniqueServerFarmsName
