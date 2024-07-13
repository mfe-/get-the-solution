param rgName string = 'get-the-solution'

resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: rgName
  location: 'eastus'
}
