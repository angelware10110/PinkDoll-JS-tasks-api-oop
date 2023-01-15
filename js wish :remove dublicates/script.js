

function removeDuplicate(str, n)
	{
		var index = 0;
		for (var i = 0; i < n; i++)
		{
			var j;
			for (j = 0; j < i; j++) {
				if (str[i] == str[j]) {
					break;
				}
			}
			if (j == i) {
				str[index++] = str[i];
			}
		}
		
		return str.join("").slice(str, index);
	}
		var str = "as graziai dainuoju, mano dainos man patinka, milijonai klauso mano dainu, mano oda spindi, esu apsupta meiles mylimu zmoniu, esu sveika, motyvuota, aktyvi ir ryztinga, esu liekna, turtinga ir mano norai pildosi, pritraukiu intelektualius idomius zmones leisti laika ir koloboruoti".split("");
		var n = str.length;
		document.write(removeDuplicate(str, n));
	
