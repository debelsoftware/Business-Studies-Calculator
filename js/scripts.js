
function PCcheck(){
  var givenNew=document.getElementById('docGivenNew').value;
  var givenOld=document.getElementById('docGivenOld').value;
  if (givenOld!=="" && givenNew!==""){
    var PCanswer=calcPC(givenNew,givenOld)
    document.getElementById('answerPC').innerHTML=(PCanswer)
  }
  else {
    alert("Sorry. I do not have enough data to work out the answer")
  }
}

function calcPC(givenNew,givenOld){
  answer=((givenNew - givenOld)/givenOld * 100)
  return answer
}

function feedback(){
  alert("Please send any feedback to debeldeveloper@gmail.com")
}

function liquidCheck(){
  var GivenCAssets=document.getElementById('docGivenCAssets').value
  var GivenCLiabilities=document.getElementById('docGivenCLiabilities').value
  var GivenStock=document.getElementById('docGivenStock').value
  if (GivenStock==""){
    if (GivenCAssets!="" && GivenCLiabilities!=""){
      var currentAnswer=(GivenCAssets/GivenCLiabilities);
      var workingAnswer=(GivenCAssets - GivenCLiabilities);
      document.getElementById('displayCurrentRatio').innerHTML=(currentAnswer+":1");
      document.getElementById('displayWorkingCapital').innerHTML=(workingAnswer);
      document.getElementById('displayAcidTest').innerHTML=("Could not calculate acid test");
    }
    else{
      alert("Sorry. I do not have enough data to work out the answer")
    }
    }
    else{
      if (GivenCAssets!="" && GivenCLiabilities!=""){
        var currentAnswer=(GivenCAssets/GivenCLiabilities);
        var workingAnswer=(GivenCAssets - GivenCLiabilities);
        var acidAnswer=((GivenCAssets-GivenStock)/GivenCLiabilities);
        document.getElementById('displayCurrentRatio').innerHTML=(currentAnswer+":1");
        document.getElementById('displayWorkingCapital').innerHTML=(workingAnswer);
        document.getElementById('displayAcidTest').innerHTML=(acidAnswer+":1");
      }
      else{
        alert("Sorry. I do not have enough data to work out the answer")
      }
  }
  }

function gearingCheck(){
    var longLiab=document.getElementById('docGivenLLiabilities').value;
    var capEmp=document.getElementById('docGivenCapEm').value;
    if(capEmp==""||longLiab==""){
      alert("Sorry. I do not have enough data to work out the answer")
    }
    else if (capEmp>=0 && longLiab>=0){
      answer=((longLiab/capEmp)*100)
      document.getElementById('displayGearing').innerHTML=(answer+"%");
      document.getElementById('displayGearingAA').innerHTML=gearingAutoAnalyse(answer);
    }
    else{
      alert("Sorry. Something is wrong with the data you have provided.")
    }
  }

function gearingAutoAnalyse(answer){
    if (answer>=50){
      return("This business is highly geared meaning that it relies heavily upon lenders")
    }
    else if (answer<50 && answer>25) {
      return("This business is within a range that in most cases is an ideal level of borrowing from lenders")
    }
    else{
      return("This business has low gearing meaning that it has low reliance on lenders")
    }
  }

function cpuCheck(){
  var givenSP=document.getElementById('docGivenSellingPrice').value;
  var givenVCPU=document.getElementById('docGivenVarCostPUnit').value;
  if (givenSP!=="" && givenVCPU!==""){
    var vcpuAnswer=(givenSP-givenVCPU)
    document.getElementById('answerCPU').innerHTML=(vcpuAnswer)
  }
  else {
    alert("Sorry. I do not have enough data to work out the answer")
  }
}

function gpmCheck(){
	var givenGP=document.getElementById('docGivenGrossProfit').value;
    var givenSR=document.getElementById('docGivenSR').value;
    if (givenGP!=="" && givenSR!==""){
      var gpmAnswer=((givenGP-givenSR)*100)
      document.getElementById('answerGPM').innerHTML=(gpmAnswer)
    }
    else {
      alert("Sorry. I do not have enough data to work out the answer")
  }

}

function belooCheck(){
	var givenFC=document.getElementById('docGivenFixedCosts').value;
  	var givenCPU=document.getElementById('docGivenConPU').value;
  	if (givenFC!=="" && givenCPU!==""){
    	var belooAnswer=(givenFC / givenCPU)
    	document.getElementById('answerBELOO').innerHTML=(belooAnswer)
  	}
  	else {
    	alert("Sorry. I do not have enough data to work out the answer")
  	}
}

function pedAA(pedAnswer){
	if (pedAnswer>=1){
			document.getElementById('displayPEDAA').innerHTML=('Elastic. This means that demand will be strongly affected by the change in price.')
		}
		else if (pedAnswer==0){
			document.getElementById('displayPEDAA').innerHTML=('Perfectly inelastic. This means that demand will not be affected by the change in price.')
			}
		else if (pedAnswer<1){
			document.getElementById('displayPEDAA').innerHTML=('Inelastic. This means that they require a large change in price to change the demand.')
			}
}

function pedCheck(){
	var givenCD=document.getElementById('docGivenChangeDem').value;
  	var givenCP=document.getElementById('docGivenChangePrice').value;
  	if (givenCD!=="" && givenCP!==""){
    	var pedAnswer=(givenCD / givenCP)
    	document.getElementById('answerPED').innerHTML=(pedAnswer)
		pedAA(pedAnswer)
		}
  	else {
    	alert("Sorry. I do not have enough data to work out the answer")
  	}
}

function disclaimer(){
	alert("The creator/publisher of this app claims no responsibility for miscalculations or errors")
}

function capUtilCheck(){
	var givenCO=document.getElementById('docGivenCurrentOutput').value;
  	var givenMO=document.getElementById('docGivenMaxOutput').value;
  	if (givenCO!=="" && givenMO!==""){
    	var capUtilAnswerP1=(givenCO / givenMO)
		var capUtilAnswer=(capUtilAnswerP1 * 100)
    	document.getElementById('answerCapUtil').innerHTML=(capUtilAnswer)
		}
  	else {
    	alert("Sorry. I do not have enough data to work out the answer")
}
}