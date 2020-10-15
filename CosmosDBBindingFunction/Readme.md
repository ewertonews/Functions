## Description

This is an example of a function with a CosmosDB input binding.
A CosmosDB resource was created, with a data base called ***func-io-learn-db*** and a collection called ***Bookmarks*** (Check the function.json file). The folowing itens have been added to the collection:

```json
{
    "id": "docs",
    "url": "https://portal.azure.com"
}
{
    "id": "portal",
    "url": "https://portal.azure.com"
}

{
    "id": "learn",
    "url": "https://docs.microsoft.com/learn"
}

{
    "id": "marketplace",
    "url": "https://azuremarketplace.microsoft.com/marketplace/apps"
}

{
    "id": "blog",
    "url": "https://azure.microsoft.com/blog"
}
```

## Binding information (in function.json)

![bindingsdetails](\bindingsdetails.png "Title")
