const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


app.post("/api/convert", async (req, res) => {

    try {

        const statement = req.body.statement;

        if (!statement) {

            return res.status(400).json({
                error: "Please enter a logical statement"
            });

        }

        const response = await openai.chat.completions.create({

            model: "gemini-3.7-flash",

            messages: [

                {
                    role: "system",

                    content: `
You are a Boolean algebra expert.

Convert natural language logical statements into Boolean expressions.

Rules:

1. Use capital letters A, B, C, D etc. as variables.
2. Use + for OR.
3. Use adjacent variables for AND.
4. Use ' after a variable for NOT.
5. Use parentheses when necessary.
6. Understand AND, OR, NOT, NAND, NOR, XOR and XNOR.
7. Understand phrases such as:
   - both A and B
   - either A or B
   - neither A nor B
   - A only if B
   - A if and only if B
   - A unless B
8. Return ONLY the Boolean expression.
9. Do not give explanations.
10. Do not use markdown.
`
                },

                {
                    role: "user",

                    content: statement
                }

            ]

        });

        const result =
            response.choices[0].message.content.trim();

        res.json({
            result: result
        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({
            error: "AI conversion failed"
        });

    }

});


app.listen(5000, () => {

    console.log(
        "Backend running on http://localhost:5000"
    );

});