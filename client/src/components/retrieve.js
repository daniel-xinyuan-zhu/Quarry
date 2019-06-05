import {csvjson} from "./convert.js"
import $ from 'jquery'; 


export function Retrieve(){
	$.ajax("./examples/Demographic_Statistics_By_Zip_Code.csv", {
		success: function(data) {
			var jsonobject = csvjson.csv2json(data);
			console.log("converted json: " + jsonobject)
			return jsonobject;
		},
		error: function() {
			console.log("failed to retrieve csv")
		}
	});
}