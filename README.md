## ng-ticker

#### Usage

```
bower install ng-ticker
```

- Add ngTicker module as dependency in module and controller

- From the controller, pass the expiry object in ISO 8601 format (2016-02-05T17:00:00)

```
$scope.expiry = moment('2016-02-05T17:00:00')

$interval(function () {
  $scope.ticker = countdown.ticker($scope.expiry)
}, 1000)
```

- $scope.ticker would look like

```
{
  hours : 02,
  minutes : 08,
  seconds : 10
}

> Note: Wrapped in `interval` to refresh the object every second.
