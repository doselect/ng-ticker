## ng-ticker

Count up || Count down

#### Usage

```
bower install ng-ticker
```

- Add ngTicker module as dependency in module and controller

- From the controller, pass the expiry (String) in ISO 8601 format (2016-02-05T17:00:00)

```
// To count down
$scope.expiry = '2016-02-05T17:00:00'
$scope.ticker = ngTicker.tickDown($scope.expiry, instanceIdentifier)

// To count up
$scope.startTime = '2016-02-05T17:00:00'
$scope.ticker = ngTicker.tickup($scope.startTime, instanceIdentifier)
```

- For count down ticker, listen for `ngTicker:tick + instanceIdentifier` and `ngTicker:expired + instanceIdentifier` signals

- For count up ticker, listen for `ngTicker:tick + instanceIdentifier` and `ngTicker:notStarted + instanceIdentifier` signals

```
// Count down ticker
$scope.$on('ngTicker:tick + instanceIdentifier', function (event, tickMeta) {
  // {{hours : 02, minutes : 08, seconds : 10}} tickMeta
})

$scope.$on('ngTicker:expired + instanceIdentifier', function (event, tickMeta) {
  // {{hours : 00, minutes : 00, seconds : 00}} tickMeta
})

// Count up ticker
$scope.$on('ngTicker:tick + instanceIdentifier', function (event, tickMeta) {
  // {{days: 00, hours : 02, minutes : 08, seconds : 10}} tickMeta
})

$scope.$on('ngTicker:notStarted + instanceIdentifier', function (event, tickMeta) {
  // {{days: 00, hours : 00, minutes : 00, seconds : 00}} tickMeta
})
```
