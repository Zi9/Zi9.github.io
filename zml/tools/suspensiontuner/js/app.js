const weightInput = document.querySelector("#carWeight");
const frontBalanceInput = document.querySelector("#frontBalance");

const frontSpringsStiffnessLabel = document.querySelector("#frontSpringsStiffness");
const rearSpringsStiffnessLabel = document.querySelector("#rearSpringsStiffness");
const frontDamperFastBumpLabel = document.querySelector("#frontDamperFastBump");
const rearDamperFastBumpLabel = document.querySelector("#rearDamperFastBump");
const frontDamperFastReboundLabel = document.querySelector("#frontDamperFastRebound");
const rearDamperFastReboundLabel = document.querySelector("#rearDamperFastRebound");
const frontDamperBumpLabel = document.querySelector("#frontDamperBump");
const rearDamperBumpLabel = document.querySelector("#rearDamperBump");
const frontDamperReboundLabel = document.querySelector("#frontDamperRebound");
const rearDamperReboundLabel = document.querySelector("#rearDamperRebound");

function recalculate()
{
    var weight = weightInput.value;
    var frontBalance = frontBalanceInput.value;

    if (isNaN(weight)) return;
    if (isNaN(frontBalance)) return;

    var rearBalance = 100 - frontBalance;
    
    var frontSpringsStiffness = (((weight / 100) * frontBalance) * 9.8 * 10 / 1000) * 1.32;
    var rearSpringsStiffness = (((weight / 100) * rearBalance) * 9.8 * 10 / 1000) * 1.32;

    var frontDamperFastBump = ((((weight / 100) * frontBalance) / 2) * 9.8) * 1.32;
    var rearDamperFastBump = ((((weight / 100) * rearBalance) / 2) * 9.8) * 1.32;
    var frontDamperFastRebound = ((((weight / 100) * frontBalance) / 2) * 9.8) * 1.44 ;
    var rearDamperFastRebound = ((((weight / 100) * rearBalance) / 2) * 9.8) * 1.44;
    var frontDamperBump = ((((weight / 100) * frontBalance) / 2) * 9.8) * 1.22;
    var rearDamperBump = ((((weight / 100) * rearBalance) / 2) * 9.8) * 1.22;
    var frontDamperRebound = ((((weight / 100) * frontBalance) / 2) * 9.8) * 1.64;
    var rearDamperRebound = ((((weight / 100) * rearBalance) / 2) * 9.8) * 1.64;

    // frontSpringsStiffnessLabel.textContent = Math.trunc(frontSpringsStiffness);
    // rearSpringsStiffnessLabel.textContent = Math.trunc(rearSpringsStiffness);
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
