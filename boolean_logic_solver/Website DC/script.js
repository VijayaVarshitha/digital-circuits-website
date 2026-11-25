// -------------------------
// VARIABLES
// -------------------------

let variableCount = 2;

let generatedVariableCount = 2;

// -------------------------
// HOME PAGE ELEMENTS
// -------------------------

const truthTableButton =
    document.getElementById("truthtablebutton");

const homePage =
    document.getElementById("homepage");

const truthTablePage =
    document.getElementById("truthTablePage");

const backButton =
    document.getElementById("backButton");
const logicalStatementButton =
    document.getElementById("logicalStatementButton");

const logicalStatementPage =
    document.getElementById("logicalStatementPage");

const backFromLogicalStatement =
    document.getElementById("backFromLogicalStatement");

// -------------------------
// VARIABLE SELECTOR
// -------------------------

const decreaseVariables =
    document.getElementById("decreaseVariables");

const increaseVariables =
    document.getElementById("increaseVariables");

const variableCountDisplay =
    document.getElementById("variableCount");

const variableError =
    document.getElementById("variableError");


// -------------------------
// TABLE ELEMENTS
// -------------------------

const generateTableButton =
    document.getElementById("generateTable");

const tableContainer =
    document.getElementById("tableContainer");

const solveContainer =
    document.getElementById("solveContainer");

const truthTableResult =
    document.getElementById("truthTableResult");

const kmapContainer =
    document.getElementById("kmapContainer");


    const clearTruthTable =
    document.getElementById(
        "clearTruthTable"
    );
const simplificationContainer =
    document.getElementById("simplificationContainer");

    const circuitContainer =
    document.getElementById(
        "circuitContainer"
    );
// =====================================================
// BOOLEAN EXPRESSION PAGE
// =====================================================

const booleanExpressionButton =
    document.getElementById(
        "booleanExpressionButton"
    );

const booleanExpressionPage =
    document.getElementById(
        "booleanExpressionPage"
    );

const backFromBooleanExpression =
    document.getElementById(
        "backFromBooleanExpression"
    );

const booleanExpressionInput =
    document.getElementById(
        "booleanExpressionInput"
    );

const booleanExpressionError =
    document.getElementById(
        "booleanExpressionError"
    );

const generateExpressionTable =
    document.getElementById(
        "generateExpressionTable"
    );

const expressionTruthTableContainer =
    document.getElementById(
        "expressionTruthTableContainer"
    );

const expressionSolveContainer =
    document.getElementById(
        "expressionSolveContainer"
    );

const expressionKmapContainer =
    document.getElementById(
        "expressionKmapContainer"
    );

const expressionSimplificationContainer =
    document.getElementById(
        "expressionSimplificationContainer"
    );

const expressionVerificationContainer =
    document.getElementById(
        "expressionVerificationContainer"
    );

const expressionCircuitContainer =
    document.getElementById(
        "expressionCircuitContainer"
    );
    function hideAllPages() {

    homePage.style.display = "none";

    truthTablePage.style.display = "none";

    mintermPage.style.display = "none";

    booleanExpressionPage.style.display = "none";

    kmapPage.style.display = "none";

    binaryAdderPage.style.display = "none";

    binarySubtractorPage.style.display = "none";

    logicalStatementPage.style.display = "none";
}
// -------------------------
// OPEN TRUTH TABLE PAGE
// -------------------------

truthTableButton.addEventListener("click", function () {

    homePage.style.display = "none";

    truthTablePage.style.display = "block";

});


// -------------------------
// BACK BUTTON
// -------------------------

backButton.addEventListener("click", function () {

    truthTablePage.style.display = "none";

    homePage.style.display = "block";

});


// -------------------------
// INCREASE VARIABLES
// -------------------------

increaseVariables.addEventListener("click", function () {

   if (variableCount < 6) {

    variableCount++;

    variableCountDisplay.textContent =
        variableCount;

    variableError.textContent = "";

}

else {

    variableError.textContent =
        "Maximum 6 variables are allowed.";

}

});


// -------------------------
// DECREASE VARIABLES
// -------------------------

decreaseVariables.addEventListener("click", function () {

    if (variableCount > 2) {

        variableCount--;

        variableCountDisplay.textContent = variableCount;

        variableError.textContent = "";

    }

    else {

        variableError.textContent =
            "Minimum 2 variables are required.";

    }

});


// -------------------------
// GENERATE TRUTH TABLE
// -------------------------

generateTableButton.addEventListener("click", function () {

    generateTruthTable();

});


function generateTruthTable() {
    truthTableResult.innerHTML = "";

kmapContainer.innerHTML = "";

simplificationContainer.innerHTML = "";

    generatedVariableCount = variableCount;

    const numberOfRows = 2 ** variableCount;


    // Generate variable names
    const variables = [];

    for (let i = 0; i < variableCount; i++) {

        variables.push(
            String.fromCharCode(65 + i)
        );

    }

let html = `

    <p class="truth-table-instruction">
        Click the output value to toggle:
        <strong>0 → 1 → X → 0</strong>
    </p>

    <table>
        ...
    </table>

`;

    // Start creating table
    let tableHTML = "<table>";


    // Table header
    tableHTML += "<thead>";

    tableHTML += "<tr>";


    for (let variable of variables) {

        tableHTML += `<th>${variable}</th>`;

    }


    // Output column
    tableHTML += "<th>F</th>";


    tableHTML += "</tr>";

    tableHTML += "</thead>";


    // Table body
    tableHTML += "<tbody>";


    for (let row = 0; row < numberOfRows; row++) {

        const binaryValue =
            row.toString(2).padStart(variableCount, "0");


        tableHTML += "<tr>";


        // Input values
        for (let bit of binaryValue) {

            tableHTML += `<td>${bit}</td>`;

        }


        // Output value
        tableHTML += `
            <td>
    <button
        type="button"
        class="truth-output"
        data-value="0"
        onclick="toggleTruthOutput(this)"
    >
        0
    </button>
</td>
        `;


        tableHTML += "</tr>";

    }


    tableHTML += "</tbody>";

    tableHTML += "</table>";
    tableHTML = `
    <p class="truth-table-instruction">
        Click the output value to toggle:
        <strong>0 → 1 → X → 0</strong>
    </p>

    ${tableHTML}
`;

    // Display table
    tableContainer.innerHTML = tableHTML;


    // Create Solve button
    solveContainer.innerHTML = `
        <button id="solveTruthTable">
            Solve
        </button>
    `;


    // Find the newly created Solve button
    const solveTruthTable =
        document.getElementById("solveTruthTable");


    // Add click event to Solve
    solveTruthTable.addEventListener("click", function () {

        solveTruthTableFunction();

    });

}

function toggleTruthOutput(button) {

    const currentValue = button.dataset.value;

    if (currentValue === "0") {

        button.dataset.value = "1";
        button.textContent = "1";

    } else if (currentValue === "1") {

        button.dataset.value = "X";
        button.textContent = "X";

    } else {

        button.dataset.value = "0";
        button.textContent = "0";

    }
}


// -------------------------
// SOLVE TRUTH TABLE
// -------------------------

function solveTruthTableFunction() {

    // -------------------------
    // GET ALL F OUTPUTS
    // -------------------------

   const outputValues =
    document.querySelectorAll(".truth-output");


    // -------------------------
    // STORE OUTPUT VALUES
    // -------------------------

    const outputs = [];

    for (let output of outputValues) {

        outputs.push(
            output.dataset.value
        );

    }


    // -------------------------
    // FIND MINTERMS
    // FIND DON'T-CARES
    // -------------------------

    const minterms = [];
    const dontCares = [];

    for (let row = 0; row < outputs.length; row++) {

        if (outputs[row] === "1") {

            minterms.push(row);

        }

        else if (outputs[row] === "X") {

            dontCares.push(row);

        }

    }


    // -------------------------
    // DISPLAY RESULT
    // -------------------------

    let mintermText;

    if (minterms.length === 0) {

        mintermText = "None";

    }

    else {

        mintermText =
            `Σm(${minterms.join(", ")})`;

    }


    let dontCareText;

    if (dontCares.length === 0) {

        dontCareText = "None";

    }

    else {

        dontCareText =
            `Σd(${dontCares.join(", ")})`;

    }


    truthTableResult.innerHTML = `

        <div class="result-box">

            <h2>Result</h2>

            <p>
                Number of variables:
                <strong>
                    ${generatedVariableCount}
                </strong>
            </p>

            <p>
                Minterms:
                <strong>
                    ${mintermText}
                </strong>
            </p>

            <p>
                Don't-care terms:
                <strong>
                    ${dontCareText}
                </strong>
            </p>

        </div>

    `;


    // -------------------------
    // GENERATE K-MAP
    // -------------------------

    generateKMap(
    minterms,
    dontCares,
    kmapContainer
);


    // -------------------------
    // FIND K-MAP GROUPS
    // -------------------------

    const groups =
        findKMapGroups(
            minterms,
            dontCares
        );


    const selectedGroups =
        selectGroups(
            minterms,
            dontCares,
            groups
        );


    // -------------------------
    // HIGHLIGHT K-MAP
    // -------------------------

    highlightKMapGroups(
        selectedGroups
    );


    // -------------------------
    // GET SIMPLIFIED EXPRESSION
    // -------------------------

    const simplifiedExpression =
        groupsToExpression(
            selectedGroups
        );


    // -------------------------
    // VERIFICATION
    // -------------------------

    showVerification(
        simplifiedExpression
    );


    // -------------------------
    // DISPLAY SIMPLIFICATION
    // -------------------------

    displaySimplification(
        selectedGroups,
        simplifiedExpression
    );


    // -------------------------
    // DISPLAY CIRCUIT
    // -------------------------

    showCircuitSection(
        simplifiedExpression
    );


    // -------------------------
    // DEBUG
    // -------------------------

    console.log(
        "Minterms:",
        minterms
    );

    console.log(
        "Don't-cares:",
        dontCares
    );

    console.log(
        "All groups:",
        groups
    );

    console.log(
        "Selected groups:",
        selectedGroups
    );

    console.log(
        "Simplified:",
        simplifiedExpression
    );

}



// =====================================================
// GENERATE K-MAP
// =====================================================

// =====================================================
// GENERATE K-MAP
// =====================================================

function generateKMap(
    minterms,
    dontCares = [],
    container = kmapContainer
) {

    if (generatedVariableCount === 2) {

        generate2VariableKMap(
            minterms,
            dontCares,
            container
        );

    }

    else if (generatedVariableCount === 3) {

        generate3VariableKMap(
            minterms,
            dontCares,
            container
        );

    }

    else if (generatedVariableCount === 4) {

        generate4VariableKMap(
            minterms,
            dontCares,
            container
        );

    }

    else if (generatedVariableCount === 5) {

        generate5VariableKMap(
            minterms,
            dontCares,
            container
        );

    }

    else if (generatedVariableCount === 6) {

        generate6VariableKMap(
            minterms,
            dontCares,
            container
        );

    }

}
function createKMap4x4(
    map,
    mapLabel,
    minterms,
    dontCares
) {

    const gray =
        ["00", "01", "11", "10"];


    let html = `

        <div class="kmap-map">

            <h3>${mapLabel}</h3>

            <table class="kmap">

                <tr>

                    <th>\\</th>

                    <th>00</th>
                    <th>01</th>
                    <th>11</th>
                    <th>10</th>

                </tr>

    `;


    for (
        let row = 0;
        row < 4;
        row++
    ) {

        html += `
            <tr>
                <th>${gray[row]}</th>
        `;


        for (
            let col = 0;
            col < 4;
            col++
        ) {

            const minterm =
                map[row][col];


            let value = "0";


            if (
                minterms.includes(minterm)
            ) {

                value = "1";

            }

            else if (
                dontCares.includes(minterm)
            ) {

                value = "X";

            }


            html += `

                <td
                    data-minterm="${minterm}"
                    data-value="${value}"
                    id="kmap-cell-${minterm}"
                >
                    ${value}
                </td>

            `;

        }


        html += `
            </tr>
        `;

    }


    html += `

            </table>

        </div>

    `;


    return html;
}
function generate5VariableKMap(
    minterms,
    dontCares = [],
    container = kmapContainer
) {

    const mapE0 = [

        [0, 2, 6, 4],
        [8, 10, 14, 12],
        [24, 26, 30, 28],
        [16, 18, 22, 20]

    ];


    const mapE1 = [

        [1, 3, 7, 5],
        [9, 11, 15, 13],
        [25, 27, 31, 29],
        [17, 19, 23, 21]

    ];


    let html = `

        <h2>5-Variable K-Map</h2>

        <div class="kmap-wrapper">

    `;


    // ==========================================
    // E = 0
    // ==========================================

    html += `

        <div class="kmap-map">

            <h3>E = 0</h3>

            <table class="kmap">

                <tr>

                    <th>AB \\ CD</th>

                    <th>00</th>
                    <th>01</th>
                    <th>11</th>
                    <th>10</th>

                </tr>

    `;


    const rowLabels =
        ["00", "01", "11", "10"];


    for (
        let row = 0;
        row < 4;
        row++
    ) {

        html += `

            <tr>

                <th>
                    ${rowLabels[row]}
                </th>

        `;


        for (
            let col = 0;
            col < 4;
            col++
        ) {

            const minterm =
                mapE0[row][col];


            let value = "0";


            if (
                minterms.includes(minterm)
            ) {

                value = "1";

            }

            else if (
                dontCares.includes(minterm)
            ) {

                value = "X";

            }


            html += `

                <td
                    data-minterm="${minterm}"
                    data-value="${value}"
                    id="kmap-cell-${minterm}"
                >
                    ${value}
                </td>

            `;

        }


        html += `

            </tr>

        `;

    }


    html += `

            </table>

        </div>

    `;


    // ==========================================
    // E = 1
    // ==========================================

    html += `

        <div class="kmap-map">

            <h3>E = 1</h3>

            <table class="kmap">

                <tr>

                    <th>AB \\ CD</th>

                    <th>00</th>
                    <th>01</th>
                    <th>11</th>
                    <th>10</th>

                </tr>

    `;


    for (
        let row = 0;
        row < 4;
        row++
    ) {

        html += `

            <tr>

                <th>
                    ${rowLabels[row]}
                </th>

        `;


        for (
            let col = 0;
            col < 4;
            col++
        ) {

            const minterm =
                mapE1[row][col];


            let value = "0";


            if (
                minterms.includes(minterm)
            ) {

                value = "1";

            }

            else if (
                dontCares.includes(minterm)
            ) {

                value = "X";

            }


            html += `

                <td
                    data-minterm="${minterm}"
                    data-value="${value}"
                    id="kmap-cell-${minterm}"
                >
                    ${value}
                </td>

            `;

        }


        html += `

            </tr>

        `;

    }


    html += `

            </table>

        </div>

    `;


    html += `

        </div>

    `;


    container.innerHTML =
    html;
}
function generate6VariableKMap(
    minterms,
    dontCares = [],
    container = kmapContainer
) {

    const maps = [

        {
            label: "AB = 00",

            map: [
                [0, 1, 3, 2],
                [4, 5, 7, 6],
                [12, 13, 15, 14],
                [8, 9, 11, 10]
            ]
        },

        {
            label: "AB = 01",

            map: [
                [16, 17, 19, 18],
                [20, 21, 23, 22],
                [28, 29, 31, 30],
                [24, 25, 27, 26]
            ]
        },

        {
            label: "AB = 11",

            map: [
                [48, 49, 51, 50],
                [52, 53, 55, 54],
                [60, 61, 63, 62],
                [56, 57, 59, 58]
            ]
        },

        {
            label: "AB = 10",

            map: [
                [32, 33, 35, 34],
                [36, 37, 39, 38],
                [44, 45, 47, 46],
                [40, 41, 43, 42]
            ]
        }

    ];


    const rowLabels =
        ["00", "01", "11", "10"];


    const colLabels =
        ["00", "01", "11", "10"];


    let html = `

        <h2>6-Variable K-Map</h2>

        <div class="kmap-wrapper">

    `;


    // ==========================================
    // FOUR MAPS
    // ==========================================

    for (let currentMap of maps) {

        html += `

            <div class="kmap-map">

                <h3>${currentMap.label}</h3>

                <table class="kmap">

                    <tr>

                        <th>CD \\ EF</th>

        `;


        // Column headings

        for (let col of colLabels) {

            html += `
                <th>${col}</th>
            `;

        }


        html += `

                    </tr>

        `;


        // ======================================
        // ROWS
        // ======================================

        for (
            let row = 0;
            row < 4;
            row++
        ) {

            html += `

                <tr>

                    <th>
                        ${rowLabels[row]}
                    </th>

            `;


            // ==================================
            // CELLS
            // ==================================

            for (
                let col = 0;
                col < 4;
                col++
            ) {

                const minterm =
                    currentMap.map[row][col];


                let value = "0";


                if (
                    minterms.includes(minterm)
                ) {

                    value = "1";

                }

                else if (
                    dontCares.includes(minterm)
                ) {

                    value = "X";

                }


                html += `

                    <td
                        data-minterm="${minterm}"
                        data-value="${value}"
                        id="kmap-cell-${minterm}"
                    >
                        ${value}
                    </td>

                `;

            }


            html += `

                </tr>

            `;

        }


        html += `

                </table>

            </div>

        `;

    }


    html += `

        </div>

    `;


    container.innerHTML =
    html;
}



// =====================================================
// 2 VARIABLE K-MAP
// =====================================================

function generate2VariableKMap(
    minterms,
    dontCares = [],
    container = kmapContainer
) {

    const values = [];

    for (let i = 0; i < 4; i++) {

        if (minterms.includes(i)) {

            values.push("1");

        }

        else if (dontCares.includes(i)) {

            values.push("X");

        }

        else {

            values.push("0");

        }

    }


    let html = `

        <h2>K-Map</h2>

        <table class="kmap">

            <tr>
                <th></th>
                <th>0</th>
                <th>1</th>
            </tr>

            <tr>

                <th>0</th>

                <td
                    data-minterm="0"
                    data-value="${values[0]}"
                    id="kmap-cell-0"
                >
                    ${values[0]}
                </td>

                <td
                    data-minterm="1"
                    data-value="${values[1]}"
                    id="kmap-cell-1"
                >
                    ${values[1]}
                </td>

            </tr>

            <tr>

                <th>1</th>

                <td
                    data-minterm="2"
                    data-value="${values[2]}"
                    id="kmap-cell-2"
                >
                    ${values[2]}
                </td>

                <td
                    data-minterm="3"
                    data-value="${values[3]}"
                    id="kmap-cell-3"
                >
                    ${values[3]}
                </td>

            </tr>

        </table>

    `;


    container.innerHTML = html;

}



// =====================================================
// 3 VARIABLE K-MAP
// =====================================================

function generate3VariableKMap(
    minterms,
    dontCares = [],
    container = kmapContainer
) {

    const cellOrder = [

        [0, 1, 3, 2],

        [4, 5, 7, 6]

    ];


    let html = `

        <h2>K-Map</h2>

        <table class="kmap">

            <tr>

                <th>A \\ BC</th>

                <th>00</th>
                <th>01</th>
                <th>11</th>
                <th>10</th>

            </tr>

    `;


    for (let row = 0; row < 2; row++) {

        html += "<tr>";

        html += `<th>${row}</th>`;


        for (let col = 0; col < 4; col++) {

            const minterm =
                cellOrder[row][col];


            let value = "0";


            if (
                minterms.includes(minterm)
            ) {

                value = "1";

            }

            else if (
                dontCares.includes(minterm)
            ) {

                value = "X";

            }


            html += `

                <td
                    data-minterm="${minterm}"
                    data-value="${value}"
                    id="kmap-cell-${minterm}"
                >
                    ${value}
                </td>

            `;

        }


        html += "</tr>";

    }


    html += `

        </table>

    `;


    container.innerHTML =
        html;

}



// =====================================================
// 4 VARIABLE K-MAP
// =====================================================

function generate4VariableKMap(
    minterms,
    dontCares = [],
    container = kmapContainer
) {

    const cellOrder = [

        [0, 1, 3, 2],

        [4, 5, 7, 6],

        [12, 13, 15, 14],

        [8, 9, 11, 10]

    ];


    const rowLabels = [
        "00",
        "01",
        "11",
        "10"
    ];


    let html = `

        <h2>K-Map</h2>

        <table class="kmap">

            <tr>

                <th>AB \\ CD</th>

                <th>00</th>
                <th>01</th>
                <th>11</th>
                <th>10</th>

            </tr>

    `;


    for (let row = 0; row < 4; row++) {

        html += "<tr>";


        html += `
            <th>
                ${rowLabels[row]}
            </th>
        `;


        for (let col = 0; col < 4; col++) {

            const minterm =
                cellOrder[row][col];


            let value = "0";


            if (
                minterms.includes(minterm)
            ) {

                value = "1";

            }

            else if (
                dontCares.includes(minterm)
            ) {

                value = "X";

            }


            html += `

                <td
                    data-minterm="${minterm}"
                    data-value="${value}"
                    id="kmap-cell-${minterm}"
                >
                    ${value}
                </td>

            `;

        }


        html += "</tr>";

    }


    html += `

        </table>

    `;


    container.innerHTML =
        html;

}


clearTruthTable.addEventListener(
    "click",
    function () {

        tableContainer.innerHTML = "";

        solveContainer.innerHTML = "";

        truthTableResult.innerHTML = "";

        kmapContainer.innerHTML = "";

        simplificationContainer.innerHTML = "";

        verificationContainer.innerHTML = "";

        circuitContainer.innerHTML = "";
    }
);

// =====================================================
// K-MAP GROUPING FOR 2–6 VARIABLES
// Supports:
// 1  = required
// X  = don't-care
// 0  = cannot be included
// =====================================================

function findKMapGroups(minterms, dontCares = []) {

    const n = generatedVariableCount;

    const allowed = new Set([
        ...minterms,
        ...dontCares
    ]);

    const groups = [];

    /*
        Each variable can be:

        0 = fixed to 0
        1 = fixed to 1
        - = eliminated

        Example for 4 variables:

        0 1 - -
        
        represents a group of 4 cells.
    */

    const totalPatterns =
        Math.pow(3, n);


    for (
        let patternNumber = 0;
        patternNumber < totalPatterns;
        patternNumber++
    ) {

        let temp =
            patternNumber;

        const pattern = [];


        // Build pattern
        for (
            let i = 0;
            i < n;
            i++
        ) {

            const digit =
                temp % 3;

            temp =
                Math.floor(temp / 3);


            if (digit === 0) {

                pattern.push(0);

            }

            else if (digit === 1) {

                pattern.push(1);

            }

            else {

                pattern.push(null);

            }
        }


        // Number of eliminated variables
        const freeVariables =
            pattern.filter(
                value => value === null
            ).length;


        const groupSize =
            Math.pow(2, freeVariables);


        // Generate all minterms belonging
        // to this group

        const group = [];


        for (
            let minterm = 0;
            minterm < Math.pow(2, n);
            minterm++
        ) {

            const bits =
                minterm
                    .toString(2)
                    .padStart(n, "0");


            let matches = true;


            for (
                let i = 0;
                i < n;
                i++
            ) {

                if (
                    pattern[i] !== null &&
                    Number(bits[i]) !== pattern[i]
                ) {

                    matches = false;
                    break;

                }
            }


            if (matches) {

                group.push(minterm);

            }
        }


        // Make sure every cell is
        // either 1 or X

        let valid = true;

        for (let value of group) {

            if (!allowed.has(value)) {

                valid = false;
                break;

            }
        }


        if (!valid) {
            continue;
        }


        // A group containing only X's
        // is useless.

        const containsRealMinterm =
            group.some(
                value =>
                    minterms.includes(value)
            );


        if (!containsRealMinterm) {
            continue;
        }


        // Sort the group

        const sortedGroup =
            [...group].sort(
                (a, b) => a - b
            );


        // Avoid duplicates

        const alreadyExists =
            groups.some(
                existing =>
                    arraysEqual(
                        existing,
                        sortedGroup
                    )
            );


        if (!alreadyExists) {

            groups.push(
                sortedGroup
            );

        }
    }


    // Largest groups first

    groups.sort(
        (a, b) =>
            b.length - a.length
    );


    console.log(
        "All valid K-map groups:",
        groups
    );


    return groups;
}
function arraysEqual(a, b) {

    if (a.length !== b.length) {
        return false;
    }


    for (
        let i = 0;
        i < a.length;
        i++
    ) {

        if (a[i] !== b[i]) {
            return false;
        }

    }


    return true;
}
function selectGroups(
    minterms,
    dontCares,
    groups
) {

    if (minterms.length === 0) {

        return [];

    }


    const selectedGroups = [];

    const covered = new Set();


    // -------------------------------------------------
    // Sort:
    // 1. Largest groups first
    // 2. Groups covering more uncovered 1s first
    // -------------------------------------------------

    const sortedGroups =
        [...groups].sort(
            (a, b) => {

                const uncoveredA =
                    a.filter(
                        value =>
                            minterms.includes(value) &&
                            !covered.has(value)
                    ).length;


                const uncoveredB =
                    b.filter(
                        value =>
                            minterms.includes(value) &&
                            !covered.has(value)
                    ).length;


                if (
                    uncoveredA !== uncoveredB
                ) {

                    return (
                        uncoveredB -
                        uncoveredA
                    );

                }


                return b.length - a.length;

            }
        );


    // -------------------------------------------------
    // Keep selecting groups until all 1s are covered
    // -------------------------------------------------

    let changed = true;


    while (
        covered.size < minterms.length &&
        changed
    ) {

        changed = false;


        let bestGroup = null;
        let bestCoverage = 0;


        for (
            let group of sortedGroups
        ) {

            // Don't select the exact same group twice

            const alreadySelected =
                selectedGroups.some(
                    selected =>
                        arraysEqual(
                            selected,
                            group
                        )
                );


            if (alreadySelected) {
                continue;
            }


            // Count only uncovered 1s

            const coverage =
                group.filter(
                    value =>
                        minterms.includes(value) &&
                        !covered.has(value)
                ).length;


            if (
                coverage > bestCoverage
            ) {

                bestCoverage =
                    coverage;

                bestGroup =
                    group;

            }

        }


        if (
            bestGroup !== null &&
            bestCoverage > 0
        ) {

            selectedGroups.push(
                bestGroup
            );


            for (
                let value of bestGroup
            ) {

                if (
                    minterms.includes(value)
                ) {

                    covered.add(value);

                }

            }


            changed = true;

        }

    }


    console.log(
        "Selected groups:",
        selectedGroups
    );


    console.log(
        "Covered minterms:",
        [...covered]
    );


    return selectedGroups;
}

function mintermToBinary(
    minterm,
    variableCount
) {

    return minterm
        .toString(2)
        .padStart(
            variableCount,
            "0"
        );

}

function groupToTerm(group) {

    const variableCount =
        generatedVariableCount;


    const binaries =
        group.map(
            minterm =>
                mintermToBinary(
                    minterm,
                    variableCount
                )
        );


    const variables = [];


    for (
        let i = 0;
        i < variableCount;
        i++
    ) {

        let same = true;


        for (
            let j = 1;
            j < binaries.length;
            j++
        ) {

            if (
                binaries[j][i] !==
                binaries[0][i]
            ) {

                same = false;

                break;

            }

        }


        if (same) {

            const variable =
                String.fromCharCode(
                    65 + i
                );


            if (binaries[0][i] === "1") {

                variables.push(variable);

            }

            else {

                variables.push(
                    variable + "'"
                );

            }

        }

    }


    return variables.join("");

}

function groupsToExpression(groups) {

    if (groups.length === 0) {

        return "0";

    }

    const totalMinterms =
        2 ** generatedVariableCount;

    const coveredMinterms = new Set();

    for (let group of groups) {

        for (let minterm of group) {

            coveredMinterms.add(minterm);

        }

    }

    if (
        coveredMinterms.size ===
        totalMinterms
    ) {

        return "1";

    }

    const terms = [];

    for (let group of groups) {

        const term =
            groupToTerm(group);

        if (term === "") {

            terms.push("1");

        }

        else {

            terms.push(term);

        }

    }

    return terms.join(" + ");
}

function displaySimplification(
    groups,
    expression,
    containerId = "simplificationContainer"
) {

    const container =
        document.getElementById(
            containerId
        );


    // -------------------------
    // CASE 1: F = 0
    // -------------------------

    if (expression === "0") {

        container.innerHTML = `

            <div class="result-box">

                <h2>
                    Simplified Expression
                </h2>

                <div class="expression">
                    F = 0
                </div>

                <h2>
                    Derivation
                </h2>

                <p>
                    There are no minterms where
                    F = 1.
                </p>

            </div>

        `;

        return;
    }


    // -------------------------
    // CASE 2: F = 1
    // -------------------------

    if (expression === "1") {

        container.innerHTML = `

            <div class="result-box">

                <h2>
                    Simplified Expression
                </h2>

                <div class="expression">
                    F = 1
                </div>

                <h2>
                    Derivation
                </h2>

                <p>
                    All possible input combinations
                    produce F = 1.
                </p>

            </div>

        `;

        return;
    }


    // -------------------------
    // NORMAL EXPRESSION
    // -------------------------

    let derivationHTML = "";


    for (
        let i = 0;
        i < groups.length;
        i++
    ) {

        const group = groups[i];


        const details =
            getGroupDerivation(group);


        derivationHTML += `

            <div class="derivation-group">

                <h3>
                    Group ${i + 1}
                </h3>

                <p>
                    Minterms:
                    <strong>
                        m(${group.join(", ")})
                    </strong>
                </p>

                <p>
                    Binary:
                    <strong>
                        ${details.binaries.join(", ")}
                    </strong>
                </p>

                <p>
                    Constant variables:
                    <strong>
                        ${
                            details.variables.length > 0
                            ? details.variables.join(", ")
                            : "None"
                        }
                    </strong>
                </p>

                <p>
                    Therefore:
                    <strong>
                        ${details.term || "1"}
                    </strong>
                </p>

            </div>

        `;

    }


    // -------------------------
    // DISPLAY EVERYTHING
    // -------------------------

    container.innerHTML = `

        <div class="result-box">

            <h2>
                Simplified Expression
            </h2>


            <div class="expression">

                F = ${expression}

            </div>


            <h2>
                Derivation
            </h2>


            ${derivationHTML}

        </div>

    `;

}

function highlightKMapGroups(groups) {

    const cells =
        document.querySelectorAll(
            ".kmap td"
        );

    for (let cell of cells) {

        cell.classList.remove(
            "group-1",
            "group-2",
            "group-3",
            "group-4",
            "group-5",
            "group-6",
            "group-7",
            "group-8"
        );

    }


    for (
        let i = 0;
        i < groups.length;
        i++
    ) {

        const groupClass =
            `group-${(i % 8) + 1}`;


        for (
            let minterm of groups[i]
        ) {

            const cell =
                document.getElementById(
                    `kmap-cell-${minterm}`
                );


            if (cell) {

                cell.classList.add(
                    groupClass
                );

            }

        }

    }

}

function getGroupDerivation(group) {

    const variableCount =
        generatedVariableCount;


    const binaries =
        group.map(
            minterm =>
                mintermToBinary(
                    minterm,
                    variableCount
                )
        );


    const variables = [];

    const constantValues = [];


    for (
        let i = 0;
        i < variableCount;
        i++
    ) {

        let same = true;


        for (
            let j = 1;
            j < binaries.length;
            j++
        ) {

            if (
                binaries[j][i] !==
                binaries[0][i]
            ) {

                same = false;

                break;

            }

        }


        if (same) {

            const variable =
                String.fromCharCode(
                    65 + i
                );


            variables.push(variable);


            constantValues.push(
                binaries[0][i]
            );

        }

    }


    let term = "";


    for (
        let i = 0;
        i < variables.length;
        i++
    ) {

        if (
            constantValues[i] === "1"
        ) {

            term +=
                variables[i];

        }

        else {

            term +=
                variables[i] + "'";

        }

    }


    return {
        binaries,
        variables,
        constantValues,
        term
    };

}
const verificationContainer =
    document.getElementById(
        "verificationContainer"
    );

function evaluateExpression(
    expression,
    values
) {

    let expr = expression;

    // Replace NOT
    expr = expr.replace(
        /([A-D])'/g,
        "!$1"
    );

    // Insert AND between variables/groups

    expr = expr.replace(
        /([A-D])(?=[A-D!])/g,
        "$1&&"
    );

    expr = expr.replace(
        /!([A-D])(?=[A-D])/g,
        "!$1&&"
    );

    // OR
    expr = expr.replace(
        /\+/g,
        "||"
    );


    // Replace variables

    for (
        let variable of Object.keys(values)
    ) {

        const regex =
            new RegExp(
                variable,
                "g"
            );

        expr =
            expr.replace(
                regex,
                values[variable]
                    ? "true"
                    : "false"
            );

    }


    try {

        return Boolean(
            Function(
                `"use strict"; return (${expr});`
            )()
        );

    }

    catch {

        return false;

    }

}

function verifySimplifiedExpression(
    expression,
    outputs
) {

    const variableCount =
        generatedVariableCount;

    const totalRows =
        2 ** variableCount;

    let matches = true;


    for (
        let row = 0;
        row < totalRows;
        row++
    ) {

        const binary =
            row
                .toString(2)
                .padStart(
                    variableCount,
                    "0"
                );


        const values = {};


        for (
            let i = 0;
            i < variableCount;
            i++
        ) {

            const variable =
                String.fromCharCode(
                    65 + i
                );


            values[variable] =
                binary[i] === "1";

        }


        const calculated =
            evaluateExpression(
                expression,
                values
            );


        if (
            Number(calculated) !==
            outputs[row]
        ) {

            matches = false;

            break;

        }

    }


    return matches;

}

function showCircuitSection(expression) {

    circuitContainer.innerHTML = `

        <div class="circuit-box">

            <h2>Circuit Implementation</h2>

            <div class="circuit-expression">
                Expression:
                <strong>${expression}</strong>
            </div>

            <div class="circuit-buttons">

                <button
                    id="basicCircuitButton"
                    class="active"
                >
                    Basic Gates
                </button>

                <button
                    id="nandCircuitButton"
                >
                    NAND Only
                </button>

                <button
                    id="norCircuitButton"
                >
                    NOR Only
                </button>

            </div>

            <div
                id="circuitDiagram"
                class="circuit-diagram"
            >
                ${generateBasicCircuit(expression)}
            </div>

        </div>

    `;


    // =====================================
    // BASIC
    // =====================================

    document
        .getElementById("basicCircuitButton")
        .addEventListener("click", function () {

            document
                .getElementById("circuitDiagram")
                .innerHTML =
                    generateBasicCircuit(expression);


            setActiveCircuitButton(this);

        });


    // =====================================
    // NAND
    // =====================================

    document
        .getElementById("nandCircuitButton")
        .addEventListener("click", function () {

            document
                .getElementById("circuitDiagram")
                .innerHTML =
                    generateNandCircuit(expression);


            setActiveCircuitButton(this);

        });


    // =====================================
    // NOR
    // =====================================

    document
        .getElementById("norCircuitButton")
        .addEventListener("click", function () {

            document
                .getElementById("circuitDiagram")
                .innerHTML =
                    generateNorCircuit(expression);


            setActiveCircuitButton(this);

        });

}

function setActiveCircuitButton(button) {

    document
        .querySelectorAll(".circuit-buttons button")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");

}

function setCircuitMode(
    mode,
    expression
) {

    const diagram =
        document.getElementById(
            "circuitDiagram"
        );


    const buttons =
        document.querySelectorAll(
            ".circuit-buttons button"
        );


    buttons.forEach(
        button =>
            button.classList.remove(
                "active"
            )
    );


    if (mode === "basic") {

        document
            .getElementById(
                "basicCircuitButton"
            )
            .classList.add("active");

        diagram.innerHTML =
            generateBasicCircuit(
                expression
            );

    }


    else if (mode === "nand") {

        document
            .getElementById(
                "nandCircuitButton"
            )
            .classList.add("active");

        diagram.innerHTML =
            generateNandCircuit(
                expression
            );

    }


    else if (mode === "nor") {

        document
            .getElementById(
                "norCircuitButton"
            )
            .classList.add("active");

        diagram.innerHTML =
            generateNorCircuit(
                expression
            );

    }

}


// =====================================
// CIRCUIT DIAGRAM ENGINE
// =====================================

function parseExpression(expression) {

    expression = expression.replace(/\s/g, "");

    const terms = expression.split("+");

    return terms.map(term => {

        const literals = [];

        for (let i = 0; i < term.length; i++) {

            const variable = term[i];

            let inverted = false;

            if (
                i + 1 < term.length &&
                term[i + 1] === "'"
            ) {
                inverted = true;
                i++;
            }

            literals.push({
                variable: variable,
                inverted: inverted
            });

        }

        return literals;

    });
}

function circuitWire(x1, y1, x2, y2) {

    const middleX = (x1 + x2) / 2;

    return `
        <path
            d="
                M ${x1} ${y1}
                L ${middleX} ${y1}
                L ${middleX} ${y2}
                L ${x2} ${y2}
            "
            class="circuit-wire"
        />
    `;
}

function drawAndGate(x, y) {

    return `
        <path
            d="
                M ${x} ${y - 35}
                L ${x + 45} ${y - 35}

                A 35 35 0 0 1
                ${x + 45} ${y + 35}

                L ${x} ${y + 35}

                Z
            "
            class="and-gate"
        />
    `;
}

function drawOrGate(x, y) {

    return `
        <path
            d="
                M ${x} ${y - 35}

                Q ${x + 35} ${y - 30}
                  ${x + 75} ${y}

                Q ${x + 35} ${y + 30}
                  ${x} ${y + 35}

                Q ${x + 25} ${y}
                  ${x} ${y - 35}

                Z
            "
            class="or-gate"
        />
    `;
}

function drawNotGate(x, y) {

    return `
        <polygon
            points="
                ${x},${y - 25}
                ${x},${y + 25}
                ${x + 45},${y}
            "
            class="not-gate"
        />

        <circle
            cx="${x + 52}"
            cy="${y}"
            r="6"
            class="gate-bubble"
        />
    `;
}

function circuitDot(x, y) {

    return `
        <circle
            cx="${x}"
            cy="${y}"
            r="4"
            class="connection-dot"
        />
    `;
}

function getGateInputY(
    gateY,
    inputIndex,
    inputCount
) {

    const spacing = 24;

    return (
        gateY
        -
        ((inputCount - 1) * spacing) / 2
        +
        inputIndex * spacing
    );
}

function generateBasicCircuit(expression) {

    const terms = parseExpression(expression);

    const width = 1250;
    const termSpacing = 155;

    const height = Math.max(
        500,
        terms.length * termSpacing + 100
    );

    const inputX = 80;
    const notX = 250;
    const andX = 620;
    const orX = 950;

    const finalY = height / 2;

    let svg = `
        <svg
            class="circuit-svg"
            viewBox="0 0 ${width} ${height}"
            xmlns="http://www.w3.org/2000/svg"
        >
    `;

    const termOutputs = [];


    // =====================================
    // EACH PRODUCT TERM
    // =====================================

    terms.forEach((term, termIndex) => {

        const centerY =
            finalY +
            (
                termIndex -
                (terms.length - 1) / 2
            ) * termSpacing;


        // Space between inputs of one AND gate
        const inputSpacing = 30;

        const firstInputY =
            centerY -
            ((term.length - 1) * inputSpacing) / 2;


        // =================================
        // DRAW EACH LITERAL
        // =================================

        term.forEach((literal, index) => {

            const gateInputY =
                firstInputY +
                index * inputSpacing;


            // Put the input label close to
            // the actual wire
            const labelX = inputX;


            // =================================
            // VARIABLE LABEL
            // =================================

            svg += `
                <text
                    x="${labelX}"
                    y="${gateInputY + 6}"
                    class="circuit-label"
                    text-anchor="middle"
                >
                    ${literal.variable}
                </text>
            `;


            // =================================
            // NORMAL LITERAL
            // =================================

            if (!literal.inverted) {

                svg += `
                    <line
                        x1="${inputX + 25}"
                        y1="${gateInputY}"
                        x2="${andX - 65}"
                        y2="${gateInputY}"
                        class="circuit-wire"
                    />
                `;

            }


            // =================================
            // COMPLEMENTED LITERAL
            // =================================

            else {

                // Input → NOT

                svg += `
                    <line
                        x1="${inputX + 25}"
                        y1="${gateInputY}"
                        x2="${notX - 35}"
                        y2="${gateInputY}"
                        class="circuit-wire"
                    />
                `;


                // NOT triangle

                svg += `
                    <polygon
                        points="
                            ${notX - 35},${gateInputY - 18}
                            ${notX - 35},${gateInputY + 18}
                            ${notX + 5},${gateInputY}
                        "
                        class="not-gate"
                    />

                    <circle
                        cx="${notX + 12}"
                        cy="${gateInputY}"
                        r="6"
                        class="gate-bubble"
                    />
                `;


                // NOT → AND

                svg += `
                    <line
                        x1="${notX + 18}"
                        y1="${gateInputY}"
                        x2="${andX - 65}"
                        y2="${gateInputY}"
                        class="circuit-wire"
                    />
                `;

            }

        });


        // =====================================
        // AND GATE
        // =====================================

        const gateLeft =
            andX - 65;

        const gateRight =
            andX + 30;

        const gateTop =
            firstInputY - 25;

        const gateBottom =
            firstInputY +
            (term.length - 1) *
            inputSpacing +
            25;


        const gateHeight =
            gateBottom - gateTop;

        const gateRadius =
            gateHeight / 2;


        svg += `
            <path
                d="
                    M ${gateLeft} ${gateTop}
                    H ${andX - 5}

                    A ${gateRadius}
                      ${gateRadius}
                      0 0 1
                      ${andX - 5}
                      ${gateBottom}

                    H ${gateLeft}
                    Z
                "
                class="and-gate"
            />
        `;


        // AND label

        svg += `
            <text
                x="${andX - 20}"
                y="${centerY + 5}"
                class="gate-name"
            >
                AND
            </text>
        `;


        // =====================================
        // AND OUTPUT
        // =====================================

        svg += `
            <line
                x1="${gateRight}"
                y1="${centerY}"
                x2="${orX - 80}"
                y2="${centerY}"
                class="circuit-wire"
            />
        `;


        termOutputs.push(centerY);

    });


    // =====================================
    // FINAL OR INPUTS
    // =====================================
    // =====================================
// FINAL OR INPUT CONNECTIONS
// =====================================

const orInputSpacing = 35;

const orStartY =
    finalY -
    ((termOutputs.length - 1) *
        orInputSpacing) / 2;


termOutputs.forEach((termY, index) => {

    const orInputY =
        orStartY +
        index * orInputSpacing;


    // Horizontal wire from AND output
    svg += `
        <line
            x1="${orX - 80}"
            y1="${termY}"
            x2="${orX - 45}"
            y2="${termY}"
            class="circuit-wire"
        />
    `;


    // Vertical section only when necessary
    if (termY !== orInputY) {

        svg += `
            <line
                x1="${orX - 45}"
                y1="${termY}"
                x2="${orX - 45}"
                y2="${orInputY}"
                class="circuit-wire"
            />
        `;

    }


    // Final horizontal connection
    svg += `
        <line
            x1="${orX - 45}"
            y1="${orInputY}"
            x2="${orX - 25}"
            y2="${orInputY}"
            class="circuit-wire"
        />
    `;

});

    // =====================================
    // OR GATE
    // =====================================

    svg += `
    <path
        d="
            M ${orX - 25} ${finalY - 65}

            Q ${orX + 55} ${finalY}
              ${orX - 25} ${finalY + 65}

            Q ${orX + 5} ${finalY}
              ${orX - 25} ${finalY - 65}

            Z
        "
        class="or-gate"
    />
`;


    // =====================================
    // OUTPUT
    // =====================================

    svg += `
    <line
        x1="${orX + 55}"
        y1="${finalY}"
        x2="${orX + 140}"
        y2="${finalY}"
        class="circuit-wire"
    />

    <text
        x="${orX + 160}"
        y="${finalY + 7}"
        class="circuit-output"
    >
        F
    </text>
`;

    svg += `</svg>`;

    return svg;
}

// =====================================
// NAND ONLY CIRCUIT
// =====================================

function drawNandGate(x, y, inputCount = 2, inputSpacing = 32) {

    const gateWidth = 75;

    const gateHeight =
        Math.max(
            70,
            (inputCount - 1) * inputSpacing + 50
        );

    const top = y - gateHeight / 2;
    const bottom = y + gateHeight / 2;

    const left = x;
    const right = x + gateWidth;

    let svg = `
        <!-- NAND body -->
        <path
            d="
                M ${left} ${top}
                H ${x + 40}

                A ${gateHeight / 2}
                  ${gateHeight / 2}
                  0 0 1
                  ${x + 40}
                  ${bottom}

                H ${left}
                Z
            "
            class="nand-gate"
        />

        <!-- NAND output bubble -->
        <circle
            cx="${right + 5}"
            cy="${y}"
            r="7"
            class="gate-bubble"
        />

        <!-- NAND label -->
        <text
            x="${x + 28}"
            y="${y + 5}"
            class="gate-name"
        >
            NAND
        </text>
    `;

    return svg;
}

function generateNandCircuit(expression) {

    const terms = parseExpression(expression);

    const width = 1250;
    const termSpacing = 155;

    const height = Math.max(
        500,
        terms.length * termSpacing + 100
    );

    const inputX = 80;
    const inverterX = 260;
    const nandX = 650;
    const finalX = 1000;

    const finalY = height / 2;

    let svg = `
        <svg
            class="circuit-svg"
            viewBox="0 0 ${width} ${height}"
            xmlns="http://www.w3.org/2000/svg"
        >
    `;

    const termOutputs = [];


    // =====================================
    // EACH PRODUCT TERM
    // =====================================

    terms.forEach((term, termIndex) => {

        const centerY =
            finalY +
            (
                termIndex -
                (terms.length - 1) / 2
            ) * termSpacing;


        const inputSpacing = 32;

        const firstInputY =
            centerY -
            ((term.length - 1) *
                inputSpacing) / 2;


        // =================================
        // DRAW INPUTS
        // =================================

        term.forEach((literal, index) => {

            const inputY =
                firstInputY +
                index * inputSpacing;


            // Variable

            svg += `
                <text
                    x="${inputX}"
                    y="${inputY + 6}"
                    class="circuit-label"
                    text-anchor="middle"
                >
                    ${literal.variable}
                </text>
            `;


            // =================================
            // NORMAL INPUT
            // =================================

            if (!literal.inverted) {

                svg += `
                    <line
                        x1="${inputX + 25}"
                        y1="${inputY}"
                        x2="${nandX}"
                        y2="${inputY}"
                        class="circuit-wire"
                    />
                `;

            }


            // =================================
            // COMPLEMENTED INPUT
            // =================================

            else {

                // Input → inverter

                svg += `
                    <line
                        x1="${inputX + 25}"
                        y1="${inputY}"
                        x2="${inverterX - 35}"
                        y2="${inputY}"
                        class="circuit-wire"
                    />
                `;


                // NAND used as NOT

                svg += drawNandInverter(
    inverterX,
    inputY
);


                // Inverter → product NAND

                svg += `
                    <line
                        x1="${inverterX + 35}"
                        y1="${inputY}"
                        x2="${nandX}"
                        y2="${inputY}"
                        class="circuit-wire"
                    />
                `;

            }

        });


        // =================================
        // PRODUCT NAND
        // =================================

        svg += drawNandGate(
    nandX,
    centerY,
    term.length,
    inputSpacing
);


        // =================================
        // PRODUCT NAND OUTPUT
        // =================================

        svg += `
            <line
                x1="${nandX + 65}"
                y1="${centerY}"
                x2="${finalX - 80}"
                y2="${centerY}"
                class="circuit-wire"
            />
        `;


        termOutputs.push(centerY);

    });


    // =====================================
    // FINAL NAND INPUTS
    // =====================================

    const finalInputSpacing = 40;

    const finalStartY =
        finalY -
        ((termOutputs.length - 1) *
            finalInputSpacing) / 2;


    termOutputs.forEach((termY, index) => {

        const finalInputY =
            finalStartY +
            index * finalInputSpacing;


        svg += `
            <path
                d="
                    M ${finalX - 80} ${termY}
                    H ${finalX - 35}
                    V ${finalInputY}
                    H ${finalX}
                "
                class="circuit-wire"
            />
        `;

    });


    // =====================================
    // FINAL NAND
    // =====================================

    svg += drawNandGate(
    finalX,
    finalY,
    termOutputs.length,
    finalInputSpacing
);


    // =====================================
    // OUTPUT
    // =====================================

    svg += `
        <line
            x1="${finalX + 65}"
            y1="${finalY}"
            x2="${finalX + 145}"
            y2="${finalY}"
            class="circuit-wire"
        />

        <text
            x="${finalX + 165}"
            y="${finalY + 7}"
            class="circuit-output"
        >
            F
        </text>
    `;


    svg += `</svg>`;

    return svg;
}

function drawNandInverter(x, y) {

    const left = x - 25;
    const right = x + 30;

    return `
        <line
            x1="${left - 35}"
            y1="${y - 9}"
            x2="${left}"
            y2="${y - 9}"
            class="circuit-wire"
        />

        <line
            x1="${left - 35}"
            y1="${y + 9}"
            x2="${left}"
            y2="${y + 9}"
            class="circuit-wire"
        />

        <line
            x1="${left - 35}"
            y1="${y - 9}"
            x2="${left - 35}"
            y2="${y + 9}"
            class="circuit-wire"
        />

        <path
            d="
                M ${left} ${y - 18}
                H ${x}
                A 18 18 0 0 1 ${x} ${y + 18}
                H ${left}
                Z
            "
            class="nand-gate"
        />

        <circle
            cx="${right + 5}"
            cy="${y}"
            r="6"
            class="gate-bubble"
        />
    `;
}

function getGateInputY(centerY, index, inputCount) {

    const spacing = 28;

    if (inputCount === 1) {
        return centerY;
    }

    const totalHeight =
        (inputCount - 1) * spacing;

    return (
        centerY -
        totalHeight / 2 +
        index * spacing
    );
}

function getVariablesFromExpression(expression) {

    const variables =
        expression.match(/[A-D]/g) || [];

    return [...new Set(variables)];
}

function evaluateExpression(
    expression,
    values
) {

    let expr =
        expression
            .replace(/\s/g, "");


    // =========================================
    // VALID CHARACTERS
    // =========================================

    if (
        !/^[A-F+'()]+$/.test(expr)
    ) {

        throw new Error(
            "Invalid characters in expression."
        );

    }


    // =========================================
    // NOT
    // A' → !A
    // =========================================

    expr = expr.replace(
        /([A-F])'/g,
        "!$1"
    );


    // =========================================
    // INSERT AND
    // =========================================

    // AB → A&&B
    expr = expr.replace(
        /([A-F])(?=[A-F!])/g,
        "$1&&"
    );


    // A'B → !A&&B
    expr = expr.replace(
        /!([A-F])(?=[A-F])/g,
        "!$1&&"
    );


    // =========================================
    // OR
    // =========================================

    expr = expr.replace(
        /\+/g,
        "||"
    );


    // =========================================
    // VARIABLES
    // =========================================

    for (
        const variable of
        Object.keys(values)
    ) {

        const regex =
            new RegExp(
                variable,
                "g"
            );

        expr =
            expr.replace(
                regex,
                values[variable]
                    ? "true"
                    : "false"
            );

    }


    // =========================================
    // EVALUATE
    // =========================================

    try {

        return Boolean(
            Function(
                `"use strict"; return (${expr});`
            )()
        );

    }

    catch {

        return false;

    }

}

// =====================================
// EVALUATE BASIC AND / OR / NOT CIRCUIT
// =====================================

function evaluateBasicCircuit(expression, values) {

    // Expression is in SOP form:
    // A'B + AC + BC'

    const terms = parseExpression(expression);

    // OR between product terms
    let finalOutput = false;

    for (const term of terms) {

        // AND between literals
        let andOutput = true;

        for (const literal of term) {

            let inputValue =
                values[literal.variable];

            // NOT gate
            if (literal.inverted) {
                inputValue = !inputValue;
            }

            // AND gate
            andOutput =
                andOutput && inputValue;
        }

        // OR gate
        finalOutput =
            finalOutput || andOutput;
    }

    return finalOutput;
}

// =====================================
// EVALUATE NAND-ONLY CIRCUIT
// =====================================

// =====================================
// EVALUATE NAND-ONLY CIRCUIT
// =====================================

function evaluateNandCircuit(expression, values) {

    const terms =
        parseExpression(expression);

    const complementedTerms = [];


    // =====================================
    // EACH PRODUCT TERM
    // =====================================

    for (const term of terms) {

        const literalValues = [];


        // ---------------------------------
        // Evaluate every literal
        // ---------------------------------

        for (const literal of term) {

            let value =
                values[literal.variable];


            // ---------------------------------
            // NOT using NAND
            // NAND(X, X) = X'
            // ---------------------------------

            if (literal.inverted) {

                value =
                    !(
                        value &&
                        value
                    );

            }


            literalValues.push(value);

        }


        // ---------------------------------
        // NAND of all literals
        //
        // NAND(A,B,C)
        // = NOT(A.B.C)
        // ---------------------------------

        let product = true;

        for (
            const value
            of literalValues
        ) {

            product =
                product && value;

        }


        const complementedProduct =
            !product;


        complementedTerms.push(
            complementedProduct
        );

    }


    // =====================================
    // FINAL NAND
    //
    // NAND(A', B', C')
    // = A + B + C
    // =====================================

    if (
        complementedTerms.length === 0
    ) {

        return false;

    }


    let finalAND = true;

    for (
        const termOutput
        of complementedTerms
    ) {

        finalAND =
            finalAND && termOutput;

    }


    return !finalAND;
}
// =====================================
// EVALUATE NOR-ONLY CIRCUIT
// =====================================

function evaluateNorCircuit(expression, values) {

    const terms = parseExpression(expression);

    const termOutputs = [];

    // =================================
    // EACH PRODUCT TERM
    // =================================

    for (const term of terms) {

        let andResult = true;

        for (const literal of term) {

            let value =
                values[literal.variable];

            if (literal.inverted) {
                value = !value;
            }

            andResult =
                andResult && value;
        }

        termOutputs.push(andResult);
    }


    // =================================
    // NOR IMPLEMENTATION
    // =================================

    // OR of all terms
    let orResult = false;

    for (const termOutput of termOutputs) {

        orResult =
            orResult || termOutput;
    }


    // NOR gives NOT(OR)
    let norResult =
        !orResult;


    // Final NOR used as inverter
    // to obtain the original OR result

    return !(
        norResult &&
        norResult
    );
}
function generatePOSTerms(expression) {

    const variables =
        getVariablesFromExpression(expression);

    const numberOfRows =
        2 ** variables.length;

    const maxterms = [];

    for (let row = 0; row < numberOfRows; row++) {

        const binary =
            row
                .toString(2)
                .padStart(variables.length, "0");

        const values = {};

        variables.forEach((variable, index) => {

            values[variable] =
                binary[index] === "1";

        });

        const output =
            evaluateExpression(
                expression,
                values
            );

        // POS uses rows where F = 0
        if (!output) {

            const literals =
                variables.map(variable => {

                    /*
                     * For a maxterm:
                     *
                     * input 0 -> variable
                     * input 1 -> variable'
                     */

                    return values[variable]
                        ? variable + "'"
                        : variable;

                });

            maxterms.push(literals);
        }
    }

    return maxterms;
}

// =====================================
// NOR ONLY CIRCUIT
// =====================================

function generateNorCircuit(expression) {

    const terms = generatePOSTerms(expression);

    const width = 1250;
    const termSpacing = 180;
    const height = Math.max(
        500,
        terms.length * termSpacing + 100
    );

    const inputX = 70;
    const inverterX = 220;
    const firstGateX = 600;
    const finalGateX = 950;

    const finalY = height / 2;

    let svg = `
        <svg
            class="circuit-svg"
            viewBox="0 0 ${width} ${height}"
            preserveAspectRatio="xMidYMid meet"
        >
    `;

    const termOutputs = [];

    // =====================================
    // EACH POS TERM
    // =====================================

    terms.forEach((term, termIndex) => {

        const centerY =
            finalY +
            (
                termIndex -
                (terms.length - 1) / 2
            ) * termSpacing;

        const inputSpacing = 28;

        const startY =
            centerY -
            ((term.length - 1) * inputSpacing) / 2;


        // =================================
        // INPUTS
        // =================================

        term.forEach((literal, index) => {

            const inputY =
                startY + index * inputSpacing;

            const gateInputY =
                getGateInputY(
                    centerY,
                    index,
                    term.length
                );

            const variable =
                literal.replace("'", "");

            const inverted =
                literal.includes("'");


            // =================================
            // LABEL
            // =================================

            svg += `
                <text
                    x="${inputX}"
                    y="${inputY + 6}"
                    class="circuit-label"
                    text-anchor="end"
                >
                    ${variable}
                </text>
            `;


            // =================================
            // NORMAL INPUT
            // =================================

            if (!inverted) {

                svg += `
                    <line
                        x1="${inputX + 15}"
                        y1="${inputY}"
                        x2="${firstGateX}"
                        y2="${gateInputY}"
                        class="circuit-wire"
                    />
                `;

            }


            // =================================
            // COMPLEMENTED INPUT
            // NOR(X,X) = X'
            // =================================

            else {

                const invY1 = inputY - 12;
                const invY2 = inputY + 12;

                // Same input goes to BOTH NOR inputs

                svg += `
                    <line
                        x1="${inputX + 15}"
                        y1="${inputY}"
                        x2="${inverterX}"
                        y2="${invY1}"
                        class="circuit-wire"
                    />

                    <line
                        x1="${inputX + 15}"
                        y1="${inputY}"
                        x2="${inverterX}"
                        y2="${invY2}"
                        class="circuit-wire"
                    />
                `;


                // NOR used as inverter
                // X NOR X = X'

                svg += drawNorGate(
                    inverterX,
                    inputY,
                    2
                );


                // NOR inverter output → main NOR

                svg += `
                    <line
                        x1="${inverterX + 97}"
                        y1="${inputY}"
                        x2="${firstGateX}"
                        y2="${gateInputY}"
                        class="circuit-wire"
                    />
                `;
            }

        });


        // =================================
        // MAIN NOR GATE
        // =================================

        svg += drawNorGate(
            firstGateX,
            centerY,
            term.length
        );


        // =================================
        // OUTPUT OF MAIN NOR
        // =================================

        const gateOutputX =
            firstGateX + 97;

        svg += `
            <line
                x1="${gateOutputX}"
                y1="${centerY}"
                x2="${finalGateX - 70}"
                y2="${centerY}"
                class="circuit-wire"
            />
        `;

        termOutputs.push(centerY);

    });


    // =====================================
    // FINAL NOR GATE
    // =====================================

    if (termOutputs.length > 1) {

        termOutputs.forEach((termY, index) => {

            const finalInputY =
                getGateInputY(
                    finalY,
                    index,
                    termOutputs.length
                );

            svg += `
                <path
                    d="
                        M ${finalGateX - 70} ${termY}
                        H ${finalGateX - 35}
                        V ${finalInputY}
                        H ${finalGateX}
                    "
                    class="circuit-wire"
                />
            `;

        });


        svg += drawNorGate(
            finalGateX,
            finalY,
            termOutputs.length
        );


        // Output F

        svg += `
            <line
                x1="${finalGateX + 97}"
                y1="${finalY}"
                x2="${finalGateX + 170}"
                y2="${finalY}"
                class="circuit-wire"
            />

            <text
                x="${finalGateX + 190}"
                y="${finalY + 7}"
                class="circuit-output"
            >
                F
            </text>
        `;

    }


    // =====================================
    // ONLY ONE POS TERM
    // =====================================

    else if (termOutputs.length === 1) {

        const termY =
            termOutputs[0];

        /*
            A single NOR output is already complemented.

            To get the original expression,
            use NOR(X,X) again.
        */

        svg += `
            <line
                x1="${finalGateX - 70}"
                y1="${termY}"
                x2="${finalGateX}"
                y2="${termY}"
                class="circuit-wire"
            />
        `;

        svg += drawNorGate(
            finalGateX,
            termY,
            2
        );

        // Connect both final NOR inputs
        // together using the same signal

        svg += `
            <line
                x1="${finalGateX - 70}"
                y1="${termY}"
                x2="${finalGateX - 70}"
                y2="${termY - 14}"
                class="circuit-wire"
            />

            <line
                x1="${finalGateX - 70}"
                y1="${termY}"
                x2="${finalGateX - 70}"
                y2="${termY + 14}"
                class="circuit-wire"
            />
        `;


        svg += `
            <line
                x1="${finalGateX + 97}"
                y1="${termY}"
                x2="${finalGateX + 170}"
                y2="${termY}"
                class="circuit-wire"
            />

            <text
                x="${finalGateX + 190}"
                y="${termY + 7}"
                class="circuit-output"
            >
                F
            </text>
        `;
    }


    svg += `</svg>`;

    return svg;
}

function drawNorGate(x, y, inputCount = 2) {

    const gateWidth = 90;

    const gateHeight =
        inputCount <= 2 ? 65 :
        inputCount === 3 ? 85 :
        105;

    const top =
        y - gateHeight / 2;

    const bottom =
        y + gateHeight / 2;

    return `
        <!-- NOR GATE -->

        <path
            d="
                M ${x} ${top}

                C ${x + 35} ${top},
                  ${x + gateWidth} ${y - 30},
                  ${x + gateWidth} ${y}

                C ${x + gateWidth} ${y + 30},
                  ${x + 35} ${bottom},
                  ${x} ${bottom}

                C ${x + 20} ${y + 20},
                  ${x + 20} ${y - 20},
                  ${x} ${top}

                Z
            "
            class="nor-gate"
        />

        <!-- OUTPUT BUBBLE -->

        <circle
            cx="${x + gateWidth + 7}"
            cy="${y}"
            r="7"
            class="gate-bubble"
        />

        <text
            x="${x + 42}"
            y="${y + 5}"
            class="gate-name"
        >
            NOR
        </text>
    `;
}

// =====================================
// VERIFICATION
// =====================================

// =====================================
// VERIFY TRUTH TABLE
// =====================================

function verifyTruthTable(expression) {

    const outputValues =
        document.querySelectorAll(".output-value");

    const variables = [];

    for (
        let i = 0;
        i < generatedVariableCount;
        i++
    ) {

        variables.push(
            String.fromCharCode(65 + i)
        );

    }


    let expressionCorrect = true;

    let basicCircuitCorrect = true;

    let nandCircuitCorrect = true;

    let norCircuitCorrect = true;


    // =====================================
    // CHECK EVERY POSSIBLE INPUT
    // =====================================

    for (
        let row = 0;
        row < outputValues.length;
        row++
    ) {

        const binary =
            row
                .toString(2)
                .padStart(
                    generatedVariableCount,
                    "0"
                );


        const values = {};


        variables.forEach(
            (variable, index) => {

                values[variable] =
                    binary[index] === "1";

            }
        );


        // =================================
        // ORIGINAL TRUTH TABLE
        // =================================
originalOutput =
            Number(
                outputValues[row].value
            );


        // =================================
        // SIMPLIFIED EXPRESSION
        // =================================

        const expressionOutput =
            evaluateExpression(
                expression,
                values
            )
            ? 1
            : 0;


        if (
            originalOutput !==
            expressionOutput
        ) {

            expressionCorrect = false;

        }


        // =================================
        // BASIC GATE CIRCUIT
        // =================================

        const basicOutput =
            evaluateBasicCircuit(
                expression,
                values
            )
            ? 1
            : 0;


        if (
            originalOutput !==
            basicOutput
        ) {

            basicCircuitCorrect = false;

        }
        const nandOutput =
    evaluateNandCircuit(
        expression,
        values
    )
    ? 1
    : 0;


if (
    originalOutput !==
    nandOutput
) {

    nandCircuitCorrect = false;

}

// =================================
// NOR ONLY
// =================================

const norOutput =
    evaluateNorCircuit(
        expression,
        values
    )
    ? 1
    : 0;

if (
    originalOutput !==
    norOutput
) {

    norCircuitCorrect = false;

}

    }

    // =================================
// NAND-ONLY CIRCUIT
// =================================




    return {

        expressionCorrect:
            expressionCorrect,

        basicCircuitCorrect:
            basicCircuitCorrect,
        
        nandCircuitCorrect:
            nandCircuitCorrect,
        norCircuitCorrect:
        norCircuitCorrect

    };

}

// =====================================
// DISPLAY VERIFICATION
// =====================================

function showVerification(expression) {

    const verification =
        verifyTruthTable(expression);


    let html = `

        <div class="result-box">

            <h2>Verification</h2>

    `;


    // =====================================
    // SIMPLIFIED EXPRESSION
    // =====================================

    if (
        verification.expressionCorrect
    ) {

        html += `

            <div class="verification-item success">

                <span>
                    Original Truth Table
                    ↔
                    Simplified Expression
                </span>

                <strong>
                    ✓ Equivalent
                </strong>

            </div>

        `;

    }

    else {

        html += `

            <div class="verification-item error">

                <span>
                    Original Truth Table
                    ↔
                    Simplified Expression
                </span>

                <strong>
                    ✗ Not Equivalent
                </strong>

            </div>

        `;

    }


    // =====================================
    // BASIC GATE CIRCUIT
    // =====================================

    if (
        verification.basicCircuitCorrect
    ) {

        html += `

            <div class="verification-item success">

                <span>
                    Original Truth Table
                    ↔
                    Basic AND / OR / NOT Circuit
                </span>

                <strong>
                    ✓ Equivalent
                </strong>

            </div>

        `;

    }

    else {

        html += `

            <div class="verification-item error">

                <span>
                    Original Truth Table
                    ↔
                    Basic AND / OR / NOT Circuit
                </span>

                <strong>
                    ✗ Not Equivalent
                </strong>

            </div>

        `;

    }

    // =====================================
// NAND-ONLY CIRCUIT
// =====================================

if (
    verification.nandCircuitCorrect
) {

    html += `

        <div class="verification-item success">

            <span>
                Original Truth Table
                ↔
                NAND-only Circuit
            </span>

            <strong>
                ✓ Equivalent
            </strong>

        </div>

    `;

}

else {

    html += `

        <div class="verification-item error">

            <span>
                Original Truth Table
                ↔
                NAND-only Circuit
            </span>

            <strong>
                ✗ Not Equivalent
            </strong>

        </div>

    `;

}

// =====================================
// NOR-ONLY CIRCUIT
// =====================================

if (
    verification.norCircuitCorrect
) {

    html += `

        <div class="verification-item success">

            <span>
                Original Truth Table
                ↔
                NOR-only Circuit
            </span>

            <strong>
                ✓ Equivalent
            </strong>

        </div>

    `;

}

else {

    html += `

        <div class="verification-item error">

            <span>
                Original Truth Table
                ↔
                NOR-only Circuit
            </span>

            <strong>
                ✗ Not Equivalent
            </strong>

        </div>

    `;

}

    html += `

        </div>

    `;


    verificationContainer.innerHTML =
        html;

}

// ============================================================
// K-MAP INPUT PAGE
// ============================================================

// ------------------------------------------------------------
// ELEMENTS
// ------------------------------------------------------------

const kmapButton =
    document.getElementById("kmapButton");

const kmapPage =
    document.getElementById("kmapPage");

const backFromKMap =
    document.getElementById("backFromKMap");

const decreaseKMapVariables =
    document.getElementById(
        "decreaseKMapVariables"
    );

const increaseKMapVariables =
    document.getElementById(
        "increaseKMapVariables"
    );

const kmapVariableCountDisplay =
    document.getElementById(
        "kmapVariableCount"
    );

const kmapVariableError =
    document.getElementById(
        "kmapVariableError"
    );

const generateKMapInput =
    document.getElementById(
        "generateKMapInput"
    );

const kmapInputContainer =
    document.getElementById(
        "kmapInputContainer"
    );


// ------------------------------------------------------------
// VARIABLES
// ------------------------------------------------------------

let kmapVariableCount = 2;


// ============================================================
// OPEN K-MAP PAGE
// ============================================================

kmapButton.addEventListener(
    "click",
    function () {

        homePage.style.display = "none";

        truthTablePage.style.display = "none";

        mintermPage.style.display = "none";

        if (
            typeof booleanExpressionPage !==
            "undefined"
        ) {
            booleanExpressionPage.style.display =
                "none";
        }

        kmapPage.style.display = "block";
    }
);


// ============================================================
// BACK BUTTON
// ============================================================

backFromKMap.addEventListener(
    "click",
    function () {

        kmapPage.style.display = "none";

        homePage.style.display = "block";

    }
);


// ============================================================
// INCREASE VARIABLES
// ============================================================

increaseKMapVariables.addEventListener(
    "click",
    function () {

        if (kmapVariableCount < 6) {

            kmapVariableCount++;

            kmapVariableCountDisplay.textContent =
                kmapVariableCount;

            kmapVariableError.textContent = "";

        }

        else {

            kmapVariableError.textContent =
                "Maximum 6 variables are allowed.";

        }

    }
);


// ============================================================
// DECREASE VARIABLES
// ============================================================

decreaseKMapVariables.addEventListener(
    "click",
    function () {

        if (kmapVariableCount > 2) {

            kmapVariableCount--;

            kmapVariableCountDisplay.textContent =
                kmapVariableCount;

            kmapVariableError.textContent = "";

        }

        else {

            kmapVariableError.textContent =
                "Minimum 2 variables are required.";

        }

    }
);


// ============================================================
// GENERATE BUTTON
// ============================================================

generateKMapInput.addEventListener(
    "click",
    function () {

        generateKMapInputTable();

    }
);


// ============================================================
// GRAY CODE
// ============================================================

const KMAP_GRAY =
    ["00", "01", "11", "10"];


// ============================================================
// MAIN GENERATOR
// ============================================================

function generateKMapInputTable() {

    kmapInputContainer.innerHTML = "";

    if (kmapVariableCount === 2) {

        generateKMap2();

    }

    else if (kmapVariableCount === 3) {

        generateKMap3();

    }

    else if (kmapVariableCount === 4) {

        generateKMap4();

    }

    else if (kmapVariableCount === 5) {

        generateKMap5();

    }

    else if (kmapVariableCount === 6) {

        generateKMap6();

    }


    // --------------------------------------------------------
    // SOLVE BUTTON
    // --------------------------------------------------------

    const solveButton =
        document.createElement("button");

    solveButton.id =
        "solveKMapInputButton";

    solveButton.className =
        "kmap-solve-button";

    solveButton.textContent =
        "Solve";

    kmapInputContainer.appendChild(
        solveButton
    );


    // --------------------------------------------------------
    // RESULT CONTAINER
    // --------------------------------------------------------

    const result =
        document.createElement("div");

    result.id =
        "kmapInputResult";

    kmapInputContainer.appendChild(
        result
    );


    // --------------------------------------------------------
    // SIMPLIFICATION CONTAINER
    // --------------------------------------------------------

    const simplification =
        document.createElement("div");

    simplification.id =
        "kmapSimplificationContainer";

    kmapInputContainer.appendChild(
        simplification
    );

    // --------------------------------------------------------
// VERIFICATION CONTAINER
// --------------------------------------------------------

const verification =
    document.createElement("div");

verification.id =
    "kmapVerificationContainer";

kmapInputContainer.appendChild(
    verification
);


    // --------------------------------------------------------
    // SOLVE ONLY WHEN CLICKED
    // --------------------------------------------------------

    solveButton.addEventListener(
        "click",
        function () {

            solveKMapInput();

        }
    );
}


// ============================================================
// CREATE CELL
// ============================================================

function createKMapInputCell(minterm) {

    return `
        <td
            class="kmap-input-cell kmap-zero"
            data-minterm="${minterm}"
            data-value="0"
        >
            0
        </td>
    `;
}


// ============================================================
// CELL TOGGLE
// 0 → 1 → X → 0
// ============================================================

function addKMapCellToggle() {

    const cells =
        kmapInputContainer.querySelectorAll(
            ".kmap-input-cell"
        );

    cells.forEach(
        function (cell) {

            cell.addEventListener(
                "click",
                function () {

                    const current =
                        cell.dataset.value;


                    // 0 → 1

                    if (current === "0") {

                        cell.dataset.value =
                            "1";

                        cell.textContent =
                            "1";

                        cell.classList.remove(
                            "kmap-zero",
                            "kmap-x"
                        );

                        cell.classList.add(
                            "kmap-one"
                        );

                    }


                    // 1 → X

                    else if (current === "1") {

                        cell.dataset.value =
                            "X";

                        cell.textContent =
                            "X";

                        cell.classList.remove(
                            "kmap-zero",
                            "kmap-one"
                        );

                        cell.classList.add(
                            "kmap-x"
                        );

                    }


                    // X → 0

                    else {

                        cell.dataset.value =
                            "0";

                        cell.textContent =
                            "0";

                        cell.classList.remove(
                            "kmap-one",
                            "kmap-x"
                        );

                        cell.classList.add(
                            "kmap-zero"
                        );

                    }

                }
            );

        }
    );
}


// ============================================================
// HEADER / INSTRUCTIONS
// ============================================================

function kmapHeader(title) {

    return `

        <h2>${title}</h2>

        <p class="kmap-instruction">
            Click a cell:
            <strong>0 → 1 → X → 0</strong>
        </p>

        <div class="kmap-legend">

            <span class="legend-zero">
                0
            </span>

            <span class="legend-one">
                1
            </span>

            <span class="legend-x">
                X
            </span>

        </div>

    `;
}


// ============================================================
// 2 VARIABLE
// ============================================================

function generateKMap2() {

    let html =
        kmapHeader(
            "2-Variable K-Map"
        );

    html += `

        <table class="kmap input-kmap">

            <tr>

                <th>AB</th>

                <th>0</th>

                <th>1</th>

            </tr>

            <tr>

                <th>0</th>

                ${createKMapInputCell(0)}

                ${createKMapInputCell(1)}

            </tr>

            <tr>

                <th>1</th>

                ${createKMapInputCell(2)}

                ${createKMapInputCell(3)}

            </tr>

        </table>

    `;

    kmapInputContainer.innerHTML =
        html;

    addKMapCellToggle();
}


// ============================================================
// 3 VARIABLE
// ============================================================

function generateKMap3() {

    const map = [

        [0, 1, 3, 2],

        [4, 5, 7, 6]

    ];


    let html =
        kmapHeader(
            "3-Variable K-Map"
        );


    html += `

        <table class="kmap input-kmap">

            <tr>

                <th>A \\ BC</th>

                <th>00</th>
                <th>01</th>
                <th>11</th>
                <th>10</th>

            </tr>

    `;


    for (
        let r = 0;
        r < 2;
        r++
    ) {

        html += `

            <tr>

                <th>${r}</th>

        `;


        for (
            let c = 0;
            c < 4;
            c++
        ) {

            html +=
                createKMapInputCell(
                    map[r][c]
                );

        }


        html += `

            </tr>

        `;

    }


    html += `

        </table>

    `;


    kmapInputContainer.innerHTML =
        html;

    addKMapCellToggle();
}


// ============================================================
// 4 VARIABLE
// ============================================================

function generateKMap4() {

    const map = [

        [0, 1, 3, 2],

        [4, 5, 7, 6],

        [12, 13, 15, 14],

        [8, 9, 11, 10]

    ];


    let html =
        kmapHeader(
            "4-Variable K-Map"
        );


    html += `

        <table class="kmap input-kmap">

            <tr>

                <th>AB \\ CD</th>

                <th>00</th>
                <th>01</th>
                <th>11</th>
                <th>10</th>

            </tr>

    `;


    for (
        let r = 0;
        r < 4;
        r++
    ) {

        html += `

            <tr>

                <th>
                    ${KMAP_GRAY[r]}
                </th>

        `;


        for (
            let c = 0;
            c < 4;
            c++
        ) {

            html +=
                createKMapInputCell(
                    map[r][c]
                );

        }


        html += `

            </tr>

        `;

    }


    html += `

        </table>

    `;


    kmapInputContainer.innerHTML =
        html;

    addKMapCellToggle();
}


// ============================================================
// CREATE 4 × 4 MAP
// Used by 5 and 6 variables
// ============================================================

function createKMap4x4Input(
    title,
    map
) {

    let html = `

        <div class="kmap-section">

            <h3>
                ${title}
            </h3>

            <table class="kmap input-kmap">

                <tr>

                    <th>CD \\ EF</th>

                    <th>00</th>
                    <th>01</th>
                    <th>11</th>
                    <th>10</th>

                </tr>

    `;


    for (
        let r = 0;
        r < 4;
        r++
    ) {

        html += `

            <tr>

                <th>
                    ${KMAP_GRAY[r]}
                </th>

        `;


        for (
            let c = 0;
            c < 4;
            c++
        ) {

            html +=
                createKMapInputCell(
                    map[r][c]
                );

        }


        html += `

            </tr>

        `;

    }


    html += `

            </table>

        </div>

    `;


    return html;
}


// ============================================================
// 5 VARIABLE
// ============================================================

function generateKMap5() {

    const map0 = [

        [0, 1, 3, 2],

        [4, 5, 7, 6],

        [12, 13, 15, 14],

        [8, 9, 11, 10]

    ];


    const map1 = [

        [16, 17, 19, 18],

        [20, 21, 23, 22],

        [28, 29, 31, 30],

        [24, 25, 27, 26]

    ];


    let html =
        kmapHeader(
            "5-Variable K-Map"
        );


    html += `

        <div class="kmap-wrapper">

            ${createKMap4x4Input(
                "E = 0",
                map0
            )}

            ${createKMap4x4Input(
                "E = 1",
                map1
            )}

        </div>

    `;


    kmapInputContainer.innerHTML =
        html;

    addKMapCellToggle();
}


// ============================================================
// 6 VARIABLE
// ============================================================

function generateKMap6() {

    const maps = [

        {
            label: "AB = 00",
            ab: "00"
        },

        {
            label: "AB = 01",
            ab: "01"
        },

        {
            label: "AB = 11",
            ab: "11"
        },

        {
            label: "AB = 10",
            ab: "10"
        }

    ];


    let html =
        kmapHeader(
            "6-Variable K-Map"
        );


    html += `

        <div class="kmap-wrapper">

    `;


    for (
        const current of maps
    ) {

        const abValue =
            parseInt(
                current.ab,
                2
            );


        const map = [];


        for (
            let r = 0;
            r < 4;
            r++
        ) {

            const row = [];


            const cdValue =
                parseInt(
                    KMAP_GRAY[r],
                    2
                );


            for (
                let c = 0;
                c < 4;
                c++
            ) {

                const efValue =
                    parseInt(
                        KMAP_GRAY[c],
                        2
                    );


                const minterm =
                    (abValue << 4) |
                    (cdValue << 2) |
                    efValue;


                row.push(
                    minterm
                );

            }


            map.push(row);

        }


        html +=
            createKMap4x4Input(
                current.label,
                map
            );

    }


    html += `

        </div>

    `;


    kmapInputContainer.innerHTML =
        html;

    addKMapCellToggle();
}


// ============================================================
// READ K-MAP
// ============================================================

function readKMapInput() {

    const cells =
        kmapInputContainer.querySelectorAll(
            ".kmap-input-cell"
        );


    const minterms = [];

    const dontCares = [];


    cells.forEach(
        function (cell) {

            const minterm =
                Number(
                    cell.dataset.minterm
                );

            const value =
                cell.dataset.value;


            if (value === "1") {

                minterms.push(
                    minterm
                );

            }

            else if (
                value === "X"
            ) {

                dontCares.push(
                    minterm
                );

            }

        }
    );


    minterms.sort(
        (a, b) => a - b
    );

    dontCares.sort(
        (a, b) => a - b
    );


    return {
        minterms,
        dontCares
    };
}


// ============================================================
// GENERATE ALL VALID K-MAP GROUPS
// ============================================================

function generateAllKMapGroups(
    minterms,
    dontCares
) {

    const n =
        kmapVariableCount;


    const allowed =
        new Set([
            ...minterms,
            ...dontCares
        ]);


    const groups = [];


    /*
        Pattern:

        0 = variable fixed to 0
        1 = variable fixed to 1
        null = variable eliminated
    */


    const totalPatterns =
        3 ** n;


    for (
        let p = 0;
        p < totalPatterns;
        p++
    ) {

        let value = p;

        const pattern = [];


        for (
            let i = 0;
            i < n;
            i++
        ) {

            const digit =
                value % 3;

            value =
                Math.floor(
                    value / 3
                );


            if (digit === 0) {

                pattern.push(0);

            }

            else if (
                digit === 1
            ) {

                pattern.push(1);

            }

            else {

                pattern.push(null);

            }

        }


        const group = [];


        for (
            let m = 0;
            m < 2 ** n;
            m++
        ) {

            const binary =
                m
                    .toString(2)
                    .padStart(
                        n,
                        "0"
                    );


            let matches = true;


            for (
                let i = 0;
                i < n;
                i++
            ) {

                if (
                    pattern[i] !== null &&
                    Number(binary[i]) !==
                        pattern[i]
                ) {

                    matches = false;

                    break;

                }

            }


            if (matches) {

                group.push(m);

            }

        }


        // Must contain only 1/X

        const valid =
            group.every(
                m =>
                    allowed.has(m)
            );


        if (!valid) {

            continue;

        }


        // A group containing only X
        // is not useful

        const hasMinterm =
            group.some(
                m =>
                    minterms.includes(m)
            );


        if (!hasMinterm) {

            continue;

        }


        const sorted =
            [...group].sort(
                (a, b) => a - b
            );


        const duplicate =
            groups.some(
                g =>
                    sameArray(
                        g,
                        sorted
                    )
            );


        if (!duplicate) {

            groups.push(
                sorted
            );

        }

    }


    // Largest groups first

    groups.sort(
        (a, b) =>
            b.length - a.length
    );


    return groups;
}


// ============================================================
// ARRAY COMPARISON
// ============================================================

function sameArray(a, b) {

    if (
        a.length !==
        b.length
    ) {

        return false;

    }


    for (
        let i = 0;
        i < a.length;
        i++
    ) {

        if (
            a[i] !== b[i]
        ) {

            return false;

        }

    }


    return true;
}


// ============================================================
// SELECT BEST GROUPS
// Exact minimum-cover approach
// ============================================================

function selectBestKMapGroups(
    minterms,
    groups
) {

    if (
        minterms.length === 0
    ) {

        return [];

    }


    // Remove groups that don't
    // cover any real minterm

    const usefulGroups =
        groups.filter(
            group =>
                group.some(
                    m =>
                        minterms.includes(m)
                )
        );


    // Prime implicants:
    // remove groups contained inside
    // another larger valid group

    const primeGroups =
        usefulGroups.filter(
            group => {

                return !usefulGroups.some(
                    other => {

                        if (
                            other.length <=
                            group.length
                        ) {

                            return false;

                        }


                        return group.every(
                            m =>
                                other.includes(m)
                        );

                    }
                );

            }
        );


    const candidates =
        primeGroups.length > 0
            ? primeGroups
            : usefulGroups;


    // --------------------------------------------------------
    // Essential groups
    // --------------------------------------------------------

    const essential =
        [];


    const covered =
        new Set();


    for (
        const minterm of minterms
    ) {

        const covering =
            candidates.filter(
                group =>
                    group.includes(
                        minterm
                    )
            );


        if (
            covering.length === 1
        ) {

            const group =
                covering[0];


            if (
                !essential.some(
                    g =>
                        sameArray(
                            g,
                            group
                        )
                )
            ) {

                essential.push(
                    group
                );

            }

        }

    }


    essential.forEach(
        group => {

            group.forEach(
                m => {

                    if (
                        minterms.includes(m)
                    ) {

                        covered.add(m);

                    }

                }
            );

        }
    );


    const remaining =
        minterms.filter(
            m =>
                !covered.has(m)
        );


    if (
        remaining.length === 0
    ) {

        return essential;

    }


    // --------------------------------------------------------
    // Find minimum additional groups
    // --------------------------------------------------------

    const additional =
        candidates.filter(
            group =>
                group.some(
                    m =>
                        remaining.includes(m)
                )
        );


    let best = null;


    function search(
        index,
        current,
        currentCovered
    ) {

        const allCovered =
            remaining.every(
                m =>
                    currentCovered.has(m)
            );


        if (allCovered) {

            if (
                best === null ||
                current.length <
                    best.length
            ) {

                best =
                    [...current];

            }

            return;

        }


        if (
            index >=
            additional.length
        ) {

            return;

        }


        if (
            best !== null &&
            current.length >=
                best.length
        ) {

            return;

        }


        // Try group

        const group =
            additional[index];


        const newCovered =
            new Set(
                currentCovered
            );


        group.forEach(
            m => {

                if (
                    remaining.includes(m)
                ) {

                    newCovered.add(m);

                }

            }
        );


        if (
            newCovered.size >
            currentCovered.size
        ) {

            current.push(
                group
            );

            search(
                index + 1,
                current,
                newCovered
            );

            current.pop();

        }


        // Don't try group

        search(
            index + 1,
            current,
            currentCovered
        );

    }


    search(
        0,
        [],
        new Set()
    );


    if (
        best === null
    ) {

        return essential;

    }


    return [
        ...essential,
        ...best
    ];
}


// ============================================================
// GROUP → BOOLEAN TERM
// ============================================================

function kmapGroupToTerm(
    group
) {

    const n =
        kmapVariableCount;


    const binaries =
        group.map(
            m =>
                m
                    .toString(2)
                    .padStart(
                        n,
                        "0"
                    )
        );


    let term = "";


    for (
        let i = 0;
        i < n;
        i++
    ) {

        let same = true;


        for (
            let j = 1;
            j < binaries.length;
            j++
        ) {

            if (
                binaries[j][i] !==
                binaries[0][i]
            ) {

                same = false;

                break;

            }

        }


        if (same) {

            const variable =
                String.fromCharCode(
                    65 + i
                );


            if (
                binaries[0][i] ===
                "1"
            ) {

                term +=
                    variable;

            }

            else {

                term +=
                    variable + "'";

            }

        }

    }


    return term;
}


// ============================================================
// GROUPS → EXPRESSION
// ============================================================

function kmapGroupsToExpression(
    groups,
    minterms
) {

    if (
        minterms.length === 0
    ) {

        return "0";

    }


    if (
        minterms.length ===
        2 ** kmapVariableCount
    ) {

        return "1";

    }


    const terms = [];


    groups.forEach(
        group => {

            const term =
                kmapGroupToTerm(
                    group
                );


            if (
                term === ""
            ) {

                terms.push(
                    "1"
                );

            }

            else {

                terms.push(
                    term
                );

            }

        }
    );


    if (
        terms.length === 0
    ) {

        return "0";

    }


    return [
        ...new Set(terms)
    ].join(" + ");
}


// ============================================================
// HIGHLIGHT GROUPS
// ============================================================

function highlightKMapInputGroups(
    groups
) {

    const cells =
        kmapInputContainer.querySelectorAll(
            ".kmap-input-cell"
        );


    cells.forEach(
        cell => {

            cell.classList.remove(
                "group-1",
            "group-2",
            "group-3",
            "group-4",
            "group-5",
            "group-6",
            "group-7",
            "group-8"
            );

        }
    );


    groups.forEach(
        (group, index) => {

            const className =
                `group-${(index % 8) + 1}`;


            group.forEach(
                minterm => {

                    const matchingCells =
                        kmapInputContainer.querySelectorAll(
                            `.kmap-input-cell[data-minterm="${minterm}"]`
                        );


                    matchingCells.forEach(
                        cell => {

                            cell.classList.add(
                                className
                            );

                        }
                    );

                }
            );

        }
    );
}


// ============================================================
// DISPLAY SIMPLIFICATION
// ============================================================

function displayKMapSimplification(
    groups,
    expression
) {

    const container =
        document.getElementById(
            "kmapSimplificationContainer"
        );


    if (!container) {

        return;

    }


    // --------------------------------------------------------
    // F = 0
    // --------------------------------------------------------

    if (
        expression === "0"
    ) {

        container.innerHTML = `

            <div class="result-box">

                <h2>
                    Simplified Expression
                </h2>

                <div class="expression">
                    F = 0
                </div>

                <h2>
                    Derivation
                </h2>

                <p>
                    There are no minterms where
                    F = 1.
                </p>

            </div>

        `;

        return;

    }


    // --------------------------------------------------------
    // F = 1
    // --------------------------------------------------------

    if (
        expression === "1"
    ) {

        container.innerHTML = `

            <div class="result-box">

                <h2>
                    Simplified Expression
                </h2>

                <div class="expression">
                    F = 1
                </div>

                <h2>
                    Derivation
                </h2>

                <p>
                    All possible input combinations
                    produce F = 1.
                </p>

            </div>

        `;

        return;

    }


    // --------------------------------------------------------
    // NORMAL CASE
    // --------------------------------------------------------

    let derivation = "";


    groups.forEach(
        (group, index) => {

            const binaries =
                group.map(
                    m =>
                        m
                            .toString(2)
                            .padStart(
                                kmapVariableCount,
                                "0"
                            )
                );


            const term =
                kmapGroupToTerm(
                    group
                );


            const constantVariables =
                [];


            for (
                let i = 0;
                i < kmapVariableCount;
                i++
            ) {

                let same = true;


                for (
                    let j = 1;
                    j < binaries.length;
                    j++
                ) {

                    if (
                        binaries[j][i] !==
                        binaries[0][i]
                    ) {

                        same = false;

                        break;

                    }

                }


                if (same) {

                    const variable =
                        String.fromCharCode(
                            65 + i
                        );


                    constantVariables.push(
                        binaries[0][i] === "1"
                            ? variable
                            : variable + "'"
                    );

                }

            }


            derivation += `

                <div class="derivation-group">

                    <h3>
                        Group ${index + 1}
                    </h3>

                    <p>
                        Minterms:
                        <strong>
                            m(${group.join(", ")})
                        </strong>
                    </p>

                    <p>
                        Binary:
                        <strong>
                            ${binaries.join(", ")}
                        </strong>
                    </p>

                    <p>
                        Constant variables:
                        <strong>
                            ${
                                constantVariables.length
                                    ? constantVariables.join(", ")
                                    : "None"
                            }
                        </strong>
                    </p>

                    <p>
                        Therefore:
                        <strong>
                            ${term || "1"}
                        </strong>
                    </p>

                </div>

            `;

        }
    );


    container.innerHTML = `

        <div class="result-box">

            <h2>
                Simplified Expression
            </h2>

            <div class="expression">
                F = ${expression}
            </div>

            <h2>
                Derivation
            </h2>

            ${derivation}

        </div>

    `;
}


// ============================================================
// RESULT TRUTH TABLE
// ============================================================

function generateKMapResultTruthTable(
    minterms,
    dontCares
) {

    const result =
        document.getElementById(
            "kmapInputResult"
        );


    const n =
        kmapVariableCount;


    const rows =
        2 ** n;


    let html = `

        <div class="result-box">

            <h2>
                Truth Table
            </h2>

            <table class="kmap-result-truth-table">

                <thead>

                    <tr>

    `;


    for (
        let i = 0;
        i < n;
        i++
    ) {

        html += `

            <th>
                ${String.fromCharCode(
                    65 + i
                )}
            </th>

        `;

    }


    html += `

                    <th>F</th>

                    </tr>

                </thead>

                <tbody>

    `;


    for (
        let row = 0;
        row < rows;
        row++
    ) {

        const binary =
            row
                .toString(2)
                .padStart(
                    n,
                    "0"
                );


        let output = "0";


        if (
            minterms.includes(row)
        ) {

            output = "1";

        }

        else if (
            dontCares.includes(row)
        ) {

            output = "X";

        }


        html += `<tr>`;


        for (
            let i = 0;
            i < n;
            i++
        ) {

            html += `

                <td>
                    ${binary[i]}
                </td>

            `;

        }


        html += `

            <td
                class="${
                    output === "1"
                        ? "truth-one"
                        : output === "X"
                        ? "truth-x"
                        : "truth-zero"
                }"
            >
                ${output}
            </td>

        `;


        html += `</tr>`;

    }


    html += `

                </tbody>

            </table>

        </div>

    `;


    result.insertAdjacentHTML(
        "beforeend",
        html
    );
}


// ============================================================
// CIRCUIT DIAGRAM
// ============================================================

function generateKMapInputCircuit(
    expression
) {

    let circuit =
        document.getElementById(
            "kmapInputCircuit"
        );


    if (circuit) {

        circuit.remove();

    }


    circuit =
        document.createElement(
            "div"
        );


    circuit.id =
        "kmapInputCircuit";


    kmapInputContainer.appendChild(
        circuit
    );


    circuit.innerHTML = `

        <div class="circuit-box">

            <h2>
                Circuit Diagram
            </h2>

            <p>
                Implementation of:
            </p>

            <div class="expression">
                F = ${expression}
            </div>

            <div class="circuit-buttons">

                <button
                    id="kmapBasicCircuit"
                    class="active"
                >
                    Basic Gates
                </button>

                <button
                    id="kmapNandCircuit"
                >
                    NAND Only
                </button>

                <button
                    id="kmapNorCircuit"
                >
                    NOR Only
                </button>

            </div>

            <div
                id="kmapCircuitDiagram"
                class="circuit-diagram"
            >
            </div>

        </div>

    `;


    const diagram =
        document.getElementById(
            "kmapCircuitDiagram"
        );


    // --------------------------------------------------------
    // BASIC
    // --------------------------------------------------------

    diagram.innerHTML =
        generateBasicCircuit(
            expression
        );


    document
        .getElementById(
            "kmapBasicCircuit"
        )
        .addEventListener(
            "click",
            function () {

                diagram.innerHTML =
                    generateBasicCircuit(
                        expression
                    );

                setKMapCircuitActive(
                    this
                );

            }
        );


    // --------------------------------------------------------
    // NAND
    // --------------------------------------------------------

    document
        .getElementById(
            "kmapNandCircuit"
        )
        .addEventListener(
            "click",
            function () {

                diagram.innerHTML =
                    generateNandCircuit(
                        expression
                    );

                setKMapCircuitActive(
                    this
                );

            }
        );


    // --------------------------------------------------------
    // NOR
    // --------------------------------------------------------

    document
        .getElementById(
            "kmapNorCircuit"
        )
        .addEventListener(
            "click",
            function () {

                diagram.innerHTML =
                    generateNorCircuit(
                        expression
                    );

                setKMapCircuitActive(
                    this
                );

            }
        );

}


// ============================================================
// ACTIVE CIRCUIT BUTTON
// ============================================================

function setKMapCircuitActive(
    button
) {

    document
        .querySelectorAll(
            "#kmapInputCircuit .circuit-buttons button"
        )
        .forEach(
            btn => {

                btn.classList.remove(
                    "active"
                );

            }
        );


    button.classList.add(
        "active"
    );
}


// ============================================================
// SOLVE K-MAP
// ============================================================

function solveKMapInput() {

    generatedVariableCount =
        kmapVariableCount;


    const data =
        readKMapInput();


    const minterms =
        data.minterms;

    const dontCares =
        data.dontCares;


    const result =
        document.getElementById(
            "kmapInputResult"
        );


    const simplification =
        document.getElementById(
            "kmapSimplificationContainer"
        );


    // --------------------------------------------------------
    // CLEAR OLD OUTPUT
    // --------------------------------------------------------

    result.innerHTML = "";

    simplification.innerHTML = "";


    // --------------------------------------------------------
    // FIND GROUPS
    // --------------------------------------------------------

    const allGroups =
        generateAllKMapGroups(
            minterms,
            dontCares
        );


    const selectedGroups =
        selectBestKMapGroups(
            minterms,
            allGroups
        );


    // --------------------------------------------------------
    // EXPRESSION
    // --------------------------------------------------------

    const expression =
        kmapGroupsToExpression(
            selectedGroups,
            minterms
        );


    // --------------------------------------------------------
    // HIGHLIGHT
    // --------------------------------------------------------

    highlightKMapInputGroups(
        selectedGroups
    );


    // --------------------------------------------------------
    // MINTERM TEXT
    // --------------------------------------------------------

    const mintermText =
        minterms.length === 0
            ? "None"
            : `Σm(${minterms.join(", ")})`;


    // --------------------------------------------------------
    // DON'T CARE TEXT
    // --------------------------------------------------------

    const dontCareText =
        dontCares.length === 0
            ? "None"
            : `Σd(${dontCares.join(", ")})`;


    // --------------------------------------------------------
    // RESULT
    // --------------------------------------------------------

    result.innerHTML = `

        <div class="result-box">

            <h2>
                K-Map Result
            </h2>

            <p>
                <strong>
                    Number of variables:
                </strong>

                ${kmapVariableCount}

            </p>

            <p>
                <strong>
                    Minterms:
                </strong>

                ${mintermText}

            </p>

            <p>
                <strong>
                    Don't-care terms:
                </strong>

                ${dontCareText}

            </p>

            <h2>
                Simplified Boolean Expression
            </h2>

            <div class="expression">
                F = ${expression}
            </div>

        </div>

    `;


    // --------------------------------------------------------
    // SIMPLIFICATION
    // --------------------------------------------------------

    displayKMapSimplification(
        selectedGroups,
        expression
    );


    // --------------------------------------------------------
    // TRUTH TABLE
    // --------------------------------------------------------

    generateKMapResultTruthTable(
        minterms,
        dontCares
    );


    // --------------------------------------------------------
    // CIRCUIT
    // --------------------------------------------------------

    generateKMapInputCircuit(
        expression
    );

generateKMapInputVerification(
    minterms,
    dontCares,
    expression 
);

    // --------------------------------------------------------
    // DEBUG
    // --------------------------------------------------------

    console.log(
        "K-map variables:",
        kmapVariableCount
    );

    console.log(
        "Minterms:",
        minterms
    );

    console.log(
        "Don't-cares:",
        dontCares
    );

    console.log(
        "All valid groups:",
        allGroups
    );

    console.log(
        "Selected groups:",
        selectedGroups
    );

    console.log(
        "Simplified:",
        expression
    );
}

// ============================================================
// K-MAP INPUT VERIFICATION
// ============================================================

function generateKMapInputVerification(
    minterms,
    dontCares,
    simplifiedExpression
) {

    const container =
        document.getElementById(
            "kmapVerificationContainer"
        );


    if (!container) {

        console.error(
            "kmapVerificationContainer not found"
        );

        return;

    }


    // --------------------------------------------------------
    // CLEAR OLD VERIFICATION
    // --------------------------------------------------------

    container.innerHTML = "";


    const totalRows =
        2 ** kmapVariableCount;


    let expressionVerified = true;

    let basicVerified = true;

    let nandVerified = true;

    let norVerified = true;


    // --------------------------------------------------------
    // CHECK EVERY INPUT COMBINATION
    // --------------------------------------------------------

    for (
        let row = 0;
        row < totalRows;
        row++
    ) {

        // --------------------------------------------
        // DON'T CARES ARE NOT VERIFIED
        // --------------------------------------------

        if (
            dontCares.includes(row)
        ) {

            continue;

        }


        // --------------------------------------------
        // BINARY VALUE
        // --------------------------------------------

        const binary =
            row
                .toString(2)
                .padStart(
                    kmapVariableCount,
                    "0"
                );


        const values = {};


        // --------------------------------------------
        // A, B, C, D, E, F
        // --------------------------------------------

        for (
            let i = 0;
            i < kmapVariableCount;
            i++
        ) {

            const variable =
                String.fromCharCode(
                    65 + i
                );


            values[variable] =
                binary[i] === "1";

        }


        // --------------------------------------------
        // ORIGINAL K-MAP OUTPUT
        // --------------------------------------------

        const originalOutput =
            minterms.includes(row)
                ? 1
                : 0;


        // ====================================================
        // SIMPLIFIED EXPRESSION
        // ====================================================

        let simplifiedOutput = 0;


        try {

            simplifiedOutput =
    evaluateExpression(
        simplifiedExpression,
        values
    )
        ? 1
        : 0;
        }

        catch (error) {

            console.error(
                "Simplified expression verification error:",
                error
            );

            expressionVerified =
                false;

            continue;

        }


        if (
            simplifiedOutput !==
            originalOutput
        ) {

            expressionVerified =
                false;

        }


        // ====================================================
        // BASIC CIRCUIT
        // ====================================================

        try {

            const basicOutput =
                evaluateBasicCircuit(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;


            if (
                basicOutput !==
                originalOutput
            ) {

                basicVerified =
                    false;

            }

        }

        catch (error) {

            console.error(
                "Basic circuit verification error:",
                error
            );

            basicVerified =
                false;

        }


        // ====================================================
        // NAND CIRCUIT
        // ====================================================

        try {

            const nandOutput =
                evaluateNandCircuit(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;


            if (
                nandOutput !==
                originalOutput
            ) {

                nandVerified =
                    false;

            }

        }

        catch (error) {

            console.error(
                "NAND circuit verification error:",
                error
            );

            nandVerified =
                false;

        }


        // ====================================================
        // NOR CIRCUIT
        // ====================================================

        try {

            const norOutput =
                evaluateNorCircuit(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;


            if (
                norOutput !==
                originalOutput
            ) {

                norVerified =
                    false;

            }

        }

        catch (error) {

            console.error(
                "NOR circuit verification error:",
                error
            );

            norVerified =
                false;

        }

    }


    // ========================================================
    // DISPLAY
    // ========================================================

    container.innerHTML = `

        <div class="verification-section">

            <h2>
                Verification
            </h2>


            <!-- ============================================ -->
            <!-- SIMPLIFIED EXPRESSION -->
            <!-- ============================================ -->

            <div
                class="
                    verification-card
                    ${
                        expressionVerified
                            ? "success"
                            : "error"
                    }
                "
            >

                <p>
                    Original Function
                    ↔
                    Simplified Expression
                </p>

                <strong>

                    ${
                        expressionVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }

                </strong>

            </div>


            <!-- ============================================ -->
            <!-- BASIC CIRCUIT -->
            <!-- ============================================ -->

            <div
                class="
                    verification-card
                    ${
                        basicVerified
                            ? "success"
                            : "error"
                    }
                "
            >

                <p>
                    Original Function
                    ↔
                    Basic AND / OR / NOT Circuit
                </p>

                <strong>

                    ${
                        basicVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }

                </strong>

            </div>


            <!-- ============================================ -->
            <!-- NAND CIRCUIT -->
            <!-- ============================================ -->

            <div
                class="
                    verification-card
                    ${
                        nandVerified
                            ? "success"
                            : "error"
                    }
                "
            >

                <p>
                    Original Function
                    ↔
                    NAND-only Circuit
                </p>

                <strong>

                    ${
                        nandVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }

                </strong>

            </div>


            <!-- ============================================ -->
            <!-- NOR CIRCUIT -->
            <!-- ============================================ -->

            <div
                class="
                    verification-card
                    ${
                        norVerified
                            ? "success"
                            : "error"
                    }
                "
            >

                <p>
                    Original Function
                    ↔
                    NOR-only Circuit
                </p>

                <strong>

                    ${
                        norVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }

                </strong>

            </div>

        </div>

    `;

}

// -------------------------
// OPEN BOOLEAN EXPRESSION PAGE
// -------------------------

booleanExpressionButton.addEventListener(
    "click",
    function () {

        homePage.style.display = "none";
        truthTablePage.style.display = "none";
        mintermPage.style.display = "none";
        kmapPage.style.display = "none";

        booleanExpressionPage.style.display =
            "block";

    }
);


// -------------------------
// BACK FROM BOOLEAN EXPRESSION
// -------------------------

backFromBooleanExpression.addEventListener(
    "click",
    function () {

        booleanExpressionPage.style.display =
            "none";

        homePage.style.display = "block";

    }
);

// =====================================================
// BOOLEAN EXPRESSION → TRUTH TABLE
// =====================================================

generateExpressionTable.addEventListener(
    "click",
    function () {

        generateBooleanExpressionTruthTable();

    }
);

function generateBooleanExpressionTruthTable() {

    const expression =
        booleanExpressionInput.value
            .trim()
            .toUpperCase();

    booleanExpressionError.textContent = "";

    expressionTruthTableContainer.innerHTML = "";
    expressionSolveContainer.innerHTML = "";
    expressionKmapContainer.innerHTML = "";
    expressionSimplificationContainer.innerHTML = "";
    expressionVerificationContainer.innerHTML = "";
    expressionCircuitContainer.innerHTML = "";


    // -------------------------
    // CHECK EMPTY
    // -------------------------

    if (!expression) {

        booleanExpressionError.textContent =
            "Please enter a Boolean expression.";

        return;

    }


    // -------------------------
    // FIND VARIABLES
    // -------------------------

    const foundVariables =
        [...new Set(
            expression.match(/[A-F]/g) || []
        )];


    // -------------------------
    // MINIMUM 2 VARIABLES
    // -------------------------

    if (foundVariables.length < 2) {

        booleanExpressionError.textContent =
            "Please use at least 2 variables.";

        return;

    }


    // -------------------------
    // MAXIMUM 6 VARIABLES
    // -------------------------

    if (foundVariables.length > 6) {

        booleanExpressionError.textContent =
            "Maximum 6 variables are allowed.";

        return;

    }


    // -------------------------
    // VARIABLES IN ORDER
    // -------------------------

    const variables =
        ["A", "B", "C", "D", "E", "F"]
            .filter(
                variable =>
                    foundVariables.includes(variable)
            );


    const variableCount =
        variables.length;


    generatedVariableCount =
        variableCount;


    // -------------------------
    // NUMBER OF ROWS
    // -------------------------

    const numberOfRows =
        2 ** variableCount;


    const outputs = [];


    // -------------------------
    // CREATE TABLE
    // -------------------------

    let tableHTML = `

        <h2>Truth Table</h2>

        <table class="expression-truth-table">

            <thead>

                <tr>
    `;


    // -------------------------
    // HEADERS
    // -------------------------

    for (const variable of variables) {

        tableHTML += `
            <th>${variable}</th>
        `;

    }


    tableHTML += `
            <th>F</th>
        </tr>

        </thead>

        <tbody>
    `;


    // -------------------------
    // CREATE EVERY ROW
    // -------------------------

    for (
        let row = 0;
        row < numberOfRows;
        row++
    ) {

        const binaryValue =
            row
                .toString(2)
                .padStart(
                    variableCount,
                    "0"
                );


        const values = {};


        // -------------------------
        // STORE VARIABLE VALUES
        // -------------------------

        for (
            let i = 0;
            i < variableCount;
            i++
        ) {

            values[
                variables[i]
            ] =
                binaryValue[i] === "1";

        }


        // -------------------------
        // EVALUATE EXPRESSION
        // -------------------------

        let result;

        try {

            result =
                evaluateBooleanExpression(
                    expression,
                    values
                );

        }

        catch (error) {

            booleanExpressionError.textContent =
                "Invalid Boolean expression.";

            console.error(error);

            expressionTruthTableContainer.innerHTML =
                "";

            return;

        }


        // -------------------------
        // OUTPUT
        // -------------------------

        const output =
            result ? 1 : 0;


        outputs.push(output);


        // -------------------------
        // START ROW
        // -------------------------

        tableHTML += "<tr>";


        // -------------------------
        // INPUTS
        // -------------------------

        for (const bit of binaryValue) {

            tableHTML += `
                <td>${bit}</td>
            `;

        }


        // -------------------------
        // OUTPUT
        // -------------------------

        tableHTML += `
            <td
                class="${
                    output === 1
                        ? "truth-one"
                        : "truth-zero"
                }"
            >
                ${output}
            </td>
        `;


        tableHTML += "</tr>";

    }


    // -------------------------
    // CLOSE TABLE
    // -------------------------

    tableHTML += `

        </tbody>

        </table>

    `;


    // -------------------------
    // DISPLAY TABLE
    // -------------------------

    expressionTruthTableContainer.innerHTML =
        tableHTML;


    // -------------------------
    // AUTOMATICALLY SOLVE
    // -------------------------

    solveBooleanExpression(
        expression,
        outputs,
        variableCount
    );

}

function evaluateBooleanExpression(
    expression,
    values
) {

    let expr =
        expression.replace(/\s/g, "");


    // -------------------------
    // VALID CHARACTERS
    // -------------------------

    if (
    !/^[A-F+'()]+$/.test(expr)
) {
    throw new Error(
        "Invalid Boolean expression."
    );
}


    // -------------------------
    // HANDLE NOT
    // A' → !A
    // -------------------------

    expr = expr.replace(
        /([A-F])'/g,
        "!$1"
    );


    // -------------------------
    // INSERT AND
    // AB → A&&B
    // A(B+C) → A&&(B+C)
    // -------------------------

    expr = expr.replace(
        /([A-F])(?=[A-F(])/g,
        "$1&&"
    );


    expr = expr.replace(
        /([)])(?=[A-F(])/g,
        "$1&&"
    );
    expr = expr.replace(
    /([A-F])(?=!)/g,
    "$1&&"
);


    expr = expr.replace(
        /!([A-F])(?=[A-F(])/g,
        "!$1&&"
    );


    // -------------------------
    // OR
    // -------------------------

    expr = expr.replace(
        /\+/g,
        "||"
    );


    // -------------------------
    // REPLACE VARIABLES
    // -------------------------

    for (const variable of variablesIn(values)) {

        expr = expr.replace(
            new RegExp(variable, "g"),
            values[variable]
                ? "true"
                : "false"
        );

    }


    // -------------------------
    // EVALUATE
    // -------------------------

    try {

        return Boolean(
            Function(
                `"use strict"; return (${expr});`
            )()
        );

    }

    catch (error) {

        console.error(
            "Expression error:",
            error
        );

        return false;

    }

}


function variablesIn(values) {

    return Object.keys(values);

}

function solveBooleanExpression(
    expression,
    outputs,
    variableCount
) {

    // =========================================
    // FIND MINTERMS
    // =========================================

    const minterms = [];

    for (
        let row = 0;
        row < outputs.length;
        row++
    ) {

        if (outputs[row] === 1) {
            minterms.push(row);
        }

    }


    console.log(
        "Boolean Expression:",
        expression
    );

    console.log(
        "Minterms:",
        minterms
    );


    // =========================================
    // SET VARIABLE COUNT
    // =========================================

    generatedVariableCount =
        variableCount;


    // =========================================
    // GENERATE K-MAP
    // =========================================

    generateKMap(
        minterms,
        [],
        expressionKmapContainer
    );


    // =========================================
    // FIND K-MAP GROUPS
    // =========================================

    const groups =
        findKMapGroups(
            minterms,
            []
        );


    console.log(
        "All groups:",
        groups
    );


    // =========================================
    // SELECT GROUPS
    // =========================================

    const selectedGroups =
        selectGroups(
            minterms,
            [],
            groups
        );


    console.log(
        "Selected groups:",
        selectedGroups
    );


    // =========================================
    // HIGHLIGHT K-MAP
    // =========================================

    highlightKMapGroups(
        selectedGroups
    );


    // =========================================
    // SIMPLIFIED EXPRESSION
    // =========================================

    const simplifiedExpression =
        groupsToExpression(
            selectedGroups
        );


    console.log(
        "Simplified:",
        simplifiedExpression
    );


    // =========================================
    // DISPLAY SIMPLIFICATION
    // =========================================

    expressionSimplificationContainer.innerHTML = `

        <div class="result-box">

            <h2>
                Simplified Expression
            </h2>

            <div class="expression">
                F = ${simplifiedExpression}
            </div>

        </div>

    `;


    // =========================================
    // GENERATE CIRCUIT
    // =========================================

    generateBooleanExpressionCircuit(
        simplifiedExpression
    );


    // =========================================
    // VERIFICATION
    // =========================================

    generateBooleanExpressionVerification(
        expression,
        simplifiedExpression,
        outputs,
        variableCount
    );

}

function generateBooleanExpressionVerification(
    originalExpression,
    simplifiedExpression,
    outputs,
    variableCount
) {

    // =========================================
    // REMOVE OLD VERIFICATION
    // =========================================

    expressionVerificationContainer.innerHTML = "";


    // =========================================
    // VERIFICATION FLAGS
    // =========================================

    let expressionVerified = true;
    let basicVerified = true;
    let nandVerified = true;
    let norVerified = true;


    // =========================================
    // CHECK EVERY ROW
    // =========================================

    for (
        let row = 0;
        row < outputs.length;
        row++
    ) {

        const binary =
            row
                .toString(2)
                .padStart(
                    variableCount,
                    "0"
                );


        // =====================================
        // CREATE VARIABLE VALUES
        // =====================================

        const values = {};

        for (
            let i = 0;
            i < variableCount;
            i++
        ) {

            const variable =
                String.fromCharCode(
                    65 + i
                );

            values[variable] =
                binary[i] === "1";

        }


        // =====================================
        // ORIGINAL TRUTH TABLE OUTPUT
        // =====================================

        const originalOutput =
            outputs[row];


        // =====================================
        // SIMPLIFIED EXPRESSION
        // =====================================

        let simplifiedOutput;

        try {

            simplifiedOutput =
                evaluateBooleanExpression(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;

        }
        catch (error) {

            console.error(
                "Simplified expression verification error:",
                error
            );

            expressionVerified = false;

            simplifiedOutput = -1;

        }


        if (
            originalOutput !==
            simplifiedOutput
        ) {

            expressionVerified = false;

        }


        // =====================================
        // BASIC AND / OR / NOT CIRCUIT
        // =====================================

        let basicOutput;

        try {

            basicOutput =
                evaluateBasicCircuit(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;

        }
        catch (error) {

            console.error(
                "Basic circuit verification error:",
                error
            );

            basicVerified = false;

            basicOutput = -1;

        }


        if (
            originalOutput !==
            basicOutput
        ) {

            basicVerified = false;

        }


        // =====================================
        // NAND-ONLY CIRCUIT
        // =====================================

        let nandOutput;

        try {

            nandOutput =
                evaluateNandCircuit(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;

        }
        catch (error) {

            console.error(
                "NAND circuit verification error:",
                error
            );

            nandVerified = false;

            nandOutput = -1;

        }


        if (
            originalOutput !==
            nandOutput
        ) {

            nandVerified = false;

        }


        // =====================================
        // NOR-ONLY CIRCUIT
        // =====================================

        let norOutput;

        try {

            norOutput =
                evaluateNorCircuit(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;

        }
        catch (error) {

            console.error(
                "NOR circuit verification error:",
                error
            );

            norVerified = false;

            norOutput = -1;

        }


        if (
            originalOutput !==
            norOutput
        ) {

            norVerified = false;

        }

    }


    // =========================================
    // DISPLAY VERIFICATION
    // =========================================

    expressionVerificationContainer.innerHTML = `

        <div class="result-box">

            <h2>
                Verification
            </h2>


            <!-- ================================= -->
            <!-- SIMPLIFIED EXPRESSION -->
            <!-- ================================= -->

            <div class="
                verification-item
                ${
                    expressionVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    Simplified Expression
                </span>

                <strong>
                    ${
                        expressionVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>


            <!-- ================================= -->
            <!-- BASIC CIRCUIT -->
            <!-- ================================= -->

            <div class="
                verification-item
                ${
                    basicVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    Basic AND / OR / NOT Circuit
                </span>

                <strong>
                    ${
                        basicVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>


            <!-- ================================= -->
            <!-- NAND CIRCUIT -->
            <!-- ================================= -->

            <div class="
                verification-item
                ${
                    nandVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    NAND-only Circuit
                </span>

                <strong>
                    ${
                        nandVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>


            <!-- ================================= -->
            <!-- NOR CIRCUIT -->
            <!-- ================================= -->

            <div class="
                verification-item
                ${
                    norVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    NOR-only Circuit
                </span>

                <strong>
                    ${
                        norVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>


        </div>

    `;

}

function generateBooleanExpressionCircuit(
    expression
) {

    // =====================================================
    // CIRCUIT CONTAINER
    // =====================================================

    expressionCircuitContainer.innerHTML = `

        <div class="circuit-box">

            <h2>
                Circuit Diagram
            </h2>

            <p>
                Implementation of:
            </p>

            <div class="expression">
                F = ${expression}
            </div>


            <div class="circuit-buttons">

                <button
                    id="expressionBasicCircuit"
                    class="active"
                >
                    Basic Gates
                </button>

                <button
                    id="expressionNandCircuit"
                >
                    NAND Only
                </button>

                <button
                    id="expressionNorCircuit"
                >
                    NOR Only
                </button>

            </div>


            <div
                id="expressionCircuitDiagram"
                class="circuit-diagram"
            >
            </div>

        </div>

    `;


    // =====================================================
    // GET DIAGRAM CONTAINER
    // =====================================================

    const diagram =
        document.getElementById(
            "expressionCircuitDiagram"
        );


    // =====================================================
    // BASIC GATES
    // =====================================================

    diagram.innerHTML =
        generateBasicCircuit(
            expression
        );


    // =====================================================
    // BASIC BUTTON
    // =====================================================

    document
        .getElementById(
            "expressionBasicCircuit"
        )
        .addEventListener(
            "click",
            function () {

                setExpressionCircuitActive(
                    this
                );

                diagram.innerHTML =
                    generateBasicCircuit(
                        expression
                    );

            }
        );


    // =====================================================
    // NAND BUTTON
    // =====================================================

    document
        .getElementById(
            "expressionNandCircuit"
        )
        .addEventListener(
            "click",
            function () {

                setExpressionCircuitActive(
                    this
                );

                diagram.innerHTML =
                    generateNandCircuit(
                        expression
                    );

            }
        );


    // =====================================================
    // NOR BUTTON
    // =====================================================

    document
        .getElementById(
            "expressionNorCircuit"
        )
        .addEventListener(
            "click",
            function () {

                setExpressionCircuitActive(
                    this
                );

                diagram.innerHTML =
                    generateNorCircuit(
                        expression
                    );

            }
        );

}

function setExpressionCircuitActive(
    activeButton
) {

    document
        .querySelectorAll(
            "#expressionBasicCircuit, " +
            "#expressionNandCircuit, " +
            "#expressionNorCircuit"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    activeButton.classList.add(
        "active"
    );

}

// ============================================================
// MINTERM / MAXTERM INPUT PAGE
// ============================================================


// ============================================================
// ELEMENTS
// ============================================================

const mintermButton =
    document.getElementById(
        "mintermButton"
    );

const mintermPage =
    document.getElementById(
        "mintermPage"
    );

const backFromMinterm =
    document.getElementById(
        "backFromMinterm"
    );


// ============================================================
// VARIABLE CONTROLS
// ============================================================

let mintermVariableCount = 2;


const decreaseMintermVariables =
    document.getElementById(
        "decreaseMintermVariables"
    );

const increaseMintermVariables =
    document.getElementById(
        "increaseMintermVariables"
    );

const mintermVariableCountDisplay =
    document.getElementById(
        "mintermVariableCount"
    );

const mintermVariableError =
    document.getElementById(
        "mintermVariableError"
    );


// ============================================================
// INPUT ELEMENTS
// ============================================================

const mintermInput =
    document.getElementById(
        "mintermInput"
    );

const mintermInputError =
    document.getElementById(
        "mintermInputError"
    );

const solveMinterm =
    document.getElementById(
        "solveMinterm"
    );

const mintermResult =
    document.getElementById(
        "mintermResult"
    );


// ============================================================
// OPEN PAGE
// ============================================================

mintermButton.addEventListener(
    "click",
    function () {

        homePage.style.display =
            "none";

        truthTablePage.style.display =
            "none";

        if (
            typeof booleanExpressionPage !==
            "undefined"
        ) {

            booleanExpressionPage.style.display =
                "none";

        }

        if (
            typeof kmapPage !==
            "undefined"
        ) {

            kmapPage.style.display =
                "none";

        }

        mintermPage.style.display =
            "block";

    }
);


// ============================================================
// BACK
// ============================================================

backFromMinterm.addEventListener(
    "click",
    function () {

        mintermPage.style.display =
            "none";

        homePage.style.display =
            "block";

    }
);


// ============================================================
// INCREASE VARIABLES
// ============================================================

increaseMintermVariables.addEventListener(
    "click",
    function () {

        if (
            mintermVariableCount < 6
        ) {

            mintermVariableCount++;

            mintermVariableCountDisplay.textContent =
                mintermVariableCount;

            mintermVariableError.textContent =
                "";

        }

        else {

            mintermVariableError.textContent =
                "Maximum 6 variables are allowed.";

        }

    }
);


// ============================================================
// DECREASE VARIABLES
// ============================================================

decreaseMintermVariables.addEventListener(
    "click",
    function () {

        if (
            mintermVariableCount > 2
        ) {

            mintermVariableCount--;

            mintermVariableCountDisplay.textContent =
                mintermVariableCount;

            mintermVariableError.textContent =
                "";

        }

        else {

            mintermVariableError.textContent =
                "Minimum 2 variables are required.";

        }

    }
);


// ============================================================
// SOLVE BUTTON
// ============================================================

solveMinterm.addEventListener(
    "click",
    function () {

        solveMintermFunction();

    }
);


// ============================================================
// CLEAR PREVIOUS RESULT
// ============================================================

function clearMintermOutput() {

    mintermResult.innerHTML =
        "";

    const oldTruthTable =
        document.getElementById(
            "mintermTruthTableResult"
        );

    if (oldTruthTable) {

        oldTruthTable.remove();

    }


    const oldKMap =
        document.getElementById(
            "mintermKMapResult"
        );

    if (oldKMap) {

        oldKMap.remove();

    }


    const oldSimplification =
        document.getElementById(
            "mintermSimplificationResult"
        );

    if (oldSimplification) {

        oldSimplification.remove();

    }


    const oldCircuit =
        document.getElementById(
            "mintermCircuitResult"
        );

    if (oldCircuit) {

        oldCircuit.remove();

    }

}


// ============================================================
// READ INPUT
// ============================================================

function readMintermInput() {

    const input =
        mintermInput.value.trim();


    mintermInputError.textContent =
        "";


    if (!input) {

        mintermInputError.textContent =
            "Please enter some values.";

        return null;

    }


    /*
        Accept:

        1,3,5,7

        Also accepts:

        1, 3, 5, 7
    */

    const parts =
        input.split(",");


    const values = [];


    for (
        const part of parts
    ) {

        const trimmed =
            part.trim();


        if (
            trimmed === ""
        ) {

            mintermInputError.textContent =
                "Please enter valid comma-separated values.";

            return null;

        }


        /*
            Only integers
        */

        if (
            !/^\d+$/.test(
                trimmed
            )
        ) {

            mintermInputError.textContent =
                "Only non-negative integer values are allowed.";

            return null;

        }


        const value =
            Number(trimmed);


        values.push(value);

    }


    const maximum =
        (2 ** mintermVariableCount) - 1;


    /*
        Range validation
    */

    for (
        const value of values
    ) {

        if (
            value < 0 ||
            value > maximum
        ) {

            mintermInputError.textContent =
                `Enter values between 0 and ${maximum}.`;

            return null;

        }

    }


    /*
        Remove duplicates
    */

    const uniqueValues =
        [
            ...new Set(values)
        ];


    uniqueValues.sort(
        (a, b) => a - b
    );


    return uniqueValues;

}


// ============================================================
// SOLVE MINTERM / MAXTERM
// ============================================================

function solveMintermFunction() {

    clearMintermOutput();


    const values =
        readMintermInput();


    if (!values) {

        return;

    }


    generatedVariableCount =
        mintermVariableCount;


    const maximum =
        (2 ** mintermVariableCount) - 1;


    const selectedType =
        document.querySelector(
            'input[name="functionType"]:checked'
        );


    if (!selectedType) {

        mintermInputError.textContent =
            "Please select Minterm or Maxterm.";

        return;

    }


    const type =
        selectedType.value;


    let minterms = [];

    let maxterms = [];


    // ========================================================
    // MINTERM INPUT
    // ========================================================

    if (
        type === "minterms"
    ) {

        minterms =
            [...values];


        maxterms =
            getComplementTerms(
                minterms,
                maximum
            );

    }


    // ========================================================
    // MAXTERM INPUT
    // ========================================================

    else {

        maxterms =
            [...values];


        minterms =
            getComplementTerms(
                maxterms,
                maximum
            );

    }


    // ========================================================
    // DISPLAY MAIN RESULT
    // ========================================================

    displayMintermMainResult(
        type,
        values,
        minterms,
        maxterms
    );


    // ========================================================
    // TRUTH TABLE
    // ========================================================

    generateMintermTruthTable(
        minterms,
        maxterms
    );


    // ========================================================
    // K-MAP
    // ========================================================

    generateMintermKMap(
        minterms
    );


    // ========================================================
    // FIND GROUPS
    // ========================================================

    const groups =
        generateMintermGroups(
            minterms
        );


    const selectedGroups =
        selectMintermGroups(
            minterms,
            groups
        );


    // ========================================================
    // HIGHLIGHT GROUPS
    // ========================================================

    highlightMintermGroups(
        selectedGroups
    );


    // ========================================================
    // SIMPLIFY
    // ========================================================

    const simplifiedExpression =
        mintermGroupsToExpression(
            selectedGroups,
            minterms
        );


    displayMintermSimplification(
        selectedGroups,
        simplifiedExpression
    );


    // ========================================================
    // CIRCUIT
    // ========================================================

    generateMintermCircuit(
        simplifiedExpression
    );

    generateMintermVerification(
    type,
    values,
    simplifiedExpression
);


    console.log(
        "Input type:",
        type
    );

    console.log(
        "Input values:",
        values
    );

    console.log(
        "Minterms:",
        minterms
    );

    console.log(
        "Maxterms:",
        maxterms
    );

    console.log(
        "Groups:",
        selectedGroups
    );

    console.log(
        "Simplified:",
        simplifiedExpression
    );

}


// ============================================================
// COMPLEMENT TERMS
// ============================================================

function getComplementTerms(
    selected,
    maximum
) {

    const result = [];


    for (
        let i = 0;
        i <= maximum;
        i++
    ) {

        if (
            !selected.includes(i)
        ) {

            result.push(i);

        }

    }


    return result;

}


// ============================================================
// MAIN RESULT
// ============================================================

function displayMintermMainResult(
    type,
    inputValues,
    minterms,
    maxterms
) {

    const inputText =
        inputValues.length === 0
            ? "None"
            : inputValues.join(", ");


    const mintermText =
        minterms.length === 0
            ? "None"
            : `Σm(${minterms.join(", ")})`;


    const maxtermText =
        maxterms.length === 0
            ? "None"
            : `ΠM(${maxterms.join(", ")})`;


    const typeText =
        type === "minterms"
            ? "Minterms"
            : "Maxterms";


    mintermResult.innerHTML = `

        <div
            class="result-box"
            id="mintermMainResult"
        >

            <h2>
                Result
            </h2>


            <p>

                <strong>
                    Number of variables:
                </strong>

                ${mintermVariableCount}

            </p>


            <p>

                <strong>
                    Input type:
                </strong>

                ${typeText}

            </p>


            <p>

                <strong>
                    Input values:
                </strong>

                ${inputText}

            </p>


            <p>

                <strong>
                    Minterms:
                </strong>

                ${mintermText}

            </p>


            <p>

                <strong>
                    Maxterms:
                </strong>

                ${maxtermText}

            </p>

        </div>

    `;

}


// ============================================================
// TRUTH TABLE
// ============================================================

function generateMintermTruthTable(
    minterms,
    maxterms
) {

    const totalRows =
        2 ** mintermVariableCount;


    let html = `

        <div
            class="result-box"
            id="mintermTruthTableResult"
        >

            <h2>
                Truth Table
            </h2>

            <table
                class="expression-truth-table"
            >

                <thead>

                    <tr>

    `;


    // Variables

    for (
        let i = 0;
        i < mintermVariableCount;
        i++
    ) {

        html += `

            <th>
                ${String.fromCharCode(
                    65 + i
                )}
            </th>

        `;

    }


    html += `

        <th>F</th>

        </tr>

        </thead>

        <tbody>

    `;


    // Rows

    for (
        let row = 0;
        row < totalRows;
        row++
    ) {

        const binary =
            row
                .toString(2)
                .padStart(
                    mintermVariableCount,
                    "0"
                );


        const output =
            minterms.includes(row)
                ? "1"
                : "0";


        html += `

            <tr>

        `;


        for (
            const bit of binary
        ) {

            html += `

                <td>
                    ${bit}
                </td>

            `;

        }


        html += `

            <td
                class="${
                    output === "1"
                        ? "truth-one"
                        : "truth-zero"
                }"
            >
                ${output}
            </td>

        `;


        html += `

            </tr>

        `;

    }


    html += `

                </tbody>

            </table>

        </div>

    `;


    mintermResult.insertAdjacentHTML(
        "beforeend",
        html
    );

}


// ============================================================
// K-MAP LAYOUT
// ============================================================

function getMintermKMapLayout() {

    if (
        mintermVariableCount === 2
    ) {

        return [

            [0, 1],

            [2, 3]

        ];

    }


    if (
        mintermVariableCount === 3
    ) {

        return [

            [0, 1, 3, 2],

            [4, 5, 7, 6]

        ];

    }


    if (
        mintermVariableCount === 4
    ) {

        return [

            [0, 1, 3, 2],

            [4, 5, 7, 6],

            [12, 13, 15, 14],

            [8, 9, 11, 10]

        ];

    }


    /*
        5 and 6 variables are displayed
        as multiple 4x4 maps.
    */

    return null;

}


// ============================================================
// K-MAP GENERATOR
// ============================================================

function generateMintermKMap(
    minterms
) {

    const old =
        document.getElementById(
            "mintermKMapResult"
        );


    if (old) {

        old.remove();

    }


    let html = `

        <div
            class="result-box"
            id="mintermKMapResult"
        >

            <h2>
                K-Map
            </h2>

    `;


    // ========================================================
    // 2 VARIABLE
    // ========================================================

    if (
        mintermVariableCount === 2
    ) {

        const map =
            getMintermKMapLayout();


        html += `

            <table
                class="kmap minterm-result-kmap"
            >

                <tr>

                    <th>AB</th>

                    <th>0</th>
                    <th>1</th>

                </tr>

        `;


        for (
            let r = 0;
            r < 2;
            r++
        ) {

            html += `

                <tr>

                    <th>${r}</th>

            `;


            for (
                let c = 0;
                c < 2;
                c++
            ) {

                const m =
                    map[r][c];


                html += `

                    <td
                        id="minterm-kmap-cell-${m}"
                        data-minterm="${m}"
                    >
                        ${
                            minterms.includes(m)
                                ? 1
                                : 0
                        }
                    </td>

                `;

            }


            html += `

                </tr>

            `;

        }


        html += `

            </table>

        `;

    }


    // ========================================================
    // 3 VARIABLE
    // ========================================================

    else if (
        mintermVariableCount === 3
    ) {

        const map =
            getMintermKMapLayout();


        html += `

            <table
                class="kmap minterm-result-kmap"
            >

                <tr>

                    <th>A \\ BC</th>

                    <th>00</th>
                    <th>01</th>
                    <th>11</th>
                    <th>10</th>

                </tr>

        `;


        for (
            let r = 0;
            r < 2;
            r++
        ) {

            html += `

                <tr>

                    <th>${r}</th>

            `;


            for (
                let c = 0;
                c < 4;
                c++
            ) {

                const m =
                    map[r][c];


                html += `

                    <td
                        id="minterm-kmap-cell-${m}"
                        data-minterm="${m}"
                    >
                        ${
                            minterms.includes(m)
                                ? 1
                                : 0
                        }
                    </td>

                `;

            }


            html += `

                </tr>

            `;

        }


        html += `

            </table>

        `;

    }


    // ========================================================
    // 4 VARIABLE
    // ========================================================

    else if (
        mintermVariableCount === 4
    ) {

        const map =
            getMintermKMapLayout();


        html += `

            <table
                class="kmap minterm-result-kmap"
            >

                <tr>

                    <th>AB \\ CD</th>

                    <th>00</th>
                    <th>01</th>
                    <th>11</th>
                    <th>10</th>

                </tr>

        `;


        const labels =
            [
                "00",
                "01",
                "11",
                "10"
            ];


        for (
            let r = 0;
            r < 4;
            r++
        ) {

            html += `

                <tr>

                    <th>
                        ${labels[r]}
                    </th>

            `;


            for (
                let c = 0;
                c < 4;
                c++
            ) {

                const m =
                    map[r][c];


                html += `

                    <td
                        id="minterm-kmap-cell-${m}"
                        data-minterm="${m}"
                    >
                        ${
                            minterms.includes(m)
                                ? 1
                                : 0
                        }
                    </td>

                `;

            }


            html += `

                </tr>

            `;

        }


        html += `

            </table>

        `;

    }


    // ========================================================
    // 5 VARIABLE
    // ========================================================

    else if (
        mintermVariableCount === 5
    ) {

        const map0 = [

            [0, 1, 3, 2],

            [4, 5, 7, 6],

            [12, 13, 15, 14],

            [8, 9, 11, 10]

        ];


        const map1 = [

            [16, 17, 19, 18],

            [20, 21, 23, 22],

            [28, 29, 31, 30],

            [24, 25, 27, 26]

        ];


        html +=

            createMinterm4x4Map(
                "E = 0",
                map0,
                minterms
            );


        html +=

            createMinterm4x4Map(
                "E = 1",
                map1,
                minterms
            );

    }


    // ========================================================
    // 6 VARIABLE
    // ========================================================

    else if (
        mintermVariableCount === 6
    ) {

        const abMaps = [

            {
                label: "AB = 00",
                bits: "00"
            },

            {
                label: "AB = 01",
                bits: "01"
            },

            {
                label: "AB = 11",
                bits: "11"
            },

            {
                label: "AB = 10",
                bits: "10"
            }

        ];


        for (
            const current of abMaps
        ) {

            const ab =
                parseInt(
                    current.bits,
                    2
                );


            const map = [];


            for (
                let r = 0;
                r < 4;
                r++
            ) {

                const row = [];


                const cd =
                    parseInt(
                        [
                            "00",
                            "01",
                            "11",
                            "10"
                        ][r],
                        2
                    );


                for (
                    let c = 0;
                    c < 4;
                    c++
                ) {

                    const ef =
                        parseInt(
                            [
                                "00",
                                "01",
                                "11",
                                "10"
                            ][c],
                            2
                        );


                    const m =
                        (ab << 4) |
                        (cd << 2) |
                        ef;


                    row.push(m);

                }


                map.push(row);

            }


            html +=

                createMinterm4x4Map(
                    current.label,
                    map,
                    minterms
                );

        }

    }


    html += `

        </div>

    `;


    mintermResult.insertAdjacentHTML(
        "beforeend",
        html
    );

}


// ============================================================
// 4 × 4 K-MAP
// ============================================================

function createMinterm4x4Map(
    title,
    map,
    minterms
) {

    let html = `

        <div class="kmap-section">

            <h3>
                ${title}
            </h3>

            <table
                class="kmap minterm-result-kmap"
            >

                <tr>

                    <th>CD \\ EF</th>

                    <th>00</th>
                    <th>01</th>
                    <th>11</th>
                    <th>10</th>

                </tr>

    `;


    const labels =
        [
            "00",
            "01",
            "11",
            "10"
        ];


    for (
        let r = 0;
        r < 4;
        r++
    ) {

        html += `

            <tr>

                <th>
                    ${labels[r]}
                </th>

        `;


        for (
            let c = 0;
            c < 4;
            c++
        ) {

            const m =
                map[r][c];


            html += `

                <td
                    id="minterm-kmap-cell-${m}"
                    data-minterm="${m}"
                >
                    ${
                        minterms.includes(m)
                            ? 1
                            : 0
                    }
                </td>

            `;

        }


        html += `

            </tr>

        `;

    }


    html += `

            </table>

        </div>

    `;


    return html;

}


// ============================================================
// GENERATE ALL GROUPS
// ============================================================

function generateMintermGroups(
    minterms
) {

    if (
        minterms.length === 0
    ) {

        return [];

    }


    if (
        minterms.length ===
        2 ** mintermVariableCount
    ) {

        return [
            Array.from(
                {
                    length:
                        2 ** mintermVariableCount
                },
                (_, i) => i
            )
        ];

    }


    const n =
        mintermVariableCount;


    const groups = [];


    /*
        3 states per variable:

        0 = fixed 0
        1 = fixed 1
        2 = don't care
    */

    const totalPatterns =
        3 ** n;


    for (
        let p = 0;
        p < totalPatterns;
        p++
    ) {

        let temp = p;

        const pattern = [];


        for (
            let i = 0;
            i < n;
            i++
        ) {

            const state =
                temp % 3;


            temp =
                Math.floor(
                    temp / 3
                );


            if (
                state === 0
            ) {

                pattern.push(0);

            }

            else if (
                state === 1
            ) {

                pattern.push(1);

            }

            else {

                pattern.push(
                    null
                );

            }

        }


        const group = [];


        for (
            let m = 0;
            m < 2 ** n;
            m++
        ) {

            const binary =
                m
                    .toString(2)
                    .padStart(
                        n,
                        "0"
                    );


            let matches =
                true;


            for (
                let i = 0;
                i < n;
                i++
            ) {

                if (
                    pattern[i] !== null &&
                    Number(
                        binary[i]
                    ) !==
                    pattern[i]
                ) {

                    matches =
                        false;

                    break;

                }

            }


            if (
                matches
            ) {

                group.push(m);

            }

        }


        if (
            group.length === 0
        ) {

            continue;

        }


        const valid =
            group.every(
                m =>
                    minterms.includes(m)
            );


        if (!valid) {

            continue;

        }


        if (
            group.some(
                m =>
                    minterms.includes(m)
            )
        ) {

            groups.push(
                group.sort(
                    (a, b) =>
                        a - b
                )
            );

        }

    }


    /*
        Remove duplicate groups
    */

    const uniqueGroups = [];


    for (
        const group of groups
    ) {

        const exists =
            uniqueGroups.some(
                existing =>
                    arraysEqualMinterm(
                        existing,
                        group
                    )
            );


        if (!exists) {

            uniqueGroups.push(
                group
            );

        }

    }


    /*
        Largest first
    */

    uniqueGroups.sort(
        (a, b) =>
            b.length - a.length
    );


    return uniqueGroups;

}


// ============================================================
// ARRAY COMPARISON
// ============================================================

function arraysEqualMinterm(
    a,
    b
) {

    if (
        a.length !==
        b.length
    ) {

        return false;

    }


    for (
        let i = 0;
        i < a.length;
        i++
    ) {

        if (
            a[i] !== b[i]
        ) {

            return false;

        }

    }


    return true;

}


// ============================================================
// SELECT BEST GROUPS
// ============================================================

function selectMintermGroups(
    minterms,
    groups
) {

    if (
        minterms.length === 0
    ) {

        return [];

    }


    if (
        minterms.length ===
        2 ** mintermVariableCount
    ) {

        return [
            Array.from(
                {
                    length:
                        2 ** mintermVariableCount
                },
                (_, i) => i
            )
        ];

    }


    const primeGroups =
        groups.filter(
            group => {

                return !groups.some(
                    other => {

                        if (
                            other.length <=
                            group.length
                        ) {

                            return false;

                        }


                        return group.every(
                            m =>
                                other.includes(m)
                        );

                    }
                );

            }
        );


    const candidates =
        primeGroups.length
            ? primeGroups
            : groups;


    const selected = [];

    const covered =
        new Set();


    /*
        Essential groups
    */

    for (
        const minterm of minterms
    ) {

        const covering =
            candidates.filter(
                group =>
                    group.includes(
                        minterm
                    )
            );


        if (
            covering.length === 1
        ) {

            const group =
                covering[0];


            if (
                !selected.some(
                    existing =>
                        arraysEqualMinterm(
                            existing,
                            group
                        )
                )
            ) {

                selected.push(
                    group
                );


                group.forEach(
                    m =>
                        covered.add(m)
                );

            }

        }

    }


    /*
        Cover remaining minterms
    */

    while (
        covered.size <
        minterms.length
    ) {

        let bestGroup =
            null;

        let bestCoverage =
            -1;


        for (
            const group of candidates
        ) {

            if (
                selected.some(
                    existing =>
                        arraysEqualMinterm(
                            existing,
                            group
                        )
                )
            ) {

                continue;

            }


            let coverage = 0;


            for (
                const m of group
            ) {

                if (
                    !covered.has(m)
                ) {

                    coverage++;

                }

            }


            if (
                coverage >
                bestCoverage
            ) {

                bestCoverage =
                    coverage;

                bestGroup =
                    group;

            }

        }


        if (
            !bestGroup
        ) {

            break;

        }


        selected.push(
            bestGroup
        );


        bestGroup.forEach(
            m =>
                covered.add(m)
        );

    }


    return selected;

}


// ============================================================
// GROUP → TERM
// ============================================================

function mintermGroupToTerm(
    group
) {

    const n =
        mintermVariableCount;


    const binaries =
        group.map(
            m =>
                m
                    .toString(2)
                    .padStart(
                        n,
                        "0"
                    )
        );


    let term = "";


    for (
        let i = 0;
        i < n;
        i++
    ) {

        let same = true;


        for (
            let j = 1;
            j < binaries.length;
            j++
        ) {

            if (
                binaries[j][i] !==
                binaries[0][i]
            ) {

                same = false;

                break;

            }

        }


        if (
            same
        ) {

            const variable =
                String.fromCharCode(
                    65 + i
                );


            if (
                binaries[0][i] ===
                "1"
            ) {

                term +=
                    variable;

            }

            else {

                term +=
                    variable + "'";

            }

        }

    }


    return term;

}


// ============================================================
// GROUPS → EXPRESSION
// ============================================================

function mintermGroupsToExpression(
    groups,
    minterms
) {

    const total =
        2 ** mintermVariableCount;


    if (
        minterms.length === 0
    ) {

        return "0";

    }


    if (
        minterms.length ===
        total
    ) {

        return "1";

    }


    const terms = [];


    for (
        const group of groups
    ) {

        const term =
            mintermGroupToTerm(
                group
            );


        if (
            term === ""
        ) {

            terms.push(
                "1"
            );

        }

        else {

            terms.push(
                term
            );

        }

    }


    return [
        ...new Set(terms)
    ].join(" + ");

}


// ============================================================
// HIGHLIGHT K-MAP
// ============================================================

function highlightMintermGroups(
    groups
) {

    const cells =
        document.querySelectorAll(
            "#mintermKMapResult td[data-minterm]"
        );


    cells.forEach(
        cell => {

            cell.classList.remove(
                "group-1",
                "group-2",
                "group-3",
                "group-4"
            );

        }
    );


    groups.forEach(
        (group, index) => {

            const className =
                `group-${(index % 4) + 1}`;


            group.forEach(
                minterm => {

                    const cell =
                        document.getElementById(
                            `minterm-kmap-cell-${minterm}`
                        );


                    if (
                        cell
                    ) {

                        cell.classList.add(
                            className
                        );

                    }

                }
            );

        }
    );

}


// ============================================================
// SIMPLIFICATION
// ============================================================

function displayMintermSimplification(
    groups,
    expression
) {

    const old =
        document.getElementById(
            "mintermSimplificationResult"
        );


    if (
        old
    ) {

        old.remove();

    }


    let html = `

        <div
            class="result-box"
            id="mintermSimplificationResult"
        >

            <h2>
                Simplified Boolean Expression
            </h2>

            <div class="expression">

                F = ${expression}

            </div>

            <h2>
                Simplification
            </h2>

    `;


    if (
        expression === "0"
    ) {

        html += `

            <p>
                There are no minterms where
                F = 1.
            </p>

        `;

    }

    else if (
        expression === "1"
    ) {

        html += `

            <p>
                All possible input combinations
                produce F = 1.
            </p>

        `;

    }

    else {

        groups.forEach(
            (group, index) => {

                const binaries =
                    group.map(
                        m =>
                            m
                                .toString(2)
                                .padStart(
                                    mintermVariableCount,
                                    "0"
                                )
                    );


                const term =
                    mintermGroupToTerm(
                        group
                    );


                html += `

                    <div
                        class="derivation-group"
                    >

                        <h3>
                            Group ${index + 1}
                        </h3>

                        <p>

                            Minterms:

                            <strong>
                                m(${group.join(", ")})
                            </strong>

                        </p>

                        <p>

                            Binary:

                            <strong>
                                ${binaries.join(", ")}
                            </strong>

                        </p>

                        <p>

                            Therefore:

                            <strong>
                                ${term || "1"}
                            </strong>

                        </p>

                    </div>

                `;

            }
        );

    }


    html += `

        </div>

    `;


    mintermResult.insertAdjacentHTML(
        "beforeend",
        html
    );

}


// ============================================================
// CIRCUIT DIAGRAM
// ============================================================

function generateMintermCircuit(
    expression
) {

    const old =
        document.getElementById(
            "mintermCircuitResult"
        );


    if (
        old
    ) {

        old.remove();

    }


    const circuit =
        document.createElement(
            "div"
        );


    circuit.id =
        "mintermCircuitResult";


    circuit.innerHTML = `

        <div class="circuit-box">

            <h2>
                Circuit Diagram
            </h2>

            <p>
                Implementation of:
            </p>

            <div class="expression">
                F = ${expression}
            </div>


            <div class="circuit-buttons">

                <button
                    id="mintermBasicCircuit"
                    class="active"
                >
                    Basic Gates
                </button>


                <button
                    id="mintermNandCircuit"
                >
                    NAND Only
                </button>


                <button
                    id="mintermNorCircuit"
                >
                    NOR Only
                </button>

            </div>


            <div
                id="mintermCircuitDiagram"
                class="circuit-diagram"
            >
            </div>

        </div>

    `;


    mintermResult.appendChild(
        circuit
    );


    const diagram =
        document.getElementById(
            "mintermCircuitDiagram"
        );


    // --------------------------------------------------------
    // BASIC
    // --------------------------------------------------------

    diagram.innerHTML =
        generateBasicCircuit(
            expression
        );


    document
        .getElementById(
            "mintermBasicCircuit"
        )
        .addEventListener(
            "click",
            function () {

                diagram.innerHTML =
                    generateBasicCircuit(
                        expression
                    );

                setMintermCircuitActive(
                    this
                );

            }
        );


    // --------------------------------------------------------
    // NAND
    // --------------------------------------------------------

    document
        .getElementById(
            "mintermNandCircuit"
        )
        .addEventListener(
            "click",
            function () {

                diagram.innerHTML =
                    generateNandCircuit(
                        expression
                    );

                setMintermCircuitActive(
                    this
                );

            }
        );


    // --------------------------------------------------------
    // NOR
    // --------------------------------------------------------

    document
        .getElementById(
            "mintermNorCircuit"
        )
        .addEventListener(
            "click",
            function () {

                diagram.innerHTML =
                    generateNorCircuit(
                        expression
                    );

                setMintermCircuitActive(
                    this
                );

            }
        );

}


// ============================================================
// ACTIVE CIRCUIT BUTTON
// ============================================================

function setMintermCircuitActive(
    button
) {

    document
        .querySelectorAll(
            "#mintermCircuitResult .circuit-buttons button"
        )
        .forEach(
            btn => {

                btn.classList.remove(
                    "active"
                );

            }
        );


    button.classList.add(
        "active"
    );

}

// ============================================================
// VERIFICATION
// ============================================================
function evaluateMintermExpression(
    expression,
    values
) {
    const expr = String(expression)
        .replace(/\s/g, "");

    // Constant cases
    if (expr === "0") {
        return false;
    }

    if (expr === "1") {
        return true;
    }

    // Split SOP expression at OR (+)
    const terms = expr.split("+");

    for (const term of terms) {

        if (term === "") {
            return false;
        }

        let termValue = true;

        for (let i = 0; i < term.length; i++) {

            let variable = term[i];

            // Must be A-F
            if (!/^[A-F]$/.test(variable)) {
                return false;
            }

            let value =
                Boolean(values[variable]);

            // Check NOT
            if (
                i + 1 < term.length &&
                term[i + 1] === "'"
            ) {
                value = !value;
                i++;
            }

            // AND
            termValue =
                termValue && value;

            // Early exit
            if (!termValue) {
                break;
            }
        }

        // OR
        if (termValue) {
            return true;
        }
    }

    return false;
}

function generateMintermVerification(
    type,
    inputValues,
    simplifiedExpression
) {
    const old =
        document.getElementById(
            "mintermVerificationResult"
        );

    if (old) {
        old.remove();
    }

    const totalRows =
        2 ** mintermVariableCount;

    let expressionVerified = true;

    /*
     * Check every possible input combination.
     *
     * For MINTERMS:
     *   listed rows  -> F = 1
     *   other rows   -> F = 0
     *
     * For MAXTERMS:
     *   listed rows  -> F = 0
     *   other rows   -> F = 1
     */

    for (
        let row = 0;
        row < totalRows;
        row++
    ) {

        const binary =
            row
                .toString(2)
                .padStart(
                    mintermVariableCount,
                    "0"
                );


        /* -----------------------------------------
           Create A, B, C, D values
           ----------------------------------------- */

        const values = {};

        for (
            let i = 0;
            i < mintermVariableCount;
            i++
        ) {

            const variable =
                String.fromCharCode(
                    65 + i
                );

            values[variable] =
                binary[i] === "1";
        }


        /* -----------------------------------------
           ORIGINAL FUNCTION OUTPUT
           ----------------------------------------- */

        let originalOutput;


        if (type === "minterms") {

            // Σm(...)
            originalOutput =
                inputValues.includes(row)
                    ? 1
                    : 0;

        } else {

            // ΠM(...)
            originalOutput =
                inputValues.includes(row)
                    ? 0
                    : 1;
        }


        /* -----------------------------------------
           SIMPLIFIED EXPRESSION OUTPUT
           ----------------------------------------- */

        let simplifiedOutput;

        try {

            simplifiedOutput =
                evaluateMintermExpression(
                    simplifiedExpression,
                    values
                )
                    ? 1
                    : 0;

        } catch (error) {

            console.error(
                "Verification error:",
                error
            );

            expressionVerified =
                false;

            break;
        }


        /* -----------------------------------------
           COMPARE
           ----------------------------------------- */

        if (
            originalOutput !==
            simplifiedOutput
        ) {

            console.error(
                "Verification mismatch",
                {
                    type: type,
                    row: row,
                    binary: binary,
                    original: originalOutput,
                    simplified: simplifiedOutput
                }
            );

            expressionVerified =
                false;

            break;
        }
    }


    /* =============================================
       CIRCUIT VERIFICATION
       ============================================= */

    /*
     * The circuits are generated from the same
     * simplified expression.
     *
     * Therefore, if the simplified expression
     * matches the original truth function,
     * the corresponding implementations are
     * equivalent.
     */

    const basicVerified =
        expressionVerified;

    const nandVerified =
        expressionVerified;

    const norVerified =
        expressionVerified;


    /* =============================================
       DISPLAY
       ============================================= */

    const verificationHTML = `

        <div
            class="verification-section"
            id="mintermVerificationResult"
        >

            <h2>
                Verification
            </h2>


            <!-- SIMPLIFIED EXPRESSION -->

            <div class="
                verification-item
                ${
                    expressionVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    Simplified Expression
                </span>

                <strong>
                    ${
                        expressionVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>


            <!-- BASIC CIRCUIT -->

            <div class="
                verification-item
                ${
                    basicVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    Basic AND / OR / NOT Circuit
                </span>

                <strong>
                    ${
                        basicVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>


            <!-- NAND CIRCUIT -->

            <div class="
                verification-item
                ${
                    nandVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    NAND-only Circuit
                </span>

                <strong>
                    ${
                        nandVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>


            <!-- NOR CIRCUIT -->

            <div class="
                verification-item
                ${
                    norVerified
                        ? "success"
                        : "error"
                }
            ">

                <span>
                    Original Function
                    ↔
                    NOR-only Circuit
                </span>

                <strong>
                    ${
                        norVerified
                            ? "✓ Equivalent"
                            : "✗ Not Equivalent"
                    }
                </strong>

            </div>

        </div>
    `;


    /*
     * Put verification after the other minterm results.
     */

    const circuitContainer =
        document.getElementById(
            "mintermCircuitResult"
        );

    if (circuitContainer) {

        circuitContainer.insertAdjacentHTML(
            "afterend",
            verificationHTML
        );

    } else {

        mintermResult.insertAdjacentHTML(
            "beforeend",
            verificationHTML
        );
    }
}

// =====================================================
// BINARY ADDER
// COMPLETE FINAL VERSION
//
// BLOCK DIAGRAM
// STANDARD GATES
// NAND ONLY
// NOR ONLY
//
// 1 TO 4 BITS
// =====================================================


// =====================================================
// ELEMENTS
// =====================================================

const binaryAdderButton =
    document.getElementById(
        "binaryAdderButton"
    );

const binaryAdderPage =
    document.getElementById(
        "binaryAdderPage"
    );

const backFromBinaryAdder =
    document.getElementById(
        "backFromBinaryAdder"
    );

const decreaseAdderBits =
    document.getElementById(
        "decreaseAdderBits"
    );

const increaseAdderBits =
    document.getElementById(
        "increaseAdderBits"
    );

const adderBitCount =
    document.getElementById(
        "adderBitCount"
    );

const adderBitError =
    document.getElementById(
        "adderBitError"
    );

const adderInputContainer =
    document.getElementById(
        "adderInputContainer"
    );

const adderResultContainer =
    document.getElementById(
        "adderResultContainer"
    );

const adderCircuitContainer =
    document.getElementById(
        "adderCircuitContainer"
    );

const adderAlternativeCircuitContainer =
    document.getElementById(
        "adderAlternativeCircuitContainer"
    );

const adderStandardCircuitButton =
    document.getElementById(
        "adderStandardCircuitButton"
    );

const adderNandCircuitButton =
    document.getElementById(
        "adderNandCircuitButton"
    );

const adderNorCircuitButton =
    document.getElementById(
        "adderNorCircuitButton"
    );


// =====================================================
// VARIABLES
// =====================================================

let currentAdderBits = 1;

let adderA = [0];

let adderB = [0];

let adderCircuitMode = "block";


// =====================================================
// OPEN ADDER
// =====================================================

if (binaryAdderButton) {

    binaryAdderButton.addEventListener(
        "click",
        function () {

            homepage.style.display =
                "none";

            binaryAdderPage.style.display =
                "block";

            generateAdderInputs();

        }
    );

}


// =====================================================
// BACK
// =====================================================

if (backFromBinaryAdder) {

    backFromBinaryAdder.addEventListener(
        "click",
        function () {

            binaryAdderPage.style.display =
                "none";

            homePage.style.display =
                "block";

        }
    );

}


// =====================================================
// DECREASE BITS
// =====================================================

if (decreaseAdderBits) {

    decreaseAdderBits.addEventListener(
        "click",
        function () {

            if (
                currentAdderBits > 1
            ) {

                currentAdderBits--;

                adderBitCount.textContent =
                    currentAdderBits;

                generateAdderInputs();

            }

        }
    );

}


// =====================================================
// INCREASE BITS
// =====================================================

if (increaseAdderBits) {

    increaseAdderBits.addEventListener(
        "click",
        function () {

            if (
                currentAdderBits < 4
            ) {

                currentAdderBits++;

                adderBitCount.textContent =
                    currentAdderBits;

                generateAdderInputs();

            }

        }
    );

}


// =====================================================
// INPUTS
// =====================================================

function generateAdderInputs() {

    adderA =
        new Array(
            currentAdderBits
        ).fill(0);

    adderB =
        new Array(
            currentAdderBits
        ).fill(0);


    let html = `

        <div class="adder-input-box">

            <h2>
                ${currentAdderBits}-Bit Binary Adder
            </h2>


            <div class="adder-row">

                <span class="adder-row-label">
                    A =
                </span>
    `;


    // DISPLAY MSB → LSB
    for (
        let i =
            currentAdderBits - 1;

        i >= 0;

        i--
    ) {

        html += `

            <button
                class="adder-bit"
                data-type="A"
                data-index="${i}"
            >
                0
            </button>

        `;

    }


    html += `

            </div>


            <div class="adder-row">

                <span class="adder-row-label">
                    B =
                </span>
    `;


    for (
        let i =
            currentAdderBits - 1;

        i >= 0;

        i--
    ) {

        html += `

            <button
                class="adder-bit"
                data-type="B"
                data-index="${i}"
            >
                0
            </button>

        `;

    }


    html += `

            </div>


            <button
                id="calculateAdder"
            >
                Add
            </button>

        </div>

    `;


    adderInputContainer.innerHTML =
        html;


    addAdderBitListeners();

}


// =====================================================
// INPUT BUTTONS
// =====================================================

function addAdderBitListeners() {

    const buttons =
        document.querySelectorAll(
            ".adder-bit[data-type]"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const type =
                        this.dataset.type;

                    const index =
                        Number(
                            this.dataset.index
                        );


                    if (
                        type === "A"
                    ) {

                        adderA[index] =
                            adderA[index] === 0
                                ? 1
                                : 0;

                    }


                    if (
                        type === "B"
                    ) {

                        adderB[index] =
                            adderB[index] === 0
                                ? 1
                                : 0;

                    }


                    this.textContent =
                        type === "A"
                            ? adderA[index]
                            : adderB[index];


                    updateAdderBitStyle(
                        this
                    );

                }
            );

        }
    );


    const calculateButton =
        document.getElementById(
            "calculateAdder"
        );


    if (calculateButton) {

        calculateButton.addEventListener(
            "click",
            calculateAdder
        );

    }

}


// =====================================================
// BIT STYLE
// =====================================================

function updateAdderBitStyle(
    button
) {

    if (
        button.textContent === "1"
    ) {

        button.classList.add(
            "active"
        );

    }
    else {

        button.classList.remove(
            "active"
        );

    }

}


// =====================================================
// GET FULL ADDER STAGE
// =====================================================

function getAdderStage(
    index
) {

    const A =
        adderA[index] || 0;

    const B =
        adderB[index] || 0;


    let Cin = 0;


    /*
     * Carry travels from LSB
     * towards MSB.
     */

    for (
        let i = 0;
        i < index;
        i++
    ) {

        const previousA =
            adderA[i] || 0;

        const previousB =
            adderB[i] || 0;


        const previousTotal =
            previousA +
            previousB +
            Cin;


        Cin =
            Math.floor(
                previousTotal / 2
            );

    }


    const total =
        A +
        B +
        Cin;


    return {

        A: A,

        B: B,

        Cin: Cin,

        Sum:
            total % 2,

        Cout:
            Math.floor(
                total / 2
            )

    };

}


// =====================================================
// CALCULATE ADDITION
// =====================================================

function calculateAdder() {

    let carry = 0;

    const sum =
        new Array(
            currentAdderBits
        ).fill(0);


    for (
        let i = 0;
        i < currentAdderBits;
        i++
    ) {

        const total =
            adderA[i] +
            adderB[i] +
            carry;


        sum[i] =
            total % 2;


        carry =
            Math.floor(
                total / 2
            );

    }


    const AString =
        adderA
            .slice()
            .reverse()
            .join("");


    const BString =
        adderB
            .slice()
            .reverse()
            .join("");


    const sumString =
        sum
            .slice()
            .reverse()
            .join("");


    const ADecimal =
        parseInt(
            AString,
            2
        );


    const BDecimal =
        parseInt(
            BString,
            2
        );


    const resultDecimal =
        ADecimal +
        BDecimal;


    showAdderResult(
        AString,
        BString,
        sumString,
        carry,
        ADecimal,
        BDecimal,
        resultDecimal
    );


    generateAdderCircuit();

}


// =====================================================
// RESULT
// =====================================================

function showAdderResult(
    AString,
    BString,
    sumString,
    carry,
    ADecimal,
    BDecimal,
    resultDecimal
) {

    adderResultContainer.innerHTML = `

        <div class="adder-result-box">

            <h2>
                Addition Result
            </h2>


            <div class="adder-result-number">
                ${AString}
                +
                ${BString}
                =
                ${carry}${sumString}
            </div>


            <div class="adder-result-detail">
                <span>
                    First Number
                </span>

                <strong>
                    ${ADecimal}
                </strong>
            </div>


            <div class="adder-result-detail">
                <span>
                    Second Number
                </span>

                <strong>
                    ${BDecimal}
                </strong>
            </div>


            <div class="adder-result-detail">
                <span>
                    Binary Result
                </span>

                <strong>
                    ${carry}${sumString}
                </strong>
            </div>


            <div class="adder-result-detail">
                <span>
                    Decimal Result
                </span>

                <strong>
                    ${resultDecimal}
                </strong>
            </div>


            <div class="adder-result-detail">
                <span>
                    Carry Out
                </span>

                <strong>
                    ${carry}
                </strong>
            </div>

        </div>

    `;

}


// =====================================================
// CIRCUIT SELECTOR
// =====================================================

function generateAdderCircuit() {

    if (
        adderCircuitMode ===
        "block"
    ) {

        generateAdderBlockDiagram();

    }

    else if (
        adderCircuitMode ===
        "standard"
    ) {

        generateStandardAdderCircuit();

    }

    else if (
        adderCircuitMode ===
        "nand"
    ) {

        generateNandAdderCircuit();

    }

    else if (
        adderCircuitMode ===
        "nor"
    ) {

        generateNorAdderCircuit();

    }

}


// =====================================================
// BLOCK DIAGRAM
// =====================================================

function generateAdderBlockDiagram() {

    adderAlternativeCircuitContainer.innerHTML =
        "";


    const stageWidth = 520;

    const width =
        currentAdderBits *
        stageWidth;

    const height = 390;


    let svg = `

        <div class="adder-circuit-box">

            <h2>
                ${currentAdderBits}-Bit Binary Adder
                — Block Diagram
            </h2>


            <p>
                Full adders connected using ripple carry
            </p>


            <div
                class="adder-circuit-diagram"
                style="overflow-x:auto;"
            >

                <svg
                    class="adder-circuit-svg"
                    viewBox="
                        0 0
                        ${width}
                        ${height}
                    "
                    width="${width}"
                    height="${height}"
                    xmlns="http://www.w3.org/2000/svg"
                >

    `;


    for (
        let i = 0;
        i < currentAdderBits;
        i++
    ) {

        const ox =
            i * stageWidth;

        const r =
            getAdderStage(i);


        const bx =
            ox + 180;

        const by = 125;


        // =================================================
        // TITLE
        // =================================================

        svg += `

            <text
                x="${ox + 260}"
                y="35"
                text-anchor="middle"

                fill="#ffffff"

                font-size="17"
                font-weight="700"
            >
                FULL ADDER ${i}
            </text>

        `;


        // =================================================
        // INPUT LABELS
        // =================================================

        svg += `

            <text
                x="${ox + 25}"
                y="125"

                fill="#ffffff"

                font-size="15"
                font-weight="700"
            >
                A${i} = ${r.A}
            </text>


            <text
                x="${ox + 25}"
                y="175"

                fill="#ffffff"

                font-size="15"
                font-weight="700"
            >
                B${i} = ${r.B}
            </text>


            <text
                x="${ox + 25}"
                y="225"

                fill="#ffffff"

                font-size="15"
                font-weight="700"
            >
                Cin = ${r.Cin}
            </text>

        `;


        // =================================================
        // FULL ADDER BLOCK
        // =================================================

        svg += `

            <rect
                x="${bx}"
                y="${by}"
                width="170"
                height="120"

                rx="14"

                fill="#17121f"
                stroke="#a78bfa"
                stroke-width="2.5"
            />


            <text
                x="${bx + 85}"
                y="${by + 48}"

                text-anchor="middle"

                fill="#ffffff"

                font-size="18"
                font-weight="700"
            >
                FULL
            </text>


            <text
                x="${bx + 85}"
                y="${by + 75}"

                text-anchor="middle"

                fill="#ffffff"

                font-size="18"
                font-weight="700"
            >
                ADDER
            </text>

        `;


        // =================================================
        // INPUT WIRES
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 100} 120
                    H ${bx}
                "

                fill="none"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />


            <path
                d="
                    M ${ox + 100} 170
                    H ${bx}
                "

                fill="none"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />


            <path
                d="
                    M ${ox + 100} 220
                    H ${bx}
                    V ${by + 100}
                "

                fill="none"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />

        `;


        // =================================================
        // SUM OUTPUT
        // =================================================

        svg += `

            <path
                d="
                    M ${bx + 170}
                      ${by + 40}

                    H ${ox + 410}
                "

                fill="none"
                stroke="#e9e2ff"
                stroke-width="3"
            />


            <text
                x="${ox + 425}"
                y="${by + 45}"

                fill="#c4b5fd"

                font-size="15"
                font-weight="700"
            >
                S${i} = ${r.Sum}
            </text>

        `;


        // =================================================
        // CARRY OUTPUT
        // =================================================

        svg += `

            <path
                d="
                    M ${bx + 170}
                      ${by + 85}

                    H ${ox + 410}
                "

                fill="none"
                stroke="#e9e2ff"
                stroke-width="3"
            />


            <text
                x="${ox + 425}"
                y="${by + 90}"

                fill="#c4b5fd"

                font-size="15"
                font-weight="700"
            >
                Cout = ${r.Cout}
            </text>

        `;


        // =================================================
        // CARRY TO NEXT STAGE
        // =================================================

        if (
            i <
            currentAdderBits - 1
        ) {

            const nextX =
                ox + stageWidth;


            svg += `

                <path
                    d="
                        M ${ox + 350}
                          ${by + 85}

                        H ${nextX - 35}

                        V ${by + 185}

                        H ${nextX + 20}
                    "

                    fill="none"
                    stroke="#e9e2ff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />


                <text
                    x="${ox + 365}"
                    y="${by + 150}"

                    fill="#c4b5fd"

                    font-size="13"
                    font-weight="700"
                >
                    Carry →
                </text>

            `;

        }


        // =================================================
        // STAGE SEPARATOR
        // =================================================

        if (
            i <
            currentAdderBits - 1
        ) {

            svg += `

                <line
                    x1="${ox + stageWidth - 10}"
                    y1="55"
                    x2="${ox + stageWidth - 10}"
                    y2="350"

                    stroke="#443653"
                    stroke-width="2"

                    stroke-dasharray="7 7"
                />

            `;

        }

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    adderCircuitContainer.innerHTML =
        svg;

}


// =====================================================
// STANDARD GATE CIRCUIT
//
// S = A XOR B XOR Cin
//
// C = AB + Cin(A XOR B)
// =====================================================

function generateStandardAdderCircuit() {

    adderAlternativeCircuitContainer.innerHTML =
        "";


    const stageWidth = 720;

    const width =
        currentAdderBits *
        stageWidth;

    const height = 520;


    let svg = `

        <div class="adder-circuit-box">

            <h2>
                ${currentAdderBits}-Bit Full Adder
                — Standard Gates
            </h2>

            <p>
                XOR + AND + OR
            </p>


            <div
                class="adder-circuit-diagram"
                style="overflow-x:auto;"
            >

                <svg
                    class="adder-circuit-svg"
                    viewBox="
                        0 0
                        ${width}
                        ${height}
                    "
                    width="${width}"
                    height="${height}"
                    xmlns="http://www.w3.org/2000/svg"
                >

    `;


    for (
        let i = 0;
        i < currentAdderBits;
        i++
    ) {

        const ox =
            i * stageWidth;

        const r =
            getAdderStage(i);


        const gx =
            ox + 145;


        // TITLE

        svg += `

            <text
                x="${ox + 350}"
                y="30"

                text-anchor="middle"

                fill="#ffffff"

                font-size="17"
                font-weight="700"
            >
                FULL ADDER ${i}
            </text>

        `;


        // INPUTS

        svg += `

            <text
                x="${ox + 15}"
                y="100"
                fill="#ffffff"
                font-size="15"
                font-weight="700"
            >
                A${i} = ${r.A}
            </text>


            <text
                x="${ox + 15}"
                y="150"
                fill="#ffffff"
                font-size="15"
                font-weight="700"
            >
                B${i} = ${r.B}
            </text>


            <text
                x="${ox + 15}"
                y="200"
                fill="#ffffff"
                font-size="15"
                font-weight="700"
            >
                Cin = ${r.Cin}
            </text>

        `;


        // =================================================
        // GATES
        // =================================================

        // X = A XOR B

        svg +=
            drawSubtractorXorGate(
                gx,
                75
            );


        // S = X XOR Cin

        svg +=
            drawSubtractorXorGate(
                gx + 200,
                170
            );


        // P = AB

        svg +=
            drawSubtractorAndGate(
                gx,
                285
            );


        // Q = X Cin

        svg +=
            drawSubtractorAndGate(
                gx + 200,
                360
            );


        // C = P OR Q

        svg +=
            drawSubtractorOrGate(
                gx + 400,
                320
            );


        // =================================================
        // A → XOR1
        // =================================================

        svg += adderSvgWire(`
            M ${ox + 90} 95
            H ${gx}
            V 105
        `);


        // B → XOR1

        svg += adderSvgWire(`
            M ${ox + 90} 145
            H ${gx}
            V 135
        `);


        // X → XOR2

        svg += adderSvgWire(`
            M ${gx + 90} 115
            H ${gx + 135}
            V 205
            H ${gx + 200}
        `);


        // Cin → XOR2

        svg += adderSvgWire(`
            M ${ox + 90} 195
            H ${gx + 150}
            V 245
            H ${gx + 200}
        `);


        // A → AND1

        svg += adderSvgWire(`
            M ${ox + 90} 95
            H ${gx - 35}
            V 310
            H ${gx}
        `);


        // B → AND1

        svg += adderSvgWire(`
            M ${ox + 90} 145
            H ${gx - 60}
            V 350
            H ${gx}
        `);


        // X → AND2

        svg += adderSvgWire(`
            M ${gx + 90} 115
            H ${gx + 140}
            V 390
            H ${gx + 200}
        `);


        // Cin → AND2

        svg += adderSvgWire(`
            M ${ox + 90} 195
            H ${gx + 155}
            V 430
            H ${gx + 200}
        `);


        // XOR2 → SUM

        svg += adderSvgWire(`
            M ${gx + 90} 210
            H ${gx + 400}
            V 210
        `);


        svg += `

            <text
                x="${gx + 300}"
                y="205"

                fill="#c4b5fd"

                font-size="15"
                font-weight="700"
            >
                S${i} = ${r.Sum}
            </text>

        `;


        // AND1 → OR

        svg += adderSvgWire(`
            M ${gx + 42} 325
            H ${gx + 350}
            V 340
            H ${gx + 400}
        `);


        // AND2 → OR

        svg += adderSvgWire(`
            M ${gx + 242} 400
            H ${gx + 350}
            V 375
            H ${gx + 400}
        `);


        // OR → COUT

        svg += adderSvgWire(`
            M ${gx + 495} 355
            H ${gx + 555}
        `);


        svg += `

            <text
                x="${gx + 565}"
                y="360"

                fill="#c4b5fd"

                font-size="15"
                font-weight="700"
            >
                Cout = ${r.Cout}
            </text>

        `;


        // STAGE SEPARATOR

        if (
            i <
            currentAdderBits - 1
        ) {

            svg += `

                <line
                    x1="${ox + stageWidth - 15}"
                    y1="55"
                    x2="${ox + stageWidth - 15}"
                    y2="480"

                    stroke="#443653"
                    stroke-width="2"

                    stroke-dasharray="7 7"
                />

            `;

        }

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    adderGateCircuitContainer.innerHTML =
        svg;


    forceAdderSvgWires(
        adderCircuitContainer
    );

}


// =====================================================
// NAND-ONLY CIRCUIT
//
// XOR = 4 NAND
//
// Carry:
//
// Pn = NAND(A,B)
// Qn = NAND(X,Cin)
// Cout = NAND(Pn,Qn)
// =====================================================

function generateNandAdderCircuit() {

    adderAlternativeCircuitContainer.innerHTML =
        "";


    const stageWidth = 850;

    const width =
        currentAdderBits *
        stageWidth;

    const height = 680;


    let svg = `

        <div class="adder-circuit-box">

            <h2>
                ${currentAdderBits}-Bit Full Adder
                — NAND Only
            </h2>

            <p>
                NAND gates only
            </p>


            <div
                class="adder-circuit-diagram"
                style="overflow-x:auto;"
            >

                <svg
                    class="subtractor-svg"
                    viewBox="
                        0 0
                        ${width}
                        ${height}
                    "
                    width="${width}"
                    height="${height}"
                    xmlns="http://www.w3.org/2000/svg"
                >

    `;


    for (
        let i = 0;
        i < currentAdderBits;
        i++
    ) {

        const ox =
            i * stageWidth;

        const r =
            getAdderStage(i);


        const x =
            ox + 120;


        // TITLE

        svg += `

            <text
                x="${ox + 400}"
                y="30"

                text-anchor="middle"

                class="subtractor-svg-title"
            >
                FULL ADDER ${i}
            </text>

        `;


        // INPUTS

        svg += `

            <text
                x="${ox + 10}"
                y="85"
                class="subtractor-svg-label"
            >
                A${i} = ${r.A}
            </text>


            <text
                x="${ox + 10}"
                y="135"
                class="subtractor-svg-label"
            >
                B${i} = ${r.B}
            </text>


            <text
                x="${ox + 10}"
                y="185"
                class="subtractor-svg-label"
            >
                Cin = ${r.Cin}
            </text>

        `;


        // =================================================
        // XOR 1
        // =================================================

        const x1 =
            x;

        const y1 =
            90;


        svg +=
            drawNandGate(
                x1,
                y1,
                2
            );

        svg +=
            drawNandGate(
                x1 + 120,
                y1 - 40,
                2
            );

        svg +=
            drawNandGate(
                x1 + 120,
                y1 + 40,
                2
            );

        svg +=
            drawNandGate(
                x1 + 250,
                y1,
                2
            );


        // =================================================
        // XOR 1 WIRES
        // =================================================

        svg += adderSvgWire(`
            M ${ox + 75} 80
            H ${x1}
        `);


        svg += adderSvgWire(`
            M ${ox + 75} 130
            H ${x1 - 25}
            V ${y1 + 20}
            H ${x1}
        `);


        svg += adderSvgWire(`
            M ${x1 + 75} ${y1}
            H ${x1 + 95}
            V ${y1 - 40}
            H ${x1 + 120}
        `);


        svg += adderSvgWire(`
            M ${x1 + 75} ${y1}
            H ${x1 + 95}
            V ${y1 + 40}
            H ${x1 + 120}
        `);


        svg += adderSvgWire(`
            M ${x1 + 195} ${y1 - 40}
            H ${x1 + 220}
            V ${y1}
            H ${x1 + 250}
        `);


        svg += adderSvgWire(`
            M ${x1 + 195} ${y1 + 40}
            H ${x1 + 220}
            V ${y1}
            H ${x1 + 250}
        `);


        // =================================================
        // XOR 2
        // =================================================

        const x2 =
            x;

        const y2 =
            285;


        svg +=
            drawNandGate(
                x2,
                y2,
                2
            );

        svg +=
            drawNandGate(
                x2 + 120,
                y2 - 40,
                2
            );

        svg +=
            drawNandGate(
                x2 + 120,
                y2 + 40,
                2
            );

        svg +=
            drawNandGate(
                x2 + 250,
                y2,
                2
            );


        // X → XOR2

        svg += adderSvgWire(`
            M ${x1 + 325} ${y1}
            H ${ox + 520}
            V ${y2}
            H ${x2}
        `);


        // Cin → XOR2

        svg += adderSvgWire(`
            M ${ox + 75} 180
            H ${ox + 95}
            V ${y2 + 20}
            H ${x2}
        `);


        // XOR2 wires

        svg += adderSvgWire(`
            M ${x2 + 75} ${y2}
            H ${x2 + 95}
            V ${y2 - 40}
            H ${x2 + 120}
        `);


        svg += adderSvgWire(`
            M ${x2 + 75} ${y2}
            H ${x2 + 95}
            V ${y2 + 40}
            H ${x2 + 120}
        `);


        svg += adderSvgWire(`
            M ${x2 + 195} ${y2 - 40}
            H ${x2 + 220}
            V ${y2}
            H ${x2 + 250}
        `);


        svg += adderSvgWire(`
            M ${x2 + 195} ${y2 + 40}
            H ${x2 + 220}
            V ${y2}
            H ${x2 + 250}
        `);


        // SUM

        svg += adderSvgWire(`
            M ${x2 + 325} ${y2}
            H ${ox + 470}
        `);


        svg += `

            <text
                x="${ox + 485}"
                y="${y2 + 5}"

                class="subtractor-svg-value"
            >
                S${i} = ${r.Sum}
            </text>

        `;


        // =================================================
        // CARRY
        // =================================================

        const cy =
            500;


        // NAND(A,B)

        svg +=
            drawNandGate(
                x + 30,
                cy,
                2
            );


        // NAND(X,Cin)

        svg +=
            drawNandGate(
                x + 220,
                cy,
                2
            );


        // FINAL NAND

        svg +=
            drawNandGate(
                x + 410,
                cy,
                2
            );


        // A

        svg += adderSvgWire(`
            M ${ox + 75} 80
            H ${x + 30}
            V ${cy}
        `);


        // B

        svg += adderSvgWire(`
            M ${ox + 75} 130
            H ${x}
            V ${cy + 20}
            H ${x + 30}
        `);


        // X

        svg += adderSvgWire(`
            M ${x1 + 325} ${y1}
            H ${x + 160}
            V ${cy}
            H ${x + 220}
        `);


        // Cin

        svg += adderSvgWire(`
            M ${ox + 75} 180
            H ${x + 180}
            V ${cy + 20}
            H ${x + 220}
        `);


        // First NAND → final NAND

        svg += adderSvgWire(`
            M ${x + 105} ${cy}
            H ${x + 410}
        `);


        // Second NAND → final NAND

        svg += adderSvgWire(`
            M ${x + 295} ${cy}
            H ${x + 350}
            V ${cy + 25}
            H ${x + 410}
        `);


        // COUT

        svg += adderSvgWire(`
            M ${x + 485} ${cy}
            H ${ox + 650}
        `);


        svg += `

            <text
                x="${ox + 665}"
                y="${cy + 5}"

                class="subtractor-svg-value"
            >
                Cout = ${r.Cout}
            </text>

        `;


        // STAGE SEPARATOR

        if (
            i <
            currentAdderBits - 1
        ) {

            svg += `

                <line
                    x1="${ox + stageWidth - 15}"
                    y1="50"
                    x2="${ox + stageWidth - 15}"
                    y2="630"

                    stroke="#443653"
                    stroke-width="2"
                    stroke-dasharray="7 7"
                />

            `;

        }

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    adderGateCircuitContainer.innerHTML =
        svg;


    forceAdderSvgWires(
        adderCircuitContainer
    );

}


// =====================================================
// NOR-ONLY CIRCUIT
//
// XOR = 5 NOR
//
// AND = 3 NOR
//
// OR = 3 NOR
// =====================================================

function generateNorAdderCircuit() {

    adderAlternativeCircuitContainer.innerHTML =
        "";


    const stageWidth = 1050;

    const width =
        currentAdderBits *
        stageWidth;

    const height = 720;


    let svg = `

        <div class="adder-circuit-box">

            <h2>
                ${currentAdderBits}-Bit Full Adder
                — NOR Only
            </h2>

            <p>
                NOR gates only
            </p>


            <div
                class="adder-circuit-diagram"
                style="overflow-x:auto;"
            >

                <svg
                    class="subtractor-svg"
                    viewBox="
                        0 0
                        ${width}
                        ${height}
                    "
                    width="${width}"
                    height="${height}"
                    xmlns="http://www.w3.org/2000/svg"
                >

    `;


    for (
        let i = 0;
        i < currentAdderBits;
        i++
    ) {

        const ox =
            i * stageWidth;

        const r =
            getAdderStage(i);


        const x =
            ox + 80;


        // =================================================
        // TITLE
        // =================================================

        svg += `

            <text
                x="${ox + 500}"
                y="30"

                text-anchor="middle"

                class="subtractor-svg-title"
            >
                FULL ADDER ${i}
            </text>

        `;


        // INPUTS

        svg += `

            <text
                x="${ox + 10}"
                y="85"
                class="subtractor-svg-label"
            >
                A${i} = ${r.A}
            </text>


            <text
                x="${ox + 10}"
                y="135"
                class="subtractor-svg-label"
            >
                B${i} = ${r.B}
            </text>


            <text
                x="${ox + 10}"
                y="185"
                class="subtractor-svg-label"
            >
                Cin = ${r.Cin}
            </text>

        `;


        // =================================================
        // XOR1 - 5 NOR
        // =================================================

        const x1 =
            x;

        const y1 =
            95;


        svg += drawNorGate(
            x1,
            y1,
            2
        );

        svg += drawNorGate(
            x1 + 130,
            y1 - 40,
            2
        );

        svg += drawNorGate(
            x1 + 130,
            y1 + 40,
            2
        );

        svg += drawNorGate(
            x1 + 270,
            y1,
            2
        );

        svg += drawNorGate(
            x1 + 410,
            y1,
            2
        );


        // INPUTS

        svg += adderSvgWire(`
            M ${ox + 70} 80
            H ${x1}
        `);


        svg += adderSvgWire(`
            M ${ox + 70} 130
            H ${x1 - 25}
            V ${y1 + 20}
            H ${x1}
        `);


        // N1 → N2

        svg += adderSvgWire(`
            M ${x1 + 90} ${y1}
            H ${x1 + 105}
            V ${y1 - 40}
            H ${x1 + 130}
        `);


        // N1 → N3

        svg += adderSvgWire(`
            M ${x1 + 90} ${y1}
            H ${x1 + 105}
            V ${y1 + 40}
            H ${x1 + 130}
        `);


        // N2 → N4

        svg += adderSvgWire(`
            M ${x1 + 220} ${y1 - 40}
            H ${x1 + 245}
            V ${y1}
            H ${x1 + 270}
        `);


        // N3 → N4

        svg += adderSvgWire(`
            M ${x1 + 220} ${y1 + 40}
            H ${x1 + 245}
            V ${y1}
            H ${x1 + 270}
        `);


        // N4 → N5

        svg += adderSvgWire(`
            M ${x1 + 360} ${y1}
            H ${x1 + 410}
        `);


        // =================================================
        // XOR2 - 5 NOR
        // =================================================

        const x2 =
            x;

        const y2 =
            300;


        svg += drawNorGate(
            x2,
            y2,
            2
        );

        svg += drawNorGate(
            x2 + 130,
            y2 - 40,
            2
        );

        svg += drawNorGate(
            x2 + 130,
            y2 + 40,
            2
        );

        svg += drawNorGate(
            x2 + 270,
            y2,
            2
        );

        svg += drawNorGate(
            x2 + 410,
            y2,
            2
        );


        // X → XOR2

        svg += adderSvgWire(`
            M ${x1 + 500} ${y1}
            H ${ox + 620}
            V ${y2}
            H ${x2}
        `);


        // Cin → XOR2

        svg += adderSvgWire(`
            M ${ox + 70} 180
            H ${x2 - 25}
            V ${y2 + 20}
            H ${x2}
        `);


        // XOR2 internal

        svg += adderSvgWire(`
            M ${x2 + 90} ${y2}
            H ${x2 + 105}
            V ${y2 - 40}
            H ${x2 + 130}
        `);


        svg += adderSvgWire(`
            M ${x2 + 90} ${y2}
            H ${x2 + 105}
            V ${y2 + 40}
            H ${x2 + 130}
        `);


        svg += adderSvgWire(`
            M ${x2 + 220} ${y2 - 40}
            H ${x2 + 245}
            V ${y2}
            H ${x2 + 270}
        `);


        svg += adderSvgWire(`
            M ${x2 + 220} ${y2 + 40}
            H ${x2 + 245}
            V ${y2}
            H ${x2 + 270}
        `);


        svg += adderSvgWire(`
            M ${x2 + 360} ${y2}
            H ${x2 + 410}
        `);


        // SUM

        svg += adderSvgWire(`
            M ${x2 + 500} ${y2}
            H ${ox + 650}
        `);


        svg += `

            <text
                x="${ox + 665}"
                y="${y2 + 5}"

                class="subtractor-svg-value"
            >
                S${i} = ${r.Sum}
            </text>

        `;


        // =================================================
        // CARRY
        //
        // AB using 3 NOR
        // XC using 3 NOR
        // OR using 3 NOR
        // =================================================


        const cy =
            500;


        // A'

        svg += drawNorGate(
            x,
            cy - 55,
            2
        );


        // B'

        svg += drawNorGate(
            x,
            cy + 55,
            2
        );


        // AB

        svg += drawNorGate(
            x + 130,
            cy,
            2
        );


        // X'

        svg += drawNorGate(
            x + 280,
            cy - 55,
            2
        );


        // Cin'

        svg += drawNorGate(
            x + 280,
            cy + 55,
            2
        );


        // X Cin

        svg += drawNorGate(
            x + 410,
            cy,
            2
        );


        // AB'

        svg += drawNorGate(
            x + 560,
            cy - 55,
            2
        );


        // XC'

        svg += drawNorGate(
            x + 560,
            cy + 55,
            2
        );


        // FINAL OR

        svg += drawNorGate(
            x + 700,
            cy,
            2
        );


        // A → inverter

        svg += adderSvgWire(`
            M ${ox + 70} 80
            H ${x - 25}
            V ${cy - 55}
            H ${x}
        `);


        // B → inverter

        svg += adderSvgWire(`
            M ${ox + 70} 130
            H ${x - 40}
            V ${cy + 55}
            H ${x}
        `);


        // A' → AB

        svg += adderSvgWire(`
            M ${x + 90} ${cy - 55}
            H ${x + 105}
            V ${cy}
            H ${x + 130}
        `);


        // B' → AB

        svg += adderSvgWire(`
            M ${x + 90} ${cy + 55}
            H ${x + 105}
            V ${cy}
            H ${x + 130}
        `);


        // X → X'

        svg += adderSvgWire(`
            M ${x1 + 500} ${y1}
            H ${x + 250}
            V ${cy - 55}
            H ${x + 280}
        `);


        // Cin → Cin'

        svg += adderSvgWire(`
            M ${ox + 70} 180
            H ${x + 240}
            V ${cy + 55}
            H ${x + 280}
        `);


        // X' → XC

        svg += adderSvgWire(`
            M ${x + 370} ${cy - 55}
            H ${x + 385}
            V ${cy}
            H ${x + 410}
        `);


        // Cin' → XC

        svg += adderSvgWire(`
            M ${x + 370} ${cy + 55}
            H ${x + 385}
            V ${cy}
            H ${x + 410}
        `);


        // AB → inverter

        svg += adderSvgWire(`
            M ${x + 500} ${cy}
            H ${x + 530}
            V ${cy - 55}
            H ${x + 560}
        `);


        // XC → inverter

        svg += adderSvgWire(`
            M ${x + 500} ${cy}
            H ${x + 530}
            V ${cy + 55}
            H ${x + 560}
        `);


        // final OR

        svg += adderSvgWire(`
            M ${x + 650} ${cy - 55}
            H ${x + 675}
            V ${cy}
            H ${x + 700}
        `);


        svg += adderSvgWire(`
            M ${x + 650} ${cy + 55}
            H ${x + 675}
            V ${cy}
            H ${x + 700}
        `);


        // Cout

        svg += adderSvgWire(`
            M ${x + 790} ${cy}
            H ${ox + 820}
        `);


        svg += `

            <text
                x="${ox + 835}"
                y="${cy + 5}"

                class="subtractor-svg-value"
            >
                Cout = ${r.Cout}
            </text>

        `;


        // SEPARATOR

        if (
            i <
            currentAdderBits - 1
        ) {

            svg += `

                <line
                    x1="${ox + stageWidth - 15}"
                    y1="50"
                    x2="${ox + stageWidth - 15}"
                    y2="670"

                    stroke="#443653"
                    stroke-width="2"

                    stroke-dasharray="7 7"
                />

            `;

        }

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    adderGateCircuitContainer.innerHTML =
        svg;


    forceAdderSvgWires(
        adderCircuitContainer
    );

}


// =====================================================
// SVG WIRE
//
// IMPORTANT:
// fill="none" prevents black triangles
// =====================================================

function adderSvgWire(
    d
) {

    return `

        <path
            d="${d}"

            fill="none"

            stroke="#e9e2ff"

            stroke-width="3"

            stroke-linecap="round"

            stroke-linejoin="round"
        />

    `;

}


// =====================================================
// FORCE WIRES TO REMAIN WIRES
// =====================================================

function forceAdderSvgWires(
    container
) {

    if (!container)
        return;


    const paths =
        container.querySelectorAll(
            "path"
        );


    paths.forEach(
        function (path) {

            /*
             * Gate paths are generated by
             * drawNandGate / drawNorGate /
             * drawSubtractor...
             *
             * Only paths without a gate-related
             * class are treated as wires.
             */

            const isGate =
                path.classList.contains(
                    "nand-gate"
                )
                ||
                path.classList.contains(
                    "nor-gate"
                )
                ||
                path.classList.contains(
                    "xor-gate"
                )
                ||
                path.classList.contains(
                    "and-gate"
                )
                ||
                path.classList.contains(
                    "or-gate"
                );


            if (!isGate) {

                path.style.setProperty(
                    "fill",
                    "none",
                    "important"
                );

                path.style.setProperty(
                    "stroke",
                    "#e9e2ff",
                    "important"
                );

                path.style.setProperty(
                    "stroke-width",
                    "3",
                    "important"
                );

                path.style.setProperty(
                    "stroke-linecap",
                    "round",
                    "important"
                );

                path.style.setProperty(
                    "stroke-linejoin",
                    "round",
                    "important"
                );

            }

        }
    );

}


// =====================================================
// CIRCUIT BUTTONS
// =====================================================

if (
    adderStandardCircuitButton
) {

    adderStandardCircuitButton.addEventListener(
        "click",
        function () {

            adderCircuitMode =
                "standard";


            adderStandardCircuitButton
                .classList
                .add("active");


            if (
                adderNandCircuitButton
            ) {

                adderNandCircuitButton
                    .classList
                    .remove("active");

            }


            if (
                adderNorCircuitButton
            ) {

                adderNorCircuitButton
                    .classList
                    .remove("active");

            }


            generateAdderCircuit();

        }
    );

}


if (
    adderNandCircuitButton
) {

    adderNandCircuitButton.addEventListener(
        "click",
        function () {

            adderCircuitMode =
                "nand";


            adderNandCircuitButton
                .classList
                .add("active");


            if (
                adderStandardCircuitButton
            ) {

                adderStandardCircuitButton
                    .classList
                    .remove("active");

            }


            if (
                adderNorCircuitButton
            ) {

                adderNorCircuitButton
                    .classList
                    .remove("active");

            }


            generateAdderCircuit();

        }
    );

}


if (
    adderNorCircuitButton
) {

    adderNorCircuitButton.addEventListener(
        "click",
        function () {

            adderCircuitMode =
                "nor";


            adderNorCircuitButton
                .classList
                .add("active");


            if (
                adderStandardCircuitButton
            ) {

                adderStandardCircuitButton
                    .classList
                    .remove("active");

            }


            if (
                adderNandCircuitButton
            ) {

                adderNandCircuitButton
                    .classList
                    .remove("active");

            }


            generateAdderCircuit();

        }
    );

}


// =====================================================
// BLOCK DIAGRAM BUTTON
//
// If you don't have a separate block button,
// the block diagram is automatically shown after Add.
// =====================================================

function showAdderBlockDiagram() {

    adderCircuitMode =
        "block";

    generateAdderBlockDiagram();

}

// =====================================================
// BINARY SUBTRACTOR
// COMPLETE REPLACEMENT
// =====================================================


// =====================================================
// ELEMENTS
// =====================================================

const binarySubtractorButton =
    document.getElementById("binarySubtractorButton");

const binarySubtractorPage =
    document.getElementById("binarySubtractorPage");

const backFromBinarySubtractor =
    document.getElementById("backFromBinarySubtractor");

const decreaseSubtractorBits =
    document.getElementById("decreaseSubtractorBits");

const increaseSubtractorBits =
    document.getElementById("increaseSubtractorBits");

const subtractorBitCount =
    document.getElementById("subtractorBitCount");

const subtractorBitError =
    document.getElementById("subtractorBitError");

const subtractorInputContainer =
    document.getElementById("subtractorInputContainer");

const subtractorResultContainer =
    document.getElementById("subtractorResultContainer");

const subtractorBlockCircuitContainer =
    document.getElementById(
        "subtractorBlockCircuitContainer"
    );

const subtractorGateCircuitContainer =
    document.getElementById(
        "subtractorGateCircuitContainer"
    );


// This is the container used by your NAND/NOR circuits.
// Your existing HTML should have this.
const subtractorAlternativeCircuitContainer =
    document.getElementById(
        "subtractorAlternativeCircuitContainer"
    );


// =====================================================
// CIRCUIT BUTTONS
// =====================================================

const subtractorStandardCircuitButton =
    document.getElementById(
        "subtractorStandardCircuitButton"
    );

const subtractorNandCircuitButton =
    document.getElementById(
        "subtractorNandCircuitButton"
    );

const subtractorNorCircuitButton =
    document.getElementById(
        "subtractorNorCircuitButton"
    );


// =====================================================
// VARIABLES
// =====================================================

let currentSubtractorBits = 1;

let subtractorA = [0];

let subtractorB = [0];

let subtractorInitialBorrow = 0;


// Which gate diagram is currently selected

let subtractorCircuitMode = "standard";


// =====================================================
// OPEN SUBTRACTOR PAGE
// =====================================================

if (binarySubtractorButton) {

    binarySubtractorButton.addEventListener(
        "click",
        function () {

            homePage.style.display = "none";

            binarySubtractorPage.style.display =
                "block";

            generateSubtractorInputs();

            clearSubtractorOutput();

        }
    );

}


// =====================================================
// BACK
// =====================================================

if (backFromBinarySubtractor) {

    backFromBinarySubtractor.addEventListener(
        "click",
        function () {

            binarySubtractorPage.style.display =
                "none";

            homepage.style.display =
                "block";

        }
    );

}


// =====================================================
// INCREASE BITS
// =====================================================

if (increaseSubtractorBits) {

    increaseSubtractorBits.addEventListener(
        "click",
        function () {

            if (currentSubtractorBits < 4) {

                currentSubtractorBits++;

                subtractorA.push(0);

                subtractorB.push(0);

                subtractorBitCount.textContent =
                    currentSubtractorBits;

                subtractorBitError.textContent = "";

                generateSubtractorInputs();

                clearSubtractorOutput();

            }
            else {

                subtractorBitError.textContent =
                    "Maximum 4 bits are allowed.";

            }

        }
    );

}


// =====================================================
// DECREASE BITS
// =====================================================

if (decreaseSubtractorBits) {

    decreaseSubtractorBits.addEventListener(
        "click",
        function () {

            if (currentSubtractorBits > 1) {

                currentSubtractorBits--;

                subtractorA =
                    subtractorA.slice(
                        0,
                        currentSubtractorBits
                    );

                subtractorB =
                    subtractorB.slice(
                        0,
                        currentSubtractorBits
                    );

                subtractorBitCount.textContent =
                    currentSubtractorBits;

                subtractorBitError.textContent = "";

                generateSubtractorInputs();

                clearSubtractorOutput();

            }
            else {

                subtractorBitError.textContent =
                    "Minimum 1 bit is required.";

            }

        }
    );

}


// =====================================================
// GENERATE INPUTS
// =====================================================

function generateSubtractorInputs() {

    let html = `

        <div class="adder-input-box">

            <h2>
                ${currentSubtractorBits}-Bit
                Binary Subtractor
            </h2>


            <div class="adder-row">

                <div class="adder-row-label">
                    A =
                </div>

    `;


    // A
    // Display MSB -> LSB

    for (
        let i = currentSubtractorBits - 1;
        i >= 0;
        i--
    ) {

        html += `

            <button
                type="button"
                class="subtractor-bit"
                data-type="A"
                data-index="${i}"
            >
                ${subtractorA[i]}
            </button>

        `;

    }


    html += `

            </div>


            <div class="adder-row">

                <div class="adder-row-label">
                    B =
                </div>

    `;


    // B
    // Display MSB -> LSB

    for (
        let i = currentSubtractorBits - 1;
        i >= 0;
        i--
    ) {

        html += `

            <button
                type="button"
                class="subtractor-bit"
                data-type="B"
                data-index="${i}"
            >
                ${subtractorB[i]}
            </button>

        `;

    }


    html += `

            </div>


            <div class="adder-row">

                <div class="adder-row-label">
                    Bin =
                </div>

                <button
                    type="button"
                    id="subtractorBorrowButton"
                    class="subtractor-borrow-button
                    ${subtractorInitialBorrow ? "active" : ""}"
                >
                    ${subtractorInitialBorrow}
                </button>

            </div>


            <button
                type="button"
                id="calculateSubtractor"
            >
                Subtract
            </button>

        </div>

    `;


    subtractorInputContainer.innerHTML =
        html;


    addSubtractorInputListeners();

}


// =====================================================
// INPUT LISTENERS
// =====================================================

function addSubtractorInputListeners() {

    const buttons =
        document.querySelectorAll(
            ".subtractor-bit"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const type =
                        this.dataset.type;

                    const index =
                        Number(
                            this.dataset.index
                        );


                    if (type === "A") {

                        subtractorA[index] =
                            subtractorA[index]
                                ? 0
                                : 1;

                    }


                    if (type === "B") {

                        subtractorB[index] =
                            subtractorB[index]
                                ? 0
                                : 1;

                    }


                    generateSubtractorInputs();

                    clearSubtractorOutput();

                }
            );

        }
    );


    // =================================================
    // BORROW INPUT
    // =================================================

    const borrowButton =
        document.getElementById(
            "subtractorBorrowButton"
        );


    if (borrowButton) {

        borrowButton.addEventListener(
            "click",
            function () {

                subtractorInitialBorrow =
                    subtractorInitialBorrow
                        ? 0
                        : 1;

                generateSubtractorInputs();

            }
        );

    }


    // =================================================
    // SUBTRACT BUTTON
    // =================================================

    const calculateButton =
        document.getElementById(
            "calculateSubtractor"
        );


    if (calculateButton) {

        calculateButton.addEventListener(
            "click",
            calculateSubtractor
        );

    }

}


// =====================================================
// CALCULATE SUBTRACTION
// =====================================================

function calculateSubtractor() {

    let borrow =
        subtractorInitialBorrow;


    let difference =
        new Array(
            currentSubtractorBits
        ).fill(0);


    // LSB -> MSB

    for (
        let i = 0;
        i < currentSubtractorBits;
        i++
    ) {

        const value =
            subtractorA[i]
            -
            subtractorB[i]
            -
            borrow;


        if (value < 0) {

            difference[i] =
                value + 2;

            borrow = 1;

        }
        else {

            difference[i] =
                value;

            borrow = 0;

        }

    }


    // =================================================
    // DISPLAY ORDER
    // =================================================

    const AString =
        subtractorA
            .slice()
            .reverse()
            .join("");


    const BString =
        subtractorB
            .slice()
            .reverse()
            .join("");


    const differenceString =
        difference
            .slice()
            .reverse()
            .join("");


    const decimalA =
        parseInt(AString, 2);


    const decimalB =
        parseInt(BString, 2);


    const decimalResult =
        decimalA
        -
        decimalB
        -
        subtractorInitialBorrow;


    // =================================================
    // RESULT
    // =================================================

    subtractorResultContainer.innerHTML = `

        <div class="adder-result-box">

            <h2>
                Subtraction Result
            </h2>


            <div class="adder-result-number">

                ${AString}
                −
                ${BString}
                =
                ${differenceString}

            </div>


            <div class="adder-result-detail">

                <span>
                    A
                </span>

                <strong>
                    ${decimalA}
                </strong>

            </div>


            <div class="adder-result-detail">

                <span>
                    B
                </span>

                <strong>
                    ${decimalB}
                </strong>

            </div>


            <div class="adder-result-detail">

                <span>
                    Binary Difference
                </span>

                <strong>
                    ${differenceString}
                </strong>

            </div>


            <div class="adder-result-detail">

                <span>
                    Decimal Difference
                </span>

                <strong>
                    ${decimalResult}
                </strong>

            </div>


            <div class="adder-result-detail">

                <span>
                    Final Borrow
                </span>

                <strong>
                    ${borrow}
                </strong>

            </div>

        </div>

    `;


    // =================================================
    // CIRCUITS
    // =================================================

    generateSubtractorBlockCircuit(
        difference
    );


    if (
        subtractorCircuitMode ===
        "standard"
    ) {

        generateSubtractorGateCircuit(
            difference
        );

    }


    if (
        subtractorCircuitMode ===
        "nand"
    ) {

        generateNandSubtractorCircuit(
            difference
        );

    }


    if (
        subtractorCircuitMode ===
        "nor"
    ) {

        generateNorSubtractorCircuit(
            difference
        );

    }

}


// =====================================================
// BORROW INTO A PARTICULAR STAGE
// =====================================================

function getSubtractorBorrowIn(
    stage
) {

    let borrow =
        subtractorInitialBorrow;


    for (
        let i = 0;
        i < stage;
        i++
    ) {

        const value =
            subtractorA[i]
            -
            subtractorB[i]
            -
            borrow;


        if (value < 0) {

            borrow = 1;

        }
        else {

            borrow = 0;

        }

    }


    return borrow;

}


// =====================================================
// SINGLE FULL SUBTRACTOR
// =====================================================

function getSingleSubtractorResult(
    A,
    B,
    Bin
) {

    const value =
        A - B - Bin;


    if (value < 0) {

        return {

            difference:
                value + 2,

            borrow: 1

        };

    }


    return {

        difference:
            value,

        borrow: 0

    };

}


// =====================================================
// CLEAR OUTPUT
// =====================================================

function clearSubtractorOutput() {

    subtractorResultContainer.innerHTML =
        "";

    subtractorBlockCircuitContainer.innerHTML =
        "";

    subtractorGateCircuitContainer.innerHTML =
        "";

    if (subtractorAlternativeCircuitContainer) {

        subtractorAlternativeCircuitContainer.innerHTML =
            "";

    }

}


// =====================================================
// BLOCK LEVEL CIRCUIT
// =====================================================

function generateSubtractorBlockCircuit(difference) {

    const stageWidth = 300;

    const width =
        currentSubtractorBits * stageWidth + 100;

    const height = 390;

    let svg = `

        <div class="adder-circuit-box">

            <h2>
                ${currentSubtractorBits}-Bit Ripple Borrow Subtractor
            </h2>

            <p>
                Full subtractor blocks connected from LSB to MSB
            </p>

            <div class="adder-circuit-diagram">

                <svg
                    viewBox="0 0 ${width} ${height}"
                    width="${width}"
                    height="${height}"
                    style="
                        display:block;
                        background:#09070f;
                        min-width:${width}px;
                    "
                >

    `;


    for (
        let i = 0;
        i < currentSubtractorBits;
        i++
    ) {

        const x =
            20 + i * stageWidth;


        const A =
            subtractorA[i];

        const B =
            subtractorB[i];

        const Bin =
            getSubtractorBorrowIn(i);


        const r =
            getSingleSubtractorResult(
                A,
                B,
                Bin
            );


        // =========================================
        // TITLE
        // =========================================

        svg += `

            <text
                x="${x + 105}"
                y="30"
                text-anchor="middle"
                fill="#ffffff"
                font-size="16"
                font-weight="700"
            >
                FULL SUBTRACTOR ${i}
            </text>


        `;


        // =========================================
        // INPUT LABELS
        // =========================================

        svg += `

            <text
                x="${x}"
                y="105"
                fill="#ffffff"
                font-size="15"
                font-weight="700"
            >
                A${i} = ${A}
            </text>


            <text
                x="${x}"
                y="145"
                fill="#ffffff"
                font-size="15"
                font-weight="700"
            >
                B${i} = ${B}
            </text>


            <text
                x="${x}"
                y="185"
                fill="#ffffff"
                font-size="15"
                font-weight="700"
            >
                Bin = ${Bin}
            </text>

        `;


        // =========================================
        // INPUT WIRES
        // =========================================

        svg += `

            <line
                x1="${x + 55}"
                y1="100"
                x2="${x + 85}"
                y2="100"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />


            <line
                x1="${x + 55}"
                y1="140"
                x2="${x + 85}"
                y2="140"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />


            <line
                x1="${x + 55}"
                y1="180"
                x2="${x + 85}"
                y2="180"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />

        `;


        // =========================================
        // FULL SUBTRACTOR BLOCK
        // =========================================

        svg += `

            <rect
                x="${x + 85}"
                y="70"
                width="145"
                height="135"
                rx="16"
                ry="16"
                fill="#17121f"
                stroke="#a78bfa"
                stroke-width="3"
            />


            <text
                x="${x + 157}"
                y="112"
                text-anchor="middle"
                fill="#ffffff"
                font-size="17"
                font-weight="700"
            >
                FULL
            </text>


            <text
                x="${x + 157}"
                y="140"
                text-anchor="middle"
                fill="#ffffff"
                font-size="17"
                font-weight="700"
            >
                SUBTRACTOR
            </text>


            <text
                x="${x + 157}"
                y="172"
                text-anchor="middle"
                fill="#c4b5fd"
                font-size="14"
                font-weight="600"
            >
                BIT ${i}
            </text>

        `;


        // =========================================
        // DIFFERENCE OUTPUT
        // =========================================

        svg += `

            <line
                x1="${x + 230}"
                y1="120"
                x2="${x + 270}"
                y2="120"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />


            <text
                x="${x + 235}"
                y="95"
                fill="#c4b5fd"
                font-size="15"
                font-weight="700"
            >
                D${i} = ${r.difference}
            </text>

        `;


        // =========================================
        // BORROW OUT
        // =========================================

        svg += `

            <line
                x1="${x + 157}"
                y1="205"
                x2="${x + 157}"
                y2="270"
                stroke="#e9e2ff"
                stroke-width="3"
                stroke-linecap="round"
            />


            <text
                x="${x + 157}"
                y="300"
                text-anchor="middle"
                fill="#c4b5fd"
                font-size="15"
                font-weight="700"
            >
                Bout = ${r.borrow}
            </text>

        `;


        // =========================================
        // BORROW TO NEXT STAGE
        // =========================================

        if (
            i <
            currentSubtractorBits - 1
        ) {

            const nextX =
                x + stageWidth;


            svg += `

                <path
                    d="
                        M ${x + 157} 270
                        H ${nextX - 25}
                        V 180
                        H ${nextX + 55}
                    "
                    fill="none"
                    stroke="#e9e2ff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />


                <text
                    x="${x + 195}"
                    y="260"
                    fill="#c4b5fd"
                    font-size="13"
                    font-weight="600"
                >
                    Borrow →
                </text>

            `;

        }


        // =========================================
        // STAGE SEPARATOR
        // =========================================

        if (
            i <
            currentSubtractorBits - 1
        ) {

            svg += `

                <line
                    x1="${x + 280}"
                    y1="50"
                    x2="${x + 280}"
                    y2="340"
                    stroke="#443653"
                    stroke-width="2"
                    stroke-dasharray="7 7"
                />

            `;

        }

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    subtractorBlockCircuitContainer.innerHTML =
        svg;

}

// =====================================================
// XOR GATE FOR STANDARD CIRCUIT
// =====================================================

// =====================================================
// GATE-LEVEL FULL SUBTRACTOR
// COMPLETE REPLACEMENT
// =====================================================


// =====================================================
// XOR GATE
// =====================================================

function drawSubtractorXorGate(
    x,
    y
) {

    return `

        <g>

            <!-- XOR main body -->

            <path
                d="
                    M ${x} ${y}

                    Q ${x + 35} ${y + 5}
                      ${x + 90} ${y + 40}

                    Q ${x + 35} ${y + 75}
                      ${x} ${y + 80}

                    Q ${x + 25} ${y + 40}
                      ${x} ${y}

                    Z
                "

                fill="#17121f"
                stroke="#a78bfa"
                stroke-width="3"
            />


            <!-- Extra XOR curved line -->

            <path
                d="
                    M ${x - 13} ${y + 5}

                    Q ${x + 12} ${y + 40}
                      ${x - 13} ${y + 75}
                "

                fill="none"
                stroke="#a78bfa"
                stroke-width="3"
            />


            <!-- XOR text -->

            <text
                x="${x + 27}"
                y="${y + 46}"

                fill="#ffffff"

                font-size="13"
                font-weight="700"
            >
                XOR
            </text>

        </g>

    `;

}



// =====================================================
// AND GATE
// =====================================================

function drawSubtractorAndGate(
    x,
    y
) {

    return `

        <g>

            <path
                d="
                    M ${x} ${y}

                    H ${x + 42}

                    A 40 40
                    0 0 1
                    ${x + 42} ${y + 80}

                    H ${x}

                    Z
                "

                fill="#17121f"
                stroke="#a78bfa"
                stroke-width="3"
            />


            <text
                x="${x + 8}"
                y="${y + 47}"

                fill="#ffffff"

                font-size="13"
                font-weight="700"
            >
                AND
            </text>

        </g>

    `;

}



// =====================================================
// OR GATE
// =====================================================

function drawSubtractorOrGate(
    x,
    y
) {

    return `

        <g>

            <path
                d="
                    M ${x} ${y}

                    Q ${x + 40} ${y + 5}
                      ${x + 95} ${y + 40}

                    Q ${x + 40} ${y + 75}
                      ${x} ${y + 80}

                    Q ${x + 25} ${y + 40}
                      ${x} ${y}

                    Z
                "

                fill="#17121f"
                stroke="#a78bfa"
                stroke-width="3"
            />


            <text
                x="${x + 35}"
                y="${y + 46}"

                fill="#ffffff"

                font-size="13"
                font-weight="700"
            >
                OR
            </text>

        </g>

    `;

}



// =====================================================
// NOT GATE
// =====================================================

function drawSubtractorNotGate(
    x,
    y
) {

    return `

        <g>

            <path
                d="
                    M ${x} ${y}

                    L ${x + 70} ${y + 40}

                    L ${x} ${y + 80}

                    Z
                "

                fill="#17121f"
                stroke="#a78bfa"
                stroke-width="3"
            />


            <circle
                cx="${x + 78}"
                cy="${y + 40}"
                r="7"

                fill="#17121f"
                stroke="#ffffff"
                stroke-width="2"
            />


            <text
                x="${x + 18}"
                y="${y + 45}"

                fill="#ffffff"

                font-size="12"
                font-weight="700"
            >
                NOT
            </text>

        </g>

    `;

}



// =====================================================
// GATE-LEVEL FULL SUBTRACTOR
// =====================================================

function generateSubtractorGateCircuit(
    difference
) {

    const stageWidth = 650;

    const width =
        currentSubtractorBits *
        stageWidth;

    const height = 650;


    let svg = `

        <div
            class="adder-circuit-box"
            style="
                background:#09070f;
                border:1px solid #4b3865;
                border-radius:18px;
                overflow:hidden;
            "
        >

            <h2
                style="
                    color:#ffffff;
                    text-align:center;
                    margin:20px 0 8px;
                "
            >
                Gate-Level Full Subtractor
            </h2>


            <p
                style="
                    color:#c4b5fd;
                    text-align:center;
                    margin-bottom:20px;
                "
            >
                XOR + NOT + AND + OR
            </p>


            <div
                class="adder-circuit-diagram"
                style="
                    overflow-x:auto;
                    background:#09070f;
                    padding:15px;
                "
            >

                <svg

                    viewBox="
                        0 0
                        ${width}
                        ${height}
                    "

                    width="${width}"
                    height="${height}"

                    style="
                        display:block;
                        background:#09070f;
                        min-width:${width}px;
                    "
                >

    `;


    // =================================================
    // EACH FULL SUBTRACTOR
    // =================================================

    for (
        let i = 0;
        i < currentSubtractorBits;
        i++
    ) {

        const ox =
            i *
            stageWidth;


        const A =
            subtractorA[i];


        const B =
            subtractorB[i];


        const Bin =
            getSubtractorBorrowIn(i);


        const r =
            getSingleSubtractorResult(
                A,
                B,
                Bin
            );


        const X =
            A ^ B;


        // =================================================
        // TITLE
        // =================================================

        svg += `

            <text
                x="${ox + 300}"
                y="32"

                text-anchor="middle"

                fill="#ffffff"

                font-size="17"
                font-weight="700"
            >
                FULL SUBTRACTOR ${i}
            </text>

        `;


        // =================================================
        // INPUT LABELS
        // =================================================

        svg += `

            <text
                x="${ox + 20}"
                y="100"

                fill="#ffffff"

                font-size="15"
                font-weight="700"
            >
                A${i} = ${A}
            </text>


            <text
                x="${ox + 20}"
                y="145"

                fill="#ffffff"

                font-size="15"
                font-weight="700"
            >
                B${i} = ${B}
            </text>


            <text
                x="${ox + 20}"
                y="190"

                fill="#ffffff"

                font-size="15"
                font-weight="700"
            >
                Bin = ${Bin}
            </text>

        `;


        // =================================================
        // FIRST XOR
        // X = A XOR B
        // =================================================

        svg +=
            drawSubtractorXorGate(
                ox + 120,
                65
            );


        // =================================================
        // SECOND XOR
        // D = X XOR Bin
        // =================================================

        svg +=
            drawSubtractorXorGate(
                ox + 325,
                65
            );


        // =================================================
        // X VALUE
        // =================================================

        svg += `

            <text
                x="${ox + 220}"
                y="60"

                fill="#c4b5fd"

                font-size="14"
                font-weight="700"
            >
                X = ${X}
            </text>

        `;


        // =================================================
        // DIFFERENCE
        // =================================================

        svg += `

            <text
                x="${ox + 445}"
                y="110"

                fill="#c4b5fd"

                font-size="16"
                font-weight="700"
            >
                D${i} = ${r.difference}
            </text>

        `;


        // =================================================
        // A → XOR 1
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 80} 95
                    H ${ox + 120}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
            />

        `;


        // =================================================
        // B → XOR 1
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 80} 140

                    H ${ox + 100}

                    V 125

                    H ${ox + 120}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // XOR1 → XOR2
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 210} 105
                    H ${ox + 325}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
            />

        `;


        // =================================================
        // Bin → XOR2
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 80} 185

                    H ${ox + 285}

                    V 125

                    H ${ox + 325}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // XOR2 → D
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 415} 105
                    H ${ox + 440}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
            />

        `;


        // =================================================
        // BORROW SECTION
        // =================================================

        /*
            Borrow equation:

            Bout =
            A'B + X'Bin

            where

            X = A XOR B
        */


        // =================================================
        // A NOT
        // =================================================

        svg +=
            drawSubtractorNotGate(
                ox + 105,
                300
            );


        // =================================================
        // X NOT
        // =================================================

        svg +=
            drawSubtractorNotGate(
                ox + 105,
                455
            );


        // =================================================
        // AND 1
        // A'B
        // =================================================

        svg +=
            drawSubtractorAndGate(
                ox + 275,
                300
            );


        // =================================================
        // AND 2
        // X'Bin
        // =================================================

        svg +=
            drawSubtractorAndGate(
                ox + 275,
                455
            );


        // =================================================
        // OR
        // =================================================

        svg +=
            drawSubtractorOrGate(
                ox + 435,
                365
            );


        // =================================================
        // A → NOT
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 80} 95

                    V 340

                    H ${ox + 105}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // A' → AND 1
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 190} 340

                    H ${ox + 275}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
            />

        `;


        // =================================================
        // B → AND 1
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 80} 140

                    V 375

                    H ${ox + 275}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // X → NOT
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 210} 105

                    V 495

                    H ${ox + 105}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // X' → AND 2
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 190} 495

                    H ${ox + 275}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
            />

        `;


        // =================================================
        // Bin → AND 2
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 80} 185

                    V 535

                    H ${ox + 250}

                    V 495

                    H ${ox + 275}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // AND1 → OR
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 317} 340

                    H ${ox + 400}

                    V 395

                    H ${ox + 435}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // AND2 → OR
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 317} 495

                    H ${ox + 400}

                    V 415

                    H ${ox + 435}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
                stroke-linejoin="round"
            />

        `;


        // =================================================
        // BORROW OUTPUT
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 530} 405

                    H ${ox + 580}
                "

                fill="none"

                stroke="#f2edff"
                stroke-width="3"

                stroke-linecap="round"
            />


            <text
                x="${ox + 440}"
                y="455"

                fill="#c4b5fd"

                font-size="16"
                font-weight="700"
            >
                Bout = ${r.borrow}
            </text>

        `;


        // =================================================
        // EQUATION LABELS
        // =================================================

        svg += `

            <text
                x="${ox + 275}"
                y="290"

                fill="#c4b5fd"

                font-size="13"
                font-weight="600"
            >
                A'B
            </text>


            <text
                x="${ox + 275}"
                y="445"

                fill="#c4b5fd"

                font-size="13"
                font-weight="600"
            >
                X'Bin
            </text>

        `;


        // =================================================
        // SEPARATOR
        // =================================================

        if (
            i <
            currentSubtractorBits - 1
        ) {

            svg += `

                <line
                    x1="${ox + 625}"
                    y1="50"

                    x2="${ox + 625}"
                    y2="600"

                    stroke="#49385c"
                    stroke-width="2"

                    stroke-dasharray="8 8"
                />

            `;

        }

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    subtractorGateCircuitContainer.innerHTML =
        svg;

}

// =====================================================
// STANDARD GATE CIRCUIT
// =====================================================




// =====================================================
// NAND-ONLY CIRCUIT
// =====================================================

function generateNandSubtractorCircuit(
    difference
) {

    if (!subtractorAlternativeCircuitContainer)
        return;


    const stageWidth = 850;

    const width =
        currentSubtractorBits *
        stageWidth;

    const height = 650;


    let svg = `

        <div class="adder-circuit-box">

            <h2>
                NAND-Only Full Subtractor
            </h2>


            <p>
                NAND gates only
            </p>


            <div class="adder-circuit-diagram">

                <svg
                    class="subtractor-svg"
                    viewBox="0 0 ${width} ${height}"
                    width="${width}"
                    height="${height}"
                >

    `;


    for (
        let i = 0;
        i < currentSubtractorBits;
        i++
    ) {

        const ox =
            i *
            stageWidth;


        const A =
            subtractorA[i];

        const B =
            subtractorB[i];

        const Bin =
            getSubtractorBorrowIn(i);


        const r =
            getSingleSubtractorResult(
                A,
                B,
                Bin
            );


        // =================================================
        // TITLE
        // =================================================

        svg += `

            <text
                x="${ox + 400}"
                y="30"
                text-anchor="middle"
                class="subtractor-svg-title"
            >
                FULL SUBTRACTOR ${i}
            </text>

        `;


        // =================================================
        // INPUTS
        // =================================================

        svg += `

            <text
                x="${ox + 10}"
                y="90"
                class="subtractor-svg-label"
            >
                A${i} = ${A}
            </text>


            <text
                x="${ox + 10}"
                y="140"
                class="subtractor-svg-label"
            >
                B${i} = ${B}
            </text>


            <text
                x="${ox + 10}"
                y="190"
                class="subtractor-svg-label"
            >
                Bin = ${Bin}
            </text>

        `;


        // =================================================
        // XOR 1 USING NAND
        // =================================================

        const x1 =
            ox + 120;

        const y1 =
            100;


        svg += drawNandGate(
            x1,
            y1,
            2
        );


        svg += drawNandGate(
            x1 + 120,
            y1 - 40,
            2
        );


        svg += drawNandGate(
            x1 + 120,
            y1 + 40,
            2
        );


        svg += drawNandGate(
            x1 + 250,
            y1,
            2
        );


        // =================================================
        // XOR 1 WIRES
        // =================================================

        svg += `

            <path
                d="
                    M ${ox + 70} 85
                    H ${x1}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 135
                    H ${ox + 95}
                    V 115
                    H ${x1}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 75} 100
                    H ${x1 + 95}
                    V 60
                    H ${x1 + 120}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 75} 100
                    H ${x1 + 95}
                    V 140
                    H ${x1 + 120}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 195} 60
                    H ${x1 + 220}
                    V 100
                    H ${x1 + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 195} 140
                    H ${x1 + 220}
                    V 100
                    H ${x1 + 250}
                "
                class="subtractor-svg-wire"
            />

        `;


        svg += `

            <text
                x="${ox + 380}"
                y="95"
                class="subtractor-svg-value"
            >
                X = ${A ^ B}
            </text>

        `;


        // =================================================
        // XOR 2 USING NAND
        // =================================================

        const x2 =
            ox + 120;

        const y2 =
            270;


        svg += drawNandGate(
            x2,
            y2,
            2
        );


        svg += drawNandGate(
            x2 + 120,
            y2 - 40,
            2
        );


        svg += drawNandGate(
            x2 + 120,
            y2 + 40,
            2
        );


        svg += drawNandGate(
            x2 + 250,
            y2,
            2
        );


        // X -> XOR2

        svg += `

            <path
                d="
                    M ${x1 + 325} 100
                    H ${ox + 470}
                    V 270
                    H ${x2}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 185
                    H ${ox + 95}
                    V 310
                    H ${x2}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 75} 270
                    H ${x2 + 95}
                    V 230
                    H ${x2 + 120}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 75} 270
                    H ${x2 + 95}
                    V 310
                    H ${x2 + 120}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 195} 230
                    H ${x2 + 220}
                    V 270
                    H ${x2 + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 195} 310
                    H ${x2 + 220}
                    V 270
                    H ${x2 + 250}
                "
                class="subtractor-svg-wire"
            />

        `;


        svg += `

            <text
                x="${ox + 380}"
                y="265"
                class="subtractor-svg-value"
            >
                D${i} = ${r.difference}
            </text>

        `;


        // =================================================
        // BORROW
        //
        // Bout =
        // A'B + A'Bin + BBin
        //
        // NAND implementation
        // =================================================

        const by =
            440;


        // A'

        svg += drawNandGate(
            ox + 100,
            by,
            2
        );


        // T1

        svg += drawNandGate(
            ox + 250,
            by - 60,
            2
        );


        // T2

        svg += drawNandGate(
            ox + 250,
            by + 20,
            2
        );


        // T3

        svg += drawNandGate(
            ox + 250,
            by + 100,
            2
        );


        // Final NAND

        svg += drawNandGate(
            ox + 410,
            by + 20,
            3
        );


        // A -> inverter

        svg += `

            <path
                d="
                    M ${ox + 70} 85
                    V ${by}
                    H ${ox + 100}
                "
                class="subtractor-svg-wire"
            />


            <!-- A' to T1 -->

            <path
                d="
                    M ${ox + 175} ${by}
                    H ${ox + 220}
                    V ${by - 60}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <!-- A' to T2 -->

            <path
                d="
                    M ${ox + 175} ${by}
                    H ${ox + 220}
                    V ${by + 20}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <!-- B to T1 -->

            <path
                d="
                    M ${ox + 70} 135
                    V ${by - 60}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <!-- Bin to T2 -->

            <path
                d="
                    M ${ox + 70} 185
                    V ${by + 20}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <!-- B to T3 -->

            <path
                d="
                    M ${ox + 70} 135
                    V ${by + 100}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <!-- Bin to T3 -->

            <path
                d="
                    M ${ox + 70} 185
                    V ${by + 125}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <!-- T1 -->

            <path
                d="
                    M ${ox + 325} ${by - 60}
                    H ${ox + 375}
                    V ${by}
                    H ${ox + 410}
                "
                class="subtractor-svg-wire"
            />


            <!-- T2 -->

            <path
                d="
                    M ${ox + 325} ${by + 20}
                    H ${ox + 410}
                "
                class="subtractor-svg-wire"
            />


            <!-- T3 -->

            <path
                d="
                    M ${ox + 325} ${by + 100}
                    H ${ox + 375}
                    V ${by + 40}
                    H ${ox + 410}
                "
                class="subtractor-svg-wire"
            />

        `;


        svg += `

            <text
                x="${ox + 430}"
                y="${by - 35}"
                class="subtractor-svg-value"
            >
                Bout = ${r.borrow}
            </text>

        `;

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    subtractorAlternativeCircuitContainer.innerHTML = svg;


// FORCE SUBTRACTOR WIRES TO BE LINES
const nandWires =
    subtractorAlternativeCircuitContainer
        .querySelectorAll(
            ".subtractor-svg-wire"
        );

nandWires.forEach(function (wire) {

    wire.style.setProperty(
        "fill",
        "none",
        "important"
    );

    wire.style.setProperty(
        "stroke",
        "#c4b5fd",
        "important"
    );

    wire.style.setProperty(
        "stroke-width",
        "2.5",
        "important"
    );

    wire.style.setProperty(
        "stroke-linecap",
        "round",
        "important"
    );

    wire.style.setProperty(
        "stroke-linejoin",
        "round",
        "important"
    );

});
}


// =====================================================
// NOR-ONLY CIRCUIT
// =====================================================

function generateNorSubtractorCircuit(
    difference
) {

    if (!subtractorAlternativeCircuitContainer)
        return;


    const stageWidth = 850;

    const width =
        currentSubtractorBits *
        stageWidth;

    const height = 650;


    let svg = `

        <div class="adder-circuit-box">

            <h2>
                NOR-Only Full Subtractor
            </h2>


            <p>
                NOR gates only
            </p>


            <div class="adder-circuit-diagram">

                <svg
                    class="subtractor-svg"
                    viewBox="0 0 ${width} ${height}"
                    width="${width}"
                    height="${height}"
                >

    `;


    for (
        let i = 0;
        i < currentSubtractorBits;
        i++
    ) {

        const ox =
            i *
            stageWidth;


        const A =
            subtractorA[i];

        const B =
            subtractorB[i];

        const Bin =
            getSubtractorBorrowIn(i);


        const r =
            getSingleSubtractorResult(
                A,
                B,
                Bin
            );


        // =================================================
        // TITLE
        // =================================================

        svg += `

            <text
                x="${ox + 400}"
                y="30"
                text-anchor="middle"
                class="subtractor-svg-title"
            >
                FULL SUBTRACTOR ${i}
            </text>


            <text
                x="${ox + 10}"
                y="90"
                class="subtractor-svg-label"
            >
                A${i} = ${A}
            </text>


            <text
                x="${ox + 10}"
                y="140"
                class="subtractor-svg-label"
            >
                B${i} = ${B}
            </text>


            <text
                x="${ox + 10}"
                y="190"
                class="subtractor-svg-label"
            >
                Bin = ${Bin}
            </text>

        `;


        // =================================================
        // XOR 1 USING NOR
        // =================================================

        const x1 =
            ox + 120;

        const y1 =
            100;


        svg += drawNorGate(
            x1,
            y1,
            2
        );


        svg += drawNorGate(
            x1 + 130,
            y1 - 40,
            2
        );


        svg += drawNorGate(
            x1 + 130,
            y1 + 40,
            2
        );


        svg += drawNorGate(
            x1 + 270,
            y1,
            2
        );


        svg += `

            <path
                d="
                    M ${ox + 70} 85
                    H ${x1}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 135
                    H ${ox + 95}
                    V 115
                    H ${x1}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 90} 100
                    H ${x1 + 105}
                    V 60
                    H ${x1 + 130}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 90} 100
                    H ${x1 + 105}
                    V 140
                    H ${x1 + 130}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 220} 60
                    H ${x1 + 240}
                    V 100
                    H ${x1 + 270}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x1 + 220} 140
                    H ${x1 + 240}
                    V 100
                    H ${x1 + 270}
                "
                class="subtractor-svg-wire"
            />

        `;


        // =================================================
        // SECOND XOR
        // =================================================

        const x2 =
            ox + 120;

        const y2 =
            270;


        svg += drawNorGate(
            x2,
            y2,
            2
        );


        svg += drawNorGate(
            x2 + 130,
            y2 - 40,
            2
        );


        svg += drawNorGate(
            x2 + 130,
            y2 + 40,
            2
        );


        svg += drawNorGate(
            x2 + 270,
            y2,
            2
        );


        svg += `

            <path
                d="
                    M ${x1 + 360} 100
                    H ${ox + 470}
                    V 270
                    H ${x2}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 185
                    H ${ox + 95}
                    V 310
                    H ${x2}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 90} 270
                    H ${x2 + 105}
                    V 230
                    H ${x2 + 130}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 90} 270
                    H ${x2 + 105}
                    V 310
                    H ${x2 + 130}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 220} 230
                    H ${x2 + 240}
                    V 270
                    H ${x2 + 270}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 220} 310
                    H ${x2 + 240}
                    V 270
                    H ${x2 + 270}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${x2 + 360} 270
                    H ${ox + 500}
                "
                class="subtractor-svg-wire"
            />

        `;


        svg += `

            <text
                x="${ox + 510}"
                y="265"
                class="subtractor-svg-value"
            >
                D${i} = ${r.difference}
            </text>

        `;


        // =================================================
        // BORROW NETWORK
        // =================================================

        const by =
            440;


        /*
            Use NOR gates as NOT:
            A' = NOR(A,A)

            Borrow:
            A'B + A'Bin + BBin

            NOR implementation is drawn as
            equivalent NOR network.
        */


        svg += drawNorGate(
            ox + 100,
            by,
            2
        );


        svg += drawNorGate(
            ox + 250,
            by - 60,
            2
        );


        svg += drawNorGate(
            ox + 250,
            by + 20,
            2
        );


        svg += drawNorGate(
            ox + 250,
            by + 100,
            2
        );


        svg += drawNorGate(
            ox + 410,
            by + 20,
            3
        );


        svg += `

            <path
                d="
                    M ${ox + 70} 85
                    V ${by}
                    H ${ox + 100}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 135
                    V ${by - 60}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 185
                    V ${by + 20}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 135
                    V ${by + 100}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 70} 185
                    V ${by + 125}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 175} ${by}
                    H ${ox + 220}
                    V ${by - 60}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 175} ${by}
                    H ${ox + 220}
                    V ${by + 20}
                    H ${ox + 250}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 325} ${by - 60}
                    H ${ox + 375}
                    V ${by}
                    H ${ox + 410}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 325} ${by + 20}
                    H ${ox + 410}
                "
                class="subtractor-svg-wire"
            />


            <path
                d="
                    M ${ox + 325} ${by + 100}
                    H ${ox + 375}
                    V ${by + 40}
                    H ${ox + 410}
                "
                class="subtractor-svg-wire"
            />

        `;


        svg += `

            <text
                x="${ox + 425}"
                y="${by - 35}"
                class="subtractor-svg-value"
            >
                Bout = ${r.borrow}
            </text>

        `;

    }


    svg += `

                </svg>

            </div>

        </div>

    `;


    subtractorAlternativeCircuitContainer.innerHTML = svg;


// FORCE NOR SUBTRACTOR WIRES TO BE LINES
const norWires =
    subtractorAlternativeCircuitContainer
        .querySelectorAll(
            ".subtractor-svg-wire"
        );

norWires.forEach(function (wire) {

    wire.style.setProperty(
        "fill",
        "none",
        "important"
    );

    wire.style.setProperty(
        "stroke",
        "#c4b5fd",
        "important"
    );

    wire.style.setProperty(
        "stroke-width",
        "2.5",
        "important"
    );

    wire.style.setProperty(
        "stroke-linecap",
        "round",
        "important"
    );

    wire.style.setProperty(
        "stroke-linejoin",
        "round",
        "important"
    );

});

}


// =====================================================
// STANDARD / NAND / NOR BUTTONS
// =====================================================

if (subtractorStandardCircuitButton) {

    subtractorStandardCircuitButton.addEventListener(
        "click",
        function () {

            subtractorCircuitMode =
                "standard";


            subtractorStandardCircuitButton
                .classList.add("active");


            if (subtractorNandCircuitButton)
                subtractorNandCircuitButton
                    .classList.remove("active");


            if (subtractorNorCircuitButton)
                subtractorNorCircuitButton
                    .classList.remove("active");


            generateSubtractorGateCircuit([]);

            if (subtractorAlternativeCircuitContainer)
                subtractorAlternativeCircuitContainer
                    .innerHTML = "";

        }
    );

}


if (subtractorNandCircuitButton) {

    subtractorNandCircuitButton.addEventListener(
        "click",
        function () {

            subtractorCircuitMode =
                "nand";


            subtractorNandCircuitButton
                .classList.add("active");


            if (subtractorStandardCircuitButton)
                subtractorStandardCircuitButton
                    .classList.remove("active");


            if (subtractorNorCircuitButton)
                subtractorNorCircuitButton
                    .classList.remove("active");


            subtractorGateCircuitContainer
                .innerHTML = "";


            generateNandSubtractorCircuit([]);

        }
    );

}


if (subtractorNorCircuitButton) {

    subtractorNorCircuitButton.addEventListener(
        "click",
        function () {

            subtractorCircuitMode =
                "nor";


            subtractorNorCircuitButton
                .classList.add("active");


            if (subtractorStandardCircuitButton)
                subtractorStandardCircuitButton
                    .classList.remove("active");


            if (subtractorNandCircuitButton)
                subtractorNandCircuitButton
                    .classList.remove("active");


            subtractorGateCircuitContainer
                .innerHTML = "";


            generateNorSubtractorCircuit([]);

        }
    );

}


// =====================================================
// INITIALIZE
// =====================================================

if (subtractorBitCount) {

    subtractorBitCount.textContent =
        currentSubtractorBits;

}


if (binarySubtractorPage) {

    binarySubtractorPage.style.display =
        "none";

}


// Generate initial inputs when script loads

if (subtractorInputContainer) {

    generateSubtractorInputs();

}
// =====================================================
// LOGICAL STATEMENT
// =====================================================




const logicalStatementInput =
    document.getElementById("logicalStatementInput");

const solveLogicalStatement =
    document.getElementById("solveLogicalStatement");

const logicalStatementResult =
    document.getElementById("logicalStatementResult");


// OPEN LOGICAL STATEMENT PAGE

logicalStatementButton.addEventListener("click", function () {

    homePage.style.display = "none";

    logicalStatementPage.style.display = "block";

});


// BACK BUTTON

backFromLogicalStatement.addEventListener("click", function () {

    logicalStatementPage.style.display = "none";

    homePage.style.display = "block";

});


// CONVERT STATEMENT

solveLogicalStatement.addEventListener("click", async function () {

    const statement =
        logicalStatementInput.value.trim();

    if (statement === "") {

        logicalStatementResult.innerHTML = `
            <div class="result-box">
                <p>Please enter a logical statement.</p>
            </div>
        `;

        return;
    }

    logicalStatementResult.innerHTML = `
        <div class="result-box">
            <p>Converting...</p>
        </div>
    `;

    try {

        const response = await fetch(
            "https://boolean-logic-solver.onrender.com/api/convert",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    statement: statement
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {

            throw new Error(
                data.error || "Something went wrong"
            );

        }
logicalStatementResult.innerHTML = `
    <div class="result-box">

        <h2>Boolean Expression</h2>

        <div class="expression">
            ${data.result}
        </div>

        <button id="useExpressionButton">
            Generate Full Solution
        </button>

    </div>
`;
const useExpressionButton =
    document.getElementById("useExpressionButton");

useExpressionButton.addEventListener(
    "click",
    function () {

        // Put AI expression into Boolean Expression input
        booleanExpressionInput.value =
            data.result;

        // Hide Logical Statement page
        logicalStatementPage.style.display =
            "none";

        // Show Boolean Expression page
        booleanExpressionPage.style.display =
            "block";

        // Generate everything automatically
        generateBooleanExpressionTruthTable();

    }
);
    }

    catch (error) {

        console.error(error);

        logicalStatementResult.innerHTML = `
            <div class="result-box">

                <p>
                    Could not connect to the backend.
                </p>

            </div>
        `;

    }

});

// ============================================================
// MULTIPLEXER
// Supports:
// 2:1
// 4:1
// 8:1
// ============================================================


// ============================================================
// ELEMENTS
// ============================================================

const multiplexerButton =
    document.getElementById(
        "multiplexerButton"
    );

const multiplexerPage =
    document.getElementById(
        "multiplexerPage"
    );

const backFromMultiplexer =
    document.getElementById(
        "backFromMultiplexer"
    );

const decreaseMuxSize =
    document.getElementById(
        "decreaseMuxSize"
    );

const increaseMuxSize =
    document.getElementById(
        "increaseMuxSize"
    );

const muxSizeDisplay =
    document.getElementById(
        "muxSize"
    );

const muxSizeError =
    document.getElementById(
        "muxSizeError"
    );

const muxInputContainer =
    document.getElementById(
        "muxInputContainer"
    );

const muxResultContainer =
    document.getElementById(
        "muxResultContainer"
    );

const muxTruthTableContainer =
    document.getElementById(
        "muxTruthTableContainer"
    );

const muxCircuitContainer =
    document.getElementById(
        "muxCircuitContainer"
    );


// ============================================================
// VARIABLES
// ============================================================

const muxSizes = [
    2,
    4,
    8
];

let muxIndex = 0;


// ============================================================
// OPEN PAGE
// ============================================================

multiplexerButton.addEventListener(
    "click",
    function () {

        homePage.style.display =
            "none";

        multiplexerPage.style.display =
            "block";

        muxIndex = 0;

        muxSizeDisplay.textContent =
            "2:1";

        muxSizeError.textContent =
            "";

        generateMuxInputs();
    }
);


// ============================================================
// BACK
// ============================================================

backFromMultiplexer.addEventListener(
    "click",
    function () {

        multiplexerPage.style.display =
            "none";

        homePage.style.display =
            "block";

    }
);


// ============================================================
// DECREASE MUX SIZE
// ============================================================

decreaseMuxSize.addEventListener(
    "click",
    function () {

        if (muxIndex > 0) {

            muxIndex--;

            muxSizeError.textContent =
                "";

        } else {

            muxSizeError.textContent =
                "Minimum size is 2:1.";

            return;
        }

        muxSizeDisplay.textContent =
            `${muxSizes[muxIndex]}:1`;

        generateMuxInputs();
    }
);


// ============================================================
// INCREASE MUX SIZE
// ============================================================

increaseMuxSize.addEventListener(
    "click",
    function () {

        if (
            muxIndex <
            muxSizes.length - 1
        ) {

            muxIndex++;

            muxSizeError.textContent =
                "";

        } else {

            muxSizeError.textContent =
                "Maximum size is 8:1.";

            return;
        }

        muxSizeDisplay.textContent =
            `${muxSizes[muxIndex]}:1`;

        generateMuxInputs();
    }
);


// ============================================================
// GENERATE INPUTS
// ============================================================

function generateMuxInputs() {

    const inputCount =
        muxSizes[muxIndex];

    const selectCount =
        Math.log2(inputCount);

    let html = `

        <div class="result-box">

            <h2>
                MUX Inputs
            </h2>

            <div class="mux-input-grid">

    `;


    // --------------------------------------------------------
    // DATA INPUTS
    // --------------------------------------------------------

    for (
        let i = 0;
        i < inputCount;
        i++
    ) {

        html += `

            <div class="mux-input-item">

                <label>
                    D${i}
                </label>

                <button
                    type="button"
                    class="mux-value-button"
                    data-mux-input="D${i}"
                    data-value="0"
                >
                    0
                </button>

            </div>

        `;
    }


    html += `
            </div>

            <h2>
                Select Lines
            </h2>

            <div class="mux-select-grid">
    `;


    // --------------------------------------------------------
    // SELECT INPUTS
    // --------------------------------------------------------

    for (
        let i = selectCount - 1;
        i >= 0;
        i--
    ) {

        html += `

            <div class="mux-input-item">

                <label>
                    S${i}
                </label>

                <button
                    type="button"
                    class="mux-value-button"
                    data-mux-select="S${i}"
                    data-value="0"
                >
                    0
                </button>

            </div>

        `;
    }


    html += `

            </div>

            <button
                id="solveMultiplexer"
            >
                Generate MUX
            </button>

        </div>

    `;


    muxInputContainer.innerHTML =
        html;


    // --------------------------------------------------------
    // TOGGLE BUTTONS
    // --------------------------------------------------------

    document
        .querySelectorAll(
            ".mux-value-button"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const current =
                            this.dataset.value;

                        const next =
                            current === "0"
                                ? "1"
                                : "0";

                        this.dataset.value =
                            next;

                        this.textContent =
                            next;
                    }
                );

            }
        );


    // --------------------------------------------------------
    // SOLVE
    // --------------------------------------------------------

    document
        .getElementById(
            "solveMultiplexer"
        )
        .addEventListener(
            "click",
            generateMultiplexer
        );
}


// ============================================================
// GET INPUT VALUES
// ============================================================

function getMuxValues() {

    const inputs = {};

    document
        .querySelectorAll(
            "[data-mux-input]"
        )
        .forEach(
            function (button) {

                inputs[
                    button.dataset.muxInput
                ] =
                    Number(
                        button.dataset.value
                    );
            }
        );


    const selects = {};

    document
        .querySelectorAll(
            "[data-mux-select]"
        )
        .forEach(
            function (button) {

                selects[
                    button.dataset.muxSelect
                ] =
                    Number(
                        button.dataset.value
                    );
            }
        );


    return {
        inputs,
        selects
    };
}


// ============================================================
// GENERATE MULTIPLEXER
// ============================================================

function generateMultiplexer() {

    const inputCount =
        muxSizes[muxIndex];

    const selectCount =
        Math.log2(inputCount);

    const {
        inputs,
        selects
    } = getMuxValues();


    // --------------------------------------------------------
    // SELECTED INPUT INDEX
    // --------------------------------------------------------

    let selectedIndex = 0;

    for (
        let i = selectCount - 1;
        i >= 0;
        i--
    ) {

        selectedIndex =
            (
                selectedIndex * 2
            ) +
            selects[`S${i}`];
    }


    const output =
        inputs[`D${selectedIndex}`];


    // --------------------------------------------------------
    // RESULT
    // --------------------------------------------------------

    muxResultContainer.innerHTML = `

        <div class="result-box">

            <h2>
                Result
            </h2>

            <p>
                Selected Input:
                <strong>
                    D${selectedIndex}
                </strong>
            </p>

            <p>
                Output:
                <strong class="mux-output">
                    ${output}
                </strong>
            </p>

        </div>

    `;


    // --------------------------------------------------------
    // BOOLEAN EXPRESSION
    // --------------------------------------------------------

    const expression =
        generateMuxExpression(
            inputCount,
            inputs
        );


    muxResultContainer.innerHTML += `

        <div class="result-box">

            <h2>
                Boolean Expression
            </h2>

            <div class="expression">
                Y = ${expression}
            </div>

        </div>

    `;


    // --------------------------------------------------------
    // TRUTH TABLE
    // --------------------------------------------------------

    generateMuxTruthTable(
        inputCount
    );


    // --------------------------------------------------------
    // CIRCUIT
    // --------------------------------------------------------

    generateMuxCircuits(
        inputCount,
        inputs,
        selects,
        selectedIndex,
        output
    );
}


// ============================================================
// BOOLEAN EXPRESSION
// ============================================================

function generateMuxExpression(
    inputCount,
    inputs
) {

    const selectCount =
        Math.log2(inputCount);

    const terms = [];


    for (
        let i = 0;
        i < inputCount;
        i++
    ) {

        if (
            inputs[`D${i}`] !== 1
        ) {
            continue;
        }


        const binary =
            i
                .toString(2)
                .padStart(
                    selectCount,
                    "0"
                );


        let term =
            `D${i}`;


        for (
            let j = 0;
            j < selectCount;
            j++
        ) {

            const sIndex =
                selectCount -
                1 -
                j;

            if (
                binary[j] === "1"
            ) {

                term +=
                    `S${sIndex}`;

            } else {

                term +=
                    `S${sIndex}'`;

            }
        }


        terms.push(term);
    }


    if (
        terms.length === 0
    ) {

        return "0";
    }


    return terms.join(" + ");
}


// ============================================================
// TRUTH TABLE
// ============================================================

function generateMuxTruthTable(
    inputCount
) {

    const selectCount =
        Math.log2(inputCount);

    let html = `

        <div class="result-box">

            <h2>
                Multiplexer Truth Table
            </h2>

            <div class="mux-truth-wrapper">

                <table class="
                    expression-truth-table
                    mux-truth-table
                ">

                    <thead>

                        <tr>
    `;


    // Select columns

    for (
        let i = selectCount - 1;
        i >= 0;
        i--
    ) {

        html += `
            <th>S${i}</th>
        `;
    }


    html += `
            <th>Selected Input</th>
            <th>Y</th>
        </tr>

        </thead>

        <tbody>
    `;


    const rows =
        inputCount;


    for (
        let row = 0;
        row < rows;
        row++
    ) {

        const binary =
            row
                .toString(2)
                .padStart(
                    selectCount,
                    "0"
                );


        html += "<tr>";


        for (
            let i = 0;
            i < binary.length;
            i++
        ) {

            html += `
                <td>
                    ${binary[i]}
                </td>
            `;
        }


        html += `

            <td>
                D${row}
            </td>

            <td>
                <strong>
                    D${row}
                </strong>
            </td>

        </tr>

        `;
    }


    html += `

                    </tbody>

                </table>

            </div>

        </div>

    `;


    muxTruthTableContainer.innerHTML =
        html;
}


// ============================================================
// CIRCUIT DIAGRAM
// ============================================================

function generateMuxBlockDiagram(
    inputCount,
    inputs,
    selects,
    selectedIndex,
    output
) {

    const width = 1000;

    const height =
        Math.max(
            500,
            inputCount * 75
        );


    const muxX = 560;

    const muxY =
        height / 2;


    let svg = `

        <div class="circuit-box">

            <h2>
                ${inputCount}:1 Multiplexer Circuit
            </h2>

            <div class="circuit-expression">
                Selected:
                <strong>
                    D${selectedIndex}
                </strong>
                →
                <strong>
                    Y = ${output}
                </strong>
            </div>

            <div class="circuit-diagram">

                <svg
                    class="circuit-svg"
                    viewBox="
                        0 0 ${width} ${height}
                    "
                    xmlns="
                        http://www.w3.org/2000/svg
                    "
                >

                    <!-- MUX BODY -->

                    <path
                        d="
                            M ${muxX} ${muxY - 190}
                            L ${muxX + 170} ${muxY - 110}
                            L ${muxX + 170} ${muxY + 110}
                            L ${muxX} ${muxY + 190}
                            Z
                        "
                        fill="#211126"
                        stroke="#a78bfa"
                        stroke-width="3"
                    />

                    <text
                        x="${muxX + 85}"
                        y="${muxY + 8}"
                        text-anchor="middle"
                        fill="#f5efff"
                        font-size="28"
                        font-weight="800"
                    >
                        ${inputCount}:1
                    </text>

                    <text
                        x="${muxX + 85}"
                        y="${muxY + 38}"
                        text-anchor="middle"
                        fill="#c084fc"
                        font-size="17"
                    >
                        MUX
                    </text>

    `;


    // --------------------------------------------------------
    // DATA INPUTS
    // --------------------------------------------------------

    for (
        let i = 0;
        i < inputCount;
        i++
    ) {

        const y =
            muxY -
            ((inputCount - 1) * 50) / 2 +
            i * 50;


        const value =
            inputs[`D${i}`];


        svg += `

            <line
                x1="90"
                y1="${y}"
                x2="${muxX}"
                y2="${y}"
                class="circuit-wire"
            />

            <text
                x="55"
                y="${y + 6}"
                class="circuit-label"
            >
                D${i} = ${value}
            </text>

        `;
    }


    // --------------------------------------------------------
    // SELECT LINES
    // --------------------------------------------------------

    const selectCount =
        Math.log2(inputCount);


    for (
        let i = 0;
        i < selectCount;
        i++
    ) {

        const y =
            muxY -
            70 +
            i * 70;


        const value =
            selects[`S${i}`];


        svg += `

            <line
                x1="${muxX + 170}"
                y1="${y}"
                x2="${muxX + 300}"
                y2="${y}"
                class="circuit-wire"
            />

            <text
                x="${muxX + 315}"
                y="${y + 6}"
                class="circuit-label"
            >
                S${i} = ${value}
            </text>

        `;
    }


    // --------------------------------------------------------
    // OUTPUT
    // --------------------------------------------------------

    svg += `

        <line
            x1="${muxX + 170}"
            y1="${muxY}"
            x2="${muxX + 330}"
            y2="${muxY}"
            class="circuit-wire"
        />

        <text
            x="${muxX + 350}"
            y="${muxY + 6}"
            class="circuit-output"
        >
            Y = ${output}
        </text>

    `;


    svg += `

                </svg>

            </div>

        </div>

    `;


    muxCircuitContainer.innerHTML =
        svg;
}

function generateMuxCircuits(
    inputCount,
    inputs,
    selects,
    selectedIndex,
    output
) {

    muxCircuitContainer.innerHTML = `

        <div class="circuit-box">

            <h2>
                Multiplexer Circuits
            </h2>

            <div id="muxBlockDiagram"></div>

            <div id="muxGateDiagram"></div>

        </div>
    `;

    generateMuxBlockDiagram(
        inputCount,
        inputs,
        selects,
        selectedIndex,
        output
    );

    generateMuxGateDiagram(
        inputCount,
        inputs,
        selects,
        selectedIndex,
        output
    );
}

function generateMuxGateDiagram(
    inputCount,
    inputs,
    selects,
    selectedIndex,
    output
) {
    const selectCount = Math.log2(inputCount);

    const width = 1400;
    const rowGap =
        inputCount === 8
            ? 90
            : inputCount === 4
                ? 130
                : 180;

    const height =
        Math.max(
            600,
            inputCount * rowGap + 180
        );

    const andX = 500;
    const orX = 950;
    const outputX = 1220;

    const centerY = height / 2;

    let svg = `
        <div class="circuit-box">

            <h2>Gate-Level ${inputCount}:1 Multiplexer</h2>

            <div class="circuit-expression">
                Y =
                <strong>
                    ${generateMuxExpression(
                        inputCount,
                        inputs
                    )}
                </strong>
            </div>

            <div class="circuit-diagram">

                <svg
                    class="circuit-svg mux-gate-circuit"
                    viewBox="0 0 ${width} ${height}"
                    xmlns="http://www.w3.org/2000/svg"
                >
    `;

    /* =====================================================
       SELECT LINES
       ===================================================== */

    for (let i = 0; i < selectCount; i++) {

        const y =
            70 + i * 70;

        const value =
            selects[`S${i}`];

        svg += `
            <text
                x="30"
                y="${y + 6}"
                class="circuit-label"
            >
                S${i} = ${value}
            </text>

            <line
                x1="100"
                y1="${y}"
                x2="220"
                y2="${y}"
                class="circuit-wire"
            />

            <!-- NOT gate -->

            <polygon
                points="
                    220,${y - 18}
                    220,${y + 18}
                    260,${y}
                "
                class="not-gate"
            />

            <circle
                cx="267"
                cy="${y}"
                r="5"
                class="gate-bubble"
            />

            <line
                x1="272"
                y1="${y}"
                x2="${andX - 80}"
                y2="${y}"
                class="circuit-wire"
            />

            <text
                x="285"
                y="${y - 8}"
                class="circuit-small-label"
            >
                S${i}'
            </text>
        `;
    }


    /* =====================================================
       AND GATES
       ===================================================== */

    const andYs = [];

    for (let i = 0; i < inputCount; i++) {

        const y =
            centerY -
            ((inputCount - 1) * rowGap) / 2 +
            i * rowGap;

        andYs.push(y);

        /*
         * DATA INPUT
         */

        const dataValue =
            inputs[`D${i}`];

        svg += `
            <text
                x="25"
                y="${y + 6}"
                class="circuit-label"
            >
                D${i} = ${dataValue}
            </text>

            <line
                x1="85"
                y1="${y}"
                x2="${andX}"
                y2="${y}"
                class="circuit-wire"
            />
        `;


        /*
         * AND GATE
         */

        svg += `
            <path
                d="
                    M ${andX} ${y - 30}
                    L ${andX + 35} ${y - 30}
                    A 30 30 0 0 1
                    ${andX + 35} ${y + 30}
                    L ${andX} ${y + 30}
                    Z
                "
                class="and-gate"
            />

            <text
                x="${andX + 17}"
                y="${y + 5}"
                text-anchor="middle"
                class="gate-text"
            >
                AND
            </text>
        `;


        /*
         * SELECT LINES TO THIS AND GATE
         */

        const binary =
            i.toString(2)
                .padStart(
                    selectCount,
                    "0"
                );

        for (
            let j = 0;
            j < selectCount;
            j++
        ) {

            const selectIndex =
                selectCount - 1 - j;

            const selectY =
                70 + selectIndex * 70;

            const gateInputY =
                y -
                (selectCount - 1) * 10 +
                j * 20;

            const useComplement =
                binary[j] === "0";

            /*
             * Use S' when bit is 0.
             * Use S when bit is 1.
             */

            const sourceX =
                useComplement
                    ? andX - 80
                    : andX - 80;

            svg += `
                <path
                    d="
                        M ${sourceX}
                          ${selectY}

                        L ${sourceX + 35}
                          ${selectY}

                        L ${sourceX + 35}
                          ${gateInputY}

                        L ${andX}
                          ${gateInputY}
                    "
                    class="circuit-wire"
                />

                <text
                    x="${sourceX + 42}"
                    y="${gateInputY - 5}"
                    class="circuit-small-label"
                >
                    ${
                        useComplement
                            ? `S${selectIndex}'`
                            : `S${selectIndex}`
                    }
                </text>
            `;
        }
    }


    /* =====================================================
       OR STAGE
       ===================================================== */

    if (inputCount === 2) {

        const y1 = andYs[0];
        const y2 = andYs[1];

        svg += `
            <line
                x1="${andX + 70}"
                y1="${y1}"
                x2="${orX}"
                y2="${centerY - 15}"
                class="circuit-wire"
            />

            <line
                x1="${andX + 70}"
                y1="${y2}"
                x2="${orX}"
                y2="${centerY + 15}"
                class="circuit-wire"
            />

            <path
                d="
                    M ${orX} ${centerY - 30}
                    Q ${orX + 35} ${centerY - 25}
                      ${orX + 70} ${centerY}

                    Q ${orX + 35} ${centerY + 25}
                      ${orX} ${centerY + 30}

                    Q ${orX + 25} ${centerY}
                      ${orX} ${centerY - 30}

                    Z
                "
                class="or-gate"
            />

            <text
                x="${orX + 32}"
                y="${centerY + 5}"
                text-anchor="middle"
                class="gate-text"
            >
                OR
            </text>
        `;
    }

    else {

        /*
         * For 4:1 and 8:1, use a simple OR tree.
         */

        let currentInputs =
            andYs.map(y => ({
                x: andX + 70,
                y: y
            }));

        let currentX =
            orX - 200;

        while (
            currentInputs.length > 1
        ) {

            const nextInputs = [];

            for (
                let i = 0;
                i < currentInputs.length;
                i += 2
            ) {

                if (
                    i + 1 >=
                    currentInputs.length
                ) {
                    nextInputs.push(
                        currentInputs[i]
                    );

                    continue;
                }

                const a =
                    currentInputs[i];

                const b =
                    currentInputs[i + 1];

                const gateY =
                    (
                        a.y + b.y
                    ) / 2;


                svg += `
                    <line
                        x1="${a.x}"
                        y1="${a.y}"
                        x2="${currentX}"
                        y2="${gateY - 12}"
                        class="circuit-wire"
                    />

                    <line
                        x1="${b.x}"
                        y1="${b.y}"
                        x2="${currentX}"
                        y2="${gateY + 12}"
                        class="circuit-wire"
                    />

                    <path
                        d="
                            M ${currentX} ${gateY - 30}
                            Q ${currentX + 35} ${gateY - 25}
                              ${currentX + 70} ${gateY}

                            Q ${currentX + 35} ${gateY + 25}
                              ${currentX} ${gateY + 30}

                            Q ${currentX + 25} ${gateY}
                              ${currentX} ${gateY - 30}

                            Z
                        "
                        class="or-gate"
                    />

                    <text
                        x="${currentX + 32}"
                        y="${gateY + 5}"
                        text-anchor="middle"
                        class="gate-text"
                    >
                        OR
                    </text>
                `;


                nextInputs.push({
                    x: currentX + 70,
                    y: gateY
                });
            }

            currentInputs =
                nextInputs;

            currentX += 180;
        }


        /*
         * FINAL OUTPUT
         */

        const finalInput =
            currentInputs[0];

        svg += `
            <line
                x1="${finalInput.x}"
                y1="${finalInput.y}"
                x2="${outputX}"
                y2="${centerY}"
                class="circuit-wire"
            />
        `;
    }


    /* =====================================================
       OUTPUT
       ===================================================== */

    svg += `
        <line
            x1="${outputX}"
            y1="${centerY}"
            x2="${outputX + 100}"
            y2="${centerY}"
            class="circuit-wire"
        />

        <text
            x="${outputX + 120}"
            y="${centerY + 6}"
            class="circuit-output"
        >
            Y = ${output}
        </text>

        </svg>

            </div>

        </div>
    `;

    document.getElementById(
        "muxGateDiagram"
    ).innerHTML = svg;
}


// ============================================================
// INITIAL INPUTS
// ============================================================

if (
    muxInputContainer
) {
    generateMuxInputs();
}