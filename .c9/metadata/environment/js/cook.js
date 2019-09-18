{"filter":false,"title":"cook.js","tooltip":"/js/cook.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":121,"column":5},"action":"insert","lines":["//declare global variables","    var age = window.document.getElementById(\"age\").value;","    var weight = window.document.getElementById(\"weight\").value;","    var height = window.document.getElementById(\"height\").value;","    var creatinine = window.document.getElementById(\"creatinine\").value;","    var male = document.forms[\"vanc\"][\"male\"].checked;","    var female = document.forms[\"vanc\"][\"female\"].checked;","    ","    console.log('connected');","    ","    // this function displays the form when the checkbox is true","    function displayForm() {","        var checkbox = document.getElementById('showform');","        var vancform = document.getElementById('vancform');","        ","        if (checkbox.checked) {","            vancform.style.display = 'block';","        } else {","            vancform.style.display = 'none';","        }","    }","","    //this function displays the height box if under OR overweight is slected","    function displayHeight() {","        var underWeight = document.getElementById('underweight');","        var overWeight = document.getElementById('overweight');","        var heightbox = document.getElementById('heightbox')","        var normalweight = document.getElementById('normalweight')","        ","        if (underWeight.checked) {","            heightbox.style.display = 'block';","        } else if (overWeight.checked) {","            heightbox.style.display = 'block';","        } else if (normalweight.checked) {","            heightbox.style.display = 'none';","        }","    }","","        ","        // Initial dose calculation","        var vDose;","        ","        function dose() {","            //get the input","            ","            if (isNaN(weight)) {","                vDose = \"<em>Weight</em>must be a number!\";","            } else if (weight < 40) {","                vDose = 750+\"mg\";","            } else if (weight >=40 && weight<= 59) {","                vDose = 1000+\"mg\";","            } else if (weight >=60 && weight<= 90) {","                vDose = 1500+\"mg\";","            } else if (weight >90) {","                vDose = 2000+\"mg\";","            }","            document.getElementById(\"stat_dose\").innerHTML = \"Prescribe a stat dose of \" + vDose;","        }        ","        ","        ","        // Crcl without gender or creatinine adjustment","        var CrCl0;","        ","        function CrCl0() {","            // validate age, weight, creatinie","            if (age < 18) {","                CrCl0 = \"<em>Age</em> cannot equal less than 18!\";","            } else if (isNaN(age)) {","                CrCl0 = \"<em>Age</em> must be a number!\";","            } else if (isNaN(weight)) {","                CrCl0 = \"<em>Weight</em> must be a number!\";","            } else if (isNaN(creatinine)) {","                CrCl0 = \"<em>Creatinine</em> must be a number!\";","            } else { ","                var CrCl0 = ((140-age)*weight);","            }","            ","            // output the result (or errors)","            document.getElementById(\"Cr_Cl0\").innerHTML = CrCl0;","        }","        ","        // CrCl with gender adjustment","        function kidneygender(){","        var resultG;","            if (male){","                resultG = CrCl0 *1.23;","            } else{","                resultG = CrCl0 *1.04;","            }","            ","            ","        // CrCl with creatinine","        function CrCl(){","        var creatinine = document.forms[\"vanc\"][\"creatine\"].value;","        var CrCl = resultG/creatinine;","        }","        ","        ","        //Calculate of BMI","        var bmi;","        function bmi() {","            var bmi = weight/(height/100*height/100)","        }","        ","        //If overweight, calculate IBW","        function overWeight () {","            if (bmi > 25 && male) {","                 50+(0.91*(height-152.4));","            } ","            else if (bmi > 25) {","                 45+(0.91*(height-152.4));","            }","        }","        ","        //","        ","        //If Underweight, adjust CrCl","        function underweight(){","            var underweight;","            underweight = CrCl*0.69;","        }","    }"],"id":1}],[{"start":{"row":60,"column":7},"end":{"row":79,"column":9},"action":"remove","lines":[" // Crcl without gender or creatinine adjustment","        var CrCl0;","        ","        function CrCl0() {","            // validate age, weight, creatinie","            if (age < 18) {","                CrCl0 = \"<em>Age</em> cannot equal less than 18!\";","            } else if (isNaN(age)) {","                CrCl0 = \"<em>Age</em> must be a number!\";","            } else if (isNaN(weight)) {","                CrCl0 = \"<em>Weight</em> must be a number!\";","            } else if (isNaN(creatinine)) {","                CrCl0 = \"<em>Creatinine</em> must be a number!\";","            } else { ","                var CrCl0 = ((140-age)*weight);","            }","            ","            // output the result (or errors)","            document.getElementById(\"Cr_Cl0\").innerHTML = CrCl0;","        }"],"id":2}]]},"ace":{"folds":[],"scrolltop":1027,"scrollleft":0,"selection":{"start":{"row":98,"column":8},"end":{"row":102,"column":9},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1568743732450,"hash":"059e5bb7c79cb3dbe473b92775fa021c58d6ad3f"}