elements.pure_Heat = {
    color: "#ff5f5f",
    tool: function(pixel) {
        pixel.temp += 9837429837948374983247937439284739247392879898732497943298;
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.pure_cold = {
    color: "#4747ff",
    tool: function(pixel) {
        pixel.temp -= 983742983794837498324793743928473924739287989873249794329898985;
		pixelTempCheck(pixel)
    },
    category: "tools",
};

elements.super_wall = {
		color: "#828282", 
		behavior: behaviors.WALL,
		tempHigh: 9807234599,
		category: "solids",
		state: "solid",
		density: 1202308975439875493857439584395843,
		conduct: 0,
		hardness: 18446744073709551615184467440737095516151844674407370955161518446744073709551615,
	        stateHigh: "super_ruins",
	}
elements.super_ruins = {
		color: ["#919191", "#a8a8a8", "#525252"], 
		behavior: behaviors.POWDER,
		category: "powders",
		state: "solid",
		density: 1202308975439875493857439584395843,
		conduct: 0,
		hardness: 18446744073709551615184467440737095516151844674407370955161518446744073709551615,
	
	};
elements.fire_douser = {
    color: ["#d9d9d9", "#d5d5d5"],
    behavior: behaviors.LIQUID,
    tempHigh: 6000,
    stateHigh: "nitrogen",
    temp: -167,
    tempLow: -200,
    stateLow: "liquid_nitrogen",
    category: "liquids",
    reactions: {
        "fire": { 
            elem1: "fire_douser", 
            elem2: "nitrogen", 
        },
        "plasma": { elem1: "fire_douser", elem2: "nitrogen" },
        "fallout": { elem1: null, elem2: "nitrogen" },
        "radiation": { elem1: "fire_douser", elem2: "nitrogen" }
    },
    state: "liquid",
    density: 9997,
    conduct: 0.02,
    stain: -5.43
}
