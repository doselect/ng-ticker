## ng-ticker

#### Usage

```
bower install ng-ticker
```

- Add ngTicker module as dependency in module and controller

- From the controller, pass the expiry (String) in ISO 8601 format (2016-02-05T17:00:00)

```
$scope.expiry = '2016-02-05T17:00:00'
$scope.ticker = ngTicker.ticker($scope.expiry, instanceIdentifier)
```

- Listen for `ngTicker:tick + instanceIdentifier` and `ngTicker:expired + instanceIdentifier` signals

```
$scope.$on('ngTicker:tick + instanceIdentifier', function (event, tickMeta) {
  // {{hours : 02, minutes : 08, seconds : 10}} tickMeta
})

$scope.$on('ngTicker:expired + instanceIdentifier', function (event, tickMeta) {
  // {{hours : 00, minutes : 00, seconds : 00}} tickMeta
})
```
