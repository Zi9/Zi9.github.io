const weightInput = document.querySelector("#weightInput");
const frontBalanceInput = document.querySelector("#frontBalanceInput");

const frontSpringsStiffnessLabel = document.querySelector("#frontSpringsStiffnessLabel");
const rearSpringsStiffnessLabel = document.querySelector("#rearSpringsStiffnessLabel");
const frontDamperFastBumpLabel = document.querySelector("#frontDamperFastBumpLabel");
const rearDamperFastBumpLabel = document.querySelector("#rearDamperFastBumpLabel");
const frontDamperFastReboundLabel = document.querySelector("#frontDamperFastReboundLabel");
const rearDamperFastReboundLabel = document.querySelector("#rearDamperFastReboundLabel");
const frontDamperBumpLabel = document.querySelector("#frontDamperBumpLabel");
const rearDamperBumpLabel = document.querySelector("#rearDamperBumpLabel");
const frontDamperReboundLabel = document.querySelector("#frontDamperReboundLabel");
const rearDamperReboundLabel = document.querySelector("#rearDamperReboundLabel");

function recalculate()
{
    var weight = weightInput.value;
    var frontBalance = frontBalanceInput.value;

    if (isNaN(weight)) return;
    if (isNaN(frontBalance)) return;

    var rearBalance = 100 - frontBalance;
    

    var frontSpringsStiffness = (((weight / 100) * frontBalance) * 9.8 * 10 / 1000) * 1.35;
    var rearSpringsStiffness = (((weight / 100) * rearBalance) * 9.8 * 10 / 1000) * 1.35;

    var frontDamperFastBump = ((((weight / 100) * frontBalance) / 2) * 9.8) / 1.072;
    var rearDamperFastBump = ((((weight / 100) * rearBalance) / 2) * 9.8) / 1.072;
    var frontDamperFastRebound = ((((weight / 100) * frontBalance) / 2) * 9.8) * 1.04;
    var rearDamperFastRebound = ((((weight / 100) * rearBalance) / 2) * 9.8) * 1.04;
    var frontDamperBump = ((((weight / 100) * frontBalance) / 2) * 9.8) * 1.36;
    var rearDamperBump = ((((weight / 100) * rearBalance) / 2) * 9.8) * 1.36;
    var frontDamperRebound = ((((weight / 100) * frontBalance) / 2) * 9.8) * 1.34;
    var rearDamperRebound = ((((weight / 100) * rearBalance) / 2) * 9.8) * 1.34;

    frontSpringsStiffnessLabel.textContent = Math.trunc(frontSpringsStiffness);
    rearSpringsStiffnessLabel.textContent = Math.trunc(rearSpringsStiffness);
    frontDamperFastBumpLabel.textContent = Math.trunc(frontDamperFastBump);
    rearDamperFastBumpLabel.textContent = Math.trunc(rearDamperFastBump);
    frontDamperFastReboundLabel.textContent = Math.trunc(frontDamperFastRebound);
    rearDamperFastReboundLabel.textContent = Math.trunc(rearDamperFastRebound);
    frontDamperBumpLabel.textContent = Math.trunc(frontDamperBump);
    rearDamperBumpLabel.textContent = Math.trunc(rearDamperBump);
    frontDamperReboundLabel.textContent = Math.trunc(frontDamperRebound);
    rearDamperReboundLabel.textContent = Math.trunc(rearDamperRebound);
    
}

recalculate();
