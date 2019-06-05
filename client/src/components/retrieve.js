import {csv2json} from "./convert.js"

export function Retrieve(){


	$.ajax("./examples/Demographic_Statistics_By_Zip_Code.csv", {
		success: function(data) {
			var jsonobject = csvjson.csv2json(data);
			console.log("converted json: " + jsonobject)
			return jsonobject;
        // Now use jsonobject to do some charting...
    },
    error: function() {
    	console.log("failed to retrieve csv")
    }
});
}