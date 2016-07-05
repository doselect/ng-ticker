
angular.module('ngTicker', [])

  .factory('ngTicker', ['$rootScope', '$interval', function ($rootScope, $interval) {
    return {
      tickDown: function (expiry, tickerInstance) {
        var tickerFunc, startTicker
        startTicker = function () {
          tickerFunc = $interval(function () {
            var formattedExpiry = moment(moment(expiry), moment.ISO_8601)
            var totalSeconds = moment(formattedExpiry).diff(moment(), 'seconds')

            var hours = Math.floor(totalSeconds / 3600)
            var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
            var seconds = totalSeconds - (hours * 3600) - (minutes * 60)

            // Round off seconds
            seconds = Math.round(seconds * 100) / 100

            var tickMeta = {
              hours: (hours < 0 ? '00' : (hours < 10 ? '0' + hours : hours)),
              minutes: (hours < 0 ? '00' : (minutes < 10 ? '0' + minutes : minutes)),
              seconds: (hours < 0 ? '00' : (seconds < 10 ? '0' + seconds : seconds)),
            }

            // Broadcast ticker events
            if (JSON.stringify(tickMeta) === JSON.stringify({'hours': '00', 'minutes': '00', 'seconds': '00'})) {
              $rootScope.$broadcast('ngTicker:tick' + tickerInstance, tickMeta)
              $rootScope.$broadcast('ngTicker:expired' + tickerInstance, tickMeta)
              $interval.cancel(tickerFunc)
            } else {
              $rootScope.$broadcast('ngTicker:tick' + tickerInstance, tickMeta)
            }
          }, 1000)
        }

        startTicker()
      },

      tickUp: function (startTime, tickerInstance) {
        var tickerFunc, startTicker
        startTicker = function () {
          tickerFunc = $interval(function () {
            var formattedExpiry = moment(moment(startTime), moment.ISO_8601)
            var totalSeconds = moment().diff(moment(formattedExpiry), 'seconds')
            var duration = moment.duration(totalSeconds + 1, 'seconds')

            var hours = duration.hours()
            var minutes = duration.minutes()
            var seconds = duration.seconds()

            var tickMeta = {
              hours: (hours < 0 ? '00' : (hours < 10 ? '0' + hours : hours)),
              minutes: (minutes < 0 ? '00' : (minutes < 10 ? '0' + minutes : minutes)),
              seconds: (seconds < 0 ? '00' : (seconds < 10 ? '0' + seconds : seconds))
            }

            // Broadcast ticker events
            if (JSON.stringify(tickMeta) === JSON.stringify({'hours': '00', 'minutes': '00', 'seconds': '00'})) {
              $rootScope.$broadcast('ngTicker:tick' + tickerInstance, tickMeta)
              $rootScope.$broadcast('ngTicker:notStarted' + tickerInstance, tickMeta)
              $interval.cancel(tickerFunc)
            } else {
              $rootScope.$broadcast('ngTicker:tick' + tickerInstance, tickMeta)
            }
          }, 1000)
        }

        startTicker()
      }
    }
  }])
