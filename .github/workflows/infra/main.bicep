param rgName string = 'get-the-solution'
param rgLocation string = 'Germany West Central'

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: rgLocation
}
