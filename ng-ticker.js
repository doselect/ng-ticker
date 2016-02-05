angular.module('ngTicker', [])

  .factory('ngTicker', ['$rootScope', function ($rootScope) {
    return {
      ticker: function (expiry) {
        var formattedExpiry = moment(moment(expiry), moment.ISO_8601)
        var totalSeconds = moment(formattedExpiry).diff(moment(), 'seconds')

        var hours = Math.floor(totalSeconds / 3600)
        var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
        var seconds = totalSeconds - (hours * 3600) - (minutes * 60)

        // Round off seconds
        seconds = Math.round(seconds * 100) / 100
        return {
          hours: (hours < 10 ? '0' + hours : hours),
          minutes: (minutes < 10 ? '0' + minutes : minutes),
          seconds: (seconds < 10 ? '0' + seconds : seconds)
        }
      }
    }
  }])
