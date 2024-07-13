targetScope = 'subscription'

param rgLocation string
param appName string
param rgName string
var serverFarmsName = 'AppServiceplan'
var uniqueServerFarmsName = '${serverFarmsName}-${appName}-${uniqueString(serverFarmsName)}'
var webAppName=appName
var location=rgLocation

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}


resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: uniqueServerFarmsName
  location: location
  sku: {
    name: sku
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

resource webApp 'Microsoft.Web/sites@2021-02-01' = {
  name: webAppName
  location: location
  properties: {
    httpsOnly: true
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      minTlsVersion: '1.2'
      ftpsState: 'FtpsOnly'
    }
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// resource webAppSourceControl 'Microsoft.Web/sites/sourcecontrols@2021-02-01' = if(contains(repoUrl,'http')){
//   name: 'web'
//   parent: webApp
//   properties: {
//     repoUrl: repoUrl
//     branch: 'main'
//     isManualIntegration: true
//   }
// }
