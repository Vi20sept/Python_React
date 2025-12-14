# # terraform with app service and docker compose


terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100.0"
    }
    azapi = {
      source  = "Azure/azapi"
      version = ">=2.0.0"
    }
  }

  required_version = ">=1.6.0"
}

provider "azurerm" {
  features {}
  subscription_id = "a3d75254-95de-48a5-99bb-e0d13deb9d94"
}

# 1. Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "rg-dockercompose-app"
  location = "Central India"
}

# 2. App Service Plan (B1 is the minimum for Docker Compose)
resource "azurerm_service_plan" "plan" {
  name                = "dockercompose-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

# 3. App Service with Docker Compose
resource "azapi_resource" "linux_web_app" {
  type      = "Microsoft.Web/sites@2022-09-01"
  name      = "my-dockercompose-app"
  location  = azurerm_resource_group.rg.location
  parent_id = azurerm_resource_group.rg.id

  body = {
    kind       = "app,linux,container"
    properties = {
      serverFarmId = azurerm_service_plan.plan.id

      siteConfig = {
        appSettings = [
          {
            name  = "WEBSITES_ENABLE_APP_SERVICE_STORAGE"
            value = "false"
          },
          {
            name  = "DOCKER_REGISTRY_SERVER_URL"
            value = "https://index.docker.io"
          }
        ]
        linuxFxVersion = "COMPOSE|${base64encode(file("${path.module}/docker-compose.yml"))}"
      }
    }
  }
}

# 4. Output App URL
output "app_url" {
  value = "https://${azapi_resource.linux_web_app.name}.azurewebsites.net"
}