param rgLocation string
param appName string
param rgName string
param serverFarmsName string = 'AppServiceplan'

var uniqueServerFarmsName = '${serverFarmsName}-${appName}-${uniqueString(serverFarmsName)}'
var webAppName = appName
var location = rgLocation

// resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
//   name: uniqueServerFarmsName
//   location: location
//   // Add the rest of your app service plan properties here
// }

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
