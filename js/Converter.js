var Converter = (function () {
    // private stuff goes here


    return {

        convertFromImperialToMetric: function (weight) {
		
		 if ( !isNaN(weight) ) {
			return weight / 2.2;
		} else {
			throw new Error ("Not a number");
		}

			
        },

        convertFromMetricToImperial: function (weight) {
			
        }

    }


})();
