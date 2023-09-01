const weightInput = document.querySelector("#carWeight");
const frontBalanceInput = document.querySelector("#frontBalance");
const cxRatioInput = document.querySelector("#cxRatio");
const frontDownforceInput = document.querySelector("#frontDownforce");
const rearDownforceInput = document.querySelector("#rearDownforce");

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
    var weight = parseFloat(weightInput.value);
    var frontBalance = parseFloat(frontBalanceInput.value);
    var cxRatio = parseFloat(cxRatioInput.value) + 1;
    var frontDownforce = parseFloat(frontDownforceInput.value);
    var rearDownforce = parseFloat(rearDownforceInput.value);

    if (isNaN(weight)) return;
    if (isNaN(frontBalance)) return;
    if (isNaN(cxRatio)) return;
    if (isNaN(frontDownforce)) return;
    if (isNaN(rearDownforce)) return;

    var rearBalance = 100 - frontBalance;

    var frontDownforceRatio = (frontDownforce / 10) + 1;
    var rearDownForceRatio = (rearDownforce / 10) + 1;

    var frontSpringsStiffness = (((weight / 100) * frontBalance) * 9.8 * 10 / 1000) * 1.32;
    var rearSpringsStiffness = (((weight / 100) * rearBalance) * 9.8 * 10 / 1000) * 1.32;

    var frontDamperFastBump = ((((weight / 100) * frontBalance) / 2) * 9.8) * cxRatio * 1.15;
    var rearDamperFastBump = ((((weight / 100) * rearBalance) / 2) * 9.8) * cxRatio * 1.15;
    var frontDamperFastRebound = ((((weight / 100) * frontBalance) / 2) * 9.8) * cxRatio / 1.1;
    var rearDamperFastRebound = ((((weight / 100) * rearBalance) / 2) * 9.8) * cxRatio / 1.1;
    var frontDamperBump = ((((weight / 100) * frontBalance) / 2) * 9.8) * frontDownforceRatio * 1.1;
    var rearDamperBump = ((((weight / 100) * rearBalance) / 2) * 9.8) * rearDownForceRatio * 1.1;
    var frontDamperRebound = ((((weight / 100) * frontBalance) / 2) * 9.8) * frontDownforceRatio * 1.15;
    var rearDamperRebound = ((((weight / 100) * rearBalance) / 2) * 9.8) * rearDownForceRatio * 1.15;

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
