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

resource webApp 'Microsoft.Web/sites@2021-02-01' = {
  name: webAppName
  location: location
  properties: {
    // Define your web app properties here
  }
}


resource webApp 'Microsoft.Web/sites@2023-12-01' = {
  name: webAppName
  // location: 'East US'
  location: location
  kind: 'app,linux'
  properties: {
    enabled: true
    hostNameSslStates: [
      {
        name: '${webAppName}.azurewebsites.net'
        sslState: 'Disabled'
        hostType: 'Standard'
      }

    ]
    serverFarmId: appServicePlan.id
    reserved: true
    isXenon: false
    hyperV: false
    dnsConfiguration: {}
    vnetRouteAllEnabled: false
    vnetImagePullEnabled: false
    vnetContentShareEnabled: false
    siteConfig: {
      numberOfWorkers: 1
      linuxFxVersion: 'NODE|20-lts'
      acrUseManagedIdentityCreds: false
      alwaysOn: false
      http20Enabled: false
      functionAppScaleLimit: 0
      minimumElasticInstanceCount: 0
    }
    scmSiteAlsoStopped: false
    clientAffinityEnabled: false
    clientCertEnabled: false
    clientCertMode: 'Required'
    hostNamesDisabled: false
    vnetBackupRestoreEnabled: false
    containerSize: 0
    dailyMemoryTimeQuota: 0
    httpsOnly: true
    redundancyMode: 'None'
    publicNetworkAccess: 'Enabled'
    storageAccountRequired: false
    keyVaultReferenceIdentity: 'SystemAssigned'
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

output uniqueServerFarmsNameOutput string = uniqueServerFarmsName
